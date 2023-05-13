import type { ReactElement } from "react"
import type { NextPageWithLayout } from "./_app"
import MainLayout from "@/components/layout/main/MainLayout"
import Head from "next/head"
import Hero from "@/components/home/Hero"
import BookList from "@/components/home/BookList"
import JoinButtons from "@/components/home/JoinButton"
import Ebook from "@/components/home/Ebook"
import Youtube from "@/components/layout/main/Youtube"

const Home: NextPageWithLayout = () => {
  return (
    <>
      {/* <Head>
        <title>BagasRais R</title>
        <meta
          name="description"
          content="Bagas Rais Rabani Website"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <link
          rel="icon"
          href="/favicon.ico"
        />
      </Head> */}
      <section className="flex min-h-screen flex-col gap-12 md:gap-40">
        <Hero />
        <Youtube />
        <JoinButtons />
        <BookList />
        <Ebook />
      </section>
    </>
  )
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>
}

export default Home
