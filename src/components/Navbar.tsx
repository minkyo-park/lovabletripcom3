import { useState, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Plane, Tag } from "lucide-react";

const AFFILIATE_LINK = "http://app.ac/9bMm1Dl83";

const navItems = [
  { path: "/", label: "할인코드 총정리" },
  { path: "/how-to-use", label: "사용 방법" },
  { path: "/guide", label: "할인 가이드" },
  { path: "/faq", label: "FAQ & 꿀팁" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = useCallback(() => setIsOpen((v) => !v), []);

  return (
    <nav className="sticky top-0 z-50 bg-card/95 backdrop-blur-md border-b border-border" role="navigation" aria-label="메인 내비게이션">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 font-bold text-lg" aria-label="트립닷컴 할인쿠폰 홈">
            <Plane className="w-5 h-5 text-primary" />
            <span className="text-primary">트립닷컴</span>
            <Tag className="w-4 h-4 text-accent" />
            <span className="text-foreground text-sm font-medium hidden sm:inline">할인쿠폰</span>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`nav-link ${location.pathname === item.path ? "active" : ""}`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center">
            <a
              href={AFFILIATE_LINK}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="cta-button text-sm px-4 py-2"
            >
              할인 적용하기
            </a>
          </div>

          <button
            className="md:hidden p-2 rounded-lg hover:bg-secondary transition-colors"
            onClick={toggleMenu}
            aria-label="메뉴 열기"
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4 border-t border-border pt-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                  location.pathname === item.path
                    ? "bg-primary/10 text-primary"
                    : "text-foreground hover:bg-secondary"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <a
              href={AFFILIATE_LINK}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="block mx-4 mt-3 cta-button text-sm text-center"
            >
              할인 적용하기
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
