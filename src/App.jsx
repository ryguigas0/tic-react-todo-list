import "./App.css";
import { Content, Header, Footer } from "./components";
import { HomePage } from "./pages";

export function App() {
  return (
    <>
      <Header />
      <Content>
        <HomePage />
      </Content>
      <Footer creatorName={"Guilherme"} />
    </>
  );
}
