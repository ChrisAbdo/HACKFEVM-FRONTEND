import React, { Fragment, useRef, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';

const AssignDialog = ({ open, cancelButtonRef, setOpen }) => {
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10000"
        initialFocus={cancelButtonRef}
        onClose={setOpen}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-xl max-w-2xl">
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="flex-shrink-0 grid grid-cols-3">
                    <div className="h-300 w-300">
                      <div className="w-300 h-300">
                        <img
                          src="https://placeimg.com/400/225/arch"
                          alt="SBT"
                          className="object-cover rounded-md w-300 h-300"
                        />
                      </div>
                    </div>
                    <div className="col-span-2 mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-200">
                      <Dialog.Title
                        as="h2"
                        className="text-2xl font-bold leading-6 text-gray-900"
                      >
                        Dealbreaker
                      </Dialog.Title>
                      <div className="mt-2">
                        <p className="text-sm text-black-500 font-bold">
                          Description
                        </p>
                      </div>
                      <div className="mt-2">
                        <p className="text-sm text-gray-500">
                          Lorem Ipsum Dolor Sit Amet
                        </p>
                      </div>
                      <div className="mt-2">
                        <p className="text-sm text-black-500 font-bold">
                          Creation Date
                        </p>
                      </div>
                      <div className="mt-2">
                        <p className="text-sm text-gray-500">
                          November 21, 2022
                        </p>
                      </div>
                      <div className="mt-2">
                        <p className="text-sm text-black-500 font-bold">
                          Issuer
                        </p>
                      </div>
                      <div className="mt-2">
                        <p className="text-sm text-gray-500">FVM Foundation</p>
                      </div>
                      <div className="mt-2">
                        <p className="text-sm text-black-500 font-bold">
                          Token Factory
                        </p>
                      </div>
                      <div className="mt-2">
                        <p className="text-sm text-gray-500">
                          Dealbreaker Factory
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 flex justify-between items-center w-100">
                  <div className="pr-5">
                    <p className="text-md text-black-500">Assign To</p>
                  </div>
                  <div className="form-control grow">
                    <input type="text" className="input input-bordered" />
                  </div>
                  <button
                    type="button"
                    className="ml-5 text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                    onClick={() => setOpen(false)}
                  >
                    <svg
                      x="0px"
                      y="0px"
                      viewBox="0 0 512 512"
                      className="w-5  h-5"
                    >
                      <path d="M503.138,3.233c-3.31-3.288-8.304-4.162-12.532-2.19L12.003,223.649c-3.772,1.755-6.25,5.469-6.424,9.625    c-0.174,4.159,1.984,8.066,5.598,10.13l153.15,87.515l98.667,175.405c1.978,3.516,5.69,5.675,9.701,5.675    c0.157,0,0.315-0.007,0.478-0.011c4.185-0.181,7.918-2.697,9.652-6.518L505.432,15.739C507.361,11.5,506.443,6.512,503.138,3.233z     M40.91,234.758L441.264,48.544L170.805,308.985L40.91,234.758z M271.641,476.294l-85.197-151.463L460.397,61.026L271.641,476.294    z" />
                    </svg>

                    <span class="sr-only">Icon description</span>
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

const assign = () => {
  const [open, setOpen] = useState(false);
  const cancelButtonRef = useRef(null);

  return (
    <div>
      <div className="flex justify-center items-center mb-4">
        <h1 className="text-2xl font-bold text-black mt-4">
          💌️ Assign a soulbound token
        </h1>
      </div>
      <div>
        <input
          type="checkbox"
          id="assign-dealbreaker"
          className="modal-toggle"
        />
        <label htmlFor="assign-dealbreaker" className="modal cursor-pointer">
          <label className="modal-box relative" htmlFor="">
            <h3 className="text-lg font-bold">
              Congratulations random Internet user!
            </h3>
            <p className="py-4">
              You've been selected for a chance to get one year of subscription
              to use Wikipedia for free!
            </p>
          </label>
        </label>
      </div>
      <AssignDialog
        open={open}
        cancelButtonRef={cancelButtonRef}
        setOpen={setOpen}
      />

      <div className="flex justify-center items-center">
        <div className="card md:card-side self-center bg-white w-8/12 border-[2px] border-[#f2dbd0] rounded-2xl p-4">
          <div className="grid grid-cols-6 divide-x">
            <div className="rounded-2xl">
              <ul className="menu bg-base-100 w-56 p-2 rounded-box">
                <li className="link">Available to assign</li>
                <li className="link link-hover">Pending</li>
                <li className="link link-hover">Assigned</li>
              </ul>
            </div>
            <div className="col-span-5">
              <div className="flex justify-center items-center bg-white px-2">
                <div className="grid grid-cols-3 p-4">
                  <div
                    className="card w-64 bg-base-100 shadow-md cursor-pointer"
                    onClick={() => {
                      setOpen(true);
                    }}
                  >
                    <figure className="px-2 pt-2">
                      <img
                        src="https://placeimg.com/400/225/arch"
                        alt="SBT"
                        className="rounded-md"
                      />
                    </figure>
                    <div className="card-body items-center text-center p-6">
                      <h2 className="card-title">Dealbreaker</h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default assign;