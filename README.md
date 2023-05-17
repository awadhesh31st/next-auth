# NextAuth.js with App Directory

This is a guide on setting up NextAuth.js with an app directory, providing authentication and authorization capabilities for your Next.js application. NextAuth.js is a flexible authentication library that supports various authentication providers and strategies.

<img width="1710" alt="image" src="https://github.com/awadhesh31st/next-auth/assets/91739540/00ce7316-44df-4cb3-b464-3bd8fdf039e9">

## Installation

To get started, follow these steps:

1. Create a new Next.js application using the following command:

```jsx
yarn create next-app
```

2. Install the required dependencies by running:

```jsx
yarn add next-auth
```

## Configuration

1. Create a new file in the app directory called `app/api/auth/[...nextauth]/router.ts`. This file will handle the authentication routes.
2. Open the `router.js` file and add the following code:

```jsx
import NextAuth from 'next-auth'
import GithubProvider from 'next-auth/providers/github'

const handler = NextAuth({
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
        }),
        // ...add more providers here
    ],
    secret: process.env.JWT_TOKEM,
})

export { handler as GET, handler as POST }
```

3. Update Layout

```jsx
'use client'

import '../styles/globals.css'
import { SessionProvider } from 'next-auth/react'

export default function RootLayout({
    children,
}: {
    children: React.ReactNode,
}) {
    return (
        <html lang="en">
            <body>
                <SessionProvider>{children}</SessionProvider>
            </body>
        </html>
    )
}
```

3. In the app directory, create a `.env.local` file and add your GitHub client ID and client secret:

```jsx
GITHUB_ID=
GITHUB_SECRET=
NEXTAUTH_URL=
JWT_TOKEM=
```

## Usage

To use NextAuth.js in your Next.js app, you need to import the `useSession` hook. Here's an example of how to use it:

```jsx
'use client'

import React from 'react'
import { signIn, signOut, useSession } from 'next-auth/react'

const Component = () => {
    const { data } = useSession()
    return data ? (
        <span onClick={() => signOut()}>Logout</span>
    ) : (
        <span onClick={() => signIn('github')}>Login</span>
    )
}

export default Component
```

## Deployment

# Vercel

If you're using Vercel for deployment, follow these steps to set up environment variables:

1. Open your project on Vercel's dashboard.
2. Go to the `Settings` tab.
3. Scroll down to the `Environment Variables` section.
4. Add each environment variable key-value pair, such as `GITHUB_ID`,`GITHUB_SECRET`,`NEXTAUTH_URL` and `JWT_TOKEM`, with their respective values.
5. Save the changes.

Vercel will automatically use these environment variables during deployment.

## Further Customization

NextAuth.js provides various configuration options and customization possibilities. Visit the [next-auth.js](https://next-auth.js.org/getting-started/example). documentation for more details on available options, providers, callbacks, and customization.

## Conclusion

Congratulations! You've set up NextAuth.js with an app directory in your Next.js application. You can now authenticate users using various providers and leverage the useSession hook to handle authentication in your components.
