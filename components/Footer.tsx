/** @jsx h */
import { h } from "https://esm.sh/preact@10.8.2";
import { tw } from "https://esm.sh/twind@0.16.16";

const Footer = () => {
  return (
    <footer class={tw`text(3xl blue-500)`}>
      <p>
        &copy; 2022
      </p>
    </footer>
  )
}

export default Footer;