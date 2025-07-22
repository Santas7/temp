import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Phone, Send, Menu, X } from "lucide-react"; // заменили MessageCircle на Send

const Header = () => {
  const [location] = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationItems = [
    { label: "Главная", href: "/" },
    { label: "Портфолио", href: "/portfolio" },
    { label: "Вакансии", href: "/vacancies" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="fixed top-5 left-5 right-5 z-50 glass-effect rounded-full px-8 py-5 shadow-xl">
        <div className="flex justify-between items-center">
          <Link href="/">
            <img
              src="./logo.svg"
              alt="Logo"
              className="h-10 w-auto"
              loading="eager"
              decoding="async"
            />
          </Link>

          <nav className="hidden md:flex space-x-6">
            {navigationItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <div
                  className={`nav-hover px-4 py-2 rounded-xl cursor-pointer transition-all ${
                    location === item.href
                      ? "bg-white text-gray-900 dark:text-gray-900"
                      : "text-gray-700 dark:text-gray-300 hover:bg-white hover:text-black dark:hover:text-black hover:rounded-xl"
                  }`}
                >
                  {item.label}
                </div>
              </Link>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <div className="hidden lg:flex items-center space-x-2 text-gray-700 dark:text-gray-300">
            <a
  href="tel:+79272035862"
  className="hidden lg:flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 transition"
>
  <Phone className="w-5 h-5" />
  <span className="font-medium">+7 927 203-58-62</span>
</a>
            </div>

            <Button
              asChild
              size="sm"
              className="hidden sm:flex bg-blue-500 hover:bg-blue-600 text-white rounded-xl"
            >
              <a
                href="https://t.me/xtrueman"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Send className="w-4 h-4 mr-2" />
                Telegram
              </a>
            </Button>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={toggleMenu}
            >
              {isMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </Button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div
            className="fixed inset-0 bg-black/50 mobile-menu-overlay"
            onClick={toggleMenu}
          />
          <div className="fixed top-24 left-5 right-5 glass-strong rounded-2xl p-6 shadow-xl mobile-menu-content mt-5">
            <nav className="space-y-2">
              {navigationItems.map((item) => (
                <Link key={item.href} href={item.href}>
                  <div
                    className={`block px-4 py-3 rounded-xl cursor-pointer transition-all ${
                      location === item.href
                        ? "bg-white text-gray-900 dark:text-gray-900 font-medium"
                        : "text-gray-700 dark:text-gray-300 hover:bg-white hover:text-gray-900 dark:hover:text-gray-900 hover:rounded-xl"
                    }`}
                    onClick={toggleMenu}
                  >
                    {item.label}
                  </div>
                </Link>
              ))}
            </nav>

            <div className="border-t border-gray-200/50 mt-4 pt-4 space-y-3">
            <div className="flex items-center justify-center space-x-2 text-gray-700 dark:text-gray-300">
  <a
    href="tel:+79272035862"
    className="flex items-center space-x-2 hover:text-blue-600 transition"
  >
    <Phone className="w-4 h-4" />
    <span className="font-medium text-sm">+7 927 203-58-62</span>
  </a>
</div>

              <Button
                asChild
                size="sm"
                className="w-full bg-blue-500 hover:bg-blue-600 text-white rounded-xl"
              >
                <a
                  href="https://t.me/xtrueman"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Написать в Telegram
                </a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
