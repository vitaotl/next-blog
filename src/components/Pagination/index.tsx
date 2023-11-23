"use client"

import React from "react"

import styles from "./pagination.module.css"
import { useRouter } from "next/navigation"

export const Pagination: React.FC<{
  page: number
  hasPrev: boolean
  hasNext: boolean
}> = ({ page, hasPrev, hasNext }) => {
  const router = useRouter()

  return (
    <div className={styles.container}>
      <button
        className={styles.button}
        onClick={() => router.push(`?page=${page - 1}#recent-posts`)}
        disabled={!hasPrev}
      >
        Previous
      </button>
      <button
        className={styles.button}
        onClick={() => router.push(`?page=${page + 1}#recent-posts`)}
        disabled={!hasNext}
      >
        Next
      </button>
    </div>
  )
}
