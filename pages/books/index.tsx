import MainLayout from "@/components/layout/main/MainLayout"
import { ReactElement } from "react"

const Books = () => {
  return (
    <section className="mx-auto max-w-5xl my-32 container md:mt-44">
      <div className="flex flex-col gap-7 mb-10">
        <h1 className="text-5xl font-bold text-center uppercase">BOOKS</h1>
        <p className="px-7 text-center leading-7 text-zinc-700 text-sm">
          Alhamdulillah. Berawal dari mencoba untuk menulis buku pertama, dan
          saya merasa cukup berat juga membutuhkan waktu lebih lama, akhirnya
          saya mencoba projek kecil yang niat awalnya untuk membiasakan diri
          menulis. Setelah berjalan, yang terjadi justru melahirkan
          tulisan-tulisan ini dengan ijin Allah.
        </p>
      </div>
      <hr className="mb-10 w-1/2 mx-auto" />
      <div className="flex flex-col gap-6">
        <div className="flex flex-col md:flex-row md:gap-20">
          <div className="mx-auto md:h-[500px] shadow-sm">
            <img
              src="https://bagasraisr.com/wp-content/uploads/2022/08/Artboard-1-1024x640.jpg"
              alt=""
              className="w-52 object-cover h-72 md:w-full md:h-full"
            />
          </div>
          <div className="max-w-xl">
            <h1 className="tracking-wide font-bold text-zinc-600 text-center text-2xl mb-8 md:text-left md:text-5xl">
              Akhirnya Selesai Juga (2022)
            </h1>
            <p className="px-5 leading-7 text-justify md:px-0 md:text-lg text-zinc-600">
              Buku kedua yang masih mengusung tema yang sama dengan kakaknya,
              Student Guidebook for Dummies. Cover-nya jauh keliatan lebih culun
              ketimbang aslinya. Aslinya, culun parah. Jika menemukan buku
              dengan cover seperti ini, harap langsung dibawa ke kasir dan
              bayarkan sejumlah uang untuk dibawa pulang. Sebarkan pesan ini ke
              10 teman kamu.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

Books.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>
}

export default Books
