"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import {
  ThumbsUp,
  MessageCircle,
  Repeat2,
  Send,
  Ellipsis,
  Globe,
} from "lucide-react";
import Link from "next/link";
import CreatePostModal from "../profile/CreatePostModal";
import { API_URL, getImageUrl } from "@/lib/api";

type Post = {
  id: number;
  content: string;
  imageUrl: string | null;
  createdAt: string;
  author: { id: number; username: string };
};

// Turns an ISO timestamp into a short relative label like "2h" or "3d".
function timeAgo(iso: string): string {
  const seconds = Math.floor((Date.now() - new Date(iso).getTime()) / 1000);
  if (seconds < 60) return "just now";
  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return `${minutes}m`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours}h`;
  const days = Math.floor(hours / 24);
  return `${days}d`;
}

export default function FeedContent() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);

  const loadPosts = useCallback(async () => {
    try {
      const res = await fetch(`${API_URL}/api/posts/all_posts`);
      const data = await res.json();
      if (res.ok) setPosts(data.posts ?? []);
    } catch (error) {
      console.error("Failed to load posts", error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadPosts();
  }, [loadPosts]);

  return (
    <section className="space-y-4">
      {/* Create Post box */}
      <div className="rounded-lg border border-gray-300 bg-white p-4">
        <div className="flex gap-3">
          <Image
            src="/images/profile-image.jpeg"
            alt="Profile"
            width={48}
            height={48}
            className="rounded-full"
          />

          <button
            onClick={() => setModalOpen(true)}
            className="flex h-12 flex-1 items-center rounded-full border border-gray-400 px-5 text-left font-bold text-gray-900 hover:bg-gray-100"
          >
            Start a post
          </button>
        </div>

        <div className="mt-1 flex justify-between px-12">
          <button
            onClick={() => setModalOpen(true)}
            className="flex items-center gap-2 rounded-lg px-3 py-2 hover:bg-[#f3f2ef] transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              fill="#45712E"
              aria-hidden="true"
            >
              <path d="M19 4H5a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3m-9 12V8l6 4z" />
            </svg>
            <span className="text-md font-bold text-black">Video</span>
          </button>

          <button
            onClick={() => setModalOpen(true)}
            className="flex items-center gap-2 rounded-lg px-3 py-2 hover:bg-[#f3f2ef] transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              fill="#0966C2"
              aria-hidden="true"
            >
              <path d="M19 4H5a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3m1 13a1 1 0 0 1-.29.71L16 14l-2 2-6-6-4 4V7a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1zm-2-7a2 2 0 1 1-2-2 2 2 0 0 1 2 2" />
            </svg>
            <span className="text-md font-bold text-black">Photo</span>
          </button>

          <button
            onClick={() => setModalOpen(true)}
            className="flex items-center gap-2 rounded-lg px-3 py-2 hover:bg-[#f3f2ef] transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              fill="#B2401F"
              aria-hidden="true"
            >
              <path d="M21 3v2H3V3zm-6 6h6V7h-6zm0 4h6v-2h-6zm0 4h6v-2h-6zM3 21h18v-2H3zM13 7H3v10h10z" />
            </svg>
            <span className="text-md font-bold text-black">Write article</span>
          </button>
        </div>
      </div>

      {/* Sort */}
      <div className="flex items-center gap-3">
        <div className="h-px flex-1 bg-gray-300" />
        <button className="text-sm text-gray-600">
          Sort by <span className="font-semibold">Top</span>
        </button>
      </div>

      {/* Posts */}
      {loading ? (
        <div className="rounded-lg border border-gray-300 bg-white p-8 text-center text-gray-500">
          Loading posts…
        </div>
      ) : posts.length === 0 ? (
        <div className="rounded-lg border border-gray-300 bg-white p-8 text-center text-gray-500">
          No posts yet. Be the first to{" "}
          <button
            onClick={() => setModalOpen(true)}
            className="font-semibold text-[#0a66c2] hover:underline"
          >
            start a post
          </button>
          .
        </div>
      ) : (
        posts.map((post) => (
          <div
            key={post.id}
            className="rounded-lg border border-gray-300 bg-white"
          >
            {/* Header */}
            <div className="flex justify-between p-4">
              <div className="flex gap-3">
                <Link href={`/in/${post.author.username}`}>
                <Image
                  src="/images/profile-image.jpeg"
                  alt="Profile"
                  width={48}
                  height={48}
                  className="rounded-full h-fit"
                />
                </Link>
                <div>
                  <h3 className="font-semibold">{post.author.username}</h3>
                  <p className="text-xs text-gray-500">LinkedIn Member</p>
                  <div className="flex items-center gap-1 text-xs text-gray-500">
                    <span>{timeAgo(post.createdAt)}</span>
                    <Globe size={12} />
                  </div>
                </div>
              </div>
              <Ellipsis className="cursor-pointer text-gray-500" />
            </div>

            {/* Text */}
            <div className="px-4 pb-3">
              <p className="whitespace-pre-wrap text-sm">{post.content}</p>
            </div>

            {/* Image (only when the post has one) */}
            {post.imageUrl && (
              <Image
                src={getImageUrl(post.imageUrl)}
                alt="Post"
                width={700}
                height={450}
                className="w-full"
              />
            )}

            {/* Actions */}
            <div className="border-t border-gray-200">
              <div className="grid grid-cols-4">
                <button className="flex h-12 items-center justify-center gap-2 rounded-bl-lg text-[#666] transition hover:bg-[#f3f2ef]">
                  <ThumbsUp className="h-5 w-5" />
                  <span className="text-sm font-medium">Like</span>
                </button>
                <button className="flex h-12 items-center justify-center gap-2 text-[#666] transition hover:bg-[#f3f2ef]">
                  <MessageCircle className="h-5 w-5" />
                  <span className="text-sm font-medium">Comment</span>
                </button>
                <button className="flex h-12 items-center justify-center gap-2 text-[#666] transition hover:bg-[#f3f2ef]">
                  <Repeat2 className="h-5 w-5" />
                  <span className="text-sm font-medium">Repost</span>
                </button>
                <button className="flex h-12 items-center justify-center gap-2 rounded-br-lg text-[#666] transition hover:bg-[#f3f2ef]">
                  <Send className="h-5 w-5" />
                  <span className="text-sm font-medium">Send</span>
                </button>
              </div>
            </div>
          </div>
        ))
      )}

      {/* Create Post modal — refreshes the feed after a successful post */}
      <CreatePostModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        onPosted={loadPosts}
      />
    </section>
  );
}
