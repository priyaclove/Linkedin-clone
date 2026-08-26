import Image from "next/image";

export default function ActivityEmpty() {
  return (
    <div className="flex min-h-[350px] flex-col items-center justify-center px-6 text-center">
      <Image
        src="/images/activity-empty.png"
        alt="No activity"
        width={180}
        height={140}
        className="mb-5 object-contain"
      />

      <h2 className="text-2xl font-semibold text-gray-900">
        Nothing to see for now
      </h2>

      <p className="mt-3 max-w-md text-base leading-6 text-gray-600">
        Content you post, share, react to, or comment on will be displayed
        here.
      </p>
    </div>
  );
}