"use client";

import Image from "next/image";
import Link from "next/link";
import {
  BadgeCheck,
  Bookmark,
  ChevronDown,
  Download,
  Info,
  Lightbulb,
  MessageCircle,
  Repeat2,
  Send,
  ThumbsUp,
} from "lucide-react";
import Navbar from "@/app/components/layout/Navbar-2";

const engagement = [
  { icon: ThumbsUp, label: "Reactions", value: 0 },
  { icon: MessageCircle, label: "Comments", value: 0 },
  { icon: Repeat2, label: "Reposts", value: 0 },
  { icon: Bookmark, label: "Saves", value: 0 },
  { icon: Send, label: "Sends on LinkedIn", value: 0 },
];

function LeftSidebar() {
  return (
    <aside className="hidden w-[240px] shrink-0 md:block">
      {/* Profile card */}
      <div className="overflow-hidden rounded-lg border border-gray-200 bg-white">
        <div className="relative h-14 bg-gradient-to-r from-[#0a5265] to-[#0a66c2]">
          <div className="absolute right-2 top-1.5 text-right text-[10px] font-semibold leading-tight text-white">
            Jaya Kumari
            <br />
            <span className="font-normal">web developer</span>
          </div>
        </div>
        <div className="px-4 pb-4">
          <div className="relative z-10 -mt-8 h-16 w-16 overflow-hidden rounded-full border-2 border-white bg-white">
            <Image
              src="/images/profile-image.jpeg"
              alt="Profile"
              width={64}
              height={64}
              className="h-full w-full object-cover"
            />
          </div>
          <h2 className="mt-2 flex items-center gap-1 text-[15px] font-semibold">
            jaya kumari
            <BadgeCheck size={15} className="text-gray-500" />
          </h2>
          <p className="mt-1 text-xs leading-5 text-gray-600">
            Software Developer | Expert in Full-Stack Development | …
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

      {/* Nav */}
      <div className="mt-2 overflow-hidden rounded-lg border border-gray-200 bg-white py-2">
        <Link
          href="/analytics/profile-views"
          className="block px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Overview
        </Link>
        <span className="flex items-center gap-2 border-l-2 border-[#01754f] bg-gray-50 px-4 py-2 text-sm font-semibold text-[#01754f]">
          Content analytics
        </span>
        <Link
          href="/analytics/creator/content"
          className="block px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Audience analytics
        </Link>
      </div>
    </aside>
  );
}

function EmptyState({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="flex flex-col items-center py-8 text-center">
      <div className="mb-4 flex h-28 w-40 items-center justify-center rounded-lg bg-[#eef3f8]">
        <span className="text-4xl">📊</span>
      </div>
      <h3 className="text-[15px] font-semibold text-gray-900">{title}</h3>
      <p className="mt-1 max-w-sm text-sm text-gray-500">{subtitle}</p>
    </div>
  );
}

function Card({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-5">
      <div className="mb-1 flex items-center gap-1.5">
        <h2 className="text-[18px] font-semibold text-gray-900">{title}</h2>
        <Info size={14} className="text-gray-500" />
      </div>
      {children}
    </div>
  );
}

export default function ContentAnalyticsPage() {
  return (
    <div className="min-h-screen bg-[#f4f2ee]">
      <Navbar />
      <div className="mx-auto flex max-w-[1128px] gap-6 px-4 pt-[84px] pb-10">
        <LeftSidebar />

        {/* MAIN */}
        <main className="min-w-0 flex-1 space-y-2 lg:max-w-[640px]">
          {/* Top bar */}
          <div className="flex items-center justify-between rounded-lg border border-gray-200 bg-white px-4 py-3">
            <button className="flex items-center gap-1 rounded-full border border-gray-400 px-4 py-1.5 text-sm font-semibold text-gray-700 hover:bg-gray-50">
              7 days <ChevronDown size={16} />
            </button>
            <button className="flex items-center gap-2 rounded-full border border-gray-400 px-4 py-1.5 text-sm font-semibold text-gray-700 hover:bg-gray-50">
              <Download size={16} /> Export
            </button>
          </div>

          {/* Content performance */}
          <Card title="Content performance">
            <div className="mt-2 flex gap-2">
              <button className="flex items-center gap-1 rounded-full border border-gray-400 px-3 py-1 text-sm font-medium hover:bg-gray-50">
                Impressions <ChevronDown size={14} />
              </button>
              <button className="flex items-center gap-1 rounded-full border border-gray-400 px-3 py-1 text-sm font-medium hover:bg-gray-50">
                Cumulative <ChevronDown size={14} />
              </button>
            </div>

            <p className="mt-4 text-3xl font-semibold">0</p>
            <p className="text-sm text-gray-600">Impressions</p>
            <p className="mt-1 flex items-center gap-1 text-xs text-gray-500">
              <span className="h-2 w-2 rounded-full bg-[#0a66c2]" /> 0% vs. prior
              7 days
            </p>

            {/* Flat line chart */}
            <div className="mt-4">
              <svg viewBox="0 0 440 160" className="h-40 w-full">
                <line x1="30" y1="130" x2="440" y2="130" stroke="#e5e7eb" />
                <line x1="30" y1="10" x2="30" y2="130" stroke="#e5e7eb" />
                <text x="12" y="134" fontSize="10" fill="#9ca3af">
                  0
                </text>
                <line x1="30" y1="120" x2="430" y2="120" stroke="#0a66c2" strokeWidth="2" />
              </svg>
              <div className="flex justify-between px-6 text-xs text-gray-500">
                <span>Aug 20</span>
                <span>Aug 22</span>
                <span>Aug 24</span>
                <span>Aug 26</span>
              </div>
            </div>
            <p className="mt-2 text-xs text-gray-400">
              Daily data is recorded in UTC
            </p>
          </Card>

          {/* Discovery */}
          <Card title="Discovery">
            <p className="mt-3 text-2xl font-semibold">
              0 <span className="text-sm font-normal text-gray-600">Impressions</span>
            </p>
            <p className="mt-2 text-2xl font-semibold">
              0{" "}
              <span className="text-sm font-normal text-gray-600">
                Members reached
              </span>
            </p>
            <div className="mt-4 flex items-start gap-3 rounded-lg bg-[#fdf3ea] p-4">
              <Lightbulb size={18} className="mt-0.5 shrink-0 text-[#c37d16]" />
              <div>
                <p className="text-sm text-gray-800">
                  Members who post once a week can get up to 4x more profile
                  views. Keep the momentum going by creating another post.
                </p>
                <button className="mt-3 rounded-full border border-gray-500 px-4 py-1 text-sm font-semibold text-gray-700 hover:bg-white">
                  Start a post
                </button>
              </div>
            </div>
          </Card>

          {/* Engagement */}
          <Card title="Engagement">
            <p className="mt-3 text-2xl font-semibold">
              0{" "}
              <span className="text-sm font-normal text-gray-600">
                Social engagements
              </span>
            </p>
            <div className="mt-4 divide-y divide-gray-100">
              {engagement.map(({ icon: Icon, label, value }) => (
                <div
                  key={label}
                  className="flex items-center justify-between py-2.5"
                >
                  <span className="flex items-center gap-2 text-sm text-gray-700">
                    <Icon size={16} className="text-gray-500" />
                    {label}
                  </span>
                  <span className="text-sm font-semibold">{value}</span>
                </div>
              ))}
            </div>
          </Card>

          {/* Top performing posts */}
          <Card title="Top performing posts">
            <EmptyState
              title="We don't have enough information yet"
              subtitle="Try posting more to boost impressions."
            />
            <button className="w-full border-t border-gray-100 pt-3 text-center text-sm font-semibold text-gray-600 hover:text-black">
              Show more ›
            </button>
          </Card>

          {/* Top demographics */}
          <Card title="Top demographics">
            <EmptyState
              title="Demographics not available yet"
              subtitle="To protect viewer privacy, each demographics category will not display information until you have enough data for that category."
            />
          </Card>
        </main>

        {/* RIGHT */}
        <aside className="hidden w-[300px] shrink-0 lg:block">
          <div className="overflow-hidden rounded-lg border border-gray-200 bg-white">
            <div className="relative h-16 bg-gradient-to-r from-slate-300 to-slate-400">
              <span className="absolute right-2 top-2 text-[11px] font-semibold text-gray-700">
                Promoted •••
              </span>
              <div className="absolute -bottom-5 left-4 flex h-14 w-14 items-center justify-center rounded bg-white text-sm font-bold text-[#00539f] shadow">
                SBI
              </div>
            </div>
            <div className="px-4 pb-4 pt-7">
              <h3 className="text-[15px] font-semibold text-gray-900">
                State Bank of India
              </h3>
              <p className="mt-1 text-[13px] text-gray-700">
                jaya, grow your career by following State Bank of India
              </p>
              <p className="mt-1 text-[12px] text-gray-500">
                Stay informed on industry news and trends
              </p>
              <button className="mt-3 w-full rounded-full border border-[#0a66c2] py-1.5 text-sm font-semibold text-[#0a66c2] hover:bg-blue-50">
                Follow
              </button>
            </div>
          </div>

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
      </div>
    </div>
  );
}
