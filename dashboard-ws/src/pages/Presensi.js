import DetailPresensi from "components/DetailPresensi";
import ListPresensi from "components/ListPresensi";

export default function Presensi() {
	return (
		<div className="flex flex-row space-x-5 ml-2 max-h-screen overflow-hidden">
			<ListPresensi />
			<div className="flex justify-end">
				<DetailPresensi />
			</div>
		</div>
	);
}
