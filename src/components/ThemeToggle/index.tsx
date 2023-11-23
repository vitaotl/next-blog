"use client"
import React, { useContext } from "react"

import styles from "./themeToggle.module.css"
import Image from "next/image"
import { ThemeContext } from "@/context/ThemeContext"

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useContext(ThemeContext)
  const ballStyle =
    theme === "light"
      ? { right: "2px", background: "#FFFFFF" }
      : { left: "2px", background: "#0f172a" }

  return (
    <div className={styles.container} onClick={toggleTheme}>
      <Image src="/moon.png" width={14} height={14} alt="Moon png" />
      <div className={styles.ball} style={ballStyle}></div>
      <Image src="/sun.png" width={14} height={14} alt="Sun png" />
    </div>
  )
}

export default ThemeToggle
