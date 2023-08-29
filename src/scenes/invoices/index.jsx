import {DataGrid} from "@mui/x-data-grid";
import {Box , Typography , useTheme} from "@mui/material";
import {tokens} from "../../theme";
import {mockDataInvoices} from "../../data/mockData";
import SecurityRoundedIcon from '@mui/icons-material/SecurityRounded';
import LockOpenRoundedIcon from '@mui/icons-material/AdminPanelSettingsRounded';
import AdminPanelSettingsRoundedIcon from '@mui/icons-material/AdminPanelSettingsRounded';
import Header from "../../components/Header";

const Invoices = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode); 

    const columns = [
                    {field:"id" ,
                    headerName:"ID"},

                    {field:"name" ,
                     headerName:"Name" ,
                      flex:1,},

                    {field:"email" , 
                    headerName:"Email" ,
                     flex:1 ,},

                    {field:"cost" , 
                    headerName:"Cost",
                    flex:1,
                    renderCell : (params) => (
                        <Typography color= {colors.greenAccent[500]}
                        style = {{ fontSize: '18px' }} >
                            ${params.row.cost}
                        </Typography>
                    )},
                   
                    {field:"phone" , 
                    headerName:"Tell",
                    flex:1 ,
                    headerAlign: 'left',},

                    {field:"date" , 
                    headerName:"Date",
                    flex:1 ,},
];

return (
    <Box>
    <Header title="Invoices" subtitle="List of invoice"/>
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
            color: `${colors.greenAccent[500]} !important`,
          },
        }}
      >
        <DataGrid
        checkboxSelection rows={mockDataInvoices}
        style = {{ fontSize: '18px' }} 
        columns={columns}
        />
    </Box>    
    </Box>
);
};

export default Invoices;