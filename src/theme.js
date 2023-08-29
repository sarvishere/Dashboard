import { createContext,useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";

export const tokens = (mode) => ({
 ...(mode) === 'dark' ?
    {gray: {
        100: "#edeff0",
        200: "#dbe0e1",
        300: "#cad0d1",
        400: "#b8c1c2",
        500: "#a6b1b3",
        600: "#858e8f",
        700: "#646a6b",
        800: "#424748",
        900: "#212324"
    }, 
    
    primary: {
        100: "#d0d5da",
        200: "#a1acb5",
        300: "#72828f",
        400: "#43596a",
        500: "#142f45",
        600: "#102637",
        700: "#0c1c29",
        800: "#08131c",
        900: "#04090e"
    },
    
    greenAccent: {
        100: "#d7dbd8",
        200: "#afb7b0",
        300: "#869289",
        400: "#5e6e61",
        500: "#364a3a",
        600: "#2b3b2e",
        700: "#202c23",
        800: "#161e17",
        900: "#0b0f0c"
    },
    
    redAccent: {
        100: "#f1e8de",
        200: "#e3d1bd",
        300: "#d5bb9d",
        400: "#c7a47c",
        500: "#b98d5b",
        600: "#947149",
        700: "#6f5537",
        800: "#4a3824",
        900: "#251c12"
    },
    
    blueAccent: {
        100: "#d8dbdc",
        200: "#b1b7b8",
        300: "#8a9395",
        400: "#636f71",
        500: "#3c4b4e",
        600: "#303c3e",
        700: "#242d2f",
        800: "#181e1f",
        900: "#0c0f10"
    },
} : {
    gray: {
        100: "#212324",
        200: "#424748",
        300: "#646a6b",
        400: "#858e8f",
        500: "#a6b1b3",
        600: "#b8c1c2",
        700: "#cad0d1",
        800: "#dbe0e1",
        900: "#edeff0"
    }, 
    
    primary: {
        100: "#04090e",
        200: "#08131c",
        300: "#0c1c29",
        400: "#102637",
        500: "#142f45",
        600: "#43596a",
        700: "#72828f",
        800: "#a1acb5",
        900: "#d0d5da"
    },
    
    greenAccent: {
        100: "#0b0f0c",
        200: "#161e17",
        300: "#202c23",
        400: "#2b3b2e",
        500: "#364a3a",
        600: "#5e6e61",
        700: "#869289",
        800: "#afb7b0",
        900: "#d7dbd8"
    },
    
    redAccent: {
        100: "#251c12",
        200: "#4a3824",
        300: "#6f5537",
        400: "#947149",
        500: "#b98d5b",
        600: "#c7a47c",
        700: "#d5bb9d",
        800: "#e3d1bd",
        900: "#f1e8de"
    },
    
    blueAccent: {
        100: "#0c0f10",
        200: "#181e1f",
        300: "#242d2f",
        400: "#303c3e",
        500: "#3c4b4e",
        600: "#636f71",
        700: "#8a9395",
        800: "#b1b7b8",
        900: "#d8dbdc"
    },
},  
});

export const themeSettings = (mode) => {
    const colors = tokens(mode);
    return {
        palette : {
            mode:mode,
            ...(mode === 'dark'
            ?{
                primary:{
                    main:colors.primary[500],
                },
                secondaty : {
                    main:colors.greenAccent[500],
                },
                neutral : {
                    dark:colors.gray[700],
                    main:colors.gray[500],
                    light:colors.gray[100],
                },
                background : {
                    default:"#82AEB6",
                }
            } : {
                primary:{
                    main:colors.gray[100],
                },
                secondaty : {
                    main:colors.greenAccent[500],
                },
                neutral : {
                    dark:colors.gray[700],
                    main:colors.gray[500],
                    light:colors.gray[100],
                },
                background : {
                    default: "#edeff0",
                },
            }),
          },
            typography:{
                fontFamily:['Josefin Sans', "sans-serif"].join(','),
                fontSize:12,
                h1: {
                    fontFamily:['Josefin Sans', "sans-serif"].join(','),
                   fontSize:40,
                },
                h2: {
                    fontFamily:['Josefin Sans', "sans-serif"].join(','),
                   fontSize:32,
                },
                h3: {
                    fontFamily:['Josefin Sans', "sans-serif"].join(','),
                   fontSize:24,
                },
                h4: {
                    fontFamily:['Josefin Sans', "sans-serif"].join(','),
                   fontSize:20,
                },
                h5: {
                    fontFamily:['Josefin Sans', "sans-serif"].join(','),
                   fontSize:16,
                },
                h6: {
                    fontFamily:['Josefin Sans', "sans-serif"].join(','),
                   fontSize:14,
                },
            },
    };
};

export const ColorModeContext = createContext ({
    toggleColorMode : () => {}
});

export const useMode = () => {
   const [mode, setMode] = useState("dark");

   const colorMode = useMemo( 
    () => ({
        toggleColorMode : () =>
        setMode ((prev) => (prev === "light" ? "dark" : "light"))
    }), []
   );
    const theme = useMemo( () => createTheme( themeSettings(mode)), [mode])

    return [theme , colorMode];
}

