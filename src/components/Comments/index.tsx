"use client"
import React, { useState } from "react"

import styles from "./comments.module.css"
import Link from "next/link"
import Image from "next/image"
import { useSession } from "next-auth/react"
import useSWR from "swr"
import { Comment } from "@/types"

const fetcher = async (url: string) => {
  const res = await fetch(url)
  const data = await res.json()

  if (!res.ok) throw new Error(data.message)

  return data
}

const Comments = ({ postSlug }: { postSlug: string }) => {
  const { status } = useSession()

  const { data, mutate, isLoading } = useSWR(
    `http://localhost:3000/api/comments?postSlug=${postSlug}`,
    fetcher
  )

  const [description, setDescription] = useState<string>("")

  const handleSubmit = async () => {
    try {
      await fetch(`http://localhost:3000/api/comments`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ desc: description, postSlug })
      })
      mutate()
      setDescription("")
    } catch (error: any) {
      alert(error.message)
      console.log("SAQUIII")
    }
  }
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Comments</h2>
      {status === "authenticated" ? (
        <div className={styles.write}>
          <textarea
            placeholder="write a comment..."
            className={styles.input}
            onChange={(e) => setDescription(e.target.value)}
          />
          <button className={styles.button} onClick={handleSubmit}>
            Send
          </button>
        </div>
      ) : (
        <Link href="/login">Login to write a comment</Link>
      )}
      <div className={styles.comments}>
        {isLoading
          ? "Loading..."
          : data.comments.map((comment: Comment) => {
              return (
                <div className={styles.comment} key={comment.id}>
                  <div className={styles.user}>
                    <Image
                      src={comment.user.image}
                      alt=""
                      width={50}
                      height={50}
                      className={styles.image}
                    />
                    <div className={styles.userInfo}>
                      <div className={styles.username}>{comment.user.name}</div>
                      <div className={styles.date}>
                        {comment.createdAt.split("T")[0].replaceAll("-", ".")}
                      </div>
                    </div>
                  </div>
                  <p className={styles.description}>{comment.desc}</p>
                </div>
              )
            })}
      </div>
    </div>
  )
}

export default Comments
