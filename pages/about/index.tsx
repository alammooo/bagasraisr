import MainLayout from "@/components/layout/main/MainLayout"
import { ReactElement } from "react"

const About = () => {
  return (
    <section className="flex flex-col my-32 px-7 gap-10 container mx-auto max-w-5xl md:mt-44 md:grid md:grid-cols-2">
      <div className="flex flex-col gap-8 md:gap-24">
        <h1 className="text-5xl tracking-widest font-bold text-center uppercase md:text-left">
          About
        </h1>
        <div className="w-full">
          <img
            src="https://bagasraisr.com/wp-content/uploads/2022/03/IMG_9894-scaled.jpg"
            alt="bagsAbout"
            className="w-full brightness-105 shadow-md"
          />
        </div>
      </div>

      <div className="flex flex-col gap-8">
        <h1 className="italic text-2xl font-semibold text-center md:text-4xl">
          “Fokuslah untuk melawan diri sendiri”
        </h1>
        <hr className="w-3/4 mx-auto" />
        <p className="text-justify leading-8 text-zinc-800 md:px-0">
          Hallo, perkenalkan saya bagas rais rabani biasa di panggil bagas. Ada
          juga si yang kadang panggil rais, tapi jarang dan saya juga nggak
          terbiasa dengernya hehe. Bagas itu kalo orang jawa sambungannya “Bagas
          Waras” yang artinya sehat, Rais karena pas lahir jamannya amin rais,
          salah satu tokoh politik yang ternama di masanya, dan artinya Rabani
          baru tau waktu uda gede ketika dengan ijin Allah mulai mendalami agama
          islam ini. Rabani ini punya arti “mereka yang mempelajari kitab dan
          mengajarkannya dengan mudah”. Mungkin itulah doa dari orang tua saya,
          supaya saya nggak jauh dari agamanya juga bisa mensyiarkannya sembari
          jadi orang terpandang dengan keadaan sehat. Aamiinn.. <br /> Itu
          asumsi saya aja sih hehe.
        </p>

        <h1 className="text-center text-3xl font-bold text-sky-800 uppercase tracking-wider md:text-4xl">
          Bagas Rais R
        </h1>
        <p className="text-justify leading-8 text-zinc-800 md:px-0">
          Sekarang saya fokus di dunia kreatif, ya main photoshop, ya main adobe
          premiere, ya main juga di digital marketing,bikin konten di instagram,
          main youtube, ya ngikutin eranya aja. <br />
          Tentu sambil belajar agama, dan alhamdulillah banget diamanihin jadi
          imam masjid juga. Alhamdulillah uda nemu lah yang namanya jati diri,
          tinggal konsisten dan sukses di usia sebelum 30 (cita-cita)
          hehe.aamiinn <br />
          Mulai deket sama Al Qur’an sekitar tahun 2017, dan mulai deket dengan
          buku tahun 2019an. Tahun 2021 akhir mulai suka nulis, rencana 2023
          pengen punya buku sendiri. Doain ya… <br />
          Eh iya, semua ini berkat ijin Allah ya, karena nggak ada tempat
          manusia buat sombong sedikitpun. <br /> Salam kenal 🙂
        </p>
      </div>
    </section>
  )
}

About.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>
}


export default About
