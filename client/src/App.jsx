import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectRoute from "./components/auth/ProtectRoute";
import { LayoutLoader } from "./components/layout/Loaders";
import { Dashboard } from "@mui/icons-material";
import UserManagement from "./pages/admin/UserManagement";
import MessageManagement from "./pages/admin/MessageManagement";
import ChatManagement from "./pages/admin/ChatManagement";

const Home = lazy(() => import("./pages/Home"));
const Login = lazy(() => import("./pages/Login"));
const Chat = lazy(() => import("./pages/Chat"));
const Groups = lazy(() => import("./pages/Groups"));
const AdminLogin = lazy(() => import("./pages/admin/AdminLogin"));
const AdminDashboard = lazy(() => import("./pages/admin/Dashboard"));
const AdminChatManagement = lazy(() => import("./pages/admin/ChatManagement"));
const AdminUserManagement = lazy(() => import("./pages/admin/UserManagement"));
const AdminMessageManagement = lazy(() => import("./pages/admin/MessageManagement")); 

let user = true;

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<LayoutLoader />}>
        <Routes>
          <Route element={<ProtectRoute user={user} />}>
            <Route path="/" element={<Home />} />
            <Route path="/chat/:ChatId" element={<Chat />} />
            <Route path="/groups" element={<Groups />} />
          </Route>
          <Route
            path="/login"
            element={
              <ProtectRoute user={!user} redirect="/">
                <Login />
              </ProtectRoute>
            }
          />

          <Route path="/adminx" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/user-management" element={<UserManagement />} />
          <Route path="/admin/chat-management" element={<ChatManagement />} />
          <Route path="/admin/messages-management" element={<MessageManagement />} />

          <Route path="*" element={<h1>404</h1>} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
