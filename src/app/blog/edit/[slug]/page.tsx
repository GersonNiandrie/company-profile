"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Backendless from "@/lib/backendless";
import { useUser } from "@/lib/UserContext";

export default function EditBlogPage() {
  const { user } = useUser();
  const isAdmin = user?.roles?.includes("admin");
  const router = useRouter();
  const params = useParams();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [postId, setPostId] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!isAdmin) return router.push("/blog");

    const fetchPost = async () => {
      try {
        const results = await Backendless.Data.of("BlogPost").find({
          condition: `slug = '${params.slug}'`,
        });
        const post = results[0];
        if (!post) return router.push("/blog");

        setTitle(post.title);
        setContent(post.content);
        setPostId(post.objectId);
      } catch (err) {
        console.error(err);
      }
    };

    fetchPost();
  }, [params.slug, user]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await Backendless.Data.of("BlogPost").save({
        objectId: postId,
        title,
        content,
      });
      router.push("/blog");
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto p-6 bg-base-200 rounded shadow-md mt-12"
    >
      <button className="btn btn-ghost mb-4" onClick={() => router.back()}>
      ← Back
      </button>
      <h2 className="text-xl font-bold mb-4">Edit Blog Post</h2>

      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="input input-bordered w-full mb-3"
        required
      />
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="textarea textarea-bordered w-full mb-3"
        required
      />

      <button
        type="submit"
        className="btn btn-primary w-full"
        disabled={loading}
      >
        {loading ? "Updating..." : "Update Post"}
      </button>
    </form>
  );
}
