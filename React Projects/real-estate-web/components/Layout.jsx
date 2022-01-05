import Head from "next/head";
import { Children } from "react";

import { Box } from "@chakra-ui/react";

export const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Real Estate</title>
      </Head>

      <Box maxWidth="1280px" m="auto">
        <header>Navbar</header>
        <main>{children}</main>
        <footer>Footer</footer>
      </Box>
    </>
  );
};

export default Layout;
