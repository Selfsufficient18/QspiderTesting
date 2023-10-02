import React, { useContext, useState } from "react";
import { AiFillDelete, AiFillEdit, AiFillStar } from "react-icons/ai";
import { ContextProvider } from "../../../contextApi/GlobalContext";
import { NavLink } from "react-router-dom";

const StaticTable = () => {

    let { bootcamps } = useContext(ContextProvider);
 
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
      <p className="text-[22px] text-red-500 font-bold py-2 ">
        Your Favourite List - 04
      </p>
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
                  <td className="px-6 py-4">{data.discount}</td>
                  <td className="px-6 py-4">{data.averageCost}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StaticTable;
