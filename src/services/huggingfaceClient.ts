import { InferenceClient } from '@huggingface/inference'

export const hf = new InferenceClient(import.meta.env.VITE_AI_API_KEY)
