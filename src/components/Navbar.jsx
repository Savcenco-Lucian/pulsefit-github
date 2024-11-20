'use client'
import React from 'react'
import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { assets } from '../assets/assets.js'

const navigation = [
  { name: 'ABOUT US', href: '#about' },
  { name: 'CLASSES', href: '#classes' },
  { name: 'MEMBERSHIP', href: '#membership' },
  { name: 'GYMS', href: '#gyms' },
]

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div>
      <header className="">
        <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                alt=""
                src={assets.logo}
                className="h-8 w-auto"
              />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="h-8 w-8 text-[#D7FB00]" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12 border-2 border-[#1E1E1E] rounded-full px-7 py-2">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="font-oswald font-medium text-base/6 text-white">
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a href="#" className="inline-flex items-center justify-center px-4 py-2 text-base font-oswald font-medium text-[#D7FB00] bg-[#1E1E1E] border border-[#D7FB00] rounded-full hover:bg-[#D7FB00] hover:text-[#1E1E1E] transition">
              GET IN TOUCH
            </a>
            <a href="#" className='flex bg-[#D7FB00] rounded-full p-4 text-black'>
              <img src={assets.arrow_right} className='w-full h-full' alt="" />
            </a>
          </div>
        </nav>
        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gradient-to-b from-black to-transparent backdrop-blur-md px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  alt=""
                  src={assets.logo}
                  className="h-8 w-auto"
                />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="h-8 w-8 text-[#D7FB00]" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-800/10">
                <div className="space-y-2 py-6 text-center">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-2xl border-b-2 border-b-gray-700 font-semibold text-white hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6 flex justify-center items-center">
                  <a
                    href="#"
                    className="px-4 py-2 text-xl font-semibold text-[#D7FB00] bg-[#1E1E1E] border border-[#D7FB00] rounded-full hover:bg-[#D7FB00] hover:text-[#1E1E1E] transition"
                  >
                    GET STARTED NOW!
                  </a>
                  <a href="#" className=' bg-[#D7FB00] rounded-full p-4 text-black'>
                    <img src={assets.arrow_right} className='w-full h-full' alt="" />
                  </a>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>


    </div>
  )
}
export default Navbar