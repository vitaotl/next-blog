import React from "react"

import styles from "./featured.module.css"
import Image from "next/image"

export const Featured: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Hello NextBlog,</b> Discover my stories and creatives ideas.
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/p1.jpeg" alt="" fill className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <h2 className={styles.postTitle}>Post 1</h2>
          <p className={styles.postDescription}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
            voluptates, voluptatum, quia, quibusdam perspiciatis doloribus
            voluptatem quos quae nesciunt quod dolorum. Quisquam, voluptatum
            voluptatem. Quisquam, voluptatum voluptatem.
          </p>
          <button className={styles.button}>Read More</button>
        </div>
      </div>
    </div>
  )
}
