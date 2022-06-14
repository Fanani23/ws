import React, {useMemo} from "react";
import {useTable, usePagination} from "react-table";
import {MdModeEditOutline, MdDeleteOutline} from "react-icons/md";

const Table = ({ColumnLists, DataSample}) => {
	const columns = useMemo(() => ColumnLists, []);
	const data = useMemo(() => DataSample, []);
	const tableInstance = useTable(
		{
			columns,
			data,
		},
		usePagination
	);
	const {
		getTableProps,
		getTableBodyProps,
		headerGroups,
		page,
		nextPage,
		previousPage,
		prepareRow,
	} = tableInstance;

	return (
		<>
			<table
				{...getTableProps()}
				className="mt-5 font-nunito-sans text-xs w-full overflow-y-scroll relative"
			>
				<thead className="sticky top-0">
					{headerGroups.map(headerGroup => (
						<tr
							{...headerGroup.getHeaderGroupProps()}
							className="bg-[#F9F9FC] text-black text-left"
						>
							{headerGroup.headers.map(column => (
								<th
									{...column.getHeaderProps()}
									className="py-2"
								>
									{column.render("Header")}
								</th>
							))}
							<th className="py-2">Action</th>
						</tr>
					))}
				</thead>
				<tbody {...getTableBodyProps()}>
					{page.map(row => {
						prepareRow(row);
						return (
							<tr
								{...row.getRowProps()}
								className="even:bg-[#F9F9FC] text-black"
							>
								{row.cells.map(cell => {
									return (
										<td
											{...cell.getCellProps()}
											className="py-2"
										>
											{cell.render("Cell")}
										</td>
									);
								})}
								<td className="py-2">
									<button>
										<MdModeEditOutline className="text-red-500 hover:text-red-800" />
									</button>
									<button>
										<MdDeleteOutline className="text-red-500 hover:text-red-800" />
									</button>
								</td>
							</tr>
						);
					})}
				</tbody>
			</table>
			<nav
				className="flex flex-row space-x-3 mx-auto"
				aria-label="Pagination"
			>
				<button
					onClick={() => previousPage()}
					className="relative inline-flex items-center px-2 py-2 rounded-lg border border-black bg-black text-sm font-medium text-white hover:bg-gray-900 hover:text-gray-300"
				>
					<span class="sr-only">Previous</span>
					<svg
						class="h-5 w-5"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 20 20"
						fill="currentColor"
						aria-hidden="true"
					>
						<path
							fill-rule="evenodd"
							d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
							clip-rule="evenodd"
						/>
					</svg>
				</button>
				<button
					onClick={() => nextPage()}
					className="relative inline-flex items-center px-2 py-2 rounded-lg border border-black bg-black text-sm font-medium text-white hover:bg-gray-900 hover:text-gray-300"
				>
					<span class="sr-only">Next</span>
					<svg
						class="h-5 w-5"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 20 20"
						fill="currentColor"
						aria-hidden="true"
					>
						<path
							fill-rule="evenodd"
							d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
							clip-rule="evenodd"
						/>
					</svg>
				</button>
			</nav>
		</>
	);
};

export default Table;
