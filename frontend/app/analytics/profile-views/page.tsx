import Navbar from "../../components/layout/Navbar-2";
import ProfileViews from "../../components/analytics/ProfileViews";
import RightSidebar from "../../components/analytics/ RightSidebar";

export default function ProfileViewsPage() {
  return (
    <div className="min-h-screen bg-[#f4f2ee]">
      <Navbar />

      <main className="mx-auto flex max-w-[1200px] gap-7 px-4 py-7 mt-16">
        {/* LEFT */}
        <div className="w-full max-w-[820px]">
          <ProfileViews />
        </div>

        {/* RIGHT */}
        <div className="hidden w-[320px] shrink-0 lg:block">
          <RightSidebar />
        </div>
      </main>
    </div>
  );
}