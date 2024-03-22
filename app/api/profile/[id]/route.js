const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

export const GET = async (request, { params }) => {
  try {
    const user = await prisma.user.findUnique({
      where: {
        id: params.id,
      },
    });

    return new Response(JSON.stringify(user), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response('Failed to fetch user', { status: 500 });
  }
};
