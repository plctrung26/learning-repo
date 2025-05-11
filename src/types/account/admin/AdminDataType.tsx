export type AdminDataType = {
    id: string
    username: string,
    firstName: string,
    lastName: string,
    role: string,
    status: 'active' | 'inactive',
    email: string,
    picture?: string,
    createdAt?: string,
    updatedAt?: string,
    picture2?: {
        id?: string,
        uri?: string,
        type?: string,
        metadata?: string,
        createdAt?: string
    }
}

export type AdminByIdDataType = {
    id: string
    username: string,
    firstName: string,
    lastName: string,
    status: 'active' | 'inactive',
    email: string,
    password: string
}