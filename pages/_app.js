import "../styles/globals.css"
import nprogress from "nprogress"
import Router from "next/router"

nprogress.configure({ showSpinner: false })
Router.events.on("routeChangeStart", () => nprogress.start())
Router.events.on("routeChangeComplete", () => nprogress.done())
Router.events.on("routeChangeError", () => nprogress.done())

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
