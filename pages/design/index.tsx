import MainLayout from "@/components/layout/main/MainLayout"
import { ReactElement } from "react"

const Design = () => {
  return (
    <section
      id="design"
      className="md:mt-44 mt-32">
      <h1 className="text-center text-5xl font-bold uppercase tracking-widest">
        Design
      </h1>
      <div className="mx-auto grid md:grid-cols-4 gap-5 px-3 py-24 md:px-24">
        <i className="md:col-span-2 md:row-span-2 md:max-h-[600px]">
          <img
            className="h-full w-full object-cover"
            src="https://plus.unsplash.com/premium_photo-1665426466670-cbd95f8b16a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
            alt="img1"
          />
        </i>
        <i className="">
          <img
            src="https://images.unsplash.com/photo-1683661649247-c23fa93b15e5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1462&q=80"
            alt="img2"
          />
        </i>
        <i className="">
          <img
            src="https://images.unsplash.com/photo-1683661649729-1053579e0d22?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1484&q=80"
            alt="img3"
          />
        </i>
        <i className="">
          <img
            src="https://images.unsplash.com/photo-1683735669803-2cf67a3edda5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1091&q=80"
            alt="img4"
          />
        </i>
        <i className="">
          <img
            src="https://images.unsplash.com/photo-1683735669803-2cf67a3edda5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1091&q=80"
            alt="img5"
          />
        </i>
        <i className="">
          <img
            src="https://images.unsplash.com/photo-1683735669803-2cf67a3edda5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1091&q=80"
            alt="img6"
          />
        </i>
        <i className="">
          <img
            src="https://images.unsplash.com/photo-1683735669803-2cf67a3edda5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1091&q=80"
            alt="img7"
          />
        </i>
        <i className="md:col-span-2 md:row-span-2">
          <img
            src="https://images.unsplash.com/photo-1683806743160-2fc2e159dc66?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            alt="img8"
          />
        </i>
        <i className="">
          <img
            src="https://images.unsplash.com/photo-1683735669803-2cf67a3edda5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1091&q=80"
            alt="img7"
          />
        </i>
        <i className="">
          <img
            src="https://images.unsplash.com/photo-1683802174658-6bf2e4caa7aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1111&q=80"
            alt="img7"
          />
        </i>
      </div>
    </section>
  )
}

export default Design

Design.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>
}
