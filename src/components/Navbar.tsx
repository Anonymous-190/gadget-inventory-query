import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  
  const navItems = [
    { id: 1, path: "/", label: "Question 1 - Gadget" },
    { id: 2, path: "/question2", label: "Question 2 - Art Gallery" },
    { id: 3, path: "/question3", label: "Question 3 - Vehicle" },
  ];

  return (
    <nav className="bg-secondary border-b border-panel-border">
      <div className="px-4 md:px-6 py-3">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <h1 className="text-base md:text-lg font-semibold text-foreground">
            Xplore Java Coding Challenge
          </h1>
          <div className="flex flex-wrap gap-1 md:space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.id}
                to={item.path}
                className={`px-3 md:px-4 py-2 rounded-md text-xs md:text-sm font-medium transition-colors whitespace-nowrap ${
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