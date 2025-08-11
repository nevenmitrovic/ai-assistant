import { useChatbot } from '@/hooks/useChatbot'
import { useChatScroll } from '@/hooks/useChatScroll'
import { useState } from 'react'
import { LuBot, LuSendHorizontal } from 'react-icons/lu'

const Chat = () => {
	const [input, setInput] = useState('')
	const { messages, sendMessage, loading } = useChatbot()
	const scrollRef = useChatScroll(messages)

	const handleSend = (e: React.FormEvent) => {
		e.preventDefault()
		if (input.trim()) {
			sendMessage(input)
			setInput('')
		}
	}

	return (
		<div className='flex flex-col h-[80vh] bg-white'>
			<h2 className='p-4 font-semibold text-lg text-center bg-blue-100 flex text-center text-blue-800 justify-center items-center gap-2'>
				AI Assistant <LuBot size={25} />
			</h2>
			<div ref={scrollRef} className='flex-1 overflow-y-auto p-4 space-y-2'>
				{messages.map((message, index) => {
					return (
						<div
							key={index}
							className={`p-3 rounded-lg max-w-xs ${
								message.sender === 'user'
									? 'bg-blue-500 text-white ml-auto'
									: 'bg-gray-500 text-gray-800'
							}`}
						>
							{message.text}
						</div>
					)
				})}
			</div>
			<form className='flex items-center p-4 bg-gray-50' onSubmit={handleSend}>
				<input
					className='p-2 flex-1 border focus:outline-none rounded-lg'
					placeholder={loading ? 'Sending...' : 'Your message here'}
					disabled={loading}
					value={input}
					onChange={(e) => setInput(e.target.value)}
				/>
				<button type='submit' className='p-2' disabled={loading}>
					<LuSendHorizontal size={20} />
				</button>
			</form>
		</div>
	)
}

export default Chat
