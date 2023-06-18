import Head from "next/head";
import React, { useState, useRef } from "react";
import Image from "next/image";
import Router from "next/router";
import dynamic from "next/dynamic";
import SimpleReactValidator from "simple-react-validator";
import Dropdown from "react-bootstrap/Dropdown";
import { Modal } from "react-bootstrap";

import Register from "@/src/Components/RegisterPanel/Register";
import style from "../../styles/PlaceInformation.module.css";
import Data from "./../../src/Api/Data";
import Server from "./../../src/Api/Server";
import Cookie from "@/src/Api/Cookie"; 

const Map = dynamic(() => import("@/src/Components/Map"), {
  ssr: false,
});

const PlaceInformationPage = ({ countries }) => {
  const [country, setCountry] = useState("select country");
  const [address, setAddress] = useState("");
  const [provinceId, setProvinceId] = useState(27);
  const [lat, setLat] = useState("");
  const [long, setLong] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [fill, setFill] = useState(false);

  const [, forceUpdate] = useState();

  const validator = useRef(
    new SimpleReactValidator({
      messages: {
        required: "Filling this field is mandatory",
        min: "The field value must not be less than the sample value",
        email: "The email entered is not correct",
        not_in: "please select your country",
      },
      element: (message) => <div style={{ color: "red" }}>{message}</div>,
    })
  );
  // navigator.geolocation.getCurrentPosition((res) => {
  //   setLat(res.coords.latitude);
  //   setLong(res.coords.longitude);
  // });

  const nextStep = (e) => {};

  const registerHandler = (e) => {
    e.preventDefault();

    const personalData = JSON.parse(localStorage.getItem("personal"));
    const connectionData = JSON.parse(localStorage.getItem("connection"));
    const name = personalData[0];
    const password = personalData[1];
    const password_confirmation = personalData[2];
    const email = connectionData;
    const phone = "9385109380";

    try {
      if (validator.current.allValid()) {
        // localStorage.setItem('place', JSON.stringify(email));
        // Router.push('/register/place-information');
        // alert('true')
        Server.register(
          name,
          email,
          phone,
          password,
          password_confirmation
        ).then((response) => {
          Cookie.setCookie("token", response.data.token, 1);
          if(response.data.success===true ){
            Router.replace("/login");
          }
        });
      } else {
        validator.current.showMessages();
        forceUpdate(1);
      }
    } catch (ex) {
      console.log(ex);
    }
  };

  const handleClose = () => setShowModal(false);

  return (
    <>
      <Head>
        <title>Place Information</title>
      </Head>
      <Register
        stepNumber="3"
        prev_link="connection-information"
        next_link="login"
        nextStep={nextStep}
        registerHandler={registerHandler}
        checkFill={fill}
      >
        <form method="POST">
          {/* country */}
          <div className={style.input_container}>
            <div className={style.label_parrent}>
              <label className={style.label} for="#country">
                {" "}
                Country
              </label>
            </div>
            <div className={style.input_parrent}>
              <span className={style.icon}>
                <Image
                  src="/assets/register/location.png"
                  width={20}
                  height={20}
                  alt="country"
                />
              </span>
              <Dropdown className={style.dropdown}>
                <Dropdown.Toggle
                  className={style.dropdown_toggle}
                  id="dropdown-basic"
                >
                  {country}
                </Dropdown.Toggle>
                <Dropdown.Menu className={style.dropdownMenu}>
                  {countries.map((c) => (
                    <Dropdown.Item
                      className={style.country}
                      key={c.code}
                      name="country"
                      onClick={() => {
                        setCountry(c.name);
                      }}
                      onChange={() => {
                        validator.current.showMessageFor("country");
                      }}
                    >
                      {c.name}
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>

              {validator.current.message(
                "country",
                country,
                `required|not_in:select country`
              )}
            </div>
          </div>
          {/* Address */}
          <div className={style.input_container}>
            <div className={style.label_parrent}>
              <label className={style.label} for="#address">
                {" "}
                Address
              </label>
            </div>
            <div className={style.input_parrent}>
              <input
                className={style.input}
                type="text"
                name="address"
                onChange={(e) => {
                  setAddress(e.target.value);
                  validator.current.showMessageFor("address");
                }}
                id="address"
                placeholder="address"
              />
              <span className={style.icon}>
                <Image
                  src="/assets/register/message.png"
                  width={20}
                  height={20}
                  alt="email"
                />
              </span>
              {validator.current.message("address", address, "required|min:10")}
            </div>
          </div>
        </form>
        <p
          className={style.chooseOnMapText}
          onClick={() => {
            setShowModal(true);
          }}
        >
          choose lat & long from the map
        </p>
      </Register>
      {/* Map */}
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Location:</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Map lat={lat} long={long} />
        </Modal.Body>
      </Modal>
      {/* Map */}
    </>
  );
};

export default PlaceInformationPage;

export function getServerSideProps() {
  const countries = Data.getCountires();
  return {
    props: { countries },
  };
}
