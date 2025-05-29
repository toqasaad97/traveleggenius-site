import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

export default function ArabicNavbar() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleMobileNavClick = (path) => {
    if (path) {
      navigate(path);
      setActiveDropdown(null);
      setIsMobileMenuOpen(false);
    }
  };

  const closeAllMenus = () => {
    setActiveDropdown(null);
    setIsMobileMenuOpen(false);
  };

  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (!isMobileMenuOpen) {
      setActiveDropdown(null);
    }
  };

  const colors = {
    primary: "#1A84C4",
    secondary: "#262751",
    lightBlue: "#4996CC",
    white: "#FFFFFF",
    text: "#F0F4F8",
    hoverBg: "#1A84C4",
  };

  // Desktop menu items
  const desktopMenu = [
    { label: "الرئيسية", to: "/" },
    {
      label: "الدول المتوفرة",
      subItems: [
        { label: "السعودية", path: "/saudi" },
        { label: "قطر", path: "/qatar" },
        { label: "الإمارات", path: "/emirates" },
        { label: "مسقط", path: "/masqat" },
      ]
    },
    { label: "كيف أحصل على التأشيرة؟", to: "/visa-info" },
    { label: "بوابة التأشيرات", to: "/blog" },
    { label: "تواصل معنا", to: "/contact" }, // Changed from path to to for consistency
  ];

  // Mobile menu items
  const mobileMenu = [
    { label: "الرئيسية", path: "/" },
    {
      label: "الدول المتوفرة",
      subItems: [
        { label: "السعودية", path: "/saudi" },
        { label: "قطر", path: "/qatar" },
        { label: "الإمارات", path: "/emirates" },
        { label: "مسقط", path: "/masqat" },
      ]
    },
    { label: "كيف أحصل على التأشيرة؟", path: "/visa-info" },
    { label: "بوابة التأشيرات", path: "/blog" },
    { label: "تواصل معنا", path: "/contact" }, // Simplified structure
    { label: "تقديم الطلب", path: "/apply-visa", isCta: true }
  ];

  return (
    <nav className="bg-[#262751] shadow-sm relative border-b border-[#1A84C4]/30" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" onClick={closeAllMenus}>
              <img
                src="/assets/images/logovisa.jpg"
                alt="Company Logo"
                className="h-16 w-auto object-contain transition-all duration-300 hover:opacity-90"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {desktopMenu.map((item, index) => (
              <div key={index} className="relative group">
                {item.subItems ? (
                  <>
                    <button
                      onClick={() => toggleDropdown(item.label)}
                      className="flex items-center px-5 py-4 text-[#F0F4F8] hover:text-white transition-colors duration-200 font-normal text-[16px] hover:bg-[#1A84C4]/30"
                    >
                      {item.label}
                      <ChevronDown
                        className={`w-4 h-4 mr-1 transition-transform duration-200 ${activeDropdown === item.label ? "rotate-180" : ""}`}
                      />
                    </button>
                    <div
                      className={`absolute top-full right-0 mt-1 w-72 bg-white rounded-md shadow-lg overflow-hidden transition-all duration-300 origin-top ${activeDropdown === item.label ? "scale-y-100 opacity-100" : "scale-y-95 opacity-0 invisible"}`}
                      style={{ zIndex: 50 }}
                    >
                      <div className="py-2">
                        {item.subItems.map((subItem, subIndex) => (
                          <Link
                            key={subIndex}
                            to={subItem.path}
                            onClick={closeAllMenus}
                            className="block px-4 py-2 text-[#1B5A9F] hover:bg-[#F0F4F8] transition-colors duration-150 text-[14px]"
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <Link
                    to={item.to}
                    onClick={closeAllMenus}
                    className="px-5 py-4 text-[#F0F4F8] hover:text-white transition-colors duration-200 font-normal text-[16px]"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}

            {/* CTA Button */}
            <Link
              to="/apply-visa"
              onClick={closeAllMenus}
              className="ml-4 px-6 py-3 rounded-md text-[15px] font-medium transition-all duration-300 hover:shadow-lg"
              style={{ backgroundColor: colors.primary, color: colors.white }}
            >
              تقديم الطلب
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={toggleMobileMenu}
              className="text-[#F0F4F8] hover:text-white p-2 transition-colors duration-200"
            >
              {isMobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div 
          className="lg:hidden bg-[#262751] border-t border-[#1A84C4]/30 z-50"
          style={{ 
            position: 'fixed',
            top: '96px',
            left: 0,
            right: 0,
            bottom: 0,
            overflowY: 'auto'
          }}
        >
          <div className="px-4 py-2 space-y-1">
            {mobileMenu.map((item, index) => (
              <div key={index} className="border-b border-[#1A84C4]/20 last:border-0">
                {item.subItems ? (
                  <>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleDropdown(`mobile-${item.label}`);
                      }}
                      className="flex items-center justify-between w-full px-4 py-4 text-left text-[#F0F4F8] hover:text-white font-medium text-lg"
                    >
                      {item.label}
                      <ChevronDown
                        className={`w-5 h-5 transition-transform duration-200 ${
                          activeDropdown === `mobile-${item.label}` ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {activeDropdown === `mobile-${item.label}` && (
                      <div 
                        className="pr-4 pl-6 py-2 space-y-2 mb-2 bg-[#262751] transition-all duration-300"
                        onClick={(e) => e.stopPropagation()}
                      >
                        {item.subItems.map((subItem, subIndex) => (
                          <button
                            key={subIndex}
                            onClick={(e) => {
                              e.stopPropagation();
                              handleMobileNavClick(subItem.path);
                            }}
                            className="block w-full text-left px-3 py-3 text-[#F0F4F8] font-medium hover:bg-[#1A84C4]/30 rounded-lg transition-colors duration-200 text-base"
                          >
                            {subItem.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleMobileNavClick(item.path || item.to);
                    }}
                    className={`block w-full text-left px-4 py-4 rounded-lg font-bold text-lg ${
                      item.isCta 
                        ? "bg-[#1A84C4] text-white hover:bg-[#4996CC] my-2" 
                        : "text-[#F0F4F8] hover:bg-[#1A84C4]/20"
                    }`}
                  >
                    {item.label}
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Overlay - Only show when mobile menu is open */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-40 lg:hidden"
          onClick={closeAllMenus}
        />
      )}
    </nav>
  );
}