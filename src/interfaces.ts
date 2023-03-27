export interface Category {
  forums: string[]
  name: string
  slug: string
  id: string
}

export interface Forum {
  categoryId: string
  description: string
  name: string
  slug: string
  id: string
  lastPostId?: string
  threads?: string[]
}

export interface Post {
  edited?: {
    at: number
    by: string
    moderated: boolean
  }
  publishedAt: number
  text: string
  threadId: string
  userId: string
  id: string
  reactions?: Record<string, Record<string, string | undefined> | undefined>
}

export interface Thread {
  firstPostId: string
  forumId: string
  lastPostAt: number
  lastPostId: string
  posts: string[]
  publishedAt: number
  slug: string
  title: string
  userId: string
  id: string
  contributors?: string[]
}

export interface User {
  avatar: string
  email: string
  lastVisitAt: number
  name: string
  registeredAt: number
  username: string
  usernameLower: string
  id: string
  isModerator?: boolean
  bio?: string
  twitter?: string
  website?: string
}
