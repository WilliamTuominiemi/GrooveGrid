import { getServerSession } from 'next-auth/next';
import { authOptions } from '../../auth/[...nextauth]/route';

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

export const POST = async (req) => {
  try {
    const { description } = await req.json();
    const session = await getServerSession(authOptions);

    if (!session) {
      return new Response('Unauthorized', { status: 401 });
    }

    const updatedUser = await prisma.user.update({
      where: { id: session.user.id },
      data: { description },
    });

    return new Response('Description updated successfully', { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response('Failed to update description', { status: 500 });
  }
};
