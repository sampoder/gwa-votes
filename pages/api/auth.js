/**
 * NOTE: this file is only needed if you're doing SSR (getServerSideProps)!
 */
import { supabase } from '../../utils/initSupabase'

export default function handler(req, res) {
  console.log('hi')
  supabase.auth.api.setAuthCookie(req, res)
}
