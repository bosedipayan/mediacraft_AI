import { Search } from "lucide-react";
import React from "react";

function Header() {
  return (
    <div className="flex gap-2 items-center p-2 border rounded-md max-w-xl">
      <Search />
      <input
        type="text"
        placeholder="Search Here..."
        className="outline-none"
      />
    </div>
  );
}

export default Header;
