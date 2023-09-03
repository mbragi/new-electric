import User from "@/models/user.model";
import { connectToDB } from "@/utils/database";

export async function POST(request: Request) {
  await connectToDB();
  try {
    const body = await request.json();
    const { email, password } = body;   const isUser = await User.findOne({ email});
   if (isUser && password === isUser.password) {
    return new Response(JSON.stringify(isUser), { status: 200 });
   }

   return new Response('Invalid credentials', { status: 400 });
 
  } catch (error) {
    console.log(error);
    return new Response("failed", { status: 500 });
  }
}