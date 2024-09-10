import { ref, onMounted, onUnmounted } from 'vue'

export function useChat(token: string) {
	const socket = ref<WebSocket | null>(null)
	const messages = ref<IMessage[]>([])
	const isConnected = ref(false)

	const sendEvent = (
		action: TMessage['action'],
		payload: TMessage['payload'],
		query?: { page: number; page_size: number }
	) => {
		if (socket.value && isConnected.value) {
			const message = {
				action,
				payload,
				query
			}
			socket.value.send(JSON.stringify(message))
		}
	}

	onMounted(() => {
		socket.value = new WebSocket(`ws://5.182.26.58:4321/ws/web?token=${token}`)

		socket.value.onopen = () => {
			isConnected.value = true
			sendEvent('get_private_chat_message', { chat_room_id: 2 })
			sendEvent('get_private_chat_list', { chat_room_id: 2 })
		}

		socket.value.onmessage = event => {
			const { data, action } = JSON.parse(event.data)

			if (action === 'send_message_to_chat') {
				messages.value.push(data)
			}
			console.log('Message received:', JSON.parse(event.data))
		}

		socket.value.onerror = error => {
			console.error('WebSocket Error:', error)
		}

		socket.value.onclose = () => {
			isConnected.value = false
			console.log('WebSocket connection closed')
		}
	})

	onUnmounted(() => {
		if (socket.value) {
			socket.value.close()
		}
	})

	return {
		sendEvent,
		messages,
		isConnected
	}
}
