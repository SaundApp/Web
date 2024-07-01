import Navbar from "@/components/Navbar";
import { createRootRoute, Outlet } from "@tanstack/react-router";

export const Route = createRootRoute({
  component: () => (
    <main
      className={
        "flex h-screen min-h-screen flex-col bg-background px-3 py-6 font-geist text-foreground"
      }
    >
      <Navbar />
      <Outlet />
    </main>
  ),
});
