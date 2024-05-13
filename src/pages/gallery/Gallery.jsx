import React from 'react';
import { useState } from 'react';
import { Box, Button } from '@mui/material';
import MasterCard from '../../components/mastercard/MasterCard';
import header from "../../assets/header_dark_mode.png";
import { loadNextPage } from './loadNextPage';
import { useLoaderData } from 'react-router-dom';

function Gallery() {
    const data = useLoaderData();
    const [masters, setMasters] = useState(data);
    const [nextPage, setNextPage] = useState(1);

    const pageUrl = new URL(window.location.href);
    const params = new URLSearchParams(pageUrl.search);
    const cityId = params.get("city_id");
    const serviceId = params.get("service_id");

    function onShowMoreBtn() {
        loadNextPage(nextPage, cityId, serviceId)
        .then(data => {
            setMasters([...masters, ...data]);
            setNextPage(nextPage + 1);
        })
        .catch(err => {
            console.log("Load next page failed: ", err);
        });
    }

    return (
        <Box display="flex" flexDirection="column" justifyContent="center" sx={{padding: "15px 37px 15px 37px", overflow: "hidden"}}>
            <Box display="flex" justifyContent="center" mb="25px">
                <img src={header} alt="logo" />
            </Box>
            <Box display="flex" flexDirection="column">
                {
                    masters && masters.map((item, index)=>(
                        <MasterCard 
                            key={index} 
                            images={item.images} 
                            name={item.name} 
                            description={item.description} 
                            contact={item.contact} 
                        />
                    )) 
                }
            </Box>
            <Button variant="contained" sx={{width: "100%", color: "#FFE5D8"}} onClick={onShowMoreBtn}>Посмотреть еще</Button>
        </Box>
    );
}

export default Gallery;