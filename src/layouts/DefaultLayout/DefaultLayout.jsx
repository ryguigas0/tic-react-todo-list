import { Outlet } from "react-router-dom";

import { Header, Content, Footer } from "../../components";

export function DefaultLayout() {
  return (
    <>
      <Header />
      <Content>
        <Outlet />
      </Content>
      <Footer creatorName={"Guilherme"} />
    </>
  );
}
