"use client";

import { useState } from "react";

type Page = {
  name: string;
  followers: string;
  gradient: string;
};

const GRADIENTS = [
  "from-rose-500 to-red-700",
  "from-sky-400 to-blue-600",
  "from-lime-400 to-green-600",
  "from-slate-700 to-slate-900",
  "from-indigo-400 to-purple-600",
  "from-amber-400 to-orange-600",
  "from-cyan-400 to-teal-600",
  "from-fuchsia-500 to-pink-600",
];
function gradientFor(name: string) {
  let sum = 0;
  for (let i = 0; i < name.length; i++) sum += name.charCodeAt(i);
  return GRADIENTS[sum % GRADIENTS.length];
}

const pages: Omit<Page, "gradient">[] = [
  { name: "Znexsoft", followers: "739 followers" },
  { name: "PhysiQo", followers: "661 followers" },
  { name: "Genify", followers: "89 followers" },
  { name: "CotizaX", followers: "199 followers" },
  { name: "Velspark Technologies", followers: "365 followers" },
  { name: "ZAuth", followers: "394 followers" },
  { name: "ZPay", followers: "93 followers" },
  { name: "Unreal AI (Soonami VC Cohort 7)", followers: "176 followers" },
  { name: "Speedtrackr", followers: "151 followers" },
  { name: "WJ Tech Inc", followers: "1,893 followers" },
  { name: "ZemXpert", followers: "892 followers" },
  { name: "ITOOLAPK", followers: "295 followers" },
  { name: "Endive InfoTech", followers: "47 followers" },
  { name: "Alklysis", followers: "419 followers" },
  { name: "TechUnitys Technologies", followers: "556 followers" },
  { name: "Bulbul Drone Delivery", followers: "4,128 followers" },
  { name: "ViolentCyber", followers: "212 followers" },
  { name: "Digixeno Pvt. Ltd.", followers: "1,727 followers" },
  { name: "PT. NICXON INTERNATIONAL SOLUTIONS", followers: "192 followers" },
  { name: "TheFoOods", followers: "791 followers" },
  {
    name: "Daiki Media | Digital Marketing That Drives Results",
    followers: "3,683 followers",
  },
  { name: "Arcanetify", followers: "362 followers" },
  { name: "Funky Outer Space", followers: "246 followers" },
  { name: "Whitewolf Publishers", followers: "75 followers" },
  { name: "Sypyok", followers: "522 followers" },
  { name: "Affordable Assignment", followers: "58 followers" },
  { name: "Aumiqx Technologies", followers: "536 followers" },
  { name: "Webvex", followers: "288 followers" },
  { name: "PWH SERVICES", followers: "4,291 followers" },
  { name: "RevLink", followers: "255 followers" },
  { name: "Tornetec", followers: "847 followers" },
  { name: "EDUVITECH INDIA PVT. LTD.", followers: "1,783 followers" },
  { name: "Endive Print", followers: "24 followers" },
  { name: "Endive IMS", followers: "44 followers" },
  { name: "HTML5", followers: "662,252 followers" },
  { name: "Software Development", followers: "924,178 followers" },
  { name: "Object-Oriented Programming (OOP)", followers: "605,222 followers" },
  { name: "Content Management Systems (CMS)", followers: "126,657 followers" },
];

function PageRow({ page }: { page: Omit<Page, "gradient"> }) {
  const [following, setFollowing] = useState(true);

  return (
    <div className="flex items-center gap-3 px-4 py-3">
      {/* Logo */}
      <div
        className={`flex h-12 w-12 shrink-0 items-center justify-center rounded bg-gradient-to-br ${gradientFor(
          page.name
        )} text-base font-bold text-white`}
      >
        {page.name.charAt(0).toUpperCase()}
      </div>

      {/* Name + followers */}
      <div className="min-w-0 flex-1">
        <p className="truncate text-[15px] font-semibold text-gray-900">
          {page.name}
        </p>
        <p className="text-[13px] text-gray-500">{page.followers}</p>
      </div>

      {/* Follow toggle */}
      <button
        onClick={() => setFollowing((f) => !f)}
        className={`shrink-0 rounded-full border px-5 py-1 text-sm font-semibold transition ${
          following
            ? "border-gray-500 text-gray-700 hover:bg-gray-100"
            : "border-[#0a66c2] text-[#0a66c2] hover:bg-blue-50"
        }`}
      >
        {following ? "Following" : "Follow"}
      </button>
    </div>
  );
}

function RightSidebar() {
  return (
    <aside className="hidden w-[300px] shrink-0 lg:block">
      {/* Promoted ad card */}
      <div className="overflow-hidden rounded-lg border border-gray-200 bg-white">
        <div className="relative h-16 bg-gradient-to-r from-slate-300 to-slate-400">
          <span className="absolute right-2 top-2 text-[11px] font-semibold text-gray-700">
            Promoted •••
          </span>
          <div className="absolute -bottom-5 left-4 flex h-14 w-14 items-center justify-center rounded bg-white text-lg font-bold text-[#c8102e] shadow">
            C
          </div>
        </div>

        <div className="px-4 pb-4 pt-7">
          <h3 className="text-[15px] font-semibold text-gray-900">
            Castrol ON Liquid Cooling
          </h3>
          <p className="mt-1 text-[13px] font-medium text-gray-800">
            Legacy brand. Future ready.
          </p>
          <p className="mt-1 text-[13px] text-gray-600">
            Keep up with the latest insights from Castrol ON.
          </p>
          <p className="mt-3 text-[12px] text-gray-500">
            Kashi nath &amp; 1 other connection also follow
          </p>
          <button className="mt-3 w-full rounded-full border border-[#0a66c2] py-1.5 text-sm font-semibold text-[#0a66c2] hover:bg-blue-50">
            Follow
          </button>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-4 px-3 text-[12px] leading-6 text-gray-500">
        About · Accessibility · Help Center
        <br />
        Privacy &amp; Terms · Ad Choices · Advertising
        <br />
        Business Services · Get the LinkedIn app · More
        <p className="mt-3 font-semibold text-gray-600">
          LinkedIn Corporation © 2026
        </p>
      </div>
    </aside>
  );
}

export default function CompanyPages() {
  return (
    <div className="min-h-screen bg-[#f4f2ee]">
      <div className="mx-auto flex max-w-[1128px] gap-6 px-4 pt-[84px] pb-10">
        {/* Main */}
        <main className="min-w-0 flex-1">
          <div className="overflow-hidden rounded-lg border border-gray-200 bg-white">
            <h1 className="border-b border-gray-200 px-5 py-4 text-[18px] font-semibold text-gray-900">
              {pages.length} Pages
            </h1>

            <div className="divide-y divide-gray-100">
              {pages.map((page, i) => (
                <PageRow key={`${page.name}-${i}`} page={page} />
              ))}
            </div>
          </div>
        </main>

        <RightSidebar />
      </div>
    </div>
  );
}
