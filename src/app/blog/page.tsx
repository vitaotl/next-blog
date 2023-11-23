import React from "react"

import styles from "./blogPage.module.css"
import { CardList } from "@/components/CardList"
import { Menu } from "@/components/Menu"

const BlogPage = ({ searchParams }: { searchParams: URLSearchParams }) => {
  const params = new URLSearchParams(searchParams)
  const page = Number(params.get("page")) || 1
  const cat = params.get("cat") || ""

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{cat} Blog</h2>
      <div className={styles.content}>
        <CardList page={page} cat={cat} />
        <Menu />
      </div>
    </div>
  )
}

export default BlogPage
