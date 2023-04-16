import Head from "next/head";
import { ReactNode } from "react";
import SessionBar from "@/components/auth/SessionBar";

type MainLayoutProps = {
  children: ReactNode;
  withSessionBar?: boolean;
}

const MainLayout = ({ children, withSessionBar=false }: MainLayoutProps) => {
  return (
    <>
      <Head>
        <title>Holyday</title>
        <meta name="description" content="" />
      </Head>
      { withSessionBar && <SessionBar />}
      { children }
    </>
  );
};

export default MainLayout;

