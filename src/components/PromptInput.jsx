import React, { useState } from 'react';
import { GoogleGenerativeAI } from "../API/generativeAI";

const API_KEY = process.env.REACT_APP_GEMINI_API_KEY;

export default function PromptInput({UpdateMessages,Loader}) {
    const genAI = new GoogleGenerativeAI(API_KEY);
    const [prompt, setPrompt] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (prompt.trim() === '') {
            console.log('Please enter a prompt.');
            return;
        }
        UpdateMessages({ message: prompt ,isUser:true}); 
        setTimeout(() => {
            Loader(true)
        }, 500);
        run(prompt);
        setPrompt('');
    };

    async function run(prompt) {
        const model = genAI.getGenerativeModel({ model: "gemini-pro" });
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();
        Loader(false)
        UpdateMessages({ message: text ,isUser:false}); 
        // console.log(text);
    }

    return (
        <form onSubmit={handleSubmit} className="relative isolate mt-8 flex items-center pr-1">
            <input
                type="text"
                name="prompt"
                id="prompt"
                className="peer w-0 flex-auto bg-transparent px-4 py-2.5 text-base text-white placeholder:text-gray-500 focus:outline-none sm:text-[0.8125rem]/6"
                placeholder="Enter your prompt"
                value={prompt}
                onChange={(event) => setPrompt(event.target.value)}
            />
            <input type="submit" value="Submit" autocomplete="off" className="group relative isolate flex-none rounded-md  bg-blue-900 py-1.5 text-[0.8125rem]/6 font-semibold text-white px-4" />
          <div className="absolute inset-0 -z-10 rounded-lg transition peer-focus:ring-4 peer-focus:ring-sky-300/15"></div>
          <div className="absolute inset-0 -z-10 rounded-lg bg-white/2.5 ring-1 ring-white/15 transition peer-focus:ring-sky-300"></div>
        </form>
    );
}
