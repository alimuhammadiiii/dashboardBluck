import { Navigate, Outlet } from "react-router-dom";
import { useUserData } from "../components/useUserInfo";

export default function Dashboard() {
  const userData = useUserData();

  userData?.roles.includes("user:register");

  return (
    <>
      {!userData ? <Navigate to="/login" /> : null}
      <section className="w-screen h-screen">
        <div className="w-[320px] h-full bg-[#F1F1F1] p-6 gap-8 flex flex-col relative">
          <div className="flex gap-2 items-center">
            <img
              src="/images/user.png"
              width={50}
              height={50}
              className="rounded-full"
              alt="user icon"
            />
            <p className="text-[#000] font-sans text-[20px] leading-6">{userData?.user.name}</p>
          </div>

          <ul>
            <div className="collapse bg-base-200">
              <input type="radio" name="my-accordion-1" />
              <div className="collapse-title text-xl font-medium">User Management</div>
              <div className="collapse-content">
                <p>Edit</p>
                <p>Delete</p>
                <p>Register</p>
              </div>
            </div>
            <div className="collapse bg-base-200">
              <input type="radio" name="my-accordion-1" />
              <div className="collapse-title text-xl font-medium whitespace-nowrap">
                Command Management
              </div>
              <div className="collapse-content">
                <p>Edit</p>
                <p>Delete</p>
                <p>See</p>
                <p>Add</p>
              </div>
            </div>
            <div className="collapse bg-base-200">
              <input type="radio" name="my-accordion-1" />
              <div className="collapse-title text-xl font-medium">Device Management</div>
              <div className="collapse-content">
                <p>See</p>
                <p>Delete</p>
              </div>
            </div>
          </ul>
          <button className="flex gap-3 items-center  p-3 absolute bottom-8">
            <img src="/images/logout.svg" width={24} height={24} alt="sdfsd" />
            <p>Sign out</p>
          </button>
        </div>
        <div>
          <Outlet />
        </div>
      </section>
    </>
  );
}
