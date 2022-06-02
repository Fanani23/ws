import TabTitle from "../utils/GeneralFunction";
import logo from "../img/kato-fullsize.png";
import {MdPerson, MdOutlineLock} from "react-icons/md";

const Login = () => {
	TabTitle("Login - Kato Haircut");

	return (
		<div className="h-screen flex justify-center items-center bg-primary-100 py-5 overflow-y-auto">
			<div className="max-w-sm flex flex-col mx-2">
				<img src={logo} alt="Kato Hair Design" srcset="" />
				<div className="bg-white rounded-lg flex flex-col mt-5 items-center py-10">
					<h1 className="text-primary-100 font-semibold text-2xl mb-10 font-noto-sans">
						LOGIN
					</h1>
					<form action="" className="flex flex-col">
						<div className="relative w-full mb-2">
							<input
								className="border border-primary-100 outline-none focus:ring-1 focus:ring-primary-100 text-primary-100 text-sm font-nunito-sans rounded-lg pl-10 pr-4 py-3"
								type="text"
								name="user"
								id="user"
								placeholder="User"
							/>
							<label
								htmlFor="user"
								className="absolute top-3.5 left-3.5"
							>
								<MdPerson className="text-xl text-primary-100" />
							</label>
						</div>
						<div className="relative w-full mb-2">
							<input
								className="border border-primary-100 outline-none focus:ring-1 focus:ring-primary-100 text-primary-100 text-sm font-nunito-sans rounded-lg pl-10 pr-4 py-3"
								type="password"
								name="password"
								id="password"
								placeholder="Password"
							/>
							<label
								htmlFor="password"
								className="absolute top-3.5 left-3.5"
							>
								<MdOutlineLock className="text-xl text-primary-100" />
							</label>
						</div>
						<button
							type="submit"
							className="w-full bg-primary-100 outline-none hover:bg-primary-50 focus:bg-primary-50 focus:ring-2 focus:ring-primary-75 active:bg-primary-75 py-3 text-sm font-nunito-sans font-bold rounded-lg text-white"
						>
							Submit
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Login;
