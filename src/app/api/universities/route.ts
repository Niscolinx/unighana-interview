import { createUniversity } from "@/lib/redis";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    const data = await req.json()
    console.log(data)
 

   
    const id = await createUniversity(data).then((res) =>console.log({res})).catch((err) => console.log({err}))
    return NextResponse.json({id})
}

