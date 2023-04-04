import React from "react";
import Address from "./Components/Profile/Adresse";
import ProfilePhoto from "./Components/Profile/ProfilePhoto";
import FullName from "./Components/Profile/FullName";

function App() {
  return (
   <div>
    <ProfilePhoto/>
    <FullName/>
    <Address/>
   </div>
  );
}

export default App;
