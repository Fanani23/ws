import {Dialog, Transition} from "@headlessui/react";
import {Fragment} from "react";
import {MdClose} from "react-icons/md";

const ModalShowDetailOrder = ({show, close, dataDetail}) => {
  return (
    <Transition appear show={show} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={close}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-50" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="div"
                  className="text-lg text-center font-medium leading-6 text-gray-900 p-8 pb-1"
                >
                  <div
                    onClick={close}
                    className="rounded-full p-0.5 top-2 right-2 bg-gray-200 absolute"
                    role="button"
                  >
                    <MdClose className="relative" />
                  </div>
                </Dialog.Title>
                <div className="flex flex-col p-5">
                  <h1>Order ID {dataDetail?.code}</h1>
                  <h1>Date: {dataDetail?.datetime}</h1>
                  {dataDetail.transactionItems ? (
                    <table>
                      <thead>
                        <tr>
                          <th>ID Product</th>
                          <th>Product Name</th>
                          <th>Category</th>
                          <th>Stylist</th>
                          <th>Price</th>
                        </tr>
                      </thead>
                      <tbody>
                        {dataDetail.transactionItems.map((data) => (
                          <tr key={data.id}>
                            <td>code tdk ada</td>
                            <td>{data.product_name}</td>
                            <td>tidak ada</td>
                            <td>{data.employee_name}</td>
                            <td>{data.price_after_discount}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  ) : (
                    <span>No transaction is recorded!</span>
                  )}
                  <ul className="flex flex-col">
                    <li className="flex justify-end">
                      Sub Total: {dataDetail?.subtotal}
                    </li>
                    <li className="flex justify-end">
                      Discount: {dataDetail?.discount_total}
                    </li>
                    <li className="flex justify-end">
                      Total Payment: blm ada data
                    </li>
                  </ul>
                  <div className="flex justify-end">
                    <button
                      className="bg-red-500 px-3 py-2 rounded-lg"
                      onClick={close}
                    >
                      Close
                    </button>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default ModalShowDetailOrder;
