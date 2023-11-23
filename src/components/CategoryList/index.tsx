import React, { cache } from "react"

import styles from "./categoryList.module.css"
import Link from "next/link"
import Image from "next/image"
import categoriesBgColor from "@/utils/categoriesBgColor"
// import categories from "@/utils/categories"

type Category = {
  id: string
  slug: string
  title: string
  img: string
}

const getData = async () => {
  const res = await fetch("http://localhost:3000/api/categories", { cache: "no-store" })

  if (!res.ok) throw new Error("Failed")

  return await res.json()
}

export const CategoryList: React.FC = async () => {
  const categories: Category[] = await getData()
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Popular Categories</h2>
      <div className={styles.categories}>
        {categories?.map((category) => (
          <Link
            href={`/blog?cat=${category.slug}`}
            className={`${styles.category}`}
            style={{
              backgroundColor: categoriesBgColor[category.slug as keyof typeof categoriesBgColor]?.bgColor
            }}
            key={category.id}
          >
            <Image
              src={category.img}
              alt=""
              width={32}
              height={32}
              className={styles.image}
            />
            {category.title}
          </Link>
        ))}
      </div>
    </div>
  )
}
