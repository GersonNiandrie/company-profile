"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Backendless from "@/lib/backendless";

export default function EditBlogPage() {
  const params = useParams();
  const router = useRouter();

  const [post, setPost] = useState<any>(null);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

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

        const found = results[0] as any;
        setPost(found);
        setTitle(found.title);
        setContent(found.content);
      } catch (err) {
        console.error(err);
        router.push("/blog");
      }
    };

    fetchPost();
  }, [params.slug, router]);

  const handleSave = async () => {
    if (!post) return;

    await Backendless.Data.of("BlogPost").save({
      ...post,
      title,
      content,
    });

    router.push("/blog");
  };

  if (!post) return null;

  return (
    <div className="max-w-3xl mx-auto py-12 px-4">
      <button
        className="btn btn-ghost mb-6"
        onClick={() => router.push("/blog")}
      >
        ← Back to Blog
      </button>

      <input
        className="input input-bordered w-full mb-4"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        className="textarea textarea-bordered w-full h-64 mb-4"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />

      <button className="btn btn-primary" onClick={handleSave}>
        Save Changes
      </button>
    </div>
  );
}
