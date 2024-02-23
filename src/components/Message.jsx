import ReactMarkdown  from 'react-markdown';
import rehypeHighlight from 'rehype-highlight';
export default function Messagebubble({isUser,message}){
    return (
        <>
        <div className="flex bg-slate-700 rounded  text-white px-4 py-1 my-1 gap-2">
            <div className="profileImg rounded h-5">
                <img src={isUser == true ? '/assets/User.png' :'/assets/Gennie.png'} alt="" className="h-12"/>
            </div>
            <div className="message">
                <p className="font-bold">{isUser == true ? 'You' : 'Gen-E'}</p>
                <ReactMarkdown rehypePlugins={[rehypeHighlight]} >{message}</ReactMarkdown >
            </div>
        </div>
        </>
    )
}