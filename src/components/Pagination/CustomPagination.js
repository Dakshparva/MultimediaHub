import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material/styles';

const darkTheme = createTheme({
    palette: {
      type: "dark",
    },
  });
export default function CustomPagination({setPage, numOfPages=10}) {

    const handlePageChange=(page)=>{
        setPage(page);
        window.scroll(0,0);
    }

  return (
    <Stack 
 
      spacing={2}
    >
        <ThemeProvider theme={darkTheme}>
        <Pagination 
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            marginTop: 10,
          }}
          count={numOfPages}
         onChange={(e)=>handlePageChange(e.target.value)}
      hideNextButton
      hidePrevButton />
      </ThemeProvider>
    </Stack>
    
  );
}