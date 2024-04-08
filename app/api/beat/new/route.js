const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

export const POST = async (req, res) => {
  const { userId, title, color1, color2, notes, mix, instrumentBoard } = await req.json();

  try {
    const newBeat = await prisma.post.create({
      data: {
        authorId: userId,
        title,
        color1,
        color2,
        notes,
        mix,
        instruments: instrumentBoard,
        plays: 0,
      },
    });

    return new Response(JSON.stringify(newBeat), { status: 201 });
  } catch (error) {
    return new Response('Failed to create', { status: 500 });
  }
};
