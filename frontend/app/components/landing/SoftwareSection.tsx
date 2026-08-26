"use client";

import { ChevronDown } from "lucide-react";

const softwareCategories = [
  "E-Commerce Platforms",
  "CRM Software",
  "Human Resources Management Systems",
  "Recruiting Software",
  "Sales Intelligence Software",
  "Project Management Software",
  "Help Desk Software",
  "Social Networking Software",
  "Desktop Publishing Software",

];

const GameCategories = [
    "Patches",
    "Zip",
    "Mini Sudoku",
    "Queens",
    "Tango",
    "Pinpoint",
    "Crossclimb",
];

export default function SoftwareSection() {
  return (
    <>
      {/* Explore Topics */}
      <section className="bg-white py-24">
        <div className="mx-auto flex max-w-7xl flex-col gap-16 px-6 lg:flex-row">
          <div className="w-full lg:w-[35%]">
            <h2 className="text-[32px]  font-light leading-tight text-[#191919]">
            Discover the best software tools
            </h2>

            <p className="mt-2 text-xl leading-7 text-gray-600">
            Connect with buyers who have first-hand experience to find the best products for you.
            </p>
          </div>

          <div className="flex flex-1 flex-wrap content-start gap-4">
            {softwareCategories.map((item) => (
              <button
                key={item}
               className="flex h-12 items-center rounded-full border border-gray-500  px-5 text-base font-semibold text-gray-700 transition hover:border-black hover:bg-gray-100"
              >
                {item}
              </button>
            ))}

            <button className=" flex h-12 items-center justify-center rounded-full border border-[#0A66C2] px-6 py-3 text-lg font-semibold text-[#0A66C2] transition hover:bg-blue-50">
              Show all
            </button>
          </div>
        </div>
      </section>

      {/* Jobs */}
      <section className="bg-white py-24">
        <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6 lg:flex-row">
          <div className="w-full lg:w-[35%]">
            <h2 className="text-[32px] font-medium leading-tight text-[#191919]">
            Keep your mind sharp with games
            </h2>
            <p className="mt-2 text-xl leading-7 text-gray-600">
            Take a break and reconnect with your network through quick daily games.
            </p>
          </div>

          <div className="flex flex-1 flex-wrap content-start gap-2">
            {GameCategories.map((item) => (
              <button
                key={item}
                className="flex h-12 items-center rounded-full border border-gray-500 bg-white px-6 py-3 text-lg font-semibold text-gray-700 transition hover:border-black hover:bg-gray-100"
              >
                {item}
              </button>
            ))}
            
            <button className=" flex h-12 items-centerflex items-center gap-2 rounded-full border border-gray-500 bg-white px-6 py-3 text-lg font-semibold text-gray-700 transition hover:border-black hover:bg-gray-100">
              Show more
              <ChevronDown size={18} />
            </button>
          </div>
        </div>
      </section>
    </>
  );
}