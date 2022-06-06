import TabTitle from "../utils/GeneralFunction";
import PresensiSample from "../data/PresensiSample.json";
import { format } from "date-fns";
import Table from "../components/Table";

const Presensi = () => {
  TabTitle("Presensi - Kato Haircut");

  const COLUMNS = [
    {
      Header: "Date & Time",
      accessor: "date",
      Cell: ({ value }) => {
        return format(new Date(value), "dd-MMM-yyyy HH:MM:SS");
      },
    },
    {
      Header: "Employee ID",
      accessor: "employee.employee_id",
    },
    {
      Header: "Employee Name",
      accessor: "employee.name",
    },
  ];

  return (
    <div className="flex flex-col h-full font-noto-sans">
      <div className="w-full flex flex-col mt-3 md:flex-row grow overflow-auto scrollbar-shown">
        <div className="basis-full">
          <div className="bg-white relative rounded-lg overflow-hidden flex h-full flex-col p-3">
            <div className="flex justify-between">
              <div className="flex flex-col">
                <button
                  type="submit"
                  className="flex items-center ml-2 mb-2 px-3 py-2 bg-black rounded-lg"
                  // onClick={openAddCustomersModal}
                >
                  <span>Presensi Manual</span>
                </button>
              </div>
              <button>h</button>
            </div>
            <Table ColumnLists={COLUMNS} DataSample={PresensiSample} />
          </div>
        </div>
        <div className="hidden basis-full mt-2 md:mt-0 md:ml-2 md:basis-1/2 lg:basis-2/6">
          <div className="bg-white rounded-lg overflow-hidden flex h-full flex-col"></div>
        </div>
      </div>
    </div>
  );
};

export default Presensi;
