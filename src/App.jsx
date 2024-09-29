import { RecoilRoot } from "recoil";
import AppRoutes from "./components/AppRoutes";
import Header from "./components/Header";

function App() {
  return (
    <RecoilRoot>
      <div className='sticky top-0 left-0 w-full mb-3'>
        <Header />
      </div>
      <AppRoutes />
    </RecoilRoot>
  );
}

export default App;
