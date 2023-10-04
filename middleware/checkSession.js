export default function ({ store, redirect }) {
  const session = store.state.auth.session;

  if (!session || !session.access_token) {
    return redirect("/login");
  }
}
