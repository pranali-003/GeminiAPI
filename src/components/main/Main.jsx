import React, { useContext } from "react";
import "./main.css";
import PersonIcon from "@mui/icons-material/Person";
import ExploreIcon from "@mui/icons-material/Explore";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";
import CodeIcon from "@mui/icons-material/Code";
import MessageIcon from "@mui/icons-material/Message";
import AttachmentIcon from "@mui/icons-material/Attachment";
import SendIcon from "@mui/icons-material/Send";
import MicIcon from "@mui/icons-material/Mic";
import { Context } from "../../context/Context";
import icon from "../../assets/icon.jpeg";

const Main = () => {
  const {
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    setInput,
    input,
  } = useContext(Context);
  return (
    <div className="main">
      <div className="nav">
        <p>Gemini</p>
        <PersonIcon />
      </div>
      <div className="main-container">
        {!showResult ? (
          <>
            <div className="greet">
              <p>
                <span>Hello, Pranali</span>
              </p>
              <p>How can I help you Today ?</p>
            </div>

            <div className="cards">
              <div className="card">
                <p>Suggest beautiful places to see on an upcoming road trip.</p>
                <ExploreIcon className="card-icon" />
              </div>
              <div className="card">
                <p>Breifly summarize this concept urban planning.</p>
                <TipsAndUpdatesIcon className="card-icon" />
              </div>
              <div className="card">
                <p>Brainstorm tem bonding activities, for our wrk retreat.</p>
                <CodeIcon className="card-icon" />
              </div>
              <div className="card">
                <p>Improve the readability of the following code.</p>
                <MessageIcon className="card-icon" />
              </div>
            </div>
          </>
        ) : (
          <div className="result">
            <div className="result-title">
              <PersonIcon className="user-icon" />
              <p>{recentPrompt}</p>
            </div>

            <div className="result-data">
              <img
                src={icon}
                style={{ width: "20px", height: "20px" }}
                alt=""
              />
              {loading ? (
                <div className="loader">
                  <hr />
                  <hr />
                  <hr />
                </div>
              ) : (
                <p dangerouslySetInnerHTML={{ __html: resultData }} />
              )}
            </div>
          </div>
        )}
        <div className="main-bottom">
          <div className="search-box">
            <input
              onChange={(e) => setInput(e.target.value)}
              value={input}
              type="text"
              placeholder="Enter your prompt here"
            />
            <div>
              <AttachmentIcon className="bottom-icon" />
              <MicIcon className="bottom-icon" />
              <SendIcon onClick={() => onSent()} className="bottom-icon" />
            </div>
          </div>
          <p className="bottom-info">
            Gemini may display inaccurate info, including about people, so
            double-check its responses. Your privacy and Gemini Apps.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
