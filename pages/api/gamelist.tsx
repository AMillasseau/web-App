import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default async function handle(req : any, res : any) {
    const gamelist = await prisma.games.findMany();
    res.json(gamelist)
}
