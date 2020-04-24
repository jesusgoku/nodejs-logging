/* eslint-disable no-console */
const posts = {};

function get(req, res) {
  try {
    const { id } = req.params;

    const post = posts[id];

    if (!post) {
      console.log(`Post with id ${id} was not found`);

      res.status(404).json({ error: 'Post not found' });
      return;
    }

    res.json({ post });
  } catch (e) {
    console.log(e);

    res.status(500).json({ error: 'Something went wrong' });
  }
}

export {
  // eslint-disable-next-line import/prefer-default-export
  get,
};
