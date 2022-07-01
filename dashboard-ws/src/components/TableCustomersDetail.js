import {MdModeEditOutline, MdDeleteOutline} from "react-icons/md";
import { Link } from "react-router-dom";

const TableCustomersDetail = ({tableData}) => {
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
            <tr className="bg-[#F9F9FC] text-black text-left">
              <td className="py-2">{}</td>
              <td className="py-2">{}</td>
              <td className="py-2">{}</td>
              <td className="py-2">
                <Link to={`${row.id}`}>
                    <button className="px-3 py-2 bg-blue-100 hover:bg-blue-400 rounded-lg mr-2">
                        See Detail
                    </button>
                </Link>
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default TableCustomersDetail;
