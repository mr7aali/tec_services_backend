


export type Itoken = {
    role: string,
    user_id: string
}

export type ILoginResponse = {
    accessToken: string,
    refreshToken?: string
}

export type IRefreshTokenResponse = {
    accessToken: string
}