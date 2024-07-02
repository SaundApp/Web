import Navbar from "@/components/Navbar";
import { createRootRoute, Outlet } from "@tanstack/react-router";

export const Route = createRootRoute({
  component: () => (
    <main
      className={
        "flex h-screen min-h-screen flex-col bg-background p-3 font-geist text-foreground"
      }
    >
      <Navbar />
      <Outlet />
    </main>
  ),
});
