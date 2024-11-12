import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Login from '../pages/Login'
import Cart from '../pages/Cart'
import ShopDetails from '../pages/ShopDetails'
import DigitOffset from '../pages/Services/DigitOffset'
import DocumentScan from '../pages/Services/DocumentScan'
import Photography from '../pages/Services/Photography'
import PhotoRestoration from '../pages/Services/PhotoRestoration'
import ChurchDirectory from '../pages/Services/ChurchDirectory'
import Signs from '../pages/Services/Signs'
import WebDesigning from '../pages/Services/WebDesigning'
import Flyers from '../pages/Services/Flyers'
import EventJournal from '../pages/Services/EventJournal'
import FAQ from '../pages/FAQ'
import MemorialFuneral from '../pages/MemorialFuneral'
import { navItems } from '../components/Header/Menu/NavItems'
import Register from '../pages/Register'
import MyOrders from '../pages/MyOrders'
import AdminLogin from '../pages/Admin/AdminLogin'
import Dashboard from '../pages/Admin/Dashboard'
import CategoryPricing from '../pages/Admin/CategoryPricing'
import SubCategoyPrice from '../pages/Admin/SubCategoyPrice'


function RoutesConfig () {
  const memorialSubmenu = navItems.find(item => item.title === 'Memorial/Funeral')?.submenu || [];
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/MemorialFuneral' element={<MemorialFuneral />} />
      <Route path='/shopdetails/:id?' element={<ShopDetails/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/login/:id?' element={<Login/>} />
      <Route path='/register/:id?' element={<Register/>} />
      <Route path='/cart' element={<Cart/>} />
      <Route path='/myorders' element={<MyOrders/>} />
      <Route path='/digitaloffset' element={<DigitOffset/>} />
      <Route path='/documentscan' element={<DocumentScan/>} />
      <Route path='/photography' element={<Photography/>} />
      <Route path='/photo-restoration' element={<PhotoRestoration/>} />
      <Route path='/church-directory' element={<ChurchDirectory/>} />
      <Route path='/signs' element={<Signs/>} />
      <Route path='/website-designing' element={<WebDesigning/>} />
      <Route path='/flyers' element={<Flyers/>} />
      <Route path='/event-journal' element={<EventJournal/>} />
      <Route path='/faq' element={<FAQ/>} />
      {memorialSubmenu.map(item => (
        <Route
          key={item.id}
          path={item.path}
          element={<MemorialFuneral title={item.title} additionalName={item.additionalName} />}
        />
      ))}

      {/* Admin Page Routing */}
      <Route path='/admin' element={<AdminLogin />} />
      <Route path='/admin/dashboard' element={<Dashboard />} />
      <Route path='/admin/category_pricing' element={<CategoryPricing />} />
      <Route path='/admin/sub_category_pricing' element={<SubCategoyPrice />} />
    
    </Routes>
  )
}

export default RoutesConfig
