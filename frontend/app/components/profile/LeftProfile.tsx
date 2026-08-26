"use client";

import Image from "next/image";
import { Camera, Pencil, ShieldCheck, Trash2, X } from "lucide-react";
import { useState } from "react";
import { API_URL, getImageUrl } from "@/lib/api";

type Skill = {
  id: number;
  name: string;
};

type Interest = {
  id: number;
  name: string;
};

type Post = {
  id: number;
  content: string;
  imageUrl?: string | null;
  createdAt: string;
};

type User = {
  id: number;
  username: string;
  email?: string;

  about?: string | null;

  profileImage?: string | null;
  coverImage?: string | null;

  city?: string | null;
  state?: string | null;
  country?: string | null;
  phone?: string | null;

  skills?: Skill[];
  interests?: Interest[];

  posts?: Post[];
};

type LeftProfileProps = {
  user: User;
};

export default function LeftProfile({ user }: LeftProfileProps) {
  // =========================================================
  // COVER PHOTO STATE
  // =========================================================

  const [showCoverModal, setShowCoverModal] = useState(false);

  const [coverPreview, setCoverPreview] = useState(
    getImageUrl(
      user.coverImage,
      "/images/background-image.jpeg"
    )
  );

  const [selectedCoverFile, setSelectedCoverFile] = useState<File | null>(null);

  const [coverDeleted, setCoverDeleted] = useState(false);

  const [savingCover, setSavingCover] = useState(false);

  // =========================================================
  // PROFILE PHOTO STATE
  // =========================================================

  const [showProfileModal, setShowProfileModal] = useState(false);

  const [profilePreview, setProfilePreview] = useState(
    getImageUrl(user.profileImage, "/images/profile-image.jpeg"),
  );

  const [selectedProfileFile, setSelectedProfileFile] = useState<File | null>(
    null,
  );

  const [profileDeleted, setProfileDeleted] = useState(false);

  const [savingProfile, setSavingProfile] = useState(false);

  // =========================================================
  // COVER PHOTO - SELECT IMAGE
  // =========================================================

  const handleCoverFileChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const file = event.target.files?.[0];

    if (!file) return;

    // Basic validation
    if (!file.type.startsWith("image/")) {
      alert("Please select an image file.");
      return;
    }

    // 5MB limit
    if (file.size > 5 * 1024 * 1024) {
      alert("Cover image must be smaller than 5MB.");
      return;
    }

    setSelectedCoverFile(file);
    setCoverDeleted(false);

    const previewUrl = URL.createObjectURL(file);

    setCoverPreview(previewUrl);
  };

  // =========================================================
  // PROFILE PHOTO - SELECT IMAGE
  // =========================================================

  const handleProfileFileChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const file = event.target.files?.[0];

    if (!file) return;

    if (!file.type.startsWith("image/")) {
      alert("Please select an image file.");
      return;
    }

    // 5MB limit
    if (file.size > 5 * 1024 * 1024) {
      alert("Profile image must be smaller than 5MB.");
      return;
    }

    setSelectedProfileFile(file);
    setProfileDeleted(false);

    const previewUrl = URL.createObjectURL(file);

    setProfilePreview(previewUrl);
  };

  // =========================================================
  // SAVE COVER PHOTO
  // =========================================================

  const saveCoverPhoto = async () => {
    try {
      setSavingCover(true);

      const formData = new FormData();

      if (coverDeleted) {
        formData.append("delete", "true");
      } else if (selectedCoverFile) {
        formData.append("image", selectedCoverFile);
      } else {
        setShowCoverModal(false);
        return;
      }

      const response = await fetch(
        `${API_URL}/api/users/${user.id}/cover-image`,
        {
          method: "PUT",
          body: formData,
        },
      );

      if (!response.ok) {
        throw new Error("Failed to update cover image");
      }

      const data = await response.json();

      setCoverPreview(
        getImageUrl(
          data.user.coverImage,
          "/images/background-image.jpeg"
        )
      );

      setSelectedCoverFile(null);
      setCoverDeleted(false);

      setShowCoverModal(false);
    } catch (error) {
      console.error(error);
      alert("Failed to update cover photo.");
    } finally {
      setSavingCover(false);
    }
  };

  // =========================================================
  // SAVE PROFILE PHOTO
  // =========================================================

  const saveProfilePhoto = async () => {
    try {
      setSavingProfile(true);

      const formData = new FormData();

      if (profileDeleted) {
        formData.append("delete", "true");
      } else if (selectedProfileFile) {
        formData.append("image", selectedProfileFile);
      } else {
        setShowProfileModal(false);
        return;
      }

      const response = await fetch(
        `${API_URL}/api/users/${user.id}/profile-image`,
        {
          method: "PUT",
          body: formData,
        },
      );

      if (!response.ok) {
        throw new Error("Failed to update profile image");
      }

      const data = await response.json();

      setProfilePreview(
        getImageUrl(data.user.profileImage, "/images/profile-image.jpeg")
      );

      setSelectedProfileFile(null);
      setProfileDeleted(false);

      setShowProfileModal(false);
    } catch (error) {
      console.error(error);
      alert("Failed to update profile photo.");
    } finally {
      setSavingProfile(false);
    }
  };

  // =========================================================
  // DELETE COVER - FRONTEND PREVIEW
  // =========================================================

  const deleteCoverPhoto = () => {
    setSelectedCoverFile(null);
    setCoverDeleted(true);

    setCoverPreview("/images/background-image.jpeg");
  };

  // =========================================================
  // DELETE PROFILE - FRONTEND PREVIEW
  // =========================================================

  const deleteProfilePhoto = () => {
    setSelectedProfileFile(null);
    setProfileDeleted(true);

    setProfilePreview("/images/profile-image.jpeg");
  };

  // =========================================================
  // LOCATION
  // =========================================================

  const location = [user.city, user.state, user.country]
    .filter(Boolean)
    .join(", ");

  // =========================================================
  // RETURN
  // =========================================================

  return (
    <>
      <div className="space-y-4">
        {/* =====================================================
            MAIN PROFILE CARD
        ===================================================== */}

        <section className="overflow-hidden rounded-xl border border-gray-300 bg-white">
          {/* ===================================================
              PART 1 - COVER PHOTO
          =================================================== */}

          <div className="relative h-52 w-full bg-gray-200">
            <Image
              src={coverPreview}
              alt="Cover photo"
              fill
              sizes="100vw"
              className="object-cover"
            />

            {/* Cover Pencil */}
            <button
              onClick={() => setShowCoverModal(true)}
              className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white shadow hover:bg-gray-100"
            >
              <Pencil size={18} />
            </button>
          </div>

          {/* ===================================================
              PROFILE SECTION
          =================================================== */}

          <div className="relative px-6 pb-6">
            <div className="-mt-20 flex justify-between">
              {/* =================================================
                  PART 2 - PROFILE IMAGE
              ================================================= */}

              <div className="relative">
                <Image
                  src={profilePreview}
                  alt="Profile"
                  width={160}
                  height={160}
                  className="h-40 w-40 rounded-full border-4 border-white object-cover"
                />

                {/* Camera button */}
                <button
                  onClick={() => setShowProfileModal(true)}
                  className="absolute bottom-2 right-2 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md hover:bg-gray-100"
                >
                  <Camera size={20} />
                </button>
              </div>

              {/* Profile edit */}
              <button
                onClick={() => setShowProfileModal(true)}
              className="mt-24 rounded-full p-1 hover:bg-gray-100 w-10 h-10 flex items-center justify-center"
              >
                <Pencil size={20} />
              </button>
            </div>

            {/* =================================================
                USER INFORMATION
            ================================================= */}

            <div className="mt-4 flex justify-between">
              <div className="max-w-[70%]">
                <div className="flex items-center gap-2">
                  <h1 className="text-[26px] font-semibold text-[#191919]">
                    {user.username}
                  </h1>

                  <ShieldCheck size={20} />
                </div>

                <p className="text-[16px] text-[#191919]">
                  {user.about ||
                    "Full Stack Developer | React | Next.js | Node.js"}
                </p>

                {location && (
                  <p className="text-[14px] text-gray-600">
                    {location} ·{" "}
                    <span className="cursor-pointer font-semibold text-[#0a66c2] hover:underline">
                      Contact info
                    </span>
                  </p>
                )}

                <p className="mt-1 text-[14px] font-semibold text-[#0a66c2]">
                  500+ connections
                </p>

                {/* Buttons */}

                <div className="mt-5 flex flex-wrap gap-3">
                  <button className="rounded-full border bg-[#0a66c2] px-3 py-1 font-semibold text-white hover:bg-[#eaf4fe]">
                    Open to
                  </button>

                  <button className="rounded-full border border-[#0a66c2] px-3 py-1 font-semibold text-[#0a66c2] hover:bg-[#eaf4fe]">
                    Add section
                  </button>

                  <button className="rounded-full border border-gray-500 px-3 py-1 font-semibold text-gray-700 hover:bg-gray-100">
                    Enhance profile
                  </button>
                </div>
              </div>

              {/* Company */}

              <div className="space-y-4">
                <div className="flex items-center gap-1">
                  <Image
                    src="/images/company-image.jpeg"
                    alt="Profile"
                    width={60}
                    height={60}
                    className="rounded-full border-4 border-white object-cover"
                  />

                  <span className="font-semibold">Cloveode Technologies</span>
                </div>
              </div>
            </div>
          </div>

          {/* ===================================================
              PROFILE CARDS
          =================================================== */}

          <section className="rounded-xl bg-white p-6">
            <div className="flex gap-4 overflow-x-auto scrollbar-hide">
              {/* Open To Work */}

              <div className="relative min-w-[360px] rounded-xl bg-[#dde7f3] p-6">
                <button className="absolute right-4 top-4 rounded-full p-1 hover:bg-white/60">
                  <Pencil size={18} />
                </button>

                <h3 className="text-[16px] font-semibold text-[#191919]">
                  Open to work
                </h3>

                <p className="text-[16px] text-[#191919]">
                  {location || "Available for opportunities"}
                </p>

                <button className="text-[16px] font-semibold text-[#0a66c2] hover:underline">
                  Show details
                </button>
              </div>

              {/* Hiring */}

              <div className="relative min-w-[360px] rounded-xl border border-gray-300 bg-white p-6">
                <button className="absolute right-4 top-4 rounded-full p-1 hover:bg-gray-100">
                  <X size={18} />
                </button>

                <h3 className="max-w-[260px] leading-6 text-[#191919]">
                  <span className="font-semibold">
                    Share that you're hiring
                  </span>{" "}
                  and attract qualified candidates.
                </h3>

                <button className="text-[16px] font-semibold text-[#0a66c2] hover:underline">
                  Get started
                </button>
              </div>

              {/* Services */}

              <div className="relative min-w-[360px] rounded-xl border border-gray-300 bg-white p-6">
                <button className="absolute right-4 top-4 rounded-full p-1 hover:bg-gray-100">
                  <X size={18} />
                </button>

                <h3 className="leading-8 text-[#191919]">
                  <span className="font-semibold">Showcase your services</span>{" "}
                  as a section on your profile so your business can be easily
                  discovered.
                </h3>

                <button className="mt-4 text-[16px] font-semibold text-[#0a66c2] hover:underline">
                  Add services
                </button>
              </div>
            </div>
          </section>
        </section>
        {/* Skills & Interests are rendered by <ProfileSections /> below. */}
      </div>

      {/* =========================================================
          PART 1 - COVER PHOTO MODAL
      ========================================================= */}

      {showCoverModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
          <div className="w-full max-w-5xl overflow-hidden rounded-xl bg-white shadow-2xl">
            {/* Header */}

            <div className="flex items-center justify-between border-b px-6 py-5">
              <h2 className="text-2xl font-semibold">Cover photo</h2>

              <button
                onClick={() => setShowCoverModal(false)}
                className="rounded-full p-2 hover:bg-gray-100"
              >
                <X size={28} />
              </button>
            </div>

            {/* Cover Preview */}

            <div className="relative h-[400px] w-full bg-gray-200">
              <Image
                src={coverPreview}
                alt="Cover preview"
                fill
                className="object-cover"
              />
            </div>

            {/* Actions */}

            <div className="flex items-center justify-center gap-20 border-b p-8">
              {/* Edit */}

              <button
                onClick={() =>
                  document.getElementById("cover-photo-input")?.click()
                }
                className="flex flex-col items-center gap-2"
              >
                <Pencil size={30} />

                <span>Edit</span>
              </button>

              {/* Change Photo */}

              <button
                onClick={() =>
                  document.getElementById("cover-photo-input")?.click()
                }
                className="flex flex-col items-center gap-2"
              >
                <Camera size={30} />

                <span>Change photo</span>
              </button>

              {/* Delete */}

              <button
                onClick={deleteCoverPhoto}
                className="flex flex-col items-center gap-2 text-red-600"
              >
                <Trash2 size={30} />

                <span>Delete</span>
              </button>
            </div>

            {/* Hidden Input */}

            <input
              id="cover-photo-input"
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleCoverFileChange}
            />

            {/* Footer */}

            <div className="flex justify-end gap-3 p-5">
              <button
                onClick={() => setShowCoverModal(false)}
                className="rounded-full border px-6 py-2 font-semibold hover:bg-gray-100"
              >
                Cancel
              </button>

              <button
                onClick={saveCoverPhoto}
                disabled={savingCover || (!selectedCoverFile && !coverDeleted)}
                className="rounded-full bg-[#0a66c2] px-7 py-2 font-semibold text-white disabled:cursor-not-allowed disabled:opacity-50"
              >
                {savingCover ? "Saving..." : "Save"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* =========================================================
          PART 2 - PROFILE PHOTO MODAL
      ========================================================= */}

      {showProfileModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
          <div className="w-full max-w-3xl overflow-hidden rounded-xl bg-white shadow-2xl">
            {/* Header */}

            <div className="flex items-center justify-between border-b px-6 py-5">
              <h2 className="text-2xl font-semibold">Profile photo</h2>

              <button
                onClick={() => setShowProfileModal(false)}
                className="rounded-full p-2 hover:bg-gray-100"
              >
                <X size={28} />
              </button>
            </div>

            {/* Profile Preview */}

            <div className="flex justify-center bg-gray-100 p-10">
              <div className="relative h-72 w-72">
                <Image
                  src={profilePreview}
                  alt="Profile preview"
                  fill
                  className="rounded-full object-cover"
                />
              </div>
            </div>

            {/* Actions */}

            <div className="flex items-center justify-center gap-20 border-b p-8">
              {/* Edit */}

              <button
                onClick={() =>
                  document.getElementById("profile-photo-input")?.click()
                }
                className="flex flex-col items-center gap-2"
              >
                <Pencil size={30} />

                <span>Edit</span>
              </button>

              {/* Change Photo */}

              <button
                onClick={() =>
                  document.getElementById("profile-photo-input")?.click()
                }
                className="flex flex-col items-center gap-2"
              >
                <Camera size={30} />

                <span>Change photo</span>
              </button>

              {/* Delete */}

              <button
                onClick={deleteProfilePhoto}
                className="flex flex-col items-center gap-2 text-red-600"
              >
                <Trash2 size={30} />

                <span>Delete</span>
              </button>
            </div>

            {/* Hidden Input */}

            <input
              id="profile-photo-input"
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleProfileFileChange}
            />

            {/* Footer */}

            <div className="flex justify-end gap-3 p-5">
              <button
                onClick={() => setShowProfileModal(false)}
                className="rounded-full border px-6 py-2 font-semibold hover:bg-gray-100"
              >
                Cancel
              </button>

              <button
                onClick={saveProfilePhoto}
                disabled={
                  savingProfile || (!selectedProfileFile && !profileDeleted)
                }
                className="rounded-full bg-[#0a66c2] px-7 py-2 font-semibold text-white disabled:cursor-not-allowed disabled:opacity-50"
              >
                {savingProfile ? "Saving..." : "Save"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
