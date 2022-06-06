import { Menu } from "@headlessui/react";
import {
  MdMoreVert,
	MdDeleteOutline,
	MdOutlineModeEditOutline,
	MdSearch,
	MdAdd,
	MdModeEditOutline,
	MdClose,
} from "react-icons/md";
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import ReportNavLink from "../components/ReportNavLink";
import TabTitle from "../utils/GeneralFunction";

const ReportTransaction = () => {
	TabTitle("Transaction - Kato Haircut");

	const [openAddReportTransaction, setOpenAddReportTransaction] = useState(false);

	const closeAddReportTransaction = () => {
		setOpenAddReportTransaction(false);
	};

	const openAddReportTransactionModal = () => {
		setOpenAddReportTransaction(true);
	};

	return (
		<div className="flex flex-col h-full font-noto-sans">
			<ReportNavLink />
			<div className="w-full flex flex-col mt-3 md:flex-row grow overflow-auto scrollbar-shown">
				<div className="basis-full md:basis-2/2 lg:basis-6/6">
					<div className="bg-white relative rounded-lg overflow-hidden flex h-full flex-col p-3">
					<div className="bg-white relative rounded-lg overflow-hidden flex h-full flex-col p-3">
            <div className="flex justify-between mt-2">
              <div className="flex grow text-gray-600">
                <MdSearch className="absolute top-3 left-0 text-white" />
                <input
                  className="border-b-2 border-gray-300 bg-transparent w-full md:w-1/2 lg:w-1/3 text-white h-10 pl-5 text-sm focus:outline-none"
                  type="search"
                  name="search"
                  id="search"
                  placeholder="Search"
                />
                <button
                  type="submit"
                  className="ml-2 mb-2 px-3 py-2 bg-black rounded-lg"
                >
                  <MdSearch className="text-white" />
                </button>
              </div>
              <button
                type="submit"
                className="flex items-center ml-2 mb-2 px-3 py-2 bg-black rounded-lg"
                onClick={openAddReportTransactionModal}
              >
                <MdAdd className="text-white mr-2" />
                <span>Apply</span>
              </button>
            </div>
            <table className="mt-3 font-nunito-sans text-xs w-full overflow-y-scroll">
			<thead>
                <tr className="bg-[#F9F9FC] text-black text-left">
                  <th className="py-2">Date</th>
                  <th className="py-2">Employee ID</th>
                  <th className="py-2">Employee</th>
                  <th className="py-2">Category Service</th>
				  <th className="py-2">Qty</th>
                  <th className="py-2">Sub Total</th>
                  <th className="py-2">Share</th>
                  <th className="py-2">Total Fee</th>
                </tr>
              </thead>
              <tbody>
                <tr className="even:bg-[#F9F9FC] text-black">
                  <td className="py-2">--/--/----</td>
                  <td className="py-2">EMPL001</td>
                  <td className="py-2">Employee 1</td>
                  <td className="py-2">Product</td>
                  <td className="py-2">1</td>
				  <td className="py-2">Sub total</td>
				  <td className="py-2">5%</td>
				  <td className="py-2">Total fee</td>
                </tr>
                <tr className="even:bg-[#F9F9FC] text-black">
                  <td className="py-2">--/--/----</td>
                  <td className="py-2">EMPL002</td>
                  <td className="py-2">Employee 2</td>
                  <td className="py-2">Product</td>
                  <td className="py-2">1</td>
				  <td className="py-2">Sub total</td>
				  <td className="py-2">5%</td>
				  <td className="py-2">Total fee</td>
                </tr><tr className="even:bg-[#F9F9FC] text-black">
                  <td className="py-2">--/--/----</td>
                  <td className="py-2">EMPL003</td>
                  <td className="py-2">Employee 3</td>
                  <td className="py-2">Service</td>
                  <td className="py-2">1</td>
				  <td className="py-2">Sub total</td>
				  <td className="py-2">5%</td>
				  <td className="py-2">Total fee</td>
                </tr>
				<tr className="even:bg-[#F9F9FC] text-black">
                  <td className="py-2">--/--/----</td>
                  <td className="py-2">EMPL004</td>
                  <td className="py-2">Employee 4</td>
                  <td className="py-2">Service</td>
                  <td className="py-2">1</td>
				  <td className="py-2">Sub total</td>
				  <td className="py-2">5%</td>
				  <td className="py-2">Total fee</td>
                </tr>
				<tr className="even:bg-[#F9F9FC] text-black">
                  <td className="py-2">--/--/----</td>
                  <td className="py-2">EMPL005</td>
                  <td className="py-2">Employee 5</td>
                  <td className="py-2">Service</td>
                  <td className="py-2">1</td>
				  <td className="py-2">Sub total</td>
				  <td className="py-2">5%</td>
				  <td className="py-2">Total fee</td>
                </tr>
				<tr className="even:bg-[#F9F9FC] text-black">
                  <td className="py-2">--/--/----</td>
                  <td className="py-2">EMPL006</td>
                  <td className="py-2">Employee 6</td>
                  <td className="py-2">Service</td>
                  <td className="py-2">1</td>
				  <td className="py-2">Sub total</td>
				  <td className="py-2">5%</td>
				  <td className="py-2">Total fee</td>
                </tr>
				<tr className="even:bg-[#F9F9FC] text-black">
                  <td className="py-2">--/--/----</td>
                  <td className="py-2">EMPL007</td>
                  <td className="py-2">Employee 7</td>
                  <td className="py-2">Product</td>
                  <td className="py-2">1</td>
				  <td className="py-2">Sub total</td>
				  <td className="py-2">5%</td>
				  <td className="py-2">Total fee</td>
                </tr>
				<tr className="even:bg-[#F9F9FC] text-black">
                  <td className="py-2">--/--/----</td>
                  <td className="py-2">EMPL008</td>
                  <td className="py-2">Employee 8</td>
                  <td className="py-2">Product</td>
                  <td className="py-2">1</td>
				  <td className="py-2">Sub total</td>
				  <td className="py-2">5%</td>
				  <td className="py-2">Total fee</td>
                </tr>
				<tr className="even:bg-[#F9F9FC] text-black">
                  <td className="py-2">--/--/----</td>
                  <td className="py-2">EMPL009</td>
                  <td className="py-2">Employee 9</td>
                  <td className="py-2">Service</td>
                  <td className="py-2">1</td>
				  <td className="py-2">Sub total</td>
				  <td className="py-2">5%</td>
				  <td className="py-2">Total fee</td>
                </tr>
				<tr className="even:bg-[#F9F9FC] text-black">
                  <td className="py-2">--/--/----</td>
                  <td className="py-2">EMPL010</td>
                  <td className="py-2">Employee 10</td>
                  <td className="py-2">Service</td>
                  <td className="py-2">1</td>
				  <td className="py-2">Sub total</td>
				  <td className="py-2">5%</td>
				  <td className="py-2">Total fee</td>
                </tr>
              </tbody>
            </table>
          </div>
					</div>
				</div>
				{/* <div className="basis-full mt-2 md:mt-0 md:ml-2 md:basis-1/2 lg:basis-2/6">
					<div className="bg-white rounded-lg overflow-hidden flex h-full flex-col">
						<div className="p-8 flex justify-center items-center border-b-2 border-gray-200">
							<h1 className="text-black font-bold text-lg">
								Payment
							</h1>
						</div>
						<div className="p-5 flex flex-col grow overflow-y-auto scrollbar-shown">
							<div className="w-full">
								<h1 className="text-sm text-black font-semibold">
									Payment Method
								</h1>
								<select
									class="bg-transparent border-2 border-gray w-full text-gray-500 text-sm rounded-lg px-3 py-2"
									aria-label="Default select example"
								>
									<option
										selected
										value="1"
										className="text-black"
									>
										Transaction
									</option>
									<option value="2" className="text-black">
										Revenue
									</option>
									<option value="3" className="text-black">
										Membership
									</option>
								</select>
							</div>
							<div className="flex flex-col mt-5">
								<div className="relative">
									<input
										type="text"
										name="payment"
										id="payment"
										className="bg-transparent text-right border-2 border-gray w-full text-black text-lg font-bold rounded-lg px-3 py-2"
									/>
									<span className="absolute top-0 left-0 text-black pl-3 py-3 select-none font-semibold">
										Rp
									</span>
								</div>
								<div className="flex flex-col mt-2">
									<div className="flex flex-row last:mb-0 mb-2">
										<div className="basis-1/3 first:ml-0 last:mr-0 ml-1 mr-1">
											<button className="w-full py-2 text-black text-center bg-gray-200 rounded-lg">
												1
											</button>
										</div>
										<div className="basis-1/3 first:ml-0 last:mr-0 ml-1 mr-1">
											<button className="w-full py-2 text-black text-center bg-gray-200 rounded-lg">
												2
											</button>
										</div>
										<div className="basis-1/3 first:ml-0 last:mr-0 ml-1 mr-1">
											<button className="w-full py-2 text-black text-center bg-gray-200 rounded-lg">
												3
											</button>
										</div>
									</div>
									<div className="flex flex-row last:mb-0 mb-2">
										<div className="basis-1/3 first:ml-0 last:mr-0 ml-1 mr-1">
											<button className="w-full py-2 text-black text-center bg-gray-200 rounded-lg">
												4
											</button>
										</div>
										<div className="basis-1/3 first:ml-0 last:mr-0 ml-1 mr-1">
											<button className="w-full py-2 text-black text-center bg-gray-200 rounded-lg">
												5
											</button>
										</div>
										<div className="basis-1/3 first:ml-0 last:mr-0 ml-1 mr-1">
											<button className="w-full py-2 text-black text-center bg-gray-200 rounded-lg">
												6
											</button>
										</div>
									</div>
									<div className="flex flex-row last:mb-0 mb-2">
										<div className="basis-1/3 first:ml-0 last:mr-0 ml-1 mr-1">
											<button className="w-full py-2 text-black text-center bg-gray-200 rounded-lg">
												7
											</button>
										</div>
										<div className="basis-1/3 first:ml-0 last:mr-0 ml-1 mr-1">
											<button className="w-full py-2 text-black text-center bg-gray-200 rounded-lg">
												8
											</button>
										</div>
										<div className="basis-1/3 first:ml-0 last:mr-0 ml-1 mr-1">
											<button className="w-full py-2 text-black text-center bg-gray-200 rounded-lg">
												9
											</button>
										</div>
									</div>
									<div className="flex flex-row last:mb-0 mb-2">
										<div className="basis-1/3 first:ml-0 last:mr-0 ml-1 mr-1">
											<button className="w-full py-2 text-black text-center bg-gray-200 rounded-lg">
												00
											</button>
										</div>
										<div className="basis-1/3 first:ml-0 last:mr-0 ml-1 mr-1">
											<button className="w-full py-2 text-black text-center bg-gray-200 rounded-lg">
												0
											</button>
										</div>
										<div className="basis-1/3 first:ml-0 last:mr-0 ml-1 mr-1">
											<button className="w-full py-2 text-black text-center bg-gray-200 rounded-lg">
												C
											</button>
										</div>
									</div>
									<div className="flex flex-row last:mb-0 mb-2">
										<div className="basis-1/3 first:ml-0 last:mr-0 ml-1 mr-1">
											<button className="w-full py-2 text-black text-center bg-gray-200 rounded-lg">
												.
											</button>
										</div>
										<div className="basis-2/3 first:ml-0 last:mr-0 ml-1 mr-1">
											<button className="w-full py-2 text-black text-center bg-gray-200 rounded-lg">
												Cancel
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div> */}
			</div>
		</div>
	);
};

export default ReportTransaction;
