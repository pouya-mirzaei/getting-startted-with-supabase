import { Database } from '@/lib/types/database.types';
import { createClient } from '@supabase/supabase-js';

const supabase_url = 'https://ttqwrlbndmkkfigzuqsh.supabase.co';
const supabase_key =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR0cXdybGJuZG1ra2ZpZ3p1cXNoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQ2MDk1NjQsImV4cCI6MjA0MDE4NTU2NH0.xCrzjIMpZBfzX2dKd_QoXatyd_kuMTZBNHqevYQMRQc';

const supabase = createClient<Database>(supabase_url, supabase_key);
export default supabase;
