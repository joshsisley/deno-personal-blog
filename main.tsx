/** @jsx h */

import blog, { h } from "https://deno.land/x/blog@0.3.3/blog.tsx";
import { setup, tw } from "https://esm.sh/twind@0.16.16";
import { getStyleTag, virtualSheet } from "https://esm.sh/twind@0.16.16/sheets";

import Header from "./components/Header.tsx";
import Footer from "./components/Footer.tsx";

const sheet = virtualSheet();

setup({
  theme: {
    fontFamily: {
      sans: ["Helvetica", "sans-serif"],
      serif: ["Times", "serif"],
    },
  },
  sheet,
});

blog({
  title: "Josh Sisley's Blog",
  header: <Header />,
  footer: <Footer />,
  author: "Josh Sisley",
  background: "#f9f9f9",
});
