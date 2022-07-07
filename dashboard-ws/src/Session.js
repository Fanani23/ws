function getName() {
  let lc = localStorage;
  let user = JSON.parse(lc.getItem("user"));
  if (!user) return null;
  return user.username;
}

function getRole() {
  const {role} = JSON.parse(localStorage.getItem("user"));
  if (!role) return null;
  return role;
}

function getId() {
  const {id} = JSON.parse(localStorage.getItem("user"));
  if (!id) return null;
  return id;
}

function Session() {
  let lc = localStorage;
  let hdr;
  let token = lc.getItem("token");

  if (token) {
    hdr = {
      headers: {
        Authorization: "Bearer " + token,
      },
    };
  } else {
    hdr = null;
  }

  return hdr;
}

export {getName, Session, getRole, getId};
export default Session;
