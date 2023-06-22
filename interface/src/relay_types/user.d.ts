export type ScreenName = {
    screen_name: string
}

export type PlainUser = ScreenName & {
    
    password: string,
} 

export type HashedUser = ScreenName & {
    
    hash: string
}

