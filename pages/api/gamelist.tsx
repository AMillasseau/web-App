import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default async function handle(req, res) {
    const gamelist = await prisma.games.findMany();
    res.json(gamelist)
}
