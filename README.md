# AI Assistant

A modern, interactive AI chatbot application built with React, TypeScript, and Vite. This application provides a clean and intuitive interface for users to interact with AI models through Hugging Face's Inference API.

## Live Demo

Visit the production application: [example](https://ai-assistant-blond-two.vercel.app/)

## Features

- **Real-time Chat Interface**: UI with message history
- **AI Integration**: Powered by Hugging Face's Mistral-7B-Instruct model
- **Tech Stack**: Built with React 18, TypeScript, and Vite
- **Design**: Styled with Tailwind CSS
- **Auto-scroll**: Automatic scrolling to latest messages

## Tech Stack

- **Frontend**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **AI Service**: Hugging Face Inference API
- **Icons**: React Icons (Lucide)
- **Linting**: ESLint with TypeScript support

## Usage

1. **Start a conversation**: Type your message in the input field at the bottom
2. **Send message**: Click the send button or press Enter
3. **View AI response**: The AI will respond using the Mistral-7B-Instruct model
4. **Continue chatting**: The conversation history is maintained throughout the session

## ⚙️ Configuration

### AI Model Settings

The application uses Hugging Face's Mistral-7B-Instruct model with the following default parameters:

- **Model**: `mistralai/Mistral-7B-Instruct-v0.3`
- **Max Tokens**: 250
- **Temperature**: 0.7
