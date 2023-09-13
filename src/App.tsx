import "normalize.css";
import "./App.css";
import { Footer } from "./components/footer/footer";
import { Header } from "./components/header/header";
import { CardCollection } from "./components/card-collection/card-collection";

function App() {
  return (
    <>
      <Header />
      <main>
        <CardCollection />
      </main>
      <Footer />
    </>
  );
}

export default App;
