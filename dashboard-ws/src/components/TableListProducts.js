import {MdModeEditOutline, MdDeleteOutline} from "react-icons/md";

const TableListProducts = ({tableData, editRow, deleteRow}) => {
  return (
    <>
      <table className="mt-5 font-nunito-sans text-xs overflow-y-scroll relative">
        <thead className="sticky top-0">
          <tr className="bg-[#F9F9FC] text-black text-left">
            <th className="py-2">ID</th>
            <th className="py-2">Category</th>
            <th className="py-2">Product Name</th>
            <th className="py-2">Price</th>
            <th className="py-2">Fee (Nominal)</th>
            <th className="py-2">Fee (Percent)</th>
            <th className="py-2">Photo</th>
            <th className="py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {tableData.length > 0 &&
            tableData.map((row) => (
              <tr key={row.id} className="even:bg-[#F9F9FC] text-black">
                <td className="py-2">{row.code}</td>
                <td className="py-2">{row.category}</td>
                <td className="py-2">{row.name}</td>
                <td className="py-2">{row.price}</td>
                {row.commission_type === "nominal" && (
                  <>
                    <td className="py-2">{row.commission_value}</td>
                    <td className="py-2">0</td>
                  </>
                )}
                {row.commission_type === "percent" && (
                  <>
                    <td className="py-2">0</td>
                    <td className="py-2">{row.commission_value}</td>
                  </>
                )}
                <td className="py-2">
                  {row.image !== null ? (
                    <img
                      src={row.image}
                      alt={row.name}
                      className="h-[50px] w-[50px] object-cover"
                    />
                  ) : (
                    <img
                      src="https://via.placeholder.com/50x50.png?text=None"
                      alt="Products"
                      className="h-[50px] w-[50px] object-cover"
                    />
                  )}
                </td>
                <td className="py-2">
                  <button
                    onClick={() => {
                      editRow(row);
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
    </>
  );
};

export default TableListProducts;
