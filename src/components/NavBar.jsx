'use client'

import { useEffect, useRef, useState } from 'react'
import { Popover } from '@headlessui/react'
import clsx from 'clsx'
import Image from 'next/image'
import logo from '@/images/Logo.png'

const sections = [
  { id: 'about-us', title: 'About Us' },
  { id: 'accredited-schools', title: 'Accredited Schools' },
  { id: 'how-it-works', title: 'How It Works' },
  { id: 'why-choose-us', title: 'Why Choose Us' },
  { id: 'packages', title: 'Packages' },
  { id: 'faqs', title: 'Faqs' },
  { id: 'contact', title: 'Contact' },
]

function MenuIcon({ open, ...props }) {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        d={open ? 'M17 7 7 17M7 7l10 10' : 'm15 16-3 3-3-3M15 8l-3-3-3 3'}
      />
    </svg>
  )
}

export function NavBar() {
  let navBarRef = useRef(null)
  let [activeIndex, setActiveIndex] = useState(null)
  let mobileActiveIndex = activeIndex === null ? 0 : activeIndex

  useEffect(() => {
    function updateActiveIndex() {
      if (!navBarRef.current) {
        return
      }

      let newActiveIndex = null
      let elements = sections
        .map(({ id }) => document.getElementById(id))
        .filter((el) => el !== null)
      let bodyRect = document.body.getBoundingClientRect()
      let offset = bodyRect.top + navBarRef.current.offsetHeight + 1

      if (window.scrollY >= Math.floor(bodyRect.height) - window.innerHeight) {
        setActiveIndex(sections.length - 1)
        return
      }

      for (let index = 0; index < elements.length; index++) {
        if (
          window.scrollY >=
          elements[index].getBoundingClientRect().top - offset
        ) {
          newActiveIndex = index
        } else {
          break
        }
      }

      setActiveIndex(newActiveIndex)
    }

    updateActiveIndex()

    window.addEventListener('resize', updateActiveIndex)
    window.addEventListener('scroll', updateActiveIndex, { passive: true })

    return () => {
      window.removeEventListener('resize', updateActiveIndex)
      window.removeEventListener('scroll', updateActiveIndex)
    }
  }, [])

  return (
    <div ref={navBarRef} className="sticky top-0 z-50">
      <Popover className="min-[900px]:hidden">
        {({ open }) => (
          <>
            <div
              className={clsx(
                'relative flex items-center px-4 py-3',
                !open &&
                  'bg-white/95 shadow-sm [@supports(backdrop-filter:blur(0))]:bg-white/80 [@supports(backdrop-filter:blur(0))]:backdrop-blur',
              )}
            >
              {!open && (
                <>
                  <span
                    aria-hidden="true"
                    className="font-mono text-sm text-indigo-600"
                  >
                    {(mobileActiveIndex + 1).toString().padStart(2, '0')}
                  </span>
                  <span className="ml-4 text-base font-medium text-slate-900">
                    {sections[mobileActiveIndex].title}
                  </span>
                </>
              )}
              <Popover.Button
                className={clsx(
                  '-mr-1 ml-auto flex h-8 w-8 items-center justify-center',
                  open && 'relative z-10',
                )}
                aria-label="Toggle navigation menu"
              >
                {!open && (
                  <>
                    {/* Increase hit area */}
                    <span className="absolute inset-0" />
                  </>
                )}
                <MenuIcon open={open} className="h-6 w-6 stroke-slate-700" />
              </Popover.Button>
            </div>
            <Popover.Panel className="absolute inset-x-0 top-0 bg-white/95 py-3.5 shadow-sm [@supports(backdrop-filter:blur(0))]:bg-white/80 [@supports(backdrop-filter:blur(0))]:backdrop-blur">
              {sections.map((section, sectionIndex) => (
                <Popover.Button
                  as="a"
                  key={section.id}
                  href={`#${section.id}`}
                  className="flex items-center px-4 py-1.5"
                >
                  <span
                    aria-hidden="true"
                    className="font-mono text-sm text-indigo-600"
                  >
                    {(sectionIndex + 1).toString().padStart(2, '0')}
                  </span>
                  <span className="ml-4 text-base font-medium text-slate-900">
                    {section.title}
                  </span>
                </Popover.Button>
              ))}
            </Popover.Panel>
            <div className="absolute inset-x-0 bottom-full z-10 h-4 bg-white" />
          </>
        )}
      </Popover>
      <div className="hidden min-[900px]:flex min-[900px]:h-20 min-[900px]:justify-center min-[900px]:border-b min-[900px]:border-slate-200 min-[900px]:bg-white/95 min-[900px]:[@supports(backdrop-filter:blur(0))]:bg-white/80 min-[900px]:[@supports(backdrop-filter:blur(0))]:backdrop-blur">
        <ol
          role="list"
          className="mb-[-2px] grid auto-cols-[minmax(0,15rem)] grid-flow-col text-base font-medium text-slate-900 [counter-reset:section]"
        >
          <li className="flex items-center [counter-increment:section]">
            <a href="/" className="px-4 py-2">
              <Image
                src={logo}
                alt=""
                width={640}
                height={400}
                className="h-12 w-12 "
              />
            </a>
          </li>
          {sections.map((section, sectionIndex) => (
            <li key={section.id} className="flex [counter-increment:section]">
              <a
                href={`#${section.id}`}
                className={clsx(
                  'flex w-full flex-col items-center justify-center border-b-2',
                  sectionIndex === activeIndex
                    ? 'border-indigo-600 bg-indigo-50 text-indigo-600 before:text-indigo-600'
                    : 'border-transparent before:text-slate-500 hover:bg-indigo-50/40 hover:before:text-slate-900',
                )}
              >
                {section.title}
              </a>
            </li>
          ))}
        </ol>
      </div>
    </div>
  )
}