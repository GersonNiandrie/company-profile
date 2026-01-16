"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Backendless from "@/lib/backendless";

export default function BlogPostPage() {
  const params = useParams();
  const router = useRouter();
  const [post, setPost] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      if (!params?.slug || typeof params.slug !== "string") {
        router.push("/blog");
        return;
      }

      try {
        const results = await Backendless.Data.of("BlogPost").find({
          condition: `slug = '${params.slug}'`,
        });

        if (!results || results.length === 0) {
          router.push("/blog");
          return;
        }

        setPost(results[0]);
      } catch (error) {
        console.error("Failed to fetch blog post:", error);
        router.push("/blog");
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [params.slug, router]);

  if (loading) {
    return <p className="text-center mt-12">Loading...</p>;
  }

  if (!post) {
    return null;
  }

  return (
    <div className="max-w-3xl mx-auto py-12 px-4">
      <button
        className="btn btn-ghost mb-6"
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
