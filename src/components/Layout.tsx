import React, { useState, useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LanguageContext, Language } from '@/contexts/languageContext';
import { useTheme } from '@/hooks/useTheme';
import { AuthContext } from '@/contexts/authContext';
import { cn } from '@/lib/utils';

// 定义菜单项接口
interface MenuItem {
  id: string;
  title: string;
  path: string;
  children?: MenuItem[];
}

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { t, language, setLanguage } = useContext(LanguageContext);
  const { theme, toggleTheme } = useTheme();
  const { isAuthenticated, logout } = useContext(AuthContext);
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);

  // 定义导航菜单
  const menuItems: MenuItem[] = [
    {
      id: 'home',
      title: t('home'),
      path: '/',
    },
    {
      id: 'about',
      title: t('about'),
      path: '/about',
      children: [
        {
          id: 'company-overview',
          title: t('companyOverview'),
          path: '/about/company-overview',
        },
        {
          id: 'leadership',
          title: t('leadership'),
          path: '/about/leadership',
        },
      ],
    },
    {
      id: 'services',
      title: t('services'),
      path: '/services',
      children: [
        {
          id: 'japan-tour',
          title: t('japanTour'),
          path: '/services/japan-tour',
        },
        {
          id: 'programs',
          title: t('programs'),
          path: '/services/programs',
        },
        {
          id: 'activities',
          title: t('activities'),
          path: '/services/activities',
        },
      ],
    },
    {
      id: 'why-choose-us',
      title: t('whyChooseUs'),
      path: '/why-choose-us',
      children: [
        {
          id: 'value-proposition',
          title: t('valueProposition'),
          path: '/why-choose-us/value-proposition',
        },
        {
          id: 'sustainability',
          title: t('sustainability'),
          path: '/why-choose-us/sustainability',
        },
        {
          id: 'partnerships',
          title: t('partnerships'),
          path: '/why-choose-us/partnerships',
        },
      ],
    },
    {
      id: 'contact',
      title: t('contact'),
      path: '/contact',
      children: [
        {
          id: 'contact-info',
          title: t('contactInfo'),
          path: '/contact/contact-info',
        },
        {
          id: 'inquiry-form',
          title: t('inquiryForm'),
          path: '/contact/inquiry-form',
        },
        {
          id: 'social-media',
          title: t('socialMedia'),
          path: '/contact/social-media',
        },
      ],
    },
  ];

  // 处理语言切换
  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);
  };

  // 处理下拉菜单切换
  const toggleDropdown = (id: string) => {
    setDropdownOpen(dropdownOpen === id ? null : id);
  };

  // 检查当前路径是否与菜单项匹配
  const isActivePath = (path: string) => {
    return location.pathname === path || location.pathname.startsWith(`${path}/`);
  };

  return (
    <div className={`flex flex-col min-h-screen ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-gray-800'}`}>
      {/* 头部导航 */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-opacity-90 dark:bg-opacity-90 bg-white dark:bg-gray-900 shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* 品牌Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 flex items-center justify-center">
                <span className="text-white font-bold text-xl">FN</span>
              </div>
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-500">
                FlickNibble House
              </span>
            </Link>

            {/* 桌面导航 */}
            <nav className="hidden md:flex items-center space-x-8">
              {menuItems.map((item) => (
                <div key={item.id} className="relative group">
                  <button
                    onClick={() => toggleDropdown(item.id)}
                    className={`flex items-center space-x-1 px-2 py-1 rounded-md transition-colors ${
                      isActivePath(item.path)
                        ? 'text-purple-600 dark:text-purple-400'
                        : 'hover:text-purple-600 dark:hover:text-purple-400'
                    }`}
                  >
                    <span>{item.title}</span>
                    {item.children && (
                      <i className={`fas fa-chevron-down text-xs transition-transform ${dropdownOpen === item.id ? 'rotate-180' : ''}`}></i>
                    )}
                  </button>

                  {/* 下拉菜单 */}
                  {item.children && (
                    <div
                      className={`absolute left-0 mt-1 w-48 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2 z-50`}
                    >
                      <div className="py-1">
                        {item.children.map((child) => (
                          <Link
                            key={child.id}
                            to={child.path}
                            className={`block px-4 py-2 text-sm ${
                              isActivePath(child.path)
                                ? 'bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-400'
                                : 'hover:bg-gray-100 dark:hover:bg-gray-700'
                            }`}
                          >
                            {child.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* 右侧功能区 */}
            <div className="flex items-center space-x-4">
              {/* 语言切换 */}
              <div className="hidden md:flex items-center space-x-2">
                <button
                  onClick={() => handleLanguageChange('zh')}
                  className={`px-2 py-1 rounded-md text-sm ${language === 'zh' ? 'bg-purple-100 text-purple-600 dark:bg-purple-900 dark:text-purple-400' : 'hover:bg-gray-100 dark:hover:bg-gray-700'}`}
                >
                  中
                </button>
                <button
                  onClick={() => handleLanguageChange('en')}
                  className={`px-2 py-1 rounded-md text-sm ${language === 'en' ? 'bg-purple-100 text-purple-600 dark:bg-purple-900 dark:text-purple-400' : 'hover:bg-gray-100 dark:hover:bg-gray-700'}`}
                >
                  En
                </button>
                <button
                  onClick={() => handleLanguageChange('ja')}
                  className={`px-2 py-1 rounded-md text-sm ${language === 'ja' ? 'bg-purple-100 text-purple-600 dark:bg-purple-900 dark:text-purple-400' : 'hover:bg-gray-100 dark:hover:bg-gray-700'}`}
                >
                  日
                </button>
              </div>

              {/* 主题切换 */}
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                aria-label="Toggle theme"
              >
                {theme === 'light' ? (
                  <i className="fas fa-moon text-gray-600 dark:text-gray-300"></i>
                ) : (
                  <i className="fas fa-sun text-yellow-400"></i>
                )}
              </button>

              {/* 移动菜单按钮 */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                aria-label="Open mobile menu"
              >
                <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
              </button>
            </div>
          </div>
        </div>

        {/* 移动导航菜单 */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white dark:bg-gray-900 shadow-lg">
            <div className="px-4 py-3 space-y-3">
              {/* 移动语言切换 */}
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500 dark:text-gray-400">语言 / Language</span>
                <div className="flex space-x-2">
                  <button
                    onClick={() => handleLanguageChange('zh')}
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-sm ${language === 'zh' ? 'bg-purple-100 text-purple-600 dark:bg-purple-900 dark:text-purple-400' : 'hover:bg-gray-100 dark:hover:bg-gray-700'}`}
                  >
                    中
                  </button>
                  <button
                    onClick={() => handleLanguageChange('en')}
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-sm ${language === 'en' ? 'bg-purple-100 text-purple-600 dark:bg-purple-900 dark:text-purple-400' : 'hover:bg-gray-100 dark:hover:bg-gray-700'}`}
                  >
                    En
                  </button>
                  <button
                    onClick={() => handleLanguageChange('ja')}
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-sm ${language === 'ja' ? 'bg-purple-100 text-purple-600 dark:bg-purple-900 dark:text-purple-400' : 'hover:bg-gray-100 dark:hover:bg-gray-700'}`}
                  >
                    日
                  </button>
                </div>
              </div>
              
              {/* 移动导航链接 */}
              <div className="space-y-1">
                {menuItems.map((item) => (
                  <div key={item.id} className="border-b border-gray-100 dark:border-gray-800 last:border-0">
                    <Link
                      to={item.path}
                      className={`block px-2 py-2 rounded-md ${
                        isActivePath(item.path)
                          ? 'bg-purple-100 text-purple-600 dark:bg-purple-900 dark:text-purple-400'
                          : 'hover:bg-gray-100 dark:hover:bg-gray-700'
                      }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.title}
                    </Link>
                    
                    {item.children && (
                      <div className="pl-4 space-y-1">
                        {item.children.map((child) => (
                          <Link
                            key={child.id}
                            to={child.path}
                            className={`block px-2 py-1.5 rounded-md text-sm ${
                              isActivePath(child.path)
                                ? 'bg-purple-50 text-purple-600 dark:bg-purple-900/50 dark:text-purple-400'
                                : 'hover:bg-gray-50 dark:hover:bg-gray-800'
                            }`}
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {child.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </header>

      {/* 主要内容区 */}
      <main className="flex-1 container mx-auto px-4 py-8">
        {children}
      </main>

      {/* 页脚 */}
      <footer className={`bg-gray-100 dark:bg-gray-800 py-8 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* 公司信息 */}
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 flex items-center justify-center">
                  <span className="text-white font-bold text-sm">FN</span>
                </div>
                <span className="text-lg font-bold">FlickNibble House</span>
              </div>
              <p className="text-sm mb-4">
                专注于"电影+餐饮"创新体验的品牌，打破观影与用餐的界限。
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-500 hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="text-gray-500 hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="text-gray-500 hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" className="text-gray-500 hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400">
                  <i className="fab fa-weixin"></i>
                </a>
              </div>
            </div>

            {/* 快速链接 */}
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">快速链接</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/" className="hover:text-purple-600 dark:hover:text-purple-400">首页</Link></li>
                <li><Link to="/about" className="hover:text-purple-600 dark:hover:text-purple-400">关于我们</Link></li>
                <li><Link to="/services" className="hover:text-purple-600 dark:hover:text-purple-400">产品服务</Link></li>
                <li><Link to="/why-choose-us" className="hover:text-purple-600 dark:hover:text-purple-400">为什么选择我们</Link></li>
                <li><Link to="/contact" className="hover:text-purple-600 dark:hover:text-purple-400">联系我们</Link></li>
              </ul>
            </div>

            {/* 联系方式 */}
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">联系我们</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <i className="fas fa-map-marker-alt mt-1 mr-2 text-purple-600 dark:text-purple-400"></i>
                  <span>上海市静安区南京西路1266号恒隆广场46楼</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-phone mr-2 text-purple-600 dark:text-purple-400"></i>
                  <span>+86 21 6122 8888</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-envelope mr-2 text-purple-600 dark:text-purple-400"></i>
                  <span>info@flicknibblehouse.com</span>
                </li>
              </ul>
            </div>

            {/* 订阅通讯 */}
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">订阅通讯</h4>
              <p className="text-sm mb-4">获取最新的活动和优惠信息</p>
              <form className="flex">
                <input
                  type="email"
                  placeholder="您的邮箱地址"
                  className="flex-1 px-3 py-2 text-sm rounded-l-md focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-gray-700 dark:text-white"
                />
                <button
                  type="submit"
                  className="px-3 py-2 bg-purple-600 text-white text-sm rounded-r-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  订阅
                </button>
              </form>
            </div>
          </div>

          {/* 版权信息 */}
          <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-500 dark:text-gray-400">{t('copyright')}</p>
            <div className="flex space-x-6 mt-4 md:mt-0 text-sm text-gray-500 dark:text-gray-400">
              <a href="#" className="hover:text-purple-600 dark:hover:text-purple-400">隐私政策</a>
              <a href="#" className="hover:text-purple-600 dark:hover:text-purple-400">服务条款</a>
              <a href="#" className="hover:text-purple-600 dark:hover:text-purple-400">Cookie政策</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;