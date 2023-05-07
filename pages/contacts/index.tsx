import MainLayout from "@/components/layout/main/MainLayout"
import { ChangeEvent, ReactElement, useState } from "react"
import { BsFacebook, BsInstagram, BsYoutube } from "react-icons/bs"
import { FaLinkedinIn } from "react-icons/fa"

export interface ContactForm {
  name?: string
  email?: string
  subject?: string
  message?: string
}
const Contact = () => {
  const [input, setInput] = useState<ContactForm>({})

  function handleChange(
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target
    setInput({ ...input, [name]: value })
  }

  function handleSubmit() {
    console.log(input)
  }
  return (
    <section>
      <div className="md:mt-24 py-24 max-w-6xl mx-auto px-3 md:px-0">
        <h1 className="text-center pb-10 md:pb-24 text-5xl font-bold tracking-[0.5rem]">
          CONTACT
        </h1>
        <div className="grid md:grid-cols-2 max-w-4xl mx-auto gap-x-10">
          <div>
            <p className="italic mb-7 text-center md:text-left max-w-xs md:max-w-full mx-auto md:mx-0">
              Are you a brand looking to collab on a project? Fill the form with
              your project details or you can contact me on:
            </p>
            <p className="text-center">Phone : +62 813-2917-4606 (Bagas)</p>
            <p className="text-center">Email : bagasraisr@gmail.com</p>
            <div className="flex gap-2 justify-center md:justify-start my-10">
              <i className="p-3 rounded-full bg-zinc-700">
                <BsFacebook className="text-white w-5 h-5 block" />
              </i>
              <i className="p-3 rounded-full bg-zinc-700">
                <FaLinkedinIn className="text-white w-5 h-5 block" />
              </i>
              <i className="p-3 rounded-full bg-zinc-700">
                <BsInstagram className="text-white w-5 h-5 block" />
              </i>
              <i className="p-3 rounded-full bg-zinc-700">
                <BsYoutube className="text-white w-5 h-5 block" />
              </i>
            </div>
          </div>
          <div>
            <form onSubmit={handleSubmit}>
              <div className="mb-2">
                <label
                  htmlFor="name"
                  className="block mb-2 text-gray-900 dark:text-white">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  onChange={handleChange}
                  value={input.name || ""}
                  className="border-2 border-zinc-900 text-gray-900 focus:ring-zinc-900 focus:border-zinc-900 block w-full p-2"
                />
              </div>
              <div className="mb-2">
                <label
                  htmlFor="email"
                  className="block mb-2 text-gray-900 dark:text-white">
                  Email *
                </label>
                <input
                  type="text"
                  id="email"
                  onChange={handleChange}
                  value={input.email || ""}
                  className="border-2 border-zinc-900 text-gray-900 focus:ring-zinc-900 focus:border-zinc-900 block w-full p-2"
                />
              </div>
              <div className="mb-2">
                <label
                  htmlFor="subject"
                  className="block mb-2 text-gray-900 dark:text-white">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  onChange={handleChange}
                  value={input.subject || ""}
                  className="border-2 border-zinc-900 text-gray-900 focus:ring-zinc-900 focus:border-zinc-900 block w-full p-2"
                />
              </div>
              <div className="mb-2">
                <label
                  htmlFor="message"
                  className="block mb-2 text-gray-900 dark:text-white">
                  Message *
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="block p-2 w-full text-gray-900 border-2 border-zinc-900 focus:ring-zinc-900 focus:border-zinc-900 "
                  placeholder="Write your thoughts here..."
                />
              </div>
              <button
                type="submit"
                className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded px-5 py-2.5 mr-2 mb-2">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact

Contact.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>
}
