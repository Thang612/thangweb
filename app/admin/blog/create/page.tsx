"use client"
import RichTextEditor, { RichTextEditorHandle } from "@/app/components/richtext";
import Image from "next/image";
import { useState, DragEvent, useRef } from "react";

interface Blog {
    img: string,
    title: string,
    url: string,
    content: string,
    category: string,
}


export default function CreateBlog() {
    const [avtBlog, setAvtBlog] = useState("")
    const [title, setTitle] = useState("")
    const [selected, setSelected] = useState("option1");

// ref cho RichTextEditor
  const editorRef = useRef<RichTextEditorHandle>(null);

    // Hàm tạo blog
    const createBlog = () => {
        const blog: Blog = {
            img: avtBlog,
            title: title,
            url: title.toLowerCase()
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g, "")
                .replace(/[^a-z0-9\s-]/g, "")
                .trim()
                .replace(/\s+/g, "-"),
            content: editorRef.current?.getContent() || "",
            category: selected,
        };

        console.log("Blog đã tạo:", blog);
        // TODO: gửi blog lên server hoặc lưu vào database
    }

    const options = [
        { label: "Option 1", value: "option1" },
        { label: "Option 2", value: "option2" },
        { label: "Option 3", value: "option3" },
    ];

    // Xử lý kéo thả
    const handleDrop = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            const file = e.dataTransfer.files[0];
            setAvtBlog(URL.createObjectURL(file));
        }
    };

    const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault(); // bắt buộc để drop được
    };

    return (
        <div className="container mx-auto mt-10 px-4">
            <div className="flex flex-col md:flex-row gap-10">
                {/* Left column: Avatar & Category */}
                <div className="md:w-1/3 flex flex-col gap-6">
                    {/* Avatar */}
                    <div>
                        <h2 className="font-bold mb-3 text-lg">Ảnh đại diện</h2>
                        <div
                            className="w-full h-64 p-3 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center cursor-pointer relative overflow-hidden hover:border-[var(--secondary)] transition"
                            onDrop={handleDrop}
                            onDragOver={handleDragOver}
                        >
                            {avtBlog ? (
                                <Image
                                    src={avtBlog}
                                    alt="avatar"
                                    fill
                                    className="object-cover rounded-lg"
                                />
                            ) : (
                                <div className="flex flex-col items-center gap-2 text-gray-400">
                                    <svg className="w-14 h-14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M16 20.2476L20.2374 16M13 3H8.2C7.0799 3 6.51984 3 6.09202 3.21799C5.71569 3.40973 5.40973 3.71569 5.21799 4.09202C5 4.51984 5 5.0799 5 6.2V17.8C5 18.9201 5 19.4802 5.21799 19.908C5.40973 20.2843 5.71569 20.5903 6.09202 20.782C6.51984 21 7.0799 21 8.2 21H12M13 3L19 9M13 3V7.4C13 7.96005 13 8.24008 13.109 8.45399C13.2049 8.64215 13.3578 8.79513 13.546 8.89101C13.7599 9 14.0399 9 14.6 9H19M19 9V11M21 18C21 19.6569 19.6569 21 18 21C16.3431 21 15 19.6569 15 18C15 16.3431 16.3431 15 18 15C19.6569 15 21 16.3431 21 18Z" stroke="#99a1af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    <p className="text-center text-sm">Kéo thả ảnh vào đây hoặc click để chọn</p>
                                </div>
                            )}
                            <input
                                type="file"
                                accept="image/png, image/webp, image/jpeg"
                                className="absolute w-full h-full opacity-0 cursor-pointer"
                                onChange={(e) => {
                                    if (e.target.files && e.target.files[0]) {
                                        const file = e.target.files[0];
                                        setAvtBlog(URL.createObjectURL(file));
                                    }
                                }}
                            />
                        </div>
                    </div>

                    {/* Category */}
                    <div>
                        <h2 className="font-bold mb-2 text-lg">Danh mục</h2>
                        <div className="flex flex-col gap-2">
                            {options.map((option) => (
                                <label
                                    key={option.value}
                                    className={`flex items-center p-2 border rounded-lg cursor-pointer transition
                            ${selected === option.value
                                            ? "bg-gray-200 text-gray-900 border-gray-400" // khi chọn: xám nhẹ
                                            : "bg-white text-gray-700 border-gray-300 hover:border-gray-400" // chưa chọn
                                        }`}
                                >
                                    <input
                                        type="radio"
                                        name="radioGroup"
                                        value={option.value}
                                        checked={selected === option.value}
                                        onChange={() => setSelected(option.value)}
                                        className="mr-2 accent-gray-600"
                                    />
                                    {option.label}
                                </label>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right column: Title & Content */}
                <div className="md:w-2/3 flex flex-col gap-4">
                    {/* Title */}
                    <div>
                        <h2 className="font-bold mb-2 text-lg">Tiêu đề bài viết</h2>
                        <input
                            type="text"
                            value={title}
                            onChange={(e) => { setTitle(e.target.value) }}
                            className="w-full mb-2 px-3 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-blue-400 font-semibold text-[1.2rem]"
                            placeholder="Nhập tiêu đề bài viết"
                        />
                        {title && (
                            <p className="text-sm text-gray-500">
                                <b>Url: </b>{title.toLowerCase()
                                    .normalize("NFD")
                                    .replace(/[\u0300-\u036f]/g, "")
                                    .replace(/[^a-z0-9\s-]/g, "")
                                    .trim()
                                    .replace(/\s+/g, "-")}
                            </p>
                        )}
                    </div>

                    {/* Content */}
                    <div>
                        <h2 className="font-bold mb-2 text-lg">Nội dung bài viết</h2>
                        <RichTextEditor ref={editorRef}  />
                    </div>
                    <div>
                        <button onClick={createBlog} className="px-5 py-2.5 bg-[var(--secondary)] text-white rounded-2xl cursor-pointer hover:shadow ">Tạo blog</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
