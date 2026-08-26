"use client";

import Navbar from "../components/layout/Navbar-2";
import MessageSidebar from "../components/messaging/MessageSidebar";
import MessageContent from "../components/messaging/MessageContent";
import RightSidebar from "../components/feed/RightSidebar";

export default function MessagingPage() {
  return (
    <>
      <Navbar />

      <main className="mx-auto mt-20 max-w-[1128px] px-4">
        <div className="flex gap-4">
          {/* Left + Chat */}
          <div className="flex flex-1 overflow-hidden rounded-lg border border-gray-300 bg-white">
            <MessageSidebar />

            <MessageContent />
          </div>

          {/* Right */}
          <div className="w-[300px] shrink-0">
            <RightSidebar />
          </div>
        </div>
      </main>
    </>
  );
}