import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default async function handle(req, res) {
    const data = req.query;
    const bid = data.id;
    const user = await prisma.games.findUnique({ where: { id: bid } });
    if (user !== null) {
      user.booked = true;
      const updatedUser = await prisma.games.update({
        where: { id: user.id },
        data: { name: user.name },
      });
    res.json(bid)
    }
}
