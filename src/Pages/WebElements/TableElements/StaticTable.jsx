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
          Boomcaps
        </NavLink>
        <NavLink
          to="/table/dynamic-table"
          className={({ isActive }) =>
            isActive
              ? "border-b-[3px] px-1 py-2 border-orange-500 transition-all duration-300 hover:bg-orange-100"
              : "px-1 py-2 transition-all duration-300 hover:bg-orange-100"
          }
        >
          Readings
        </NavLink>
      </article>
      <p className="text-[22px] text-orange-600 font-bold py-2 ">
        Bootcamps Table
      </p>
      <div className="relative shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 ">
          <thead className="text-xs text-gray-700 uppercase bg-orange-200">
            <tr>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Website
              </th>
              <th scope="col" className="px-6 py-3">
                Address
              </th>
              <th scope="col" className="px-6 py-3">
                Average Cost
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
                  <td className="px-6 py-4">{data.website}</td>
                  <td className="px-6 py-4">{data.address}</td>
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
