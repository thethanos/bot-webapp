import React from 'react';
import { useState, useEffect } from 'react';
import { Box, Button } from '@mui/material';
import MasterCard from '../../components/mastercard/MasterCard';
import header from "../../assets/header_dark_mode.png";

function Gallery() {
    const [masters, setMasters] = useState([]);
    const [currentPage, setPage] = useState(0);

    const pageUrl = new URL(window.location.href);
    const params = new URLSearchParams(pageUrl.search);
    const cityId = 1695580428;//params.get("city_id");
    const serviceId = 1695581310;//params.get("service_id");

    async function loadMasters() {
        const url = new URL("https://bot-dev-domain.com:1444/masters");
        url.searchParams.set("page", String(currentPage));
        url.searchParams.set("limit", String(6));
        url.searchParams.set("city_id", cityId);
        url.searchParams.set("service_id", serviceId);

        try {
            let response = await fetch(url.toString());
            if (!response.ok) {
                console.error("Error has occured during request GET ", url, response.status);
                return;
            }

            let data = await response.json()
            if (data.length === 0) {
                return;
            }

            setMasters([...masters, ...data]);
            setPage(currentPage + 1);
        } catch (exception) {
            console.error(`Exception has been thrown during request GET `, url, exception);
        }
    }

    function onShowMoreBtn() {
        loadMasters();
    }

    useEffect(() => {
        loadMasters();
    }, []);

    return (
        <Box display="flex" flexDirection="column" justifyContent="center" sx={{padding: "15px 37px 15px 37px", overflow: "hidden"}}>
            <Box display="flex" justifyContent="center" mb="25px">
                <img src={header} alt="logo" />
            </Box>
            <Box display="flex" flexDirection="column">
                {
                    masters && masters.map((item, index)=>(
                        <MasterCard key={index} images={item.imageURLs} name={item.name} description={item.description} />
                    )) 
                }
            </Box>
            <Button variant="contained" sx={{width: "100%", color: "#FFE5D8"}} onClick={onShowMoreBtn}>Посмотреть еще</Button>
        </Box>
    );
}

export default Gallery;