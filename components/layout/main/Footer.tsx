import { BsTelephoneFill } from "react-icons/bs"
import { MdEmail } from "react-icons/md"
import { BsPinMapFill } from "react-icons/bs"
import { BsInstagram } from "react-icons/bs"
import { GrLinkedinOption } from "react-icons/gr"
import { BsTwitter } from "react-icons/bs"
import Link from "next/link"

const navLinks = [
  {
    name: "About",
    to: "#",
  },
  {
    name: "Blog",
    to: "#",
  },
  {
    name: "Books",
    to: "#",
  },
  {
    name: "Contact",
    to: "#",
  },
]

/* print this year */
const thisYear = new Date().getFullYear()

const Footer = () => {
  return (
    <footer className="bg-zinc-800 py-20">
      <div className="grid text-white max-w-6xl mx-auto md:grid-cols-3 gap-7 md:gap-3 px-5 md:px-0">
        <div className="md:text-left">
          <h1 className="mb-5 font-semibold text-xl tracking-wide">Navigate</h1>
          {navLinks.map((link, i) => (
            <Link
              href={link.to}
              key={i}
              className="tracking-tight block mb-2">
              {link.name}
            </Link>
          ))}
        </div>
        <div className="md:text-left">
          <h1 className="mb-5 font-semibold text-xl tracking-wide">Contact</h1>
          <div className="flex flex-col gap-2 md:items-start tracking-tight">
            <h1 className="flex items-center gap-7">
              <span>
                <BsTelephoneFill />
              </span>
              0813-2917-4606
            </h1>
            <h1 className="flex items-center gap-7">
              <span>
                <MdEmail />
              </span>
              bgsraisr@gmail.com
            </h1>
            <h1 className="flex items-center gap-7">
              <span>
                <BsPinMapFill />
              </span>
              Semarang, Indonesia
            </h1>
          </div>
        </div>
        <div className="md:text-left">
          <h1 className="mb-5 font-semibold text-xl tracking-wide">Social</h1>
          <div className="flex gap-7 justify-center md:justify-start">
            <a
              href="https://www.instagram.com/bagasrais.r/"
              target="_blank"
              className="w-6 h-6 block">
              <BsInstagram className="w-full h-full duration-200 cursor-pointer hover:fill-sky-600" />
            </a>
            <a
              href="https://www.linkedin.com/in/bagas-rais-rabani-852209127/"
              target="_blank"
              className="w-6 h-6">
              <GrLinkedinOption className="w-full h-full duration-200 cursor-pointer hover:fill-sky-600" />
            </a>
            <a
              href="https://twitter.com/bagas_rais"
              target="_blank"
              className="w-6 h-6">
              <BsTwitter className="w-full h-full duration-200 cursor-pointer hover:fill-sky-600" />
            </a>
          </div>
        </div>
      </div>
      <h1 className="text-center text-zinc-200 tracking-tight mt-10">
        Copyright @ {thisYear} Bagas Rais Rabbani
      </h1>
    </footer>
  )
}

export default Footer
