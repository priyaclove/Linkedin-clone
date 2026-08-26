"use client";

import NetworkSidebar from "../../../components/network/NetworkSidebar";
import InvitationSection from "../../../components/network/InvitationSection";
import SuggestionList from "../../../components/network/SuggestionList";
import Navbar from "../../../components/layout/Navbar-2";
import Footer from "../../../components/layout/Footer";
    
export default function ReceivedInvitationsPage() {
  return (
    <>  <Navbar />
    <main className="min-h-screen bg-[#f4f2ee] pt-[68px]">
      <div className="mx-auto flex max-w-[1128px] gap-5 px-4 py-5">
        {/* LEFT */}
        <NetworkSidebar />

        {/* CENTER */}
        <div className="min-w-0 flex-1 max-w-[680px]">
          <InvitationSection />

          <SuggestionList />
        </div>

        {/* RIGHT */}
        <aside className="hidden w-[220px] shrink-0 lg:block">
          <div className="rounded-lg border border-gray-200 bg-white p-4">
            <div className="flex h-[155px] items-center justify-center bg-[#057642]">
              <div className="text-center text-white">
                <p className="text-xl font-bold">
                  See who's
                </p>
                <p className="text-xl font-bold">
                  hiring
                </p>
                <p className="text-xl font-bold">
                  on LinkedIn
                </p>
              </div>
            </div>

            <div className="mt-4 text-center">
              <button className="rounded-full border border-[#0a66c2] px-4 py-2 text-xs font-semibold text-[#0a66c2]">
                Explore jobs
              </button>
            </div>
          </div>

          <div className="mt-5 px-3 text-center text-[11px] leading-5 text-gray-500">
            About &nbsp; Accessibility &nbsp; Help Center
            <br />
            Privacy & Terms &nbsp; Advertising
            <br />
            Business Services &nbsp; More
            <br />
            <span className="mt-2 inline-block font-semibold text-[#0a66c2]">
              LinkedIn
            </span>{" "}
            Corporation © 2026
            </div>
          </aside>
        </div>
      </main>
      <Footer />
    </>
  );
}