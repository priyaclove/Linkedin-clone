"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import EmojiPicker from "emoji-picker-react";
import Swal from "sweetalert2";
import { getUser } from "@/lib/auth";
import { API_URL } from "@/lib/api";
import {
  CalendarDays,
  ChevronDown,
  Clock3,
  ImageIcon,
  Plus,
  Smile,
  Video,
  X,
} from "lucide-react";

type Props = {
  open: boolean;
  onClose: () => void;
  // Called after a post is successfully created, so the feed can refresh.
  onPosted?: () => void;
};

export default function CreatePostModal({ open, onClose, onPosted }: Props) {
  const [text, setText] = useState("");
  const [showEmoji, setShowEmoji] = useState(false);
  const [posting, setPosting] = useState(false);

  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [videoPreview, setVideoPreview] = useState<string | null>(null);

  const imageInputRef = useRef<HTMLInputElement>(null);
  const videoInputRef = useRef<HTMLInputElement>(null);

  if (!open) return null;

  const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file) return;

    setImageFile(file);
    setImagePreview(URL.createObjectURL(file));
  };

  const handleVideo = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file) return;

    setVideoPreview(URL.createObjectURL(file));
  };

  const handlePost = async () => {
    const user = getUser();

    if (!user) {
      Swal.fire({
        icon: "error",
        title: "Not signed in",
        text: "Please sign in again to post.",
      });
      return;
    }

    if (!text.trim()) return;

    try {
      setPosting(true);

      // Send as multipart so the selected photo is uploaded with the post.
      // (Don't set Content-Type manually — the browser adds the boundary.)
      const formData = new FormData();
      formData.append("content", text);
      formData.append("authorId", String(user.id));
      if (imageFile) {
        formData.append("image", imageFile);
      }

      const response = await fetch(`${API_URL}/api/posts`, {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to create post");
      }

      // Reset the modal and let the feed know a post was added.
      setText("");
      setImageFile(null);
      setImagePreview(null);
      setVideoPreview(null);
      onPosted?.();
      onClose();
    } catch (error) {
      console.error(error);
      Swal.fire({
        icon: "error",
        title: "Could not post",
        text: "Something went wrong. Please try again.",
      });
    } finally {
      setPosting(false);
    }
  };

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-[999] flex items-center justify-center bg-black/60"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative h-[760px] w-full max-w-[760px] overflow-hidden rounded-xl bg-white shadow-2xl"
      >
        {/* Header */}

        <div className="flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <Image
              src="/images/profile-image.jpeg"
              alt=""
              width={52}
              height={52}
              className="rounded-full object-cover"
            />

            <div>
              <div className="flex items-center gap-1">
                <h2 className="text-[20px] font-semibold">Priya Kumari</h2>

                <ChevronDown size={18} />
              </div>

              <button className="mt-1 rounded-full text-sm font-medium">
                Post to Anyone
              </button>
            </div>
          </div>

          <button
            onClick={onClose}
            className="rounded-full p-2 hover:bg-gray-100"
          >
            <X size={28} />
          </button>
        </div>

        {/* Body */}

        <div className="relative h-[520px] overflow-y-auto px-7 py-6">
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="What do you want to talk about?"
            className="min-h-[220px] w-full resize-none border-none font-2xl outline-none placeholder:text-gray-500"
          />

          {/* Image Preview */}

          {imagePreview && (
            <div className="relative mt-5">
              <Image
                src={imagePreview}
                alt=""
                width={600}
                height={350}
                className="rounded-xl object-cover"
              />

              <button
                onClick={() => setImagePreview(null)}
                className="absolute right-3 top-3 rounded-full bg-black/60 p-2 text-white"
              >
                <X size={18} />
              </button>
            </div>
          )}

          {/* Video Preview */}

          {videoPreview && (
            <div className="relative mt-5">
              <video controls className="rounded-xl">
                <source src={videoPreview} />
              </video>

              <button
                onClick={() => setVideoPreview(null)}
                className="absolute right-3 top-3 rounded-full bg-black/60 p-2 text-white"
              >
                <X size={18} />
              </button>
            </div>
          )}
        </div>

        {/* Footer */}

        <div className="border-t">
          <div className="px-6 pt-3">
            <div className="relative">
              <button
                onClick={() => setShowEmoji(!showEmoji)}
                className="rounded-full p-2 hover:bg-gray-100"
              >
                <Smile size={24} />
              </button>

              {showEmoji && (
                <div className="absolute bottom-14 left-0 z-50">
                  <EmojiPicker
                    width={340}
                    height={420}
                    previewConfig={{
                      showPreview: false,
                    }}
                    skinTonesDisabled
                    onEmojiClick={(emoji) => {
                      setText((prev) => prev + emoji.emoji);
                    }}
                  />
                </div>
              )}
            </div>

            <input
              ref={imageInputRef}
              hidden
              type="file"
              accept="image/*"
              onChange={handleImage}
            />

            <input
              ref={videoInputRef}
              hidden
              type="file"
              accept="video/*"
              onChange={handleVideo}
            />
            <div className="mt-5 flex items-center justify-between">
              {/* Left Icons */}

              <div className="flex items-center gap-3">
                {/* Photo */}

                <div className="relative group">
                  <button
                    onClick={() => imageInputRef.current?.click()}
                    className="rounded-full p-2 hover:bg-gray-100 transition"
                  >
                    <ImageIcon size={23} className="text-[#378fe9]" />
                  </button>

                  <span className="pointer-events-none absolute bottom-12 left-1/2 hidden -translate-x-1/2 whitespace-nowrap rounded-md border bg-white px-3 py-2 text-sm shadow-lg group-hover:block">
                    Add a photo
                  </span>
                </div>

                {/* Video */}

                <div className="relative group">
                  <button
                    onClick={() => videoInputRef.current?.click()}
                    className="rounded-full p-2 hover:bg-gray-100 transition"
                  >
                    <Video size={23} className="text-[#5f9b41]" />
                  </button>

                  <span className="pointer-events-none absolute bottom-12 left-1/2 hidden -translate-x-1/2 whitespace-nowrap rounded-md border bg-white px-3 py-2 text-sm shadow-lg group-hover:block">
                    Add a video
                  </span>
                </div>

                {/* Event */}

                <div className="relative group">
                  <button
                    onClick={() => alert("Event modal")}
                    className="rounded-full p-2 hover:bg-gray-100 transition"
                  >
                    <CalendarDays size={23} className="text-[#c37d16]" />
                  </button>

                  <span className="pointer-events-none absolute bottom-12 left-1/2 hidden -translate-x-1/2 whitespace-nowrap rounded-md border bg-white px-3 py-2 text-sm shadow-lg group-hover:block">
                    Create an event
                  </span>
                </div>

                {/* More */}

                <div className="relative group">
                  <button className="rounded-full p-2 hover:bg-gray-100 transition">
                    <Plus size={24} />
                  </button>

                  <span className="pointer-events-none absolute bottom-12 left-1/2 hidden -translate-x-1/2 whitespace-nowrap rounded-md border bg-white px-3 py-2 text-sm shadow-lg group-hover:block">
                    More
                  </span>
                </div>
              </div>

              {/* Right */}

              <div className="flex items-center gap-3">
                <button className="rounded-full p-2 hover:bg-gray-100">
                  <Clock3 size={22} className="text-gray-600" />
                </button>
                <span className="pointer-events-none absolute bottom-12 left-1/2 hidden -translate-x-1/2 whitespace-nowrap rounded-md border bg-white px-3 py-2 text-sm shadow-lg group-hover:block">
                    schedule for later
                  </span>

                <button
                  onClick={handlePost}
                  disabled={!text.trim() || posting}
                  className={`rounded-full px-7 py-2 font-semibold transition ${
                    text.trim() && !posting
                      ? "bg-[#0a66c2] text-white hover:bg-[#004182]"
                      : "cursor-not-allowed bg-gray-200 text-gray-400"
                  }`}
                >
                  {posting ? "Posting..." : "Post"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
