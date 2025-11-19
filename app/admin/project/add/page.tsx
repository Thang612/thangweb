"use client"

import { auth, db } from "@/lib/firebase/config";
import { Input, Textarea } from "@headlessui/react";
import { onAuthStateChanged } from "firebase/auth";
import { addDoc, collection } from "firebase/firestore";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function AddProject() {
  const router = useRouter();

  // State cho input
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [goal, setGoal] = useState("");
  const [solution, setSolution] = useState("");
  const [technology, setTechnology] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Kiểm tra đăng nhập
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        router.push("/login");
      }
    });
    return () => unsubscribe();
  }, [router]);

  const addProject = async () => {
    setError("");
    if (!name || !description) {
      setError("Tên dự án và mô tả không được để trống!");
      return;
    }
    setLoading(true);

    try {
      await addDoc(collection(db, "projects"), {
        name,
        description,
        goal,
        solution,
        technology,
        result,
        createdAt: new Date(),
        createdBy: auth.currentUser?.uid || null,
      });
    } catch (err) {
      console.log(err);
      setError("Có lỗi xảy ra khi lưu dự án!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mx-auto mt-10 p-8">
      <h1 className="text-3xl font-semibold text-white mb-6">Thêm dự án mới</h1>

      {error && <div className="text-red-400 mb-4">{error}</div>}

      {/* Tên dự án */}
      <div className="mb-6">
        <label className="block text-lg text-neutral-300 mb-2">Tên dự án</label>
        <Input
          className="w-full py-3 px-4 bg-gray-800 text-neutral-200 rounded-lg border border-neutral-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      {/* Mô tả */}
      <div className="mb-6">
        <label className="block text-lg text-neutral-300 mb-2">Mô tả ngắn</label>
        <Textarea
          rows={4}
          className="w-full py-3 px-4 bg-gray-800 text-neutral-200 rounded-lg border border-neutral-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      <hr className="border-gray-800 my-8" />

      <div className="flex gap-5 w-full">
        <div className="w-1/2">
          {/* Mục tiêu */}
          <div className="mb-6">
            <label className="block text-lg text-neutral-300 mb-2">Mục tiêu</label>
            <Input
              className="w-full py-3 px-4 bg-gray-800 text-neutral-200 rounded-lg border border-neutral-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={goal}
              onChange={(e) => setGoal(e.target.value)}
            />
          </div>

          {/* Giải pháp */}
          <div className="mb-6">
            <label className="block text-lg text-neutral-300 mb-2">Giải pháp</label>
            <Input
              className="w-full py-3 px-4 bg-gray-800 text-neutral-200 rounded-lg border border-neutral-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={solution}
              onChange={(e) => setSolution(e.target.value)}
            />
          </div>
        </div>

        <div className="w-1/2">
          {/* Công nghệ */}
          <div className="mb-6">
            <label className="block text-lg text-neutral-300 mb-2">Công nghệ sử dụng</label>
            <Input
              className="w-full py-3 px-4 bg-gray-800 text-neutral-200 rounded-lg border border-neutral-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={technology}
              onChange={(e) => setTechnology(e.target.value)}
            />
          </div>

          {/* Kết quả */}
          <div className="mb-6">
            <label className="block text-lg text-neutral-300 mb-2">Kết quả</label>
            <Input
              className="w-full py-3 px-4 bg-gray-800 text-neutral-200 rounded-lg border border-neutral-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={result}
              onChange={(e) => setResult(e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* Nút lưu */}
      <button
        onClick={addProject}
        disabled={loading}
        className={`mt-4 w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-semibold transition ${
          loading ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        {loading ? "Đang lưu..." : "Lưu dự án"}
      </button>
    </div>
  );
}
