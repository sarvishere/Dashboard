import { Box, useTheme } from "@mui/material";
import GeographyChart from "../../components/GeographyChart";
import Header from "../../components/Header";
import { tokens } from "../../theme";
import { borders } from '@mui/system';

const Geography = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box mb="20px">
      <Header title="Geography" subtitle="Simple Geography Chart" />
      <Box
      margin="40px"
      height="75vh"
      border={'1px solid'}
      borderRadius="4px"
      width="150vh"
      >
        <GeographyChart />
      </Box>
    </Box>
  );
};

export default Geography;