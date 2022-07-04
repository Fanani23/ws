import {MdModeEditOutline, MdDeleteOutline} from "react-icons/md";
import { Link } from "react-router-dom";

const TableCustomers = ({tableData, detailTransactionData}) => {
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
          <th className="py-2">Transaction ID</th>
          <th className="py-2">Date</th>
          <th className="py-2">Total</th>
          <th className="py-2">Action</th>
        </tr>
      </thead>
      <tbody>
        {tableData.length > 0 &&
          tableData.map((row) => (
            <tr
              key={row.id}
              className="even:bg-[#F9F9FC] text-black"
            >
              <td className="py-2">{row.code}</td>
              <td className="py-2">{row.datetime}</td>
              <td className="py-2">{row.grand_total}</td>
              <td className="py-2">
                <button onClick={() => detailTransactionData(row.id)} className="ml-2 px-3 py-2 bg-blue-100 hover:bg-blue-400 rounded-lg mr-2">
                  See Detail
                </button>
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default TableCustomers;
