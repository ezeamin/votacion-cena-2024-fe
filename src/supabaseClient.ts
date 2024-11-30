import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
console.log("🥤 ~ supabaseUrl:", supabaseUrl)
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY
console.log("🥤🥤 ~ supabaseKey:", supabaseKey)

export const supabase = createClient(supabaseUrl, supabaseKey);
