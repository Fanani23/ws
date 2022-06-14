import {useEffect, useState} from "react";
import axios from "axios";
import Pagination from "./Pagination";

const TableListProducts = () => {
	const [tableData, setTableData] = useState([]);
	const [tableCount, setTableCount] = useState(null);
	const [currentTablePage, setTablePage] = useState(1);
	const [itemsPerPage, setItemsPerPage] = useState(1);
	const [currentPage, setCurrentPage] = useState(1);

	const fetchData = async () => {
		try {
			const pageData = await axios.get(
				`https://katto.osorateam.com/api/products?page=${currentPage}`
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
					"https://katto.osorateam.com/api/products"
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
					"https://katto.osorateam.com/api/products"
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
						<th className="py-2">Category</th>
						<th className="py-2">Product Name</th>
						<th className="py-2">Price</th>
						<th className="py-2">Fee (Nominal)</th>
						<th className="py-2">Fee (Percent)</th>
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
								<td className="py-2">{row.category}</td>
								<td className="py-2">{row.name}</td>
								<td className="py-2">{row.price}</td>
								<td className="py-2">
									{row.fee_commission_rupiah}
								</td>
								<td className="py-2">
									{row.fee_commission_percent}
								</td>
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
};

export default TableListProducts;
