"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Đang gửi...");

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      setStatus("Gửi thành công! Cảm ơn bạn đã liên hệ.");
      setFormData({ name: "", email: "", phone: "", message: "" });
    } else {
      setStatus("Có lỗi xảy ra, vui lòng thử lại.");
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-8 bg-gradient-to-br from-white to-[var(--secondary)/5] rounded-3xl shadow-[0_8px_25px_-5px_rgba(0,0,0,0.1)] border border-gray-200 backdrop-blur-sm">
  <form onSubmit={handleSubmit} className="flex flex-col gap-5">
    <input
      name="name"
      type="text"
      required
      placeholder="Họ và tên"
      value={formData.name}
      onChange={handleChange}
      className="border border-gray-300 focus:border-[var(--secondary)] p-3 rounded-xl shadow-inner focus:shadow-[0_0_0_3px_rgba(0,0,0,0.05)] outline-none transition-all duration-200"
    />
    <input
      name="email"
      type="email"
      required
      placeholder="Email"
      value={formData.email}
      onChange={handleChange}
      className="border border-gray-300 focus:border-[var(--secondary)] p-3 rounded-xl shadow-inner focus:shadow-[0_0_0_3px_rgba(0,0,0,0.05)] outline-none transition-all duration-200"
    />
    <input
      name="phone"
      type="tel"
      placeholder="Số điện thoại (nếu có)"
      value={formData.phone}
      onChange={handleChange}
      className="border border-gray-300 focus:border-[var(--secondary)] p-3 rounded-xl shadow-inner focus:shadow-[0_0_0_3px_rgba(0,0,0,0.05)] outline-none transition-all duration-200"
    />
    <textarea
      name="message"
      required
      placeholder="Nội dung liên hệ"
      value={formData.message}
      onChange={handleChange}
      className="border border-gray-300 focus:border-[var(--secondary)] p-3 rounded-xl h-32 resize-none shadow-inner focus:shadow-[0_0_0_3px_rgba(0,0,0,0.05)] outline-none transition-all duration-200"
    />

    <button
      type="submit"
      className="bg-[var(--secondary)] text-white py-3 rounded-xl font-semibold tracking-wide hover:bg-opacity-90 hover:scale-105 transition-all duration-300 shadow-md shadow-[var(--secondary)/40] active:scale-95"
    >
    Gửi liên hệ
    </button>
  </form>

  {status && (
    <p
      className={`text-center mt-5 text-sm font-medium ${
        status.includes("thành công")
          ? "text-green-600"
          : status.includes("lỗi")
          ? "text-red-500"
          : "text-gray-500"
      }`}
    >
      {status}
    </p>
  )}
</div>

  );
}
