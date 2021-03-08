import React from "react";

import async from "../components/Async";

import {
  BookOpen,
  Briefcase,
  Calendar as CalendarIcon,
  CheckSquare,
  CreditCard,
  Grid,
  Heart,
  Layout,
  List,
  Map,
  Monitor,
  ShoppingCart,
  Settings as SettingsIcon,
  PieChart,
  Sliders,
  Globe,
  MessageSquare,
  Users,
} from "react-feather";

// Guards
const AuthGuard = async(() => import("../components/AuthGuard"));

// Auth components
const SignIn = async(() => import("../pages/auth/SignIn"));
const SignUp = async(() => import("../pages/auth/SignUp"));
const ResetPassword = async(() => import("../pages/auth/ResetPassword"));
const Page404 = async(() => import("../pages/auth/Page404"));
const Page500 = async(() => import("../pages/auth/Page500"));

// Dashboards components
const Default = async(() => import("../pages/dashboards/"));

// Icons components
const MaterialIcons = async(() => import("../pages/icons/MaterialIcons"));
const FeatherIcons = async(() => import("../pages/icons/FeatherIcons"));

const Profile = async(() => import("../pages/pages/Profile"));
const Settings = async(() => import("../pages/pages/Settings"));
const Tasks = async(() => import("../pages/pages/Tasks"));
const Projects = async(() => import("../pages/pages/Projects"));
const Domain = async(() => import("../pages/domain"));
const Chat = async(() => import("../pages/pages/Chat"));

// Protected routes
const ProtectedPage = async(() => import("../pages/protected/ProtectedPage"));

const dashboardsRoutes = {
  id: "Dashboard",
  path: "/dashboard",
  icon: <Sliders />,
  children:null,
  component: Default
};

const profileRoutes = {
  id:"Profile",
  path: "/profile",
  icon: <Layout />,
  children:null,
  component:Profile,
  // guard: AuthGuard
}

const settingRoutes = {
  id:"Settings",
  path: "/settings",
  icon: <SettingsIcon />,
  children:null,
  component:Settings,
  // guard: AuthGuard
}

const chatsRoutes = {
  id:"Chat",
  path: "/chat",
  icon: <MessageSquare />,
  children:null,
  component:Chat,
  // guard: AuthGuard
}

const domainRoutes = {
  id:"Domains",
  path: "/domains",
  icon: <Globe />,
  children:null,
  component:Domain,
  // guard: AuthGuard
}


const projectsRoutes = {
  id: "Projects",
  path: "/projects",
  icon: <Briefcase />,
  component: Projects,
  children: null,
  // guard: AuthGuard
};



const tasksRoutes = {
  id: "Tasks",
  path: "/tasks",
  icon: <CheckSquare />,
  component: Tasks,
  children: null,
  // guard: AuthGuard
};



const authRoutes = {
  id: "Auth",
  path: "/",
  icon: <Users />,
  component: SignIn,
  children: [
    {
      path: "/",
      name: "Sign In",
      component: SignIn,
    },
    {
      path: "/auth/reset-password",
      name: "Reset Password",
      component: ResetPassword,
    },
    {
      path: "/auth/404",
      name: "404 Page",
      component: Page404,
    },
  ],
};

// This route is only visible while signed in
const protectedPageRoutes = {
  id: "Private",
  path: "/private",
  component: null,
  children: null,
  guard: AuthGuard,
};

// Routes using the Dashboard layout
export const dashboardLayoutRoutes = [
  dashboardsRoutes,
  profileRoutes,
  settingRoutes,
  chatsRoutes,
  domainRoutes,
  projectsRoutes,
  tasksRoutes,
];

// Routes using the Auth layout
export const authLayoutRoutes = [authRoutes];

// Routes that are protected
export const protectedRoutes = [protectedPageRoutes];

// Routes visible in the sidebar
export const sidebarRoutes = [
  dashboardsRoutes,
  // chatsRoutes,
  domainRoutes,

  projectsRoutes,
  tasksRoutes,
  settingRoutes,
];
