import {MdDeleteOutline} from "react-icons/md";

const TablePresensi = ({tableData, deleteRow}) => {
  return (
    <table className="mt-5 font-nunito-sans text-xs w-full overflow-y-scroll relative">
      <thead className="sticky top-0">
        <tr className="bg-[#F9F9FC] text-black text-left">
          <th className="py-2">Employee ID</th>
          <th className="py-2">Coming Time</th>
          <th className="py-2">Return Time</th>
        </tr>
      </thead>
      <tbody>
        {tableData.length > 0 &&
          tableData.map((row) => (
            <tr key={row.id} className="even:bg-[#F9F9FC] text-black">
              <td className="py-2">{row.employee_name}</td>
              <td className="py-2">{row.coming_time}</td>
              <td className="py-2">{row.return_time}</td>
              <td className="py-2">
                <button onClick={() => deleteRow(row.id)}>
                  <MdDeleteOutline className="text-red-500 hover:text-red-800" />
                </button>
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default TablePresensi;