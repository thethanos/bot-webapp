import { Box } from "@mui/material";
import sadCat from "../assets/sad_cat.webp"

export default function ErrorElement() {
    return(
        <Box display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"}>
            <Box 
                component={"img"} 
                src={sadCat} 
                sx={{
                    margin: "20px",
                    minHeight: "290px", 
                    minWidth: "290px", 
                    height: "auto",
                    width: "100%",
                    aspectRatio: "1/1",
                    objectFit: "cover" 
                }}  />
            <h1>Неизвестная ошибка</h1>
        </Box>
    );
}