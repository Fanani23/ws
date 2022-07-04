import {MdModeEditOutline, MdDeleteOutline} from "react-icons/md";
import { Link } from "react-router-dom";

const TableCustomers = ({tableData, detailData, editRow, deleteRow}) => {
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
          <th className="py-2">Customers Id</th>
          <th className="py-2">Birthday</th>
          <th className="py-2">Name</th>
          <th className="py-2">Phone Number</th>
          <th className="py-2">Membership</th>
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
              <td className="py-2">{row.birthday}</td>
              <td className="py-2">{row.name}</td>
              <td className="py-2">{row.phone}</td>
              <td className="py-2">
                {row.membership === "vip"
                  ? row.membership.toUpperCase()
                  : capitalizeEachWord(row.membership)}
              </td>
              <td className="py-2">
                <button
                  onClick={() => {
                    editRow(row.id);
                  }}
                >
                  <MdModeEditOutline className="text-red-500 hover:text-red-800" />
                </button>
                <button onClick={() => deleteRow(row.id)}>
                  <MdDeleteOutline className="ml-2 text-red-500 hover:text-red-800" />
                </button>
                <button onClick={() => detailData(row.id)} className="ml-2 px-3 py-2 bg-blue-100 hover:bg-blue-400 rounded-lg mr-2">
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
