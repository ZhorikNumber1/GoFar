import React from "react";
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import MainPage from "./pages/MainPage";

export default function Routing() {
        return(
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<MainPage/>} />

                </Routes>
            </BrowserRouter>
        )
}
