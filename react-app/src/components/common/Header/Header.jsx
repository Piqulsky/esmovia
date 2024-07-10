import Surfer from "../Surfer/Surfer";
import "./Header.css";
import { useContext, useEffect, useState } from "react";
import { myContext } from "../../../app/context";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import CInput from "../cinput/cinput";
import { Group, Image } from "@mantine/core";

function Header() {
  //Instance of the context

  const { state, SetAuth } = useContext(myContext);
  const [decodedName, setDecodedName] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    //This follows the value of state
    if (state.auth.token !== "") {
      //I will decipher the token....
      let decoded = jwtDecode(state.auth.token);

      setDecodedName(decoded?.firstName);
    }
  }, [state]);

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    SetAuth("search", search);
  }, [search]);

  return (
    <Group spacing="xs" align="center" className="header-design">
      <Surfer path="/" destiny="Home" />
      {state.auth.token === "" ? (
        <>
          <Surfer path="/login" destiny="Login" />
          <Surfer path="/register" destiny="Register" />
        </>
      ) : (
        <>
          <Surfer path="/profile" destiny={decodedName} />
          <div onClick={() => SetAuth("token", "")}>
            <Surfer path="/" destiny="log out" />
          </div>
        </>
      )}
      <Surfer path="/admin" destiny="Admin" />
      <Surfer path="/details" destiny="Details" />
      <Surfer path="/popular" destiny="Popular" />
      <CInput
        type="text"
        name="search"
        placeholder="Search by title..."
        design="basic-input"
        emitFunction={handleSearchChange}
      />
    </Group>
  );
}

export default Header;
