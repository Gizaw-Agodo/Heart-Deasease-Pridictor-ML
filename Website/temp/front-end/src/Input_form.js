import { CircularProgress } from "@mui/material";
import React from "react";
import { useState } from "react";
import { checkStatus } from "./api";

function Input_form({fetching,setFetching,answer,setAnswer}) {
  const [bloodPresure, setBloodPresure] = useState(0);
  const [cholestrol, setCholestrol] = useState(0);
  const [st_segment, setStSegment] = useState(0);
  const [chest_pain, setChestPain] = useState(0);
  const [heartRate, setHeartRate] = useState(0);
  const [depresion, setDepresion] = useState(0);
  const [glucose, setGlucose] = useState(0);
  const [angina, setAngina] = useState(0);
  const [vessel, setVessel] = useState(0);
  const [gender, setGender] = useState(1);
  const [thal, setThal] = useState(0);
  const [age, setage] = useState(0);
  const [ecg, setEcg] = useState(0);

  const userData = {
    bloodPresure,
    cholestrol,
    st_segment,
    chest_pain,
    heartRate,
    depresion,
    glucose,
    angina,
    vessel,
    gender,
    thal,
    age,
    ecg,
  };

   const handleSubmit = async(e) => {
     e.preventDefault();
     setFetching(!fetching);
     const answers = await checkStatus(userData);
     setTimeout(function () {
       setFetching(false);
     }, 3000);
     setAnswer(answers[1])
   };

  return (
    <div className="w-[50%]">
      <div className=" p-2  bg-gray-300 text-gray-700   shadow-lg rounded-md  shadow-gray-400 ">
        <h2 className="text-center font-bold text-lg mb-5">
          do you want to now the prediction of your heart health ?
        </h2>
        <h3 className="text-center font-bold mb-4">
          fill the following form to do that !!!!
        </h3>
      </div>

      <div className=" p-4 bg-white text-gray-700 w-full  shadow-lg rounded-md  shadow-gray-400 ">
        {/* gender selector  */}
        <div class="flex flex-row justify-between mt-2 items-center  bg-blue-300 p-1 px-4 my-3  rounded-md">
          <label
            for="default-range"
            class="block mb-2  font-medium text-gray-900 dark:text-white text-base"
          >
            Select Your Gender
          </label>

          <div class="form-check ml-[210px]">
            <input
              class="form-check-input appearance-none rounded-full h-5 w-5 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
              type="radio"
              name="gender"
              value={1}
              id="male"
              checked={gender == 1}
              onChange={(e) => setGender(e.target.value)}
            ></input>{" "}
            Male
          </div>

          <div class="form-check">
            <input
              class=" appearance-none rounded-full h-5 w-5 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
              type="radio"
              name="gender"
              id="female"
              value={0}
              checked={gender == 0}
              onChange={(e) => setGender(e.target.value)}
            ></input>
            Female
          </div>
        </div>

        {/* exercise angina   */}
        <div class="flex flex-row justify-between mt-2 items-center  bg-blue-300 p-1 px-4 my-3  rounded-md">
          <label
            for="default-range"
            class="block mb-2  font-medium text-gray-900 dark:text-white text-base"
          >
            Do you have Exercise induced Chest Pain ?
          </label>

          <div class="form-check">
            <input
              class="form-check-input appearance-none rounded-full h-5 w-5 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
              type="radio"
              name="angina"
              value={1}
              id="angina_yes"
              checked={angina == 1}
              onChange={(e) => setAngina(e.target.value)}
            ></input>{" "}
            Yes
          </div>

          <div class="form-check">
            <input
              class=" appearance-none rounded-full h-5 w-5 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
              type="radio"
              name="angina"
              id="angina_no"
              value={0}
              checked={angina == 0}
              onChange={(e) => setAngina(e.target.value)}
            ></input>
            No
          </div>
        </div>

        {/* affected vessels   */}
        <div class="flex flex-row justify-between mt-2 items-center  bg-blue-300 p-1 px-4 my-3  rounded-md">
          <label
            for="default-range"
            class="block mb-2 font-medium text-gray-900 dark:text-white text-base"
          >
            Number of major vessels colored by flourosopy
          </label>

          <div class="form-check">
            <input
              class="appearance-none rounded-full h-5 w-5 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
              type="radio"
              name="vessel"
              value={0}
              id="0"
              checked={vessel == 0}
              onChange={(e) => setVessel(e.target.value)}
            ></input>
            0
          </div>

          <div class="form-check">
            <input
              class="appearance-none rounded-full h-5 w-5 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
              type="radio"
              name="vessel"
              id="1"
              value={1}
              checked={vessel == 1}
              onChange={(e) => setVessel(e.target.value)}
            ></input>
            1
          </div>
          <div class="form-check ">
            <input
              class="form-check-input appearance-none rounded-full h-5 w-5 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain mr-2 cursor-pointer"
              type="radio"
              name="vessel"
              value={2}
              id="2"
              checked={vessel == 2}
              onChange={(e) => setVessel(e.target.value)}
            ></input>{" "}
            2
          </div>

          <div class="form-check ">
            <input
              class="form-check-input appearance-none rounded-full h-5 w-5 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain mr-2 cursor-pointer"
              type="radio"
              name="vessel"
              value={3}
              id="3"
              checked={vessel == 3}
              onChange={(e) => setVessel(e.target.value)}
            ></input>{" "}
            3
          </div>
        </div>

        {/* select your level Thalassemia */}
        <div
          value={thal}
          onChange={(e) => setThal(e.target.value)}
          className="flex flex-row justify-between mt-2 items-center  bg-blue-200 p-1 px-4 my-3  rounded-md"
        >
          <label
            for="thal"
            class="block mb-2  font-medium text-gray-900   dark:text-white text-base"
          >
            Select your level of Thalassemia
          </label>
          <select
            id="thal"
            class="bg-gray-50 border border-gray-300 w-[50%] text-gray-900 text-sm ml-5 rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option value={0}> Normal </option>
            <option value={1}> Fixed defect </option>
            <option value={2}> Reversable defect </option>
          </select>
        </div>

        {/* select your chest pain type */}
        <div className="flex flex-row justify-between mt-2 items-center  bg-blue-200 p-1 px-4 my-3  rounded-md">
          <label
            for="chestpain"
            class="block mb-2  font-medium text-gray-900   dark:text-white text-base"
          >
            Select your Chest Pain Type
          </label>
          <select
            value={chest_pain}
            onChange={(e) => setChestPain(e.target.value)}
            id="chestpain"
            class="bg-gray-50 border border-gray-300 w-[50%] text-gray-900 text-sm ml-5 rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option value={0} selected>
              typical angina
            </option>
            <option value={1}> atypical angina </option>
            <option value={2}> non-anginal pain </option>
            <option value={3}> asymptotic </option>
          </select>
        </div>

        {/* exercise sg segment */}
        <div
          value={st_segment}
          onChange={(e) => setStSegment(e.target.value)}
          className="flex flex-row justify-between mt-2 items-center  bg-blue-200 p-1 px-4 my-3  rounded-md"
        >
          <label
            for="st"
            class="block mb-2  font-medium text-gray-900   dark:text-white text-base"
          >
            The slope of the peak exercise ST segment
          </label>
          <select
            id="st"
            class="bg-gray-50 border border-gray-300 w-[50%] text-gray-900 text-sm ml-5 rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option value={0}> upsloping </option>
            <option value={1}> flat </option>
            <option value={2}> downsloping </option>
          </select>
        </div>

        {/* select your resting ecg */}
        <div
          value={ecg}
          onChange={(e) => setEcg(e.target.value)}
          className="flex flex-row justify-between mt-2 items-center  bg-blue-200 p-1 px-4 my-3  rounded-md"
        >
          <label
            for="ecg"
            class="block mb-2  font-medium text-gray-900   dark:text-white text-base"
          >
            Select your resting electrocardiographic results
          </label>
          <select
            id="ecg"
            class="bg-gray-50 border border-gray-300 w-[50%] text-gray-900 text-sm ml-5 rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option value={0}> normal </option>
            <option value={1}> having ST-T wave abnormality </option>
            <option value={2}> left ventricular hyperthrophy </option>
          </select>
        </div>

        {/* age  */}
        <div className="flex flex-row justify-between mt-2 items-center bg-blue-100 p-1 px-4 my-3  rounded-md">
          <label
            for="default-range"
            class="block mb-2 w-[40%]  font-medium text-gray-900 dark:text-white text-base"
          >
            Add your age
          </label>
          <input
            id="default-range"
            type="range"
            value={age}
            min="0"
            max="200"
            onChange={(e) => setage(e.target.value)}
            class="w-[50%] h-2  bg-gray-400 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
          ></input>
          <output>{age}</output>
        </div>

        {/* glucose label  */}
        <div className="flex flex-row justify-between mt-2 items-center bg-blue-100 p-1 px-4 my-3  rounded-md">
          <label
            for="default-range"
            class="block mb-2  font-medium text-gray-900 dark:text-white text-base"
          >
            What is Your blood sugar amount (mg/dl)
          </label>
          <input
            id="default-range"
            type="range"
            min="0"
            max="250"
            step={0.1}
            value={glucose}
            onChange={(e) => setGlucose(e.target.value)}
            class="w-[50%] h-2 bg-gray-400 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
          ></input>
          <output className="text-bold">{glucose}</output>
        </div>

        {/* heart rate */}
        <div className="flex flex-row justify-between mt-2 items-center bg-blue-100 p-1 px-4 my-3  rounded-md">
          <label
            for="default-range"
            class="block mb-2  font-medium text-gray-900 dark:text-white text-base"
          >
            Maximum Heart rate achieved (beats per minute)
          </label>
          <input
            id="default-range"
            type="range"
            min="0"
            max="225"
            value={heartRate}
            onChange={(e) => setHeartRate(e.target.value)}
            class="w-[50%] h-2 bg-gray-400 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
          ></input>
          <output>{heartRate}</output>
        </div>

        {/* cholestrol label  */}
        <div className="flex flex-row justify-between mt-2 items-center bg-blue-100 p-1 px-4 my-3  rounded-md">
          <label
            for="default-range"
            class="block mb-2  font-medium text-gray-900 dark:text-white text-base"
          >
            What is Your Serum Cholestrol amount (mg/dl)
          </label>
          <input
            id="default-range"
            type="range"
            min="0"
            max="300"
            value={cholestrol}
            onChange={(e) => setCholestrol(e.target.value)}
            class="w-[50%] h-2 bg-gray-400 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
          ></input>
          <output>{cholestrol}</output>
        </div>

        {/* resting blood pressure  */}
        <div className="flex flex-row justify-between mt-2 items-center bg-blue-100 p-1 px-4 my-3  rounded-md">
          <label
            for="default-range"
            class="block mb-2  font-medium text-gray-900 dark:text-white text-base"
          >
            resting blood pressure (mm hg)
          </label>
          <input
            id="default-range"
            type="range"
            min="0"
            max="300"
            value={bloodPresure}
            onChange={(e) => setBloodPresure(e.target.value)}
            class="w-[50%] h-2 bg-gray-400 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
          ></input>
          <output>{bloodPresure}</output>
        </div>

        {/* st_depresion  */}
        <div className="flex flex-row justify-between mt-2 items-center bg-blue-100 p-1 px-4 my-3  rounded-md">
          <label
            for="default-range"
            class="block mb-2  font-medium text-gray-900 dark:text-white text-base"
          >
            depression induced by exercise relative to rest
          </label>
          <input
            id="default-range"
            type="range"
            min="0"
            max="10"
            step={0.1}
            value={depresion}
            onChange={(e) => setDepresion(e.target.value)}
            class="w-[50%] h-2 bg-gray-400 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
          ></input>
          <output>{depresion}</output>
        </div>
        {fetching ? (
          <CircularProgress
            size="5rem"
            sx={{
              display: "flex",
              marginLeft: "15rem",
              fontSize: "50rem",
              justifyContent: "center",
            }}
          />
        ) : (
          <button
            type="button"
            class="flex  bg-purple-600 w-[50%] mx-auto justify-center items-center my-10 p-3  text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"
            onClick={(e) => handleSubmit(e)}
          >
            Predict your heart Health
          </button>
        )}
      </div>
    </div>
  );
}

export default Input_form;
