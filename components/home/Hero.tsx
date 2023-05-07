import Link from "next/link"

const Hero = () => {
  return (
    <section>
      <div className="container max-w-5xl mx-auto mt-12 md:mt-56 px-10 md:px-0">
        <div className="grid items-center justify-center md:grid-cols-2">
          <div className="w-96">
            <img
              src="https://bagasraisr.com/wp-content/uploads/2022/02/web.png"
              alt=""
              className="w-full h-full brightness-125"
            />
          </div>
          <div className="max-w-md px-5 md:px-0">
            <p className="leading-8 text-stone-600 md:text-justify">
              <span className="block font-medium text-2xl mb-2">
                Hallo, salam kenal saya bagas.{" "}
              </span>
              Website ini berisi kumpulan karya saya, mulai dari tulisan,
              desain, dan ada lagi lainnya. Silakan selidiki sendiri aja ya.
              Enjoy!
            </p>
            <Link
              href={"/blogs"}
              className="block mt-7 md:mt-14 tracking-wider uppercase font-bold border-2 border-slate-600 text-slate-600 px-5 py-1 duration-300 hover:-translate-y-3 hover:bg-slate-700 hover:text-white w-full text-center md:w-fit">
              Masuk ke Blog
            </Link>
          </div>
        </div>
        <hr className="border-slate-200 mx-auto max-w-2xl mt-10" />
      </div>
    </section>
  )
}
export default Hero
