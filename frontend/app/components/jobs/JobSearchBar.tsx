"use client";

import { useState } from "react";
import {
  Search,
  MapPin,
  SlidersHorizontal,
  ChevronDown,
} from "lucide-react";

type Props = {
  onSearch: (value: string) => void;
};

export default function JobSearchBar({ onSearch }: Props) {
  const [keyword, setKeyword] = useState("");
  const [location, setLocation] = useState("");

  const handleSearch = () => {
    onSearch(`${keyword} ${location}`.trim());
  };

  return (
    <div className="rounded-lg border border-gray-200 bg-white p-4">
      <div className="flex flex-col gap-3 md:flex-row">
        {/* Search */}
        <div className="flex flex-1 items-center gap-2 rounded-md border border-gray-400 bg-white px-3">
          <Search size={19} className="text-gray-600" />

          <input
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleSearch();
            }}
            placeholder="Search by title, skill, or company"
            className="h-11 w-full text-sm outline-none"
          />
        </div>

        {/* Location */}
        <div className="flex flex-1 items-center gap-2 rounded-md border border-gray-400 bg-white px-3">
          <MapPin size={19} className="text-gray-600" />

          <input
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Location"
            className="h-11 w-full text-sm outline-none"
          />
        </div>

        <button
          onClick={handleSearch}
          className="rounded-full bg-[#0a66c2] px-6 py-2 text-sm font-semibold text-white hover:bg-[#004182]"
        >
          Search
        </button>
      </div>

      {/* Filters */}
      <div className="mt-4 flex gap-2 overflow-x-auto pb-1">
        <button className="flex shrink-0 items-center gap-2 rounded-full border border-gray-400 px-4 py-2 text-sm font-medium hover:bg-gray-100">
          Date posted
          <ChevronDown size={15} />
        </button>

        <button className="flex shrink-0 items-center gap-2 rounded-full border border-gray-400 px-4 py-2 text-sm font-medium hover:bg-gray-100">
          Experience level
          <ChevronDown size={15} />
        </button>

        <button className="flex shrink-0 items-center gap-2 rounded-full border border-gray-400 px-4 py-2 text-sm font-medium hover:bg-gray-100">
          Job type
          <ChevronDown size={15} />
        </button>

        <button className="flex shrink-0 items-center gap-2 rounded-full border border-gray-400 px-4 py-2 text-sm font-medium hover:bg-gray-100">
          Remote
          <ChevronDown size={15} />
        </button>

        <button className="flex shrink-0 items-center gap-2 rounded-full border border-gray-400 px-4 py-2 text-sm font-medium hover:bg-gray-100">
          <SlidersHorizontal size={15} />
          All filters
        </button>
      </div>
    </div>
  );
}