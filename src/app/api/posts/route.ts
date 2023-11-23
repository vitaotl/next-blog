import { getAuthSession } from "@/utils/auth"
import prisma from "@/utils/connect"
import { NextResponse } from "next/server"

export const GET = async (req: Request) => {
  const { searchParams } = new URL(req.url)
  const page = searchParams.get("page")
  const cat = searchParams.get("cat")

  const POST_PER_PAGE = 2

  const query = {
    take: POST_PER_PAGE,
    skip: POST_PER_PAGE * (Number(page) - 1),
    where: {
      ...(cat && { catSlug: cat })
    }
  }

  try {
    const [posts, count] = await prisma.$transaction([
      prisma.post.findMany(query),
      prisma.post.count({ where: query.where })
    ])

    return new NextResponse(JSON.stringify({ posts, count }), { status: 200 })
  } catch (error) {
    return new NextResponse(JSON.stringify({ message: error }), { status: 500 })
  }
}

export const POST = async (req: Request) => {
  const session = await getAuthSession()

  if (!session)
    return new NextResponse(JSON.stringify({ message: "Not Authenticated" }), {
      status: 401
    })

  try {
    const body = await req.json()
    const post = await prisma.post.create({
      data: {
        ...body,
        userEmail: session.user?.email
      }
    })
    return new NextResponse(JSON.stringify({ post }), { status: 200 })
  } catch (error) {
    return new NextResponse(JSON.stringify({ message: error }), { status: 500 })
  }
}
