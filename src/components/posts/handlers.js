import logger from '../../logger';
import posts from './store';

function get(req, res) {
  const { id } = req.params;

  const post = posts[id];

  if (Math.random() > 0.5) {
    throw new Error('Store access fail');
  }

  if (!post) {
    logger.warn(`Post with id ${id} was not found`);

    res.status(404).json({ error: 'Post not found' });
    return;
  }

  res.json({ post });
}

export {
  // eslint-disable-next-line import/prefer-default-export
  get,
};
