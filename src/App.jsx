import "./App.css";
import { Content, Header, Footer } from "./components";

export function App() {
  return (
    <>
      <Header />
      <Content>
        <h1>Title</h1>
        <p>Lorem ipsum dolor sit amet</p>
      </Content>
      <Footer creatorName={"Guilherme"} />
    </>
  );
}
