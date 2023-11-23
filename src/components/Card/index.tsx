import React from "react"

import styles from "./card.module.css"
import Image from "next/image"
import Link from "next/link"
import { Post } from "@/types"

const Card: React.FC<{ post: Post }> = ({ post }) => {
  return (
    <div className={styles.container} key={post.title}>
      <div className={styles.imageContainer}>
        <Image src="/p1.jpeg" alt="post" fill className={styles.image} />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>{post.createdAt.split("T")[0]} - </span>
          <span className={styles.category}>{post.catSlug}</span>
        </div>
        <Link href={`posts/${post.slug}`}>
          <h2>{post.title}</h2>
        </Link>
        <p className={styles.description}>{post.desc}</p>
        <Link href={`posts/${post.slug}`} className={styles.link}>
          Read More
        </Link>
      </div>
    </div>
  )
}

export default Card
