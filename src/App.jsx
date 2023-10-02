import React, { useContext, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import QSRoutes from "./Routes/QSRoutes";
import GlobalContext, { ContextProvider } from "./contextApi/GlobalContext";
import AddTableModal from "./Components/Modals/AddTableModal";
import { Toaster } from "react-hot-toast";
const App = () => {
  let [isOpen, setIsOpen] = useState(false);

  return (
    <GlobalContext>
      <div>
        <BrowserRouter>
          <Toaster />
          <QSRoutes />
        </BrowserRouter>
      </div>
    </GlobalContext>
  );
};

export default App;
