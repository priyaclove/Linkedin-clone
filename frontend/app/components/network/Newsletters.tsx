"use client";

import { MoreHorizontal } from "lucide-react";

type Newsletter = {
  title: string;
  description: string;
  author: string;
  authorHeadline: string;
  gradient: string;
};

const GRADIENTS = [
  "from-sky-400 to-blue-600",
  "from-slate-700 to-slate-900",
  "from-indigo-400 to-purple-600",
  "from-emerald-400 to-teal-600",
  "from-orange-400 to-rose-500",
  "from-cyan-400 to-sky-600",
  "from-amber-400 to-orange-600",
  "from-fuchsia-400 to-pink-600",
  "from-lime-400 to-green-600",
  "from-blue-400 to-indigo-600",
  "from-rose-400 to-red-600",
  "from-teal-400 to-cyan-600",
];

function initials(name: string) {
  return name
    .split(" ")
    .slice(0, 2)
    .map((w) => w.charAt(0))
    .join("")
    .toUpperCase();
}

const AVATAR_COLORS = [
  "bg-[#0a66c2]",
  "bg-[#b24020]",
  "bg-[#45712e]",
  "bg-[#8b5cf6]",
  "bg-[#0891b2]",
  "bg-[#be123c]",
];
function avatarColor(name: string) {
  let sum = 0;
  for (let i = 0; i < name.length; i++) sum += name.charCodeAt(i);
  return AVATAR_COLORS[sum % AVATAR_COLORS.length];
}

const newsletters: Newsletter[] = [
  {
    title: "Blue Horizons Newsletter",
    description:
      "Sharing updates from my training, conservation activities, future travels, and the lessons I learn along the way.",
    author: "Gene Olot SAFe © Product Lead",
    authorHeadline:
      "Data-driven Cloud SAFe Product Manager | Agile SAFe 6.0 aligned business goals with technology …",
    gradient: GRADIENTS[0],
  },
  {
    title: "21 MILLIONS",
    description:
      "21 Millions est la newsletter Bitcoin francophone dédiée à l'Afrique. L'actualité dans l'écosystème Bitcoin.",
    author: "Carlos Aristophane ADIMOU, CSc.",
    authorHeadline:
      "Social Media & Community Manager | Ghostwriter Bitcoin/Web3 | Francophone Africa | #1 LinkedIn …",
    gradient: GRADIENTS[1],
  },
  {
    title: "Hammad Jamil",
    description: "Subscribe",
    author: "Hammad Jamil",
    authorHeadline:
      "Web Developer | SEO Specialist | Gamer | Content Creator on YouTube | Tech Content Writer at …",
    gradient: GRADIENTS[2],
  },
  {
    title: "ABS Global Trade Update",
    description:
      "ABS Global Trade Update is a monthly newsletter from ABS Global Exim Pvt. Ltd. delivering concise insights global.",
    author: "Gorakh Shelke",
    authorHeadline:
      "Founder & CEO at ABS Global Exim | International Exporter & Sourcing Partner for Industrial, …",
    gradient: GRADIENTS[3],
  },
  {
    title: "The Welcome Moment",
    description: "Guest onboarding strategy and action for visitor attractions.",
    author: "Kim Welch",
    authorHeadline: "Niche software for attractions · Building Welcome Hub",
    gradient: GRADIENTS[4],
  },
  {
    title: "Skolvira",
    description:
      "Weekly insights and tutorials on Android, Data Science, and AI — shared from my journey as a Senior Android Developer.",
    author: "Ahmed Jawad Aman",
    authorHeadline:
      "Team Lead | Sr. Mobile Apps Developer | Multi-Platform Expert (Kotlin, KMP, Firebase, AI) | App …",
    gradient: GRADIENTS[5],
  },
  {
    title: "Faith, Family, and Finance",
    description:
      "Building wealth without losing what matters most. On a mission to help 1,000+ Millennials, Gen Xers, and Boomers.",
    author: "Dr. Temple Musk Emmanuel",
    authorHeadline:
      "Father & Grandfather | Naturalist | Former Retirement Wealth Advisor Turned Writer | AfriCapitalist | Golf…",
    gradient: GRADIENTS[6],
  },
  {
    title: "Code & Beyond: Building the We",
    description:
      "Stay updated with practical insights, project experiences, and tips on full-stack web development using MERN, PHP, and more.",
    author: "Sanya Ansari",
    authorHeadline: "PHP Web Developer at Vidya Mine",
    gradient: GRADIENTS[7],
  },
  {
    title: "No-Rush Dev Notes",
    description:
      "No-Rush Dev Notes is a casual yet insightful journal where I share what I'm building, learning, and exploring.",
    author: "Visvanathan D",
    authorHeadline:
      "Laravel Developer | Founder of Branzia | Building E-commerce Solutions for Small Businesses",
    gradient: GRADIENTS[8],
  },
  {
    title: "Code Tone",
    description:
      "A weekly newsletter exploring the creative fusion of design and front-end development, insights, projects, inspirations.",
    author: "Thounny Keo",
    authorHeadline: "Creative Developer | Designer",
    gradient: GRADIENTS[9],
  },
  {
    title: "Finance Wrap India",
    description:
      "A simplified guide to everything finance, told through the voice of experts on LinkedIn.",
    author: "George Dobson",
    authorHeadline:
      "Online Executive Health & Fitness Coach | US-Based Founders & Software Engineers Drop 20 lbs in 12…",
    gradient: GRADIENTS[10],
  },
  {
    title: "The Startup Ledger",
    description:
      "Breaking down how early-stage startups raise, build, and scale — one story at a time.",
    author: "Priya Nair",
    authorHeadline: "Startup Advisor | Ex-VC | Writing about founders & fundraising",
    gradient: GRADIENTS[11],
  },
];

function NewsletterRow({ n }: { n: Newsletter }) {
  return (
    <div className="flex gap-4 px-4 py-5">
      {/* Thumbnail */}
      <div
        className={`flex h-[72px] w-[72px] shrink-0 items-center justify-center rounded bg-gradient-to-br ${n.gradient} text-lg font-bold text-white`}
      >
        {initials(n.title)}
      </div>

      {/* Details */}
      <div className="min-w-0 flex-1">
        <div className="flex items-start justify-between gap-3">
          <h3 className="cursor-pointer text-[16px] font-semibold text-gray-900 hover:underline">
            {n.title}
          </h3>
          <button className="shrink-0 rounded-full p-1 text-gray-500 hover:bg-gray-100">
            <MoreHorizontal size={20} />
          </button>
        </div>

        <p className="mt-1 text-[14px] leading-5 text-gray-600">
          {n.description}
        </p>

        {/* Author */}
        <div className="mt-3 flex items-center gap-2">
          <div
            className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-semibold text-white ${avatarColor(
              n.author
            )}`}
          >
            {initials(n.author)}
          </div>
          <div className="min-w-0">
            <p className="truncate text-[14px] font-semibold text-gray-900">
              {n.author}
            </p>
            <p className="truncate text-[12px] text-gray-500">
              {n.authorHeadline}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function RightSidebar() {
  return (
    <aside className="hidden w-[300px] shrink-0 lg:block">
      {/* Promoted ad card */}
      <div className="overflow-hidden rounded-lg border border-gray-200 bg-white">
        <div className="relative h-20 bg-gradient-to-r from-slate-300 to-slate-400">
          <span className="absolute right-2 top-2 text-[11px] font-semibold text-gray-700">
            Promoted •••
          </span>
          <div className="absolute -bottom-6 left-4 flex h-16 w-16 items-center justify-center rounded bg-[#1a1a1a] text-lg font-bold text-[#e7a33e]">
            GF
          </div>
        </div>

        <div className="px-4 pb-4 pt-8">
          <h3 className="text-[15px] font-semibold text-gray-900">
            Gates Foundation India
          </h3>
          <p className="mt-1 text-[13px] font-medium text-gray-800">
            Empowering women fuels lasting progress.
          </p>
          <p className="mt-1 text-[13px] text-gray-600">
            See how women are leading transformative change across India.
          </p>
          <p className="mt-3 text-[12px] text-gray-500">
            Adhyuth &amp; 20 other connections also follow
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
        Business Services · Get the LinkedIn app
        <br />
        More
        <p className="mt-3 font-semibold text-gray-600">
          LinkedIn Corporation © 2026
        </p>
      </div>
    </aside>
  );
}

export default function Newsletters() {
  return (
    <div className="min-h-screen bg-[#f4f2ee]">
      <div className="mx-auto flex max-w-[1128px] gap-6 px-4 pt-[84px] pb-10">
        {/* Main */}
        <main className="min-w-0 flex-1">
          <div className="overflow-hidden rounded-lg border border-gray-200 bg-white">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-gray-200 px-5 py-4">
              <h1 className="text-[24px] font-semibold text-gray-900">
                Newsletters
              </h1>
              <button className="flex items-center gap-1 rounded-full border border-[#0a66c2] px-4 py-1.5 text-sm font-semibold text-[#0a66c2] hover:bg-blue-50">
                Create newsletter +
              </button>
            </div>

            {/* Count */}
            <p className="border-b border-gray-200 px-5 py-3 text-sm text-gray-600">
              {newsletters.length} newsletters
            </p>

            {/* List */}
            <div className="divide-y divide-gray-100">
              {newsletters.map((n, i) => (
                <NewsletterRow key={`${n.title}-${i}`} n={n} />
              ))}
            </div>
          </div>
        </main>

        <RightSidebar />
      </div>
    </div>
  );
}
