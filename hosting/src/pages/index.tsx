import Link from "next/link";
import axios from "axios";
import { auth } from "../utils/firebaseClient";
import { onAuthStateChanged } from "firebase/auth";
import Login from "../components/Login";
import { useState } from "react";

export default function IndexPage() {
  const [uid, setUid] = useState("");

  const insertCustomer = async () => {
    await axios.post("/api/customer");
  };

  onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log(user);
      const uid = user.uid;
      setUid(uid);
    } else {
      console.log("no user");
      setUid("");
    }
  });

  return (
    <>
      {uid ? (
        <div>
          Hello World.
          <br />
          <Link href="/about">About</Link>
          <br />
          <button onClick={() => insertCustomer()}>Insert Customer</button>
        </div>
      ) : (
        <>
          <Login />
        </>
      )}
    </>
  );
}
