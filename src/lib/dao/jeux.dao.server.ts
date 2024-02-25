import { PrismaClient } from '@prisma/client'


const prisma = new PrismaClient();

export async function getJeux(nomRecherche?:string|null){
    if(!nomRecherche){
        return prisma.jeu.findMany()
    }
    return prisma.jeu.findMany(
        {
            where:{
                nom: {
                    startsWith: nomRecherche,
                    mode: 'insensitive'
                }
            }
        }
    );
}