import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from './components/Pages/Home/Home';
import Dashboard from './components/Pages/Hotel/AdminPage/Dashboard/Dashboard'
import HotelSidebar from './components/Pages/Hotel/HotelSidebar';
import RoomBooking from './components/Pages/Hotel/AdminPage/RoomBooking/RoomBooking';
import RoomService from './components/Pages/Hotel/AdminPage/RoomService/RoomService';
import Billing from './components/Pages/Hotel/AdminPage/Billing/Billing';
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
import EditResBilling from "./components/Pages/Restaurent/Res-Billing/EditResBilling";
import Login from "./login/Login";
import EditRoomService from "./components/Pages/Hotel/AdminPage/RoomService/EditRoomService";
import EditRoomBooking from "./components/Pages/Hotel/AdminPage/RoomBooking/EditRoomBooking";
import RoomCategory from "./components/Pages/MainAdmin/Rooms/RoomCategory/RoomCategory";
import RoomCategoryList from "./components/Pages/MainAdmin/Rooms/RoomCategory/RoomCategoryList";
import EditRoomCategory from "./components/Pages/MainAdmin/Rooms/RoomCategory/EditRoomCategory";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check if the user is logged in (e.g., by checking a token in local storage)
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token); 
  }, []);

  // Higher-order component for protected routes
  const PrivateRoute = ({ children }) => {
    return isLoggedIn ? children : <Navigate to="/login" />;
  };

  return (
    <>
      <ToastContainer position="top-center" />
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<PrivateRoute><Home /></PrivateRoute>} />
          <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/hotel-dashboard" element={<PrivateRoute><HotelSidebar><Dashboard /></HotelSidebar></PrivateRoute>} />
          <Route path="/roombooking" element={<PrivateRoute><RoomBooking /> </PrivateRoute>} />
          <Route path="/Editroombooking/:id" element={<PrivateRoute><EditRoomBooking /> </PrivateRoute>} />
          <Route path="/roomlist" element={<PrivateRoute><HotelSidebar><BookingList /></HotelSidebar></PrivateRoute>} />
          <Route path="/room-service-lists" element={<PrivateRoute><HotelSidebar><ServiceList /></HotelSidebar></PrivateRoute>} />
          <Route path="/rooms" element={<PrivateRoute><HotelSidebar><Rooms /></HotelSidebar></PrivateRoute>} />
          <Route path="/billing" element={<PrivateRoute><Billing /></PrivateRoute>} />
          <Route path="/roomservice" element={<PrivateRoute><HotelSidebar><RoomService /></HotelSidebar></PrivateRoute>} />
          <Route path="/EditRoomService/:id" element={<PrivateRoute><HotelSidebar><EditRoomService /></HotelSidebar></PrivateRoute>} />

          <Route path="/restaurent-dashboard" element={<PrivateRoute><RestaurentSidebar><ResDashboard /></RestaurentSidebar></PrivateRoute>} />
          <Route path="/order" element={<PrivateRoute><RestaurentSidebar><Order /></RestaurentSidebar></PrivateRoute>} />
          <Route path="/res-items" element={<PrivateRoute><RestaurentSidebar><ItemsForm /></RestaurentSidebar></PrivateRoute>} />
          <Route path="/EditResBilling/:id" element={<PrivateRoute><RestaurentSidebar><EditResBilling /></RestaurentSidebar></PrivateRoute>} />
          <Route path="/res-billing" element={<PrivateRoute><RestaurentSidebar><ResBilling /></RestaurentSidebar></PrivateRoute>} />
          <Route path="/KOT" element={<PrivateRoute><RestaurentSidebar><Kot /></RestaurentSidebar></PrivateRoute>} />
          <Route path="/KOT/:orderId" element={<PrivateRoute><RestaurentSidebar><Kot /></RestaurentSidebar></PrivateRoute>} />
          <Route path="/BILL" element={<PrivateRoute><RestaurentSidebar><Bill /></RestaurentSidebar></PrivateRoute>} />
          <Route path="/bill/:orderId" element={<PrivateRoute><RestaurentSidebar><Bill /></RestaurentSidebar></PrivateRoute>} />
          <Route path="/main-admin-dashboard" element={<PrivateRoute><MainAdminSidebar><AdminDashboard /></MainAdminSidebar></PrivateRoute>} />
          <Route path="/items" element={<PrivateRoute><MainAdminSidebar><Item /></MainAdminSidebar></PrivateRoute>} />
          <Route path="/item-list" element={<PrivateRoute><MainAdminSidebar><ItemList /></MainAdminSidebar></PrivateRoute>} />
          <Route path="/edititem/:id" element={<PrivateRoute><MainAdminSidebar><Edititem /></MainAdminSidebar></PrivateRoute>} />
          <Route path="/add-rooms" element={<PrivateRoute><MainAdminSidebar><Room /></MainAdminSidebar></PrivateRoute>} />
          <Route path="/room-list" element={<PrivateRoute><MainAdminSidebar><RoomList /></MainAdminSidebar></PrivateRoute>} />
          <Route path="/roomEdit/:id" element={<PrivateRoute><MainAdminSidebar><RoomEdit /></MainAdminSidebar></PrivateRoute>} />
          <Route path="/services" element={<PrivateRoute><MainAdminSidebar><AddService /></MainAdminSidebar></PrivateRoute>} />
          <Route path="/service-list" element={<PrivateRoute><MainAdminSidebar><ServicesList /></MainAdminSidebar></PrivateRoute>} />
          <Route path="/serviceEdit/:id" element={<PrivateRoute><MainAdminSidebar><ServiceEdit /></MainAdminSidebar></PrivateRoute>} />
          <Route path="/employees" element={<PrivateRoute><MainAdminSidebar><Employees /></MainAdminSidebar></PrivateRoute>} />
          <Route path="/EditEmp/:id" element={<PrivateRoute><MainAdminSidebar><EditEmployee /></MainAdminSidebar></PrivateRoute>} />
          <Route path="/employee-list" element={<PrivateRoute><MainAdminSidebar><EmployeesList /></MainAdminSidebar></PrivateRoute>} />
          <Route path="/add-guest" element={<PrivateRoute><MainAdminSidebar><Guest /></MainAdminSidebar></PrivateRoute>} />
          <Route path="/guest/:id" element={<PrivateRoute><MainAdminSidebar><EditGuest /></MainAdminSidebar></PrivateRoute>} />
          <Route path="/guest-list" element={<PrivateRoute><MainAdminSidebar><GuestList /></MainAdminSidebar></PrivateRoute>} />
          <Route path="/view/:id" element={<PrivateRoute><MainAdminSidebar><GuestList /></MainAdminSidebar></PrivateRoute>} />
          <Route path="/add-category" element={<PrivateRoute><MainAdminSidebar><AddCategoryForm /></MainAdminSidebar></PrivateRoute>} />
          <Route path="/list-category" element={<PrivateRoute><MainAdminSidebar><ListCategory /></MainAdminSidebar></PrivateRoute>} />
          <Route path="/Editcategory/:id" element={<PrivateRoute><MainAdminSidebar><EditCategory /></MainAdminSidebar></PrivateRoute>} />
          <Route path="/seeallcategory" element={<PrivateRoute><MainAdminSidebar><SeeAllCategory /></MainAdminSidebar></PrivateRoute>} />

          <Route path="/room-category" element={<PrivateRoute><MainAdminSidebar><RoomCategory /></MainAdminSidebar></PrivateRoute>} />
          <Route path="/room-category-list" element={<PrivateRoute><MainAdminSidebar><RoomCategoryList /></MainAdminSidebar></PrivateRoute>} />
          <Route path="/Editroomcategory/:id" element={<PrivateRoute><MainAdminSidebar><EditRoomCategory /></MainAdminSidebar></PrivateRoute>} />
        </Routes>
    </>
  );
}

export default App;
