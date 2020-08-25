import React, { useContext } from 'react'
import { AppContext } from "../../context/ContextProvider"
import GridBox from '../gridbox/gridbox';
import style from '../../styles/style.module.scss';

function HotelPage() {

  const { data, setHotelID, sethotel } = useContext(AppContext);

  return (data && data.countries && data.countries.city && data.countries.city.hotels ? data.countries.city.hotels.map((item, index) => {
    return (
      <GridBox key={index} child={
        <div className={style.griditem}>
          <p id={item.id} key={index} onClick={(e) => { setHotelID(e.target.id); sethotel(item.title) }}>{item.title}</p>
        </div>}>
      </GridBox>
    )
  }) : null
  )
}

export default HotelPage