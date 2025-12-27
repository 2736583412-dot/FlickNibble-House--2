import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { LanguageContext } from '@/contexts/languageContext';
import { useTheme } from '@/hooks/useTheme';

// 定义节目类型
interface Program {
  id: number;
  title: string;
  description: string;
  image: string;
  duration: string;
  price: string;
  highlights: string[];
}

const Programs: React.FC = () => {
  const { t } = useContext(LanguageContext);
  const { theme } = useTheme();
  
  // 节目数据
  const programs: Program[] = [
    {
      id: 1,
      title: "经典电影晚餐体验",
      description: "在舒适的环境中一边观看经典电影，一边享受我们的厨师团队精心准备的美食套餐。",
      image: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Classic%20movie%20dinner%20experience%2C%20cozy%20theater%20with%20dining%20tables%2C%20people%20watching%20movie%20while%20dining%2C%20romantic%20atmosphere&sign=ce1210cf361e07895f65f1f402ae99c7",
      duration: "约3小时",
      price: "¥398/人",
      highlights: ["经典电影放映", "四道菜套餐", "精选葡萄酒", "舒适观影环境"]
    },
    {
      id: 2,
      title: "主题电影马拉松",
      description: "选择您喜爱的电影主题，连续观看多部相关电影，期间提供无限量小食和饮料。",
      image: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Movie%20marathon%20event%2C%20people%20watching%20movies%20all%20day%2C%20snacks%20and%20drinks%2C%20cozy%20atmosphere&sign=4ccd32a9de2dbb631c43d3328b259909",
      duration: "约8小时",
      price: "¥598/人",
      highlights: ["主题电影连映", "无限量小食饮料", "舒适休息区", "电影主题纪念品"]
    },
    {
      id: 3,
      title: "电影制作工作坊",
      description: "参加由专业电影人主持的工作坊，学习电影制作的基础知识，尝试自己拍摄和编辑短片。",
      image: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Movie%20making%20workshop%2C%20people%20learning%20filmmaking%2C%20professional%20instructor%2C%20creative%20atmosphere&sign=4442d97ab9f5e3351b77e88d61dbda4f",
      duration: "约6小时",
      price: "¥798/人",
      highlights: ["专业指导", "实践体验", "设备使用", "作品展示与点评"]
    },
    {
      id: 4,
      title: "电影主题餐吧",
      description: "在我们的主题餐吧中，品尝以电影为灵感的创意料理，享受独特的用餐体验。",
      image: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Movie%20themed%20restaurant%2C%20creative%20food%2C%20movie%20decorations%2C%20people%20enjoying%20dining%2C%20unique%20atmosphere&sign=3a93fdc6c47b7bacd1e1cb370bc12e12",
      duration: "约2小时",
      price: "¥298/人起",
      highlights: ["电影主题创意料理", "特色鸡尾酒", "电影装饰", "互动体验"]
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
        <h1 className="text-4xl font-bold mb-4">{t('programs')}</h1>
        <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-500 mx-auto"></div>
        <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          我们精心设计了多样化的电影主题节目，满足不同顾客的需求。无论您是电影爱好者、美食爱好者，还是想要尝试新体验的人，我们都能为您提供独特的体验。
        </p>
      </motion.div>

      {/* 节目展示 */}
      <motion.section 
        className="mb-16"
        variants={containerVariants}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {programs.map((program) => (
            <motion.div 
              key={program.id}
              className={`rounded-xl overflow-hidden shadow-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} flex flex-col`}
              variants={itemVariants}
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
            >
              <div className="relative h-64">
                <img 
                  src={program.image} 
                  alt={program.title} 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {program.price}
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-xl font-bold">{program.title}</h3>
                  <span className="text-sm text-gray-500 dark:text-gray-400">{program.duration}</span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">
                  {program.description}
                </p>
                <div className="mb-4">
                  <h4 className="text-sm font-bold uppercase mb-2 text-gray-500 dark:text-gray-400">亮点</h4>
                  <div className="flex flex-wrap gap-2">
                    {program.highlights.map((highlight, index) => (
                      <span 
                        key={index} 
                        className={`text-xs px-2 py-1 rounded-full ${theme === 'dark' ? 'bg-gray-700' : 'bg-purple-100'} text-purple-600 dark:text-purple-400`}
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
                <Link 
                  to="#"
                  className="inline-flex items-center justify-center bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white font-medium py-2 px-6 rounded-full shadow-md hover:shadow-lg transition-all duration-300 w-full"
                >
                  预订此节目
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* 节目特色 */}
      <motion.section 
        className={`rounded-2xl p-8 mb-16 ${theme === 'dark' ? 'bg-gray-800' : 'bg-purple-50'}`}
        variants={itemVariants}
      >
        <h2 className="text-2xl font-bold mb-8 text-center">我们的节目特色</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div 
            className="text-center p-6"
            variants={itemVariants}
            whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
          >
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white dark:bg-gray-700 flex items-center justify-center shadow-md">
              <i className="fas fa-creative-commons text-2xl text-purple-600 dark:text-purple-400"></i>
            </div>
            <h3 className="text-xl font-bold mb-2">创新体验</h3>
            <p className="text-gray-600 dark:text-gray-300">
              我们不断创新，将电影、餐饮和互动体验完美结合，为您带来独特的体验。
            </p>
          </motion.div>
          
          <motion.div 
            className="text-center p-6"
            variants={itemVariants}
            whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
          >
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white dark:bg-gray-700 flex items-center justify-center shadow-md">
              <i className="fas fa-star text-2xl text-purple-600 dark:text-purple-400"></i>
            </div>
            <h3 className="text-xl font-bold mb-2">高品质服务</h3>
            <p className="text-gray-600 dark:text-gray-300">
              我们注重每一个细节，从食材选择到服务流程，都精益求精，确保为您提供高品质的体验。
            </p>
          </motion.div>
          
          <motion.div 
            className="text-center p-6"
            variants={itemVariants}
            whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
          >
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white dark:bg-gray-700 flex items-center justify-center shadow-md">
              <i className="fas fa-users text-2xl text-purple-600 dark:text-purple-400"></i>
            </div>
            <h3 className="text-xl font-bold mb-2">适合不同人群</h3>
            <p className="text-gray-600 dark:text-gray-300">
              我们的节目适合情侣约会、朋友聚会、家庭活动等各种场合，满足不同人群的需求。
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* 即将上映的电影节目 */}
      <motion.section 
        className="mb-16"
        variants={itemVariants}
      >
        <h2 className="text-2xl font-bold mb-8 text-center">即将上映的电影节目</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div 
            className={`rounded-xl overflow-hidden shadow-md ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}
            variants={itemVariants}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <div className="p-6">
              <div className="text-sm font-bold text-purple-600 dark:text-purple-400 mb-2">5月15日上映</div>
              <h3 className="text-lg font-bold mb-3">《爱在东京》主题晚餐</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                观看经典爱情电影《爱在东京》，品尝以东京为灵感的创意料理，体验浪漫的东京之夜。
              </p>
              <Link 
                to="#"
                className="text-sm text-purple-600 dark:text-purple-400 font-medium hover:underline"
              >
                预订座位
              </Link>
            </div>
          </motion.div>
          
          <motion.div 
            className={`rounded-xl overflow-hidden shadow-md ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}
            variants={itemVariants}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <div className="p-6">
              <div className="text-sm font-bold text-purple-600 dark:text-purple-400 mb-2">6月1日上映</div>
              <h3 className="text-lg font-bold mb-3">科幻电影马拉松</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                连续观看三部经典科幻电影，期间提供无限量小食和饮料，与其他科幻爱好者一起度过精彩的一天。
              </p>
              <Link 
                to="#"
                className="text-sm text-purple-600 dark:text-purple-400 font-medium hover:underline"
              >
                预订座位
              </Link>
            </div>
          </motion.div>
          
          <motion.div 
            className={`rounded-xl overflow-hidden shadow-md ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}
            variants={itemVariants}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <div className="p-6">
              <div className="text-sm font-bold text-purple-600 dark:text-purple-400 mb-2">6月15日上映</div>
              <h3 className="text-lg font-bold mb-3">《教父》主题晚餐</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                观看经典电影《教父》，品尝意大利风味的美食套餐，感受黑手党的传奇故事。
              </p>
              <Link 
                to="#"
                className="text-sm text-purple-600 dark:text-purple-400 font-medium hover:underline"
              >
                预订座位
              </Link>
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
            <h3 className="text-lg font-bold mb-2">如何预订你们的节目？</h3>
            <p className="text-gray-600 dark:text-gray-300">
              您可以通过我们的官方网站、微信公众号或者电话进行预订。建议提前3-7天预订，以确保您能获得理想的位置。
            </p>
          </motion.div>
          
          <motion.div 
            className={`p-6 rounded-xl shadow-sm ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}
            variants={itemVariants}
          >
            <h3 className="text-lg font-bold mb-2">是否可以为特殊场合（如生日、纪念日）定制节目？</h3>
            <p className="text-gray-600 dark:text-gray-300">
              是的，我们提供特殊场合的定制服务。您可以在预订时注明您的需求，我们的团队将为您打造独特的体验。定制服务可能会产生额外费用。
            </p>
          </motion.div>
          
          <motion.div 
            className={`p-6 rounded-xl shadow-sm ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}
            variants={itemVariants}
          >
            <h3 className="text-lg font-bold mb-2">如果我有特殊的饮食需求（如素食、过敏等），是否可以提前告知？</h3>
            <p className="text-gray-600 dark:text-gray-300">
              是的，我们非常乐意满足您的特殊饮食需求。请在预订时或至少提前24小时告知我们您的需求，我们的厨师团队将为您准备适合的餐点。
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* 立即预订 */}
      <motion.section 
        className="text-center max-w-3xl mx-auto"
        variants={itemVariants}
      >
        <h2 className="text-2xl font-bold mb-4">准备好体验我们的电影主题节目了吗？</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          立即预订我们的节目，开启一段难忘的电影美食之旅。我们期待为您服务！
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

export default Programs;