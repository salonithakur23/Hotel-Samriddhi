
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Pages/Home/Home';
import Dashboard from './components/Pages/Hotel/AdminPage/Dashboard/Dashboard'
import HotelSidebar from './components/Pages/Hotel/HotelSidebar';
import RoomBooking from './components/Pages/Hotel/AdminPage/RoomBooking/RoomBooking';
import RoomService from './components/Pages/Hotel/AdminPage/RoomService/RoomService';
import Billing from './components/Pages/Hotel/AdminPage/Billing/Billing';
import Header from "./components/Header/Header";
import BookingList from "./components/Pages/Hotel/AdminPage/RoomBooking/BookingList";
import ServiceList from "./components/Pages/Hotel/AdminPage/RoomService/ServiceList";
import MainAdminSidebar from "./components/Pages/MainAdmin/MainAdminSidebar/MainAdminSidebar";
import AdminDashboard from "./components/Pages/MainAdmin/Dashboard/Dashboard";
import Item from "./components/Pages/MainAdmin/Item/Items";
import Edititem from "./components/Pages/MainAdmin/Item/EditItem";
import ItemList from "./components/Pages/MainAdmin/Item/ItemList";
import Room from "./components/Pages/MainAdmin/Rooms/Rooms";
import RoomList from "./components/Pages/MainAdmin/Rooms/RoomList";
import AddService from "./components/Pages/MainAdmin/AddService/AddService";
import ServicesList from "./components/Pages/MainAdmin/AddService/ServicesList";
import Employees from "./components/Pages/MainAdmin/Employees/Employees";
import EmployeesList from "./components/Pages/MainAdmin/Employees/EmployeesList";
import Guest from "./components/Pages/MainAdmin/GuestInformation/Guest";
import GuestList from "./components/Pages/MainAdmin/GuestInformation/GuestList";
import ResDashboard from "./components/Pages/Restaurent/ResDashboard/ResDashboard";
import RestaurentSidebar from "./components/Pages/Restaurent/RestaurentSidebar";
import Rooms from "./components/Pages/Hotel/AdminPage/Rooms/Rooms";
import EditGuest from "./components/Pages/MainAdmin/GuestInformation/EditGuest";
import ResBilling from './components/Pages/Restaurent/Res-Billing/ResBilling'
import Order from "./components/Pages/Restaurent/Order/Order";
import Kot from "./components/Pages/Restaurent/KOT/Kot";
import Bill from "./components/Pages/Restaurent/Bill/Bill";
import ItemsForm from "./components/Pages/Restaurent/Items/ItemsForm";
import ServiceEdit from "./components/Pages/MainAdmin/AddService/ServiceEdit";
import { ToastContainer } from "react-toastify";
import RoomEdit from "./components/Pages/MainAdmin/Rooms/RoomEdit";
import AddCategoryForm from "./components/Pages/MainAdmin/AddCategory/AddCategoryForm";
import EditCategory from "./components/Pages/MainAdmin/AddCategory/EditCategory";
import ListCategory from "./components/Pages/MainAdmin/AddCategory/ListCategory";
import SeeAllCategory from "./components/Pages/MainAdmin/AddCategory/SeeAllCategory/SeeAllCategory";
import EditEmployee from "./components/Pages/MainAdmin/Employees/EditEmployee";


function App() {

  return (
    <>
      <Header />
      <ToastContainer position="top-center" />
      <Routes>

        <Route>
          <Route path='/' element={<Home />} />
          {/* hotel  sidebar routing start*/}
          <Route path="hotel-dashboard" element={<HotelSidebar><Dashboard /></HotelSidebar>} />
          <Route path='/roombooking' element={<RoomBooking />} />
          <Route path='/booking/:id' element={<RoomBooking />} />
          <Route path='/roomlist' element={<HotelSidebar><BookingList /></HotelSidebar>} />
          <Route path="/room-service-lists" element={<HotelSidebar><ServiceList /></HotelSidebar>} />
          <Route path='/rooms' element={<HotelSidebar><Rooms /></HotelSidebar>} />
          <Route path='/billing' element={<Billing />} />
          <Route path='/roomservice' element={<HotelSidebar><RoomService /></HotelSidebar>} />
          {/* hotel  sidebar routing end*/}


          {/* Restaurent  sidebar routing start*/}
          <Route path="/restaurent-dashboard" element={<RestaurentSidebar><ResDashboard /></RestaurentSidebar>} />
          <Route path="/order" element={<RestaurentSidebar><Order /></RestaurentSidebar>} />
          <Route path="/res-items" element={<RestaurentSidebar><ItemsForm /></RestaurentSidebar>} />
          <Route path="/res-billing" element={<RestaurentSidebar><ResBilling /></RestaurentSidebar>} />
          <Route path="/KOT" element={<RestaurentSidebar><Kot /></RestaurentSidebar>} />
          <Route path="/BILL" element={<RestaurentSidebar><Bill /></RestaurentSidebar>} />
          {/* Restaurent  sidebar routing end*/}



          {/* Admin  sidebar routing start*/}
          <Route path="/main-admin-dashboard" element={<MainAdminSidebar><AdminDashboard /></MainAdminSidebar>} />
          <Route path="/items" element={<MainAdminSidebar><Item /></MainAdminSidebar>} />
          <Route path="/item-list" element={<MainAdminSidebar><ItemList /></MainAdminSidebar>} />
          <Route path="/edititem/:id" element={<MainAdminSidebar><Edititem /></MainAdminSidebar>} />
          <Route path="/add-rooms" element={<MainAdminSidebar><Room /></MainAdminSidebar>} />
          <Route path="/room-list" element={<MainAdminSidebar><RoomList /></MainAdminSidebar>} />
          <Route path="/roomEdit/:id" element={<MainAdminSidebar><RoomEdit /></MainAdminSidebar>} />
          <Route path="/services" element={<MainAdminSidebar><AddService /></MainAdminSidebar>} />
          <Route path="/service-list" element={<MainAdminSidebar><ServicesList /></MainAdminSidebar>} />
          <Route path="/serviceEdit/:id" element={<MainAdminSidebar><ServiceEdit /></MainAdminSidebar>} />
          <Route path="/employees" element={<MainAdminSidebar><Employees /></MainAdminSidebar>} />
          <Route path="/employee-list" element={<MainAdminSidebar><EmployeesList /></MainAdminSidebar>} />
          <Route path="/EditEmp/:id" element={<MainAdminSidebar><EditEmployee /></MainAdminSidebar>} />
          <Route path="/add-guest" element={<MainAdminSidebar><Guest /></MainAdminSidebar>} />
          <Route path="/guest/:id" element={<MainAdminSidebar><EditGuest /></MainAdminSidebar>} />
          <Route path="/guest-list" element={<MainAdminSidebar><GuestList /></MainAdminSidebar>} />
          <Route path="/view/:id" element={<MainAdminSidebar><GuestList /></MainAdminSidebar>} /> 
          <Route path="/add-category" element={<MainAdminSidebar><AddCategoryForm /></MainAdminSidebar>} /> 
          <Route path="/list-category" element={<MainAdminSidebar><ListCategory /></MainAdminSidebar>} /> 
          <Route path="/Editcategory/:id" element={<MainAdminSidebar><EditCategory /></MainAdminSidebar>} /> 
          <Route path="/seeallcategory" element={<MainAdminSidebar><SeeAllCategory /></MainAdminSidebar>} /> 
          {/* Admin  sidebar routing end*/}
        </Route>
      </Routes>
    </>
  );
}

export default App;
