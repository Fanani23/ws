import React from "react";

const TableOrder = ({tableData, detailData}) => {
  return (
    <table className="mt-5 font-nunito-sans text-xs w-full overflow-y-scroll relative">
      <thead className="sticky top-0">
        <tr className="bg-[#F9F9FC] text-black text-left">
          <th className="py-2">No Transaction</th>
          <th className="py-2">Date</th>
          <th className="py-2">Name Member</th>
          <th className="py-2">Method</th>
          <th className="py-2">Status</th>
          <th className="py-2">Action</th>
        </tr>
      </thead>
      <tbody>
        {tableData.length > 0 &&
          tableData.map((row) => (
            <tr key={row.id} className="even:bg-[#F9F9FC] text-black">
              <td className="py-2">{row.code}</td>
              <td className="py-2">{row.datetime}</td>
              <td className="py-2">{row.customer_name}</td>
              <td className="py-2">{row.method}</td>
              <td className="py-2">{row.status.toUpperCase()}</td>
              <td className="py-2">
                <button
                  className="ml-2 px-3 py-2 bg-blue-100 hover:bg-blue-400 rounded-lg mr-2"
                  onClick={() => detailData(row.id)}
                >
                  See Detail
                </button>
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default TableOrder;
