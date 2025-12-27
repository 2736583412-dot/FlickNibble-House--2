import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { LanguageContext } from '@/contexts/languageContext';
import { useTheme } from '@/hooks/useTheme';

const AboutImage = "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Modern%20movie%20theater%20interior%20with%20dining%20area%2C%20comfortable%20seating%2C%20high%20quality%20design%2C%20romantic%20atmosphere%2C%20people%20enjoying%20food%20while%20watching%20movie&sign=a9d3fd5890b8c3a153100fb8276974db";

const About: React.FC = () => {
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
        <h1 className="text-4xl font-bold mb-4">{t('aboutTitle')}</h1>
        <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-500 mx-auto"></div>
      </motion.div>

      {/* 关于我们简介 */}
      <motion.section 
        className="mb-16"
        variants={itemVariants}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <motion.h2 
              className="text-2xl font-bold mb-4"
              variants={itemVariants}
            >
              我们的故事
            </motion.h2>
            <motion.p 
              className="text-gray-600 dark:text-gray-300 mb-6"
              variants={itemVariants}
            >
              FlickNibble House成立于2018年，是一个专注于"电影+餐饮"创新体验的品牌。我们的创始人是一对热爱电影和美食的情侣，他们在一次约会中突发奇想：为什么不能一边享受美食，一边观看精彩的电影呢？于是，FlickNibble House应运而生。
            </motion.p>
            <motion.p 
              className="text-gray-600 dark:text-gray-300 mb-6"
              variants={itemVariants}
            >
              我们的第一家店位于上海的时尚中心，很快就成为了年轻情侣和电影爱好者的热门去处。我们通过基于场景的订餐、不间断送餐等服务，打破了传统观影与用餐的界限，为顾客提供了全新的体验。
            </motion.p>
            <motion.div 
              className="flex flex-wrap gap-4"
              variants={itemVariants}
            >
              <Link 
                to="/about/company-overview"
                className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white font-medium py-2 px-6 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
              >
                了解更多
              </Link>
              <Link 
                to="/about/leadership"
                className={`border-2 ${theme === 'dark' ? 'border-gray-600 hover:border-gray-400' : 'border-gray-300 hover:border-gray-600'} font-medium py-2 px-6 rounded-full transition-all duration-300`}
              >
                查看领导团队
              </Link>
            </motion.div>
          </div>
          <motion.div 
            className="rounded-xl overflow-hidden shadow-lg"
            variants={itemVariants}
          >
            <img 
              src={AboutImage} 
              alt="FlickNibble House" 
              className="w-full h-auto"
            />
          </motion.div>
        </div>
      </motion.section>

      {/* 使命与愿景 */}
      <motion.section 
        className={`rounded-2xl p-8 mb-16 ${theme === 'dark' ? 'bg-gray-800' : 'bg-purple-50'}`}
        variants={itemVariants}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center mr-4">
                <i className="fas fa-bullseye text-xl text-purple-600 dark:text-purple-400"></i>
              </div>
              <h3 className="text-2xl font-bold">{t('aboutMission')}</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              我们的使命是通过创新的"电影+餐饮"体验，为顾客创造难忘的美好时光。我们致力于打破传统服务模式的界限，提供个性化、高品质的服务，让每一位顾客都能在FlickNibble House找到属于自己的快乐。
            </p>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li className="flex items-start">
                <i className="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                <span>提供高品质的电影观影体验</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                <span>创造独特的美食享受</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                <span>打造浪漫舒适的环境</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                <span>不断创新，引领行业发展</span>
              </li>
            </ul>
          </div>
          
          <div>
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center mr-4">
                <i className="fas fa-eye text-xl text-purple-600 dark:text-purple-400"></i>
              </div>
              <h3 className="text-2xl font-bold">{t('aboutVision')}</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              我们的愿景是成为全球领先的"电影+餐饮"体验品牌，让更多的人能够享受到我们独特的服务。我们希望通过不断的创新和发展，将FlickNibble House打造成一个代表高品质生活方式的符号。
            </p>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li className="flex items-start">
                <i className="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                <span>成为行业标杆，引领服务创新</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                <span>拓展全球市场，服务更多顾客</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                <span>打造可持续发展的商业模式</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                <span>为员工创造发展空间和成长机会</span>
              </li>
            </ul>
          </div>
        </div>
      </motion.section>

      {/* 发展历程 */}
      <motion.section 
        className="mb-16"
        variants={itemVariants}
      >
        <h2 className="text-2xl font-bold mb-8 text-center">发展历程</h2>
        
        <div className="relative">
          {/* 时间线 */}<div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-purple-600 to-blue-500 rounded-full"></div>
          
          {/* 时间点 */}
          <div className="space-y-12">
            <motion.div 
              className="relative grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
              variants={itemVariants}
            >
              <div className="md:text-right">
                <h3 className="text-xl font-bold mb-2">2018年</h3>
                <p className="text-gray-600 dark:text-gray-300">FlickNibble House在上海成立，开设了第一家"电影+餐饮"体验店。</p>
              </div>
              <div></div>
              <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-8 h-8 rounded-full bg-purple-600 border-4 border-white dark:border-gray-900"></div>
              </div>
            </motion.div>
            
            <motion.div 
              className="relative grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
              variants={itemVariants}
            >
              <div></div>
              <div>
                <h3 className="text-xl font-bold mb-2">2020年</h3>
                <p className="text-gray-600 dark:text-gray-300">拓展至北京和广州，成为中国主要城市的知名品牌。</p>
              </div>
              <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-8 h-8 rounded-full bg-blue-500 border-4 border-white dark:border-gray-900"></div>
              </div>
            </motion.div>
            
            <motion.div 
              className="relative grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
              variants={itemVariants}
            >
              <div className="md:text-right">
                <h3 className="text-xl font-bold mb-2">2022年</h3>
                <p className="text-gray-600 dark:text-gray-300">推出创新的"基于场景的订餐"系统，提升顾客体验。</p>
              </div>
              <div></div>
              <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-8 h-8 rounded-full bg-purple-600 border-4 border-white dark:border-gray-900"></div>
              </div>
            </motion.div>
            
            <motion.div 
              className="relative grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
              variants={itemVariants}
            >
              <div></div>
              <div>
                <h3 className="text-xl font-bold mb-2">2024年</h3>
                <p className="text-gray-600 dark:text-gray-300">启动国际扩张计划，在日本东京开设第一家海外分店。</p>
              </div>
              <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-8 h-8 rounded-full bg-blue-500 border-4 border-white dark:border-gray-900"></div>
              </div>
            </motion.div>
            
            <motion.div 
              className="relative grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
              variants={itemVariants}
            >
              <div className="md:text-right">
                <h3 className="text-xl font-bold mb-2">2025年</h3>
                <p className="text-gray-600 dark:text-gray-300">推出"10天5城日本夏日限量游"，将电影、美食和旅行完美结合。</p>
              </div>
              <div></div>
              <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-8 h-8 rounded-full bg-purple-600 border-4 border-white dark:border-gray-900"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* 品牌价值观 */}
      <motion.section 
        className="mb-16"
        variants={itemVariants}
      >
        <h2 className="text-2xl font-bold mb-8 text-center">品牌价值观</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <motion.div 
            className={`p-6 rounded-xl text-center shadow-md ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}
            variants={itemVariants}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center">
              <i className="fas fa-lightbulb text-2xl text-purple-600 dark:text-purple-400"></i>
            </div>
            <h3 className="text-lg font-bold mb-2">创新</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">不断突破传统，创造全新的体验和服务模式。</p>
          </motion.div>
          
          <motion.div 
            className={`p-6 rounded-xl text-center shadow-md ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}
            variants={itemVariants}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center">
              <i className="fas fa-heart text-2xl text-purple-600 dark:text-purple-400"></i>
            </div>
            <h3 className="text-lg font-bold mb-2">热情</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">用真诚和热情对待每一位顾客和合作伙伴。</p>
          </motion.div>
          
          <motion.div 
            className={`p-6 rounded-xl text-center shadow-md ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}
            variants={itemVariants}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center">
              <i className="fas fa-trophy text-2xl text-purple-600 dark:text-purple-400"></i>
            </div>
            <h3 className="text-lg font-bold mb-2">卓越</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">追求卓越品质，确保每一个细节都尽善尽美。</p>
          </motion.div>
          
          <motion.div 
            className={`p-6 rounded-xl text-center shadow-md ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}
            variants={itemVariants}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center">
              <i className="fas fa-hands-helping text-2xl text-purple-600 dark:text-purple-400"></i>
            </div>
            <h3 className="text-lg font-bold mb-2">责任</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">积极承担社会责任，推动可持续发展。</p>
          </motion.div>
        </div>
      </motion.section>

      {/* 联系我们 */}
      <motion.section 
        className="text-center"
        variants={itemVariants}
      >
        <h2 className="text-2xl font-bold mb-4">了解更多关于FlickNibble House</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
          如果您对我们的品牌和服务有任何疑问或建议，欢迎随时联系我们。我们期待与您交流，共同创造更多美好的体验。
        </p>
        <Link 
          to="/contact"
          className="inline-flex items-center justify-center bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white font-medium py-3 px-8 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
        >
          {t('contact')}
          <i className="fas fa-arrow-right ml-2"></i>
        </Link>
      </motion.section>
    </motion.div>
  );
};

export default About;