"use client";
import Image from "next/image";
import Introduction from "@/assets/INTRODUCTION.webp"; // alias @/* trỏ src/
import Demo1 from "@/assets/Frame 9.png"; // alias @/* trỏ src/
import Demo2 from "@/assets/Frame 10.png"; // alias @/* trỏ src/
import MyName from "@/assets/my name.webp"; // alias @/* trỏ src/
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import "@/style/home.css";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import ContactForm from "./contact/contactform";
import { goldman } from "./layout";


//Project
interface ProjectDetail {
  mucTieu: string;
  giaiPhap: string;
  congNghe: string;
  ketQua: string;
}

interface Project {
  name: string;
  title: string;
  description: string;
  img1: string; // hoặc StaticImageData nếu dùng Next.js Image import
  img2: string; // hoặc StaticImageData
  link: string;
  detail: ProjectDetail;
}

//Data project
const projects:Project[] = [
  {
    name: "BEARCHOP KITCHEN",
    title: "Ứng dụng quản lý nhà bếp hiện đại",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie nisl eu sem tristique, sit amet convallis ex aliquam.",
    img1: "@/assets/Frame 9.png",
    img2: "@/assets/Frame 10.png",
    link: "/",
    detail: {
      mucTieu: "Tăng trải nghiệm người dùng trên website",
      giaiPhap: "Thiết kế UI/UX responsive, tối ưu tốc độ tải trang",
      congNghe: "Next.js, Tailwind CSS, React, Vercel",
      ketQua: "Tăng 30% thời gian tương tác và giảm bounce rate"
    }
  },
  {
    name: "SMART SHOP",
    title: "Website thương mại điện tử tối ưu trải nghiệm người dùng",
    description: "Nâng cao trải nghiệm mua sắm trực tuyến và tối ưu quy trình thanh toán.",
    img1: "@/assets/Frame 9.png",
    img2: "@/assets/Frame 10.png",
    link: "/",
    detail: {
      mucTieu: "Tăng doanh số bán hàng",
      giaiPhap: "Tối ưu trải nghiệm thanh toán, gợi ý sản phẩm liên quan",
      congNghe: "Next.js, Tailwind, Stripe API",
      ketQua: "Tăng 25% conversion rate"
    }
  },
  {
    name: "PORTFOLIO SITE",
    title: "Website giới thiệu cá nhân, portfolio chuyên nghiệp",
    description: "Giúp cá nhân thể hiện kỹ năng, dự án và khả năng thiết kế web chuyên nghiệp.",
    img1: "@/assets/Frame 9.png",
    img2: "@/assets/Frame 10.png",
    link: "/",
    detail: {
      mucTieu: "Hiển thị portfolio đẹp và trực quan",
      giaiPhap: "Thiết kế UI/UX tối giản, responsive",
      congNghe: "Next.js, Tailwind CSS, React",
      ketQua: "Portfolio nổi bật, tăng cơ hội tuyển dụng"
    }
  }
];


// Data skill
interface Skill {
  title: string;
  description: string;
}

const skills: Skill[] = [{
  title: "Web Design",
  description: "Create visually appealing, user-friendly interfaces that enhance user experience and align with brand identity."
}, {
  title: "Web Development",
  description:
    "Build responsive, modern, and high-performance websites using technologies like React, Next.js, and Tailwind CSS."
}, {
  title: "Web Optimize",
  description:
    "Improve site performance, SEO, and accessibility for faster load times and better search visibility."
}]
//End data skill


export default function Home() {
  const containerProjects = useRef<HTMLDivElement>(null);
  const [isScrolling, setIsScrolling] = useState(false);

  // Function chung để scroll
  const scrollWithCooldown = (distance: number) => {
    if (!containerProjects.current || isScrolling) return;

    containerProjects.current.scrollBy({ left: distance, behavior: "smooth" });

    setIsScrolling(true);
    setTimeout(() => setIsScrolling(false), 2000); // 2 giây cooldown
  };


  const scrollNext = () => {
    if (!containerProjects.current) return;
    const width = containerProjects.current.clientWidth;
    containerProjects.current.scrollBy({ left: width, behavior: "smooth" });
  };

  const scrollPrev = () => {
    if (!containerProjects.current) return;
    const width = containerProjects.current.clientWidth;
    containerProjects.current.scrollBy({ left: -width, behavior: "smooth" });
  };

  useEffect(() => {
    const container = containerProjects.current;
    if (!container) return;

    const interval = setInterval(() => {
      const atEnd = container.scrollLeft >= container.scrollWidth - container.clientWidth;
      if (atEnd) {
        container.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        scrollNext();
      }
    }, 5000);

    return () => clearInterval(interval);
  }, []);


  return (
    <>
      <div className="container m-auto">
        <Image className="w-full" src={Introduction} alt="introduction title" />
      </div>
      <div className="container mx-auto flex items-center justify-center  mt-5">
        <div className="grid gap-5 w-full 
                  grid-cols-1 grid-rows-3
                  sm:grid-cols-2 sm:grid-rows-2
                 mx-auto">
          <div className="flex items-center justify-center ">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie nisl eu sem tristique, sit amet convallis ex aliquam. Maecenas varius lectus hendrerit augue blandit, ut posuere erat aliquam. Praesent auctor tellus eget nisl blandit, at varius purus elementum.</p>
          </div>
          <div className="row-span-1 sm:row-span-2 flex items-center justify-center">
            <DotLottieReact
              src="https://lottie.host/f61280a4-3d5a-456b-8a1f-e71de04fd11b/Vd2SHBT1w3.lottie"
              loop
              autoplay
            />
          </div>
          <div className="">
            <h2 className={`${goldman.className} px-5 py-2.5 bg-[var(--secondary)] inline-block mb-5 font-bold text-[var(--background)]`}>About me</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie nisl eu sem tristique, sit amet convallis ex aliquam. Maecenas varius lectus hendrerit augue blandit, ut posuere erat aliquam. Praesent auctor tellus eget nisl blandit, at varius purus elementum.</p>
          </div>
        </div>
      </div>
      <div className="container m-auto">
        <Image className="w-full" src={MyName} alt="introduction title" />
      </div>
      {/* personal skill */}
      <hr></hr>
      <div className="container mx-auto my-5 py-8 text-center font-goldman font-bold">
        <h2 className="container mx-auto text-6xl sm:text-3xl md:text-6xl text-[var(--secondary)]">
          PERSONAL SKILLS
        </h2>
        <div className="flex flex-col sm:flex-row md:flex-row justify-around gap-5">
          {skills.map((skill) => (

            <div key={skill.title}>
              <h3 className="px-6 py-2 border-2 border-black rounded-full translate-y-5 text-center inline-block bg-[var(--color-background)]">&lt;HTML&gt; {skill.title} &lt;/HTML&gt;</h3>
              <div className="px-6 py-4 pt-9 border-2 border-black rounded-2xl ">
                <p className="font-medium">{skill.description}</p>
              </div>
            </div>

          ))}
        </div>
      </div>


      {/* Project */}
      <hr />
      <div className="my-5 container mx-auto">
        <h2 className="text-6xl my-5 sm:text-3xl md:text-6xl text-[var(--secondary)] font-bold">My Projects</h2>
        <div ref={containerProjects} className="project__container scrollbar-hidden  container mx-auto overflow-x-scroll flex flex-nowrap  snap-x snap-mandatory">

          {/* project */}
          <div className="project flex container snap-start flex-shrink-0 gap-16 mt-5">
            <div className="project__image">
              <Link className=" project__image-button text-2xl text-white shadow-[0_2px_3px_var(--secondary)] py-2.5 px-5 bg-[var(--secondary)] border-2 border-black rounded-full" href="/">Live Demo</Link>
              <Image className="" src={Demo1} alt="introduction title" />
              <Image className="" src={Demo2} alt="introduction title" />
            </div>
            <div className="project__description">
              <div className=" gap-2.5  align-middle px-5 py-2.5 rounded-full border-black border-2 inline-flex shadow-[0_4px_6px_var(--secondary)]">
                <svg className="text-[var(--secondary)]" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="32" zoomAndPan="magnify" viewBox="0 0 768 695.999997" height="32" preserveAspectRatio="xMidYMid meet" version="1.0"><path fill="currentColor" d="M 48.273438 468.875 C 40.214844 343.320312 84.746094 244.605469 137.066406 187.203125 C 189.398438 129.8125 259.90625 102.417969 364.730469 83.46875 C 469.554688 64.511719 619.164062 98.648438 713.960938 1.105469 C 728.953125 607.625 288.078125 694.820312 72.183594 523.097656 C 147.421875 432.542969 231.648438 368.246094 346.921875 326.214844 C 429.699219 296.027344 504.582031 281.007812 581.5625 192.257812 C 468.925781 268.777344 378.265625 274.390625 311.265625 295.511719 C 211.742188 326.886719 133.066406 369.039062 48.273438 468.875 Z M 48.273438 468.875 " fillOpacity="1" fillRule="evenodd" /></svg>
                <span className="font-bold text-2xl">BEARCHOP KITCHEN</span>
                <svg className="text-[var(--secondary)] scale-x-[-1]" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="32" zoomAndPan="magnify" viewBox="0 0 768 695.999997" height="32" preserveAspectRatio="xMidYMid meet" version="1.0"><path fill="currentColor" d="M 48.273438 468.875 C 40.214844 343.320312 84.746094 244.605469 137.066406 187.203125 C 189.398438 129.8125 259.90625 102.417969 364.730469 83.46875 C 469.554688 64.511719 619.164062 98.648438 713.960938 1.105469 C 728.953125 607.625 288.078125 694.820312 72.183594 523.097656 C 147.421875 432.542969 231.648438 368.246094 346.921875 326.214844 C 429.699219 296.027344 504.582031 281.007812 581.5625 192.257812 C 468.925781 268.777344 378.265625 274.390625 311.265625 295.511719 C 211.742188 326.886719 133.066406 369.039062 48.273438 468.875 Z M 48.273438 468.875 " fillOpacity="1" fillRule="evenodd" /></svg>
              </div>
              <p className="my-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie nisl eu sem tristique, sit amet convallis ex aliquam. Maecenas varius lectus hendrerit augue blandit, ut posuere erat aliquam. Praesent auctor tellus eget nisl blandit, at varius purus elementum.</p>
              <hr />
              <div className="flex-col gap-7 mt-5">
                <div className="flex gap-5">
                  <svg className="text-[var(--secondary)]" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="32" zoomAndPan="magnify" viewBox="0 0 768 695.999997" height="32" preserveAspectRatio="xMidYMid meet" version="1.0"><path fill="currentColor" d="M 48.273438 468.875 C 40.214844 343.320312 84.746094 244.605469 137.066406 187.203125 C 189.398438 129.8125 259.90625 102.417969 364.730469 83.46875 C 469.554688 64.511719 619.164062 98.648438 713.960938 1.105469 C 728.953125 607.625 288.078125 694.820312 72.183594 523.097656 C 147.421875 432.542969 231.648438 368.246094 346.921875 326.214844 C 429.699219 296.027344 504.582031 281.007812 581.5625 192.257812 C 468.925781 268.777344 378.265625 274.390625 311.265625 295.511719 C 211.742188 326.886719 133.066406 369.039062 48.273438 468.875 Z M 48.273438 468.875 " fillOpacity="1" fillRule="evenodd" /></svg>
                  <p>Mục tiêu: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div className="flex gap-5">
                  <svg className="text-[var(--secondary)]" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="32" zoomAndPan="magnify" viewBox="0 0 768 695.999997" height="32" preserveAspectRatio="xMidYMid meet" version="1.0"><path fill="currentColor" d="M 48.273438 468.875 C 40.214844 343.320312 84.746094 244.605469 137.066406 187.203125 C 189.398438 129.8125 259.90625 102.417969 364.730469 83.46875 C 469.554688 64.511719 619.164062 98.648438 713.960938 1.105469 C 728.953125 607.625 288.078125 694.820312 72.183594 523.097656 C 147.421875 432.542969 231.648438 368.246094 346.921875 326.214844 C 429.699219 296.027344 504.582031 281.007812 581.5625 192.257812 C 468.925781 268.777344 378.265625 274.390625 311.265625 295.511719 C 211.742188 326.886719 133.066406 369.039062 48.273438 468.875 Z M 48.273438 468.875 " fillOpacity="1" fillRule="evenodd" /></svg>
                  <p>Mục tiêu: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div className="flex gap-5">
                  <svg className="text-[var(--secondary)]" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="32" zoomAndPan="magnify" viewBox="0 0 768 695.999997" height="32" preserveAspectRatio="xMidYMid meet" version="1.0"><path fill="currentColor" d="M 48.273438 468.875 C 40.214844 343.320312 84.746094 244.605469 137.066406 187.203125 C 189.398438 129.8125 259.90625 102.417969 364.730469 83.46875 C 469.554688 64.511719 619.164062 98.648438 713.960938 1.105469 C 728.953125 607.625 288.078125 694.820312 72.183594 523.097656 C 147.421875 432.542969 231.648438 368.246094 346.921875 326.214844 C 429.699219 296.027344 504.582031 281.007812 581.5625 192.257812 C 468.925781 268.777344 378.265625 274.390625 311.265625 295.511719 C 211.742188 326.886719 133.066406 369.039062 48.273438 468.875 Z M 48.273438 468.875 " fillOpacity="1" fillRule="evenodd" /></svg>
                  <p>Mục tiêu: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div className="flex gap-5">
                  <svg className="text-[var(--secondary)]" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="32" zoomAndPan="magnify" viewBox="0 0 768 695.999997" height="32" preserveAspectRatio="xMidYMid meet" version="1.0"><path fill="currentColor" d="M 48.273438 468.875 C 40.214844 343.320312 84.746094 244.605469 137.066406 187.203125 C 189.398438 129.8125 259.90625 102.417969 364.730469 83.46875 C 469.554688 64.511719 619.164062 98.648438 713.960938 1.105469 C 728.953125 607.625 288.078125 694.820312 72.183594 523.097656 C 147.421875 432.542969 231.648438 368.246094 346.921875 326.214844 C 429.699219 296.027344 504.582031 281.007812 581.5625 192.257812 C 468.925781 268.777344 378.265625 274.390625 311.265625 295.511719 C 211.742188 326.886719 133.066406 369.039062 48.273438 468.875 Z M 48.273438 468.875 " fillOpacity="1" fillRule="evenodd" /></svg>
                  <p>Mục tiêu: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
              </div>
              <div className="mt-7">
                <Link className="inline-block px-5 py-3 text-white shadow-[0_2px_3px_var(--secondary)] bg-[var(--secondary)] border-2 border-black rounded-full hover:scale-110 " href="/">Live Demo</Link>
              </div>
            </div>
          </div>
          {/* end project */}
          {/* project */}
          <div className="project flex container snap-start flex-shrink-0 gap-16 mt-5">
            <div className="project__image">
              <Link className=" project__image-button text-2xl text-white shadow-[0_2px_3px_var(--secondary)] py-2.5 px-5 bg-[var(--secondary)] border-2 border-black rounded-full" href="/">Live Demo</Link>
              <Image className="" src={Demo1} alt="introduction title" />
              <Image className="" src={Demo2} alt="introduction title" />
            </div>
            <div className="project__description">
              <div className=" gap-2.5  align-middle px-5 py-2.5 rounded-full border-black border-2 inline-flex shadow-[0_4px_6px_var(--secondary)]">
                <svg className="text-[var(--secondary)]" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="32" zoomAndPan="magnify" viewBox="0 0 768 695.999997" height="32" preserveAspectRatio="xMidYMid meet" version="1.0"><path fill="currentColor" d="M 48.273438 468.875 C 40.214844 343.320312 84.746094 244.605469 137.066406 187.203125 C 189.398438 129.8125 259.90625 102.417969 364.730469 83.46875 C 469.554688 64.511719 619.164062 98.648438 713.960938 1.105469 C 728.953125 607.625 288.078125 694.820312 72.183594 523.097656 C 147.421875 432.542969 231.648438 368.246094 346.921875 326.214844 C 429.699219 296.027344 504.582031 281.007812 581.5625 192.257812 C 468.925781 268.777344 378.265625 274.390625 311.265625 295.511719 C 211.742188 326.886719 133.066406 369.039062 48.273438 468.875 Z M 48.273438 468.875 " fillOpacity="1" fillRule="evenodd" /></svg>
                <span className="font-bold text-2xl">BEARCHOP KITCHEN</span>
                <svg className="text-[var(--secondary)] scale-x-[-1]" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="32" zoomAndPan="magnify" viewBox="0 0 768 695.999997" height="32" preserveAspectRatio="xMidYMid meet" version="1.0"><path fill="currentColor" d="M 48.273438 468.875 C 40.214844 343.320312 84.746094 244.605469 137.066406 187.203125 C 189.398438 129.8125 259.90625 102.417969 364.730469 83.46875 C 469.554688 64.511719 619.164062 98.648438 713.960938 1.105469 C 728.953125 607.625 288.078125 694.820312 72.183594 523.097656 C 147.421875 432.542969 231.648438 368.246094 346.921875 326.214844 C 429.699219 296.027344 504.582031 281.007812 581.5625 192.257812 C 468.925781 268.777344 378.265625 274.390625 311.265625 295.511719 C 211.742188 326.886719 133.066406 369.039062 48.273438 468.875 Z M 48.273438 468.875 " fillOpacity="1" fillRule="evenodd" /></svg>
              </div>
              <p className="my-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie nisl eu sem tristique, sit amet convallis ex aliquam. Maecenas varius lectus hendrerit augue blandit, ut posuere erat aliquam. Praesent auctor tellus eget nisl blandit, at varius purus elementum.</p>
              <hr />
              <div className="flex-col gap-7 mt-5">
                <div className="flex gap-5">
                  <svg className="text-[var(--secondary)]" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="32" zoomAndPan="magnify" viewBox="0 0 768 695.999997" height="32" preserveAspectRatio="xMidYMid meet" version="1.0"><path fill="currentColor" d="M 48.273438 468.875 C 40.214844 343.320312 84.746094 244.605469 137.066406 187.203125 C 189.398438 129.8125 259.90625 102.417969 364.730469 83.46875 C 469.554688 64.511719 619.164062 98.648438 713.960938 1.105469 C 728.953125 607.625 288.078125 694.820312 72.183594 523.097656 C 147.421875 432.542969 231.648438 368.246094 346.921875 326.214844 C 429.699219 296.027344 504.582031 281.007812 581.5625 192.257812 C 468.925781 268.777344 378.265625 274.390625 311.265625 295.511719 C 211.742188 326.886719 133.066406 369.039062 48.273438 468.875 Z M 48.273438 468.875 " fillOpacity="1" fillRule="evenodd" /></svg>
                  <p>Mục tiêu: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div className="flex gap-5">
                  <svg className="text-[var(--secondary)]" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="32" zoomAndPan="magnify" viewBox="0 0 768 695.999997" height="32" preserveAspectRatio="xMidYMid meet" version="1.0"><path fill="currentColor" d="M 48.273438 468.875 C 40.214844 343.320312 84.746094 244.605469 137.066406 187.203125 C 189.398438 129.8125 259.90625 102.417969 364.730469 83.46875 C 469.554688 64.511719 619.164062 98.648438 713.960938 1.105469 C 728.953125 607.625 288.078125 694.820312 72.183594 523.097656 C 147.421875 432.542969 231.648438 368.246094 346.921875 326.214844 C 429.699219 296.027344 504.582031 281.007812 581.5625 192.257812 C 468.925781 268.777344 378.265625 274.390625 311.265625 295.511719 C 211.742188 326.886719 133.066406 369.039062 48.273438 468.875 Z M 48.273438 468.875 " fillOpacity="1" fillRule="evenodd" /></svg>
                  <p>Mục tiêu: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div className="flex gap-5">
                  <svg className="text-[var(--secondary)]" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="32" zoomAndPan="magnify" viewBox="0 0 768 695.999997" height="32" preserveAspectRatio="xMidYMid meet" version="1.0"><path fill="currentColor" d="M 48.273438 468.875 C 40.214844 343.320312 84.746094 244.605469 137.066406 187.203125 C 189.398438 129.8125 259.90625 102.417969 364.730469 83.46875 C 469.554688 64.511719 619.164062 98.648438 713.960938 1.105469 C 728.953125 607.625 288.078125 694.820312 72.183594 523.097656 C 147.421875 432.542969 231.648438 368.246094 346.921875 326.214844 C 429.699219 296.027344 504.582031 281.007812 581.5625 192.257812 C 468.925781 268.777344 378.265625 274.390625 311.265625 295.511719 C 211.742188 326.886719 133.066406 369.039062 48.273438 468.875 Z M 48.273438 468.875 " fillOpacity="1" fillRule="evenodd" /></svg>
                  <p>Mục tiêu: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div className="flex gap-5">
                  <svg className="text-[var(--secondary)]" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="32" zoomAndPan="magnify" viewBox="0 0 768 695.999997" height="32" preserveAspectRatio="xMidYMid meet" version="1.0"><path fill="currentColor" d="M 48.273438 468.875 C 40.214844 343.320312 84.746094 244.605469 137.066406 187.203125 C 189.398438 129.8125 259.90625 102.417969 364.730469 83.46875 C 469.554688 64.511719 619.164062 98.648438 713.960938 1.105469 C 728.953125 607.625 288.078125 694.820312 72.183594 523.097656 C 147.421875 432.542969 231.648438 368.246094 346.921875 326.214844 C 429.699219 296.027344 504.582031 281.007812 581.5625 192.257812 C 468.925781 268.777344 378.265625 274.390625 311.265625 295.511719 C 211.742188 326.886719 133.066406 369.039062 48.273438 468.875 Z M 48.273438 468.875 " fillOpacity="1" fillRule="evenodd" /></svg>
                  <p>Mục tiêu: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
              </div>
              <div className="mt-7">
                <Link className="inline-block px-5 py-3 text-white shadow-[0_2px_3px_var(--secondary)] bg-[var(--secondary)] border-2 border-black rounded-full hover:scale-110 " href="/">Live Demo</Link>
              </div>
            </div>
          </div>
          {/* end project */}
        </div>
        <div className="flex justify-center gap-10 text-[var(--secondary)]">
          <div onClick={scrollPrev}><svg className="scale-x-[-1] cursor-pointer" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="42" zoomAndPan="magnify" viewBox="0 0 768 695.999997" height="42" preserveAspectRatio="xMidYMid meet" version="1.0"><defs><clipPath id="bdc302fcea"><path d="M 49 94.429688 L 768 94.429688 L 768 601 L 49 601 Z M 49 94.429688 " clipRule="nonzero" /></clipPath></defs><path fill="currentColor" d="M 32.34375 377.207031 C 43.898438 377.207031 53.585938 370.757812 59.273438 361.597656 L 218.878906 361.597656 C 228.050781 361.597656 235.492188 354.136719 235.492188 344.980469 C 235.492188 335.824219 228.050781 328.359375 218.878906 328.359375 L 59.273438 328.359375 C 53.585938 319.199219 43.898438 312.753906 32.34375 312.753906 C 14.578125 312.753906 0.125 327.207031 0.125 344.980469 C 0.125 362.75 14.578125 377.207031 32.34375 377.207031 Z M 32.34375 377.207031 " fillOpacity="1" fillRule="nonzero" /><g clipPath="url(#bdc302fcea)"><path fill="currentColor" d="M 81.84375 277.390625 C 94.617188 277.390625 105.460938 269.773438 110.667969 258.96875 L 159.902344 258.96875 L 199.128906 290.90625 C 202.085938 293.324219 205.796875 294.65625 209.617188 294.65625 L 441.164062 294.65625 C 448.480469 294.65625 454.929688 289.863281 457.054688 282.871094 C 459.183594 275.839844 456.460938 268.269531 450.371094 264.234375 L 321.535156 178.320312 L 382.167969 131.398438 L 720.1875 345.449219 L 373.445312 563.390625 L 312.691406 515.289062 L 450.191406 426.15625 C 456.371094 422.15625 459.183594 414.550781 457.09375 407.484375 C 455 400.457031 448.515625 395.589844 441.164062 395.589844 L 209.617188 395.589844 C 206.050781 395.589844 202.570312 396.742188 199.707031 398.871094 L 160.316406 428.210938 L 108.769531 428.210938 C 103.082031 419.050781 93.398438 412.605469 81.84375 412.605469 C 64.074219 412.605469 49.625 427.058594 49.625 444.832031 C 49.625 462.601562 64.074219 477.058594 81.84375 477.058594 C 93.398438 477.058594 103.082031 470.609375 108.769531 461.449219 L 165.8125 461.449219 C 169.378906 461.449219 172.859375 460.292969 175.722656 458.167969 L 215.113281 428.824219 L 384.996094 428.824219 L 275.207031 499.984375 C 274.445312 500.480469 273.988281 501.222656 273.335938 501.816406 C 272.636719 502.441406 271.808594 502.859375 271.207031 503.625 C 271.070312 503.796875 271.046875 504.007812 270.921875 504.183594 C 270.234375 505.125 269.851562 506.171875 269.382812 507.21875 C 268.957031 508.160156 268.421875 509.039062 268.1875 510.027344 C 267.941406 511.035156 268.007812 512.058594 267.953125 513.09375 C 267.898438 514.183594 267.734375 515.238281 267.894531 516.316406 C 268.03125 517.285156 268.46875 518.183594 268.789062 519.128906 C 269.160156 520.246094 269.457031 521.351562 270.070312 522.378906 C 270.179688 522.570312 270.183594 522.792969 270.304688 522.980469 C 270.84375 523.8125 271.644531 524.316406 272.296875 525.015625 C 272.875 525.640625 273.238281 526.402344 273.925781 526.945312 L 362.039062 596.734375 C 367.609375 601.132812 375.265625 601.492188 381.175781 597.78125 L 760.15625 359.542969 C 764.984375 356.515625 767.921875 351.214844 767.941406 345.519531 C 767.941406 339.824219 765.019531 334.488281 760.210938 331.460938 L 390.097656 97.117188 C 387.375 95.386719 384.292969 94.519531 381.214844 94.519531 C 377.609375 94.519531 374.042969 95.710938 371.050781 97.980469 L 282.9375 166.148438 C 281.90625 166.949219 281.269531 168.023438 280.480469 168.996094 C 280.125 169.425781 279.59375 169.605469 279.277344 170.078125 C 279.15625 170.261719 279.152344 170.480469 279.035156 170.671875 C 278.425781 171.667969 278.125 172.753906 277.742188 173.839844 C 277.398438 174.816406 276.9375 175.742188 276.78125 176.742188 C 276.625 177.757812 276.769531 178.757812 276.800781 179.789062 C 276.832031 180.882812 276.761719 181.964844 277.011719 183.027344 C 277.230469 183.988281 277.742188 184.847656 278.136719 185.769531 C 278.597656 186.84375 278.980469 187.921875 279.671875 188.882812 C 279.804688 189.066406 279.824219 189.289062 279.964844 189.46875 C 280.542969 190.214844 281.355469 190.625 282.03125 191.246094 C 282.683594 191.847656 283.128906 192.605469 283.890625 193.109375 L 386.3125 261.421875 L 215.527344 261.421875 L 176.300781 229.484375 C 173.34375 227.066406 169.632812 225.734375 165.8125 225.734375 L 106.875 225.734375 C 100.976562 218.144531 92.175781 212.9375 81.84375 212.9375 C 64.074219 212.9375 49.625 227.390625 49.625 245.164062 C 49.625 262.933594 64.074219 277.390625 81.84375 277.390625 Z M 81.84375 277.390625 " fillOpacity="1" fillRule="nonzero" /></g></svg></div>
          <div onClick={scrollNext}><svg className="cursor-pointer" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="42" zoomAndPan="magnify" viewBox="0 0 768 695.999997" height="42" preserveAspectRatio="xMidYMid meet" version="1.0"><defs><clipPath id="bdc302fcea"><path d="M 49 94.429688 L 768 94.429688 L 768 601 L 49 601 Z M 49 94.429688 " clipRule="nonzero" /></clipPath></defs><path fill="currentColor" d="M 32.34375 377.207031 C 43.898438 377.207031 53.585938 370.757812 59.273438 361.597656 L 218.878906 361.597656 C 228.050781 361.597656 235.492188 354.136719 235.492188 344.980469 C 235.492188 335.824219 228.050781 328.359375 218.878906 328.359375 L 59.273438 328.359375 C 53.585938 319.199219 43.898438 312.753906 32.34375 312.753906 C 14.578125 312.753906 0.125 327.207031 0.125 344.980469 C 0.125 362.75 14.578125 377.207031 32.34375 377.207031 Z M 32.34375 377.207031 " fillOpacity="1" fillRule="nonzero" /><g clipPath="url(#bdc302fcea)"><path fill="currentColor" d="M 81.84375 277.390625 C 94.617188 277.390625 105.460938 269.773438 110.667969 258.96875 L 159.902344 258.96875 L 199.128906 290.90625 C 202.085938 293.324219 205.796875 294.65625 209.617188 294.65625 L 441.164062 294.65625 C 448.480469 294.65625 454.929688 289.863281 457.054688 282.871094 C 459.183594 275.839844 456.460938 268.269531 450.371094 264.234375 L 321.535156 178.320312 L 382.167969 131.398438 L 720.1875 345.449219 L 373.445312 563.390625 L 312.691406 515.289062 L 450.191406 426.15625 C 456.371094 422.15625 459.183594 414.550781 457.09375 407.484375 C 455 400.457031 448.515625 395.589844 441.164062 395.589844 L 209.617188 395.589844 C 206.050781 395.589844 202.570312 396.742188 199.707031 398.871094 L 160.316406 428.210938 L 108.769531 428.210938 C 103.082031 419.050781 93.398438 412.605469 81.84375 412.605469 C 64.074219 412.605469 49.625 427.058594 49.625 444.832031 C 49.625 462.601562 64.074219 477.058594 81.84375 477.058594 C 93.398438 477.058594 103.082031 470.609375 108.769531 461.449219 L 165.8125 461.449219 C 169.378906 461.449219 172.859375 460.292969 175.722656 458.167969 L 215.113281 428.824219 L 384.996094 428.824219 L 275.207031 499.984375 C 274.445312 500.480469 273.988281 501.222656 273.335938 501.816406 C 272.636719 502.441406 271.808594 502.859375 271.207031 503.625 C 271.070312 503.796875 271.046875 504.007812 270.921875 504.183594 C 270.234375 505.125 269.851562 506.171875 269.382812 507.21875 C 268.957031 508.160156 268.421875 509.039062 268.1875 510.027344 C 267.941406 511.035156 268.007812 512.058594 267.953125 513.09375 C 267.898438 514.183594 267.734375 515.238281 267.894531 516.316406 C 268.03125 517.285156 268.46875 518.183594 268.789062 519.128906 C 269.160156 520.246094 269.457031 521.351562 270.070312 522.378906 C 270.179688 522.570312 270.183594 522.792969 270.304688 522.980469 C 270.84375 523.8125 271.644531 524.316406 272.296875 525.015625 C 272.875 525.640625 273.238281 526.402344 273.925781 526.945312 L 362.039062 596.734375 C 367.609375 601.132812 375.265625 601.492188 381.175781 597.78125 L 760.15625 359.542969 C 764.984375 356.515625 767.921875 351.214844 767.941406 345.519531 C 767.941406 339.824219 765.019531 334.488281 760.210938 331.460938 L 390.097656 97.117188 C 387.375 95.386719 384.292969 94.519531 381.214844 94.519531 C 377.609375 94.519531 374.042969 95.710938 371.050781 97.980469 L 282.9375 166.148438 C 281.90625 166.949219 281.269531 168.023438 280.480469 168.996094 C 280.125 169.425781 279.59375 169.605469 279.277344 170.078125 C 279.15625 170.261719 279.152344 170.480469 279.035156 170.671875 C 278.425781 171.667969 278.125 172.753906 277.742188 173.839844 C 277.398438 174.816406 276.9375 175.742188 276.78125 176.742188 C 276.625 177.757812 276.769531 178.757812 276.800781 179.789062 C 276.832031 180.882812 276.761719 181.964844 277.011719 183.027344 C 277.230469 183.988281 277.742188 184.847656 278.136719 185.769531 C 278.597656 186.84375 278.980469 187.921875 279.671875 188.882812 C 279.804688 189.066406 279.824219 189.289062 279.964844 189.46875 C 280.542969 190.214844 281.355469 190.625 282.03125 191.246094 C 282.683594 191.847656 283.128906 192.605469 283.890625 193.109375 L 386.3125 261.421875 L 215.527344 261.421875 L 176.300781 229.484375 C 173.34375 227.066406 169.632812 225.734375 165.8125 225.734375 L 106.875 225.734375 C 100.976562 218.144531 92.175781 212.9375 81.84375 212.9375 C 64.074219 212.9375 49.625 227.390625 49.625 245.164062 C 49.625 262.933594 64.074219 277.390625 81.84375 277.390625 Z M 81.84375 277.390625 " fillOpacity="1" fillRule="nonzero" /></g></svg></div>
        </div>

      </div>

      {/* End Project */}

      <div className="bg-[var(--secondary)] w-full pt-10 pb-40">
        <div className="blog__title container mx-auto text-white ">
            <h2 className="text-6xl sm:3xl font-bold">BLOG</h2>
            <p className="w-1/3">Tôi tin rằng chia sẻ là cách học nhanh nhất. Đây là nơi tôi ghi lại các mẹo, hướng dẫn và kinh nghiệm làm website mà tôi thấy hữu ích nhất.</p>
        </div>
      </div>
      <div className="container mx-auto blog__container flex translate-y-[-8rem] bg-white">
      {/* blog */}
        <div className="home__blog w-1/3 border-2 overflow-hidden transition-shadow duration-300 hover:shadow-3xl">
          <div className="h-56 overflow-hidden border-b-2">
            <Image className="w-full" src={Introduction} alt="introduction title" />
          </div>
          <div className="flex flex-col gap-2 p-6">
            <h3 className="font-bold text-1xl">15WAYS TO MARKET YOUR DESIGN</h3>
            <p><Link href="/">March 12, 2025</Link> | <Link href="/">BearChop</Link> | <Link href="/">Tips & guides</Link></p>
            <p className="line-clamp-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie nisl eu sem tristique, sit amet convallis ex aliquam. Maecenas varius lectus hendrerit augue blandit, ut posuere erat aliquam.
            </p>
            <Link className="text-right underline" href="/">Xem chi tiết</Link>
          </div>
        </div>
      {/* end blog */}
      {/* blog */}
        <div className="home__blog w-1/3 border-2 overflow-hidden transition-shadow duration-300 hover:shadow-3xl">
          <div className="h-56 overflow-hidden border-b-2">
            <Image className="w-full" src={Introduction} alt="introduction title" />
          </div>
          <div className="flex flex-col gap-2 p-6">
            <h3 className="font-bold text-1xl">15WAYS TO MARKET YOUR DESIGN</h3>
            <p><Link href="/">March 12, 2025</Link> | <Link href="/">BearChop</Link> | <Link href="/">Tips & guides</Link></p>
            <p className="line-clamp-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie nisl eu sem tristique, sit amet convallis ex aliquam. Maecenas varius lectus hendrerit augue blandit, ut posuere erat aliquam.
            </p>
            <Link className="text-right underline" href="/">Xem chi tiết</Link>
          </div>
        </div>
      {/* end blog */}
      {/* blog */}
        <div className="home__blog w-1/3 border-2 overflow-hidden transition-shadow duration-300 hover:shadow-3xl">
          <div className="h-56 overflow-hidden border-b-2">
            <Image className="w-full" src={Introduction} alt="introduction title" />
          </div>
          <div className="flex flex-col gap-2 p-6">
            <h3 className="font-bold text-1xl">15WAYS TO MARKET YOUR DESIGN</h3>
            <p><Link href="/">March 12, 2025</Link> | <Link href="/">BearChop</Link> | <Link href="/">Tips & guides</Link></p>
            <p className="line-clamp-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie nisl eu sem tristique, sit amet convallis ex aliquam. Maecenas varius lectus hendrerit augue blandit, ut posuere erat aliquam.
            </p>
            <Link className="text-right underline" href="/">Xem chi tiết</Link>
          </div>
        </div>
      {/* end blog */}
      </div>

        <div className="container mx-auto">
            <h2 className="font-bold text-5xl text-center ">Liên hệ ngay</h2>
            <p className="text-center">Chúng tôi luôn sẵn sàng lắng nghe ý kiến và câu hỏi của bạn. Điền thông tin để kết nối ngay.</p>
            <ContactForm></ContactForm>
        </div>

    </>
  );
}
