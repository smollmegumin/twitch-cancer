import { useState } from "react";
import { TwitchContext } from "../context";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const [accessData, setAccessData] = useState();
  return (
    <TwitchContext.Provider value={{ accessData, setAccessData }}>
      <Component {...pageProps} />
    </TwitchContext.Provider>
  );
}

export default MyApp;
