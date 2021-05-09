import Link from "next/link";
import { Card, Typography, Space } from "@supabase/ui";
import { supabase } from "../utils/initSupabase";
import { Grid, Box, Heading } from "theme-ui";

export default function Profile({ user }) {
  return (
    <div
      style={{
        background:
          "linear-gradient(180deg, rgba(55,114,190,0.2) 0%, rgba(55,114,190,0.7175245098039216) 66%, rgba(55,114,190,1) 90%), url(https://cloud-4if0t18se-hack-club-bot.vercel.app/0ezgif-7-fd300583c741.gif)",
        height: "100vh",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: "100vw",
        color: "white",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",

          height: "100vh",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Box sx={{ padding: ["0.6em", "2em"], paddingRight: "1em" }}>
          <Heading
            as="h1"
            sx={{
              fontWeight: "600",
              marginBlockStart: "0em",
              marginBlockEnd: "0em",
              marginLeft: ["0px", "10px"],
              maxWidth: "85%",
              textShadow:
                "0 1px 2px rgba(0, 0, 0, 0.25), 0 2px 4px rgba(0, 0, 0, 0.125)",
            }}
          >
            Student Council Elections 2021
          </Heading>
          <Heading
            as="h1"
            sx={{
              fontSize: ["4em", "6em", "9em"],
              marginBlockStart: "0em",
              marginBlockEnd: "0em",
              fontWeight: "800",
              textShadow: "0 4px 8px rgba(0, 0, 0, 0.125)",
            }}
          >
            Thank you for voting
          </Heading>
          <Heading
            sx={{
              padding: "10px",
              fontSize: ["0.9em", "1.3em"],
              marginBlockStart: "0.4em",
              backgroundColor: "rgba(34, 74, 125,1)",
              boxShadow:
                "0 1px 2px rgba(0, 0, 0, 0.0625), 0 8px 12px rgba(0, 0, 0, 0.125)",
              width: "fit-content",
            }}
          >
            Questions or concerns? Contact{" "}
            <a href="mailto:23samuel.p@gwa.edu.sg" style={{color: 'white', textDecoration: 'none'}}>23samuel.p@gwa.edu.sg</a>
          </Heading>
        </Box>
      </div>
    </div>
  );
}
