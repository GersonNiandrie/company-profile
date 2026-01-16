"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Backendless from "@/lib/backendless";

export default function EditBlogPage() {
  const params = useParams();
  const router = useRouter();
  const [post, setPost] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        // ✅ Use DataQueryBuilder instead of { condition: ... }
        const queryBuilder = Backendless.DataQueryBuilder.create()
          .setWhereClause(`slug = '${params.slug}'`);

        const results = await Backendless.Data.of("BlogPost").find(queryBuilder);
        const fetchedPost = results[0];

        if (!fetchedPost) {
          // If post not found, redirect to blog list
          router.push("/blog");
          return;
        }

        setPost(fetchedPost);
      } catch (err) {
        console.error("Failed to fetch blog post:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [params.slug, router]);

  if (loading) return <p className="text-center mt-12">Loading...</p>;
  if (!post) return null; // Post not found is already handled with redirect

  return (
    <div className="max-w-3xl mx-auto py-12 px-4">
      {/* ===============================
          BACK BUTTON — ALWAYS GOES TO BLOG LIST
      ================================ */}
      <button
        className="btn btn-ghost mb-4"
        onClick={() => router.push("/blog")}
      >
        ← Back to Blog
      </button>

      <h1 className="text-2xl font-bold mb-4">Edit: {post.title}</h1>

      {/* ===============================
          PLACEHOLDER EDIT FORM
      ================================ */}
      <form className="space-y-4">
        <div>
          <label className="block font-medium mb-1">Title</label>
          <input
            type="text"
            defaultValue={post.title}
            className="input input-bordered w-full"
          />
        </div>
        <div>
          <label className="block font-medium mb-1">Content</label>
          <textarea
            defaultValue={post.content}
            className="textarea textarea-bordered w-full"
            rows={6}
          />
        </div>
        <div className="flex gap-2">
          <button type="submit" className="btn btn-primary">
            Save Changes
          </button>
          <button
            type="button"
            className="btn btn-ghost"
            onClick={() => router.push("/blog")}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
