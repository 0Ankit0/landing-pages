import React from "react";

type childrenType = {
  children: React.ReactNode;
};

function Layout({ children }: childrenType) {
  return <>{children}</>;
}

export default Layout;
