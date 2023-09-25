import React from 'react'
import toast from 'react-hot-toast';

const notify = () => toast.success("Successfully Submitted!");
const Checks = () => {
     let handleSubmit = e => {
       e.preventDefault();
     };
  return (
    <div className="shadow-md sm:rounded-lg h-full w-[97%] flex flex-col gap-7  px-20 justify-center ml-6 rounded-lg  relative z-10 bg-white right-2 ">
      <form className="flex flex-col gap-8" onSubmit={handleSubmit}>
        <article className="flex flex-col gap-2">
          <p className="font-semibold">
            1.In which domain are you intrested to take up the Boot Camp ?
          </p>
          <main className="flex gap-10 ml-4">
            <div className="flex gap-2">
              <input
                type="checkbox"
                name="Domain"
                value="Software Testing"
                checked
              />
              <span>Software Testing</span>
            </div>
            <div className="flex gap-2">
              <input
                type="checkbox"
                name="Domain"
                value="Software Development"
              />
              <span>Software Development</span>
            </div>
            <div className="flex gap-2">
              <input type="checkbox" name="Domain" value="Devops Engineer" />
              <span>Devops Engineer</span>
            </div>
            <div className="flex gap-2">
              <input type="checkbox" name="Domain" value="Tech Support" />
              <span>Tech Support</span>
            </div>
          </main>
        </article>
        <article className="flex flex-col gap-2">
          <p className="font-semibold">
            2.In which mode do you want to take Boot Camp ?
          </p>
          <main className="flex gap-10 ml-4">
            <div className="flex gap-2">
              <input type="checkbox" name="mode" checked value="Offline" />
              <span>Offline</span>
            </div>
            <div className="flex gap-2">
              <input type="checkbox" name="mode" value="Online" />
              <span>Online</span>
            </div>
          </main>
        </article>

        <article className="flex justify-end w-[93%]">
          <input
            type="submit"
            value="Submit"
            className="border-2 border-orange-400 bg-orange-400 px-2 py-1 text-white rounded-sm hover:bg-orange-500 font-medium "
            onClick={notify}
          />
        </article>
      </form>
    </div>
  );
}

export default Checks
