import { SWRConfig } from 'swr'
import fetch from '../lib/fetchJson'
import "react-datepicker/dist/react-datepicker.css"
import 'styles/index.css'

function MyApp({ Component, pageProps }) {
  return (
    <SWRConfig
      value={{
        fetcher: fetch,
        onError: (err) => {
          console.error(err)
        },
      }}
    >
      <Component {...pageProps} />
    </SWRConfig>
  )
}

export default MyApp
