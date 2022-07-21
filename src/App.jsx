import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddDeves from "./components/Admin/AddDeves";
import Admin from "./components/Admin/Admin";
import Edit from "./components/Admin/Edit/Edit";
import Menu from "./components/Layouts/Menu/Menu";
import Profile from "./components/Team/Profile/Profile";
import Team from './components/Team/Team'




function App() {
  return (
   <>
   <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={ <Team></Team> } />
        <Route path="/Profile/:username" element={ <Profile></Profile> } />
        <Route path="/Admin" element={ <Admin></Admin> } />
        <Route path="/AddDeves" element={ <AddDeves></AddDeves> } />
        <Route path="/Edit/:id" element={ <Edit></Edit> } />
      </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
