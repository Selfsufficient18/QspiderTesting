import React, { useContext, useEffect, useState } from "react";
import { AiFillDelete, AiFillEdit, AiFillStar } from "react-icons/ai";
import { ContextProvider } from "../../../contextApi/GlobalContext";
import _ from "lodash";

const DynamicTable = () => {
  let { bootcamps, handleEdit, handleUpdate } = useContext(ContextProvider);

  const [count, setCount] = useState();

  useEffect(() => {
    //Implementing the setInterval method
    const interval = setInterval(() => {
      setCount(_.random(1));
    }, 1500);

    //Clearing the interval
    return () => clearInterval(interval);
  }, [count]);

  return (
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
            <th scope="col" className="px-6 py-3">
              Reg Count
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
                <td className="px-6 py-4">{data.website}</td>
                <td className="px-6 py-4">{data.address}</td>
                <td className="px-6 py-4">{data.averageCost}</td>
                <td className="px-6 py-4 font-bold text-black">
                  {(() => {
                    return setInterval(() => {
                      return _.random();
                    }, 1000);
                  })()}
                </td>
                <td className="flex items-center px-6 py-4 space-x-3">
                  <a
                    href="#"
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    onClick={() => handleUpdate(data._id, { ...data })}
                  >
                    <AiFillEdit />
                  </a>
                  <a
                    href="#"
                    className="font-medium text-red-600 dark:text-red-500 hover:underline"
                    onClick={() => handleEdit(data._id)}
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
  );
};

export default DynamicTable;
