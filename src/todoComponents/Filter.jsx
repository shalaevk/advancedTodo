export function Filter() {
  return (
    <div className="flex flex-col items-center justify-center mt-8 border-b  pb-8">
      <label htmlFor="filterTasks" className="mr-4 text-2xl pb-2">
        Find task
      </label>
      <input
        type="text"
        id="filterTasks"
        className="border border-grey-800 p-1 rounded"
      ></input>
      <label className=" pt-4 cursor-pointer hover:underline">
        <input
          type="checkbox"
          name="completed-todos"
          id="completedTasks"
          className="mr-2"
        />
        Completed Tasks
      </label>
    </div>
  );
}
