import "../styles/globals.css"
import "../styles/notfound.css"
import "../styles/modal.css"
import "../styles/about.css"
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

export default function App({ Component, pageProps}) {
  return <Component {...pageProps}/>
}

