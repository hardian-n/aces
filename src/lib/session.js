// this file is a wrapper with defaults to be used in both API routes and `getServerSideProps` functions
import { withIronSession } from 'next-iron-session'

export default function withSession(handler) {
  console.log(process.env.COOKIE_PASSWORD)
  console.log(process.env.COOKIE_NAME)
  return withIronSession(handler, {
    password: process.env.COOKIE_PASSWORD,
    cookieName: "gaia/aces-iron/y2020",
    cookieOptions: {
      // the next line allows to use the session in non-https environments like
      // Next.js dev mode (http://localhost:3000)
      secure: process.env.NODE_ENV === 'production' ? true : false,
      maxAge: 86400,
    },
  })
}
