'use client'

import { auth } from "@/lib/firebase/config";
import { DocumentTextIcon, HomeIcon, PlusCircleIcon, UserIcon } from "@heroicons/react/16/solid"
import { signOut } from "firebase/auth";
import Link from "next/link"
import { usePathname } from "next/navigation";

export default function Aside() {
    const pathname = usePathname();

    const Logout = async ()=> {
        await signOut(auth)  ;
    }

    // Hàm để tạo class active cho menu
    const isActive = (path: string) =>
        pathname === path ? "text-white bg-indigo-700" : "text-gray-300";
    return (<>
        <aside className="w-full bg-gray-900 h-full ">

            {/* LOGO */}
            <div className="flex items-center gap-3 px-2 py-6 ">
                <img
                    alt="logo"
                    src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
                    className="h-8 w-auto"
                />
                <h1 className="text-2xl font-bold text-white">Admin</h1>
            </div>

            {/* MENU */}
            <nav className="flex flex-col gap-1 text-lg">
                <Link
                    href="/admin"
                    className={`flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-800 transition ${isActive("/admin")}`}
                >
                    <HomeIcon className="w-6 h-6" />
                    Dashboard
                </Link>

                <p className="mt-4 mb-1 px-2 text-sm text-gray-500 uppercase">Project</p>

                <Link
                    href="/admin/project"
                    className={`flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-800 transition ${isActive("/admin/project")}`}
                >
                    <DocumentTextIcon className="w-6 h-6" />
                    Danh sách dự án
                </Link>

                <Link
                    href="/admin/project/add"
                    className={`flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-800 transition ${isActive("/admin/project/add")}`}
                >
                    <PlusCircleIcon className="w-6 h-6" />
                    Thêm dự án
                </Link>
                <p className="mt-4 mb-1 px-2 text-sm text-gray-500 uppercase">Media</p>

                <Link
                    href="/admin/media"
                    className={`flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-800 transition ${isActive("/admin/media")}`}
                >
                    <DocumentTextIcon className="w-6 h-6" />
                    Media
                </Link>

                <p className="mt-4 mb-1 px-2 text-sm text-gray-500 uppercase">User</p>

                <p onClick={Logout}
                    className={`flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-800 transition ${isActive("/admin/user")}`}
                >
                    <UserIcon className="w-6 h-6" />
                    Logout
                </p>
            </nav>

        </aside>
    </>)
}