import { createClient } from "@supabase/supabase-js";

// if you're wondering why we're using env.json instead of .env, it's because I'm a moron and couldn't figure out how to get .env to work with Vite
// if you know how to fix this, feel free to do so
import env from "../../env.json";

const url = env.SUPABASE_URL;
const anonKey = env.SUPABASE_ANON_KEY;

if (url === undefined || anonKey === undefined) {
  throw new Error(
    "Supabase URL or Anon Key is undefined. Please fill out env.json with them. If you do not have these, Please contact FireSquid#8882 on discord."
  );
}

export const databaseClient = createClient(url, anonKey);
