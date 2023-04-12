import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    GoogleProvider({
    clientId: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET
  })
    // ...add more providers here
  ],
}

export default NextAuth(authOptions)



  //  callbacks: {
  //   async signIn({ user, account, profile, email, credentials }) {
  //     const res = await fetch("https://api.github.com/user/public_emails", {
  //       headers: {
  //         Authorization: `token ${account.access_token}`,
  //       },
  //     });
  //    const emails = await res.json()
  //    if (!emails || emails.length === 0) {
  //        return
  //       }
  //       const sortedEmails = emails.sort((a, b) => b.primary - a.primary)
  //       profile.email = sortedEmails[0].email
  //       console.log(profile.email);
      
  //   },
  // },