const CardForDataChart = props => {
	return (
		<div
			className={`p-5 m-1 bg-primary-500 rounded-lg flex flex-col flex-grow flex-shrink-0 ${props.cName}`}
		>
			<div className="flex flex-col">
				<h1 className="text-white font-nunito-sans text-sm font-semibold">
					{props.title}
				</h1>
				<h1 className="text-white font-nunito-sans text-xs">
					{props.alt}
				</h1>
			</div>
			{props.chartComponent}
		</div>
	);
};

export default CardForDataChart;
