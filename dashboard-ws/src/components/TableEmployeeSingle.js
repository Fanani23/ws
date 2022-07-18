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
    <table className="font-nunito-sans text-xs w-full overflow-y-scroll relative">
      <thead className="sticky top-0">
        <tr className="bg-[#F9F9FC] text-black text-left">
          <th className="py-2 whitespace-nowrap">Date</th>
          <th className="py-2 whitespace-nowrap">Transaction ID</th>
          <th className="py-2 whitespace-nowrap">Product Name</th>
          <th className="py-2 whitespace-nowrap">Price</th>
          <th className="py-2 whitespace-nowrap">Commission</th>
          <th className="py-2 whitespace-nowrap">Commission Type</th>
          <th className="py-2 whitespace-nowrap">Total Fee</th>
        </tr>
      </thead>
      <tbody>
        {tableData.length > 0 &&
          tableData.map((row) => (
            <tr key={row.id} className="even:bg-[#F9F9FC] text-black">
              <td className="py-2 whitespace-nowrap">{row.datetime}</td>
              <td className="py-2 whitespace-nowrap">{row.code}</td>
              <td className="py-2 whitespace-nowrap">{row.product_name}</td>
              <td className="py-2 whitespace-nowrap">{row.price}</td>
              <td className="py-2 whitespace-nowrap">{row.commission_value}</td>
              <td className="py-2 whitespace-nowrap">
                {capitalizeEachWord(row.commission_type)}
              </td>
              <td className="py-2 whitespace-nowrap">{row.fee}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default TableEmployeeSingle;
