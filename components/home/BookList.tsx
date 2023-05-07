import { text } from "@/data/Books.tsx/BooksData"
import Image from "next/image"
import Booklist from "@/assets/Books/booklist.jpg"

const BookList = () => {
  return (
    <section className="flex flex-col px-5">
      <h1 className="px-5 leading-8">{text}</h1>
      <Image
        src={Booklist}
        alt="books"
      />
      <button
        type="button"
        className="block w-full border-2 border-slate-600 px-5 py-1 text-center font-semibold uppercase tracking-wider text-slate-600 duration-300 hover:-translate-y-3 hover:bg-slate-900 hover:text-white md:w-fit">
        Order Disini
      </button>
    </section>
  )
}

export default BookList
