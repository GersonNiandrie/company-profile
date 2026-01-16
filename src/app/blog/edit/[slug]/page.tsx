"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getBlogPostBySlug, updateBlogPost } from "@/lib/backendlessBlog";
import { useUser } from "@/lib/UserContext";

interface Props {
  params: { slug: string };
}

export default function EditBlogPage({ params }: Props) {
  const { user } = useUser();
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [postId, setPostId] = useState("");
  const [loading, setLoading] = useState(false);

  const isAdmin = user?.roles?.includes("admin");

  useEffect(() => {
    if (!isAdmin) return router.push("/blog");

    const fetchPost = async () => {
      const post = await getBlogPostBySlug(params.slug);
      if (!post) return router.push("/blog");

      setTitle(post.title);
      setContent(post.content);
      setPostId(post.objectId);
    };
    fetchPost();
  }, [params.slug, user]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await updateBlogPost(postId, { title, content });
    setLoading(false);
    router.push("/blog");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto p-6 bg-base-200 rounded shadow-md mt-12"
    >
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
