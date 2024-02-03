import React from "react";

const EmployeeDetails = () => {
  return (
    <div className=" w-full my-5 flex flex-col justify-center items-center gap-5">
      <h1 className="uppercase text-2xl font-bold text-[#3B404F]">
        Employee Details
      </h1>

      <table className=" w-[80%] text-center">
        <thead>
          <tr className="bg-[#215895] text-white font-semibold py-2 ">
            <th className="border-l-2 border-[#D9D9D9]">Code</th>
            <th className="border-l-2 border-[#D9D9D9]">Name</th>
            <th className="border-l-2 border-[#D9D9D9]">Designation</th>
            <th className="border-l-2 border-[#D9D9D9]">Contact Details</th>
            <th className="border-l-2 border-[#D9D9D9]">Work Profile</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-[#F5F5F5]">
            <td className="border-l-2 border-[#D9D9D9]">Alfreds Futterkiste</td>
            <td className="border-l-2 border-[#D9D9D9]">Maria Anders</td>
            <td className="border-l-2 border-[#D9D9D9]">Germany</td>
            <td className="border-l-2 border-[#D9D9D9]">Centro </td>
            <td className="border-l-2 border-[#D9D9D9]">Francisco Chang</td>
          </tr>
          <tr className="bg-[#DBE6F2]">
            <td>Alfreds Futterkiste</td>
            <td>Maria Anders</td>
            <td>Germany</td>
            <td>Centro </td>
            <td>Francisco Chang</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeDetails;
