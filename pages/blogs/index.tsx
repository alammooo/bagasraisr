import Skeleton from "@/components/utils/Skeleton"
import React, { ReactElement, useEffect, useState } from "react"
import { BsDot } from "react-icons/bs"
import { PostProps, baseUrl } from "@/interfaces/interface"
import axios from "axios"
import dateEditor from "@/helpers/dateFormat"
import MainLayout from "@/components/layout/main/MainLayout"

const sort = [
  "30DaysChallenge-RMDHN",
  "Creative",
  "Self Improvement",
  "Uncategorized",
]

const Blog = () => {
  const [posts, setPosts] = useState<PostProps[]>([])
  const [loading, setLoading] = useState(true)

  const fetchData = React.useCallback(async () => {
    try {
      setLoading(true)
      const response = await axios.get(`${baseUrl}/api/posts`)
      if (response.status === 200) {
        setPosts(response.data)
      }
      console.log(response)
      setLoading(false)
    } catch (error: any) {
      console.log(error)
    }
  }, [posts])

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <section className="container mx-auto my-32 max-w-5xl md:mt-44">
      <h1 className="text-center text-5xl font-bold uppercase tracking-widest md:mb-16">
        Blog
      </h1>
      <p className="md:text-lg mx-auto mt-4 max-w-3xl px-7 text-center leading-8 text-stone-900 md:text-center">
        Tulisan ini adalah pandangan saya pribadi, bisa diterima bisa enggak.
        Selamat membaca dan kalau ngerasa tulisan ini bermanfaat, boleh bantu
        share juga. Baarakallahufiikum
      </p>

      <div className="mt-10 flex flex-wrap justify-center gap-2 px-2 text-xl font-bold text-white md:gap-4 md:px-0">
        <h1 className="transform cursor-pointer bg-sky-800 px-6 py-4 duration-200 md:hover:-translate-y-3 hover:bg-sky-700">
          All
        </h1>
        {sort.map((item, i) => (
          <h1
            key={i}
            className="transform cursor-pointer bg-sky-800 px-6 py-4 duration-200 md:hover:-translate-y-3 hover:bg-sky-700">
            {item}
          </h1>
        ))}
      </div>
      <div className="mt-7 grid gap-4 md:grid-cols-3">
        {loading ? (
          <Skeleton />
        ) : (
          posts.map((item, i) => (
            <div
              className="mb-5 flex flex-col gap-6 md:mb-14"
              key={item.id}>
              <div>
                <img
                  src="https://images.unsplash.com/photo-1661956602944-249bcd04b63f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                  alt=""
                />
              </div>
              <h1 className="text-center text-xl font-bold text-zinc-600">
                {item.title}
              </h1>
              <div className="flex items-center justify-center text-sm text-zinc-500">
                <h1>{dateEditor(item.createdAt)}</h1>
                <span>
                  <BsDot className="fill-sky-700" />
                </span>
                <h1>12 Comments</h1>
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  )
}

Blog.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>
}

export default Blog
