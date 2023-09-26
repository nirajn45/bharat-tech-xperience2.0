import React from "react";
import registrationBg from "../../Assets/registration.png";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Register() {
  const [dataSheet, setData] = useState([]);
  const [showSuccess, setShowSuccess] = useState(false);
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isDuplicate, setDuplicate] = useState(false);
  const [checked, setChecked] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [college, setCollege] = useState("");
  const [teamName, setTeamName] = useState("");
  const [phone, setPhone] = useState("");
  const [NoOfParticipants, setNoOfParticipants] = useState("");

  useEffect(() => {
    const readGoogleSheet = () => {
      fetch("https://sheetdb.io/api/v1/1rhcrhhnc1yyc")
        .then((response) => response.json())
        .then((data) => setData(data));
    };
    readGoogleSheet();
  }, []);

  console.log(dataSheet);

  const createGoogleSheet = () => {
    fetch("https://sheetdb.io/api/v1/1rhcrhhnc1yyc", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data: [
          {  
            college: college,
            name: name,
            email: email,
          
            team_Name: teamName,
            phone_No: phone,
            no_of_participants: NoOfParticipants,
          },
        ],
      }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  };

  const duplicateEntry = () => {
    for (const entry of dataSheet) {
      if (entry.email === email) {
        console.log("duplicate h");
        setDuplicate(true);
        setIsValidEmail(true);
        return false;
      }
    }
    return true;
  };

  const validEmail = (e) => {
    const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    const isValid = emailPattern.test(email);

    if (isValid) {
      setIsValidEmail(true);

      return true;
    } else {
      setIsValidEmail(false);
      return false;
    }
  };

  const createjson = () => {
    console.log(college);
    if (name !== "" && email !== "" && validEmail()) {
      if (duplicateEntry()) {
        createGoogleSheet();
        setShowSuccess(true);
      } else {
        console.log("User alraedy exists");
      }
    } else {
      console.log("Please fill in all required fields with valid data");
    }
  };

  return (
    <>
      <div className=" h-auto text-white">
        <div id="stars"> </div>

        <section class=" body-font relative">
          <div className="flex justify-end ">
            <Link to="/">
              <button className="  pt-6 px-6 text-white font-[600] h-[44px] flex items-center justify-center rounded-[50px] ">
                Get back to Home &rarr;
              </button>
            </Link>
          </div>
          <div class="container   mx-auto">
            <div className="flex justify-center overflow-hidden">
              <div className="container flex justify-center">
                <div className="w-full md:w-3/4">
                  <div className="flex flex-wrap  w-full py-5 md:py-28 relative mb-4">
                    <img
                      alt="gallery"
                      className="w-full  object-contain h-full object-center block absolute inset-0"
                      src={registrationBg}
                    />
                    <div className="text-center  md:pl-20 relative z-10 w-full">
                      <h2 className="text-2xl md:text-6xl text-white font-medium title-font mb-2 text-animation">
                        Registration_
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="lg:w-1/2 md:w-2/3 px-5 mx-auto">
              <div class="flex flex-wrap ">
                {/* Naam */}
                <div class="p-2 md:w-1/2 w-full">
                  <div class="relative">
                    <label for="name" class="leading-7 text-sm ">
                      Name
                    </label>
                    <input
                      required
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      id="name"
                      name="name"
                      class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                {/* email */}
                <div class="p-2 md:w-1/2 w-full">
                  <div class="relative">
                    <label for="email" class="leading-7 text-sm ">
                      Email
                    </label>

                    <input
                      required
                      type="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        setDuplicate(false);
                      }}
                      id="email"
                      name="email"
                      className={`w-full bg-gray-100 bg-opacity-50 rounded border ${
                        isValidEmail ? "border-gray-300" : "border-red-500"
                      } focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out`}
                    />
                    {!isValidEmail && (
                      <p className="text-red-500 text-sm mt-2">
                        Invalid email format
                      </p>
                    )}
                  </div>
                </div>
                {/* College */}
                <div class="p-2 md:w-1/2 w-full">
                  <div class="relative">
                    <label for="name" class="leading-7 text-sm ">
                      College
                    </label>
                    <input
                      required
                      type="text"
                      value={college}
                      onChange={(e) => setCollege(e.target.value)}
                      id="name"
                      name="name"
                      class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                {/* team-name */}
                <div class="p-2 md:w-1/2 w-full">
                  <div class="relative">
                    <label for="name" class="leading-7 text-sm ">
                      Team-Name
                    </label>
                    <input
                      required
                      type="text"
                      value={teamName}
                      onChange={(e) => setTeamName(e.target.value)}
                      id="name"
                      name="name"
                      class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                {/* phone-no */}
                <div class="p-2 md:w-1/2 w-full">
                  <div class="relative">
                    <label for="name" class="leading-7 text-sm ">
                      Phone no.
                    </label>
                    <input
                      required
                      type="text"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      id="name"
                      name="name"
                      class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                {/* no-of-participants */}
                <div class="p-2 md:w-1/2 w-full">
                  <div class="relative">
                    <label for="name" class="leading-7 text-sm ">
                      No. of participants
                    </label>
                    <input
                      required
                      type="text"
                      value={NoOfParticipants}
                      onChange={(e) => setNoOfParticipants(e.target.value)}
                      id="name"
                      name="name"
                      class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                    <p class="mt-2 text-sm text-green-600 ">
                      Atmost 4 members are allowed
                    </p>
                  </div>
                </div>
                {/* checkbox */}
                <div class="flex items-start mb-6">
                  <div class="flex items-center h-5 p-3">
                    <input
                      type="checkbox"
                      checked={checked}
                      onChange={() => setChecked(!checked)}
                      id="remember"
                      name="remember"
                      class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                      required
                    />
                  </div>
                  <label
                    for="remember"
                    class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    I agree with the{" "}
                    <a href="#" class="text-green-600 hover:underline ">
                      terms and conditions
                    </a>
                    .
                  </label>
                </div>
                {/* submit */}

                <div class="p-2 w-full">
                  <button
                    disabled={!checked}
                    onClick={() => createjson()}
                    className={`flex mx-auto text-white bg-green-700 border-0 py-2 px-8 focus:outline-none rounded text-lg ${
                      !checked ? "disableButton" : "" // Apply the disabled-button class when disabled
                    }`}
                  >
                    submit
                  </button>
                </div>
                {showSuccess && (
                  <div className="mt-4 p-3 bg-green-300 text-green-700 rounded-lg">
                    Success! Your form has been submitted.
                  </div>
                )}
                {isDuplicate && (
                  <div className="mt-4 p-3 bg-green-300 text-red-700 rounded-lg">
                    Fails! user already exist
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
