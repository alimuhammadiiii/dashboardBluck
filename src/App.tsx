import { Routes, Route } from "react-router-dom";
import Login from "./Pages/login";
import Dashboard from "./Pages/dashboard";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";
import { UserContextProvider } from "./components/useUserInfo";
import NotMatch from "./Pages/NotMatch";

const queryClient = new QueryClient();

function App() {
  return (
    <UserContextProvider>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="/" element={<Dashboard />}></Route>
          <Route path="login" element={<Login />} />
          <Route path="*" element={<NotMatch />} />
        </Routes>
        <ToastContainer autoClose={5000} />
      </QueryClientProvider>
    </UserContextProvider>
  );
}

export default App;
