"use client";

import { ChevronDown, Eye } from "lucide-react";

const profileViews = [
  {
    count: 1,
    text: "works at Digitally Developed",
  },
  {
    count: 1,
    text: "works at UPS Supply Chain Solutions",
  },
  {
    count: 1,
    text: "works at KaaShiv InfoTech",
  },
  {
    count: 23,
    text: "found you through My Network",
  },
  {
    count: 5,
    text: "work at companies with open roles you may be interested in",
  },
  {
    count: 1,
    text: "is a senior leader who shares your job function",
  },
  {
    count: 3,
    text: "have connections who may be hiring for roles that match your job function",
  },
];

export default function ProfileViews() {
  return (
    <section className="overflow-hidden rounded-md border border-gray-300 bg-white">
      {/* Header */}
      <div className="p-6">
        <h1 className="text-xl font-semibold text-gray-900">
          Who's viewed your profile
        </h1>

        <button className="mt-6 flex items-center gap-2 rounded-full bg-[#087f5b] px-4 py-2 text-sm font-semibold text-white">
          Past 90 days
          <ChevronDown size={16} />
        </button>

        <div className="mt-5">
          <h2 className="text-2xl font-semibold text-gray-900">40</h2>

          <p className="text-sm text-gray-600">
            Profile viewers in the past 90 days
          </p>
        </div>
      </div>

      {/* Viewer List */}
      <div>
        {profileViews.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-4 border-t border-gray-200 px-6 py-4"
          >
            {/* Fake profile image */}
            <div className="h-12 w-12 shrink-0 rounded-full bg-gradient-to-br from-gray-300 via-gray-500 to-gray-200" />

            {/* Text */}
            <div className="min-w-0 flex-1">
              <p className="text-lg font-semibold text-gray-900">
                {item.count} {item.text}
              </p>
            </div>

            {/* View */}
            <button className="shrink-0 rounded-full border-2 border-[#0a66c2] px-5 py-2 text-sm font-semibold text-[#0a66c2] hover:bg-blue-50">
              View
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}