import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-white">
      <div className="mx-auto flex min-h-[500px] max-w-7xl flex-col-reverse items-center justify-between gap-20 px-6 py-12 lg:flex-row">
        
        {/* Left Content */}
        <div className="w-full lg:w-1/2">

          <h1 className="text-5xl leading-14 text-black lg:text-5xl font-medium ">
          Explore jobs and grow your professional network
          </h1>

          <div className="mt-10 flex flex-col gap-4 w-2/3">

            {/* Google Button */}

            <button className="flex h-10 items-center justify-center rounded-full bg-white text-black font-semibold transition hover:bg-[#004182] border border-black">
              Continue with Google
            </button>

            {/* Email Button */}

            <Link
              href="/auth/login"
              className="flex h-10 items-center justify-center rounded-full bg-[#0A66C2] text-white font-semibold transition hover:bg-[#004182]"
            >
              Sign in with Email
            </Link>

          </div>

          <p className="mt-6 text-sm leading-6 text-gray-700 w-2/3 justify-center items-center ">
            By clicking Continue, you agree to LinkedIn's{" "}
            <span className="cursor-pointer text-[#0A66C2] hover:underline font-bold">
              User Agreement
            </span>
            ,{" "}
            <span className="cursor-pointer text-[#0A66C2] hover:underline font-bold">
              Privacy Policy
            </span>
            , and{" "}
            <span className="cursor-pointer text-[#0A66C2] hover:underline font-bold">
              Cookie Policy
            </span>
            .
          </p>

          <div className="mt-8 text-center lg:text-left">

            <span className="text-gray-600">
              New to LinkedIn?
            </span>

            <Link
              href="/auth/register"
              className="ml-2 font-semibold text-[#0A66C2] hover:underline"
            >
              Join now
            </Link>

          </div>

        </div>

        {/* Right Image */}

        <div className="w-full lg:w-1/2">

          <Image
            src="/images/landing-1.svg"
            alt="Hero"
            width={700}
            height={700}
            priority
            className="mx-auto w-full max-w-[650px]"
          />

        </div>

      </div>
    </section>
  );
}