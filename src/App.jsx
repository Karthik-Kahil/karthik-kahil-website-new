import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import AppLayout from "./AppLayout";
import GlobalStyles from "./styles/GlobalStyles";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <div>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" element={<Homepage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
