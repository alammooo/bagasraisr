import { ReactNode } from "react"

export const baseUrl = "http://localhost:3000/"

export interface LayoutProps {
  children: ReactNode
}

export interface PostProps {
  id: string
  title: string
  author: {
    name: string
    email: string
  } | null
  content: string
  published: boolean
  createdAt: string
}
