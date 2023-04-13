import Head from 'next/head';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Router from 'next/router';
import dynamic from 'next/dynamic'

import Dropdown from "react-bootstrap/Dropdown";
import { Modal } from 'react-bootstrap';

import Register from '@/src/Components/Register/Register';
import style from '../../styles/PlaceInformation.module.css';
import Data from './../../src/Api/Data';
import Server from './../../src/Api/Server';
import Cookie from '@/src/Api/Cookie';

const Map = dynamic(() => import("@/src/Components/Map"), {
  ssr: false
});

const PlaceInformationPage = ({ provinces, cities }) => {
  const [province, setProvince] = useState('مازندران');
  const [city, setCity] = useState('ساری');
  const [address, setAddress] = useState('');
  const [provinceId, setProvinceId] = useState(27);
  const [lat, setLat] = useState('');
  const [long, setLong] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [fill, setFill] = useState(false);

  useEffect(() => {
    Router.push({
      query: { p_id: provinceId },
    })

    navigator.geolocation.getCurrentPosition((res) => {
      setLat(res.coords.latitude);
      setLong(res.coords.longitude);
    });

    if (province.length > 0 && city.length > 0 && address.length > 0) {
      setFill(true);
    }
  }, [province, city, address])

  const nextStep = () => { }

  const registerHandler = () => {
    const personalData = JSON.parse(localStorage.getItem('personal'));
    const connectionData = JSON.parse(localStorage.getItem('connection'));
    const name = personalData[0];
    const password = personalData[1];
    const password_confirmation = personalData[2];
    const email = connectionData[1];
    const phone = connectionData[0];

    Server.register(name, email, phone, password, password_confirmation).then(response =>
      Cookie.setCookie('token', response.data.token, 1))
    }

  const handleClose = () => setShowModal(false);
  return (
    <>
      <Head>
        <title>Connection Information</title>
      </Head>
      <Register stepNumber='3' prev_link='connection-information' next_link='login' nextStep={nextStep} registerHandler={registerHandler} checkFill={fill}>
        <div className={style.placeDropDowns}>
          {/* city */}
          <div className={style.input_container}>
            <div className={style.label_parrent_dropDown}>
              <label className={style.label} for='#province'> شهر </label>
            </div>
            <div className={style.input_parrent}>
              <Dropdown className={style.dropdown}>
                <Dropdown.Toggle className={style.dropdownToggle} id="dropdown-basic">
                  {city}
                </Dropdown.Toggle>
                <Dropdown.Menu className={style.dropdownMenu}>
                  {cities.map((c) => (
                    <Dropdown.Item
                      className={style.province}
                      key={c.id}
                      onClick={() => setCity(c.name)}
                    >
                      {c.name}
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
              <span className={style.icon}>
                <Image src='/assets/register/location.png' width={20} height={20} alt='province' />
              </span>
            </div>
          </div>
          {/* Province */}
          <div className={style.input_container}>
            <div className={style.label_parrent_dropDown}>
              <label className={style.label} for='#province'> استان </label>
            </div>
            <div className={style.input_parrent}>
              <Dropdown className={style.dropdown}>
                <Dropdown.Toggle className={style.dropdownToggle} id="dropdown-basic">
                  {province}
                </Dropdown.Toggle>
                <Dropdown.Menu className={style.dropdownMenu}>
                  {provinces.map((p) => (
                    <Dropdown.Item
                      className={style.province}
                      key={p.id}
                      onClick={() => { setProvince(p.name); setProvinceId(p.id) }}
                    >
                      {p.name}
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
              <span className={style.icon}>
                <Image src='/assets/register/location.png' width={20} height={20} alt='province' />
              </span>
            </div>
          </div>
        </div>
        {/* Address */}
        <div className={style.input_container}>
          <div className={style.label_parrent}>
            <label className={style.label} for='#province'> آدرس </label>
          </div>
          <div className={style.input_parrent}>
            <input className={style.input} onChange={(e) => { setAddress(e.target.value) }} id='province' placeholder='ایران مازندران ساری' />
            <span className={style.icon}>
              <Image src='/assets/register/map.png' width={20} height={20} alt='province' />
            </span>
          </div>
        </div>
        <div className={style.user_location}>
          {/* long */}
          <div className={style.input_container_location}>
            <div className={style.label_parrent_location}>
              <label className={style.label} for='#province'> عرض جغرافیایی </label>
            </div>
            <div className={style.input_parrent}>
              <input className={style.input_location} onChange={(e) => { setLong(e.target.value) }} id='province' placeholder={long} />
              <span className={style.icon}>
                <Image src='/assets/register/location.png' width={20} height={20} alt='province' />
              </span>
            </div>
          </div>
          {/* lat */}
          <div className={style.input_container_location}>
            <div className={style.label_parrent_location}>
              <label className={style.label} for='#province'> طول جغرافیایی </label>
            </div>
            <div className={style.input_parrent}>
              <input className={style.input_location} onChange={(e) => { setLat(e.target.value) }} id='province' placeholder={lat} />
              <span className={style.icon}>
                <Image src='/assets/register/location.png' width={20} height={20} alt='province' />
              </span>
            </div>
          </div>
        </div>
        <p className={style.chooseOnMapText} onClick={() => { setShowModal(true) }}>انتخاب طول و عرض جغرافیایی از روی نقشه</p>
      </Register>
      {/* Map */}
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Share via:</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Map lat={lat} long={long} />
        </Modal.Body>
      </Modal>
      {/* Map */}

    </>
  )
}

export default PlaceInformationPage;

export function getServerSideProps({ query }) {
  const provinces = Data.getProvince();
  const cities = Data.getCities().filter(c => c.province_id == query.p_id);
  return {
    props: { provinces, cities }
  };

}