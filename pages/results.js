import { createClient } from "@supabase/supabase-js";
import rawCandidates from "../lib/candidates";
import { Box, Button, Grid, Heading, Input, Text } from "theme-ui";

export default function Results({
  candidates,
  voters,
  viceWinner,
  presidentWinner,
  notAuthed,
}) {
  if (notAuthed) {
    return (
      <Box
        sx={{
          bg: "rgba(34, 74, 125,1)",
          color: "white",
          minHeight: "100vh",
          px: 4,
          py: 4,
        }}
      >
        <Heading pb={3} as="h1">
          Student Council Election Results
        </Heading>
        <form action="/results">
          <Input
            id="pwd"
            name="pwd"
            placeholder="Enter Password"
            sx={{ maxWidth: "600px" }}
          />
          <Button sx={{ border: "1px solid white", mt: "12px" }}>Enter</Button>
        </form>
      </Box>
    );
  }
  return (
    <Box
      sx={{
        bg: "rgba(34, 74, 125,1)",
        color: "white",
        minHeight: "100vh",
        px: 4,
        pb: 4,
      }}
    >
      <Heading pt={3} as="h1">
        <Button
          sx={{
            border: "1px solid white",
            py: 0,
            verticalAlign: "text-bottom",
          }}
          as="a"
          href="/results"
        >
          <Text sx={{ transform: "translateY(-2px)", display: "inline-block" }}>
            {"<"}
          </Text>
        </Button>{" "}
        Student Council Election Results
      </Heading>
      <Heading my={3}>Vice Presidental Race</Heading>
      <Grid columns={[1, 2, 4]} sx={{ maxWidth: "1200px", color: "white" }}>
        {candidates.vice.map((x) => (
          <Box
            sx={{
              background:
                x.votes == viceWinner
                  ? `linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,60,0,0.7175245098039216) 66%, rgba(0,60,0,1) 90%), url(${x.photo})`
                  : `linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(60,0,0,0.7175245098039216) 66%, rgba(60,0,0,1) 90%), url(${x.photo})`,
              width: "100%",
              backgroundSize: "cover",
              backgroundPosition: "center",
              paddingTop: "100%",
              height: "100px",
              position: "relative",
              boxShadow:
                "0 1px 2px rgba(0, 0, 0, 0.0625), 0 8px 12px rgba(0, 0, 0, 0.125)",
            }}
          >
            <Box
              sx={{ position: "absolute", bottom: 2, left: ["8px", "24px"] }}
            >
              <h1 style={{ marginBlockEnd: "0.1em" }}>{x.name}</h1>
              <p style={{ marginBlockStart: "0.3em" }}>
                {Math.round((x.votes / voters) * 100)}% | {x.votes} Votes
              </p>
            </Box>
          </Box>
        ))}
      </Grid>
      <Heading as="h3" my={3}>
        Grade-by-grade Breakdown
      </Heading>
      <details>
        <summary>Grade 6</summary>
        <ul>
          {candidates.vice.map((x) => (
            <li>
              {x.votes_6} votes for {x.name}
            </li>
          ))}
        </ul>
      </details>
      <details>
        <summary>Grade 7</summary>
        <ul>
          {candidates.vice.map((x) => (
            <li>
              {x.votes_7} votes for {x.name}
            </li>
          ))}
        </ul>
      </details>
      <details>
        <summary>Grade 8</summary>
        <ul>
          {candidates.vice.map((x) => (
            <li>
              {x.votes_8} votes for {x.name}
            </li>
          ))}
        </ul>
      </details>
      <details>
        <summary>Grade 9</summary>
        <ul>
          {candidates.vice.map((x) => (
            <li>
              {x.votes_9} votes for {x.name}
            </li>
          ))}
        </ul>
      </details>
      <details>
        <summary>Grade 10</summary>
        <ul>
          {candidates.vice.map((x) => (
            <li>
              {x.votes_10} votes for {x.name}
            </li>
          ))}
        </ul>
      </details>
      <details>
        <summary>Grade 11</summary>
        <ul>
          {candidates.vice.map((x) => (
            <li>
              {x.votes_11} votes for {x.name}
            </li>
          ))}
        </ul>
      </details>
      <details>
        <summary>Grade 12</summary>
        <ul>
          {candidates.vice.map((x) => (
            <li>
              {x.votes_12} votes for {x.name}
            </li>
          ))}
        </ul>
      </details>
      <Heading my={3}>Presidental Race</Heading>
      <Grid
        pb={0}
        columns={[1, 2, 4]}
        sx={{ maxWidth: "1200px", color: "white" }}
      >
        {candidates.president.map((x) => (
          <Box
            sx={{
              background:
                x.votes == presidentWinner
                  ? `linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,60,0,0.7175245098039216) 66%, rgba(0,60,0,1) 90%), url(${x.photo})`
                  : `linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(60,0,0,0.7175245098039216) 66%, rgba(60,0,0,1) 90%), url(${x.photo})`,
              width: "100%",
              backgroundSize: "cover",
              backgroundPosition: "center",
              paddingTop: "100%",
              height: "100px",
              position: "relative",
              boxShadow:
                "0 1px 2px rgba(0, 0, 0, 0.0625), 0 8px 12px rgba(0, 0, 0, 0.125)",
            }}
          >
            <Box
              sx={{ position: "absolute", bottom: 2, left: ["8px", "24px"] }}
            >
              <h1 style={{ marginBlockEnd: "0.1em" }}>{x.name}</h1>
              <p style={{ marginBlockStart: "0.3em" }}>
                {Math.round((x.votes / voters) * 100)}% | {x.votes} Votes
              </p>
            </Box>
          </Box>
        ))}
      </Grid>
      <Heading as="h3" my={3}>
        Grade-by-grade Breakdown
      </Heading>
      <details>
        <summary>Grade 6</summary>
        <ul>
          {candidates.president.map((x) => (
            <li>
              {x.votes_6} votes for {x.name}
            </li>
          ))}
        </ul>
      </details>
      <details>
        <summary>Grade 7</summary>
        <ul>
          {candidates.president.map((x) => (
            <li>
              {x.votes_7} votes for {x.name}
            </li>
          ))}
        </ul>
      </details>
      <details>
        <summary>Grade 8</summary>
        <ul>
          {candidates.president.map((x) => (
            <li>
              {x.votes_8} votes for {x.name}
            </li>
          ))}
        </ul>
      </details>
      <details>
        <summary>Grade 9</summary>
        <ul>
          {candidates.president.map((x) => (
            <li>
              {x.votes_9} votes for {x.name}
            </li>
          ))}
        </ul>
      </details>
      <details>
        <summary>Grade 10</summary>
        <ul>
          {candidates.president.map((x) => (
            <li>
              {x.votes_10} votes for {x.name}
            </li>
          ))}
        </ul>
      </details>
      <details>
        <summary>Grade 11</summary>
        <ul>
          {candidates.president.map((x) => (
            <li>
              {x.votes_11} votes for {x.name}
            </li>
          ))}
        </ul>
      </details>
      <details>
        <summary>Grade 12</summary>
        <ul>
          {candidates.president.map((x) => (
            <li>
              {x.votes_12} votes for {x.name}
            </li>
          ))}
        </ul>
      </details>
    </Box>
  );
}

export async function getServerSideProps({ req, res, query = {} }) {
  if (query["pwd"] == process.env.RESULTS_PW) {
    let candidates = rawCandidates;
    console.log(candidates);
    candidates.vice = candidates.vice.map((x) => ({
      ...x,
      votes: 0,
      votes_6: 0,
      votes_7: 0,
      votes_8: 0,
      votes_9: 0,
      votes_10: 0,
      votes_11: 0,
      votes_12: 0,
    }));
    candidates.president = candidates.president.map((x) => ({
      ...x,
      votes: 0,
      votes_6: 0,
      votes_7: 0,
      votes_8: 0,
      votes_9: 0,
      votes_10: 0,
      votes_11: 0,
      votes_12: 0,
    }));
    let powerfulSupabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL,
      process.env.SUPABASE_SECRET_KEY
    );

    const { data, error } = await powerfulSupabase.from("users").select(
      `
      email,
      vice,
      president
    `
    );

    data.map((x) => {
      x.vice = x.vice - 1;
      x.president = x.president - 1;
      if (typeof candidates.vice[x.vice] != "undefined") {
        if (typeof candidates.vice[x.vice].votes != "undefined") {
          candidates.vice[x.vice].votes += 1;
        } else {
          candidates.vice[x.vice].votes = 1;
        }

        if (typeof candidates.president[x.president].votes != "undefined") {
          candidates.president[x.president].votes += 1;
        } else {
          candidates.president[x.president].votes = 1;
        }
        if (x.email.includes(21)) {
          candidates.vice[x.vice].votes_12 += 1;
        }
        if (x.email.includes(22)) {
          candidates.vice[x.vice].votes_11 += 1;
          candidates.president[x.president].votes_11 += 1;
        }
        if (x.email.includes(23)) {
          candidates.vice[x.vice].votes_10 += 1;
          candidates.president[x.president].votes_10 += 1;
        }
        if (x.email.includes(24)) {
          candidates.vice[x.vice].votes_9 += 1;
          candidates.president[x.president].votes_9 += 1;
        }
        if (x.email.includes(25)) {
          candidates.vice[x.vice].votes_8 += 1;
          candidates.president[x.president].votes_8 += 1;
        }
        if (x.email.includes(26)) {
          candidates.vice[x.vice].votes_7 += 1;
          candidates.president[x.president].votes_7 += 1;
        }
        if (x.email.includes(27)) {
          candidates.vice[x.vice].votes_6 += 1;
          candidates.president[x.president].votes_6 += 1;
        }
      }
    });
    return {
      props: {
        candidates,
        voters: data.length,
        viceWinner: Math.max.apply(
          Math,
          candidates.vice.map(function (o) {
            return o.votes;
          })
        ),
        presidentWinner: Math.max.apply(
          Math,
          candidates.president.map(function (o) {
            return o.votes;
          })
        ),
      },
    };
  } else {
    return { props: { notAuthed: true } };
  }
}
