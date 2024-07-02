import { Link } from "@tanstack/react-router";
import { Button } from "./ui/button";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center">
      <Link className="flex items-center gap-3" to="/">
        <img
          src="/logo.png"
          alt="Saund Logo"
          width={40}
          height={40}
          draggable={false}
        />
        <h5>Saund</h5>
      </Link>

      <Button className="rounded-2xl">Get Started</Button>
    </nav>
  );
}
