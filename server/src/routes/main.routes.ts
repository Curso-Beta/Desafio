import { Router } from 'express';

const router = Router();

router.get('/', async (req, res) => {
  return res.send({ message: 'yay' })
});

router.post('/', async (req, res) => {
  return res.send({ message: 'yay' })
});

router.delete('/', async (req, res) => {
  return res.send({ message: 'yay' })
})

export default router;
