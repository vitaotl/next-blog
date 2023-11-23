type User = {
  id: string
  name: string
  email: string
  emailVerified: boolean
  image: string
}

export type Comment = {
  user: any
  id: string
  createdAt: string
  desc: string
  userEmail: string
  postSlug: string
}

export type Comments = {
  comments: Comment[]
}

export type Post = {
  id: string
  createdAt: string
  slug: string
  title: string
  desc: string
  img: string
  views: string
  catSlug: string
  userEmail: string
  user: User
}
