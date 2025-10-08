import { useState } from "react";
import axios from "axios";

export function TokenCappture() {
  const [email, setemail] = useState("");
  const [passcode, setpasscode] = useState("");

  async function setandsent() {
    console.log("call starts here!");
    console.log("Email:", email);
    console.log("Passcode:", passcode);

    try {
      const response = await axios.post("http://localhost:3000/adddata", {
        name: "brishke",
        email,
        passcode,
        link: "http://google.com",
      });

      console.log("Response:", response.data);
    } catch (error) {
      console.error("Error while sending data:", error);
    }
  }

  return (
    <div>
      <input
        type="email"
        value={email}
        onChange={(e) => setemail(e.target.value)}
      />
      <input
        type="password"
        value={passcode}
        onChange={(e) => setpasscode(e.target.value)}
      />
      <button onClick={setandsent}>RegisterMe</button>
    </div>
  );
}
