// this file is a wrapper with defaults to be used in both API routes and `getServerSideProps` functions
import { withIronSession } from 'next-iron-session'

export default function withSession(handler) {
  // console.log(process.env.SECRET_COOKIE_PASSWORD)
  return withIronSession(handler, {
    // password: process.env.SECRET_COOKIE_PASSWORD,
    password: '2gyZ3GDw3LHZQKDhPmPDL3sjREVRXPr8',
    cookieName: 'aces-iron-2020',
    cookieOptions: {
      // the next line allows to use the session in non-https environments like
      // Next.js dev mode (http://localhost:3000)
      secure: process.env.NODE_ENV === 'production' ? true : false,
      maxAge: process.env.NEXT_PUBLIC_SESSION_MAX_AGE,
    },
  })
}
