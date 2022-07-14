import DropdownMenuExport2 from "../components/DropdownMenuExport2";
import FilterByDate from "./FilterByDate";
import { utils, writeFileXLSX } from "xlsx";

const PresensiDetail = ({detailPresensi, employeeName}) => {

  const capitalizeEachWord = (sentence) => {
    const words = sentence.split(" ");
    for (let i = 0; i < words.length; i++) {
      words[i] = words[i][0].toUpperCase() + words[i].substr(1);
    }

    return words.join(" ");
  };

  const exportAll = () => {
    // console.log("you click export");
    const headings = [[
      "ID",
      "Employee Name",
      "Employee ID",
      "Coming Time",
      "Return Time",
      "Shift",
      "Status"
    ]];
    const wb = utils.book_new();
    const ws = utils.json_to_sheet(detailPresensi.data);
    utils.sheet_add_aoa(ws, headings);
    utils.sheet_add_json(ws, detailPresensi.data, {origin: "A2", skipHeader: true});
    utils.book_append_sheet(wb, ws, "Presensi Data");
    writeFileXLSX(wb, "Presensi Detail Data.xlsx");
  };

  const printAll = () => {
    // console.log("you click print");
    let printContents = document.getElementById("printArea").innerHTML;
    let originalContents = document.body.innerHTML;
    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
  };
  
  const closeAll = () => {
    console.log("you click close");
  };

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
              <h3 className="mt-2">
                <FilterByDate />
              </h3>
            </div>
            <div>
              <DropdownMenuExport2
                export={exportAll}
                print={printAll}
                close={closeAll}
              />
            </div>
          </div>
          <div id="printArea" className="bg-white relative rounded-lg overflow-hidden flex h-full flex-col p-3 mb-8">
          <table className="mt-5 font-nunito-sans text-xs w-full overflow-y-scroll relative">
            <thead className="sticky top-0">
              <tr className="bg-[#F9F9FC] text-black text-left">
                <th className="py-2">Employee Name</th>
                <th className="py-2">Shift</th>
                <th className="py-2">Status</th>
                <th className="py-2">Coming Time</th>
                <th className="py-2">Return Time</th>
              </tr>
            </thead>
            <tbody>
              {detailPresensi.data.length > 0 &&
                detailPresensi.data.map((row) => (
                  <tr key={row.id} className="even:bg-[#F9F9FC] text-black">
                    <td className="py-2">{row.employee_name}</td>
                    <td className="py-2">{capitalizeEachWord(row.shift)}</td>
                    <td className="py-2">{capitalizeEachWord(row.status)}</td>
                    <td className="py-2">{row.coming_time}</td>
                    <td className="py-2">{row.return_time}</td>
                  </tr>
                ))}
            </tbody>
          </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PresensiDetail;
