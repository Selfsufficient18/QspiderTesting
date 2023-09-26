import React, { useContext, useState } from "react";

import Select from "react-select";
import makeAnimated from "react-select/animated";

import Flag from "react-flags-select";
import { ContextProvider } from './../../contextApi/GlobalContext';

const animatedComponents = makeAnimated();

const DropdownForm = () => {
  let [dropData, setDropData] = useState({
    name: "",
    email: "",
  });

  let { select, selectDisable, searchWithSelect, getScDrop } =
    useContext(ContextProvider);

  const [selectedCity, setSelectedCity] = useState([]);

  const handleSelectCityChange = selectedOptions => {
    setSelectedCity(selectedOptions);
  };

  const [selectedCountry, setSelectedCountry] = useState([]);

  const handleSelectCountryChange = selectedOptions => {
    setSelectedCountry(selectedOptions);
  };

  const [selectedGender, setSelectedGender] = useState([]);

  const handleSelectGenderChange = selectedOptions => {
    setSelectedGender(selectedOptions);
  };

  const [selectedPhone, setSelectedPhone] = useState([]);

  const phoneOptions = [
    {
      value: "US",
      label: (
        <>
          <Flag name="US" /> United States (+1)
        </>
      ),
    },
    {
      value: "CA",
      label: (
        <>
          <Flag name="CA" /> Canada (+1)
        </>
      ),
    },
  ];

  const handlePhoneChange = selectedOption => {
    setSelectedPhone(selectedOption);
  };

  let { name, email } = dropData;

  let handleChange = e => {
    console.log(e.target);
    let { name, value } = e.target;
    setDropData({ ...dropData, [name]: value });
  };

  let handleSubmit = e => {
    e.preventDefault();
    console.log(selectedCity, selectedCountry);
  };

  const genderOptions = [
    { label: "Male", value: "Male" },
    { label: "Female", value: "Female" },
    { label: "Others", value: "Others" },
  ];

  const countryOptions = [
    { label: "India", value: "India" },
    { label: "USA", value: "USA" },
    { label: "Canada", value: "Canada" },
    { label: "UK", value: "UK" },
  ];

  const cityOptions = [
    { label: "New Delhi", value: "New Delhi" },
    { label: "Bangalore", value: "Bangalore" },
    { label: "Mumbai", value: "Mumbai" },
    { label: "Chennai", value: "Chennai" },
  ];

  return (
    <>
      <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
        <section className="absolute top-[-10px] left-[10%] bg-orange-500 w-[80%] p-[8px] px-10 rounded-3xl text-white font-bold capitalize text-[14px] flex justify-center items-center">
          <p>{getScDrop}</p>
        </section>
        <form onSubmit={handleSubmit}>
          <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
            User Information
          </h6>
          <div className="flex flex-wrap">
            <div className="w-full lg:w-6/12 px-4">
              <div className="relative w-full mb-3">
                <label
                  className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                  htmlfor="grid-password"
                >
                  Name
                </label>
                <input
                  type="text"
                  className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  placeholder="enter your name"
                  name="name"
                  value={name}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="w-full lg:w-6/12 px-4">
              <div className="relative w-full mb-3">
                <label
                  className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                  htmlfor="grid-password"
                >
                  Email
                </label>
                <input
                  type="email"
                  className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  placeholder="enter your email"
                  name="email"
                  value={email}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="w-full lg:w-6/12 px-4">
              <div className="relative w-full mb-3">
                <label
                  className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                  htmlfor="grid-password"
                >
                  Phone Number
                </label>
                <Select
                  className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  value={selectedPhone}
                  onChange={handlePhoneChange}
                  closeMenuOnSelect={false}
                  components={animatedComponents}
                  defaultValue={[phoneOptions[0]]}
                  isMulti={select ? false : true}
                  options={phoneOptions}
                  isSearchable={searchWithSelect ? true : false}
                  isOptionDisabled={() => selectDisable === true}
                />
              </div>
            </div>
            <div className="w-full lg:w-6/12 px-4">
              <div
                className="relative w-full mb-3"
                value={selectedGender}
                onChange={handleChange}
              >
                <label
                  for="cities"
                  className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                >
                  Gender
                </label>
                <Select
                  className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  value={selectedGender}
                  onChange={handleSelectGenderChange}
                  closeMenuOnSelect={false}
                  components={animatedComponents}
                  defaultValue={[genderOptions[0]]}
                  isMulti={select ? false : true}
                  options={genderOptions}
                  isSearchable={searchWithSelect ? true : false}
                  isOptionDisabled={() => selectDisable === true}
                />
              </div>
            </div>
          </div>

          <hr className="mt-6 border-b-1 border-blueGray-300" />
          <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
            Address
          </h6>
          <div className="flex flex-wrap">
            <div className="w-full lg:w-6/12 px-4">
              <div className="relative w-full mb-3">
                <label
                  for="countries"
                  className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                >
                  Country
                </label>
                <Select
                  className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  value={selectedCountry}
                  onChange={handleSelectCountryChange}
                  closeMenuOnSelect={false}
                  components={animatedComponents}
                  defaultValue={[countryOptions[0]]}
                  isMulti={select ? false : true}
                  options={countryOptions}
                  isSearchable={searchWithSelect ? true : false}
                  isOptionDisabled={() => selectDisable === true}
                />
              </div>
            </div>
            <div className="w-full lg:w-6/12 px-4">
              <div className="relative w-full mb-3">
                <label
                  for="cities"
                  className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                >
                  City
                </label>
                <Select
                  className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  name="city"
                  value={selectedCity}
                  onChange={handleSelectCityChange}
                  closeMenuOnSelect={false}
                  components={animatedComponents}
                  defaultValue={[cityOptions[0]]}
                  isMulti={select ? false : true}
                  options={cityOptions}
                  isSearchable={searchWithSelect ? true : false}
                  isOptionDisabled={() => selectDisable === true}
                />
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-6">
            <button className="bg-orange-500 text-white active:bg-orange-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default DropdownForm;
