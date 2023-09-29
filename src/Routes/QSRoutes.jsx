import React from "react";
import { Link, Route, Routes, createBrowserRouter } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import Text from "./../Pages/WebElements/Text";
import Button from "./../Pages/WebElements/Button";
import LoginPage from "../Pages/WebElements/LoginPage";
import Signup from "../Pages/WebElements/Signup";
import Table from "../Pages/WebElements/Table";
import StaticTable from "../Pages/WebElements/TableElements/StaticTable";
import DynamicTable from "../Pages/WebElements/TableElements/DynamicTable";
import ButtonRightClick from "./../Pages/WebElements/Buttons/ButtonRightClick";
import ButtonDoubleClick from "./../Pages/WebElements/Buttons/ButtonDouble";
import ButtonSubmitClick from "./../Pages/WebElements/Buttons/ButtonSubmitClick";
import ButtonDisabled from "./../Pages/WebElements/Buttons/ButtonDisabled";
import ButtonDefault from "./../Pages/WebElements/Buttons/ButtonDefault";
import ButtonMain from "./../Pages/WebElements/Buttons/ButtonMain";
import RadioButton from "../Pages/WebElements/RadioButton";
import RadioButtons from "../Pages/WebElements/Radio/RadioButtons";
import CheckBox from "../Pages/WebElements/CheckBox";
import Checks from "../Pages/WebElements/Checkbox/Checks";
import LinkMain from "../Pages/WebElements/Link/LinkMain";
import LinkFirst from "../Pages/WebElements/Link/LinkFirst";
import LinkSecond from "../Pages/WebElements/Link/LinkSecond";
import Dropdown from "../Pages/WebElements/Dropdown";
import DropdownForm from "../Pages/WebElements/DropdownForm";
import LinkNewTab from "./../Pages/WebElements/Link/LinkNewTab";
import AddDynamic from "../Pages/WebElements/TableElements/AddDynamic";
import UpdatedDynamic from "../Pages/WebElements/TableElements/UpdatedDynamic";

// let router = createBrowserRouter([
//   {
//     element: <HomePage />,
//     path: "/",
//     children: [
//       {
//         element: <Text />,
//         path: "/",
//         children: [
//           {
//             index: true,
//             element: <Signup />,
//           },
//           {
//             path: "/login",
//             element: <LoginPage />,
//           },
//           {
//             path: "/signup",
//             element: <Signup />,
//           },
//         ],
//       },
//       {
//         path: "/button",
//         element: <ButtonMain />,
//         children: [
//           {
//             index: true,
//             element: <ButtonDefault />,
//           },
//           {
//             path: "/buttonRightClick",
//             element: <ButtonRightClick />,
//           },
//           {
//             path: "/buttonDoubleClick",
//             element: <ButtonDoubleClick />,
//           },
//           {
//             path: "/buttonSubmitClick",
//             element: <ButtonSubmitClick />,
//           },
//           {
//             path: "/buttonDisabled",
//             element:<ButtonDisabled />
//           },
//         ],
//       },
//       {
//         path: "/table",
//         children: <Table />,
//         children: [
//           {
//             index: true,
//             element:<StaticTable />
//           },
//           {
//             path: "/table/static-table",
//             element:<StaticTable />,
//           },
//           {
//             path: "/table/dyamic-table",
//             element:<DynamicTable />
//           }
//         ]
//       },
//       {
//         path: "/radio",
//         element: <RadioButton />,
//         children: [
//           {
//             index: true,
//             element:<RadioButtons />
//           }
//         ]
//       },
//       {
//         path: "/checkbox",
//         element: <CheckBox />,
//         children: [
//           {
//             index: true,
//             element:<Checks />
//           }
//         ]
//       },
//       {
//         path: "/link",
//         element: <LinkMain />,
//         children: [
//           {
//             index: true,
//             element:<LinkFirst />
//           },
//           {
//             path: "/link/second-link",
//             element:<LinkSecond />
//           }
//         ]
//       }
//     ],
//   },
// ]);

const QSRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route path="/text" element={<Text />}>
            <Route index element={<Signup />}></Route>
            <Route path="/text/login" element={<LoginPage />}></Route>
            <Route path="/text/signup" element={<Signup />}></Route>
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

            <Route
              path="/table/dynamic-table"
              element={<DynamicTable />}
            ></Route>
            <Route path="/table/add" element={<AddDynamic />}></Route>
            <Route
              path="/table/update-table"
              element={<UpdatedDynamic />}
            ></Route>
          </Route>

          <Route path="/radio" element={<RadioButton />}>
            <Route index element={<RadioButtons />}></Route>
          </Route>

          <Route path="/checkbox" element={<CheckBox />}>
            <Route index element={<Checks />}></Route>
          </Route>

          <Route path="/link" element={<LinkMain />}>
            <Route index element={<LinkFirst />}></Route>
            <Route path="/link/second-link" element={<LinkSecond />}></Route>
            <Route path="/link/linkNew" element={<LinkNewTab />}></Route>
          </Route>

          <Route path="/dropdown" element={<Dropdown />}>
            <Route index element={<DropdownForm />}></Route>
          </Route>
        </Route>
      </Routes>
    </div>
  );
};

export default QSRoutes;
