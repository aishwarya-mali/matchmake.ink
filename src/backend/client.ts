import { createClient } from "@supabase/supabase-js";

// having erros here? Make sure you've filled out your .env with the VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY. See README.md for more info.

const url = import.meta.env.VITE_SUPABASE_URL;
const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (url === undefined || anonKey === undefined) {
  throw new Error(
    "Supabase URL or Anon Key is undefined. Please fill out env.json with them. If you do not have these, Please contact FireSquid#8882 on discord."
  );
}

export const databaseClient = createClient(url, anonKey);
