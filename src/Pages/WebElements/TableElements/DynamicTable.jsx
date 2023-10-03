import React, { useContext, useEffect, useState } from "react";
import { AiFillDelete, AiFillEdit, AiFillStar } from "react-icons/ai";
import { ContextProvider } from "../../../contextApi/GlobalContext";
import _ from "lodash";
import { NavLink } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom/dist";

const DynamicTable = () => {
  let { bootcamps, handleEdit, handleUpdate, handleModal } =
    useContext(ContextProvider);



  const [count, setCount] = useState();

  useEffect(() => {
    //Implementing the setInterval method
    const interval = setInterval(() => {
      setCount(_.random(9));
    }, 1500);

    //Clearing the interval
    
  }, [count]);

  let navigate = useNavigate();

  return (
    <div className="relative top-4">
      <article className="font-semibold flex gap-1">
        <NavLink
          to="/table"
          className={({ isActive }) =>
            isActive
              ? "border-b-[3px] px-1 py-2 border-orange-500 transition-all duration-300 hover:bg-orange-100"
              : "px-1 py-2 transition-all duration-300 hover:bg-orange-100"
          }
          end
        >
          Purchased Product
        </NavLink>
        <NavLink
          to="/table/dynamic-table"
          className={({ isActive }) =>
            isActive
              ? "border-b-[3px] px-1 py-2 border-orange-500 transition-all duration-300 hover:bg-orange-100"
              : "px-1 py-2 transition-all duration-300 hover:bg-orange-100"
          }
        >
          Favourite Product
        </NavLink>
      </article>
      <article className="flex w-full justify-between items-center">
        <p className="text-[22px] text-orange-600 font-bold py-2 ">
          Your Favourite List - 04
        </p>
        <Link
          to="/table/addToTable"
          className="bg-orange-600 rounded-md text-white font-bold p-2"
          onClick={() => {
            let modal1 = document.getElementById("modal");
            modal1.setAttribute(
              "class",
              "absolute top-0 left-0 z-[100000000] w-full h-[100vh]"
            );
            modal1.style.background = "rgba(0, 0, 0, 0.41)";
          }}
        >
          Add To Table
        </Link>
      </article>
      <div className="relative shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 ">
          <thead className="text-xs text-gray-700 uppercase bg-orange-200">
            <tr>
              <th scope="col" className="px-6 py-3">
                Product name
              </th>
              <th scope="col" className="px-6 py-3">
                Ratings
              </th>
              <th scope="col" className="px-6 py-3">
                Qunatity
              </th>
              <th scope="col" className="px-6 py-3">
                Discount
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {bootcamps?.data?.map(data => {
              return (
                <tr className="bg-white border-b  hover:bg-orange-100">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                  >
                    {data.name}
                  </th>
                  <td className="px-6 py-4">{data.ratings}</td>
                  <td className="px-6 py-4">{data.quantity}</td>
                  <td className="px-6 py-4">
                    {(() => {
                      return Math.floor(Math.random(3000) * 30);
                    })()}
                    %
                  </td>
                  <td className="px-6 py-4 font-bold text-black">
                    {(() => {
                      return Math.floor(Math.random(3000) * 800);
                    })()}
                  </td>
                  <td className="flex items-center px-6 py-4 space-x-3">
                    <a
                      href="#"
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      onClick={() => {
                        let modal1 = document.getElementById("updateModal");
                        modal1.setAttribute(
                          "class",
                          "absolute top-0 left-0 z-[100000000] w-full h-[100vh]"
                        );
                        modal1.style.background = "rgba(0, 0, 0, 0.41)";
                        navigate("/table/update-table");
                        return handleUpdate(data._id, data);
                      }}
                    >
                      <AiFillEdit />
                    </a>
                    <a
                      href="#"
                      className="font-medium text-red-600 dark:text-red-500 hover:underline"
                      onClick={() => {
                        return handleEdit(data._id);
                      }}
                    >
                      <AiFillDelete />
                    </a>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DynamicTable;
