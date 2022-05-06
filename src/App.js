
import './App.css';
import {
  Routes,
  Route,
  useNavigate
} from "react-router-dom";
import Main from './pages/Main'
import Post from './pages/Posts'
import ManagePost from './pages/ManagePost'
import Approves from './pages/Approves'
import Userlist from './pages/UserList'
import Addcategories from './pages/AddCategories'
import EditCategory from './pages/EditCategory'
import ViewCategories from './pages/ViewCategories'
import Complaints from './pages/complain'
import ResolveComplain from './pages/Resolve'
import PendingComplain from './pages/Pending'
import Suggestions from './pages/suggestion'
import Loginn from './pages/Login'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getUsers } from './actions/user';
function App() {

  let history = useNavigate()
  const {authData} =  useSelector(state => state.authData)
  let loggedin
   {authData  ?  loggedin = authData : loggedin = ""}


 const [User , setUser ] = useState(loggedin)
  




  return (
    <>
    <Routes>
      <Route path="/" element={<Loginn User={User}/>} />
      <Route path="/Main" element={<Main />} />
      <Route path="/ManagePost" element={<ManagePost />} />
      <Route path="/Post" element={<Post />} />
      <Route path="/Approves" element={<Approves />} />
      <Route path="/Userlist" element={<Userlist />} />
      <Route path="/AddCategories" element={<Addcategories />} />
      <Route path="/editCategories" element={<EditCategory />} />
      <Route path="/ViewCategories" element={<ViewCategories />} />
      <Route path="/Complain" element={<Complaints />} />
      <Route path="/ResolveComplain" element={<ResolveComplain />} />
      <Route path="/PendingComplain" element={<PendingComplain />} />
      <Route path="/Suggestion" element={<Suggestions />} />
    </Routes>
    </>
  );
}

export default App;
