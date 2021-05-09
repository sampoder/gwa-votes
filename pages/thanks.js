import Link from "next/link";
import { Card, Typography, Space } from "@supabase/ui";
import { supabase } from "../utils/initSupabase";

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
        <div style={{ padding: "2em", paddingRight: "1em" }}>
          <h1
            style={{
              fontWeight: "600",
              marginBlockStart: "0em",
              marginBlockEnd: "0em",
              marginLeft: "10px",
              textShadow:
                "0 1px 2px rgba(0, 0, 0, 0.25), 0 2px 4px rgba(0, 0, 0, 0.125)",
            }}
          >
            Student Council Elections 2021
          </h1>
          <h1
            style={{
              fontSize: "9em",
              marginBlockStart: "0em",
              marginBlockEnd: "0em",
              fontWeight: "800",
              textShadow: "0 4px 8px rgba(0, 0, 0, 0.125)",
            }}
          >
            Thank you for voting
          </h1>
          <h2
            style={{
              padding: "10px",
              marginBlockStart: "0.4em",
              backgroundColor: "rgba(34, 74, 125,1)",
              boxShadow:
                "0 1px 2px rgba(0, 0, 0, 0.0625), 0 8px 12px rgba(0, 0, 0, 0.125)",
              width: "fit-content",
            }}
          >
            Questions or concerns? Contact 23samuel.p@gwa.edu.sg
          </h2>
        </div>
      </div>
    </div>
  );
}
