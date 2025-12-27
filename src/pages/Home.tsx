import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { LanguageContext } from '@/contexts/languageContext';
import { useTheme } from '@/hooks/useTheme';

// 定义图片URLs
const heroImage = "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Japanese%20movie%20theater%20with%20dining%20experience%2C%20romantic%20atmosphere%2C%20couple%20watching%20movie%20while%20dining%2C%20high%20quality%20food%2C%20modern%20interior%20design&sign=a442160fc5c5dfb7df07ce5691452920";

const tourImage1 = "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Tokyo%20romantic%20date%20spot%2C%20couple%20watching%20sunset%20at%20Tokyo%20Tower%2C%20night%20view%2C%20modern%20cityscape%2C%20romantic%20atmosphere&sign=d1e2feb61ef5a0b4406825bb9bc56ab4";

const tourImage2 = "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Kyoto%20traditional%20Japanese%20restaurant%2C%20couple%20enjoying%20sushi%20dinner%2C%20traditional%20interior%2C%20warm%20lighting%2C%20romantic%20ambiance&sign=4859760c349b38a49120b95b7b265eb7";

const tourImage3 = "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Osaka%20night%20market%2C%20street%20food%2C%20vibrant%20atmosphere%2C%20colorful%20lights%2C%20couple%20enjoying%20local%20cuisine&sign=effdc2713e3e4bbb96ca49e34690bea2";

const Home: React.FC = () => {
  const { t } = useContext(LanguageContext);
  const { theme } = useTheme();
  
  // 页面变体动画
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };
  
  return (
    <div className="min-h-[calc(100vh-120px)]">
      {/* 英雄区域 */}
      <motion.section 
        className="relative overflow-hidden rounded-2xl mb-12 shadow-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <img 
          src={heroImage} 
          alt="FlickNibble House Experience" 
          className="w-full h-[500px] object-cover object-center"
        />
        <div className="absolute inset-0 z-20 flex flex-col justify-center px-6 md:px-16">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold text-white mb-4 max-w-2xl"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            {t('heroTitle')}
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-white mb-8 max-w-2xl"
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            {t('heroSubtitle')}
          </motion.p>
          <motion.div 
            className="flex flex-wrap gap-4"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            <Link 
              to="/services/japan-tour"
              className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white font-medium py-3 px-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              {t('bookNow')}
            </Link>
            <Link 
              to="/about"
              className="bg-white hover:bg-gray-100 text-purple-600 font-medium py-3 px-6 rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              {t('learnMore')}
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* 特色旅游套餐 */}
      <motion.section 
        className="mb-16"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.h2 
          className="text-3xl font-bold mb-8 text-center"
          variants={itemVariants}
        >
          {t('tourPackageTitle')}
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div 
            className={`rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}
            variants={itemVariants}
          >
            <img 
              src={tourImage1} 
              alt={t('tokyoExperienceTitle')} 
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{t('tokyoExperienceTitle')}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{t('tokyoExperienceDesc')}</p>
              <div className="flex justify-between items-center">
                <span className="text-purple-600 dark:text-purple-400 font-semibold">2 {t('nightsStay')}</span>
                <Link to="/services/japan-tour" className="text-blue-600 dark:text-blue-400 hover:underline">{t('learnMore')}</Link>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className={`rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}
            variants={itemVariants}
          >
            <img 
              src={tourImage2} 
              alt={t('kyotoExperienceTitle')} 
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{t('kyotoExperienceTitle')}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{t('kyotoExperienceDesc')}</p>
              <div className="flex justify-between items-center">
                <span className="text-purple-600 dark:text-purple-400 font-semibold">3 {t('nightsStay')}</span>
                <Link to="/services/japan-tour" className="text-blue-600 dark:text-blue-400 hover:underline">{t('learnMore')}</Link>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className={`rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}
            variants={itemVariants}
          >
            <img 
              src={tourImage3} 
              alt={t('osakaExperienceTitle')} 
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{t('osakaExperienceTitle')}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{t('osakaExperienceDesc')}</p>
              <div className="flex justify-between items-center">
                <span className="text-purple-600 dark:text-purple-400 font-semibold">2 {t('nightsStay')}</span>
                <Link to="/services/japan-tour" className="text-blue-600 dark:text-blue-400 hover:underline">{t('learnMore')}</Link>
              </div>
            </div>
          </motion.div>
        </div>
        
        <div className="text-center mt-8">
          <Link 
            to="/services/japan-tour"
            className="inline-flex items-center justify-center bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-8 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
          >
            {t('viewFullItinerary')}
            <i className="fas fa-arrow-right ml-2"></i>
          </Link>
        </div>
      </motion.section>

      {/* 品牌特色 */}
      <motion.section 
        className={`rounded-2xl p-8 mb-16 ${theme === 'dark' ? 'bg-gray-800' : 'bg-purple-50'}`}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.h2 
          className="text-3xl font-bold mb-8 text-center"
          variants={itemVariants}
        >
          {t('ourExperienceTitle')}
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div 
            className="text-center p-6 rounded-xl"
            variants={itemVariants}
          >
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center">
              <i className="fas fa-film text-2xl text-purple-600 dark:text-purple-400"></i>
            </div>
            <h3 className="text-xl font-bold mb-2">{t('movieDiningExperience')}</h3>
            <p className="text-gray-600 dark:text-gray-300">{t('movieDiningDesc')}</p>
          </motion.div>
          
          <motion.div 
            className="text-center p-6 rounded-xl"
            variants={itemVariants}
          >
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center">
              <i className="fas fa-utensils text-2xl text-purple-600 dark:text-purple-400"></i>
            </div>
            <h3 className="text-xl font-bold mb-2">{t('creativeFood')}</h3>
            <p className="text-gray-600 dark:text-gray-300">{t('creativeFoodDesc')}</p>
          </motion.div>
          
          <motion.div 
            className="text-center p-6 rounded-xl"
            variants={itemVariants}
          >
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center">
              <i className="fas fa-plane text-2xl text-purple-600 dark:text-purple-400"></i>
            </div>
            <h3 className="text-xl font-bold mb-2">{t('themeTravel')}</h3>
            <p className="text-gray-600 dark:text-gray-300">{t('themeTravelDesc')}</p>
          </motion.div>
        </div>
      </motion.section>

      {/* 客户评价 */}
      <motion.section 
        className="mb-16"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.h2 
          className="text-3xl font-bold mb-8 text-center"
          variants={itemVariants}
        >
          {t('customerReviews')}
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div 
            className={`p-6 rounded-xl shadow-md ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}
            variants={itemVariants}
          >
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                <img 
                  src="https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=young%20asian%20couple%20smiling%2C%20happy%20expression%2C%20portrait%20photography&sign=089a32d80e076ad2c936196e2173633b" 
                  alt="Customer" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h4 className="font-bold">张先生 & 李女士</h4>
                <div className="flex text-yellow-400">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-300 italic">
              "这是我们度过的最浪漫的旅行！FlickNibble House的日本夏日游将电影、美食和日本文化完美结合，每一个细节都让我们惊喜不已。特别是在京都的传统影院里一边欣赏经典电影，一边品尝怀石料理的体验，让我们终身难忘。"
            </p>
          </motion.div>
          
          <motion.div 
            className={`p-6 rounded-xl shadow-md ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}
            variants={itemVariants}
          >
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                <img 
                  src="https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=young%20asian%20man%20smiling%2C%20happy%20expression%2C%20portrait%20photography&sign=04a122d24286a196325dbb053d5fbbe4" 
                  alt="Customer" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h4 className="font-bold">王先生</h4>
                <div className="flex text-yellow-400">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star-half-alt"></i>
                </div>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-300 italic">
              "作为一个电影和美食爱好者，FlickNibble House简直是我的天堂！他们的日本旅游套餐让我在旅行中体验到了独特的电影主题餐厅，每一道菜都充满创意。导游也非常专业，对日本的电影文化和美食文化了如指掌，让整个旅程既有趣又有深度。"
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* 常见问题 */}
      <motion.section 
        className="mb-16"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.h2 
          className="text-3xl font-bold mb-8 text-center"
          variants={itemVariants}
        >
          {t('faqTitle')}
        </motion.h2>
        
        <div className="max-w-3xl mx-auto">
          <motion.div 
            className={`mb-4 rounded-lg overflow-hidden ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} shadow-md`}
            variants={itemVariants}
          >
            <div className="p-4 font-bold">{t('tourInclusion')}</div>
            <div className="p-4 pt-0 text-gray-600 dark:text-gray-300">
              {t('tourInclusionDesc')}
            </div>
          </motion.div>
          
          <motion.div 
            className={`mb-4 rounded-lg overflow-hidden ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} shadow-md`}
            variants={itemVariants}
          >
            <div className="p-4 font-bold">{t('bookingAdvance')}</div>
            <div className="p-4 pt-0 text-gray-600 dark:text-gray-300">
              {t('bookingAdvanceDesc')}
            </div>
          </motion.div>
          
          <motion.div 
            className={`mb-4 rounded-lg overflow-hidden ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} shadow-md`}
            variants={itemVariants}
          >
            <div className="p-4 font-bold">{t('customization')}</div>
            <div className="p-4 pt-0 text-gray-600 dark:text-gray-300">
              {t('customizationDesc')}
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* 立即预订 */}
      <motion.section 
        className="rounded-2xl overflow-hidden relative mb-16"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-blue-600 opacity-90"></div>
        <div className="relative z-10 py-16 px-6 text-center">
          <motion.h2 
            className="text-3xl font-bold text-white mb-4"
            variants={itemVariants}
          >
            {t('readyForJourney')}
          </motion.h2>
          <motion.p 
            className="text-xl text-white mb-8 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            {t('limitedSpots')}
          </motion.p>
          <motion.div 
            className="flex flex-wrap justify-center gap-4"
            variants={itemVariants}
          >
            <Link 
              to="/services/japan-tour"
              className="bg-white text-purple-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              {t('bookNow')}
            </Link>
            <Link 
              to="/contact/inquiry-form"
              className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-medium py-3 px-8 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
            >
              {t('inquireDetails')}
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default Home;