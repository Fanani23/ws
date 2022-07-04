import DropdownMenuExport from "../components/DropdownMenuExport";

const PresensiDetail = ({detailPresensi, employeeName}) => {
  return (
    <div className="flex flex-col h-full font-noto-sans">
      <div className="bg-white rounded-lg overflow-hidden flex h-full flex-col">
        <div className="px-5 py-3">
          <div className="flex flex-row justify-between">
            <div className="flex flex-col">
              <h1 className="text-black font-bold text-lg mt-1 mb-2 mr-20">
                {employeeName}
              </h1>
              <h5 className="text-black text-lg">
                Total Presensi: {detailPresensi.count}
              </h5>
            </div>
            <div className="flex flex-row">
              <DropdownMenuExport />
            </div>
          </div>
          <table className="mt-5 font-nunito-sans text-xs w-full overflow-y-scroll relative">
            <thead className="sticky top-0">
              <tr className="bg-[#F9F9FC] text-black text-left">
                <th className="py-2">Employee Name</th>
                <th className="py-2">Coming Time</th>
                <th className="py-2">Return Time</th>
              </tr>
            </thead>
            <tbody>
              {detailPresensi.data.length > 0 &&
                detailPresensi.data.map((row) => (
                  <tr key={row.id} className="even:bg-[#F9F9FC] text-black">
                    <td className="py-2">{row.employee_name}</td>
                    <td className="py-2">{row.coming_time}</td>
                    <td className="py-2">{row.return_time}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PresensiDetail;
