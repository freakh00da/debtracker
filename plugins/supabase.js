import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://zwdkupcwigmhvnhvvnlg.supabase.co";
const supabaseKey = process.env.apiKey;

export const supabase = createClient(supabaseUrl, supabaseKey);
