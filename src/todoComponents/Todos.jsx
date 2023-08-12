export function Todos() {
  return (
    <div className="flex mb-4 border-b border-grey-200 pb-4 ">
      <div className="flex justify-between items-center w-full">
        <label className="w-10/12 cursor-pointer hover:line-through">
          <input type="checkbox" id="finished" className="mr-2" />
          Lorem ipsum
        </label>
        <div className="w-2/12 flex justify-between">
          <button className="w-1/2 h-8 ml-1 mr-1 bg-blue-700 hover:bg-blue-500 text-white rounded">
            Edit
          </button>
          <button className="w-1/2 h-8 ml-1 mr-1 bg-red-700 hover:bg-red-500 text-white rounded">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
