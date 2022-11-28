import type { NextApiHandler } from 'next';

const handler: NextApiHandler = (req, res) => {
  res.status(200).json({ curso: 'next.js', instrutor: 'Dev soutinho' });
};

export default handler;