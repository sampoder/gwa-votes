import { supabase } from "../../utils/initSupabase";
import { createClient } from "@supabase/supabase-js";

// Example of how to verify and get user data server-side.
const getUser = async (req, res) => {
  const token = req.headers.token;
  let { data: user, error } = await supabase.auth.api.getUser(token);

  if (error) return res.status(401).json({ error: error.message });
  let powerfulSupabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.SUPABASE_SECRET_KEY
  );
  const { data, error: error1 } = await powerfulSupabase
    .from("users")
    .select(
      `
  vice,
  president
`
    )
    .eq("id", user.id);

  let finalUser = { user, votes: data };

  // console.log(finalUser)

  return res.status(200).json(finalUser);
};

export default getUser;
