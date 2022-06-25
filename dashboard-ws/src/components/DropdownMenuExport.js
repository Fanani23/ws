import {Menu} from "@headlessui/react";
import {
  MdDeleteOutline,
  MdMoreVert,
  MdOutlineInsertDriveFile,
  MdOutlinePrint,
} from "react-icons/md";

const DropdownMenuExport = (props) => {
  return (
    <Menu as="div" className="relative ml-3 z-40">
      <Menu.Button className="active:bg-gray-200 hover:bg-gray-200 rounded-lg px-2 py-3">
        <MdMoreVert className="text-black" />
      </Menu.Button>
      <Menu.Items className="absolute origin-top-right right-0 mt-1 min-w-[180px] rounded-lg shadow-lg bg-white border">
        <div className="py-1">
          <Menu.Item>
            {({active}) => (
              <button
                className={`${
                  active ? "bg-primary-100 bg-opacity-5" : ""
                } flex items-center group text-gray-400 text-sm px-4 py-2 w-full`}
                onClick={props.print}
              >
                <MdOutlinePrint className="mr-4 text-lg" />
                <span className="font-semibold">Print Out</span>
              </button>
            )}
          </Menu.Item>
          <Menu.Item>
            {({active}) => (
              <button
                className={`${
                  active ? "bg-primary-100 bg-opacity-5" : ""
                } flex items-center group text-gray-400 text-sm px-4 py-2 w-full`}
                onClick={props.export}
              >
                <MdOutlineInsertDriveFile className="mr-4 text-lg" />
                <span className="font-semibold">Export Excel</span>
              </button>
            )}
          </Menu.Item>
          <Menu.Item>
            {({active}) => (
              <button
                className={`${
                  active ? "bg-primary-100 bg-opacity-5" : ""
                } flex items-center group text-gray-400 text-sm px-4 py-2 w-full`}
                onClick={props.close}
              >
                <MdDeleteOutline className="mr-4 text-lg" />
                <span className="font-semibold">Close</span>
              </button>
            )}
          </Menu.Item>
        </div>
      </Menu.Items>
    </Menu>
  );
};

export default DropdownMenuExport;
