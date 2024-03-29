import "./Recommend.css";
import React from "react";
import { useLocation } from "react-router-dom";
import BackHeader from "../../components/Header/BackHeader";
import StationPath from "../../components/StationPath/StationPath";
import CarRank from "../../components/CarRank/CarRank";

function Recommend() {
  const location = useLocation();
  const query = new URLSearchParams(location.search);

  const startStation = query.get("startStation");
  const endStation = query.get("endStation");

  return (
    <div className="Recommend">
      <BackHeader />
      <StationPath startStation={startStation} endStation={endStation} />
      <CarRank startStation={startStation} endStation={endStation} />
    </div>
  );
}

export default Recommend;
