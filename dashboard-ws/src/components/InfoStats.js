const InfoStats = (props) => {
	return (
		<>
			<div className="flex justify-between items-center">
				<h1 className="text-white font-nunito-sans text-sm">
					{props.title}
				</h1>
				<div className="bg-white p-2 rounded-lg">{props.icon}</div>
			</div>
			<h1 className="font-nunito-sans text-white font-bold text-2xl my-4">
				{props.value}
			</h1>
			<div className="flex flex-row items-center">
				{props.status}
			</div>
		</>
	);
};

export default InfoStats;
