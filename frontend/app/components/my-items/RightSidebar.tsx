"use client";

export default function RightSidebar() {
  return (
    <aside className="hidden w-[300px] lg:block">
      {/* Advertisement */}
      <div className="rounded-lg border border-gray-200 bg-white p-2">
        <div className="flex flex-col items-center justify-center bg-[#0a66c2] px-5 py-5 text-center text-white">
          <p className="text-lg font-semibold">LinkedIn</p>

          <h2 className="mt-5 text-4xl font-bold leading-tight">
            See who’s
            <br />
            <span className="text-yellow-300">hiring</span>
            <br />
            on LinkedIn
          </h2>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-5 px-4 text-center text-xs text-gray-500">
        <div className="flex flex-wrap justify-center gap-x-4 gap-y-2">
          <span>About</span>
          <span>Accessibility</span>
          <span>Help Center</span>
          <span>Privacy & Terms</span>
          <span>Advertising</span>
          <span>Business Services</span>
          <span>Get the LinkedIn app</span>
          <span>More</span>
        </div>

        <p className="mt-4">
          <span className="font-bold text-blue-600">Linked</span>
          <span className="font-bold text-gray-700">In</span>{" "}
          LinkedIn Corporation © 2026
        </p>
      </div>
    </aside>
  );
}