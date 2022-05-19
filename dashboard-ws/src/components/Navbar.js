import {useLocation} from "react-router-dom";
import {MdMenu, MdNotificationsNone, MdExpandMore} from "react-icons/md";
import logo from "../img/kato-logo.png";

const Navbar = ({toggleSidebar}) => {
	const location = useLocation().pathname;
	const capitalize = string => {
		return string.charAt(0).toUpperCase() + string.slice(1);
	};

	return (
		<>
			<nav className="fixed left-0 right-0 h-20 flex flex-row bg-primary-900 group text-white z-50">
				<div className="flex flex-row justify-between items-center p-3 group bg-primary-100 min-w-fit md:w-60 lg:min-w-[270px]">
					<img
						src={logo}
						alt="Kato Hair Design"
						className="hidden md:block"
					/>
					<div
						role="button"
						className="hover:bg-primary-500 px-3 py-3.5 rounded-lg"
						onClick={toggleSidebar}
					>
						<MdMenu className="text-2xl" />
					</div>
				</div>
				<div className="flex flex-row justify-end sm:justify-between items-center p-3 w-full">
					<h1 className="font-noto-sans text-lg font-semibold hidden sm:block">
						{location === "/"
							? "Dashboard"
							: capitalize(location.replace("/", ""))}
					</h1>
					<div className="flex flex-row items-center space-x-3">
						<div
							role="button"
							className="hover:bg-primary-500 px-3 py-3.5 rounded-lg"
						>
							<MdNotificationsNone className="text-2xl" />
						</div>
						<div
							role="button"
							className="flex flex-col sm:flex-row items-center space-x-5 hover:bg-primary-500 rounded-lg px-3 py-2"
						>
							<img
								src="https://via.placeholder.com/35/ffffff/000000/?text=profile"
								alt="profile"
								className="rounded-full"
							/>
							<div className="hidden sm:flex flex-col">
								<h1 className="font-noto-sans text-sm font-bold">
									Ajeng Sekar M
								</h1>
								<h5 className="font-noto-sans text-xs text-[#C4C4C4]">
									Owner
								</h5>
							</div>
							<MdExpandMore className="text-2xl hidden sm:block" />
						</div>
					</div>
				</div>
			</nav>
		</>
	);
};

export default Navbar;
