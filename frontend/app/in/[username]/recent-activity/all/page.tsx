import Navbar from "../../../../components/layout/Navbar-2";
import ActivitySidebar from "../../../../components/profile/ActivitySidebar";
import ActivityTabs from "../../../../components/profile/ActivityTabs";
import ActivityEmpty from "../../../../components/profile/ActivityEmpty";
import PeopleYouMayKnow from "../../../../components/profile/PeopleYouMayKnow";

export default function ActivityPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#f3f2ef] pt-[72px]">
        <div className="mx-auto grid max-w-[1128px] grid-cols-1 gap-5 px-4 lg:grid-cols-[235px_minmax(0,1fr)_300px]">

          {/* LEFT */}
          <ActivitySidebar />

          {/* CENTER */}
          <section className="overflow-hidden rounded-lg border border-gray-200 bg-white">
            <ActivityTabs />
            <ActivityEmpty />
          </section>

          {/* RIGHT */}
          <PeopleYouMayKnow />

        </div>
      </main>
    </>
  );
}