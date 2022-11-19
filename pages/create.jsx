import React, { useState } from 'react';

const create = () => {
  const [files, setFile] = useState([]);
  const [message, setMessage] = useState();
  const handleFile = (e) => {
    setMessage('');
    let file = e.target.files;

    for (let i = 0; i < file.length; i++) {
      const fileType = file[i]['type'];
      const validImageTypes = ['image/gif', 'image/jpeg', 'image/png'];
      if (validImageTypes.includes(fileType)) {
        setFile([...files, file[i]]);
      } else {
        setMessage('only images accepted');
      }
    }
  };
  const removeImage = (i) => {
    setFile(files.filter((x) => x.name !== i));
  };
  return (
    <div>
      <div className="flex justify-center items-center mb-4">
        <h1 className="text-2xl font-bold text-black mt-4">
          ✍️ Create a soulbound token
        </h1>
      </div>
      <div className="card lg:card-side bg-white border-[2px] border-[#f2dbd0] ml-12 mr-12 rounded-2xl">
        {/* give the whole card some spacing and padding */}
        <div className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Choose a token factory</span>
            </label>
            <select className="select select-bordered w-full">
              <option disabled selected>
                Token Factory
              </option>
              <option>Token Factory 1</option>
              <option>Token Factory 2</option>
              <option>Token Factory 3</option>
              <option>Token Factory 4</option>
              <option>Token Factory 5</option>
              <option>Token Factory 6</option>
            </select>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Token Name</span>
            </label>
            <input type="text" className="input input-bordered" />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <input type="text" className="input input-bordered" />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Date</span>
            </label>
            <input type="text" className="input input-bordered" />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">
                Issuer name (you or organization)
              </span>
            </label>
            <input type="text" className="input input-bordered" />
          </div>
          <div className="form-control mt-6">
            <a
              href="#_"
              className="relative inline-block px-4 py-2 font-medium group mt-4 w-[200px] mx-auto  text-center"
            >
              <span className="absolute rounded-lg inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-[#bff22d] border-[2px] border-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
              <span className="absolute rounded-lg inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-[#bff22d]"></span>
              <span className="relative text-black text-center">
                Create token
              </span>
            </a>
          </div>
        </div>
        <div className="card-body">
          <div className="flex justify-center items-center bg-white px-2">
            <div className="p-3 w-full rounded-md">
              <span className="flex justify-center items-center bg-white text-[12px] mb-1 text-red-500">
                {message}
              </span>
              <div className="h-64 w-full overflow-hidden relative shadow-md border-2 items-center rounded-md cursor-pointer">
                <input
                  type="file"
                  onChange={handleFile}
                  className="h-full w-full opacity-0 z-10 absolute"
                  multiple="multiple"
                  name="files[]"
                />
                <div className="h-full w-full bg-[#e4e4e4] absolute z-1 flex justify-center items-center top-0">
                  <div className="flex flex-col">
                    <i className="mdi mdi-folder-open text-[30px] text-black text-center"></i>
                    <span className="text-lg">{`Drag and drop your token image here`}</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap justify-center items-center mt-2">
                <h1 className="text-md text-black mt-4">
                  Please upload .png or .jpg files only, max 10MB
                </h1>
              </div>
              <div className="flex flex-wrap gap-2 mt-2">
                {files.map((file, key) => {
                  return (
                    <div
                      key={key}
                      className="w-full h-16 flex items-center justify-between rounded p-3 bg-white"
                    >
                      <div className="flex flex-row items-center gap-2">
                        <div className="h-12 w-12 ">
                          <img
                            className="w-full h-full rounded"
                            src={URL.createObjectURL(file)}
                          />
                        </div>
                        <span className="truncate w-44">{file.name}</span>
                      </div>
                      <div
                        onClick={() => {
                          removeImage(file.name);
                        }}
                        className="h-6 w-6 bg-red-400 flex items-center cursor-pointer justify-center rounded-sm"
                      >
                        <i className="mdi mdi-trash-can text-white text-[14px]"></i>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default create;

{
  /* <div className="flex justify-center items-center bg-white px-2">
<div className="p-3 md:w-1/2 w-[360px] rounded-md">
  <span className="flex justify-center items-center bg-white text-[12px] mb-1 text-red-500">
    {message}
  </span>
  <div className="h-32 w-full overflow-hidden relative shadow-md border-2 items-center rounded-md cursor-pointer   border-gray-400 border-dotted">
    <input
      type="file"
      onChange={handleFile}
      className="h-full w-full opacity-0 z-10 absolute"
      multiple="multiple"
      name="files[]"
    />
    <div className="h-full w-full bg-gray-200 absolute z-1 flex justify-center items-center top-0">
      <div className="flex flex-col">
        <i className="mdi mdi-folder-open text-[30px] text-gray-400 text-center"></i>
        <span className="text-[12px]">{`Drag and Drop a file`}</span>
      </div>
    </div>
  </div>
  <div className="flex flex-wrap gap-2 mt-2">
    {files.map((file, key) => {
      return (
        <div
          key={key}
          className="w-full h-16 flex items-center justify-between rounded p-3 bg-white"
        >
          <div className="flex flex-row items-center gap-2">
            <div className="h-12 w-12 ">
              <img
                className="w-full h-full rounded"
                src={URL.createObjectURL(file)}
              />
            </div>
            <span className="truncate w-44">{file.name}</span>
          </div>
          <div
            onClick={() => {
              removeImage(file.name);
            }}
            className="h-6 w-6 bg-red-400 flex items-center cursor-pointer justify-center rounded-sm"
          >
            <i className="mdi mdi-trash-can text-white text-[14px]"></i>
          </div>
        </div>
      );
    })}
  </div>
</div>
</div> */
}
