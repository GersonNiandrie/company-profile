import Backendless from "./backendless";

// Get all posts (server-safe)
export const getAllBlogPosts = async () => {
  return await Backendless.Data.of("BlogPost").find();
};

// Get a single post by slug (server-safe)
export const getBlogPostBySlug = async (slug: string) => {
  const allPosts = await getAllBlogPosts();
  return allPosts.find((post) => post.slug === slug) || null;
};



// Create a post
export const createBlogPost = async (post: any) => {
  return await Backendless.Data.of("BlogPost").save(post);
};

// Update a post (admin only)
export const updateBlogPost = async (id: string, updated: any) => {
  return await Backendless.Data.of("BlogPost").save({ objectId: id, ...updated });
};

// Delete a post (admin only)
export const deleteBlogPost = async (id: string) => {
  return await Backendless.Data.of("BlogPost").remove(id);
};
