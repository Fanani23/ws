import {MdModeEditOutline, MdDeleteOutline} from "react-icons/md";

<<<<<<< HEAD
const TableCategories = () => {
	const [tableData, setTableData] = useState([]);
	const [tableCount, setTableCount] = useState(null);
	const [currentTablePage, setTablePage] = useState(1);
	const [itemsPerPage, setItemsPerPage] = useState(1);
	const [currentPage, setCurrentPage] = useState(1);

	const fetchData = async () => {
		try {
			const pageData = await axios.get(
				`https://katto.osorateam.com/api/products/categories?page=${currentPage}`
			);
			setTableData(pageData.data.data);
		} catch (err) {
			console.log("error in fetching table data", err);
		}
	};

	useEffect(() => {
		const getTotalCount = async () => {
			try {
				const AllData = await axios.get(
					"https://katto.osorateam.com/api/products/categories"
				);
				setTableCount(AllData.data.meta.total);
			} catch (err) {
				console.log("error in fetching table data", err);
			}
		};
		getTotalCount();
	}, []);

	useEffect(() => {
		const getItemsPerPage = async () => {
			try {
				const CountPerPage = await axios.get(
					"https://katto.osorateam.com/api/products/categories"
				);
				setItemsPerPage(CountPerPage.data.meta.per_page);
			} catch (err) {
				console.log("error in fetching table data", err);
			}
		};
		getItemsPerPage();
	}, []);

	const showTablePage = page => {
		setTablePage(page);
		fetchData(page);
		setCurrentPage(page);
	};

	return (
		<>
			<table className="mt-5 font-nunito-sans text-xs w-full overflow-y-scroll relative">
				<thead className="sticky top-0">
					<tr className="bg-[#F9F9FC] text-black text-left">
						<th className="py-2">Id</th>
						<th className="py-2">Name</th>
					</tr>
				</thead>
				<tbody>
					{tableData.length > 0 &&
						tableData.map(row => (
							<tr
								key={row.id}
								className="even:bg-[#F9F9FC] text-black"
							>
								<td className="py-2">{row.code}</td>
								<td className="py-2">{row.name}</td>
							</tr>
						))}
				</tbody>
			</table>
			{tableCount && (
				<Pagination
					maxPage={Math.ceil(tableCount / itemsPerPage)}
					currentPage={currentTablePage}
					showTablePage={showTablePage}
				/>
			)}
		</>
	);
=======
const TableCategories = ({tableData, editRow, deleteRow}) => {
  return (
    <table className="mt-5 font-nunito-sans text-xs w-full overflow-y-scroll relative">
      <thead className="sticky top-0">
        <tr className="bg-[#F9F9FC] text-black text-left">
          <th className="py-2">ID</th>
          <th className="py-2">Name</th>
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
>>>>>>> fe-dev
};

export default TableCategories;
