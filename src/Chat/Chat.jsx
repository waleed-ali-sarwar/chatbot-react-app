import axios from "axios"; // Importing axios for API calls
import { useState } from 'react'; // Importing useState from React for state management
import './Chat.css'; //  CSS 
function Chat() {
  // State to hold the input value
  const [inputValue, setInputValue] = useState("");
  const [clearInput, setClearInput] = useState(false);
  const [answer, setAnswer] = useState("");
  // API key for Google Gemini
  const api_Key = "Your-API-KEY";
  const api_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent";
  // api call function
  async function generate_Answer() {
    setAnswer("Thinking...");
    const res = await axios({
      url: `${api_URL}?key=${api_Key}`,
      method: 'POST',
      data: {
        contents: [
          {
            parts: [
              {
                text: inputValue
              }
            ]
          }
        ]
      }
    });
    setAnswer(res['data']['candidates'][0]['content']['parts'][0]['text']); // print the result
  }

  // Function to clear the input field
  function clear_Button() {
    setInputValue("");
    setClearInput(true);
    setAnswer("");
  }

  // Paste from clipboard function
  async function pasteFromClipboard() {
    try {
      const text = await navigator.clipboard.readText();
      setInputValue(text);
    } catch (err) {
      console.error("Failed to paste: ", err);
    }
  }
  return (
    <>
      <div className="container">
        <div className="chat-reply">
            <pre>
              {answer ? answer : "Ask me anything!"}
            </pre>
        </div>
        <div className="form-control">

          <input
            placeholder='Type your question here...'
            value={inputValue}
            onChange={
              (e) => setInputValue(e.target.value)
            }
            onKeyPress={() => { if (event.key === "Enter") generate_Answer(); }} />

          <button onClick={generate_Answer}>Ask</button>
          <button onClick={clear_Button}>Clear</button>
          <button onClick={pasteFromClipboard}>Paste</button>
        </div>
      </div>
    </>
  );
}
export default Chat;