import { CardList } from "@/components/CardList"
import { CategoryList } from "@/components/CategoryList"
import { Featured } from "@/components/Featured"
import { Menu } from "@/components/Menu"
import { URLSearchParams } from "url"

import styles from "./homepage.module.css"

export default function Home({
  searchParams
}: {
  searchParams: URLSearchParams
}) {
  const params = new URLSearchParams(searchParams)
  const page = params.get("page") || "1"

  return (
    <div className={styles.container}>
      <Featured />
      <CategoryList />
      <div className={styles.content}>
        <CardList page={parseInt(page)} cat="" />
        <Menu />
      </div>
    </div>
  )
}
