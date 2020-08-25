import React from 'react';
import {AppContextProvider} from './context/ContextProvider';
import CountryPage from './components/countryPage/CountryPage';
import CityPage from './components/cityPage/CityPage';
import SingleRoomPage from './components/singleRoomPage/SingleRoomPage';
import HotelPage from './components/hotelPage/HotelPage';
import RoomPage from './components/roomPage/RoomPage';
import BreadCrumb from './components/breadcrumb/breadcrumb';
import style from './styles/style.module.scss';

function App() {

  return (
    <AppContextProvider>
    <BreadCrumb/>
    <section className={style.wrapper}>
        <CountryPage/>
        <CityPage />
        <HotelPage />
        <RoomPage />-
        <SingleRoomPage/>
    </section>
    </AppContextProvider>
  );
}

export default App;