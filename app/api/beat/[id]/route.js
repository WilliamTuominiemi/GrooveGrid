const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

export const GET = async (request, { params }) => {
  try {
    const beats = await prisma.post.findMany({
      where: {
        creator: {
          id: params.id,
        },
      },
      include: {
        creator: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });

    return new Response(JSON.stringify(beats), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response('Failed to fetch posts', { status: 500 });
  }
};
