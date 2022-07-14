/** @jsx h */
import { h } from "https://esm.sh/preact@10.8.2";
import { tw } from "https://esm.sh/twind@0.16.16";

const Header = () => {
  return (
    <div>
      <header
        style={{
          "background-image": "url('../assets/simple_rect.svg')",
          "background-size": "cover",
        }}
        class={tw`mb-12 h-[600px]`}
      >
        {/* Navigation */}
        <nav
          class={tw
            `bg-[rgba(0,0,0,.85)] h-[60px] sticky top-0 right-0 left-0 z-10 px-8`}
        >
          <div
            class={tw
              `flex flex-row justify-between h-[60px] max-w-[1280px] m-auto items-center`}
          >
            <div>
              <a
                href="/"
                class={tw
                  `flex flex-row text-[#f9f9f9] font-sans text-xl items-center`}
              >
                <img
                  class={tw`h-[35px] mr-3`}
                  src="../assets/LE_logo.png"
                  alt="Josh Sisley's Blog"
                />
                The Leading Edge
              </a>
            </div>
            <div>
              <a
                target="_blank"
                href="https://sisley.tech"
                class={tw
                  `bg-transparent border border-[#00da63] text-white text-sm px-[20px] h-[40px] leading-[40px] rounded-sm hover:bg-[#00da63] hover:text-white hover:border-[#00da63]`}
              >
                About Me
              </a>
            </div>
          </div>
        </nav>

        {/* Extra Content */}
        <div
          class={tw`relative h-[540px]`}
        >
          <div
            class={tw
              `flex md:flex-row sm:flex-col max-w-[1280px] w-full m-auto items-center`}
          >
            <div class={tw`md:w-[50%]`}>
              <h1
                class={tw
                  `md:text-left sm:text-center text-5xl font-semibold font-sans text-[#161b19] mb-6`}
              >
                The Leading Edge
              </h1>
              <p class={tw`md:text-left sm:text-center text-lg font-sans`}>
                A blog that focuses on the latest and greatest when it comes to
                JavaScript and TypeScript. Topics include JavaScript/TypeScript
                tricks &amp; tips, Angular, React, Node.js, Deno.js, and Edge
                Functions to name a few.
              </p>
              <p class={tw`md:text-left sm:text-center text-lg font-sans mt-6`}>
                <i>
                  All blog posts are written by Josh Sisley.
                </i>
              </p>
            </div>
            <div class={tw`flex-1 text-right items-end`}>
              <img
                class={tw`max-w-[480px]`}
                src="../assets/world.svg"
              />
            </div>
          </div>
        </div>
      </header>
      {/* Blog Highlights */}
      <section
        class={tw`grid grid-cols-3 divide-x mb-12 max-w-[1280px] m-auto w-full`}
      >
        <a
          href="/angular_14"
          class={tw
            `items-center p-4 hover:bg-gradient-to-r from-[#00da63] via-[#1de281] to-[#5ff5c3] hover:rounded-sm`}
        >
          <p class={tw`uppercase font-bold text-center text-sm mb-3`}>
            What's New in Angular 14
          </p>
          <h4 class={tw`text-xl text-center tracking-wider`}>
            A brief description of the new blog post
          </h4>
        </a>
        <a
          href="/edge_function_use_cases"
          class={tw
            `items-center p-4 hover:bg-gradient-to-r from-[#00da63] via-[#1de281] to-[#5ff5c3] hover:rounded-sm`}
        >
          <p class={tw`uppercase font-bold text-center text-sm mb-3`}>
            Edge Function Use Cases
          </p>
          <h4 class={tw`text-xl text-center tracking-wider`}>
            Description of the new content or blog post
          </h4>
        </a>
        <a
          href="/angular_14"
          class={tw
            `items-center p-4 hover:bg-gradient-to-r from-[#00da63] via-[#1de281] to-[#5ff5c3] hover:rounded-sm`}
        >
          <p class={tw`uppercase font-bold text-center text-sm mb-3`}>
            New Content
          </p>
          <h4 class={tw`text-xl text-center tracking-wider`}>
            Description of the new content or blog post
          </h4>
        </a>
      </section>
    </div>
  );
};

export default Header;
