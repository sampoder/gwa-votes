import Link from "next/link";
import useSWR from "swr";
import { Auth } from "@supabase/ui";
import { supabase } from "../utils/initSupabase";
import { useEffect, useState } from "react";
import { Grid } from "theme-ui";
import { createClient } from "@supabase/supabase-js";
import { useRouter } from "next/router";

const fetcher = (url, token) =>
  fetch(url, {
    method: "GET",
    headers: new Headers({ "Content-Type": "application/json", token }),
    credentials: "same-origin",
  }).then((res) => res.json());

const Index = () => {
  const { user, session } = Auth.useUser();
  const { data, error } = useSWR(
    session ? ["/api/getUser", session.access_token] : null,
    fetcher
  );
  const [authView, setAuthView] = useState("sign_in");
  const router = useRouter()
  if (typeof data != "undefined") {
    if (data.votes[0].vice != null && data.votes[0].president != null) {
      router.push("/thanks");
    }
  }

  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        if (event === "PASSWORD_RECOVERY") setAuthView("forgotten_password");
        if (event === "USER_UPDATED")
          setTimeout(() => setAuthView("sign_in"), 1000);
        // Send session to /api/auth route to set the auth cookie.
        // NOTE: this is only needed if you're doing SSR (getServerSideProps)!
        fetch("/api/auth", {
          method: "POST",
          headers: new Headers({ "Content-Type": "application/json" }),
          credentials: "same-origin",
          body: JSON.stringify({ event, session }),
        }).then((res) => res.json());
      }
    );

    return () => {
      authListener.unsubscribe();
    };
  }, []);

  const View = () => {
    if (!user)
      return (
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
            Shape the future of your school
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
            Student Council Elections 2021
          </h1>
          <h2
            style={{
              padding: "10px",
              marginBlockStart: "0em",
              backgroundColor: "rgba(34, 74, 125,1)",
              boxShadow:
                "0 1px 2px rgba(0, 0, 0, 0.0625), 0 8px 12px rgba(0, 0, 0, 0.125)",
              width: "fit-content",
            }}
            onClick={() =>
              supabase.auth.signIn({
                provider: "google",
              })
            }
          >
            Verify Your Identity
          </h2>
        </div>
      );

    useEffect(() => {
      window.onbeforeunload = function () {
        return false;
      };
    });

    const [page, setPage] = useState("vice");
    const [vice, setVice] = useState(null);
    const [president, setPresident] = useState(null);
    return (
      <>
        {user && (
          <div style={{ padding: "2em", paddingRight: "1em" }}>
            <div style={{ display: "flex" }}>
              <h2
                style={{
                  padding: "10px",
                  marginBlockStart: "0em",
                  boxShadow:
                    "0 1px 2px rgba(0, 0, 0, 0.0625), 0 8px 12px rgba(0, 0, 0, 0.125)",
                  width: "49px",
                  background: `url(${user.user_metadata.avatar_url})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  marginRight: "12px",
                }}
              ></h2>
              <h2
                style={{
                  padding: "10px",
                  marginBlockStart: "0em",
                  backgroundColor: "rgba(34, 74, 125,1)",
                  boxShadow:
                    "0 1px 2px rgba(0, 0, 0, 0.0625), 0 8px 12px rgba(0, 0, 0, 0.125)",
                  width: "fit-content",
                }}
              >
                Choose Your {page == "vice" ? "Vice-President" : "President"}
              </h2>
            </div>
            <Grid columns={3} sx={{ maxWidth: "1200px", width: "100vw" }}>
              <div
                onClick={() => {
                  if (page == "vice") {
                    if (vice == 1) {
                      setVice(null);
                    } else {
                      setVice(1);
                    }
                  }
                  if (page == "president") {
                    if (president == 1) {
                      setPresident(null);
                    } else {
                      setPresident(1);
                    }
                  }
                }}
                style={{
                  background: `linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.7175245098039216) 66%, rgba(0,0,0,1) 90%), url(https://github.com/sampoder.png)`,
                  width: "100%",
                  backgroundPosition: "center",
                  paddingTop: "100%",
                  height: "100px",
                  position: "relative",
                  outline:
                    (page == "president" && president == 1) ||
                    (page == "vice" && vice == 1)
                      ? "4px solid #97d700"
                      : "none",
                  boxShadow:
                    "0 1px 2px rgba(0, 0, 0, 0.0625), 0 8px 12px rgba(0, 0, 0, 0.125)",
                }}
              >
                <div style={{ position: "absolute", bottom: 2, left: "24px" }}>
                  <h1 style={{ marginBlockEnd: "0.1em" }}>Sam Poder</h1>
                  <p style={{ marginBlockStart: "0.3em" }}>
                    Keeping everyone accountable.
                  </p>
                </div>
              </div>
            </Grid>
            <div style={{ display: "flex" }}>
              <h2
                style={{
                  padding: "10px",
                  backgroundColor: "rgba(34, 74, 125,1)",
                  boxShadow:
                    "0 1px 2px rgba(0, 0, 0, 0.0625), 0 8px 12px rgba(0, 0, 0, 0.125)",
                  width: "fit-content",
                  marginRight: "12px",
                }}
                onClick={() => {
                  if (page == "vice") {
                    if (
                      confirm(
                        "Going back with sign you out, do you wish to proceed?"
                      )
                    ) {
                      supabase.auth.signOut();
                    }
                  } else {
                    setPage("vice");
                  }
                }}
              >
                {`◄`} Back
              </h2>
              <h2
                style={{
                  padding: "10px",
                  backgroundColor: "rgba(34, 74, 125,1)",
                  boxShadow:
                    "0 1px 2px rgba(0, 0, 0, 0.0625), 0 8px 12px rgba(0, 0, 0, 0.125)",
                  width: "fit-content",
                }}
                onClick={() => {
                  if (page == "president") {
                    if (president == null) {
                      alert(
                        "Please ensure you have selected a President candidate."
                      );
                    } else {
                      if (
                        confirm(
                          "Submission is irreversible, please reconfirm your choices."
                        )
                      ) {
                        async function main() {
                          const data = await fetch("/api/submit", {
                            method: "POST",
                            headers: new Headers({
                              "Content-Type": "application/json",
                              token: session.access_token,
                            }),
                            credentials: "same-origin",
                            body: JSON.stringify({
                              vice,
                              president,
                            }),
                          }).then((r) => r.json());
                          if (data.error) {
                            alert(`Error! ${data.error}`);
                          } else {
                            router.push("/thanks");
                          }
                        }

                        main();
                      }
                    }
                  } else {
                    if (vice != null) {
                      setPage("president");
                    } else {
                      alert(
                        "Please ensure you have selected a Vice President candidate."
                      );
                    }
                  }
                }}
              >
                {page == "president" ? "Submit" : "Next"} {`►`}
              </h2>
            </div>
          </div>
        )}
      </>
    );
  };

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
        <View />
      </div>
    </div>
  );
};

export async function getServerSideProps({ req, res }) {
  const { user } = await supabase.auth.api.getUserByCookie(req);

  let powerfulSupabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.SUPABASE_SECRET_KEY
  );

  if (user) {
    const { data, error } = await powerfulSupabase
      .from("users")
      .select(
        `
  vice,
  president
`
      )
      .eq("id", user.id);
    //console.log(data);
    //console.log(error);
    
    // If no user, redirect to index.
    
    if(typeof data[0].vice != "undefined"){
      res.writeHead(301, {
        Location: "/thanks"
      });
      res.end();
    }
    
  }

  // If there is a user, return it.
  return { props: { user } };
}

export default Index;
