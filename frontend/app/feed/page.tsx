"use client";

import Navbar from "../components/layout/Navbar-2";
import LeftSidebar from "../components/feed/LeftSidebar";
import FeedContent from "../components/feed/FeedContent";
import RightSidebar from "../components/feed/RightSidebar";

export default function Feed() {
  return (
    <div className = "bg-[#F4F2EE]">
      <Navbar />

      <main className="mx-auto mt-20 grid max-w-[1128px] grid-cols-[225px_1fr_300px] gap-6 ">
        <LeftSidebar />
        <FeedContent />
        <RightSidebar />
      </main>
    </div>
  );
}