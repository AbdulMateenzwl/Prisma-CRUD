import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
	const user = await prisma.user.findUnique(
        {
            where: {
                email:"data@gmail.com"
            },
        }
    );
	console.log(user);
}

main()
	.catch((e) => {
		throw e;
	})
	.finally(async () => {
		await prisma.$disconnect();
	});
