import GoogleProvider from 'next-auth/providers/google'
import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: 'Username', type: 'text', placeholder: '' },
      },
      async authorize(credentials, req) {
        const user = {
          id: '1',
          email: 'cliente@exemplo.com',
        }
        if (user) {
          return user
        } else {
          return null
        }
      },
    }),
  ],
}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }
