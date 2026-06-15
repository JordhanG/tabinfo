import { useState } from "react";
import "./App.css";
import { Footer } from "./components/Footer";
import { Header, type HeaderPage } from "./components/Header";
import { InitialPage } from "./pages/initial";
import { InstitutionalPage } from "./pages/institutional";
import { ServicesPage } from "./pages/services";

function App() {
  const [page, setPage] = useState<HeaderPage>("initial");
  return (
    <main className="min-h-screen overflow-x-hidden bg-white relative">
      <Header
        page={page}
        setPage={(selectedPage) => {
          setPage(selectedPage);
        }}
      />
      {page === "initial" && <InitialPage />}
      {page === "institutional" && <InstitutionalPage />}
      {page === "services" && <ServicesPage />}
      {page === "clients" && <div className="bg-green-500 h-50 w-50"></div>}
      <Footer />
    </main>
  );
}

export default App;
