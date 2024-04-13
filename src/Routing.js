import React from "react";
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import MainPage from "./pages/MainPage";
import FeedBacksAll from "./pages/FeedBacksAll";
import NotFound from "./pages/NotFound";


export default function Routing() {
        return(
            <BrowserRouter>
                <Routes>
                    {/* Роут на основную страницу */}
                    <Route path="/" element={<MainPage/>} />

                    {/* Роут на отзовы */}
                    <Route path="/feedbaks" element={<FeedBacksAll/>} />

                    {/* Роут не суествующую страницу */}
                    <Route path='*' element={<NotFound/>} />
                </Routes>
            </BrowserRouter>
        )
}
