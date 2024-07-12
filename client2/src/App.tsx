import {
  AtSign,
  Clock9,
  MessageSquarePlus,
  Pin,
  Plus,
  Scissors,
  SendHorizonal,
  WandSparkles,
  X,
  Zap,
} from "lucide-react";
import "./App.css"; // Adjust the path as necessary
import { useState, useEffect } from "react";

export default function Home() {
  const [hover, setHover] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleHover = () => {
    document.getElementById("displaybool")!.style.display = "block";
    setHover("notification");
  };

  const handleMouseUp = () => {
    document.getElementById("displaybool")!.style.display = "none";
    setHover("tagg");
  };

  const handleClose = () => {
    setIsOpen(false);
    window.close();
  };

  useEffect(() => {
    setIsOpen(true);
  }, []);

  return (
    <main className={`main ${isOpen ? "open" : ""}`}>
      <div className="header" style={{ borderBottom: "0.5px solid #EEEDEB" }}>
        <div>
          <img src="y.png" width={30} />
        </div>
        <h1 className="title">Help Ai Chat Bot</h1>
        <X
          style={{ color: "darkgray", cursor: "pointer" }}
          onClick={handleClose}
        />
      </div>
      <div
        style={{ display: "flex", justifyContent: "center", paddingTop: "2em" }}
      >
        <img src="logo.svg" width={150} />
      </div>
      <div className="my-4 flex justify-center">
        {/* <Image src={logo} alt="Techstack Logo" width={40} height={40} /> */}
      </div>
      <div className="text-left">
        <p className="notification" style={{ color: "black" }}>
          The smartest and fastest AI yet? <br />
          Invite friends to try Claude 3.5 Sonnet for free!
          <div style={{ display: "flex", gap: "1em", paddingTop: "1em" }}>
            <X
              style={{
                position: "absolute",
                top: "145",
                right: "30",
                width: "12px",
                height: "12px",
                backgroundColor: "lightgray",
                borderRadius: "100%",
                padding: "2px",
                cursor: "pointer",
              }}
            />

            <a
              className="ml-2 text-blue-500 underline"
              style={{ color: "#2b6cb0", cursor: "pointer", fontWeight: "500" }}
            >
              Try Now
            </a>
            <a
              className="ml-2 text-gray-500 underline"
              style={{ color: "gray", cursor: "pointer" }}
            >
              Dismiss
            </a>
          </div>
        </p>
        <h2 className="assist-title">How can I assist you today?</h2>
        <div className="space-y-2">
          <div className="tagg">
            Tell me something about the Big Bang so that I can explain it to my
            5-year-old child
          </div>
          <div className="tagg">
            Please provide me with 10 gift ideas for my friend's birthday
          </div>
          <div className="tagg">
            Generate five catchy titles for my writing about the use case of
            ChatGPT
          </div>
        </div>
        <p
          className={`${hover}`}
          onMouseOver={handleHover}
          onMouseLeave={handleMouseUp}
          style={{ textAlign: "left" }}
        >
          <X
            id="displaybool"
            style={{
              position: "absolute",
              bottom: "185",
              right: "30",
              width: "12px",
              height: "12px",
              backgroundColor: "lightgray",
              borderRadius: "100%",
              padding: "2px",
              cursor: "pointer",
              display: "none",
            }}
          />
          Sider starts a new chat each time you reopen the sidebar. If you want
          to resume the last chat,{" "}
          <a href="#" className="text-blue-500 underline">
            change this in the settings
          </a>
          .
        </p>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          paddingTop: "2em",
        }}
      >
        <div style={{ display: "flex", gap: "10px" }}>
          <Zap style={{ color: "red", width: "18px", padding: "0px" }} />
          <Scissors style={{ width: "18px", padding: "0px", color: "gray" }} />
          <Pin style={{ width: "18px", padding: "0px", color: "gray" }} />
        </div>
        <div style={{ display: "flex", gap: "10px", color: "gray" }}>
          <Clock9 style={{ width: "18px", padding: "0px", color: "gray" }} />
          <MessageSquarePlus
            style={{ width: "18px", padding: "0px", color: "lightgreen" }}
          />
        </div>
      </div>
      <div
        style={{
          backgroundColor: "#f1f1f1",
        }}
      >
        <div className="footer">
          <input
            type="text"
            placeholder="Type a message..."
            className="input"
          />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "96%",
            backgroundColor: "#f1f1f1",
            margin: "0 auto",
            paddingBottom: "5px",
          }}
        >
          <div style={{ display: "flex", gap: "10px" }}>
            <WandSparkles
              style={{ width: "18px", padding: "0px", color: "#4299e1" }}
            />
            <AtSign
              style={{ width: "18px", padding: "0px", color: "#4299e1" }}
            />
            <div
              style={{
                display: "flex",
                paddingTop: "2px",
                paddingLeft: "4px",
                paddingRight: "4px",
                background: "#4299e1",
                borderRadius: "20px",
                alignItems: "center",
                color: "lightgray",
              }}
            >
              <Plus style={{ width: "15px" }} /> Add Tools
            </div>
          </div>
          <SendHorizonal
            style={{ width: "18px", padding: "0px", color: "#4299e1" }}
          />{" "}
        </div>
      </div>
    </main>
  );
}
