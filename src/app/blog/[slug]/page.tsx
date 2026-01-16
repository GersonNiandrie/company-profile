"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { getBlogPostBySlug } from "@/lib/backendlessBlog";

export default function BlogPostPage() {
  const router = useRouter();
  const params = useParams();

  const slug =
    typeof params?.slug === "string" ? params.slug : null;

  const [post, setPost] = useState<any>(null);

  useEffect(() => {
  const fetchPost = async () => {
    if (!params?.slug || typeof params.slug !== "string") {
      router.push("/blog");
      return;
    }

    const result = await getBlogPostBySlug(params.slug);

    if (!result) {
      router.push("/blog");
      return;
    }

    setPost(result);
    setTitle(result.title);
    setContent(result.content);
  };

  fetchPost();
}, [params.slug, router]);

  if (!post) return <p className="text-center mt-32">Loading...</p>;

  return (
    <div className="max-w-3xl mx-auto px-4 pt-32 pb-12">
      <button
        className="btn btn-ghost mb-4"
        onClick={() => router.push("/blog")}
      >
        ← Back to Blog
      </button>

      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <p className="text-sm opacity-70 mb-8">
        By {post.author} ·{" "}
        {new Date(post.created).toLocaleDateString()}
      </p>

      <div
        className="prose max-w-full"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </div>
  );
}
