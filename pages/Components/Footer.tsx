import React from "react";

type childrenType = {
  children: React.ReactNode | string;
};

function Footer({ children }: childrenType) {
  return (
    <footer className="p-4 flex justify-around bg-blue-200">{children}</footer>
  );
}

export default Footer;
