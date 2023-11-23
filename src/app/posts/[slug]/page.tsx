import React from "react"

import Image from "next/image"
import { Menu } from "@/components/Menu"
import Comments from "@/components/Comments"

import styles from "./singlePage.module.css"
import { Post } from "@/types"

const getData = async (slug: any) => {
  const res = await fetch(`${process.env.NEXTAUTH_URL}/api/posts/${slug}`, {
    cache: "no-store"
  })

  if (!res.ok) throw new Error("Failed")

  return await res.json()
}

const SinglePage = async ({ params }: any) => {
  const { slug } = params
  const { post }: { post: Post } = await getData(slug)

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>{post.title}</h1>
          <div className={styles.user}>
            <div className={styles.userImageContainer}>
              <Image
                src={post.user.image}
                alt=""
                fill
                className={styles.avatar}
              />
            </div>
            <div className={styles.userTextContainer}>
              <span className={styles.username}>{post.user.name}</span>
              <span className={styles.date}>
                {post.createdAt.split("T")[0].replaceAll("-", ".")}
              </span>
            </div>
          </div>
        </div>
        {post.img && (
          <div className={styles.imageContainer}>
            <Image
              src={post.img}
              alt=""
              fill
              className={styles.image}
            />
          </div>
        )}
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div
            className={styles.description}
            dangerouslySetInnerHTML={{ __html: post.desc }}
          />
          <div className={styles.comment}>
            <Comments postSlug={post.slug} />
          </div>
        </div>
        <Menu />
      </div>
    </div>
  )
}

export default SinglePage
