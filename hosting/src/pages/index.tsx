import Link from "next/link";
import axios from "axios";

export default function IndexPage() {
  const insertCustomer = async () => {
    await axios.post("/api/customer");
  };

  return (
    <div>
      Hello World. <Link href="/hosting/src/pages/about">About</Link>
      <button onClick={() => insertCustomer()}>Insert Customer</button>
    </div>
  );
}
