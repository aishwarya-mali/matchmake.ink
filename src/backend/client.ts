import { createClient } from "@supabase/supabase-js";
import env from "../../env.json";

console.log(env);

const url = env.SUPABASE_URL;
const anonKey = env.SUPABASE_ANON_KEY;

export const databaseClient = createClient(url, anonKey);
