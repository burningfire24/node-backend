import { useState } from "react";
import axios from "axios";

export function TokenCappture() {
  const [email, setEmail] = useState("");
  const [passcode, setPasscode] = useState("");
  const [person, setPerson] = useState("");
  const [outputValue, setOutputValue] = useState(""); // ✅ added

  async function setAndSend() {
    console.log("call starts here!");
    try {
      const response = await axios.post("http://localhost:3000/adddata", {
        name: person,
        email,
        passcode,
      });

      console.log("Response:", response.data);
      console.log("Email:", email);
      console.log("Passcode:", passcode);

      // ✅ set output value from backend response or custom message
      setOutputValue(`${response.data.response[2].name}`);
    } catch (error) {
      console.error("Error while sending data:", error);
      setOutputValue("❌ Failed to send data. Please try again.");
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <h2 className="text-xl font-bold mb-4">Be the part of something Great!!</h2>

      <input
        type="text"
        value={person}
        placeholder="Name"
        onChange={(e) => setPerson(e.target.value)}
        className="border p-2 m-1 rounded w-64"
      />
      <br />
      <input
        type="email"
        value={email}
        placeholder="Your email"
        onChange={(e) => setEmail(e.target.value)}
        className="border p-2 m-1 rounded w-64"
      />
      <br />
      <input
        type="password"
        value={passcode}
        placeholder="Your password"
        onChange={(e) => setPasscode(e.target.value)}
        className="border p-2 m-1 rounded w-64"
      />
      <br />
      <button
        onClick={setAndSend}
        className="bg-blue-500 text-white px-4 py-2 m-2 rounded hover:bg-blue-600"
      >
        Register Me
      </button>
      <br />
      {outputValue && (
        <div className="mt-4 p-3 bg-white shadow rounded w-64 text-center">
          <strong>Output:</strong> {outputValue}
        </div>
      )}
    </div>
  );
}
