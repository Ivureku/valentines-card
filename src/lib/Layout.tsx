import { Outlet } from "react-router";

export default function Layout() {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/assets/bg-image.gif')",
      }}
    >
      <Outlet />
    </div>
  );
}
