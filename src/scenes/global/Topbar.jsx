import {Box , IconButton , useTheme} from "@mui/material";
import { useContext } from "react";
import { ColorModeContext , tokens } from "../../theme";
import InputBase from "@mui/material/InputBase";
import WbIncandescentRoundedIcon from '@mui/icons-material/WbIncandescentRounded';
import NightsStayRoundedIcon from '@mui/icons-material/NightsStayRounded';
import NotificationsActiveRoundedIcon from '@mui/icons-material/NotificationsActiveRounded';
import SettingsApplicationsRoundedIcon from '@mui/icons-material/SettingsApplicationsRounded';
import Person4RoundedIcon from '@mui/icons-material/Person4Rounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';


const Topbar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const colorMode = useContext(ColorModeContext);

    return (
        <Box display="flex" justifyContent="space-between" p={2}>

            <Box display="flex"
            backgroundColor ={colors.gray[500]}
            borderRadius="5px">
                <InputBase 
                sx = {{ml:2 , flex:1}}
                placeholder="search"/>
                <IconButton type="button">
                    <SearchRoundedIcon/>
                </IconButton>
            </Box>

            <Box display="flex" >
                <IconButton onClick={colorMode.toggleColorMode} >
                    {theme.palette.mode === "dark" ?
                    (<NightsStayRoundedIcon/>) : (< WbIncandescentRoundedIcon/>)
                }
                </IconButton>
                <IconButton>
                    <NotificationsActiveRoundedIcon/>
                </IconButton>
                <IconButton>
                    <SettingsApplicationsRoundedIcon/>
                </IconButton>
                <IconButton>
                    <Person4RoundedIcon/>
                </IconButton>
            </Box>
            
        </Box>
    );
};

export default Topbar;