import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import RouteNames from './RouteNames';
import Home from '../pages/Home';

const AppRouting = () => {

    const user = 'user'

    return (
        <BrowserRouter>
            <Routes>
                <Route path={RouteNames.DEFAULT} element={user ? <Home/> : <Outlet/>}>
                    
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouting