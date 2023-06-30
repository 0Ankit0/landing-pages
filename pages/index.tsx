import Layout from "./Layout";
import Link from "next/link";
import Navbar from "./Components/Navbar";

export default function Home() {
  const list = [
    { name: "Home", link: "/" },
    { name: "ECommerce", link: "/ECommerce" },
    { name: "Login form", link: "/Login-form" },
    { name: "Google-Signin", link: "/GoogleSignin" },
    { name: "Dashboard", link: "/Dashboard" },
  ];
  return (
    <Layout>
      <Navbar list={list} />

      <div className="h-screen flex place-items-center justify-center">
        <h1>Welcome Home</h1>
      </div>
    </Layout>
  );
}
