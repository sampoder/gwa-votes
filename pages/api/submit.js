import { supabase } from "../../utils/initSupabase";
import { createClient } from "@supabase/supabase-js";

const submit = async (req, res) => {
  const token = req.headers.token;

  let { data: user, error: error1 } = await supabase.auth.api.getUser(token);

  if (error1) return res.status(401).json({ error: error.message });

  let powerfulSupabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.SUPABASE_SECRET_KEY
  );

  let { data, error } = await powerfulSupabase
  .from('users')
  .update(req.body)
  .match({ id: user.id })
  if (error) return res.status(401).json({ error: error.message });
  return res.status(200).json(data);
};

export default submit;
