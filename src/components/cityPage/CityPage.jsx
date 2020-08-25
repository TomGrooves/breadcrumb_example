import React, { useContext } from 'react'
import { AppContext } from "../../context/ContextProvider"
import style from '../../styles/style.module.scss';
import GridBox from '../gridbox/gridbox';

function CityPage() {

  const { data, setCityID, setcity } = useContext(AppContext);

  return (
    data && data.countries && data.countries.cities ? data.countries.cities.map((item, index) => {
      return (
        <GridBox key={index} child={
          <div className={style.griditem}>
            <p id={item.id} key={index} onClick={(e) => { setCityID(e.target.id); setcity(item.name) }}>{item.name}</p>
          </div>
        }></GridBox>
      )
    })
      : null
  )
}

export default CityPage