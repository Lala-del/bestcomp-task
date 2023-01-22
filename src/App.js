import { NavBar } from "./shared/NavBar";
import { Routes, Route } from "react-router-dom";
import { PeopleList } from "./PeopleList/PeopleList";
import { CreateUser } from "./CreateUser/CreateUser";
import { UpdateUser } from "./UpdateUser ";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/create-user" element={<CreateUser />}></Route>
        <Route path="/update-user/:id" element={<UpdateUser />}></Route>
        <Route path="/" element={<PeopleList />}></Route>
      </Routes>
    </>
  );
}

export default App;
