import { useState } from 'react'
import { hf } from '@/services/huggingfaceClient'

interface Message {
	text: string
	sender: 'user' | 'bot'
}

export const useChatbot = () => {
	const [messages, setMessages] = useState<Message[]>([])
	const [loading, setLoading] = useState(false)

	const sendMessage = async (message: string) => {
		const newMessages: Message[] = [...messages, { text: message, sender: 'user' }]
		setMessages(newMessages)
		setLoading(true)

		try {
			const response = await hf.chatCompletion({
				model: 'mistralai/Mistral-7B-Instruct-v0.3',
				messages: [{ role: 'user', content: message }],
				max_tokens: 250,
				temperature: 0.7,
			})

			const botResponse = response.choices[0]?.message?.content || 'No response received'
			setMessages([...newMessages, { text: botResponse, sender: 'bot' }])
		} catch (error) {
			console.error('Fetching API error: ', error)
			setMessages([...newMessages, { text: 'Error: Unable to get response', sender: 'bot' }])
		} finally {
			setLoading(false)
		}
	}

	return { messages, sendMessage, loading }
}
