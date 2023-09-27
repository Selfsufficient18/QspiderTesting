import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import QSRoutes from "./Routes/QSRoutes";
import GlobalContext from "./contextApi/GlobalContext";
import AddTableModal from "./Components/Modals/AddTableModal";

const App = () => {
  let [isOpen, setIsOpen] = useState(false);
  return (
    <GlobalContext>
      <div>
        <BrowserRouter>
          <QSRoutes />
        </BrowserRouter>
      </div>
    </GlobalContext>
  );
};

export default App;