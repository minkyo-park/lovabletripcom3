import type { RouteRecord } from "vite-react-ssg";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Outlet } from "react-router-dom";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import HomePage from "./pages/HomePage";
import HowToUsePage from "./pages/HowToUsePage";
import GuidePage from "./pages/GuidePage";
import FaqPage from "./pages/FaqPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

function RootLayout() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <ScrollToTop />
        <Navbar />
        <Outlet />
        <Footer />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export const routes: RouteRecord[] = [
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "how-to-use", element: <HowToUsePage /> },
      { path: "guide", element: <GuidePage /> },
      { path: "faq", element: <FaqPage /> },
      { path: "*", element: <NotFound /> },
    ],
  },
];

export default routes;
