import {MdTrendingUp} from "react-icons/md";

const CardInfo = (props) => {
	return (
		<div className="p-5 m-1 bg-primary-500 rounded-lg flex flex-col flex-grow flex-shrink-0">
			<div className="flex justify-between items-center">
				<h1 className="text-white font-nunito-sans text-sm">
					{props.title}
				</h1>
				<div className="bg-white p-2 rounded-lg">
					{props.icon}
				</div>
			</div>
			<h1 className="font-nunito-sans text-white font-bold text-2xl my-4">
				{props.value}
			</h1>
			<div className="flex flex-row items-center">
				<MdTrendingUp className="text-[#48C134] mr-2" />
				<p className="font-nunito-sans text-white">18% Up from Yesterday</p>
			</div>
		</div>
	);
};

export default CardInfo;
