'use client'

import { useState } from 'react'
import {
  PopoverGroup,
} from '@headlessui/react'
import {
  Bars3Icon,
} from '@heroicons/react/24/outline'
import Image from 'next/image'


export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className='sticky top-0 z-20 backdrop-blur-xl'>
      <nav aria-label="Global" className=" mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img
              alt=""
              src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
              className="h-8 w-auto"
            />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 "
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <a href="#" className="text-sm/6 font-semibold ">
            Features
          </a>
          <a href="#" className="text-sm/6 font-semibold ">
            Marketplace
          </a>
          <a href="#" className="text-sm/6 font-semibold ">
            Company
          </a>
        </PopoverGroup>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="#" className="text-sm/6 font-semibold ">
            Log in <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </nav>

    </header>
  )
}