import Login from "@/login/components/login";
import {redirect} from "next/navigation";
import {getSession} from "@/lib/signIn";

export default async function LoginPage() {
  const session = await getSession();

  if (session.hasAccess) {
    redirect('/')
  }

  return <Login />;
}