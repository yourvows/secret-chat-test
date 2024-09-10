<template>
	<div
		class="flex justify-end"
		:class="[
			message.sender_id == Number(userId) ? 'flex-row-reverse' : 'flex-row'
		]"
	>
		<div
			class="bg-blue-600 w-fit py-0.5 px-3"
			:class="[
				message.sender_id == Number(userId)
					? 'bg-green-600 rounded-tr-xl rounded-br-lg rounded-tl-lg'
					: 'bg-blue-600 rounded-tl-xl rounded-bl-lg rounded-tr-lg'
			]"
		>
			<h2 class="text-white text-right font-bold">{{ message.sender_name }}</h2>
			<p class="text-white leading-none">{{ message.message }}</p>
			<p class="text-gray-400 text-right">
				{{ convertToTime(message.created_date) }}
			</p>
		</div>
	</div>
</template>
<script setup lang="ts">
defineProps<{
	message: IMessage
}>()

const userId = import.meta.env.VITE_USER_ID

function convertToTime(input: string) {
	const timeMatch = input.match(/T(\d{2}:\d{2})/)

	if (timeMatch) return timeMatch[1]

	return null
}
</script>

<style scoped></style>
