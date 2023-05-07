import { Transition } from "@headlessui/react"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { RxHamburgerMenu } from "react-icons/rx"

const navLinks = [
  {
    name: "About",
    to: "/about",
  },
  {
    name: "Blog",
    to: "/blogs",
  },
  {
    name: "Books",
    to: "/books",
  },
  {
    name: "Contact",
    to: "/contacts",
  },
  {
    name: "Membership Bertumbuh",
    to: "/membership-bertumbuh",
  },
]

export default function Navbar() {
  const [navHeight, setNavHeight] = useState(0)
  const [showNav, setShowNav] = useState(false)
  const [open, setOpen] = useState(false)
  const navRef = useRef<HTMLDivElement>(null)

  function handleShow() {
    setShowNav(!showNav)
    setOpen(!open)
  }

  useEffect(() => {
    if (navRef.current) setNavHeight(navRef.current.offsetHeight)
  }, [navRef])

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 z-20 w-full border-b bg-white shadow-md mb-[${
        navHeight ? navHeight : ""
      }px]`}>
      <section className="container z-20 mx-auto flex max-w-6xl justify-between py-0.5 pr-7 md:pr-0">
        <Link
          href="/"
          className="block w-16 md:w-24">
          <img
            src="https://bagasraisr.com/wp-content/uploads/2022/02/cropped-logo.jpg"
            alt=""
            className="h-full w-full"
          />
        </Link>
        <div className={`hidden items-center gap-8 md:flex`}>
          {navLinks.map((link, i) => (
            <Link
              href={link.to}
              key={i}
              className="font-semibold tracking-wider text-stone-900">
              {link.name}
            </Link>
          ))}
        </div>
        <button
          className="relative block w-7 md:hidden"
          onClick={handleShow}>
          <RxHamburgerMenu className="h-full w-full" />
        </button>
      </section>
      <div
        id="hamburgerMenu"
        className={`fixed z-10 w-full bg-white duration-200 ease-in-out ${
          showNav ? `top-[${navHeight}px]` : `-top-[${navHeight}px]`
        }`}>
        <Transition
          show={open}
          enter="transition ease-out duration-300"
          enterFrom="opacity-0 translate-y-1"
          enterTo="opacity-300 translate-y-0"
          leave="transition ease-in duration-300"
          leaveFrom="opacity-300 translate-y-0"
          leaveTo="opacity-0 translate-y-1">
          <div
            className={`flex-col gap-5 p-2 px-10 ${
              showNav ? `flex` : `hidden`
            }`}>
            {navLinks.map((link, i) => (
              <Link
                href={link.to}
                key={i}
                className="border-b pb-1.5 text-lg font-semibold tracking-wide text-stone-900">
                {link.name}
              </Link>
            ))}
          </div>
        </Transition>
      </div>
    </nav>
  )
}
