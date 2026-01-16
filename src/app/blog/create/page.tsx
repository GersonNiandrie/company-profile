"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Backendless from "@/lib/backendless";
import { useUser } from "@/lib/UserContext";

export default function CreateBlogPage() {
  const { user } = useUser();
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return setError("You must be logged in to create a post.");

    setLoading(true);
    setError("");

    try {
      await Backendless.Data.of("BlogPost").save({
        title,
        slug,
        content,
        author: user.name || user.email,
        created: new Date().toISOString(),
      });

      router.push("/blog");
    } catch (err: any) {
      console.error(err);
      setError(err.message || "Failed to create post.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto py-12 px-4">
      <button
        className="btn btn-ghost mb-4"
        onClick={() => router.back()}
      >
        ← Back
      </button>

      <h1 className="text-2xl font-bold mb-6">Create Blog Post</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="input input-bordered w-full"
          required
        />
        <input
          type="text"
          placeholder="Slug (unique)"
          value={slug}
          onChange={(e) => setSlug(e.target.value)}
          className="input input-bordered w-full"
          required
        />
        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="textarea textarea-bordered w-full h-40"
          required
        />
        {error && <p className="text-red-500">{error}</p>}
        <button type="submit" className="btn btn-primary w-full" disabled={loading}>
          {loading ? "Creating..." : "Create Post"}
        </button>
      </form>
    </div>
  );
}
