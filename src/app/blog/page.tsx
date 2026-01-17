"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Backendless from "@/lib/backendless";
import { useUser } from "@/lib/UserContext";

export default function BlogPage() {
  const { user } = useUser();
  const [posts, setPosts] = useState<any[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const data = await Backendless.Data.of("BlogPost").find();
      setPosts(data);
    };
    fetchPosts();
  }, []);

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure?")) return;
    await Backendless.Data.of("BlogPost").remove(id);
    setPosts(posts.filter((p) => p.objectId !== id));
  };

  const isAdmin = user?.roles?.includes("admin");

  return (
    <div className="max-w-4xl mx-auto py-12 px-4 bg-neutral">
      <h1 className="text-3xl font-bold mb-6">Blog</h1>

      {user && (
        <div className="mb-6">
          <Link href="/blog/create" className="btn btn-primary">
            + Create Post
          </Link>
        </div>
      )}

      <div className="space-y-6">
        {posts.map((post) => (
          <div
            key={post.objectId}
            className="p-4 bg-base-200 rounded shadow hover:bg-base-300"
          >
            <Link href={`/blog/${post.slug}`}>
              <h2 className="text-xl font-semibold">{post.title}</h2>
            </Link>
            <p className="text-sm opacity-70 mb-2">
              By {post.author} | {new Date(post.created).toLocaleDateString()}
            </p>

            {isAdmin && (
              <div className="mt-2 space-x-2">
                <Link
                  href={`/blog/edit/${post.slug}`}
                  className="btn btn-sm btn-outline"
                >
                  Edit
                </Link>
                <button
                  onClick={() => handleDelete(post.objectId)}
                  className="btn btn-sm btn-error"
                >
                  Delete
                </button>
              </div>
            )}
          </div>
        ))}

        {posts.length === 0 && (
          <p className="text-center opacity-70 mt-6">
            No posts yet. {user && "Click + Create Post to add one!"}
          </p>
        )}
      </div>
    </div>
  );
}
