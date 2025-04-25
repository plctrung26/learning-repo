import { ReactNode } from "react"

export type ArticleDataType = {
    // key: React.Key;
    id: string
    slug?: string
    title?: string
    content?: ReactNode
    status?: string | undefined
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

export type ArticleCreateDataType = {
    title?: string,
    content?: ReactNode,
    picture?: string,
    status?: string,
    type?: string,
    timeToRead?: number,
    categoryId?: string,
    author?: string
}