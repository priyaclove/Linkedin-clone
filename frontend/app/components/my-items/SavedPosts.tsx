"use client";

import { ArrowRight, Bookmark } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function SavedPosts() {
  return (
    <main className="w-full md:w-[650px] rounded-lg border border-gray-200 bg-white">
      {/* Header */}
      <div className="border-b border-gray-200 px-5 py-5">
        <h1 className="text-xl font-semibold text-gray-900">
          Saved Posts
        </h1>

        <button className="mt-4 rounded-full px-5 py-2 text-lg font-semibold text-white bg-[#01754f]">
          All
        </button>
      </div>

      {/* Empty State */}
      <div className="flex flex-col items-center justify-center p-5 text-center">
        <div className="mb-5 flex items-center justify-center">
         <Image src="/images/saved-posts.svg" alt="Saved Posts" width={120} height={120} className="w-full h-full object-contain" />
        </div>

        <h2 className="text-2xl font-bold text-gray-900">
          Start saving posts
        </h2>

        <p className="mt-3 text-base text-gray-500">
          Saved posts will show up here
        </p>

        <button className="mt-8 rounded-full border border-[#0a66c2] px-6 py-2 text-sm font-semibold text-[#0a66c2] hover:bg-[#eaf3ff]">
          <Link href="/feed" className="flex items-center gap-2"> <ArrowRight size={20} /> Go to LinkedIn Feed</Link>
         
        </button>
      </div>
    </main>
  );
}