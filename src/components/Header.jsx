import {Box , useTheme, Typography} from '@mui/material';
import {tokens} from '../theme';

const Header = ({title , subtitle}) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
        <Box
        display="flex"
        flexDirection="column">
            <Typography 
            variant='h1'
            color = {colors.gray[100]}
            fontWeight="bold"
            sx={{ m: "0 0 5px 10px" }}
            > {title} </Typography>
            <Typography variant="h2"
            sx={{ ml: "10px" }}
            color= {colors.greenAccent[400]}
            > {subtitle} </Typography>
        </Box>
    )
}
export default Header;