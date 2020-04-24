const posts = {};

function get(req, res) {
  const { id } = req.params;

  const post = posts[id];

  res.json({ post });
}

export {
  // eslint-disable-next-line import/prefer-default-export
  get,
};
