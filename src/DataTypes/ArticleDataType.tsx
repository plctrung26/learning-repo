import { ReactNode } from "react"

export type ArticleData = {
    // key: React.Key;
    id: string
    slug?: string
    title?: string
    content?: ReactNode
    status?: string
    type?: string
    author?: string
    categoryId?: string
    timeToRead?: number
    createdAt?: string
    updatedAt?: string
    category?: {
        id?: string
        name?: string
    }
    picture?: {
        id?: string
        uri?: string
        types?: string
        metadata?: {
            thumb?: {
                uri?: string
                key?: string
            },
            medium?: {
                uri?: string
                key?: string
            }
        }
        createdAt?: string
    }
}