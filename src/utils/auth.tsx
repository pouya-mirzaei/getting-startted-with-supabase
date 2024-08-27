import supabase from '@/configs/supabase';

const isUserLoggedIn = async () => {
  const { data, error } = await supabase.auth.getUser();
  if (data?.user) return true;
  return false;
};

export { isUserLoggedIn };
