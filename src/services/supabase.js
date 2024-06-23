import { createClient } from '@supabase/supabase-js'
const supabaseUrl = "https://miehrsutotszbhhjldrb.supabase.co"
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1pZWhyc3V0b3RzemJoaGpsZHJiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTkwODE4MTYsImV4cCI6MjAzNDY1NzgxNn0.CyhOf2TcfFuprM2FwgUI3y-hfC6P_Pfo0MzM-PFzNB8"
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase