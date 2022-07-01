
function Session() {
	let lc = localStorage;
	let hdr;
	let token = lc.getItem("token");

	if (token) {
		hdr = {
			headers: {
				"Authorization": "Bearer "+token
			}
		}
	} else {
		hdr = null;
	}

	return hdr;
}

export default Session;
