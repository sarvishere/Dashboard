import { ColorModeContext , useMode } from "./theme";
import { CssBaseline , ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import  Sarv  from "./scenes/global/Sidebar";
import { useState } from "react";
import Dashboard from "./scenes/dashboard";
import Team from "./scenes/team";
import Invoices from "./scenes/invoices";
import Contacts from "./scenes/contacts";
import Bar from "./scenes/bar";
import Line from "./scenes/line";
import Form from "./scenes/form";
import Pie from "./scenes/pie";
import FAQ from "./scenes/faq";
import Geography from "./scenes/geography";
import Calendar from "./scenes/calendar";

function App() {
  const [theme , colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  
  return (
    <ColorModeContext.Provider value= {colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
         <Sarv  isSidebar={isSidebar}/>
          <main className="content">
              <Topbar setIsSidebar={setIsSidebar}/>
              <Routes>
                <Route path="/" element={<Dashboard/>} />
                <Route path="/team" element={<Team/>} />
                <Route path="/invoices" element={<Invoices/>} />
                <Route path="/bar" element={<Bar/>} />
                <Route path="/line" element={<Line/>} />
                <Route path="/form" element={<Form/>} />
                <Route path="/pie" element={<Pie/>} />
                <Route path="/contacts" element={<Contacts/>} />
                <Route path="/faq" element={<FAQ/>} />
                <Route path="/geography" element={<Geography/>} />
                <Route path="/calendar" element={<Calendar/>} />
              </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default App;
