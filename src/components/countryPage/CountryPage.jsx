import React, { useContext } from 'react'
import { AppContext } from "../../context/ContextProvider"
import GridBox from '../gridbox/gridbox';
import style from '../../styles/style.module.scss';

function CountryPage() {

  const { data, setCountryID, setcountry } = useContext(AppContext);

  return (
    data && data.countries && !data.countries.cities && !data.countries.city ? data.countries.map((item, index) => {
      return (
        <GridBox key={index} child={
          <div className={style.griditem}>
            <p id={item.id} key={index} onClick={(e) => { setCountryID(e.target.id); setcountry(item.name) }}>{item.name}</p>
          </div>
        }>
        </GridBox>
      )
    })
      : null
  )
}

export default CountryPage