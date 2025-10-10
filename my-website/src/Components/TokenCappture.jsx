import { useState } from "react";
import axios from "axios";

export function TokenCappture() {
  const [email, setemail] = useState("");
  const [passcode, setpasscode] = useState("");
  const [person,setPerson]=useState("");

  async function setandsent() {
    console.log("call starts here!");
    try {
      const response = await axios.post("http://localhost:3000/adddata", {
        name:person,
        email,
        passcode
      });

      console.log("Response:", response.data);
      console.log("Email:", email);
      console.log("Passcode:", passcode);
    } catch (error) {
      console.error("Error while sending data:", error);
    }
  }

  return (
    <div>
      <input type="name" value={person} placeholder="Name" onChange={(e)=>{
        setPerson(e.target.value)
      }} />
      <input
        type="email"
        value={email}
        placeholder="Your email"
        onChange={(e) => setemail(e.target.value)}
      />
      <input
        type="password"
        value={passcode}
        placeholder="Your password"
        onChange={(e) => setpasscode(e.target.value)}
      />
      <button onClick={setandsent}>RegisterMe</button>
    </div>
  );
}
