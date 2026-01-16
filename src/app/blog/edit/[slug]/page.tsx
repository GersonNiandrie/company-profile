"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Backendless from "@/lib/backendless";
import { getBlogPostBySlug } from "@/lib/backendlessBlog";

export default function EditBlogPostPage() {
  const params = useParams();
  const router = useRouter();
  const [post, setPost] = useState<any>(null);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    const fetchPost = async () => {
      const result = await getBlogPostBySlug(params.slug);
      if (!result) return router.push("/blog");
      setPost(result);
      setTitle(result.title);
      setContent(result.content);
    };
    fetchPost();
  }, [params.slug]);

  const handleSave = async () => {
    try {
      await Backendless.Data.of("BlogPost").save({
        ...post,
        title,
        content,
      });
      router.push(`/blog/${params.slug}`);
    } catch (err) {
      console.error(err);
    }
  };

  if (!post) return <p className="text-center mt-12">Loading...</p>;

  return (
    <div className="max-w-3xl mx-auto py-12 px-4 pt-32">
      <button className="btn btn-ghost mb-4" onClick={() => router.push("/blog")}>
        ← Back to Blog
      </button>
      <h1 className="text-2xl font-bold mb-4">Edit Blog Post</h1>
      <input
        className="input input-bordered w-full mb-3"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        className="textarea textarea-bordered w-full mb-3"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        rows={10}
      />
      <button className="btn btn-primary" onClick={handleSave}>
        Save
      </button>
    </div>
  );
}
