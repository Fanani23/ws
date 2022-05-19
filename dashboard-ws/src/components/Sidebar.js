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
						? "bg-primary-100 text-white hidden min-w-0 md:flex lg:min-w-[270px] p-3 overflow-y-scroll h-full scrollbar-auto-hide"
						: "hidden"
				}
			>
				<ul className="w-full h-full">
					<li className="rounded-lg" role="button">
						<NavLink
							to="/"
							className={({isActive}) =>
								isActive
									? "flex items-center bg-white text-black hover:bg-slate-100 font-semibold px-5 py-4 rounded-lg"
									: "flex items-center bg-primary-100 text-white hover:bg-primary-500 font-semibold px-5 py-4 rounded-lg"
							}
						>
							<MdOutlineDashboard className="text-2xl mr-3" />
							Dashboard
						</NavLink>
					</li>
					<li className="rounded-lg" role="button">
						<NavLink
							to="/cashier"
							className={({isActive}) =>
								isActive
									? "flex items-center bg-white text-black hover:bg-slate-100 font-semibold px-5 py-4 rounded-lg"
									: "flex items-center bg-primary-100 text-white hover:bg-primary-500 font-semibold px-5 py-4 rounded-lg"
							}
						>
							<MdAddShoppingCart className="text-2xl mr-3" />
							Cashier
						</NavLink>
					</li>
					<li className="rounded-lg" role="button">
						<NavLink
							to="/product"
							className={({isActive}) =>
								isActive
									? "flex items-center bg-white text-black hover:bg-slate-100 font-semibold px-5 py-4 rounded-lg"
									: "flex items-center bg-primary-100 text-white hover:bg-primary-500 font-semibold px-5 py-4 rounded-lg"
							}
						>
							<ProductDownload className="text-2xl mr-3" />
							Product
						</NavLink>
					</li>
					<li className="rounded-lg" role="button">
						<NavLink
							to="/product/category"
							className={({isActive}) =>
								isActive
									? "flex items-center bg-white text-black hover:bg-slate-100 font-semibold px-5 py-4 rounded-lg"
									: "flex items-center bg-primary-100 text-white hover:bg-primary-500 font-semibold px-5 py-4 rounded-lg"
							}
						>
							<MdOutlineLocalOffer className="text-2xl mr-3" />
							Category
						</NavLink>
					</li>
					<li className="rounded-lg" role="button">
						<NavLink
							to="/product/list"
							className={({isActive}) =>
								isActive
									? "flex items-center bg-white text-black hover:bg-slate-100 font-semibold px-5 py-4 rounded-lg"
									: "flex items-center bg-primary-100 text-white hover:bg-primary-500 font-semibold px-5 py-4 rounded-lg"
							}
						>
							<MdOutlineShoppingBag className="text-2xl mr-3" />
							List Product
						</NavLink>
					</li>
					<li className="rounded-lg" role="button">
						<NavLink
							to="/report"
							className={({isActive}) =>
								isActive
									? "flex items-center bg-white text-black hover:bg-slate-100 font-semibold px-5 py-4 rounded-lg"
									: "flex items-center bg-primary-100 text-white hover:bg-primary-500 font-semibold px-5 py-4 rounded-lg"
							}
						>
							<MdOutlineAssessment className="text-2xl mr-3" />
							Report
						</NavLink>
					</li>
					<li className="rounded-lg" role="button">
						<NavLink
							to="/report/order"
							className={({isActive}) =>
								isActive
									? "flex items-center bg-white text-black hover:bg-slate-100 font-semibold px-5 py-4 rounded-lg"
									: "flex items-center bg-primary-100 text-white hover:bg-primary-500 font-semibold px-5 py-4 rounded-lg"
							}
						>
							<MdOutlineAssignment className="text-2xl mr-3" />
							Order
						</NavLink>
					</li>
					<li className="rounded-lg" role="button">
						<NavLink
							to="/report/transaction"
							className={({isActive}) =>
								isActive
									? "flex items-center bg-white text-black hover:bg-slate-100 font-semibold px-5 py-4 rounded-lg"
									: "flex items-center bg-primary-100 text-white hover:bg-primary-500 font-semibold px-5 py-4 rounded-lg"
							}
						>
							<MdOutlineAssignment className="text-2xl mr-3" />
							Transaction
						</NavLink>
					</li>
					<li className="rounded-lg" role="button">
						<NavLink
							to="/costumers"
							className={({isActive}) =>
								isActive
									? "flex items-center bg-white text-black hover:bg-slate-100 font-semibold px-5 py-4 rounded-lg"
									: "flex items-center bg-primary-100 text-white hover:bg-primary-500 font-semibold px-5 py-4 rounded-lg"
							}
						>
							<MdOutlineGroup className="text-2xl mr-3" />
							Costumers
						</NavLink>
					</li>
					<li className="rounded-lg" role="button">
						<NavLink
							to="/presensi"
							className={({isActive}) =>
								isActive
									? "flex items-center bg-white text-black hover:bg-slate-100 font-semibold px-5 py-4 rounded-lg"
									: "flex items-center bg-primary-100 text-white hover:bg-primary-500 font-semibold px-5 py-4 rounded-lg"
							}
						>
							<MdOutlineModeEditOutline className="text-2xl mr-3" />
							Presensi
						</NavLink>
					</li>
					<li className="rounded-lg" role="button">
						<NavLink
							to="/employee"
							className={({isActive}) =>
								isActive
									? "flex items-center bg-white text-black hover:bg-slate-100 font-semibold px-5 py-4 rounded-lg"
									: "flex items-center bg-primary-100 text-white hover:bg-primary-500 font-semibold px-5 py-4 rounded-lg"
							}
						>
							<MdOutlineHowToReg className="text-2xl mr-3" />
							Employee
						</NavLink>
					</li>
					<li className="rounded-lg" role="button">
						<NavLink
							to="/setting"
							className={({isActive}) =>
								isActive
									? "flex items-center bg-white text-black hover:bg-slate-100 font-semibold px-5 py-4 rounded-lg"
									: "flex items-center bg-primary-100 text-white hover:bg-primary-500 font-semibold px-5 py-4 rounded-lg"
							}
						>
							<MdOutlineSettings className="text-2xl mr-3" />
							Settings
						</NavLink>
					</li>
					<li className="rounded-lg" role="button">
						<NavLink
							to="/setting/admin"
							className={({isActive}) =>
								isActive
									? "flex items-center bg-white text-black hover:bg-slate-100 font-semibold px-5 py-4 rounded-lg"
									: "flex items-center bg-primary-100 text-white hover:bg-primary-500 font-semibold px-5 py-4 rounded-lg"
							}
						>
							<MdOutlineHeadsetMic className="text-2xl mr-3" />
							Admin
						</NavLink>
					</li>
					<li className="rounded-lg" role="button">
						<NavLink
							to="/setting/log"
							className={({isActive}) =>
								isActive
									? "flex items-center bg-white text-black hover:bg-slate-100 font-semibold px-5 py-4 rounded-lg"
									: "flex items-center bg-primary-100 text-white hover:bg-primary-500 font-semibold px-5 py-4 rounded-lg"
							}
						>
							<MdHistory className="text-2xl mr-3" />
							Log Login
						</NavLink>
					</li>
				</ul>
			</div>
		</>
	);
};

export default Sidebar;
