import blogPostRepo from "../repositories/blogPostRepo.js";

export const getPosts = async () => {
  const posts = await blogPostRepo.selectAll();

  var result = new Array();

  posts.rows.map((post) => {
    var obj = new Object();

    posts.rowDescription.columns.map((el, i) => {
      obj[el.name] = post[i];
    });
    result.push(obj);
  });

  return result;
};

export const getPost = async (postId) => {
  const posts = await blogPostRepo.selectById(postId);

  var obj = new Object();
  posts.rows.map((post) => {
    posts.rowDescription.columns.map((el, i) => {
      obj[el.name] = post[i];
    });
  });

  return obj;
};

export const createPost = async (postData) => {
  const newPost = {
    title: String(postData.title),
    content: String(postData.content),
    registration_date: new Date(),
  };

  await blogPostRepo.create(newPost);

  return newPost.id;
};

export const updatePost = async (postId, postData) => {
  const post = await getPost(postId);

  if (Object.keys(post).length === 0 && post.constructor === Object) {
    throw new Error("Post not found");
  }

  const updatedpost = {
    title: postData.title !== undefined ? String(postData.title) : post.title,
    content: postData.content !== undefined
      ? String(postData.content)
      : post.content,
  };

  blogPostRepo.update(postId, updatedpost);
};

export const deletePost = async (postId) => {
  blogPostRepo.delete(postId);
};
