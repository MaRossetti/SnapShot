import React, {useState} from "react";
import Form from "./Form";
import Navigation from "./Navigation";

const Header = ({ history, handleSubmit }) => {

  const [searchEntry, setSearchEntry] = useState("");

  const updateSearchInput = e => {
      setSearchEntry(e.target.value);
    };

  return (
    <div>
      <h1>SnapShot</h1>
      <Form  history={history} handleSubmit={handleSubmit} updateSearchInput={updateSearchInput} searchEntry={searchEntry} />
      <Navigation setSearchEntry={setSearchEntry} />
    </div>
  );
};

export default Header;
