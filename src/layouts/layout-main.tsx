import { Outlet } from "react-router-dom";

export function LayoutMain() {
  return (
    <div className="m-4">
      <div className="relative flex flex-col">
        <Outlet></Outlet>
      </div>
    </div>
  );
}
