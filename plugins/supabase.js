import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://zwdkupcwigmhvnhvvnlg.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp3ZGt1cGN3aWdtaHZuaHZ2bmxnIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5NDY4NTUwOCwiZXhwIjoyMDEwMjYxNTA4fQ.e7H4hKzuXT_STOyk0Rd4urDJsgN7bdtZlsjW46GsRKQ";

export const supabase = createClient(supabaseUrl, supabaseKey);
