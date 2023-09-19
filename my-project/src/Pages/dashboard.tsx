export default function Dashboard() {
  return (
    <section className="w-screen h-screen">
      <div className="w-[320px] h-full bg-[#F1F1F1] p-8 gap-8 flex flex-col relative">
        <div className="flex gap-2 items-center">
          <img src="/images/user.png" width={50} height={50} className="rounded-full" alt="user icon" />
          <p className="text-[#000] font-sans text-[20px] leading-6">UserName</p>
        </div>
        <ul className="flex flex-col gap-2">
          <li className="text-base p-3 w-fit text-[#fff] bg-[#0832DE] rounded-lg">sample</li>
          <li className="text-base p-3 w-fit">sample</li>
          <li className="text-base p-3 w-fit">sample</li>
          <li className="text-base p-3 w-fit">sample</li>
        </ul>
        <button className="flex gap-3 items-center  p-3 absolute bottom-8">
          <img src="/images/logout.svg" width={24} height={24} alt="sdfsd" />
          <p>Sign out</p>
        </button>
      </div>
      <div></div>
    </section>
  );
}
