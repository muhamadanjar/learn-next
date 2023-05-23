import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
	console.log(req);
	const { searchParams } = new URL(req.url);
}

export async function POST(req: NextRequest){
	console.log("REQUEST POST");
}
