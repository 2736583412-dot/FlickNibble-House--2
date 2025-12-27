import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { LanguageContext } from '@/contexts/languageContext';
import { useTheme } from '@/hooks/useTheme';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

// 客户满意度数据
const satisfactionData = [
  { name: '非常满意', value: 75 },
  { name: '满意', value: 20 },
  { name: '一般', value: 5 },
];

// 颜色
const COLORS = ['#9333ea', '#3b82f6', '#6b7280'];

const ValueProposition: React.FC = () => {
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
        <h1 className="text-4xl font-bold mb-4">{t('valueProposition')}</h1>
        <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-500 mx-auto"></div>
        <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          了解FlickNibble House如何为顾客创造独特的价值，以及我们的竞争优势。
        </p>
      </motion.div>

      {/* 我们的价值主张 */}
      <motion.section 
        className="mb-16"
        variants={itemVariants}
      >
        <h2 className="text-2xl font-bold mb-8 text-center">我们的价值主张</h2>
        
        <div className={`p-8 rounded-2xl shadow-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} max-w-4xl mx-auto`}>
          <div className="space-y-6">
            <motion.div variants={itemVariants}>
              <h3 className="text-xl font-bold mb-3">创新的"电影+餐饮"体验</h3>
              <p className="text-gray-600 dark:text-gray-300">
                我们开创了"电影+餐饮"的创新体验模式，打破传统观影与用餐的界限，为顾客提供独特的沉浸式体验。通过基于场景的订餐、不间断送餐等服务，我们让顾客能够在舒适的环境中一边欣赏精彩的电影，一边享受精致的美食。
              </p>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <h3 className="text-xl font-bold mb-3">高品质的产品和服务</h3>
              <p className="text-gray-600 dark:text-gray-300">
                我们注重每一个细节，从食材选择到服务流程，都精益求精，确保为顾客提供高品质的体验。我们的厨师团队由经验丰富的专业人士组成，他们精心打造各类美食；我们的服务团队经过严格培训，致力于为顾客提供贴心、周到的服务。
              </p>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <h3 className="text-xl font-bold mb-3">个性化的解决方案</h3>
              <p className="text-gray-600 dark:text-gray-300">
                我们关注每一位顾客的需求，提供个性化的服务和定制化的解决方案。无论是电影主题晚餐还是日本旅游套餐，我们都可以根据顾客的需求和喜好进行定制，让每一位顾客都能获得独特的体验。
              </p>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <h3 className="text-xl font-bold mb-3">丰富的电影文化体验</h3>
              <p className="text-gray-600 dark:text-gray-300">
                我们不仅提供观影和用餐的服务，还致力于传播电影文化。我们定期举办电影主题活动，包括电影首映礼、明星见面会、电影讨论会等，让顾客能够更深入地了解电影文化，与其他电影爱好者交流分享。
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* 竞争优势 */}
      <motion.section 
        className="mb-16"
        variants={itemVariants}
      >
        <h2 className="text-2xl font-bold mb-8 text-center">竞争优势</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div 
            className={`p-6 rounded-xl shadow-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}
            variants={itemVariants}
          >
            <div className="w-16 h-16 mb-4 rounded-full bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center">
              <i className="fas fa-crown text-2xl text-purple-600 dark:text-purple-400"></i>
            </div>
            <h3 className="text-xl font-bold mb-3">独特的商业模式</h3>
            <p className="text-gray-600 dark:text-gray-300">
              我们创新的"电影+餐饮"模式在市场上独树一帜，为顾客提供了全新的体验。这种模式不仅满足了顾客对娱乐和美食的双重需求，还为我们创造了独特的竞争优势。
            </p>
          </motion.div>
          
          <motion.div 
            className={`p-6 rounded-xl shadow-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}
            variants={itemVariants}
          >
            <div className="w-16 h-16 mb-4 rounded-full bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center">
              <i className="fas fa-users text-2xl text-purple-600 dark:text-purple-400"></i>
            </div>
            <h3 className="text-xl font-bold mb-3">专业的团队</h3>
            <p className="text-gray-600 dark:text-gray-300">
              我们拥有一支专业、充满激情的团队，包括厨师、服务人员、电影策划人员等。他们丰富的经验和专业的知识，是我们提供高品质服务的保障。
            </p>
          </motion.div>
          
          <motion.div 
            className={`p-6 rounded-xl shadow-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}
            variants={itemVariants}
          >
            <div className="w-16 h-16 mb-4 rounded-full bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center">
              <i className="fas fa-map-marker-alt text-2xl text-purple-600 dark:text-purple-400"></i>
            </div>
            <h3 className="text-xl font-bold mb-3">战略位置</h3>
            <p className="text-gray-600 dark:text-gray-300">
              我们的分店位于主要城市的核心商圈或旅游景点附近，交通便利，人流量大，为顾客提供了便捷的体验场所。
            </p>
          </motion.div>
          
          <motion.div 
            className={`p-6 rounded-xl shadow-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}
            variants={itemVariants}
          >
            <div className="w-16 h-16 mb-4 rounded-full bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center">
              <i className="fas fa-handshake text-2xl text-purple-600 dark:text-purple-400"></i>
            </div>
            <h3 className="text-xl font-bold mb-3">强大的合作伙伴网络</h3>
            <p className="text-gray-600 dark:text-gray-300">
              我们与多家电影公司、餐厅、酒店等建立了长期稳定的合作关系，这使我们能够为顾客提供更多样化、更高品质的服务。
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* 客户满意度 */}
      <motion.section 
        className={`rounded-2xl p-8 mb-16 ${theme === 'dark' ? 'bg-gray-800' : 'bg-purple-50'}`}
        variants={itemVariants}
      >
        <h2 className="text-2xl font-bold mb-8 text-center">客户满意度</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div variants={itemVariants}>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={satisfactionData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={120}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  >
                    {satisfactionData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: theme === 'dark' ? '#1f2937' : '#ffffff',
                      borderColor: theme === 'dark' ? '#374151' : '#e5e7eb',
                      color: theme === 'dark' ? '#e5e7eb' : '#4b5563'
                    }} 
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-bold mb-4">我们的承诺</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              顾客的满意度是我们最大的追求。我们通过定期的顾客满意度调查，了解顾客的需求和反馈，不断改进我们的产品和服务。目前，我们的顾客满意度达到了95%以上，这是对我们工作的最大肯定。
            </p>
            <div className="space-y-3">
              <div className="flex items-start">
                <i className="fas fa-check-circle text-green-500 mt-1 mr-3"></i>
                <span className="text-gray-600 dark:text-gray-300">提供高品质的产品和服务</span>
              </div>
              <div className="flex items-start">
                <i className="fas fa-check-circle text-green-500 mt-1 mr-3"></i>
                <span className="text-gray-600 dark:text-gray-300">积极倾听顾客的需求和反馈</span>
              </div>
              <div className="flex items-start">
                <i className="fas fa-check-circle text-green-500 mt-1 mr-3"></i>
                <span className="text-gray-600 dark:text-gray-300">不断创新，提升顾客体验</span>
              </div>
              <div className="flex items-start">
                <i className="fas fa-check-circle text-green-500 mt-1 mr-3"></i>
                <span className="text-gray-600 dark:text-gray-300">公平合理的价格策略</span>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* 成功案例 */}
      <motion.section 
        className="mb-16"
        variants={itemVariants}
      >
        <h2 className="text-2xl font-bold mb-8 text-center">成功案例</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div 
            className={`rounded-xl overflow-hidden shadow-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}
            variants={itemVariants}
          >
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3">日本旅游套餐</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                我们推出的"10天5城日本夏日限量游"获得了巨大成功，吸引了大量年轻情侣报名参加。顾客对行程安排、住宿条件、美食体验等方面都给予了高度评价，满意度达到了98%。
              </p>
              <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                <i className="fas fa-calendar-alt mr-2"></i>
                <span>2024年夏季</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className={`rounded-xl overflow-hidden shadow-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}
            variants={itemVariants}
          >
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3">电影主题美食节</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                我们在上海举办的电影主题美食节吸引了超过10,000名顾客参加，活动期间不仅放映了多部经典电影，还提供了各种电影主题美食，获得了顾客的广泛好评。
              </p>
              <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                <i className="fas fa-calendar-alt mr-2"></i>
                <span>2024年国庆期间</span>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* 结语 */}
      <motion.section 
        className="text-center max-w-3xl mx-auto"
        variants={itemVariants}
      >
        <h2 className="text-2xl font-bold mb-4">选择FlickNibble House的理由</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          在FlickNibble House，我们致力于为顾客创造独特、高品质的"电影+餐饮"创新体验。我们的价值主张和竞争优势，使我们成为您享受电影和美食的最佳选择。
        </p>
        <a 
          href="#" 
          className="inline-flex items-center justify-center bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white font-medium py-3 px-8 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
        >
          立即体验
          <i className="fas fa-arrow-right ml-2"></i>
        </a>
      </motion.section>
    </motion.div>
  );
};

export default ValueProposition;