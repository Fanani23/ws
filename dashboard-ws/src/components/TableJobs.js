import {MdModeEditOutline, MdDeleteOutline} from "react-icons/md";

const TableJobs = ({tableData, editRow, deleteRow}) => {
  return (
    <table className="mt-5 font-nunito-sans text-xs w-full overflow-y-scroll relative">
      <thead className="sticky top-0">
        <tr className="bg-[#F9F9FC] text-black text-left">
          <th className="py-2">ID</th>
          <th className="py-2">Jobs</th>
          <th className="py-2">Action</th>
        </tr>
      </thead>
      <tbody>
        {tableData.length > 0 &&
          tableData.map((row) => (
            <tr key={row.id} className="even:bg-[#F9F9FC] text-black">
              <td className="py-2">{row.code}</td>
              <td className="py-2">{row.name}</td>
              <td className="py-2">
                <button
                  onClick={() => {
                    editRow(row.id);
                  }}
                >
                  <MdModeEditOutline className="text-red-500 hover:text-red-800" />
                </button>
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

export default TableJobs;
