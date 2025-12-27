import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { LanguageContext } from '@/contexts/languageContext';
import { useTheme } from '@/hooks/useTheme';

const WhyChooseUs: React.FC = () => {
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
        <h1 className="text-4xl font-bold mb-4">{t('whyChooseUs')}</h1>
        <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-500 mx-auto"></div>
        <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          在FlickNibble House，我们致力于为您提供独特、高品质的"电影+餐饮"创新体验。了解为什么越来越多的人选择我们，以及我们如何为您创造价值。
        </p>
      </motion.div>

      {/* 核心优势 */}
      <motion.section 
        className="mb-16"
        variants={itemVariants}
      >
        <h2 className="text-2xl font-bold mb-8 text-center">我们的核心优势</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div 
            className={`rounded-xl overflow-hidden shadow-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} flex flex-col`}
            variants={itemVariants}
            whileHover={{ y: -5, transition: { duration: 0.3 } }}
          >
            <div className="p-6">
              <div className="w-16 h-16 mb-4 rounded-full bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center">
                <i className="fas fa-lightbulb text-2xl text-purple-600 dark:text-purple-400"></i>
              </div>
              <h3 className="text-xl font-bold mb-3">创新体验</h3>
              <p className="text-gray-600 dark:text-gray-300 flex-grow">
                我们开创了"电影+餐饮"的创新体验模式，打破传统观影与用餐的界限，为您带来全新的体验。
              </p>
            </div>
          </motion.div>
          
          <motion.div 
            className={`rounded-xl overflow-hidden shadow-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} flex flex-col`}
            variants={itemVariants}
            whileHover={{ y: -5, transition: { duration: 0.3 } }}
          >
            <div className="p-6">
              <div className="w-16 h-16 mb-4 rounded-full bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center">
                <i className="fas fa-star text-2xl text-purple-600 dark:text-purple-400"></i>
              </div>
              <h3 className="text-xl font-bold mb-3">高品质服务</h3>
              <p className="text-gray-600 dark:text-gray-300 flex-grow">
                我们注重每一个细节，从食材选择到服务流程，都精益求精，确保为您提供高品质的体验。
              </p>
            </div>
          </motion.div>
          
          <motion.div 
            className={`rounded-xl overflow-hidden shadow-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} flex flex-col`}
            variants={itemVariants}
            whileHover={{ y: -5, transition: { duration: 0.3 } }}
          >
            <div className="p-6">
              <div className="w-16 h-16 mb-4 rounded-full bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center">
                <i className="fas fa-utensils text-2xl text-purple-600 dark:text-purple-400"></i>
              </div>
              <h3 className="text-xl font-bold mb-3">美食体验</h3>
              <p className="text-gray-600 dark:text-gray-300 flex-grow">
                我们的厨师团队由经验丰富的专业人士组成，他们精心打造各类美食，满足您的味蕾享受。
              </p>
            </div>
          </motion.div>
          
          <motion.div 
            className={`rounded-xl overflow-hidden shadow-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} flex flex-col`}
            variants={itemVariants}
            whileHover={{ y: -5, transition: { duration: 0.3 } }}
          >
            <div className="p-6">
              <div className="w-16 h-16 mb-4 rounded-full bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center">
                <i className="fas fa-film text-2xl text-purple-600 dark:text-purple-400"></i>
              </div>
              <h3 className="text-xl font-bold mb-3">精选电影</h3>
              <p className="text-gray-600 dark:text-gray-300 flex-grow">
                我们精心挑选各类优质电影，包括经典影片、热门新片和小众佳作，满足不同顾客的需求。
              </p>
            </div>
          </motion.div>
          
          <motion.div 
            className={`rounded-xl overflow-hidden shadow-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} flex flex-col`}
            variants={itemVariants}
            whileHover={{ y: -5, transition: { duration: 0.3 } }}
          >
            <div className="p-6">
              <div className="w-16 h-16 mb-4 rounded-full bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center">
                <i className="fas fa-heart text-2xl text-purple-600 dark:text-purple-400"></i>
              </div>
              <h3 className="text-xl font-bold mb-3">个性化服务</h3>
              <p className="text-gray-600 dark:text-gray-300 flex-grow">
                我们关注每一位顾客的需求，提供个性化的服务和定制化的解决方案，让您的体验更加独特。
              </p>
            </div>
          </motion.div>
          
          <motion.div 
            className={`rounded-xl overflow-hidden shadow-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} flex flex-col`}
            variants={itemVariants}
            whileHover={{ y: -5, transition: { duration: 0.3 } }}
          >
            <div className="p-6">
              <div className="w-16 h-16 mb-4 rounded-full bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center">
                <i className="fas fa-globe text-2xl text-purple-600 dark:text-purple-400"></i>
              </div>
              <h3 className="text-xl font-bold mb-3">全球化视野</h3>
              <p className="text-gray-600 dark:text-gray-300 flex-grow">
                我们具有全球化的视野和资源，不仅在中国多个城市设有分店，还在日本东京开设了海外分店。
              </p>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* 客户评价 */}
      <motion.section 
        className={`rounded-2xl p-8 mb-16 ${theme === 'dark' ? 'bg-gray-800' : 'bg-purple-50'}`}
        variants={itemVariants}
      >
        <h2 className="text-2xl font-bold mb-8 text-center">客户评价</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div 
            className={`p-6 rounded-xl shadow-md bg-white dark:bg-gray-700`}
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
              "FlickNibble House的'电影+餐饮'体验真的很棒！我和女朋友在这里度过了一个难忘的夜晚，一边观看经典电影，一边享受美食，服务也很贴心。强烈推荐给所有情侣！"
            </p>
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
                <img 
                  src="https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=young%20asian%20man%20smiling%2C%20happy%20expression&sign=cb8b082cc7dee497a72c81a648573a3e" 
                  alt="Customer" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <div className="font-medium">张先生</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">上海店顾客</div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className={`p-6 rounded-xl shadow-md bg-white dark:bg-gray-700`}
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
              "我参加了FlickNibble House组织的日本旅游套餐，体验非常棒！行程安排合理，住宿舒适，美食丰富，导游专业，特别是电影主题活动，让整个旅程更加难忘。"
            </p>
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
                <img 
                  src="https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=young%20asian%20woman%20smiling%2C%20happy%20expression&sign=380a9a838e04d90796b6c758b1eaf4f3" 
                  alt="Customer" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <div className="font-medium">李女士</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">日本旅游套餐顾客</div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className={`p-6 rounded-xl shadow-md bg-white dark:bg-gray-700`}
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
              "作为一个电影爱好者，我非常喜欢FlickNibble House的电影主题活动。他们不仅放映了很多经典电影，还组织了导演见面会和电影讨论会，让我对电影有了更深的理解。"
            </p>
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
                <img 
                  src="https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=asian%20man%20with%20glasses%2C%20film%20enthusiast%2C%20happy%20expression&sign=eed22eaa5b877ef71ec7c42deca95fb7" 
                  alt="Customer" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <div className="font-medium">王先生</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">北京店顾客</div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className={`p-6 rounded-xl shadow-md bg-white dark:bg-gray-700`}
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
              "我在FlickNibble House为女朋友准备了一个惊喜生日派对，他们的团队非常专业，帮我策划了整个活动，从场地布置到美食选择，都非常贴心。女朋友非常感动，这是我们度过的最难忘的生日之一。"
            </p>
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
                <img 
                  src="https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=happy%20asian%20couple%20together%2C%20romantic%20atmosphere&sign=b15a438360d9b9eebd218dd30a58e9c6" 
                  alt="Customer" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <div className="font-medium">赵先生</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">广州店顾客</div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* 详细内容链接 */}
      <motion.section 
        className="mb-16"
        variants={itemVariants}
      >
        <h2 className="text-2xl font-bold mb-8 text-center">了解更多</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <motion.div 
            className={`rounded-xl overflow-hidden shadow-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} flex flex-col h-full`}
            variants={itemVariants}
            whileHover={{ y: -5, transition: { duration: 0.3 } }}
          >
            <div className="p-6 flex flex-col flex-grow">
              <div className="w-16 h-16 mb-4 rounded-full bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center">
                <i className="fas fa-trophy text-2xl text-purple-600 dark:text-purple-400"></i>
              </div>
              <h3 className="text-xl font-bold mb-3">{t('valueProposition')}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">
                了解我们如何为顾客创造独特的价值，以及我们的竞争优势。
              </p>
              <Link 
                to="/why-choose-us/value-proposition"
                className="text-purple-600 dark:text-purple-400 font-medium hover:underline flex items-center"
              >
                了解更多
                <i className="fas fa-arrow-right ml-2"></i>
              </Link>
            </div>
          </motion.div>
          
          <motion.div 
            className={`rounded-xl overflow-hidden shadow-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} flex flex-col h-full`}
            variants={itemVariants}
            whileHover={{ y: -5, transition: { duration: 0.3 } }}
          >
            <div className="p-6 flex flex-col flex-grow">
              <div className="w-16 h-16 mb-4 rounded-full bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center">
                <i className="fas fa-leaf text-2xl text-purple-600 dark:text-purple-400"></i>
              </div>
              <h3 className="text-xl font-bold mb-3">{t('sustainability')}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">
                了解我们如何在业务运营中注重可持续发展，保护环境，履行社会责任。
              </p>
              <Link 
                to="/why-choose-us/sustainability"
                className="text-purple-600 dark:text-purple-400 font-medium hover:underline flex items-center"
              >
                了解更多
                <i className="fas fa-arrow-right ml-2"></i>
              </Link>
            </div>
          </motion.div>
          
          <motion.div 
            className={`rounded-xl overflow-hidden shadow-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} flex flex-col h-full`}
            variants={itemVariants}
            whileHover={{ y: -5, transition: { duration: 0.3 } }}
          >
            <div className="p-6 flex flex-col flex-grow">
              <div className="w-16 h-16 mb-4 rounded-full bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center">
                <i className="fas fa-handshake text-2xl text-purple-600 dark:text-purple-400"></i>
              </div>
              <h3 className="text-xl font-bold mb-3">{t('partnerships')}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">
                了解我们的合作伙伴网络，包括电影公司、餐厅、酒店等，以及我们如何通过合作创造更多价值。
              </p>
              <Link 
                to="/why-choose-us/partnerships"
                className="text-purple-600 dark:text-purple-400 font-medium hover:underline flex items-center"
              >
                了解更多
                <i className="fas fa-arrow-right ml-2"></i>
              </Link>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* 比较优势 */}
      <motion.section 
        className={`rounded-2xl p-8 mb-16 ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} shadow-lg max-w-4xl mx-auto`}
        variants={itemVariants}
      >
        <h2 className="text-2xl font-bold mb-6 text-center">我们与其他品牌的区别</h2>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className={`border-b ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'}`}>
                <th className="text-left py-4 px-6">服务特点</th>
                <th className="text-center py-4 px-6">FlickNibble House</th>
                <th className="text-center py-4 px-6">传统电影院</th>
                <th className="text-center py-4 px-6">普通餐厅</th>
              </tr>
            </thead>
            <tbody>
              <tr className={`border-b ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'}`}>
                <td className="py-4 px-6 font-medium">电影+餐饮体验</td>
                <td className="text-center py-4 px-6 text-green-500"><i className="fas fa-check-circle"></i></td>
                <td className="text-center py-4 px-6 text-red-500"><i className="fas fa-times-circle"></i></td>
                <td className="text-center py-4 px-6 text-red-500"><i className="fas fa-times-circle"></i></td>
              </tr>
              <tr className={`border-b ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'}`}>
                <td className="py-4 px-6 font-medium">高品质美食</td>
                <td className="text-center py-4 px-6 text-green-500"><i className="fas fa-check-circle"></i></td>
                <td className="text-center py-4 px-6 text-yellow-500"><i className="fas fa-exclamation-circle"></i></td>
                <td className="text-center py-4 px-6 text-green-500"><i className="fas fa-check-circle"></i></td>
              </tr>
              <tr className={`border-b ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'}`}>
                <td className="py-4 px-6 font-medium">舒适观影环境</td>
                <td className="text-center py-4 px-6 text-green-500"><i className="fas fa-check-circle"></i></td>
                <td className="text-center py-4 px-6 text-green-500"><i className="fas fa-check-circle"></i></td>
                <td className="text-center py-4 px-6 text-red-500"><i className="fas fa-times-circle"></i></td>
              </tr>
              <tr className={`border-b ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'}`}>
                <td className="py-4 px-6 font-medium">电影主题活动</td>
                <td className="text-center py-4 px-6 text-green-500"><i className="fas fa-check-circle"></i></td>
                <td className="text-center py-4 px-6 text-yellow-500"><i className="fas fa-exclamation-circle"></i></td>
                <td className="text-center py-4 px-6 text-red-500"><i className="fas fa-times-circle"></i></td>
              </tr>
              <tr className={`border-b ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'}`}>
                <td className="py-4 px-6 font-medium">个性化服务</td>
                <td className="text-center py-4 px-6 text-green-500"><i className="fas fa-check-circle"></i></td>
                <td className="text-center py-4 px-6 text-red-500"><i className="fas fa-times-circle"></i></td>
                <td className="text-center py-4 px-6 text-yellow-500"><i className="fas fa-exclamation-circle"></i></td>
              </tr>
              <tr>
                <td className="py-4 px-6 font-medium">日本旅游套餐</td>
                <td className="text-center py-4 px-6 text-green-500"><i className="fas fa-check-circle"></i></td>
                <td className="text-center py-4 px-6 text-red-500"><i className="fas fa-times-circle"></i></td>
                <td className="text-center py-4 px-6 text-red-500"><i className="fas fa-times-circle"></i></td>
              </tr>
            </tbody>
          </table>
        </div>
      </motion.section>

      {/* 行动呼吁 */}
      <motion.section 
        className="text-center max-w-3xl mx-auto"
        variants={itemVariants}
      >
        <h2 className="text-2xl font-bold mb-4">准备好体验我们的服务了吗？</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          立即预订我们的服务，开启一段难忘的"电影+餐饮"创新体验之旅。我们期待为您服务！
        </p>
        <Link 
          to="/services/japan-tour"
          className="inline-flex items-center justify-center bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white font-medium py-3 px-8 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
        >
          预订日本旅游套餐
          <i className="fas fa-arrow-right ml-2"></i>
        </Link>
      </motion.section>
    </motion.div>
  );
};

export default WhyChooseUs;