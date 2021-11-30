import React from "react";
import "./App.css";
import { cardInfo } from "./assets/card-data";
import { data as employees } from "./assets/employees-data";
import paella from "./assets/paella.jpg";
import Card from "./components/Card";
import Employees from "./components/Employees/Employees";
import { Menu, NavLink } from "./components/Menu";

function App() {
  return (
    <div className="App">
      <Menu>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact" isActive>
          Contact
        </NavLink>
        <NavLink to="/posts">Posts</NavLink>
      </Menu>
      <Card image={paella} data={cardInfo} />
      <Employees data={employees} />
    </div>
  );
}

export default App;
