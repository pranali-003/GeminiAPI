import { createContext , useState} from "react";
import run from '../config/gemini'
export const Context  = createContext();

const ContextProvider = (props)=>{
    // for setting user input 
    const [input, setInput] = useState("");
    // to set recent prompt after clicking on send input button
    const [recentPrompt, setRecentPrompt]  = useState("");
    // to set the prompt history
    const [previousPrompt, setPreviousPrompt] = useState([]);
    // to show the result in sidebar
    const [showResult, setShowResult] = useState(false);
    const [loading, setLoading] =useState(false);
    // to set the output
    const [resultData, setResultData] =useState("");

    // to format the result data
    const delayPara =(index, nextWord)=>{
        setTimeout(function(){
            setResultData(prev => prev+nextWord);
        }, 75*index);
    }

    const newChat =()=>{
        setLoading(false);
        setShowResult(false);
    }


    const onSent = async (prompt) =>{
        setResultData("");
        setLoading(true);
        setShowResult(true);
        let response;
        if(prompt !== undefined){
            response =await  run(prompt);
            setRecentPrompt(prompt);
        }
        else{
            setPreviousPrompt(previous=>[...previous, input]);
            setRecentPrompt(input);
            response = await run(input);
        }
        // to format response data
        let responseArray = response.split("**");
        // whenever the response has ** make that part bold
        let newResponse=" ";
        for(let i=0;i<responseArray.length;i++){
            if(i === 0 || i%2 !== 1){
                newResponse += responseArray[i];
            }else{
                newResponse += "<b>"+responseArray[i]+"</b>";
            }
        }
         // whenever the response has ** make that part on new line
        let newResponse2 = newResponse.split("*").join("<br/>")
        // setResultData(newResponse2);
        let newResponseArray = newResponse2.split(" ");
        for(let i= 0;i<newResponseArray.length;i++){
            const nextWord = newResponseArray[i];
            delayPara(i, nextWord+ " ");
        }
        setLoading(false);
        setInput("");
    }

    // onSent("what is react js");
    const contextValue = {
        previousPrompt,
        setPreviousPrompt,
        onSent,
        setRecentPrompt,
        recentPrompt,
        showResult,
        loading,
        resultData,
        input,
        setInput,
        newChat



    }
return (
    <Context.Provider value = {contextValue}>
        {props.children}
    </Context.Provider>
)

}

export default ContextProvider;
