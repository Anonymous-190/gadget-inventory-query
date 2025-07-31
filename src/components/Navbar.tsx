import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  
  const navItems = [
    { id: 1, path: "/", label: "Question 1 - Gadget" },
    { id: 2, path: "/question2", label: "Question 2 - Art Gallery" },
    { id: 3, path: "/question3", label: "Question 3 - Coming Soon" },
  ];

  return (
    <nav className="bg-secondary border-b border-panel-border">
      <div className="px-6 py-3">
        <div className="flex items-center justify-between">
          <h1 className="text-lg font-semibold text-foreground">
            Xplore Java Coding Challenge
          </h1>
          <div className="flex space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.id}
                to={item.path}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  location.pathname === item.path
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;