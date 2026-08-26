"use client";

export default function PostJob() {
  return (
    <section className="bg-[#f1ece5] py-24">
        <div className="mx-auto flex max-w-7xl flex-col gap-16 px-6 lg:flex-row ">
            <div className="w-full flex flex-col items-center justify-center">
                <h2 className="text-[32px] font-medium leading-tight text-[#b24020]">
                Post your job for millions of people to see
                </h2>
                <button className="mt-6 flex h-12 items-centerflex items-center gap-2 rounded-full border border-[#0a66c2] px-6 py-3 text-lg font-semibold text-[#0a66c2] transition">
              Post a job
            </button>
            </div>
        </div>
    </section>
  );
}