export function AddTask(params) {
  return (
    <div className="w-4/12 m-auto mt-8">
      <p className="text-center">New task</p>
      <div className="flex flex-col">
        <input type="text" className=" border border-grey-700 p-1 rounded" />
        <button className="bg-green-700 hover:bg-green-600 text-white rounded w-auto pl-4 pr-4 h-8 mt-2">
          Add New Task
        </button>
      </div>
    </div>
  );
}
