import { LayoutProps } from "@/interfaces/interface"
import Footer from "./Footer"
import Navbar from "./Navbar"


const MainLayout = ({ children }: LayoutProps) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default MainLayout
