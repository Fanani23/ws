import { NavLink } from "react-router-dom";

const ReportNavLink = () => {
  return (
    <div className="flex flex-row space-x-2">
      <NavLink
        to="../order"
        className={({isActive}) =>
          isActive
            ? "flex items-center bg-white text-black hover:bg-slate-100 font-semibold px-5 py-2 rounded-lg"
            : "flex items-center bg-black text-white hover:bg-primary-500 font-semibold px-5 py-2 rounded-lg"
        }
      >
        Order
      </NavLink>
      <NavLink
        to="../transaction"
        className={({isActive}) =>
          isActive
            ? "flex items-center bg-white text-black hover:bg-slate-100 font-semibold px-5 py-2 rounded-lg"
            : "flex items-center bg-black text-white hover:bg-primary-500 font-semibold px-5 py-2 rounded-lg"
        }
      >
        Transaction
      </NavLink>
    </div>
  );
}

export default ReportNavLink;