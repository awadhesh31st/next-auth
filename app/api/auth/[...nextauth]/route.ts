import NextAuth from 'next-auth'
import GithubProvider from 'next-auth/providers/github'
import GoogleProvider from 'next-auth/providers/google'
import TwitterProvider from 'next-auth/providers/twitter'

const handler = NextAuth({
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID || '',
            clientSecret: process.env.GITHUB_SECRET || '',
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_ID || '',
            clientSecret: process.env.GOOGLE_SECRET || '',
        }),
        TwitterProvider({
            clientId: process.env.TWITTER_ID || '',
            clientSecret: process.env.TWITTER_SECRET || '',
            version: '2.0',
        }),
        // ...add more providers here
    ],
    secret: process.env.JWT_TOKEM,
})

export { handler as GET, handler as POST }
