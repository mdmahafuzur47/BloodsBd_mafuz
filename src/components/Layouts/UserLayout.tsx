import { FC, ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Circle from "../background/circle";

const UserLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div>
      <Circle.Circle1 />
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default UserLayout;
