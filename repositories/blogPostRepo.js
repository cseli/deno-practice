import client from "../db/database.js";

class BlogPostRepo {
  create(post) {
    return client.query(
      "INSERT INTO posts (title, content, registration_date) VALUES ($1, $2, $3)",
      post.title,
      post.content,
      post.registration_date,
    );
  }

  selectAll() {
    return client.query("SELECT * FROM posts ORDER BY id");
  }

  selectById(id) {
    return client.query(`SELECT * FROM posts WHERE id = $1`, id);
  }

  update(id, post) {
    var latestPost = this.selectById(id);
    var query = `UPDATE posts SET title = $1, content = $2 WHERE id = $3`;

    return client.query(
      query,
      post.title !== undefined ? post.title : latestPost.title,
      post.content !== undefined ? post.content : latestPost.content,
      id,
    );
  }

  delete(id) {
    return client.query(`DELETE FROM posts WHERE id = $1`, id);
  }
}

export default new BlogPostRepo();
