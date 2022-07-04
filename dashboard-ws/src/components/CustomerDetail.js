import DropdownMenuExport from "../components/DropdownMenuExport";

const CustomerDetail = ({detailCustomer}) => {
  return (
    <div className="flex flex-col h-full font-noto-sans">
      <div className="bg-white rounded-lg overflow-hidden flex h-full flex-col">
        <div className="px-5 py-3">
          <div className="flex flex-row justify-between">
            <div className="flex flex-col">
              <h1 className="text-black font-bold text-lg mt-1 mb-2 mr-20">
                Here {detailCustomer.name}
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
        </div>
      </div>
    </div>
  );
};

export default CustomerDetail;
