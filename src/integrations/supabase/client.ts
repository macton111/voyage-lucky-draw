// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://qybtyrorisxjadlqbrxm.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF5YnR5cm9yaXN4amFkbHFicnhtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI3MTQ2NTYsImV4cCI6MjA1ODI5MDY1Nn0.M7sLnDywiPWL5KXKoTUmmCBmXP1OhgaXLX7yq70NLIg";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);