import Layout from "../Layouts/layout1";
import PromptInput from "../components/PromptInput";
import Messagebubble from "../components/Message";
import React, { useState , useEffect } from 'react';

export default function Home() {
    const [messages, setMessages] = useState([]);
    const [showLoader, setshowLoader] = useState(false);

    function setMessage(data) {
        const newMessage = {
            isUser: data.isUser,
            message: data.message,
        };
        setMessages(prevMessages => [...prevMessages, newMessage]);
    }
    function updateLoader(e){
        setshowLoader(e)
    }
    return (
        <Layout>
           <div className="flex flex-col justify-between min-h-screen bg-">
            <div className="messages  h-[calc(100svh-150px)] overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 container">
                {messages.map((msg, index) => (
                <Messagebubble key={index} isUser={msg.isUser} message={msg.message} />
                ))}
                {showLoader && (
                    <Messagebubble key='0' isUser={false} message={'Loading...'} />
                )}
            </div>
            <div className="sticky bottom-2 mx-auto w-2/3">
                <PromptInput UpdateMessages={setMessage} Loader={updateLoader} />
            </div>
            </div>
        </Layout>
    );
}