import React from "react"

import styles from "./cardList.module.css"
import { Pagination } from "../Pagination"
import Card from "../Card"
import { Post } from "@/types"

const getData = async (page: number, cat: string) => {
  const res = await fetch(
    `${process.env.NEXTAUTH_URL}/api/posts?page=${page}&cat=${cat}`,
    {
      cache: "no-store"
    }
  )

  if (!res.ok) throw new Error("Failed")

  return await res.json()
}

export const CardList: React.FC<{ page: number; cat: string }> = async ({
  page,
  cat = ""
}) => {
  const { posts, count } = await getData(page, cat)

  const POST_PER_PAGE = 2

  const hasPrev = POST_PER_PAGE * (page - 1) > 0
  const hasNext = POST_PER_PAGE * (page - 1) + POST_PER_PAGE < count
  return (
    <div className={styles.container} id="recent-posts">
      <h1 className={styles.title}>Recent Posts</h1>
      <div className={styles.posts}>
        {posts.map((post: Post) => (
          <Card post={post} key={post.title} />
        ))}
      </div>
      <Pagination page={page} hasPrev={hasPrev} hasNext={hasNext} />
    </div>
  )
}
