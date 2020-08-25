import React, { useContext } from 'react'
import { AppContext } from "../../context/ContextProvider"
import GridBox from '../gridbox/gridbox';
import style from '../../styles/style.module.scss';

function SingleRoomPage() {

    const { data } = useContext(AppContext);

    return (
        data && data.countries && data.countries.city && data.countries.city.hotel && data.countries.city.hotel.room ?
            <GridBox child={
                <div className={style.griditem}>
                    <img alt={data.countries.city.hotel.room_title} className={style.roomimage} src={data.countries.city.hotel.image}></img>
                    <p className={style.griditem}>{data.countries.city.hotel.room.description}</p>
                </div>
            }></GridBox>
            : null
    )
}

export default SingleRoomPage