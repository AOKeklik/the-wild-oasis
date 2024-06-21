import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"

import GlobalStyles from "./style/GlobalStyles"
import AppLayout from "./ui/AppLayout"

import Dashboard from "./pages/Dashboard"
import Bookings from "./pages/Bookings"
import Booking from "./pages/Booking"
import Cabins from "./pages/Cabins"
import Users from "./pages/Users"
import Settings from "./pages/Settings"
import Account from "./pages/Account"
import Login from "./pages/Login"
import Checkin from "./pages/Checkin"
import PageNotFound from "./pages/PageNotFound"

export default function App () {
    return <>
        <GlobalStyles />
        
        <BrowserRouter>
            <Routes>
                <Route element={<AppLayout />}>
                    <Route index element={<Navigate replace to="Dashboard" />} />
                    <Route path="dashboard" element={<Dashboard />} />
                    <Route path="account" element={<Account />} />
                    <Route path="cabins" element={<Cabins />} />
                    <Route path="users" element={<Users />} />
                    <Route path="settings" element={<Settings />} />
                    <Route path="bookings" element={<Bookings />} />
                    <Route path="bookings/:bookingId" element={<Booking />} />
                    <Route path="checkin/:checkinId" element={<Checkin />} />
                </Route>

                <Route path="login" element={<Login />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </BrowserRouter>
    </>
}