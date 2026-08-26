"use client";

import { useState } from "react";

const filters = [
  "All",
  "Job changes",
  "Birthdays",
  "Work anniversaries",
  "Education",
];

export default function CatchUpTabs() {
  const [active, setActive] = useState("Job changes");

  return (
    <div className="mb-4 overflow-hidden rounded-lg border border-gray-200 bg-white">
      {/* Main tabs */}
      <div className="flex border-b">
        <button className="px-8 py-4 text-lg font-semibold text-gray-700">
          Grow
        </button>

        <button className="border-b-2 border-[#057642] px-8 py-4 text-lg font-semibold text-[#057642]">
          Catch up
        </button>
      </div>

      {/* Filters */}
      <div className="flex gap-2 overflow-x-auto p-4">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActive(filter)}
            className={`whitespace-nowrap rounded-full border px-4 py-2 text-sm font-semibold transition ${
              active === filter
                ? "border-[#057642] bg-[#057642] text-white"
                : "border-gray-400 bg-white text-gray-700 hover:bg-gray-50"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>
    </div>
  );
}