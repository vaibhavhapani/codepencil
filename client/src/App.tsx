import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Compiler from "./pages/Compiler";
import NotFound from "./pages/NotFound";
import { ThemeProvider } from "./components/theme-provider";
import { Toaster } from "sonner";

function App() {
  return (
    <>
    <Toaster position="bottom-center" theme="dark"/>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/compiler" element={<Compiler />}></Route>
          <Route path="/compiler/:id" element={<Compiler />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
