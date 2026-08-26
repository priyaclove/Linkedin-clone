"use client";

import Image from "next/image";
import {
  Bookmark,
  Briefcase,
  BadgeCheck,
  ClipboardList,
  MoreHorizontal,
  Pencil,
  Sparkles,
  Star,
  Users,
  X,
} from "lucide-react";

type Job = {
  title: string;
  company: string;
  location: string;
  time?: string;
  topApplicant?: boolean;
  activelyReviewing?: boolean;
  connection?: boolean;
  promoted?: boolean;
  apply?: boolean;
  verified?: boolean;
  dismissible?: boolean;
};

// Deterministic accent color for a company's letter-avatar placeholder.
const COLORS = [
  "bg-[#0a66c2]",
  "bg-[#b24020]",
  "bg-[#45712e]",
  "bg-[#8b5cf6]",
  "bg-[#0891b2]",
  "bg-[#c2410c]",
  "bg-[#be123c]",
  "bg-[#334155]",
];
function logoColor(name: string) {
  let sum = 0;
  for (let i = 0; i < name.length; i++) sum += name.charCodeAt(i);
  return COLORS[sum % COLORS.length];
}

const matchJobs: Job[] = [
  {
    title: "PHP Developer",
    company: "Data Eminence",
    location: "India (Remote)",
    time: "1 day ago",
    topApplicant: true,
    apply: true,
  },
  {
    title: "Laravel Developer",
    company: "Webkul",
    location: "Bawana (On-site)",
    time: "5 months ago",
    topApplicant: true,
  },
  {
    title: "PHP Developer",
    company: "Jobgether",
    location: "India (Remote)",
    time: "4 days ago",
    apply: true,
    dismissible: true,
  },
  {
    title: "PHP Developer",
    company: "Sundew",
    location: "West Bengal, India (On-site)",
    verified: true,
    activelyReviewing: true,
    promoted: true,
    apply: true,
    dismissible: true,
  },
];

const moreJobs: Job[] = [
  {
    title: "Full Stack Engineer",
    company: "Accenture in India",
    location: "Mumbai Metropolitan Region",
    connection: true,
    promoted: true,
    verified: true,
    dismissible: true,
  },
  {
    title: "Web Developer",
    company: "Accenture in India",
    location: "Navi Mumbai",
    promoted: true,
    verified: true,
    dismissible: true,
  },
  {
    title: "Web Developer",
    company: "PansoficSolutions",
    location: "Jammu",
    time: "6 days ago",
    dismissible: true,
  },
  {
    title: "Junior Web Developer",
    company: "Ooze IT Solutions",
    location: "Udaipur",
    time: "1 month ago",
    dismissible: true,
  },
  {
    title: "Frontend / Full-Stack Developer",
    company: "Softpro India",
    location: "Lucknow",
    time: "2 weeks ago",
    dismissible: true,
  },
  {
    title: "Full Stack Developer (Zirakpur, Panchkula, Mohali, Chandigarh)",
    company: "Sahayak Associates",
    location: "Panchkula (On-site)",
    time: "2 weeks ago",
    dismissible: true,
  },
  {
    title: "Full Stack Developer (PHP & Vue.js/React.js)",
    company: "Innovature",
    location: "Kochi",
    time: "1 year ago",
    dismissible: true,
  },
  {
    title: "Moodle : Full - Stack Web Developer",
    company: "Edvanta",
    location: "Noida",
    time: "1 month ago",
    dismissible: true,
  },
  {
    title: "Software Engineer",
    company: "Analytix Business Solutions (India) Pvt. Ltd.",
    location: "Ahmedabad (On-site) · 75K INR/month",
    activelyReviewing: true,
    promoted: true,
    apply: true,
    dismissible: true,
  },
  {
    title: "Full Stack Developer - Fresher",
    company: "Munim - Accounting, Billing & GST Software",
    location: "Surat",
    time: "1 day ago",
    dismissible: true,
  },
  {
    title: "Full Stack Engineer",
    company: "Sciometrix",
    location: "Gurugram (Hybrid)",
    activelyReviewing: true,
    time: "3 days ago",
    apply: true,
    dismissible: true,
  },
  {
    title: "Full Stack Developer",
    company: "Comviva",
    location: "Gurugram",
    connection: true,
    verified: true,
    time: "2 days ago",
    dismissible: true,
  },
  {
    title: "Software Development Engineer L2",
    company: "Truworth Wellness",
    location: "Jaipur (On-site)",
    verified: true,
    activelyReviewing: true,
    promoted: true,
    apply: true,
    dismissible: true,
  },
  {
    title: "Web Application Developer",
    company: "SHRI KRISHNA PLACEMENT",
    location: "Vadodara",
    time: "2 months ago",
    dismissible: true,
  },
  {
    title: "Full Stack Developer CMS",
    company: "Shivohm",
    location: "Manvi",
    time: "2 weeks ago",
    dismissible: true,
  },
];

function CompanyLogo({ company }: { company: string }) {
  return (
    <div
      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded text-lg font-bold text-white ${logoColor(
        company
      )}`}
    >
      {company.charAt(0).toUpperCase()}
    </div>
  );
}

function JobRow({ job }: { job: Job }) {
  return (
    <div className="relative flex gap-3 px-4 py-3 hover:bg-gray-50">
      <CompanyLogo company={job.company} />

      <div className="min-w-0 flex-1 pr-6">
        <div className="flex items-center gap-1">
          <h3 className="cursor-pointer truncate text-[15px] font-semibold text-[#0a66c2] hover:underline">
            {job.title}
          </h3>
          {job.verified && (
            <BadgeCheck size={15} className="shrink-0 text-gray-500" />
          )}
        </div>

        <p className="truncate text-[13px] text-gray-700">
          {job.company} · {job.location}
        </p>

        {job.topApplicant && (
          <p className="mt-1 flex items-center gap-1 text-[12px] text-[#915907]">
            <Star size={13} className="fill-[#e7a33e] text-[#e7a33e]" />
            You&apos;d be a top applicant
          </p>
        )}

        {job.activelyReviewing && (
          <p className="mt-1 flex items-center gap-1 text-[12px] text-[#0a8a5f]">
            <BadgeCheck size={13} />
            Actively reviewing applicants
          </p>
        )}

        {job.connection && (
          <p className="mt-1 flex items-center gap-1 text-[12px] text-gray-500">
            <Users size={13} />1 connection works here
          </p>
        )}

        <div className="mt-1 flex items-center gap-2 text-[12px] text-gray-500">
          {job.promoted && <span>Promoted</span>}
          {job.promoted && (job.time || job.apply) && <span>·</span>}
          {job.time && <span>{job.time}</span>}
          {job.apply && (
            <span className="flex items-center gap-1 font-medium text-gray-700">
              <span className="rounded bg-[#0a66c2] px-1 text-[10px] font-bold text-white">
                in
              </span>
              Apply
            </span>
          )}
        </div>
      </div>

      {job.dismissible && (
        <button className="absolute right-3 top-3 rounded-full p-1 text-gray-500 hover:bg-gray-200">
          <X size={18} />
        </button>
      )}
    </div>
  );
}

function LeftSidebar() {
  return (
    <aside className="hidden w-[225px] shrink-0 md:block">
      {/* Profile card */}
      <div className="overflow-hidden rounded-lg border border-gray-200 bg-white">
        <div className="relative h-16 bg-gradient-to-r from-[#0a5265] to-[#0a66c2]">
          <div className="absolute right-2 top-2 text-right text-[11px] font-semibold leading-tight text-white">
            Jaya Kumari
            <br />
            <span className="font-normal">web developer</span>
          </div>
        </div>

        <div className="px-4 pb-4">
          <div className="relative z-10 -mt-9 h-[72px] w-[72px] overflow-hidden rounded-full border-2 border-white bg-white">
            <Image
              src="/images/profile-image.jpeg"
              alt="Profile"
              width={72}
              height={72}
              className="h-full w-full object-cover"
            />
          </div>

          <h2 className="mt-2 flex items-center gap-1 text-[15px] font-semibold">
            jaya kumari
            <BadgeCheck size={15} className="text-gray-500" />
          </h2>

          <p className="mt-1 text-xs leading-5 text-gray-600">
            Software Developer | Expert in Full-Stack Development | Specialized
            in Laravel &amp; …
          </p>

          <p className="mt-1 text-xs text-gray-500">Mandi, Himachal Pradesh</p>

          <div className="mt-3 flex items-center gap-2 border-t border-gray-100 pt-3">
            <Image
              src="/images/company-image.jpeg"
              alt="Company"
              width={20}
              height={20}
              className="rounded"
            />
            <span className="text-xs font-semibold text-gray-800">
              Cloveode Technologies
            </span>
          </div>
        </div>
      </div>

      {/* Links card */}
      <div className="mt-2 overflow-hidden rounded-lg border border-gray-200 bg-white">
        <button className="flex w-full items-center gap-3 px-4 py-3 text-left text-sm font-semibold text-gray-800 hover:bg-gray-50">
          <ClipboardList size={18} /> Preferences
        </button>
        <button className="flex w-full items-center gap-3 px-4 py-3 text-left text-sm font-semibold text-gray-800 hover:bg-gray-50">
          <Bookmark size={18} /> Job tracker
        </button>
        <button className="flex w-full items-center gap-3 px-4 py-3 text-left text-sm font-semibold text-gray-800 hover:bg-gray-50">
          <Briefcase size={18} /> My Career Insights
        </button>
        <div className="border-t border-gray-100">
          <button className="flex w-full items-center gap-3 px-4 py-3 text-left text-sm font-semibold text-[#0a66c2] hover:bg-gray-50">
            <Pencil size={18} /> Post a free job
          </button>
        </div>
      </div>

      <div className="mt-4 px-3 text-[11px] leading-5 text-gray-500">
        About · Accessibility · Help Center
        <br />
        Privacy &amp; Terms · Ad Choices · Advertising
        <br />
        <span className="font-semibold text-gray-600">
          LinkedIn Corporation © 2026
        </span>
      </div>
    </aside>
  );
}

function SectionCard({
  title,
  subtitle,
  jobs,
}: {
  title: string;
  subtitle: string;
  jobs: Job[];
}) {
  return (
    <div className="overflow-hidden rounded-lg border border-gray-200 bg-white">
      <div className="px-4 pt-4">
        <h2 className="text-[20px] font-semibold text-gray-900">{title}</h2>
        <p className="mt-0.5 text-[13px] text-gray-600">{subtitle}</p>
      </div>

      <div className="mt-2 divide-y divide-gray-100">
        {jobs.map((job, i) => (
          <JobRow key={`${job.company}-${i}`} job={job} />
        ))}
      </div>

      <button className="w-full border-t border-gray-200 py-3 text-center text-sm font-semibold text-gray-600 hover:bg-gray-50">
        Show all →
      </button>
    </div>
  );
}

export default function JobsPage() {
  return (
    <main className="min-h-screen bg-[#f4f2ee]">
      <div className="mx-auto flex max-w-[1128px] gap-6 px-4 pt-[84px] pb-10">
        <LeftSidebar />

        <section className="min-w-0 flex-1 space-y-2 lg:max-w-[720px]">
          {/* AI promo banner */}
          <div className="relative flex items-center justify-between gap-4 overflow-hidden rounded-lg border border-gray-200 bg-white p-5">
            <div>
              <h2 className="text-[16px] font-semibold text-gray-900">
                Exploring new web developer roles? Compare advice from top AI
                models.
              </h2>
              <p className="mt-1 text-[13px] text-gray-600">
                Get side-by-side answers from top AI models and move forward
                with confidence.
              </p>
              <button className="mt-3 rounded-full bg-[#0a66c2] px-4 py-1.5 text-sm font-semibold text-white hover:bg-[#004182]">
                Try for free
              </button>
            </div>
            <Sparkles className="hidden shrink-0 text-[#0a66c2] sm:block" size={40} />
            <button className="absolute right-3 top-3 rounded-full p-1 text-gray-500 hover:bg-gray-100">
              <X size={18} />
            </button>
          </div>

          <SectionCard
            title="Jobs that match your profile"
            subtitle="Based on your profile and the job criteria"
            jobs={matchJobs}
          />

          {/* See who's hiring */}
          <div className="flex items-center gap-3 rounded-lg border border-gray-200 bg-white p-4">
            <Image
              src="/images/profile-image.jpeg"
              alt="Profile"
              width={40}
              height={40}
              className="rounded-full object-cover"
            />
            <span className="flex-1 text-[15px] font-semibold text-gray-900">
              See who&apos;s hiring
            </span>
            <button className="rounded-full border border-[#0a66c2] px-4 py-1.5 text-sm font-semibold text-[#0a66c2] hover:bg-blue-50">
              Search jobs
            </button>
            <button className="rounded-full p-1 text-gray-500 hover:bg-gray-100">
              <MoreHorizontal size={20} />
            </button>
          </div>

          <SectionCard
            title="More jobs for you"
            subtitle="Based on your profile, preferences, and activity like applies, searches, and saves"
            jobs={moreJobs}
          />
        </section>
      </div>
    </main>
  );
}
