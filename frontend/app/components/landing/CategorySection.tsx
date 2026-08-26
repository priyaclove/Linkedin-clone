"use client";

import { ChevronDown } from "lucide-react";

const exploreTopics = [
  "Career",
  "Productivity",
  "Finance",
  "Soft Skills & Emotional Intelligence",
  "Project Management",
  "Education",
  "Technology",
  "Leadership",
  "Ecommerce",
];

const jobCategories = [
  "Engineering",
  "Business Development",
  "Finance",
  "Administrative Assistant",
  "Retail Associate",
  "Customer Service",
  "Operations",
  "Information Technology",
  "Marketing",
  "Human Resources",
];

export default function CategorySection() {
  return (
    <>
      {/* Explore Topics */}
      <section className="bg-[#f3f2ef] py-24">
        <div className="mx-auto flex max-w-7xl flex-col gap-16 px-6 lg:flex-row">
          <div className="w-full lg:w-[35%]">
            <h2 className="text-[32px]  font-light leading-tight text-[#191919]">
              Explore top LinkedIn content
            </h2>

            <p className="mt-2 text-xl leading-7 text-gray-600">
              Discover relevant posts and expert insights — curated by topic
              and in one place.
            </p>
          </div>

          <div className="flex flex-1 flex-wrap content-start gap-4">
            {exploreTopics.map((item) => (
              <button
                key={item}
               className="flex h-10 items-center rounded-full border border-gray-500 bg-[#f3f2ef] px-5 text-base font-semibold text-gray-700 transition hover:border-black hover:bg-gray-100"
              >
                {item}
              </button>
            ))}

            <button className=" flex h-10 items-center justify-center rounded-full border border-[#0A66C2] px-6 py-3 text-lg font-semibold text-[#0A66C2] transition hover:bg-blue-50">
              Show all
            </button>
          </div>
        </div>
      </section>

      {/* Jobs */}
      <section className="bg-white py-24">
        <div className="mx-auto flex max-w-7xl flex-col gap-16 px-6 lg:flex-row">
          <div className="w-full lg:w-[35%]">
            <h2 className="text-[32px] font-medium leading-tight text-[#191919]">
              Find the right job or internship for you
            </h2>
          </div>

          <div className="flex flex-1 flex-wrap content-start gap-4">
            {jobCategories.map((item) => (
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