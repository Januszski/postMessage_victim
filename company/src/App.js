import React, { useEffect } from "react";
import "./App.css";

function App() {
  useEffect(() => {
    // Listen for messages from the attacker app
    window.addEventListener("message", (event) => {
      // Optionally check the origin of the message
      console.log("Received message from attacker app:", event.data);
      //alert(`Message from attacker app: ${event.data}`);
    });
  }, []);

  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Company App</h1>
        <p>This is your imitation company app running on localhost:3002.</p>
      </header>
    </div>
  );
}

export default App;
