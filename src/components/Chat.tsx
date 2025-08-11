import { useState } from 'react'
import { LuBot, LuSendHorizontal } from 'react-icons/lu'

const Chat = () => {
	const [input, setInput] = useState('')

	const handleSend = () => {}

	return (
		<div className='flex flex-col h-[80vh] bg-white'>
			<h2 className='p-4 font-semibold text-lg text-center bg-blue-100 flex text-center text-blue-800 justify-center items-center gap-2'>
				AI Assistent <LuBot size={25} />
			</h2>
			<div className='flex-1 overflow-y-auto p-4 space-y-2'> </div>
			<div className='flex items-center p-4 bg-gray-50'>
				<input
					className='p-2 flex-1 border focus:outline-none rounded-lg'
					placeholder='Your message here'
					value={input}
					onChange={(e) => setInput(e.target.value)}
				/>
				<button onClick={handleSend} className='p-2'>
					<LuSendHorizontal size={20} />
				</button>
			</div>
		</div>
	)
}

export default Chat
