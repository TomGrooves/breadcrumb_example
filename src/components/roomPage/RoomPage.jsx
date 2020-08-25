import React, { useContext } from 'react'
import { AppContext } from "../../context/ContextProvider"
import GridBox from '../gridbox/gridbox';
import style from '../../styles/style.module.scss';

function RoomPage() {

    const { data, setRoomID, setroom } = useContext(AppContext);

    return (data && data.countries && data.countries.city && data.countries.city.hotel && data.countries.city.hotel.rooms ? data.countries.city.hotel.rooms.map((item, index) => {
        return (
            <GridBox key={index} child={
                <div className={style.griditem}>
                    <p id={item.id} key={index} onClick={(e) => { setRoomID(e.target.id); setroom(item.room_title)}}>{item.room_title}</p>
                </div>}>
            </GridBox>
        )
    }) : null)
}

export default RoomPage