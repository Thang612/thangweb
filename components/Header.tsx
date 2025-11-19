'use client'

import { useState } from 'react'
import Link from 'next/link'



export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className='sticky top-0 z-20 backdrop-blur-sm' >
      <nav className="container flex mx-auto h-24 items-center py-1.5 justify-between font-[goldman]">
        <div className="flex gap-5 items-center">
          {/* Logo SVG và Tên */}
          <svg width="80" height="68" viewBox="0 0 80 68" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_50_6)">
              <path d="M39.3707 0V63.6382L73.4919 44.3292L64.7569 38.8275L47.2868 48.4086V13.054H52.7462L39.3707 0Z" fill="#85BF58" fillOpacity="0.35"/>
              <path d="M39.3707 67.7176L80.3162 44.3292L49.7435 24.7482V29.3715L64.7569 38.8275L73.4919 44.3292L39.3707 63.6382V67.7176Z" fill="#85BF58" fillOpacity="0.6"/>
              <path d="M80.3162 44.3292V34.2667L49.7435 15.2297V24.7482L80.3162 44.3292Z" fill="#85BF58"/>
              <path d="M38.1896 57.7584V0L25.3688 12.8049H30.8244V48.7677L15.2758 39.3294L8.51838 34.6005L27.8238 23.1578V18.5263L0 34.6005L38.1896 57.7584Z" fill="#323232"/>
              <path d="M0 44.681L38.1896 68.1113V57.7584L0 34.6005V44.681Z" fill="#1D1D1D"/>
              <path d="M27.8238 23.1578L8.51838 34.6005L15.2758 39.3294L27.8238 32.421V23.1578Z" fill="#676767"/>
            </g>
            <defs>
              <clipPath id="clip0_50_6">
                <rect width="80" height="68" fill="white"/>
              </clipPath>
            </defs>
          </svg>
          <h1 className='text-2xl font-bold'>ThangWEB</h1>
        </div>

        {/* 1. Trang chủ Link (Ẩn ở mobile, Hiện ở laptop) */}
        {/* Sử dụng 'hidden' (ẩn mặc định/mobile) và 'md:flex' (hiện từ md trở lên) */}
        <div className='hidden md:flex'>
          <Link href="/" className="text-xl hover:text-[--secondary] hover:underline">Trang chủ</Link>
        </div>

        {/* 2. Menu Icon (Hiện ở mobile, Ẩn ở laptop) */}
        {/* Sử dụng 'block' (hiện mặc định/mobile) và 'md:hidden' (ẩn từ md trở lên) */}
        <div className='block md:hidden'>
          {mobileMenuOpen ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6" // Thêm sự kiện để mở/đóng menu mobile
            onClick={() => setMobileMenuOpen(false)} >
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
</svg> :<svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            strokeWidth={1.5} 
            stroke="currentColor" 
            className="size-6"
            // Thêm sự kiện để mở/đóng menu mobile
            onClick={() => setMobileMenuOpen(true)} 
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
}
          
        </div>
      </nav>
      {mobileMenuOpen && <div className="backdrop-blur-sm block md:hidden container mx-auto py-4 text-right h-screen fixed z-10" onClick={()=>setMobileMenuOpen(false)}>
        <Link href="/" className="text-xl hover:text-[--secondary] hover:underline">Trang chủ</Link>
      </div>}
    </header>
  )
}