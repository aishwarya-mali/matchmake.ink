import { createClient } from "@supabase/supabase-js";

// if you're wondering why we're using env.json instead of .env, it's because I'm a moron and couldn't figure out how to get .env to work with Vite
// if you know how to fix this, feel free to do so
import env from "../../env.json";

// having errors here? Try filling out env.json. If you have no clue what to do, contact FireSquid#8882 on discord.
// as of 31-05-2023, my env.json looks like:
/* {
  "SUPABASE_URL": "https://zdxeeicdysjerhtalkbi.supabase.co",
  "SUPABASE_ANON_KEY": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpkeGVlaWNkeXNqZXJodGFsa2JpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODUzOTU2NDQsImV4cCI6MjAwMDk3MTY0NH0.GYlVhTcsm9Kr-tqASRGwZUinEo_7np_bTbgh3-GAF0I"
} */
// feel free to just copy and paste that and see if it works
const url = env.SUPABASE_URL;
const anonKey = env.SUPABASE_ANON_KEY;

if (url === undefined || anonKey === undefined) {
  throw new Error(
    "Supabase URL or Anon Key is undefined. Please fill out env.json with them. If you do not have these, Please contact FireSquid#8882 on discord."
  );
}

export const databaseClient = createClient(url, anonKey);
