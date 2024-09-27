import { RecoilRoot } from "recoil";
import AppRoutes from "./components/AppRoutes";
import Header from "./components/Header";

function App() {
  return (
    <RecoilRoot>
      <Header />
      <AppRoutes />
    </RecoilRoot>
  );
}

export default App;
