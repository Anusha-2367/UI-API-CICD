import { useState } from "react";
import "./App.css";

function App() {
  const [message, setMessage] = useState("");

  const getMessage = async () => {
    try {
      const response = await fetch("https://api-appservice.azurewebsites.net/api/message")

      if (!response.ok) {
        throw new Error("API request failed");
      }

      const data = await response.text();
      setMessage(data);
    } catch (error) {
      setMessage("Unable to connect to API");
      console.error(error);
    }
  };

  return (
    <div className="container">
      <h1>UI + API CI/CD Demo</h1>

      <button onClick={getMessage}>
        Get Message From API
      </button>

      {message && (
        <p className="message">
          {message}
        </p>
      )}
    </div>
  );
}

export default App;