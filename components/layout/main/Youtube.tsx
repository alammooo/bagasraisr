import { text, title } from "@/data/Youtube/YoutubeData"

const Youtube = () => {
  return (
    <section>
      <div className="container mx-auto mb-44 grid max-w-5xl items-center gap-16 md:grid-cols-2">
        <div className="flex max-w-sm flex-col gap-5 text-zinc-700">
          <h1 className="text-center text-3xl font-bold tracking-wide md:text-right ">
            {title}
          </h1>
          <p className="px-10 text-justify leading-8 md:px-0">{text}</p>
        </div>
        <div>
          <iframe
            src="https://www.youtube.com/embed/PgUL9F79wXY"
            title="07. Kendala dalam berkarya"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            className="h-64 w-full md:h-72"
            allowFullScreen></iframe>
        </div>
      </div>
    </section>
  )
}

export default Youtube
