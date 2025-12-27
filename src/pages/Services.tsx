import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { LanguageContext } from '@/contexts/languageContext';
import { useTheme } from '@/hooks/useTheme';

// 定义服务项目类型
interface ServiceItem {
  id: number;
  title: string;
  description: string;
  image: string;
  path: string;
  icon: string;
}

const Services: React.FC = () => {
  const { t } = useContext(LanguageContext);
  const { theme } = useTheme();
  
  // 服务项目数据
  const serviceItems: ServiceItem[] = [
    {
      id: 1,
      title: t('japanTour'),
      description: "专为中国18-35岁情侣设计的浪漫旅行，将日本美食、电影浪漫、日本多地特色深度绑定。",
      image: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Japan%20romantic%20tour%2C%20couple%20traveling%2C%20beautiful%20scenery%2C%20mountains%20and%20ocean%2C%20romantic%20atmosphere&sign=76bc264aa9aac853beaa3646c7640470",
      path: "/services/japan-tour",
      icon: "fa-plane"
    },
    {
      id: 2,
      title: t('programs'),
      description: "我们精心设计的电影主题餐饮体验，包括经典电影回顾、主题餐厅和特色菜单。",
      image: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Movie%20themed%20dining%20experience%2C%20elegant%20restaurant%2C%20movie%20posters%2C%20high%20quality%20food%2C%20romantic%20lighting&sign=28d1e11c830d70e06b32e18dd5a2a0dc",
      path: "/services/programs",
      icon: "fa-film"
    },
    {
      id: 3,
      title: t('activities'),
      description: "定期举办的电影主题活动，包括电影首映礼、明星见面会、电影讨论会等。",
      image: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Movie%20event%2C%20red%20carpet%2C%20people%20celebrating%2C%20bright%20lights%2C%20exciting%20atmosphere&sign=f87d0546c7568e3719c30c4111398c69",
      path: "/services/activities",
      icon: "fa-calendar-alt"
    }
  ];
  
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
    <motion.div 
      className="min-h-[calc(100vh-120px)]"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      {/* 页面标题 */}
      <motion.div 
        className="text-center mb-12"
        variants={itemVariants}
      >
        <h1 className="text-4xl font-bold mb-4">{t('services')}</h1>
        <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-500 mx-auto"></div>
        <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                 {t('servicesDesc')}
                </p>
              </motion.div>

      {/* 服务项目展示 */}
      <motion.section 
        className="mb-16"
        variants={containerVariants}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceItems.map((item) => (
            <motion.div 
              key={item.id}
              className={`rounded-xl overflow-hidden shadow-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} flex flex-col h-full`}
              variants={itemVariants}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-white/90 dark:bg-gray-800/90 text-purple-600 dark:text-purple-400 w-12 h-12 rounded-full flex items-center justify-center shadow-md">
                  <i className={`fas ${item.icon} text-xl`}></i>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">
                  {item.description}
                </p>
                <Link 
                  to={item.path}
                  className="inline-flex items-center text-purple-600 dark:text-purple-400 font-medium hover:underline"
                >
                  {t('learnMore')}
                  <i className="fas fa-arrow-right ml-2"></i>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* 服务特色 */}
          <motion.section 
            className={`rounded-2xl p-8 mb-16 ${theme === 'dark' ? 'bg-gray-800' : 'bg-purple-50'}`}
            variants={itemVariants}
          >
            <h2 className="text-2xl font-bold mb-8 text-center">{t('serviceFeatures')}</h2>
        
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div 
                className="text-center p-6"
                variants={itemVariants}
                whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white dark:bg-gray-700 flex items-center justify-center shadow-md">
                  <i className="fas fa-star text-2xl text-purple-600 dark:text-purple-400"></i>
                </div>
                <h3 className="text-xl font-bold mb-2">{t('highQualityExperience')}</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {t('highQualityDesc')}
                </p>
              </motion.div>
              
              <motion.div 
                className="text-center p-6"
                variants={itemVariants}
                whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white dark:bg-gray-700 flex items-center justify-center shadow-md">
                  <i className="fas fa-lightbulb text-2xl text-purple-600 dark:text-purple-400"></i>
                </div>
                <h3 className="text-xl font-bold mb-2">{t('innovativeConcept')}</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {t('innovativeConceptDesc')}
                </p>
              </motion.div>
              
              <motion.div 
                className="text-center p-6"
                variants={itemVariants}
                whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white dark:bg-gray-700 flex items-center justify-center shadow-md">
                  <i className="fas fa-heart text-2xl text-purple-600 dark:text-purple-400"></i>
                </div>
                <h3 className="text-xl font-bold mb-2">{t('personalizedService')}</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {t('personalizedServiceDesc')}
                </p>
              </motion.div>
            </div>
      </motion.section>

      {/* 客户评价 */}
      <motion.section 
        className="mb-16"
        variants={itemVariants}
      >
        <h2 className="text-2xl font-bold mb-8 text-center">客户评价</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <motion.div 
            className={`p-6 rounded-xl shadow-md ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}
            variants={itemVariants}
          >
            <div className="flex text-yellow-400 mb-4">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>
            <p className="text-gray-600 dark:text-gray-300 italic mb-4">
              "FlickNibble House的日本旅游套餐真的太棒了！我们不仅欣赏了日本的美景，品尝了美食，还体验了独特的电影主题活动。这是我们度过的最难忘的旅行之一！"
            </p>
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
                <img 
                  src="https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=happy%20asian%20couple%20smiling%2C%20romantic%20atmosphere&sign=8e40c0fd0ee90b930b3242cd658f45f2" 
                  alt="Customer" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <div className="font-medium">张小姐 & 王先生</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">日本旅游套餐客户</div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className={`p-6 rounded-xl shadow-md ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}
            variants={itemVariants}
          >
            <div className="flex text-yellow-400 mb-4">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star-half-alt"></i>
            </div>
            <p className="text-gray-600 dark:text-gray-300 italic mb-4">
              "我和朋友参加了FlickNibble House的电影主题晚餐，体验非常棒！美食与电影的完美结合，服务也很贴心。强烈推荐给所有电影和美食爱好者！"
            </p>
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
                <img 
                  src="https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=happy%20young%20woman%20smiling%2C%20portrait&sign=8ea304e8b9159a9b98292508032091e9" 
                  alt="Customer" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <div className="font-medium">李女士</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">电影主题晚餐客户</div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* 常见问题 */}
      <motion.section 
        className="mb-16 max-w-3xl mx-auto"
        variants={itemVariants}
      >
        <h2 className="text-2xl font-bold mb-8 text-center">常见问题</h2>
        
        <div className="space-y-6">
          <motion.div 
            className={`p-6 rounded-xl shadow-sm ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}
            variants={itemVariants}
          >
            <h3 className="text-lg font-bold mb-2">如何预订你们的服务？</h3>
            <p className="text-gray-600 dark:text-gray-300">
              您可以通过我们的官方网站、微信公众号或者电话进行预订。对于日本旅游套餐，我们建议您至少提前3个月预订，以确保您能获得理想的位置。
            </p>
          </motion.div>
          
          <motion.div 
            className={`p-6 rounded-xl shadow-sm ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}
            variants={itemVariants}
          >
            <h3 className="text-lg font-bold mb-2">日本旅游套餐包含哪些内容？</h3>
            <p className="text-gray-600 dark:text-gray-300">
              我们的"10天5城日本夏日限量游"包含往返机票、住宿、早餐、特色电影主题晚餐、部分景点门票、专业导游服务以及机场接送服务。详细行程安排请查看产品详情页。
            </p>
          </motion.div>
          
          <motion.div 
            className={`p-6 rounded-xl shadow-sm ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}
            variants={itemVariants}
          >
            <h3 className="text-lg font-bold mb-2">是否可以根据个人喜好定制服务？</h3>
            <p className="text-gray-600 dark:text-gray-300">
              是的，我们提供个性化定制服务。无论是电影主题晚餐还是日本旅游套餐，我们都可以根据您的需求和喜好进行定制。定制服务可能会产生额外费用。
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* 立即预订 */}
      <motion.section 
        className="text-center"
        variants={itemVariants}
      >
        <h2 className="text-2xl font-bold mb-4">{t('readyToExperience')}</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
          {t('bookOurService')}
        </p>
        <Link 
          to="/contact/inquiry-form"
          className="inline-flex items-center justify-center bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white font-medium py-3 px-8 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
        >
          {t('bookNow')}
          <i className="fas fa-arrow-right ml-2"></i>
        </Link>
      </motion.section>
    </motion.div>
  );
};

export default Services;