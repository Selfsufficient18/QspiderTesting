import { indexOf } from "lodash";
import { createContext, useEffect, useState } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";

export let ContextProvider = createContext();

const GlobalContext = ({ children }) => {
  let [place, setPlace] = useState(true);
  let [notplace, setnotPlace] = useState(false);

  let [tarea, setTarea] = useState(true);
  let handlePlace = () => {
    setPlace(true);
    setnotPlace(false);
    setTool(false);
    setnottool(false);
     setTarea(true);
  };
  let handleNotPlace = () => {
    setnotPlace(true);
    setPlace(false);
    setTool(false);
    setnottool(false);
    setTarea(true);
  };

  let [tool, setTool] = useState(false);
  let [nottool, setnottool] = useState(false);

  let handleTool = () => {
    setTool(true);
    setnottool(false);
    setPlace(false);
    setnotPlace(false);
    setTarea(true);
  };
  let handleNotTool = () => {
    setnottool(true);
    setTool(false);
    setPlace(false);
    setnotPlace(false);
    setTarea(true);
  };

  let handleArea = () => {
    setTarea(false);
    setnotPlace(false);
    setPlace(false);
    setTool(false);
    setnottool(false);
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
        name: "Levis Mens Regular Fit Tee",
        website: "https://www.google.com",
        address: "demo address",
        _id: "1",
        averageCost: "896",
        ratings: "4.25 Star",
       quantity: 2,
        discount: "23%",
      },
      {
        name: "SAMSUNG Galaxy Z Flip4",
        website: "https://www.google.com",
        address: "demo address",
        _id: "2",
        ratings: "4.25 Star",
        averageCost: "897",
       quantity: 2,
        discount: "30%",
      },
      {
        name: "APPLEIPhone 14 Pro",
        website: "https://www.google.com",
        address: "demo address",
        _id: "3",
        averageCost: "898",
        ratings: "4.25 Star",
       quantity: 2,
        discount: "23%",
      },
      {
        name: "HP Envy X360 Ryxen 5 Hexa Core 5600U",
        website: "https://www.google.com",
        address: "demo address",
        _id: "4",
        averageCost: "899",
        ratings: "4.25 Star",
       quantity: 2,
        discount: "30%",
      },
    ],
  });



  let handleAdd = newdata => {
    bootcamps.data.push(newdata);
  }

  let handleEdit = (id) => {
    let deleteId = null;
    bootcamps.data.map(data => {
      if (data._id === id) {
        deleteId = bootcamps.data.indexOf(data);
      }
    })
    bootcamps.data.splice(deleteId, 1);
  };

  let [beforeData, setBeforeData] = useState();
  let handleUpdate = (id, data) => { 
    let updateID = null;
    setBeforeData(data);
    bootcamps.data.map(data => {
      if (data._id === id) {
        updateID = bootcamps.data.indexOf(data);
      }
    });
    bootcamps.data.splice(updateID, 1);
  };
 


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

  //? For table

    let [modal, setModal] = useState(false);
    let handleModal = () => {
      setModal(true);
    };

  return (
    <ContextProvider.Provider
      value={{
        modal,
        handleModal,
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
        setBootcamps,
        beforeData,
        handleAdd,
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
