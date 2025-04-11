import React from 'react';
import { Routes, Route } from "react-router-dom";
import SignIn from "./auth/signin";
import Dashboard from './dashboard/dashboardm';
import EmployeeSignIn from './auth/empsignin';
import ForgetPin from './auth/forget';
import OrderQueue from './order/orderque';
import AllOrder from './order/order';
import ResetPin from './auth/reset';
import SetNewPin from './auth/newpin';
import SuccessScreen from './auth/success'
import CoffeeShop from './inventory/dashboard';
import TransactionDashboard from './transaction/dashboard'; 
import SettingDashboard from './settings/dashboard';
import TableManagement from './table/dashboard';

function App() {
  return (
    <>
      <title>
        AFOHS
      </title>
      <Routes>
        <Route path="/" element={<SignIn/>} />
        <Route path="/forget-pin" element={<ForgetPin/>} />
        <Route path="/employee/sign/in" element={<EmployeeSignIn/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/order/queue" element={<OrderQueue/>} />
        <Route path="/all/order" element={<AllOrder/>} />
        <Route path="/reset/pin" element={<ResetPin/>} />
        <Route path="/set/new/pin" element={<SetNewPin/>} />
        <Route path="/success" element={<SuccessScreen/>} />
        <Route path="/inventory" element={<CoffeeShop/>} />
        <Route path="/transaction" element={<TransactionDashboard/>} />
        <Route path="/settings" element={<SettingDashboard/>} />
        <Route path="/table/management" element={<TableManagement/>} />
      </Routes>
    </>
  );
}

export default App;
