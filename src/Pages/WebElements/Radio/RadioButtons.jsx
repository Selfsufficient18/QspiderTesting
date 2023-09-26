import React, { useContext } from 'react'
import toast from 'react-hot-toast';
import { ContextProvider } from '../../../contextApi/GlobalContext';

const notify = () => toast.success("Successfully Submitted!");
const RadioButtons = () => {

    let {
      RClickedForDrop,
      setRclcikedDrop,
      RgetScDrop,
      setRGetscDrop,
      handleGetRDrop,
    } = useContext(ContextProvider);

      let handleSubmit = e => {
        e.preventDefault();
      };
  return (
    <div className="shadow-md sm:rounded-lg h-full w-[97%] flex flex-col gap-7  px-20 justify-center ml-6 rounded-lg  relative z-10 bg-white right-2 ">
      <form className="flex flex-col gap-8" onSubmit={handleSubmit}>
        <article className="flex flex-col gap-2">
          <p className="font-semibold">1.Have you ever attended Boot Camp ?</p>
          <main className="flex gap-10 ml-4">
            <div className="flex gap-2">
              <input type="radio" name="Attended" value="Yes" checked />
              <span>Yes</span>
            </div>
            <div className="flex gap-2">
              <input type="radio" name="Attended" value="No" />
              <span>No</span>
            </div>
          </main>
        </article>
        <article className="flex flex-col gap-2">
          <p className="font-semibold">
            2.Are you willing to take the Boot Camp course ?
          </p>
          <main className="flex gap-10 ml-4">
            <div className="flex gap-2">
              <input type="radio" name="Willing" checked value="Yes" />
              <span>Yes</span>
            </div>
            <div className="flex gap-2">
              <input type="radio" name="Willing" value="No" />
              <span>No</span>
            </div>
            <div className="flex gap-2">
              <input type="radio" name="Willing" value="Maybe" />
              <span>Maybe</span>
            </div>
          </main>
        </article>
        <article className="flex flex-col gap-2">
          <p className="font-semibold">
            3.Are you willing to travel to any region to attend Boot Camp ?
          </p>
          <main className="flex gap-10 ml-4">
            <div className="flex gap-2">
              <input type="radio" name="Region" checked value="Yes" />
              <span>Yes</span>
            </div>
            <div className="flex gap-2">
              <input type="radio" name="Region" value="No" />
              <span>No</span>
            </div>
            <div className="flex gap-2">
              <input type="radio" name="Region" value="Maybe" />
              <span>Maybe</span>
            </div>
          </main>
        </article>
        <article className="flex justify-end w-[93%]">
          <button
            type="button"
            className="border-2 border-orange-400 bg-orange-400 px-2 py-1 text-white rounded-sm hover:bg-orange-500 font-medium"
            onClick={notify}
          >
            Submit
          </button>
        </article>
      </form>
    </div>
  );
}

export default RadioButtons
