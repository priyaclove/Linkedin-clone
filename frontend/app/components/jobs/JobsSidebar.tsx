"use client";

import {
  Bookmark,
  Bell,
  Settings2,
  FileText,
  ChevronRight,
  Lightbulb,
} from "lucide-react";

type Props = {
  side?: "left" | "right";
};

export default function JobsSidebar({ side = "left" }: Props) {
  if (side === "right") {
    return (
      <aside className="hidden w-[280px] shrink-0 lg:block">
        <div className="rounded-lg border border-gray-200 bg-white p-5">
          <h2 className="text-[16px] font-semibold text-gray-900">
            Job search tips
          </h2>

          <div className="mt-5 space-y-5">
            <div className="flex gap-3">
              <Lightbulb className="mt-0.5 shrink-0 text-gray-600" size={20} />

              <div>
                <p className="text-sm font-semibold">Keep your profile updated</p>
                <p className="mt-1 text-xs leading-5 text-gray-600">
                  Make sure your skills and experience are up to date.
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <FileText className="mt-0.5 shrink-0 text-gray-600" size={20} />

              <div>
                <p className="text-sm font-semibold">Complete your resume</p>
                <p className="mt-1 text-xs leading-5 text-gray-600">
                  A complete profile can help recruiters find you.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4 rounded-lg border border-gray-200 bg-white p-5">
          <p className="text-sm font-semibold">Explore Premium</p>

          <p className="mt-2 text-xs leading-5 text-gray-600">
            See who's viewed your profile and get more job insights.
          </p>

          <button className="mt-4 rounded-full border border-[#915907] px-4 py-1.5 text-sm font-semibold text-[#915907] hover:bg-[#fff8e8]">
            Try Premium
          </button>
        </div>

        <div className="mt-5 px-3 text-center text-xs leading-6 text-gray-500">
          About · Accessibility · Help Center
          <br />
          Privacy & Terms · Advertising
          <br />
          Business Services · More
          <br />
          <span className="font-semibold text-gray-700">
            LinkedIn Corporation © 2026
          </span>
        </div>
      </aside>
    );
  }

  return (
    <aside className="hidden w-[220px] shrink-0 md:block">
      <div className="overflow-hidden rounded-lg border border-gray-200 bg-white">
        <div className="h-14 bg-gradient-to-r from-[#0a5265] to-[#0a66c2]" />

        <div className="px-4 pb-4">
          <div className="-mt-7 flex h-14 w-14 items-center justify-center rounded-full border-2 border-white bg-gray-200 text-xl font-bold">
            P
          </div>

          <h2 className="mt-3 text-[16px] font-semibold">
            Jaya Kumari
          </h2>

          <p className="mt-1 text-xs leading-5 text-gray-600">
            Software Developer | Full-Stack Development
          </p>
        </div>
      </div>

      <div className="mt-3 overflow-hidden rounded-lg border border-gray-200 bg-white">
        <button className="flex w-full items-center gap-3 border-b px-4 py-3 text-left text-sm hover:bg-gray-50">
          <Bookmark size={18} />
          <span className="flex-1 font-medium">My jobs</span>
          <ChevronRight size={17} />
        </button>

        <button className="flex w-full items-center gap-3 border-b px-4 py-3 text-left text-sm hover:bg-gray-50">
          <Bell size={18} />
          <span className="flex-1 font-medium">Job alerts</span>
          <ChevronRight size={17} />
        </button>

        <button className="flex w-full items-center gap-3 px-4 py-3 text-left text-sm hover:bg-gray-50">
          <Settings2 size={18} />
          <span className="flex-1 font-medium">Job preferences</span>
          <ChevronRight size={17} />
        </button>
      </div>

      <div className="mt-3 rounded-lg border border-gray-200 bg-white p-4">
        <p className="text-sm font-semibold">Manage your job preferences</p>

        <p className="mt-2 text-xs leading-5 text-gray-600">
          Tell recruiters what type of opportunities you're looking for.
        </p>

        <button className="mt-3 text-sm font-semibold text-[#0a66c2] hover:underline">
          Update preferences
        </button>
      </div>
    </aside>
  );
}