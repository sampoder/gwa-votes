import { Auth } from "@supabase/ui";
import { supabase } from "../utils/initSupabase";
import "./../style.css";
import { ThemeProvider } from "theme-ui";
import theme from "../lib/theme";
import Head from "next/head";

export default function MyApp({ Component, pageProps }) {
  let title = "Student Council Elections 2021"
  let description = "Make your voice count and vote in these elections."
  let image = "https://cloud-i685e8ajt-hack-club-bot.vercel.app/0stucoogg.png"
  return (
    <ThemeProvider>
      <Head>
        <title>{title}</title>
        <meta property="og:title" content={title} />
        <meta name="twitter:title" content={title} />
        <meta property="og:type" content="website" />
        <meta name="description" content={description} />
        <meta property="og:description" content={description} />
        <meta name="twitter:description" content={description} />
        <meta property="og:image" content={image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={image} />
        <meta name="msapplication-TileColor" content={theme.colors.primary} />
        <meta name="theme-color" content={theme.colors.primary} />
      </Head>
      <Auth.UserContextProvider supabaseClient={supabase}>
        <Component {...pageProps} />
      </Auth.UserContextProvider>
    </ThemeProvider>
  );
}
