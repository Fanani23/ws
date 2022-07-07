import React from "react";

const TableEmployeeSingle = ({tableData}) => {

    const capitalizeEachWord = (sentence) => {
        const words = sentence.split(" ");
        for (let i = 0; i < words.length; i++) {
          words[i] = words[i][0].toUpperCase() + words[i].substr(1);
        }
    
        return words.join(" ");
      };
      
  return (
    <table className="mt-5 font-nunito-sans text-xs w-full overflow-y-scroll relative">
      <thead className="sticky top-0">
        <tr className="bg-[#F9F9FC] text-black text-left">
          <th className="py-2">Date</th>
          <th className="py-2">Transaction ID</th>
          <th className="py-2">Product Name</th>
          <th className="py-2">Price</th>
          <th className="py-2">Commission</th>
          <th className="py-2">Commission Type</th>
          <th className="py-2">Total Fee</th>
        </tr>
      </thead>
      <tbody>
        {tableData.length > 0 &&
          tableData.map((row) => (
            <tr key={row.id} className="even:bg-[#F9F9FC] text-black">
              <td className="py-2">{row.datetime}</td>
              <td className="py-2">{row.code}</td>
              <td className="py-2">{row.product_name}</td>
              <td className="py-2">{row.price}</td>
              <td className="py-2">{row.commission_value}</td>
              <td className="py-2">{capitalizeEachWord(row.commission_type)}</td>
              <td className="py-2">{row.fee}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default TableEmployeeSingle;
