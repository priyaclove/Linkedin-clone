"use client";

import { ChevronDown, MoreHorizontal, Pencil, X } from "lucide-react";
import Image from "next/image";

export default function RightSidebar() {
  return (
    <aside className="space-y-5">
      {/* Advertisement */}
      <div className="overflow-hidden rounded-xl border border-gray-300 bg-white">
        {/* Ad Image */}
        <div className="relative h-24 bg-[#d9e8e8]">
          <div className="absolute left-5 top-4 flex h-16 w-16 items-center justify-center rounded-lg bg-white shadow">
            <Image src="/images/state_bank_of_india_logo.jpeg" alt="State Bank of India" width={64} height={64} />
          </div>

          <div className="absolute right-3 top-2 flex items-center gap-1 rounded-full bg-white px-2 py-1 text-xs font-semibold text-gray-600">
            Promoted
            <MoreHorizontal size={16} />
          </div>
        </div>

        {/* Ad Content */}
        <div className="p-4">
          <h2 className="text-base font-semibold text-gray-900">
            State Bank of India
          </h2>

          <p className="mt-1 text-sm text-gray-800">
            jaya, Master your money with State Bank of India
          </p>

          <p className="mt-3 text-sm text-gray-700">
            Your financial knowledge hub is here!
          </p>

          <div className="mt-3 flex items-center gap-2">
            <div className="flex -space-x-2">
              <div className="h-7 w-7 rounded-full border-2 border-white bg-gray-400" />
              <div className="h-7 w-7 rounded-full border-2 border-white bg-gray-500" />
              <div className="h-7 w-7 rounded-full border-2 border-white bg-gray-600" />
            </div>

            <p className="text-xs text-gray-600">
              <span className="font-semibold">Kashi nath</span> & 136 other
              connections also follow
            </p>
          </div>

          <button className="mt-4 w-full rounded-full border-2 border-[#0a66c2] py-2 font-semibold text-[#0a66c2] hover:bg-blue-50">
            Follow
          </button>
        </div>
      </div>

      {/* Footer */}
      <div className="px-4 text-center text-xs text-gray-600">
        <div className="flex flex-wrap justify-center gap-x-5 gap-y-3">
          <span>About</span>
          <span>Accessibility</span>
          <span>Help Center</span>
          <span>Privacy & Terms</span>
          <span>Ad Choices</span>
          <span>Advertising</span>
          <span>Business Services</span>

          <span className="flex items-center gap-1">
            Get the LinkedIn app
          </span>

          <span className="flex items-center gap-1">
            More
            <ChevronDown size={12} />
          </span>
        </div>

        <p className="mt-5">
          <span className="font-bold text-[#0a66c2]">LinkedIn</span>{" "}
          LinkedIn Corporation © 2026
        </p>
      </div>

    </aside>
  );
}