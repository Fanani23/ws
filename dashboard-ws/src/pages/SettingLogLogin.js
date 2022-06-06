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
import TabTitle from "../utils/GeneralFunction"

const SettingLogLogin = () => {
  TabTitle("Log - Kato Haircut")

  return (
    <div className="w-full flex flex-col grow overflow-ayto scrollbar-shown">
    <div className="bg-white w-full p-5 rounded-lg overflow-hidden flex h-full flex-col">
        <table className="mt-5 font-nunito-sans text-xs w-full overflow-y-scroll">
          <thead>
              <tr className="bg-[#F9F9FC] text-black text-left">
                <th className="py-2">Phone Number</th>
                <th className="py-2">Username</th>
              </tr>
          </thead>
          <tbody>
            <tr className="even:bg-[#F9F9FC] text-black">
              <td className="py-2">05/06/2022 - 06.37</td>
              <td className="py-2">US001</td>
            </tr>
            <tr className="even:bg-[#F9F9FC] text-black">
              <td className="py-2">05/06/2022 - 06.49</td>
              <td className="py-2">US002</td>
            </tr>
            <tr className="even:bg-[#F9F9FC] text-black">
              <td className="py-2">05/06/2022 - 06.51</td>
              <td className="py-2">US003</td>
            </tr>
            <tr className="even:bg-[#F9F9FC] text-black">
              <td className="py-2">05/06/2022 - 07.24</td>
              <td className="py-2">US004</td>
            </tr>
            <tr className="even:bg-[#F9F9FC] text-black">
              <td className="py-2">05/06/2022 - 07.31</td>
              <td className="py-2">US005</td>
            </tr>
            <tr className="even:bg-[#F9F9FC] text-black">
              <td className="py-2">05/06/2022 - 07.46</td>
              <td className="py-2">US006</td>
            </tr>
            <tr className="even:bg-[#F9F9FC] text-black">
              <td className="py-2">05/06/2022 - 07.59</td>
              <td className="py-2">US007</td>
            </tr>
            <tr className="even:bg-[#F9F9FC] text-black">
              <td className="py-2">05/06/2022 - 08.00</td>
              <td className="py-2">US008</td>
            </tr>
            <tr className="even:bg-[#F9F9FC] text-black">
              <td className="py-2">05/06/2022 - 09.00</td>
              <td className="py-2">US009</td>
            </tr>
            <tr className="even:bg-[#F9F9FC] text-black">
              <td className="py-2">05/06/2022 - 09.15</td>
              <td className="py-2">US010</td>
            </tr>
          </tbody>
        </table>
        <nav
        class="flex flex-row space-x-3 mx-auto"
        aria-label="Pagination"
      >
        <a
          href="/presensi"
          aria-current="page"
          className="bg-black border-black text-white relative inline-flex items-center px-4 py-2 border text-sm font-medium rounded-lg"
        >
          {" "}
          1{" "}
        </a>
        <a
          href="/presensi"
          className="bg-white border-black text-black hover:bg-gray-900 hover:text-gray-300 relative inline-flex items-center px-4 py-2 border text-sm font-medium rounded-lg"
        >
          {" "}
          2{" "}
        </a>
        <a
          href="/presensi"
          className="bg-white border-black text-black hover:bg-gray-900 hover:text-gray-300 relative inline-flex items-center px-4 py-2 border text-sm font-medium rounded-lg"
        >
          {" "}
          3{" "}
        </a>
        <a
          href="/presensi"
          className="relative inline-flex items-center px-2 py-2 rounded-lg border border-black bg-black text-sm font-medium text-white hover:bg-gray-900 hover:text-gray-300"
        >
          <span class="sr-only">Previous</span>
          <svg
            class="h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
              clip-rule="evenodd"
            />
          </svg>
        </a>
        <a
          href="/presensi"
          className="relative inline-flex items-center px-2 py-2 rounded-lg border border-black bg-black text-sm font-medium text-white hover:bg-gray-900 hover:text-gray-300"
        >
          <span class="sr-only">Next</span>
          <svg
            class="h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clip-rule="evenodd"
            />
          </svg>
        </a>
      </nav>
    </div>
  </div>
  )
}

export default SettingLogLogin