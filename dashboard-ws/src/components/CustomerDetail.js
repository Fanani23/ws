import DropdownMenuExport from "../components/DropdownMenuExport";
import { utils, writeFileXLSX } from "xlsx";

const CustomerDetail = ({detailCustomer, tabelDetailCustomer, modalDetail}) => {

  const exportAll = () => {
    // console.log("you click export");
    const headings = [[
      "ID",
      "Customer Name",
      "Transaction ID",
      "Discount Type",
      "Discount",
      "Coupon Type",
      "Coupon",
      "Sub Total",
      "Discount Total",
      "Total",
      "Method",
      "Status",
      "Date & Time"
    ]];
    const wb = utils.book_new();
    const ws = utils.json_to_sheet(tabelDetailCustomer);
    utils.sheet_add_aoa(ws, headings);
    utils.sheet_add_json(ws, tabelDetailCustomer, {origin: "A2", skipHeader: true});
    utils.book_append_sheet(wb, ws, "Customer Data");
    writeFileXLSX(wb, "Customer Detail Data.xlsx");
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
      <div className="flex flex-col justify-end">
        <DropdownMenuExport 
          export={exportAll}
          print={printAll}
          close={closeAll}
        />
      </div>
      <div id="printArea" className="bg-white rounded-lg overflow-hidden flex h-full flex-col">
        <div className="px-5 py-3">
          <div className="flex flex-row justify-between">
            <div className="flex flex-col">
              <h1 className="text-black font-bold text-lg mt-1 mb-2 mr-20">
                {detailCustomer.name}
              </h1>
              <h1 className="text-gray-400 font-semibold text-md">
                {detailCustomer.code}
              </h1>
            </div>
            <div>
              <div className="flex flex-row items-center">
                <h1 className="text-black font-bold text-lg mr-2">
                  {detailCustomer.membership.toUpperCase()}
                </h1>
              </div>
            </div>
          </div>
          <h5 className="text-black text-lg mt-6">Order History</h5>
          <table className="mt-5 font-nunito-sans text-xs w-full overflow-y-scroll relative">
            <thead className="sticky top-0">
              <tr className="bg-[#F9F9FC] text-black text-left">
                <th>Id</th>
                <th>Datetime</th>
                <th>Total</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {tabelDetailCustomer?.map((data) => (
                <tr className="even:bg-[#F9F9FC] text-black" key={data.id}>
                  <td>{data.id}</td>
                  <td>{data.datetime}</td>
                  <td>{data.grand_total}</td>
                  <td>
                    <button
                      className="bg-blue-200 px-3 py-2 rounded-lg"
                      onClick={() => modalDetail(data.id)}
                    >
                      Detail
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CustomerDetail;
