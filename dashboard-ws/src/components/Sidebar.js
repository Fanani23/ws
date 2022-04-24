import {useState} from "react";
import {NavLink} from "react-router-dom";
import AdminNavbar from "./AdminNavbar";
import {
	MdOutlineDashboard,
	MdAddShoppingCart,
	MdOutlineModeEditOutline,
	MdOutlineAssignment,
	MdOutlineAssessment,
	MdOutlineGroup,
	MdOutlineHowToReg,
	MdOutlineHeadsetMic,
	MdOutlineShoppingBag,
	MdOutlineLocalOffer,
	MdOutlineSettings,
} from "react-icons/md";

export default function Sidebar() {
	const [showSidebar, setShowSidebar] = useState("-left-64");
	return (
		<>
			<AdminNavbar
				showSidebar={showSidebar}
				setShowSidebar={setShowSidebar}
			/>
			<div
				className={`h-screen fixed top-0 md:left-0 ${showSidebar} scrollbar overflow-y-auto flex-row flex-nowrap overflow-hidden shadow-xl bg-primary-100 w-64 z-10 py-4 px-6 transition-all duration-300`}
			>
				<div className="flex-col items-stretch min-h-full flex-nowrap px-0 relative">
					<a
						href="/"
						target="_blank"
						rel="noreferrer"
						className="mt-2 text-center w-full inline-block text-white font-nunito-sans text-2xl font-bold"
					>
						<h1>KATTO HAIR DESIGN</h1>
					</a>
					<div className="flex flex-col">
						<ul className="flex-col mt-10 min-w-full flex list-none font-nunito-sans">
							<li className="rounded-lg mb-2">
								<NavLink
									to="/"
									exact
									className="flex items-center gap-4 text-sm text-white px-4 py-3 rounded-lg hover:bg-primary-500"
									activeClassName="bg-white text-black shadow-md hover:bg-gray-50"
								>
									<MdOutlineDashboard className="text-2xl" />
									Dashboard
								</NavLink>
							</li>
							<li className="rounded-lg mb-2">
								<NavLink
									to="/cashier"
									exact
									className="flex items-center gap-4 text-sm text-white px-4 py-3 rounded-lg hover:bg-primary-500"
									activeClassName="bg-white text-black shadow-md hover:bg-gray-50"
								>
									<MdAddShoppingCart className="text-2xl" />
									Cashier
								</NavLink>
							</li>
							<li className="rounded-lg mb-2">
								<NavLink
									to="/presensi"
									exact
									className="flex items-center gap-4 text-sm text-white px-4 py-3 rounded-lg hover:bg-primary-500"
									activeClassName="bg-white text-black shadow-md hover:bg-gray-50"
								>
									<MdOutlineModeEditOutline className="text-2xl" />
									Presensi
								</NavLink>
							</li>
							<li className="rounded-lg mb-2">
								<NavLink
									to="/transaction"
									exact
									className="flex items-center gap-4 text-sm text-white px-4 py-3 rounded-lg hover:bg-primary-500"
									activeClassName="bg-white text-black shadow-md hover:bg-gray-50"
								>
									<MdOutlineAssignment className="text-2xl" />
									Transaction
								</NavLink>
							</li>
							<li className="rounded-lg mb-2">
								<NavLink
									to="/report"
									exact
									className="flex items-center gap-4 text-sm text-white px-4 py-3 rounded-lg hover:bg-primary-500"
									activeClassName="bg-white text-black shadow-md hover:bg-gray-50"
								>
									<MdOutlineAssessment className="text-2xl" />
									Report
								</NavLink>
							</li>
							<li className="rounded-lg mb-2">
								<NavLink
									to="/costumers"
									exact
									className="flex items-center gap-4 text-sm text-white px-4 py-3 rounded-lg hover:bg-primary-500"
									activeClassName="bg-white text-black shadow-md hover:bg-gray-50"
								>
									<MdOutlineGroup className="text-2xl" />
									Costumers
								</NavLink>
							</li>
							<li className="rounded-lg mb-2">
								<NavLink
									to="/employee"
									exact
									className="flex items-center gap-4 text-sm text-white px-4 py-3 rounded-lg hover:bg-primary-500"
									activeClassName="bg-white text-black shadow-md hover:bg-gray-50"
								>
									<MdOutlineHowToReg className="text-2xl" />
									Employee
								</NavLink>
							</li>
							<li className="rounded-lg mb-2">
								<NavLink
									to="/settings/services"
									exact
									className="flex items-center gap-4 text-sm text-white px-4 py-3 rounded-lg hover:bg-primary-500"
									activeClassName="bg-white text-black shadow-md hover:bg-gray-50"
								>
									<MdOutlineSettings className="text-2xl" />
									Settings
								</NavLink>
							</li>
							<li className="rounded-lg mb-2">
								<NavLink
									to="/settings/services"
									exact
									className="flex items-center gap-4 text-sm text-white px-4 py-3 rounded-lg hover:bg-primary-500"
									activeClassName="bg-white text-black shadow-md hover:bg-gray-50"
								>
									<MdOutlineHeadsetMic className="text-2xl" />
									Services
								</NavLink>
							</li>
							<li className="rounded-lg mb-2">
								<NavLink
									to="/settings/retails"
									exact
									className="flex items-center gap-4 text-sm text-white px-4 py-3 rounded-lg hover:bg-primary-500"
									activeClassName="bg-white text-black shadow-md hover:bg-gray-50"
								>
									<MdOutlineShoppingBag className="text-2xl" />
									Retails
								</NavLink>
							</li>
							<li className="rounded-lg mb-2">
								<NavLink
									to="/settings/vouchers"
									exact
									className="flex items-center gap-4 text-sm text-white px-4 py-3 rounded-lg hover:bg-primary-500"
									activeClassName="bg-white text-black shadow-md hover:bg-gray-50"
								>
									<MdOutlineLocalOffer className="text-2xl" />
									Vouchers
								</NavLink>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</>
	);
}
