import Image from "next/image";
import { ChevronDown } from "lucide-react";

export default function FeatureCards() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto grid max-w-[1128px] gap-20 px-6 md:grid-cols-2">

        {/* Left Card */}

        <div>

          <Image
            src="/images/landing-3.svg"
            alt="Connect"
            width={312}
            height={312}
            className="mb-8"
          />

          <h2 className="max-w-sm text-3xl font-medium leading-tight text-[#191919]">
            Connect with people who can help
          </h2>

          <button className="mt-10 rounded-full border border-[#666] px-8 py-3 text-[20px] font-semibold text-[#666] transition hover:border-black hover:bg-gray-100">
            Find people you know
          </button>

        </div>

        {/* Right Card */}

        <div>

          <Image
            src="/images/landing-4.svg"
            alt="Learn"
            width={312}
            height={312}
            className="mb-8"
          />

          <h2 className="max-w-sm text-3xl font-medium leading-tight  text-[#191919]">
            Learn the skills you need to succeed
          </h2>

          <button className="mt-10 flex w-full max-w-[400px] items-center justify-between rounded-lg border border-gray-300 bg-white px-6 py-4 text-left text-[22px] font-normal text-[#191919] shadow-sm hover:shadow-md">

            <span>Choose a topic to learn about</span>

            <ChevronDown size={24} />

          </button>

        </div>

      </div>
    </section>
  );
}