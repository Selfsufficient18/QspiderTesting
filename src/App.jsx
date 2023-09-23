// import React from 'react'
// import Textbox from './Components/Textbox'
// import FormComponent from './Components/FormComponent'

// const App = () => {
//   return (
//     <div>
//        <Textbox/>
//        {/* <FormComponent/> */}
//     </div>
//   )
// }

// export default App

import React from "react";
import { BrowserRouter } from "react-router-dom";
import QSRoutes from "./Routes/QSRoutes";
import GlobalContext from "./contextApi/GlobalContext";

const App = () => {
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