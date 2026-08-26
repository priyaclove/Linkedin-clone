import Image from "next/image";
import { ChevronRight } from "lucide-react";

export default function OpenToWork() {
  return (
    <section className="bg-[#f3f2ef] py-24">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-20 px-6 lg:flex-row flex-col">

        {/* Left Content */}

        <div className="w-full">

          <h2 className="text-[48px] leading-[56px] font-light text-[#b24020]">
            Let the right people know you're open to work
          </h2>

          <p className="mt-8 text-[18px] leading-[32px] text-[#191919]">
            With the Open To Work feature, you can privately tell recruiters
            or publicly share with the LinkedIn community that you are looking
            for new job opportunities.
          </p>

        </div>

        {/* Right */}

        <div className="flex items-center gap-8">

          <div className="relative h-[430px] w-[430px] overflow-hidden rounded-full">

            <Image
              src="/images/landing-2.png"
              alt="Open To Work"
              fill
              className="object-cover"
            />

          </div>

          <button className="flex h-14 w-14 items-center justify-center rounded-full bg-[#4b4b4b] text-white transition hover:bg-black">

            <ChevronRight size={28} />

          </button>

        </div>

      </div>
    </section>
  );
}