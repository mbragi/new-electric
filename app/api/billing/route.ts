import { connectToDB } from '@/utils/database';
import Bills from '@/models/bill.model';

export async function POST(request: Request) {
 await connectToDB();
 try {
  const body = await request.json();
   const bill = new Bills(body);
  await bill.save();
    return new Response(JSON.stringify(bill),{status:201})
  } catch (error) {
   console.log(error);
  return new Response("failed", { status: 500 })
  }
}

// Get Method to get all payment from the database for a user

// export async function GET(request: Request) {
//  await connectToDB();
//  try {
//    const req = await request.query;
//    console.log(req)
//   //  const bills = await Bills.find({ accountOwner: accountOwner });
//   //   return new Response(JSON.stringify(bills),{status:200})
//   } catch (error) {
//    console.log(error);
//   return new Response("failed", { status: 500 })
//   }
// }

export async function GET(request: Request) {
  await connectToDB();
  try {
    const queryParams = new URL(request.url).searchParams;
    const accountOwner = queryParams.get('accountOwner');
    if (!accountOwner) {
      return new Response("accountOwner is required", { status: 400 });
    }

    const bills = await Bills.find({ accountOwner: accountOwner });
    return new Response(JSON.stringify(bills), { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response("failed", { status: 500 });
  }
}
