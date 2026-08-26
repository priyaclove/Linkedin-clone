"use client";

import Navbar from "../../components/layout/Navbar-2";
import NetworkSidebar from "../../components/network/NetworkSidebar";
import CatchUpTabs from "../../components/network/CatchUpTabs";
import CatchUpFeed from "../../components/network/CatchUpFeed";

export default function CatchUpPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#f4f2ee] pt-[64px]">
        <div className="mx-auto grid max-w-[1128px] grid-cols-1 gap-5 px-4 py-6 md:grid-cols-[340px_1fr]">
          
          {/* Left */}
          <NetworkSidebar />

          {/* Right */}
          <section>
            <CatchUpTabs />
            <CatchUpFeed />
          </section>

        </div>
      </main>
    </>
  );
}