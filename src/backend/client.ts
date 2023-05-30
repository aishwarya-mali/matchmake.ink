import { createClient } from "@supabase/supabase-js";

// if you're wondering why we're using env.json instead of .env, it's because I'm a moron and couldn't figure out how to get .env to work with Vite
// if you know how to fix this, feel free to do so
import env from "../../env.json";

const url = env.SUPABASE_URL;
const anonKey = env.SUPABASE_ANON_KEY;

export const databaseClient = createClient(url, anonKey);
