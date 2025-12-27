import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { LanguageContext } from '@/contexts/languageContext';
import { useTheme } from '@/hooks/useTheme';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

// 公司发展数据
const growthData = [
  { year: '2018', revenue: 5, customers: 10 },
  { year: '2019', revenue: 15, customers: 25 },
  { year: '2020', revenue: 25, customers: 40 },
  { year: '2021', revenue: 40, customers: 65 },
  { year: '2022', revenue: 60, customers: 90 },
  { year: '2023', revenue: 80, customers: 120 },
  { year: '2024', revenue: 100, customers: 150 },
];

const Overview: React.FC = () => {
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
        <h1 className="text-4xl font-bold mb-4">{t('companyOverview')}</h1>
        <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-500 mx-auto"></div>
      </motion.div>

      {/* 公司简介 */}
      <motion.section 
        className="mb-16 max-w-4xl mx-auto"
        variants={itemVariants}
      >
        <div className={`p-8 rounded-2xl shadow-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
          <h2 className="text-2xl font-bold mb-6">公司简介</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
            FlickNibble House是一个专注于"电影+餐饮"创新体验的品牌，成立于2018年，总部位于中国上海。我们致力于打破传统观影与用餐的界限，为顾客提供独特的沉浸式体验。
          </p>
          <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
            通过基于场景的订餐、不间断送餐等服务，我们让顾客能够在舒适的环境中一边欣赏精彩的电影，一边享受精致的美食。我们的理念是：电影不仅仅是视觉的享受，更可以与味觉、触觉等多种感官体验相结合，创造出更加丰富、立体的美好记忆。
          </p>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            目前，FlickNibble House已在中国上海、北京、广州等主要城市开设了多家分店，并于2024年在日本东京开设了第一家海外分店。我们的顾客群体主要是年轻情侣、电影爱好者和追求高品质生活的人群。
          </p>
        </div>
      </motion.section>

      {/* 公司数据 */}
      <motion.section 
        className="mb-16"
        variants={itemVariants}
      >
        <h2 className="text-2xl font-bold mb-8 text-center">公司数据</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <motion.div 
            className={`p-6 rounded-xl text-center shadow-md ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}
            variants={itemVariants}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          >
            <div className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">7+</div>
            <p className="text-gray-600 dark:text-gray-300">分店数量</p>
          </motion.div>
          
          <motion.div 
            className={`p-6 rounded-xl text-center shadow-md ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}
            variants={itemVariants}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          >
            <div className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">200k+</div>
            <p className="text-gray-600 dark:text-gray-300">满意顾客</p>
          </motion.div>
          
          <motion.div 
            className={`p-6 rounded-xl text-center shadow-md ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}
            variants={itemVariants}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          >
            <div className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">250+</div>
            <p className="text-gray-600 dark:text-gray-300">员工数量</p>
          </motion.div>
          
          <motion.div 
            className={`p-6 rounded-xl text-center shadow-md ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}
            variants={itemVariants}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          >
            <div className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">2+</div>
            <p className="text-gray-600 dark:text-gray-300">国家覆盖</p>
          </motion.div>
        </div>
        
        {/* 增长图表 */}
        <motion.div 
          className={`p-6 rounded-xl shadow-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}
          variants={itemVariants}
        >
          <h3 className="text-xl font-bold mb-6">公司增长趋势</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={growthData}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              >
                <XAxis dataKey="year" stroke={theme === 'dark' ? '#e5e7eb' : '#4b5563'} />
                <YAxis stroke={theme === 'dark' ? '#e5e7eb' : '#4b5563'} />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: theme === 'dark' ? '#1f2937' : '#ffffff',
                    borderColor: theme === 'dark' ? '#374151' : '#e5e7eb',
                    color: theme === 'dark' ? '#e5e7eb' : '#4b5563'
                  }} 
                />
                <Bar dataKey="revenue" name="营收增长" fill="#9333ea" radius={[4, 4, 0, 0]} />
                <Bar dataKey="customers" name="顾客增长" fill="#3b82f6" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
      </motion.section>

      {/* 服务特色 */}
      <motion.section 
        className="mb-16"
        variants={itemVariants}
      >
        <h2 className="text-2xl font-bold mb-8 text-center">服务特色</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div 
            className={`p-6 rounded-xl shadow-md ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}
            variants={itemVariants}
          >
            <div className="w-16 h-16 mb-4 rounded-full bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center">
              <i className="fas fa-film text-2xl text-purple-600 dark:text-purple-400"></i>
            </div>
            <h3 className="text-xl font-bold mb-2">高品质观影体验</h3>
            <p className="text-gray-600 dark:text-gray-300">
              我们配备了先进的放映设备和舒适的座椅，为您提供沉浸式的观影体验。同时，我们精心挑选各类优质电影，满足不同顾客的需求。
            </p>
          </motion.div>
          
          <motion.div 
            className={`p-6 rounded-xl shadow-md ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}
            variants={itemVariants}
          >
            <div className="w-16 h-16 mb-4 rounded-full bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center">
              <i className="fas fa-utensils text-2xl text-purple-600 dark:text-purple-400"></i>
            </div>
            <h3 className="text-xl font-bold mb-2">精致美食</h3>
            <p className="text-gray-600 dark:text-gray-300">
              我们的厨师团队由经验丰富的专业人士组成，他们精心打造各类美食，既有经典的电影小吃，也有创意十足的特色料理。
            </p>
          </motion.div>
          
          <motion.div 
            className={`p-6 rounded-xl shadow-md ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}
            variants={itemVariants}
          >
            <div className="w-16 h-16 mb-4 rounded-full bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center">
              <i className="fas fa-concierge-bell text-2xl text-purple-600 dark:text-purple-400"></i>
            </div>
            <h3 className="text-xl font-bold mb-2">优质服务</h3>
            <p className="text-gray-600 dark:text-gray-300">
              我们的服务团队经过严格培训，致力于为顾客提供贴心、周到的服务。从预订到用餐，从观影到结束，我们全程为您保驾护航。
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* 未来规划 */}
      <motion.section 
        className="mb-16"
        variants={itemVariants}
      >
        <h2 className="text-2xl font-bold mb-8 text-center">未来规划</h2>
        
        <div className={`p-8 rounded-2xl shadow-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} max-w-4xl mx-auto`}>
          <div className="space-y-6">
            <div className="flex">
              <div className="w-1/4 font-bold">短期规划 (1-2年)</div>
              <div className="w-3/4 text-gray-600 dark:text-gray-300">
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                    <span>在中国主要城市拓展至20家分店</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                    <span>推出更多创新的"电影+餐饮"体验项目</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                    <span>加强会员体系建设，提升顾客忠诚度</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="flex">
              <div className="w-1/4 font-bold">中期规划 (3-5年)</div>
              <div className="w-3/4 text-gray-600 dark:text-gray-300">
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                    <span>拓展至亚洲主要国家和地区</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                    <span>开发自有电影IP和餐饮品牌</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                    <span>建立培训学院，培养专业人才</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="flex">
              <div className="w-1/4 font-bold">长期规划 (5-10年)</div>
              <div className="w-3/4 text-gray-600 dark:text-gray-300">
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                    <span>成为全球领先的"电影+餐饮"体验品牌</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                    <span>打造多元化的娱乐体验生态系统</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                    <span>推动行业标准的建立和发展</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* 结语 */}
      <motion.section 
        className="text-center max-w-3xl mx-auto"
        variants={itemVariants}
      >
        <h2 className="text-2xl font-bold mb-4">加入我们的旅程</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          FlickNibble House正处于快速发展阶段，我们期待与更多志同道合的伙伴一起，共同创造"电影+餐饮"的全新体验。无论您是顾客、合作伙伴还是求职者，我们都欢迎您的加入！
        </p>
      </motion.section>
    </motion.div>
  );
};

export default Overview;