import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from '../pages/Home/Home'
import Main from '../pages/Main/Main'
import Cakeshop from '../pages/Cakeshop/Cakeshop'
import Biscuits from '../pages/Cakeshop/Biscuits/Biscuits'
import Cakes from '../pages/Cakeshop/Cakes/Cakes'
import Desserts from '../pages/Cakeshop/Desserts/Desserts'
import GalleryC from '../pages/Cakeshop/GalleryCakeshop/GalleryCakeshop'
import Bakery from '../pages/Bakery/Bakery'
import Comprehensive from '../pages/Bakery/Comprehensive/Comprehensive'
import Handcraft from '../pages/Bakery/Handcrafted/Handcafted'
import Puffpastries from '../pages/Bakery/Puffpastries/Puffpastries'
import GalleryB from '../pages/Bakery/GalleryBakery/GalleryBakery'
import Shopping from '../pages/ShoppingCart/ShoppingCart'
import DataClient from "../pages/DataClient/DataClient";
import ShowOrder from "../pages/ShowOrder/ShowOrder";


function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/main' element={<Main />}></Route>
                
                <Route path='/cakeshop' element={<Cakeshop />}></Route>
                <Route path='/bakery' element={<Bakery />}></Route>
                <Route path="/shop" element={<Shopping />}></Route>

                <Route path='/biscuits' element={<Biscuits />}></Route>
                <Route path='/cakes' element={<Cakes />}></Route>
                <Route path='/desserts' element={<Desserts />}></Route>
                <Route path='/gallery' element={<GalleryC />}></Route>

                <Route path='/comprenhensive' element={<Comprehensive />}></Route>
                <Route path='/handcraft' element={<Handcraft />}></Route>
                <Route path='/puffpastries' element={<Puffpastries />}></Route>
                <Route path='/gallery' element={<GalleryB />}></Route>


               <Route path='/biscuits/:id' element={<Biscuits />}></Route>
                <Route path='/cakes/:id' element={<Cakes />}></Route>
                <Route path='/desserts/:id' element={<Desserts />}></Route>
                <Route path='/gallery/:id' element={<GalleryC/>}></Route>

                <Route path="/shop/:id" element={<Shopping />}></Route>
              
                <Route path='/form' element={<DataClient/>}></Route>
                <Route path='/showorder' element={<ShowOrder/>}></Route>
            </Routes>
        </BrowserRouter>
    )
};

export default AppRoutes;