"use client";

import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/lib/firebase/config"; // nếu bạn export app, không thì bỏ dòng này
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter()

  const handleLogin = async () => {
    setError("");

    try {
      await signInWithEmailAndPassword(auth, email, password);
      // Chuyển vào admin
      router.push("/admin")
    } catch (err) {
      setError("Email hoặc mật khẩu không đúng!");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center ">
      <div className="bg-gray-800 p-8 rounded-xl border border-neutral-700 w-full max-w-md shadow-xl">

        <h1 className="text-3xl font-semibold text-white text-center mb-6">
          Đăng nhập Admin
        </h1>

        {/* Email */}
        <label className="text-neutral-300 text-sm">Email</label>
        <input
          type="email"
          className="w-full mb-4 mt-1 px-3 py-2 bg-neutral-700 text-white rounded-lg outline-none border border-neutral-600 focus:ring-2 focus:ring-indigo-500"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        {/* Password */}
        <label className="text-neutral-300 text-sm">Mật khẩu</label>
        <input
          type="password"
          className="w-full mb-4 mt-1 px-3 py-2 bg-gray-700 text-white rounded-lg outline-none border border-neutral-600 focus:ring-2 focus:ring-indigo-500"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {/* Lỗi */}
        {error && (
          <div className="text-red-400 text-sm mb-3">
            {error}
          </div>
        )}

        {/* Button */}
        <button
          onClick={handleLogin}
          className="w-full py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-semibold transition"
        >
          Đăng nhập
        </button>   
      </div>
    </div>
  );
}
