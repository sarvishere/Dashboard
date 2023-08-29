import { useState } from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { tokens } from "../../theme";
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import PeopleRoundedIcon from "@mui/icons-material/PeopleRounded";
import ContactsRoundedIcon from "@mui/icons-material/ContactsRounded";
import ReceiptRoundedIcon from "@mui/icons-material/ReceiptRounded";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import CalendarTodayRoundedIcon from "@mui/icons-material/CalendarTodayRounded";
import HelpOutlineRoundedIcon from "@mui/icons-material/HelpOutlineRounded";
import BarChartRoundedIcon from "@mui/icons-material/BarChartRounded";
import PieChartRoundedIcon from "@mui/icons-material/PieChartOutlineRounded";
import TimelineRoundedIcon from "@mui/icons-material/TimelineRounded";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import MapRoundedIcon from "@mui/icons-material/MapRounded";
import Pic from "../../pic.png";


const Item = ({title, icon, to , setSelected , selected}) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      active = {selected === title}
      style = {{color : colors.greenAccent[400],}}
      onClick = {() => setSelected(title)}
      icon = {icon}
      >
        <Link to = {to} 
        className="link"
        >   
        <Typography> {title} </Typography>
        </Link>
    </MenuItem>
  );
};

const Sarv = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");

  return (
    <Box
      sx={{
        "& .pro-sidebar-inner": {
          background: `${colors.primary[400]} !important`,
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
        },
        "& .pro-inner-item:hover": {
          color: "#868dfb !important",
        },
        "& .pro-menu-item.active": {
          color: "#6870fa !important",
        },
      }}
      
    >
      <Sidebar collapsed={isCollapsed}>
        <Menu iconShape="square">
       
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuRoundedIcon /> : undefined}
            style={{
              margin: "10px 0 20px 0",
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography variant="h3" color={colors.blueAccent[600]}>
                  ADMINIS
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuRoundedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          {!isCollapsed && (
            <Box mb="25px">
              <Box display="flex" justifyContent="center" alignItems="center">
                <img
                  alt="profile-user"
                  width="160px"
                  height="150px"
                  src={Pic}
                  style={{ cursor: "pointer", borderRadius: "50%" }}
                />
              </Box>
              <Box textAlign="center">
                <Typography
                  variant="h2"
                  color={colors.blueAccent[600]}
                  fontWeight="bold"
                  sx={{ m: "10px 0 0 0" }}
                >
                  Miss Anderson
                </Typography>
                <Typography variant="h5" color={colors.greenAccent[500]}>
                  Online Shop
                </Typography>
              </Box>
            </Box>
          )}

            <Box paddingLeft={isCollapsed ? undefined : "10%" }>
            <Item
              title="Dashboard"
              to="/"
              icon={<HomeRoundedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
                        <Typography
              variant="h5"
              color={colors.blueAccent[600]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Data
            </Typography>

            <Item
              title="Manage Team"
              to="/team"
              icon={<PeopleRoundedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Contacts Information"
              to="/contacts"
              icon={<ContactsRoundedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Invoices Balances"
              to="/invoices"
              icon={<ReceiptRoundedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

              <Typography
              variant="h5"
              color={colors.blueAccent[600]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Pages
            </Typography>
            <Item
              title="Profile Form"
              to="/form"
              icon={<PersonRoundedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Calendar"
              to="/calendar"
              icon={<CalendarTodayRoundedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="FAQ Page"
              to="/faq"
              icon={<HelpOutlineRoundedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

              <Typography
              variant="h5"
              color={colors.blueAccent[600]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Charts
            </Typography>
            <Item
              title="Bar Chart"
              to="/bar"
              icon={<BarChartRoundedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Pie Chart"
              to="/pie"
              icon={<PieChartRoundedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Line Chart"
              to="/line"
              icon={<TimelineRoundedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Geography Chart"
              to="/geography"
              icon={<MapRoundedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            </Box>
        </Menu>
      </Sidebar>
    </Box>
  );
};

export default Sarv;