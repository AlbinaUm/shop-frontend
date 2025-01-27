import { Container, CssBaseline } from "@mui/material";
import AppToolbar from "./components/UI/AppToolbar/AppToolbar.tsx";
import { Route, Routes } from "react-router-dom";
import Products from "./features/products/containers/Products.tsx";
import NewProduct from "./features/products/containers/NewProduct.tsx";
import RegisterPage from './features/users/RegisterPage.tsx';
import LoginPage from './features/users/LoginPage.tsx';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute.tsx';
import { useAppSelector } from './app/hooks.ts';
import { selectUser } from './features/users/usersSlice.ts';

const App = () => {
  const user = useAppSelector(selectUser);
  return (
    <>
      <CssBaseline />
      <header>
        <AppToolbar />
      </header>

      <main>
        <Container maxWidth="xl">
          <Routes>
            <Route path="/" element={<Products />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/products" element={<Products />} />

            <Route path="/products/new" element={
              <ProtectedRoute isAllowed={user && user.role === 'admin'}>
                <NewProduct />
              </ProtectedRoute>
            } />

            <Route path="*" element={<h1>Not found</h1>} />
          </Routes>
        </Container>
      </main>
    </>
  );
};

export default App;
