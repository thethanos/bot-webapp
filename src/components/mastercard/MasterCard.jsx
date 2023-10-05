import React from "react";
import { useTheme } from "@emotion/react";
import { Box, Button, CardMedia, Typography } from "@mui/material";
import Carousel from 'react-material-ui-carousel';
import { getColors } from "../../theme";


function MasterCard({ images, name, description }) {
    const theme = useTheme();
    const colors = getColors(theme.palette.mode);
    return (
        <Box sx={{ minWidth: "300px", backgroundColor: colors.primary[500], marginBottom: "25px" }}>
            <Carousel indicators={true} >
                {
                    images && images.map((item, index) => (
                        <CardMedia key={index} sx={{ minHeight: "290px", minWidth: "290px", maxWidth: "100%", height: "auto" }} image={item} />
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
            >
                Написать мастеру
            </Button>
            <Box sx={{ border: "1px solid #FFE5D8", maxHeight: "1px" }} />
        </Box>
    );
};

export default MasterCard;
