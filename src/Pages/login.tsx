import { useState } from "react";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { UserInfo, useSetUserData } from "../components/useUserInfo";
type LoginForm = {
  email: string;
  password: string;
};

type LoginResData = {
  message: string;
  content: UserInfo;
};
// {
//   headers: { Authorization: `Bearer ${"2|I6AUEI9LBUC8oYJcUgN4scjsEjrqXn1Sx7MVGVEk"}` },
// }
function Login() {
  const [loginForm, setLoginForm] = useState<LoginForm>({ email: "", password: "" });
  const nav = useNavigate();
  const setUserInfo = useSetUserData();
  const mutation = useMutation({
    mutationFn: async (data: FormData) => {
      return (await axios.post("http://127.0.0.1:8000/api/login", data))
        .data as Promise<LoginResData>;
    },
    onSuccess: (data: LoginResData) => {
      setUserInfo(data.content);
      setLoginForm({ email: "", password: "" });
      toast.success(data.message);
      console.log(data);
      localStorage.setItem("userInfo", JSON.stringify(data.content));
      nav("/");
    },
    onError: (error: { message: string; content: null }) => {
      toast.error(error.message);
    },
  });
  return (
    <section className="w-screen h-screen flex flex-col justify-center items-center px-4">
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="flex w-full flex-col gap-10 max-w-lg bg-[#fbfbfb] rounded-3xl border border-[#D6D6D6] p-10 m-auto"
      >
        <p className="text-[#000] text-[35px] font-semibold ">Login</p>
        <input
          value={loginForm.email}
          onChange={(e) => setLoginForm({ ...loginForm, email: e.target.value })}
          type="email"
          placeholder="email"
          className="input input-bordered w-full "
        />
        <input
          value={loginForm.password}
          onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })}
          type="password"
          placeholder="password"
          className="input input-bordered w-full "
        />
        <button className="w-fit no-underline text-[#333333]">Forget Password</button>
        <button
          onClick={handleLogin}
          className="input input-bordered text-[#fff] text-[15px] w-full bg-[#0016DF] flex justify-center items-center"
        >
          Login
        </button>
      </form>
    </section>
  );

  function handleLogin() {
    const data = new FormData();
    data.append("email", loginForm.email);
    data.append("password", loginForm.password);
    console.log(mutation.mutate(data));
  }
}

export default Login;
