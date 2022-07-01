
function getName()
{
	let lc = localStorage;
	let user = JSON.parse(lc.getItem("user"));
	if (!user)
		return null;
	return user.username;
}

function Session() {
	let lc = localStorage;
	let hdr;
	let token = lc.getItem("token");

	if (token) {
		hdr = {
			headers: {
				"Authorization": "Bearer "+token
			}
		};
	} else {
		hdr = null;
	}

	return hdr;
}

export { getName, Session };
export default Session;
