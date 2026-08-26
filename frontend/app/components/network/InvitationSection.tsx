"use client";

import { Settings } from "lucide-react";
import { useState } from "react";

export default function InvitationSection() {
  const [activeTab, setActiveTab] = useState<"received" | "sent">(
    "received"
  );

  return (
    <section className="overflow-hidden rounded-lg border border-gray-200 bg-white">
      {/* Header */}
      <div className="flex items-center justify-between border-b px-5 py-4">
        <h1 className="text-[16px] font-semibold">
          Manage invitations
        </h1>

        <button className="rounded-full p-2 hover:bg-gray-100">
          <Settings size={18} />
        </button>
      </div>

      {/* Tabs */}
      <div className="flex border-b px-5">
        <button
          onClick={() => setActiveTab("received")}
          className={`relative px-3 py-3 text-sm font-semibold ${
            activeTab === "received"
              ? "text-[#00875a]"
              : "text-gray-600"
          }`}
        >
          Received

          {activeTab === "received" && (
            <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#00875a]" />
          )}
        </button>

        <button
          onClick={() => setActiveTab("sent")}
          className={`relative px-3 py-3 text-sm font-semibold ${
            activeTab === "sent"
              ? "text-[#00875a]"
              : "text-gray-600"
          }`}
        >
          Sent

          {activeTab === "sent" && (
            <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#00875a]" />
          )}
        </button>
      </div>

      {/* Filter */}
      <div className="px-5 py-3">
        <button className="rounded-full bg-[#057642] px-4 py-2 text-xs font-semibold text-white">
          Focused (0)
        </button>
      </div>

      {/* Empty state */}
      <div className="flex min-h-[270px] flex-col items-center justify-center px-5 pb-8 text-center">
        <div className="mb-5 flex h-[90px] w-[110px] items-center justify-center rounded-full bg-gray-50">
          <div className="text-5xl">🧑‍💻</div>
        </div>

        <h2 className="text-[18px] font-semibold">
          {activeTab === "received"
            ? "No new invitations"
            : "No sent invitations"}
        </h2>

        <p className="mt-2 max-w-[360px] text-sm text-gray-500">
          {activeTab === "received"
            ? "You don't have any new invitations right now."
            : "You haven't sent any invitations yet."}
        </p>
      </div>
    </section>
  );
}