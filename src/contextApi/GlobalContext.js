import { createContext, useEffect, useState } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";

export let ContextProvider = createContext();


const GlobalContext = ({ children }) => {
  let [place, setPlace] = useState(true);
  let [notplace, setnotPlace] = useState(false);

  let handlePlace = () => {
    setPlace(true);
    setnotPlace(false);
    setTool(false);
    setnottool(false);
  };
  let handleNotPlace = () => {
    setnotPlace(true);
    setPlace(false);
    setTool(false);
    setnottool(false);
  };

  let [tool, setTool] = useState(false);
  let [nottool, setnottool] = useState(false);

  let handleTool = () => {
    setTool(true);
    setnottool(false);
    setPlace(false);
    setnotPlace(false);
  };
  let handleNotTool = () => {
    setnottool(true);
    setTool(false);
    setPlace(false);
    setnotPlace(false);
  };

  let [tarea, setTarea] = useState(true);
  let handleArea = () => {
    setTarea(!tarea);
  };

  let [disabled, setDisabled] = useState(false);
  let handleDisabled = () => {
    setDisabled(!disabled);
    setEnabled(true);
  };

  let [enabled, setEnabled] = useState(true);

  let handleEnabled = () => {
    setEnabled(!enabled);
    setDisabled(false);
  };
    useEffect(handleEnabled, []);


  // For table

  let [bootcamps, setBootcamps] = useState({
    data: [
      {
        name: "Web Development Bootcamp",
        website: "https://www.google.com",
        address: "demo address",
        _id: "1",
        averageCost: "20,000",
      },
      {
        name: "Backend Development Bootcamp",
        website: "https://www.google.com",
        address: "demo address",
        _id: "12",
        averageCost: "20,000",
      },
      {
        name: "Frontend Development Bootcamp",
        website: "https://www.google.com",
        address: "demo address",
        _id: "13",
        averageCost: "20,000",
      },
      {
        name: "Database Development Bootcamp",
        website: "https://www.google.com",
        address: "demo address",
        _id: "14",
        averageCost: "20,000",
      },
    ],
  });

  let handleEdit = () => {};
  let handleUpdate = () => {};

  return (
    <ContextProvider.Provider
      value={{
        place,
        handlePlace,
        notplace,
        handleNotPlace,
        tool,
        handleTool,
        nottool,
        handleNotTool,
        tarea,
        handleArea,
        disabled,
        handleDisabled,
        enabled,
        handleEnabled,
        bootcamps,
        handleEdit,
        handleUpdate,
      }}
    >
      {children}
    </ContextProvider.Provider>
  );
};

export default GlobalContext;
