import "normalize.css";
import "./App.css";
import { Footer } from "./components/footer/footer";
import { Header } from "./components/header/header";
import { CardCollection } from "./components/card-collection/card-collection";
import { useEffect } from "react";
import { useDispatch, useSelector } from "./services/hooks";
import { getCardsData } from "./services/actions/card";

const App = () => {
  const dispatch = useDispatch();
  const { dataRequest, dataSuccess, dataFailed } = useSelector(
    (state) => state.cards
  );

  useEffect(() => {
    if (!dataRequest && !dataSuccess && !dataFailed) {
      dispatch(getCardsData());
    }
  }, [dataRequest, dataSuccess, dataFailed, dispatch]);
  return (
    <>
      <Header />
      <main>
        <CardCollection />
      </main>
      <Footer />
    </>
  );
};

export default App;
