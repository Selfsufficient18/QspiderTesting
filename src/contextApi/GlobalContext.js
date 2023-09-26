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

  let [scClicked, setSclciked] = useState(false);

  let [getSc, setGetsc] = useState("How to enter data into Text field ?");
  let handleGetsc = data => {
    setGetsc(data);
    setSclciked(!scClicked);
  };

  //? DropDown

  let [scClickedForDrop, setSclcikedDrop] = useState(false);

  let [getScDrop, setGetscDrop] = useState(
    "How to select the value from the single select dropdown ?"
  );
  let handleGetscDrop = data => {
    setGetscDrop(data);
    setSclcikedDrop(!scClickedForDrop);
  };

  //?---------------

  //? Radio button

  let [RClickedForDrop, setRclcikedDrop] = useState(false);

  let [RgetScDrop, setRGetscDrop] = useState("How to select Radio Button ?");
  let handleGetRDrop = data => {
    setRGetscDrop(data);
    setRclcikedDrop(!RClickedForDrop);
  };

  //?---------------

  //? checkbox

  let [CBClickedForDrop, setCBclcikedDrop] = useState(false);

  let [CBgetScDrop, setCBGetscDrop] = useState(
    "How to select Checkbox Button ?"
  );
  let handleCBetRDrop = data => {
    setCBGetscDrop(data);
    setCBclcikedDrop(!CBClickedForDrop);
  };

  //?---------------

  //? Table

  let [TClickedForDrop, setTclcikedDrop] = useState(false);

  let [TgetScDrop, setTGetscDrop] = useState("How to select a value from cell ?");
  let handleTetRDrop = data => {
    setTGetscDrop(data);
    setTclcikedDrop(!TClickedForDrop);
  };

  //?---------------

  let [select, setSelect] = useState(false);
  let [searchWithSelect, setSearchWithSelect] = useState(false);
  let [selectDisable, setSelectDisable] = useState(false);

  let handleSelect = () => {
    setSelect(!select);
  };

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
        getSc,
        handleGetsc,
        scClicked,

        select,
        handleSelect,
        searchWithSelect,
        setSearchWithSelect,
        selectDisable,
        setSelectDisable,

        scClickedForDrop,
        setSclcikedDrop,
        getScDrop,
        setGetscDrop,
        handleGetscDrop,

        RClickedForDrop,
        setRclcikedDrop,
        RgetScDrop,
        setRGetscDrop,
        handleGetRDrop,

        CBClickedForDrop,
        setCBclcikedDrop,
        CBgetScDrop,
        setCBGetscDrop,
        handleCBetRDrop,

        TClickedForDrop,
        setTclcikedDrop,
        TgetScDrop,
        setTGetscDrop,
        handleTetRDrop,
      }}
    >
      {children}
    </ContextProvider.Provider>
  );
};

export default GlobalContext;
