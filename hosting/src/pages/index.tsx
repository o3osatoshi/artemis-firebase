import Link from "next/link";
import axios from "axios";
import { auth } from "../utils/firebaseClient";
import { onAuthStateChanged, signOut } from "firebase/auth";
import Login from "../components/Login";
import { useState } from "react";

export default function IndexPage() {
  const [uid, setUid] = useState("");

  const insertCustomer = async () => {
    await axios.post("/api/customer");
  };

  const logout = async () => {
    signOut(auth)
      .then(() => {
        console.log("logout");
      })
      .catch((error) => {
        console.log(error);
      });
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
          <button
            className={
              "bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
            }
            onClick={() => logout()}
          >
            Logout
          </button>
          <br />
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
