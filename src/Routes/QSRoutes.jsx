import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import Text from "./../Pages/WebElements/Text";
import Button from "./../Pages/WebElements/Button";
import LoginPage from "../Pages/WebElements/LoginPage";
import Signup from "../Pages/WebElements/Signup";
import Table from "../Pages/WebElements/Table";
import StaticTable from "../Pages/WebElements/TableElements/StaticTable";
import DynamicTable from "../Pages/WebElements/TableElements/DynamicTable";
import ButtonRightClick from './../Pages/WebElements/Buttons/ButtonRightClick';
import ButtonDoubleClick from './../Pages/WebElements/Buttons/ButtonDouble';
import ButtonSubmitClick from './../Pages/WebElements/Buttons/ButtonSubmitClick';
import ButtonDisabled from './../Pages/WebElements/Buttons/ButtonDisabled';
import ButtonDefault from './../Pages/WebElements/Buttons/ButtonDefault';
import ButtonMain from './../Pages/WebElements/Buttons/ButtonMain';
import RadioButton from "../Pages/WebElements/RadioButton";
import RadioButtons from "../Pages/WebElements/Radio/RadioButtons";
import CheckBox from "../Pages/WebElements/CheckBox";
import Checks from "../Pages/WebElements/Checkbox/Checks";

const QSRoutes = () => {
  
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route path="/" element={<Text />}>
            <Route index element={<Signup />}></Route>
            <Route path="/login" element={<LoginPage />}></Route>
            <Route path="/signup" element={<Signup />}></Route>
          </Route>
          <Route path="/button" element={<ButtonMain />}>
            <Route index element={<ButtonDefault />} />
            <Route path="buttonRightClick" element={<ButtonRightClick />} />
            <Route path="buttonDoubleClick" element={<ButtonDoubleClick />} />
            <Route path="buttonSubmitClick" element={<ButtonSubmitClick />} />
            <Route path="buttonDisabled" element={<ButtonDisabled />} />
          </Route>
          <Route path="/table" element={<Table />}>
            <Route index element={<StaticTable />}></Route>
            <Route path="/table/static-table" element={<StaticTable />}></Route>
            <Route
              path="/table/dynamic-table"
              element={<DynamicTable />}
            ></Route>
          </Route>
          <Route path="/radio" element={<RadioButton />}>
            <Route index element={<RadioButtons />}></Route>
          </Route>
          <Route path="/checkbox" element={<CheckBox />}>
            <Route index element={<Checks />}></Route>
          </Route>
        </Route>
      </Routes>
    </div>
  );
};

export default QSRoutes;
