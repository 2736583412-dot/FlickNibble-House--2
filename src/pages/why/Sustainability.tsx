import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { LanguageContext } from '@/contexts/languageContext';
import { useTheme } from '@/hooks/useTheme';

const Sustainability: React.FC = () => {
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
        <h1 className="text-4xl font-bold mb-4">{t('sustainability')}</h1>
        <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-500 mx-auto"></div>
        <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          在FlickNibble House，我们不仅关注为顾客创造独特的体验，还注重可持续发展，积极履行社会责任，为环境保护贡献自己的力量。
        </p>
      </motion.div>

      {/* 可持续发展理念 */}
      <motion.section 
        className="mb-16"
        variants={itemVariants}
      >
        <h2 className="text-2xl font-bold mb-8 text-center">我们的可持续发展理念</h2>
        
        <div className={`p-8 rounded-2xl shadow-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} max-w-4xl mx-auto`}>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            在FlickNibble House，我们认为可持续发展是企业长期发展的重要基石。我们致力于在创造经济价值的同时，也要创造社会价值和环境价值。我们的可持续发展理念贯穿于企业运营的方方面面，从食材采购到服务提供，从能源使用到废弃物处理，我们都坚持可持续发展的原则。
          </p>
          <p className="text-gray-600 dark:text-gray-300">
            我们相信，通过我们的努力，可以为顾客提供更加环保、健康的体验，同时也为社会和环境做出积极的贡献。我们将继续创新和改进，不断提升我们的可持续发展水平。
          </p>
        </div>
      </motion.section>

      {/* 环境保护措施 */}
      <motion.section 
        className="mb-16"
        variants={itemVariants}
      >
        <h2 className="text-2xl font-bold mb-8 text-center">环境保护措施</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div 
            className={`rounded-xl overflow-hidden shadow-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} flex flex-col`}
            variants={itemVariants}
            whileHover={{ y: -5, transition: { duration: 0.3 } }}
          >
            <div className="p-6">
              <div className="w-16 h-16 mb-4 rounded-full bg-green-100 dark:bg-green-900/50 flex items-center justify-center">
                <i className="fas fa-leaf text-2xl text-green-600 dark:text-green-400"></i>
              </div>
              <h3 className="text-xl font-bold mb-3">减少一次性用品使用</h3>
              <p className="text-gray-600 dark:text-gray-300 flex-grow">
                我们减少使用一次性餐具和塑料制品，推广使用可重复使用的餐具和环保包装材料，降低对环境的影响。
              </p>
            </div>
          </motion.div>
          
          <motion.div 
            className={`rounded-xl overflow-hidden shadow-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} flex flex-col`}
            variants={itemVariants}
            whileHover={{ y: -5, transition: { duration: 0.3 } }}
          >
            <div className="p-6">
              <div className="w-16 h-16 mb-4 rounded-full bg-green-100 dark:bg-green-900/50 flex items-center justify-center">
                <i className="fas fa-recycle text-2xl text-green-600 dark:text-green-400"></i>
              </div>
              <h3 className="text-xl font-bold mb-3">废弃物回收和利用</h3>
              <p className="text-gray-600 dark:text-gray-300 flex-grow">
                我们建立了完善的废弃物回收体系，对不同类型的废弃物进行分类回收和处理，尽可能地减少废弃物的产生，并提高资源的利用率。
              </p>
            </div>
          </motion.div>
          
          <motion.div 
            className={`rounded-xl overflow-hidden shadow-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} flex flex-col`}
            variants={itemVariants}
            whileHover={{ y: -5, transition: { duration: 0.3 } }}
          >
            <div className="p-6">
              <div className="w-16 h-16 mb-4 rounded-full bg-green-100 dark:bg-green-900/50 flex items-center justify-center">
                <i className="fas fa-bolt text-2xl text-green-600 dark:text-green-400"></i>
              </div>
              <h3 className="text-xl font-bold mb-3">节约能源和水资源</h3>
              <p className="text-gray-600 dark:text-gray-300 flex-grow">
                我们采用节能设备和技术，优化能源使用效率，减少能源消耗。同时，我们也注重水资源的节约和合理利用。
              </p>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* 可持续食材来源 */}
      <motion.section 
        className={`rounded-2xl p-8 mb-16 ${theme === 'dark' ? 'bg-gray-800' : 'bg-green-50'}`}
        variants={itemVariants}
      >
        <h2 className="text-2xl font-bold mb-8 text-center">可持续食材来源</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div variants={itemVariants}>
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img 
                src="https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Organic%20farm%20with%20vegetables%20and%20fruits%2C%20sustainable%20agriculture%2C%20green%20fields%2C%20farmers%20working&sign=de0d167df50d18fb87acdcca35211ef6" 
                alt="Sustainable Ingredients" 
                className="w-full h-auto"
              />
            </div>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-bold mb-4">我们的承诺</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              我们注重食材的品质和来源，优先选择有机、本地和可持续种植的食材。我们与多家有机农场和供应商建立了合作关系，确保我们的食材不仅美味，而且安全、健康、环保。
            </p>
            <div className="space-y-3">
              <div className="flex items-start">
                <i className="fas fa-check-circle text-green-500 mt-1 mr-3"></i>
                <span className="text-gray-600 dark:text-gray-300">优先选择有机和可持续种植的食材</span>
              </div>
              <div className="flex items-start">
                <i className="fas fa-check-circle text-green-500 mt-1 mr-3"></i>
                <span className="text-gray-600 dark:text-gray-300">支持本地农业，减少运输带来的环境影响</span>
              </div>
              <div className="flex items-start">
                <i className="fas fa-check-circle text-green-500 mt-1 mr-3"></i>
                <span className="text-gray-600 dark:text-gray-300">关注食材的季节性，提供当季新鲜食材</span>
              </div>
              <div className="flex items-start">
                <i className="fas fa-check-circle text-green-500 mt-1 mr-3"></i>
                <span className="text-gray-600 dark:text-gray-300">减少食材浪费，合理规划采购和使用</span>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* 社会责任 */}
      <motion.section 
        className="mb-16"
        variants={itemVariants}
      >
        <h2 className="text-2xl font-bold mb-8 text-center">社会责任</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div 
            className={`rounded-xl overflow-hidden shadow-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}
            variants={itemVariants}
          >
            <div className="p-6">
              <div className="w-16 h-16 mb-4 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center">
                <i className="fas fa-hands-helping text-2xl text-blue-600 dark:text-blue-400"></i>
              </div>
              <h3 className="text-xl font-bold mb-3">社区支持</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                我们积极参与社区活动，支持当地的文化、教育和环保项目。我们定期组织电影放映活动，为社区居民提供免费的文化体验。我们也支持当地的慈善机构，为需要帮助的人群提供援助。
              </p>
            </div>
          </motion.div>
          
          <motion.div 
            className={`rounded-xl overflow-hidden shadow-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}
            variants={itemVariants}
          >
            <div className="p-6">
              <div className="w-16 h-16 mb-4 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center">
                <i className="fas fa-user-graduate text-2xl text-blue-600 dark:text-blue-400"></i>
              </div>
              <h3 className="text-xl font-bold mb-3">员工发展</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                我们注重员工的成长和发展，提供良好的工作环境和培训机会，帮助员工提升专业技能和综合素质。我们尊重员工的权益，确保员工获得公平的待遇和福利。
              </p>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* 可持续发展目标 */}
      <motion.section 
        className={`rounded-2xl p-8 mb-16 ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} shadow-lg max-w-4xl mx-auto`}
        variants={itemVariants}
      >
        <h2 className="text-2xl font-bold mb-6 text-center">我们的可持续发展目标</h2>
        
        <div className="space-y-6">
          <motion.div variants={itemVariants} className="flex items-center">
            <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/50 flex items-center justify-center mr-4 flex-shrink-0">
              <i className="fas fa-recycle text-xl text-green-600 dark:text-green-400"></i>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-1">到2026年，减少50%的一次性塑料制品使用</h3>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                <div className="bg-green-600 h-2.5 rounded-full" style={{ width: '65%' }}></div>
              </div>
              <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400 mt-1">
                <span>当前进度: 65%</span>
                <span>目标: 100%</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div variants={itemVariants} className="flex items-center">
            <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/50 flex items-center justify-center mr-4 flex-shrink-0">
              <i className="fas fa-bolt text-xl text-green-600 dark:text-green-400"></i>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-1">到2027年，减少30%的能源消耗</h3>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                <div className="bg-green-600 h-2.5 rounded-full" style={{ width: '40%' }}></div>
              </div>
              <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400 mt-1">
                <span>当前进度: 40%</span>
                <span>目标: 100%</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div variants={itemVariants} className="flex items-center">
            <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/50 flex items-center justify-center mr-4 flex-shrink-0">
              <i className="fas fa-tint text-xl text-green-600 dark:text-green-400"></i>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-1">到2027年，减少40%的水资源消耗</h3>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                <div className="bg-green-600 h-2.5 rounded-full" style={{ width: '35%' }}></div>
              </div>
              <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400 mt-1">
                <span>当前进度: 35%</span>
                <span>目标: 100%</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div variants={itemVariants} className="flex items-center">
            <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/50 flex items-center justify-center mr-4 flex-shrink-0">
              <i className="fas fa-seedling text-xl text-green-600 dark:text-green-400"></i>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-1">到2028年，实现80%的食材来自有机和可持续来源</h3>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                <div className="bg-green-600 h-2.5 rounded-full" style={{ width: '55%' }}></div>
              </div>
              <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400 mt-1">
                <span>当前进度: 55%</span>
                <span>目标: 100%</span>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* 加入我们的可持续发展之旅 */}
      <motion.section 
        className="text-center max-w-3xl mx-auto"
        variants={itemVariants}
      >
        <h2 className="text-2xl font-bold mb-4">加入我们的可持续发展之旅</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          可持续发展是我们共同的责任。我们邀请您加入我们的可持续发展之旅，一起为环境保护和社会发展做出贡献。您可以通过选择环保产品、减少浪费、支持可持续发展的企业等方式，为可持续发展贡献自己的力量。
        </p>
        <a 
          href="#" 
          className="inline-flex items-center justify-center bg-gradient-to-r from-green-600 to-blue-500 hover:from-green-700 hover:to-blue-600 text-white font-medium py-3 px-8 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
        >
          了解更多
          <i className="fas fa-arrow-right ml-2"></i>
        </a>
      </motion.section>
    </motion.div>
  );
};

export default Sustainability;