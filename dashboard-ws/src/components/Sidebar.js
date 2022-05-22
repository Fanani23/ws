import {
	MdOutlineDashboard,
	MdAddShoppingCart,
	MdOutlineLocalOffer,
	MdOutlineShoppingBag,
	MdOutlineAssessment,
	MdOutlineAssignment,
	MdOutlineGroup,
	MdOutlineModeEditOutline,
	MdOutlineHowToReg,
	MdOutlineSettings,
	MdOutlineHeadsetMic,
	MdHistory,
} from "react-icons/md";
import {ReactComponent as ProductDownload} from "../img/product-downloadable.svg";
import {NavLink} from "react-router-dom";

const Sidebar = ({show}) => {
	return (
		<>
			<div
				className={
					show
						? "bg-primary-100 text-white fixed top-20 left-0 bottom-0 md:relative md:top-0 min-w-[270px] z-[5] p-3 overflow-y-scroll scrollbar-auto-hide"
						: "hidden"
				}
			>
				<ul className="relative w-full min-h-full">
					<li className="rounded-lg mb-3 last:mb-0" role="button">
						<NavLink
							to="/"
							className={({isActive}) =>
								isActive
									? "flex items-center bg-white text-black hover:bg-slate-100 font-semibold px-5 py-4 rounded-lg"
									: "flex items-center bg-primary-100 text-white hover:bg-primary-500 font-semibold px-5 py-4 rounded-lg"
							}
						>
							<MdOutlineDashboard className="text-2xl lg:mr-3" />
							<span>Dashboard</span>
						</NavLink>
					</li>
					<li className="rounded-lg mb-3 last:mb-0" role="button">
						<NavLink
							to="/cashier"
							className={({isActive}) =>
								isActive
									? "flex items-center bg-white text-black hover:bg-slate-100 font-semibold px-5 py-4 rounded-lg"
									: "flex items-center bg-primary-100 text-white hover:bg-primary-500 font-semibold px-5 py-4 rounded-lg"
							}
						>
							<MdAddShoppingCart className="text-2xl lg:mr-3" />
							<span>Cashier</span>
						</NavLink>
					</li>
					<li className="rounded-lg mb-3 last:mb-0" role="button">
						<NavLink
							to="/product"
							className={({isActive}) =>
								isActive
									? "flex items-center bg-white text-black hover:bg-slate-100 font-semibold px-5 py-4 rounded-lg"
									: "flex items-center bg-primary-100 text-white hover:bg-primary-500 font-semibold px-5 py-4 rounded-lg"
							}
						>
							<ProductDownload className="text-2xl lg:mr-3" />
							<span>Product</span>
						</NavLink>
					</li>
					<li className="rounded-lg mb-3 last:mb-0" role="button">
						<NavLink
							to="/product/category"
							className={({isActive}) =>
								isActive
									? "flex items-center bg-white text-black hover:bg-slate-100 font-semibold px-5 py-4 rounded-lg"
									: "flex items-center bg-primary-100 text-white hover:bg-primary-500 font-semibold px-5 py-4 rounded-lg"
							}
						>
							<MdOutlineLocalOffer className="text-2xl lg:mr-3" />
							<span>Category</span>
						</NavLink>
					</li>
					<li className="rounded-lg mb-3 last:mb-0" role="button">
						<NavLink
							to="/product/list"
							className={({isActive}) =>
								isActive
									? "flex items-center bg-white text-black hover:bg-slate-100 font-semibold px-5 py-4 rounded-lg"
									: "flex items-center bg-primary-100 text-white hover:bg-primary-500 font-semibold px-5 py-4 rounded-lg"
							}
						>
							<MdOutlineShoppingBag className="text-2xl lg:mr-3" />
							<span>List Product</span>
						</NavLink>
					</li>
					<li className="rounded-lg mb-3 last:mb-0" role="button">
						<NavLink
							to="/report"
							className={({isActive}) =>
								isActive
									? "flex items-center bg-white text-black hover:bg-slate-100 font-semibold px-5 py-4 rounded-lg"
									: "flex items-center bg-primary-100 text-white hover:bg-primary-500 font-semibold px-5 py-4 rounded-lg"
							}
						>
							<MdOutlineAssessment className="text-2xl lg:mr-3" />
							<span>Report</span>
						</NavLink>
					</li>
					<li className="rounded-lg mb-3 last:mb-0" role="button">
						<NavLink
							to="/report/order"
							className={({isActive}) =>
								isActive
									? "flex items-center bg-white text-black hover:bg-slate-100 font-semibold px-5 py-4 rounded-lg"
									: "flex items-center bg-primary-100 text-white hover:bg-primary-500 font-semibold px-5 py-4 rounded-lg"
							}
						>
							<MdOutlineAssignment className="text-2xl lg:mr-3" />
							<span>Order</span>
						</NavLink>
					</li>
					<li className="rounded-lg mb-3 last:mb-0" role="button">
						<NavLink
							to="/report/transaction"
							className={({isActive}) =>
								isActive
									? "flex items-center bg-white text-black hover:bg-slate-100 font-semibold px-5 py-4 rounded-lg"
									: "flex items-center bg-primary-100 text-white hover:bg-primary-500 font-semibold px-5 py-4 rounded-lg"
							}
						>
							<MdOutlineAssignment className="text-2xl lg:mr-3" />
							<span>Transaction</span>
						</NavLink>
					</li>
					<li className="rounded-lg mb-3 last:mb-0" role="button">
						<NavLink
							to="/costumers"
							className={({isActive}) =>
								isActive
									? "flex items-center bg-white text-black hover:bg-slate-100 font-semibold px-5 py-4 rounded-lg"
									: "flex items-center bg-primary-100 text-white hover:bg-primary-500 font-semibold px-5 py-4 rounded-lg"
							}
						>
							<MdOutlineGroup className="text-2xl lg:mr-3" />
							<span>Costumers</span>
						</NavLink>
					</li>
					<li className="rounded-lg mb-3 last:mb-0" role="button">
						<NavLink
							to="/presensi"
							className={({isActive}) =>
								isActive
									? "flex items-center bg-white text-black hover:bg-slate-100 font-semibold px-5 py-4 rounded-lg"
									: "flex items-center bg-primary-100 text-white hover:bg-primary-500 font-semibold px-5 py-4 rounded-lg"
							}
						>
							<MdOutlineModeEditOutline className="text-2xl lg:mr-3" />
							<span>Presensi</span>
						</NavLink>
					</li>
					<li className="rounded-lg mb-3 last:mb-0" role="button">
						<NavLink
							to="/employee"
							className={({isActive}) =>
								isActive
									? "flex items-center bg-white text-black hover:bg-slate-100 font-semibold px-5 py-4 rounded-lg"
									: "flex items-center bg-primary-100 text-white hover:bg-primary-500 font-semibold px-5 py-4 rounded-lg"
							}
						>
							<MdOutlineHowToReg className="text-2xl lg:mr-3" />
							<span>Employee</span>
						</NavLink>
					</li>
					<li className="rounded-lg mb-3 last:mb-0" role="button">
						<NavLink
							to="/setting"
							className={({isActive}) =>
								isActive
									? "flex items-center bg-white text-black hover:bg-slate-100 font-semibold px-5 py-4 rounded-lg"
									: "flex items-center bg-primary-100 text-white hover:bg-primary-500 font-semibold px-5 py-4 rounded-lg"
							}
						>
							<MdOutlineSettings className="text-2xl lg:mr-3" />
							<span>Settings</span>
						</NavLink>
					</li>
					<li className="rounded-lg mb-3 last:mb-0" role="button">
						<NavLink
							to="/setting/admin"
							className={({isActive}) =>
								isActive
									? "flex items-center bg-white text-black hover:bg-slate-100 font-semibold px-5 py-4 rounded-lg"
									: "flex items-center bg-primary-100 text-white hover:bg-primary-500 font-semibold px-5 py-4 rounded-lg"
							}
						>
							<MdOutlineHeadsetMic className="text-2xl lg:mr-3" />
							<span>Admin</span>
						</NavLink>
					</li>
					<li className="rounded-lg mb-3 last:mb-0" role="button">
						<NavLink
							to="/setting/log"
							className={({isActive}) =>
								isActive
									? "flex items-center bg-white text-black hover:bg-slate-100 font-semibold px-5 py-4 rounded-lg"
									: "flex items-center bg-primary-100 text-white hover:bg-primary-500 font-semibold px-5 py-4 rounded-lg"
							}
						>
							<MdHistory className="text-2xl lg:mr-3" />
							<span>Log Login</span>
						</NavLink>
					</li>
				</ul>
			</div>
		</>
	);
};

export default Sidebar;
