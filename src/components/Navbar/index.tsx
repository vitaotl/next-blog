import React from "react"

import styles from "./navbar.module.css"
import Image from "next/image"
import Link from "next/link"
import AuthLinks from "../AuthLinks"
import ThemeToggle from "../ThemeToggle"

export const Navbar: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.social}>
        <Image src="/facebook.png" width={24} height={24} alt="Facebook icon" />
        <Image
          src="/instagram.png"
          width={24}
          height={24}
          alt="Instagram icon"
        />
        <Image src="/tiktok.png" width={24} height={24} alt="Tiktok icon" />
        <Image src="/youtube.png" width={24} height={24} alt="Youtube icon" />
      </div>
      <div className={styles.logo}>NextJS Blog</div>
      <div className={styles.links}>
        <ThemeToggle />
        <Link href="/" className={styles.link}>
          Homepage
        </Link>
        <Link href="/contact" className={styles.link}>
          Contact
        </Link>
        <Link href="/about" className={styles.link}>
          About
        </Link>
        <Link href="/write" className={styles.link}>
          Write
        </Link>
        <AuthLinks />
      </div>
    </div>
  )
}
