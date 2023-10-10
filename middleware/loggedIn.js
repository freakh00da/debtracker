export default async function ({ redirect }) {
  const accessToken = localStorage.getItem("access_token");

  if (accessToken !== null) {
    return redirect("/dashboard");
  }
}
