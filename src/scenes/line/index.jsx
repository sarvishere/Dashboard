import Header from "../../components/Header";
import LineChart from "../../components/LineChart";
import {Box} from "@mui/material";

const Line = () => {

    return (
        <Box m='20px'>
            <Header title="Line Chart" subtitle="simple Bar chart" />
            <Box height='75vh'>
        <LineChart/>
          </Box>
        </Box>
    )
}

export default Line;