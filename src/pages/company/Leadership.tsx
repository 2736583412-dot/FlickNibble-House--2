import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { LanguageContext } from '@/contexts/languageContext';
import { useTheme } from '@/hooks/useTheme';

// 定义领导团队成员类型
interface TeamMember {
  id: number;
  name: string;
  position: string;
  bio: string;
  image: string;
}

const Leadership: React.FC = () => {
  const { t } = useContext(LanguageContext);
  const { theme } = useTheme();
  
  // 领导团队成员数据
  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: "张明",
      position: "创始人兼首席执行官",
      bio: "张明拥有10年以上的餐饮和娱乐行业经验，曾在多家知名企业担任高管。他是FlickNibble House的创始人，负责公司的整体战略规划和业务发展。",
      image: "https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=Asian%20businessman%20in%20suit%2C%20confident%20expression%2C%20professional%20portrait&sign=36ae3796be7df00a3480dc6fad959cf8"
    },
    {
      id: 2,
      name: "李婷",
      position: "联合创始人兼首席运营官",
      bio: "李婷毕业于知名商学院，拥有丰富的运营管理经验。她负责FlickNibble House的日常运营和服务质量控制，确保顾客获得最佳体验。",
      image: "https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=Asian%20businesswoman%20in%20suit%2C%20confident%20expression%2C%20professional%20portrait&sign=d84d4f7d26e47c69fbabed832d53729c"
    },
    {
      id: 3,
      name: "王浩",
      position: "首席财务官",
      bio: "王浩拥有注册会计师资格，曾在国际会计师事务所工作多年。他负责FlickNibble House的财务管理、投资决策和风险控制。",
      image: "https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=Asian%20businessman%20in%20suit%2C%20smart%20expression%2C%20professional%20portrait&sign=abf9927ddd2c700d37d2c370c48cccdc"
    },
    {
      id: 4,
      name: "刘芳",
      position: "创意总监",
      bio: "刘芳毕业于知名艺术学院，曾在多家创意机构工作。她负责FlickNibble House的品牌设计、空间设计和体验设计，打造独特的品牌形象。",
      image: "https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=Asian%20businesswoman%20creative%20director%2C%20stylish%20appearance%2C%20professional%20portrait&sign=68bbc3cdf772666d02b8efbe5287f18a"
    },
    {
      id: 5,
      name: "赵强",
      position: "技术总监",
      bio: "赵强拥有计算机科学博士学位，曾在知名科技公司工作。他负责FlickNibble House的技术研发、系统建设和数字化转型。",
      image: "https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=Asian%20man%20tech%20director%2C%20smart%20appearance%2C%20professional%20portrait&sign=eb9f1e0f25c27603c4b0439d447b8160"
    },
    {
      id: 6,
      name: "陈琳",
      position: "营销总监",
      bio: "陈琳拥有丰富的市场营销经验，曾在多家知名品牌负责营销工作。她负责FlickNibble House的品牌推广、市场策略和客户获取。",
      image: "https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=Asian%20businesswoman%20marketing%20director%2C%20confident%20expression%2C%20professional%20portrait&sign=f1a600642dd965b57b6b5a629eff22b9"
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
        <h1 className="text-4xl font-bold mb-4">{t('leadership')}</h1>
        <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-500 mx-auto"></div>
        <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          我们的领导团队由经验丰富、充满激情的专业人士组成，他们致力于推动FlickNibble House的创新和发展。
        </p>
      </motion.div>

      {/* 领导团队展示 */}
      <motion.section 
        className="mb-16"
        variants={containerVariants}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <motion.div 
              key={member.id}
              className={`rounded-xl overflow-hidden shadow-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}
              variants={itemVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                  <p className="text-purple-300">{member.position}</p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 dark:text-gray-300">
                  {member.bio}
                </p>
                <div className="mt-4 flex space-x-3">
                  <a href="#" className="text-gray-500 hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a href="#" className="text-gray-500 hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#" className="text-gray-500 hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400">
                    <i className="fas fa-envelope"></i>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* 团队价值观 */}
      <motion.section 
        className={`rounded-2xl p-8 mb-16 ${theme === 'dark' ? 'bg-gray-800' : 'bg-purple-50'}`}
        variants={itemVariants}
      >
        <h2 className="text-2xl font-bold mb-8 text-center">团队价值观</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <motion.div 
            className="text-center p-6 rounded-xl"
            variants={itemVariants}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          >
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white dark:bg-gray-700 flex items-center justify-center shadow-md">
              <i className="fas fa-users text-2xl text-purple-600 dark:text-purple-400"></i>
            </div>
            <h3 className="text-xl font-bold mb-2">协作</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              我们相信团队协作的力量，通过开放、透明的沟通，共同解决问题，创造价值。
            </p>
          </motion.div>
          
          <motion.div 
            className="text-center p-6 rounded-xl"
            variants={itemVariants}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          >
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white dark:bg-gray-700 flex items-center justify-center shadow-md">
              <i className="fas fa-lightbulb text-2xl text-purple-600 dark:text-purple-400"></i>
            </div>
            <h3 className="text-xl font-bold mb-2">创新</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              我们鼓励创新思维，不断挑战现状，寻找更好的解决方案和服务方式。
            </p>
          </motion.div>
          
          <motion.div 
            className="text-center p-6 rounded-xl"
            variants={itemVariants}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          >
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white dark:bg-gray-700 flex items-center justify-center shadow-md">
              <i className="fas fa-heart text-2xl text-purple-600 dark:text-purple-400"></i>
            </div>
            <h3 className="text-xl font-bold mb-2">热情</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              我们热爱我们的工作和我们的品牌，用热情和真诚对待每一位顾客和合作伙伴。
            </p>
          </motion.div>
          
          <motion.div 
            className="text-center p-6 rounded-xl"
            variants={itemVariants}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          >
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white dark:bg-gray-700 flex items-center justify-center shadow-md">
              <i className="fas fa-trophy text-2xl text-purple-600 dark:text-purple-400"></i>
            </div>
            <h3 className="text-xl font-bold mb-2">卓越</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              我们追求卓越品质，不断提升自己，确保每一项工作都达到最高标准。
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* 加入我们 */}
      <motion.section 
        className="text-center max-w-3xl mx-auto"
        variants={itemVariants}
      >
        <h2 className="text-2xl font-bold mb-4">加入我们的团队</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          FlickNibble House正处于快速发展阶段，我们欢迎有才华、有激情的人才加入我们的团队，共同创造"电影+餐饮"的全新体验。
        </p>
        <a 
          href="#" 
          className="inline-flex items-center justify-center bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white font-medium py-3 px-8 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
        >
          查看职位空缺
          <i className="fas fa-arrow-right ml-2"></i>
        </a>
      </motion.section>
    </motion.div>
  );
};

export default Leadership;