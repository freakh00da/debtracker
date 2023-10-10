import { supabase } from "~/plugins/supabase";
export default async function ({ redirect }) {
  const { data } = await supabase.auth.getSession();

  const accessToken = localStorage.getItem("access_token");

  if (data.session.access_token !== accessToken) {
    return redirect("/login");
  }
}
