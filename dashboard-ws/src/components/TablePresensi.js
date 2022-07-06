import {MdDeleteOutline} from "react-icons/md";

const TablePresensi = ({
  tableData,
  detailData,
  deleteRow,
  setActiveEmployeeName,
}) => {
  return (
    <table className="mt-5 font-nunito-sans text-xs w-full overflow-y-scroll relative">
      <thead className="sticky top-0">
        <tr className="bg-[#F9F9FC] text-black text-left">
          <th className="py-2">Employee Name</th>
          <th className="py-2">Shift</th>
          <th className="py-2">Status</th>
          <th className="py-2">Coming Time</th>
          <th className="py-2">Return Time</th>
          <th className="py-2">Action</th>
        </tr>
      </thead>
      <tbody>
        {tableData.length > 0 &&
          tableData.map((row) => (
            <tr key={row.id} className="even:bg-[#F9F9FC] text-black">
              <td className="py-2">{row.employee_name}</td>
              <td className="py-2">{row.shift}</td>
              <td className="py-2">{row.status}</td>
              <td className="py-2">{row.coming_time}</td>
              <td className="py-2">{row.return_time}</td>
              <td className="py-2">
                <button onClick={() => deleteRow(row.id)}>
                  <MdDeleteOutline className="text-red-500 hover:text-red-800" />
                </button>
                <button
                  className="ml-2 px-3 py-2 bg-blue-100 hover:bg-blue-400 rounded-lg mr-2"
                  key={row.id}
                  onClick={() => {
                    detailData(row.employee_id);
                    setActiveEmployeeName(row.employee_name);
                  }}
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

export default TablePresensi;
