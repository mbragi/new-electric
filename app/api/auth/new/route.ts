import { connectToDB } from '@/utils/database';
import User from '@/models/user.model';

export async function POST(request: Request) {
 await connectToDB();
 try {
  const body = await request.json();
  const { userName, email, password } = body;
  const user = new User({ userName, email, password });
  await user.save();
    return new Response(JSON.stringify(user),{status:201})
  } catch (error) {
   console.log(error);
  return new Response("failed", { status: 500 })
  }
}
