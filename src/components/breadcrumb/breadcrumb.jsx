import React, { useContext } from 'react'
import { AppContext } from "../../context/ContextProvider"
import style from '../../styles/style.module.scss';

function BreadCrumb() {

    const { country, city, hotel, room, setcountry, setcity, sethotel, setroom } = useContext(AppContext);

    return (
        <ul className={style.breadcrumb}>
            <li onClick={() => { setroom(""); sethotel(""); setcity(""); setcountry("") }}>Overlook{" >"}</li>
            {!country == "" && <li onClick={() => { setroom(""); sethotel(""); setcity("") }}>{country}{" >"}</li>}
            {!city == "" && <li onClick={() => { setroom(""); sethotel("") }}>{city}{" >"}</li>}
            {!hotel == "" && <li onClick={() => { setroom("") }}>{hotel}{" >"}</li>}
            {!room == "" && <li>{room}</li>}
        </ul>
    )
}

export default BreadCrumb