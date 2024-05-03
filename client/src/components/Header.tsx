import { Link } from "react-router-dom";
import { Button } from "./ui/button";

export default function Header() {
  return (
    <nav className="w-full h-[60px] bg-gray-900 text-white p-3 flex justify-between">
      <Link to="/">
        <h2 className="font-bold select-none">web compiler</h2>
      </Link>
      <ul className="flex gap-2">
        <Link to="/compiler"><Button variant="secondary">Compiler</Button></Link>
      </ul>
    </nav>
  );
}
