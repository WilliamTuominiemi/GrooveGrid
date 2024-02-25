const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

export const POST = async (req, res) => {
  const { userId, notes, mix, instrumentBoard } = await req.json();

  try {
    console.log(userId, notes, mix, instrumentBoard);

    const newBeat = await prisma.post.create({
      data: {
        authorId: userId,
        notes,
        mix,
        instruments: instrumentBoard,
      },
    });

    return new Response(JSON.stringify(newBeat), { status: 201 });
  } catch (error) {
    console.error(error);
    return new Response('Failed to create', { status: 500 });
  }
};
