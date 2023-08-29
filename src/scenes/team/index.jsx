import {DataGrid} from "@mui/x-data-grid";
import {Box , Typography , useTheme} from "@mui/material";
import {tokens} from "../../theme";
import {mockDataTeam} from "../../data/mockData";
import SecurityRoundedIcon from '@mui/icons-material/SecurityRounded';
import LockOpenRoundedIcon from '@mui/icons-material/AdminPanelSettingsRounded';
import AdminPanelSettingsRoundedIcon from '@mui/icons-material/AdminPanelSettingsRounded';
import Header from "../../components/Header";

const Team = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode); 

    const columns = [{field:"id" , headerName:"ID"},

                    {field:"name" ,
                     headerName:"Name" ,
                      flex:1,},

                    {field:"email" , 
                    headerName:"Email" ,
                     flex:1 ,},

                    {field:"age" , 
                    headerName:"Age",
                    type:'number',
                    align:'left',
                    headerAlign: 'left',},
                   
                    {field:"phone" , 
                    headerName:"Tell",
                    flex:1 ,
                    headerAlign: 'left',},

                    {field:"access" ,
                    align:'center',
                    headerAlign:'center',
                    flex:1 , 
                    headerName:"Access Level",
                    renderCell:({row:{access}}) => {
                        return (
                            <Box
                            width= "60%"
                            margin= '0  auto'
                            p='5px'
                            display="flex"
                            justifyContent="center"
                            backgroundColor= {
                                access === "admin"
                                ? colors.greenAccent[700] 
                                : colors.greenAccent[600]
                            }
                            borderRadius="10px"
                            >
                                {access === "admin" && <AdminPanelSettingsRoundedIcon/>}
                                {access === "manager" && <SecurityRoundedIcon/>}
                                {access === "user" && <LockOpenRoundedIcon />}
                                <Typography variant='h4'
                                color={colors.gray[100]}> {access} </Typography>
                            </Box>
                        )
                    }
                },
];

return (
    <Box>
    <Header title="Team" subtitle="Managing the team"/>
    <Box
        m="40px 20px 0 20px"
        width="1550px"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.gray[800],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.gray[500],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.gray[800],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
      >
        <DataGrid
        style = {{ fontSize: '18px' }} 
        rows={mockDataTeam}
        columns={columns}
        />
    </Box>    
    </Box>
);
};

export default Team;