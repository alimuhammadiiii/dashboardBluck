function Login() {
  return (
    <section className="w-screen h-screen flex flex-col justify-center items-center px-4">
      <form
        action=""
        className="flex w-full flex-col gap-10 max-w-lg bg-[#fbfbfb] rounded-3xl border border-[#D6D6D6] p-10 m-auto"
      >
        <p className="text-[#000] text-[35px] font-semibold ">Login</p>
        <input type="email" placeholder="email" className="input input-bordered w-full " />
        <input type="text" placeholder="password" className="input input-bordered w-full " />
        <button className="w-fit no-underline text-[#333333]">Forget Password</button>
        <input
          type="submit"
          value={"continue"}
          className="input input-bordered text-[#fff] text-[15px] w-full bg-[#0016DF] flex justify-center items-center"
        />
      </form>
    </section>
  );
}

export default Login;
