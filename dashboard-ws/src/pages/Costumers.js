import {
	MdSearch,
	MdAdd,
	MdModeEditOutline,
	MdDeleteOutline,
	MdClose,
} from "react-icons/md";
import {Fragment, useState} from "react";
import {Link} from "react-router-dom";
import {Dialog, Transition} from "@headlessui/react";
import TabTitle from "../utils/GeneralFunction";

const Customers = () => {
	TabTitle("Customers - Kato Haircut");
	const [openAddCustomers, setOpenAddCustomers] = useState(false);

	const closeAddCustomersModal = () => {
		setOpenAddCustomers(false);
	};

	const openAddCustomersModal = () => {
		setOpenAddCustomers(true);
	};

	return (
		
	);
};

export default Customers
