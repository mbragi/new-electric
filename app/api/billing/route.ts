import { connectToDB } from '@/utils/database';
import Bills from '@/models/bill.model';
import sendEmail from '@/utils/mailer';

export async function POST(request: Request) {
 await connectToDB();
 try {
  const body = await request.json();
   const bill = new Bills(body);
   await bill.save();
   const html = `
  <html>
    <head>
      <style>
        body {
          background: linear-gradient(to bottom, blue, red, yellow);
          font-family: Arial, sans-serif;
        }
        .container {
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
          background-color: white;
          border-radius: 10px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
        }
        h1 {
          color: #333;
        }
        p {
          color: #555;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>Electricity Bill Payment Receipt</h1>
        <p>Dear Customer,</p>
        <p>You have successfully paid the sum of ${bill.amount.toFixed(2)} Naira for Meter No ${bill.meterNumber}.</p>
        <p>Thank you for choosing our service!</p>
      </div> 
    </body>
  </html>
`;

   await sendEmail(bill.email,'Electricity Bill Subscription', `you have successfully paid the sum of ${bill.amount} for meter No ${bill.meterNumber}`,html)
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
