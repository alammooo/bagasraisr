import MainLayout from "@/components/layout/main/MainLayout"
import { membershipTitle } from "@/data/Membership.tsx/MembershipData"
import { ReactElement } from "react"

const MembershipBertumbuh = () => {
  return (
    <section>
      <div className="flex flex-col gap-8 px-5 bg-sky-950 pt-32 pb-20">
        {membershipTitle.map((el, i) => (
          <h1
            key={i}
            className="text-xl text-center text-amber-200 font-semibold leading-9">
            {el}
          </h1>
        ))}
      </div>
    </section>
  )
}

MembershipBertumbuh.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>
}

export default MembershipBertumbuh
