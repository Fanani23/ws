
const TableLoglogin = ({tableData}) => {
  return (
    <table className="mt-5 font-nunito-sans text-xs w-full overflow-y-scroll relative">
      <thead className="sticky top-0">
        <tr className="bg-[#F9F9FC] text-black text-left">
          <th className="py-2">Date & Time</th>
          <th className="py-2">Username</th>
        </tr>
      </thead>
      <tbody>
        {tableData.length > 0 &&
          tableData.map((row) => (
            <tr key={row.id} className="even:bg-[#F9F9FC] text-black">
              <td className="py-2">{row.datetime}</td>
              <td className="py-2">{row.admin_name}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default TableLoglogin;