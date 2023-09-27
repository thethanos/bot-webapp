import React from 'react';
import { useState, useEffect } from 'react';
import { Box, Button } from '@mui/material';
import MasterCard from '../../components/mastercard/MasterCard';

function Gallery() {
    const [masters, setMasters] = useState([]);
    const [currentPage, setPage] = useState(0);

    const pageUrl = new URL(window.location.href);
    const params = new URLSearchParams(pageUrl.search);
    const cityId = params.get("city_id");
    const serviceId = params.get("service_id");

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
        <Box display="flex" flexDirection="column">
            <Box display="flex" flexDirection="column" sx={{padding: "20px"}}>
                {
                    masters && masters.map((item)=>(
                        <MasterCard images={item.imageURLs} name={item.name} description={item.description} />
                    )) 
                }
            </Box>
            <Button variant="contained" onClick={onShowMoreBtn}>Посмотреть еще</Button>
        </Box>
    );
}

export default Gallery;