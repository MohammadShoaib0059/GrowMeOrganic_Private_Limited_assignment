import Auth from './Components/Auth';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useState } from 'react';
import {  Route, Routes, BrowserRouter } from 'react-router-dom';
import ProtectedRoute from './Components/ProtectedRoute';
import Dashboard from './Components/Dashboard';
function App() {
  const [isAuth, setIsAuth] = useState(false);
  const theme = createTheme({});
  return (
    <>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Auth setIsAuth={setIsAuth} />} />
            <Route element={<ProtectedRoute isAuth={isAuth} />}>
              <Route path="/dashboard" element={<Dashboard/>}/>
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}
export default App;