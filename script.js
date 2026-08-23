const SUPABASE_URL = "https://yqjlmguyfisahguwyrjf.supabase.co";
const SUPABASE_KEY = "sb_publishable_RDw7AdGwEQWrvL11cAdccw_55QYtxiQ";

const supabaseClient = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_KEY
);

const googleBtn = document.querySelector(".google-btn");

googleBtn.addEventListener("click", async () => {
  const { error } = await supabaseClient.auth.signInWithOAuth({
    provider: "google",
  });

  if (error) {
    console.error(error);
    alert("Login gagal: " + error.message);
  }
});