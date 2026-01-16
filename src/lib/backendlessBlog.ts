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

// Get a single post by slug
export const getBlogPostBySlug = async (slug: string) => {
  try {
    const queryBuilder = Backendless.DataQueryBuilder.create().setWhereClause(
      `slug = '${slug}'`
    );

    const results = await Backendless.Data.of("BlogPost").find(queryBuilder);
    return results[0] || null;
  } catch (err) {
    console.error(err);
    return null;
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
