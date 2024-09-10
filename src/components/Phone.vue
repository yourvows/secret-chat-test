<template>
	<div
		class="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px]"
	>
		<div
			class="h-[32px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -start-[17px] top-[72px] rounded-s-lg"
		/>
		<div
			class="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -start-[17px] top-[124px] rounded-s-lg"
		/>
		<div
			class="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -start-[17px] top-[178px] rounded-s-lg"
		/>
		<div
			class="h-[64px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -end-[17px] top-[142px] rounded-e-lg"
		/>
		<div
			class="flex justify-between flex-col rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white dark:bg-gray-800"
		>
			<p class="text-center text-[1.5rem] font-bold bg-white text-black">
				Private Chat
			</p>
			<div class="h-full my-2 overflow-y-auto scrollbar-hide space-y-1">
				<Message
					v-for="message in messages"
					:key="message.sender_id"
					:message
				/>
			</div>
			<div class="bg-white p-3 flex justify-between">
				<textarea
					v-model="text"
					class="outline-none overflow-auto scrollbar-hide resize-none leading-none"
					placeholder="Enter your message"
					@keydown.enter="handleSend"
				/>
				<button
					class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg"
					@click="handleSend"
				>
					Send
				</button>
			</div>
		</div>
	</div>
</template>
<script setup lang="ts">
import { useChat } from '@/composables/useChat'
import { onMounted, ref } from 'vue'
import Message from '@/components/Message.vue'

const props = defineProps<{
	token: string
}>()

const text = ref('')
const { sendEvent, messages } = useChat(props.token)

function handleSend(e: Event) {
	if (e) e.preventDefault()
	if (!text.value) return

	sendEvent('send_message_to_chat', {
		chat_room_id: 2,
		message: text.value,
		reply_message: null
	})
	text.value = ''
}

onMounted(() => {
	setTimeout(() => {}, 1000)
})
</script>
