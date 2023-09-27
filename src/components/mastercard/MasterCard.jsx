import React from "react";
import { useTheme } from "@emotion/react";
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import Carousel from 'react-material-ui-carousel';
import { getColors } from "../../theme";

function MasterCard({images, name, description}) {
    const theme = useTheme();
    const colors = getColors(theme.palette.mode);
    return (
        <Card sx={{minWidth: "380px", minHeight: "580px", backgroundColor: colors.primary[400], marginBottom: "20px"}}>
            <Carousel indicators={true}>
                {
                    images && images.map((item)=>(
                        <CardMedia sx={{minHeight: "300px"}} image={item}/>
                    ))
                }
            </Carousel>
            <CardContent sx={{minHeight: "200px"}}>
                <Typography variant="h2" mb="10px">{name}</Typography>
                <Typography variant="h5">{description}</Typography>
            </CardContent>
            <CardActions>
                <Button>Написать мастеру</Button>
            </CardActions>
        </Card>
    );
};

export default MasterCard;
