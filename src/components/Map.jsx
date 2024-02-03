import React, { useContext } from "react";
import { Context } from "../context/Context";

const MapComponent = () => {
  const { area, setArea } = useContext(Context);


  const mapSrc = `https://maps.google.com/maps?q=2880%20Broadway,${area}&t=&z=13&ie=UTF8&iwloc=&output=embed`;

  return (
    <div></div>
  );
};

export default MapComponent;
