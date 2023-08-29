import Header from "../../components/Header";
import BarChart from "../../components/BarChart";
import {Box} from "@mui/material";

const Bar = () => {

    return (
        <Box m='20px'>
            <Header title="Bar Chart" subtitle="simple Bar chart" />
            <Box height='75vh'>
        <BarChart />
          </Box>
        </Box>
    )
}

export default Bar;