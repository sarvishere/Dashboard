import {DataGrid , GridToolbar} from "@mui/x-data-grid";
import {Box , Toolbar, Typography , useTheme} from "@mui/material";
import {tokens} from "../../theme";
import {mockDataContacts} from "../../data/mockData";
import Header from "../../components/Header";

const Contacts = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode); 

    const columns = [
                     {field:"id" ,
                     headerName:"ID",
                     flex : 0.5,},

                     {field:"registrarId" ,
                     headerName:"Registrar ID",
                     flex : 1,},

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

                    {field:"address" , 
                    headerName:"Address",
                    flex:1 ,},

                    {field:"city" , 
                    headerName:"City",
                    flex:1 ,},

                    {field:"zipCode" , 
                    headerName:"zipCode",
                    flex:1 ,},

];

return (
    <Box>
    <Header title="Contacts" subtitle="List of Contacts"/>
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
          "& .MuiDataGrid-toolbarContainer .MuiButton-text" : {
            color: `${colors.gray[100]}`,
          },
        }}
      >
        <DataGrid
        style = {{ fontSize: '18px' }} 
        rows={mockDataContacts}
        columns={columns}
        components ={{Toolbar : GridToolbar}}
        />
    </Box>    
    </Box>
);
};

export default Contacts;