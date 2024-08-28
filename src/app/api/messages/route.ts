import { EStoreName, readData, writeData } from '@/utils/store';

export async function GET(request: Request) {
  const messages = readData(EStoreName.Messages);
  return new Response(JSON.stringify(messages), { status: 200 });
}

export async function POST(request: Request) {
  const newStores = await request.json();
  const messages = readData(EStoreName.Messages) as any;
  const body = newStores?.body;
  const dataMessages = messages?.data ?? [];
  if (Object.keys(body).length > 0) {
    dataMessages.push(body);
  }
  writeData({ data: dataMessages });
  return new Response(JSON.stringify({ data: dataMessages }), { status: 201 });
}
