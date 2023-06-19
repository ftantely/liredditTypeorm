import { ThemeProvider, CSSReset } from "@chakra-ui/core";
import theme from "../theme";
import { Provider, createClient, cacheExchange, fetchExchange } from "urql";

const client = createClient({
  url: "http://localhost:4000/graphql",
  exchanges: [cacheExchange, fetchExchange],
  fetchOptions: {
    credentials: "include",
  },
});

function MyApp({ Component, pageProps }: any) {
  return (
    <Provider value={client}>
      <ThemeProvider theme={theme}>
        <CSSReset />
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  );
}

export default MyApp;
