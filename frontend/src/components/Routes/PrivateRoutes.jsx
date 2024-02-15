import { Navigate, Outlet } from 'react-router-dom';

export const PrivateRoutes = () => {

    let auth = { loggedIn: true };

    return auth.loggedIn ? <Outlet /> : <Navigate to="/login" />;
}