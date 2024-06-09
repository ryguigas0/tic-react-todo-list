import { Outlet } from "react-router-dom";

import { Header, Content, Footer } from "../../components";

import { useAppContext } from "../../hooks";

export function DefaultLayout() {
  const { creator } = useAppContext();

  return (
    <>
      <Header />
      <Content>
        <Outlet />
      </Content>
      <Footer creatorName={creator} />
    </>
  );
}
