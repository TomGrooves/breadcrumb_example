import React, { createContext, useState, useEffect } from 'react';

const AppContext = createContext();

const AppContextProvider = ({ children }) => {

    const [data, setData] = useState([])

    // States to save specified ID's 
    const [countryID, setCountryID] = useState(0)
    const [cityID, setCityID] = useState(0)
    const [hotelID, setHotelID] = useState(0)
    const [roomID, setRoomID] = useState(0)

    // States to save names of selected
    const [country, setcountry] = useState("")
    const [city, setcity] = useState("")
    const [hotel, sethotel] = useState("")
    const [room, setroom] = useState("")

    // Fetch function
    const fetchData = async (countryID, cityID, hotelID, roomID) => {

        let url = `https://api.mediehuset.net/overlook/country${!country == "" && countryID ? "/" + countryID : ''}${!city == "" ? '/city' : ''}${!city == "" && cityID ? "/" + cityID : ''}${!hotel == "" ? '/hotel' : ''}${!hotel == "" && hotelID ? "/" + hotelID : ''}${!room == "" ? '/room' : ''}${!room == "" && roomID ? "/" + roomID : ''}`

        try {
            const response = await fetch(url)
            const data = await response.json()
            setData(data)
        }
        catch (error) {
            console.log(error)
        }
    }

    // UseEffect that runs every time a state changes and re-fetches
    useEffect(() => {
        let country_id = countryID
        let city_id = cityID
        let hotel_id = hotelID
        let room_id = roomID

        // re-fetch
        fetchData(country_id, city_id, hotel_id, room_id)

        //eslint-disable-next-line
    }, [countryID, cityID, hotelID, roomID, country, city, hotel, room])


    return (
        <AppContext.Provider value={{
            data,
            countryID,
            setCountryID,
            cityID,
            setCityID,
            hotelID,
            setHotelID,
            roomID,
            setRoomID,
            city,
            country,
            hotel,
            room,
            setcity,
            setcountry,
            sethotel,
            setroom,

        }}>

            {children}
        </AppContext.Provider>
    );
}


export { AppContext, AppContextProvider }