const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

export const POST = async (req, res) => {
  try {
    const { id } = await req.json();

    const updatedPost = await prisma.post.update({
      where: { id },
      data: {
        plays: { increment: 1 },
      },
    });

    return new Response(JSON.stringify(updatedPost), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response('Failed to increment play count', { status: 500 });
  }
};
