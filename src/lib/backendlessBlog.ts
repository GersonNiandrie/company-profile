import Backendless from "./backendless";

// Get all posts
export const getAllBlogPosts = async () => {
  try {
    const posts = await Backendless.Data.of("BlogPost").find();
    return posts;
  } catch (err) {
    console.error(err);
    return [];
  }
};

// Delete a post by objectId
export const deleteBlogPost = async (objectId: string) => {
  try {
    await Backendless.Data.of("BlogPost").remove({ objectId });
    return true;
  } catch (err) {
    console.error(err);
    return false;
  }
};
