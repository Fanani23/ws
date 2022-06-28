import React from "react";
import {useParams} from "react-router-dom";
import BackButton from "../components/BackButton";
import TabTitle from "../utils/GeneralFunction";

const EmployeeSingle = () => {
  TabTitle("tes");
  const {employeeId} = useParams();
  return (
    <div className="flex flex-col h-full font-noto-sans">
      <div className="relative flex flex-none">
        <BackButton />
      </div>
    </div>
  );
};

export default EmployeeSingle;
