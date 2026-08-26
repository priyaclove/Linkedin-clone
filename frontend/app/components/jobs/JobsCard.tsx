"use client";

import { Bookmark, MoreHorizontal, Clock3 } from "lucide-react";

export type Job = {
  id: number;
  title: string;
  company: string;
  location: string;
  type: string;
  workMode: string;
  posted: string;
  applicants: string;
  logo: string;
  easyApply?: boolean;
};

type Props = {
  job: Job;
};

export default function JobCard({ job }: Props) {
  return (
    <div className="border-b border-gray-200 bg-white px-5 py-5 hover:bg-gray-50">
      <div className="flex gap-4">
        {/* Company Logo */}
        <div className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-md border border-gray-200 bg-white">
          <img
            src={job.logo}
            alt={job.company}
            className="h-full w-full object-contain"
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
          />
        </div>

        {/* Job Details */}
        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-3">
            <div>
              <h3 className="cursor-pointer text-[17px] font-semibold text-[#0a66c2] hover:underline">
                {job.title}
              </h3>

              <p className="mt-1 text-[14px] font-medium text-gray-800">
                {job.company}
              </p>

              <p className="mt-1 text-[14px] text-gray-600">
                {job.location}
              </p>
            </div>

            <button className="rounded-full p-2 hover:bg-gray-100">
              <MoreHorizontal size={21} />
            </button>
          </div>

          <div className="mt-2 flex flex-wrap items-center gap-2 text-[13px] text-gray-600">
            <span>{job.type}</span>
            <span>·</span>
            <span>{job.workMode}</span>
          </div>

          <p className="mt-2 flex items-center gap-1 text-[13px] text-gray-500">
            <Clock3 size={14} />
            {job.posted}
          </p>

          <p className="mt-1 text-[13px] text-gray-500">
            {job.applicants}
          </p>

          <div className="mt-4 flex items-center gap-3">
            {job.easyApply && (
              <button className="rounded-full bg-[#0a66c2] px-4 py-1.5 text-sm font-semibold text-white hover:bg-[#004182]">
                Easy Apply
              </button>
            )}

            <button className="rounded-full border border-[#0a66c2] px-4 py-1.5 text-sm font-semibold text-[#0a66c2] hover:bg-blue-50">
              Apply
            </button>

            <button
              className="ml-auto rounded-full p-2 hover:bg-gray-100"
              title="Save job"
            >
              <Bookmark size={21} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}