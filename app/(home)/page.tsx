"use client";
import Image from "next/image";
import Introduction from "@/assets/INTRODUCTION.webp"; // alias @/* trỏ src/
import Demo1 from "@/assets/Frame 9.png"; // alias @/* trỏ src/
import Demo2 from "@/assets/Frame 10.png"; // alias @/* trỏ src/
import MyName from "@/assets/my name.webp"; // alias @/* trỏ src/
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import "@/style/home.css";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { goldman } from "../layout";


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
const projects: Project[] = [
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
      <div className="flex-col md:flex-row container mx-auto flex items-center">
        <div className="w-full mt-5 md:w-1/2">
            <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie nisl eu sem tristique, sit amet convallis ex aliquam. Maecenas varius lectus hendrerit augue blandit, ut posuere erat aliquam. Praesent auctor tellus eget nisl blandit, at varius purus elementum.</p>
            <h2 className={`${goldman.className} px-5 py-2.5 bg-[var(--secondary)] inline-block mb-5 font-bold text-[--background]`}>About me</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie nisl eu sem tristique, sit amet convallis ex aliquam. Maecenas varius lectus hendrerit augue blandit, ut posuere erat aliquam. Praesent auctor tellus eget nisl blandit, at varius purus elementum.</p>
        </div>
        <div className="w-full md:w-1/2"><DotLottieReact
          src="https://lottie.host/f61280a4-3d5a-456b-8a1f-e71de04fd11b/Vd2SHBT1w3.lottie"
          loop
          autoplay
        /></div>
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
        <div className="flex flex-col md:flex-row justify-around gap-5">
          {skills.map((skill) => (

            <div key={skill.title}>
              <h3 className="px-6 py-2 border-2 z-10 border-black rounded-full translate-y-5 text-center inline-block bg-[var(--color-background)]">&lt;HTML&gt; {skill.title} &lt;/HTML&gt;</h3>
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
          <div className="flex-col md:flex-row project flex container snap-start shrink-0 gap-16 mt-5">
            <div className="project__image w-4/5 md:w-1/3 mx-auto">
              <Link className=" project__image-button text-2xl text-white shadow-[0_2px_3px_var(--secondary)] py-2.5 px-5 bg-[var(--secondary)] border-2 border-black rounded-full" href="/">Live Demo</Link>
              <Image className="" src={Demo1} alt="introduction title" />
              <Image className="" src={Demo2} alt="introduction title" />
            </div>
            <div className="project__description w-full md:w-2/3">
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
        <div className="flex justify-center gap-10 text-[var(--secondary)] cursor-pointer">
          <div onClick={scrollPrev} className="hover:scale-120
          "><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
            </svg>
          </div>
          <div onClick={scrollNext} className="hover:scale-120
          "><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
            </svg>
          </div>
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
        {/* <ContactForm></ContactForm> */}
      </div>

    </>
  );
}
