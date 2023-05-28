import { createClient } from "@supabase/supabase-js";

const url = import.meta.env.SUPABASE_URL;
const anonKey = import.meta.env.SUPABASE_ANON_KEY;

export const databaseClient = createClient(url, anonKey);
