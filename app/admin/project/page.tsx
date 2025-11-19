"use client";

import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "@/lib/firebase/config";
import { collection, getDocs, query, orderBy, doc, deleteDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";

interface Project {
    id: string;
    name: string;
    description: string;
    goal?: string;
    solution?: string;
    technology?: string;
    result?: string;
    createdAt: string;
}

export default function ProjectsList() {
    const router = useRouter();
    const [projects, setProjects] = useState<Project[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    // Kiểm tra đăng nhập
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (!user) {
                router.push("/login");
            } else {
                fetchProjects();
            }
        });
        return () => unsubscribe();
    }, [router]);

    // Lấy danh sách projects
    const fetchProjects = async () => {
        setLoading(true);
        setError("");
        try {
            const q = query(collection(db, "projects"), orderBy("createdAt", "desc"));
            const snapshot = await getDocs(q);
            const list: Project[] = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            } as Project));
            setProjects(list);
        } catch (err) {
            console.log(err);
            setError("Có lỗi xảy ra khi tải danh sách dự án!");
        } finally {
            setLoading(false);
        }
    };

    // Xóa project
    const handleDelete = async (id: string) => {
        const confirmDelete = confirm("Bạn có chắc muốn xóa dự án này?");
        if (!confirmDelete) return;

        try {
            await deleteDoc(doc(db, "projects", id));
            setProjects((prev) => prev.filter((p) => p.id !== id)); // remove khỏi UI ngay
        } catch (err) {
            console.log(err);
            alert("Có lỗi xảy ra khi xóa dự án!");
        }
    };

    if (loading) return <div className="text-white p-8">Đang tải dự án...</div>;
    if (error) return <div className="text-red-400 p-8">{error}</div>;

    return (
        <div className="mx-auto mt-10 p-8">
            <h1 className="text-3xl font-semibold text-white mb-6">Danh sách dự án</h1>
            <button
                onClick={() => router.push(`/admin/project/add`)}
                className="py-1 px-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md"
            >
                Thêm Project
            </button>

            {loading ? "Đang tải dự án" :projects.length === 0 && (
                <div className="text-neutral-400">Chưa có dự án nào.</div>
            )}

            <div className="space-y-4">
                {projects.map((project) => (
                    <div
                        key={project.id}
                        className="bg-gray-800 p-6 rounded-xl border border-neutral-700 shadow-md flex justify-between items-center"
                    >
                        <div>
                            <h2 className="text-xl font-semibold text-white mb-1">{project.name}</h2>
                            <p className="text-neutral-300">{project.description}</p>
                        </div>

                        <div className="flex gap-2">
                            <button
                                onClick={() => router.push(`/admin/project/${project.id}`)}
                                className="py-1 px-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md"
                            >
                                Edit
                            </button>
                            <button
                                onClick={() => handleDelete(project.id)}
                                className="py-1 px-3 bg-red-600 hover:bg-red-700 text-white rounded-md"
                            >
                                Xóa
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
