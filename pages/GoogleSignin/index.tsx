import { signIn, signOut, useSession } from "next-auth/react";
import styles from "<Next-project>/styles/googlesignin.module.css";
import Layout from "../Layout";
import Navbar from "../Components/Navbar";
import Link from "next/link";

function GoogleSignin() {
  const { data: session, status } = useSession();
  const loading = status === "loading";
  const arr = [{ name: "Home", link: "./" }];
  return (
    <Layout>
      <Navbar list={arr} />

      <header>
        <noscript>
          <style>{`.nojs-show { opacity: 1; top: 0; }`}</style>
        </noscript>
        <div className={styles.signedInStatus}>
          <p
            className={`nojs-show ${
              !session && loading ? styles.loading : styles.loaded
            }`}
          >
            {!session && (
              <>
                <span className={styles.notSignedInText}>
                  You are not signed in
                </span>
                <a
                  href={`/api/auth/signin`}
                  className={styles.buttonPrimary}
                  onClick={(e) => {
                    e.preventDefault();
                    signIn("google");
                  }}
                >
                  Sign in
                </a>
              </>
            )}
            {session?.user && (
              <>
                {session.user.image && (
                  <span
                    style={{ backgroundImage: `url('${session.user.image}')` }}
                    className={styles.avatar}
                  />
                )}
                <span className={styles.signedInText}>
                  <small>Signed in as</small>
                  <br />
                  <strong>{session.user.email ?? session.user.name}</strong>
                </span>
                <a
                  href={`/api/auth/signout`}
                  className={styles.buttonPrimary}
                  onClick={(e) => {
                    e.preventDefault();
                    signOut();
                  }}
                >
                  Sign out
                </a>
              </>
            )}
          </p>
        </div>
      </header>
      <div className="container m-8">
        {session && (
          <div className="container">
            Name: {session?.user?.name}
            <br></br>
            Email: {session?.user?.email}
          </div>
        )}
      </div>
    </Layout>
  );
}

export default GoogleSignin;
