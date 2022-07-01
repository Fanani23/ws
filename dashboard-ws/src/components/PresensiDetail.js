import axios from "axios";
import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import BackButton from "../components/BackButton";
import DropdownMenuExport from "../components/DropdownMenuExport";
import Pagination from "../components/Pagination";
import Search from "../components/Search";
import TabTitle from "../utils/GeneralFunction";
import { Link } from "react-router-dom";
import TableEmployee from "./TableEmployee";

const PresensiDetail = ({detailPresensi}) => {
	
	return (
		<div className="flex flex-col h-full font-noto-sans">
			<div className="bg-white rounded-lg overflow-hidden flex h-full flex-col">
                <div className="px-5 py-3">
                    <div className="flex flex-row p-3">
                        <div className="flex flex-row">
                            <div className="flex flex-col">
                                <h1 style={{fontWeight: 'bold'}} className="text-black font-bold text-lg mt-1 mb-2 mr-20" >
                                    {detailPresensi.name}
                                </h1>
                                <h1 className="text-gray-400 font-semibold text-md">
                                    {detailPresensi.code}
                                </h1>
                                <h5 style={{fontWeight: 'normal'}} className="text-black text-lg mt-6">
                                    Total Presensi
                                </h5>	
                            </div>
                            <div className="flex flex-row">
                                <DropdownMenuExport/>
                            </div>
                        </div>
                    </div>
                </div>
			</div>
		</div>
	);
};

export default PresensiDetail;
