// declare interface IMessage {
// 	action:
// 		| 'get_private_chat_list'
// 		| 'send_message_to_chat'
//
// 	payload: {
// 		chat_room_id: number
// 		message?: string
// 		reply_message?: {
// 			id: number
// 			message_unique_id: number
// 			message: string
// 			sender_id: number
// 		} | null
// 	}
// 	query: {
// 		// если нужно
// 		// page: number;
// 		// page_size: number;
// 	}
// }

declare interface IChatMessage {
	action: 'get_private_chat_message'
	payload: {
		chat_room_id: number
	}
}

declare interface IChatSendMessage {
	action: 'send_message_to_chat'
	payload: {
		chat_room_id: number
		message: string
		reply_message?: {
			id: number
			message_unique_id: number
			message: string
			sender_id: number
		} | null
	}
}
declare interface IChatList {
	action: 'get_private_chat_list'
	payload: {
		chat_room_id: number
	}
}

declare type TMessage = IChatMessage | IChatSendMessage | IChatList

interface IMessage {
	chat_room_id: number
	message: string
	created_date: string
	sender_id: number
	sender_name: string
	reply_message: string | null
	message_unique_id: string
	message_type: 'text'
}
