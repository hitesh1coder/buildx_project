import React from "react";
import EmployeeData from "../../Data/EmployeeData";

const EmployeeDetails = () => {
  return (
    <div className=" w-full my-5 flex flex-col justify-center items-center gap-5">
      <h1 className="uppercase text-2xl font-bold text-[#3B404F]">
        Employee Details
      </h1>

      <table className=" w-[80%] text-center">
        <thead>
          <tr className="bg-[#215895] text-white font-semibold">
            <th className="border-l-2 p-3 border-[#D9D9D9]">Code</th>
            <th className="border-l-2 p-3 border-[#D9D9D9]">Name</th>
            <th className="border-l-2 p-3 border-[#D9D9D9]">Designation</th>
            <th className="border-l-2 p-3 border-[#D9D9D9]">Contact Details</th>
            <th className="border-l-2 p-3 border-[#D9D9D9]">Work Profile</th>
          </tr>
        </thead>
        <tbody>
          {EmployeeData?.map((emp, i) => (
            <tr className={`${i % 2 === 0 ? "bg-[#F5F5F5]" : "bg-[#DBE6F2]"} `}>
              <td className="border-l-2 text-sm font-semibold p-2 border-[#D9D9D9]">
                {emp.code}
              </td>
              <td className="border-l-2 text-sm font-semibold p-2 border-[#D9D9D9]">
                {emp.name}
              </td>
              <td className="border-l-2 text-sm font-semibold p-2 border-[#D9D9D9]">
                {emp.designation}
              </td>
              <td className="border-l-2 text-sm font-semibold p-2 border-[#D9D9D9]">
                {emp.contact}{" "}
              </td>
              <td className="border-l-2 text-sm font-semibold p-2 border-[#D9D9D9]">
                {emp.workProfile}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeDetails;
