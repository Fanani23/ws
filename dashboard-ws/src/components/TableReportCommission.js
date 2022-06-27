import React from "react";

const TableReportTransaction = ({tableData}) => {
  return (
    <table className="mt-5 font-nunito-sans text-xs w-full overflow-y-scroll relative">
      <thead className="sticky top-0">
        <tr className="bg-[#F9F9FC] text-black text-left">
          <th className="py-2">Date</th>
          <th className="py-2">Employee ID</th>
          <th className="py-2">Employee Name</th>
          <th className="py-2">Category Service</th>
          <th className="py-2">Qty</th>
          <th className="py-2">Sub Total</th>
          <th className="py-2">Share</th>
          <th className="py-2">Total Fee</th>
        </tr>
      </thead>
      <tbody>
        {tableData.length > 0 &&
          tableData.map((row) => (
            <tr key={row.id} className="even:bg-[#F9F9FC] text-black">
              <td className="py-2">{row.datetime}</td>
              <td className="py-2">{row.code}</td>
              <td className="py-2">{row.employee_name}</td>
              <td className="py-2">{row.category_name}</td>
              <td className="py-2">{row.qty}</td>
              <td className="py-2">{row.price}</td>
              <td className="py-2">{row.commission_value}</td>
              <td className="py-2">{row.fee}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default TableReportTransaction