"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Backendless from "@/lib/backendless";

export default function BlogPostPage() {
  const params = useParams();
  const router = useRouter();
  const [post, setPost] = useState<any>(null);

  useEffect(() => {
    const fetchPost = async () => {
      if (!params?.slug || typeof params.slug !== "string") {
        router.push("/blog");
        return;
      }

      try {
        const query = Backendless.DataQueryBuilder.create();
        query.setWhereClause(`slug = '${params.slug}'`);
        query.setPageSize(1);

        const results = await Backendless.Data.of("BlogPost").find(query);

        if (!results || results.length === 0) {
          router.push("/blog");
          return;
        }

        setPost(results[0]);
      } catch (error) {
        console.error(error);
        router.push("/blog");
      }
    };

    fetchPost();
  }, [params.slug, router]);

  if (!post) return null;

  return (
    <div className="max-w-3xl mx-auto py-12 px-4">
      <button
        className="btn btn-ghost mb-6"
        onClick={() => router.push("/blog")}
      >
        ← Back to Blog
      </button>

      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <div
        className="prose"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </div>
  );
}
