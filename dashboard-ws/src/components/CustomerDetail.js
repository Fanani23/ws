import DropdownMenuExport from "../components/DropdownMenuExport";

const CustomerDetail = ({detailCustomer, tabelDetailCustomer, modalDetail}) => {
  return (
    <div className="flex flex-col h-full font-noto-sans">
      <div className="bg-white rounded-lg overflow-hidden flex h-full flex-col">
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
                <DropdownMenuExport />
              </div>
            </div>
          </div>
          <h5 className="text-black text-lg mt-6">Order History</h5>
          <table className="text-black">
            <thead>
              <tr>
                <th>Id</th>
                <th>Datetime</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {tabelDetailCustomer?.map((data) => (
                <tr className="text-black" key={data.id}>
                  <td>{data.id}</td>
                  <td>{data.datetime}</td>
                  <td>
                    <button
                      className="bg-blue-200 px-3 py-2 rounded-lg"
                      onClick={() => modalDetail(data.id)}
                    >
                      See Detail
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
