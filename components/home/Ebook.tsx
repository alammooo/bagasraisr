import { text, title } from "@/data/Ebook/EbookData"
const Ebook = () => {
  return (
    <section className="bg-sky-950">
      <div className="flex flex-col gap-5 px-6 py-16 md:mx-auto md:max-w-6xl">
        <h1 className="text-center text-3xl font-semibold capitalize text-white">
          {title}
        </h1>
        <p className="text-center leading-8 text-zinc-200">{text}</p>
        <form className="">
          <div className="flex max-w-2xl flex-col gap-4 mx-auto">
            <input
              type="text"
              className="block w-full rounded px-4 py-3"
              placeholder="Email"
            />
            <input
              type="text"
              className="block w-full rounded px-4 py-3"
              placeholder="Nama Lengkap"
            />
            <input
              type="text"
              className="block w-full rounded px-4 py-3"
              placeholder="Telefon"
            />
            <button
              type="button"
              className="mt-5 block w-full border-2 border-slate-100 bg-slate-100 px-5 py-2 text-center font-semibold uppercase tracking-wider text-slate-900 duration-300 hover:-translate-y-3 hover:bg-slate-200 md:w-fit">
              Download
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Ebook
