import {
  getPosts,
  getPost,
  createPost,
  updatePost,
  deletePost,
} from "../services/blogPostService.js";

export const getAllPosts = async ({ response }) => {
  response.body = await getPosts();
};

export const getPostDetailsById = async ({
  params,
  response,
}) => {
  const postId = params.id;

  if (!postId) {
    response.status = 400;
    response.body = { msg: "Invalid post id" };
    return;
  }

  const foundPost = await getPost(postId);
  if (!foundPost) {
    response.status = 404;
    response.body = { msg: `Post with ID ${postId} not found` };
    return;
  }

  response.body = foundPost;
};

export const createNewPost = async ({ request, response }) => {
  if (!request.hasBody) {
    response.status = 400;
    response.body = { msg: "Invalid post data" };
    return;
  }

  const {
    value: { title, content },
  } = await request.body();

  if (!title || !content) {
    response.status = 422;
    response.body = {
      msg: "Incorrect post data. Title and content are required",
    };
    return;
  }

  const postId = await createPost({ title, content });

  response.body = { msg: "Post created", postId };
};

export const updateExistingPost = async ({ params, request, response }) => {
  const postId = params.id;

  if (!postId) {
    response.status = 400;
    response.body = { msg: "Invalid post id" };
    return;
  }

  if (!request.hasBody) {
    response.status = 400;
    response.body = { msg: "Invalid post data" };
    return;
  }

  const {
    value: { title, content },
  } = await request.body();

  await updatePost(postId, { title, content });

  response.body = { msg: "Post updated" };
};

export const deletePostById = async ({
  params,
  response,
}) => {
  const postId = params.id;

  if (!postId) {
    response.status = 400;
    response.body = { msg: "Invalid post id" };
    return;
  }

  const foundPost = await getPost(postId);
  if (!foundPost) {
    response.status = 404;
    response.body = { msg: `Post with ID ${postId} not found` };
    return;
  }

  await deletePost(postId);
  response.body = { msg: "Post deleted" };
};
