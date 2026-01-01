import { useState } from "react";
import { useRouter } from "next/router";

export default function Login() {
  const [email, setEmail] = useState("");
  const router = useRouter();

  const handleLogin = () => {
    if (!email) return alert("Enter your email");
    localStorage.setItem("user_email", email);
    router.push("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold text-center">
          Access Financial Decision AI
        </h1>

        <input
          type="email"
          placeholder="Your email"
          className="w-full border p-3 rounded mt-6"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button
          onClick={handleLogin}
          className="w-full bg-black text-white py-3 rounded mt-6"
        >
          Access Dashboard
        </button>
      </div>
    </div>
  );
}
