import React from "react";
import { useTheme } from "@emotion/react";
import { Box, Button, Typography } from "@mui/material";
import Carousel from 'react-material-ui-carousel';
import { getColors } from "../../theme";


function MasterCard({ images, name, description, contact }) {
    const theme = useTheme();
    const colors = getColors(theme.palette.mode);
    return (
        <Box sx={{ minWidth: "300px", backgroundColor: colors.primary[500], marginBottom: "25px" }}>
            <Carousel 
                indicators={images.length > 1}
                navButtonsAlwaysInvisible={images.length <= 1}
                indicatorIconButtonProps={{style : {color: "black"}}}
                activeIndicatorIconButtonProps={{style: {color: "#DD8560"}}} 
                sx={{
                    marginBottom: images.length > 1?"10px":"20px", 
                    "& button[aria-label=Next][aria-label=Previous], & button[aria-label=Next][aria-label=Previous]:hover" : {
                        opacity: "0 !important", width: "100%", height: "90%", top: "0 !important"
                    }
                }}
            >
                {
                    images && images.map((item, index) => (
                        <Box 
                            component="img"
                            key={index} 
                            sx={{ 
                                minHeight: "290px", 
                                minWidth: "290px", 
                                height: "auto",
                                width: "100%",
                                aspectRatio: "1/1",
                                objectFit: "cover" 
                            }} 
                            src={item}
                        />
                    ))
                }
            </Carousel>
            <Box sx={{ minHeight: "150px" }}>
                <Typography variant="h3" mb="25px" color="#FFE5D8">{name}</Typography>
                <Typography variant="h5" mb="25px">{description}</Typography>
            </Box>
            <Button sx={{
                paddingLeft: "1px",
                paddingRight: "1px",
                minHeight: "25px",
                color: "#DD8560",
                fontSize: "1.5rem",
                textTransform: "none",
                marginBottom: "25px"
            }}
                target="_blank"
                href={`https://${contact}`}
            >
                Написать мастеру
            </Button>
            <Box sx={{ border: "1px solid #FFE5D8", maxHeight: "1px" }} />
        </Box>
    );
};

export default MasterCard;
