import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { LanguageContext } from '@/contexts/languageContext';
import { useTheme } from '@/hooks/useTheme';

// 定义社交媒体平台类型
interface SocialMediaPlatform {
  id: number;
  name: string;
  url: string;
  description: string;
  icon: string;
  followers: string;
  color: string;
}

const SocialMedia: React.FC = () => {
  const { t } = useContext(LanguageContext);
  const { theme } = useTheme();
  
  // 社交媒体平台数据
  const socialMediaPlatforms: SocialMediaPlatform[] = [
    {
      id: 1,
      name: "微信公众号",
      url: "#",
      description: "关注我们的微信公众号，获取最新的活动和优惠信息，还可以直接在线预订服务。",
      icon: "fab fa-weixin",
      followers: "100,000+",
      color: "#07C160"
    },
    {
      id: 2,
      name: "微博",
      url: "#",
      description: "关注我们的微博，参与互动话题讨论，了解更多幕后故事和精彩瞬间。",
      icon: "fab fa-weibo",
      followers: "80,000+",
      color: "#E6162D"
    },
    {
      id: 3,
      name: "抖音",
      url: "#",
      description: "关注我们的抖音账号，观看精彩短视频，了解更多电影和美食的故事。",
      icon: "fab fa-tiktok",
      followers: "150,000+",
      color: "#000000"
    },
    {
      id: 4,
      name: "小红书",
      url: "#",
      description: "在小红书上关注我们，查看真实用户的体验分享和评价，获取更多实用攻略。",
      icon: "fas fa-book-open",
      followers: "60,000+",
      color: "#FF2442"
    },
    {
      id: 5,
      name: "Instagram",
      url: "#",
      description: "关注我们的Instagram账号，欣赏精美的图片，了解我们的国际化发展。",
      icon: "fab fa-instagram",
      followers: "30,000+",
      color: "#C13584"
    },
    {
      id: 6,
      name: "Facebook",
      url: "#",
      description: "关注我们的Facebook页面，获取国际最新资讯，与全球粉丝互动交流。",
      icon: "fab fa-facebook-f",
      followers: "20,000+",
      color: "#4267B2"
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
        <h1 className="text-4xl font-bold mb-4">{t('socialMedia')}</h1>
        <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-500 mx-auto"></div>
        <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          关注我们的社交媒体账号，获取最新的活动和优惠信息，参与互动话题，了解更多幕后故事和精彩瞬间。
        </p>
      </motion.div>

      {/* 社交媒体平台展示 */}
      <motion.section 
        className="mb-16"
        variants={itemVariants}
      >
        <h2 className="text-2xl font-bold mb-8 text-center">关注我们</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {socialMediaPlatforms.map((platform) => (
            <motion.a 
              key={platform.id}
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`rounded-xl overflow-hidden shadow-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} flex flex-col group`}
              variants={itemVariants}
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
              style={{ 
                '--platform-color': platform.color 
              } as React.CSSProperties}
            >
              <div className="p-6 flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <div className="w-16 h-16 rounded-full bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center group-hover:bg-opacity-90 transition-all duration-300" 
                       style={{ backgroundColor: `${platform.color}20` }}>
                    <i className={`${platform.icon} text-2xl transition-all duration-300`} 
                       style={{ color: platform.color }}></i>
                  </div>
                  <div className={`px-3 py-1 rounded-full text-xs font-medium transition-all duration-300`}
                       style={{ backgroundColor: `${platform.color}20`, color: platform.color }}>
                    {platform.followers} 粉丝
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-opacity-90 transition-all duration-300"
                    style={{ color: platform.color }}>
                  {platform.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 flex-grow">
                  {platform.description}
                </p>
                <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700 flex justify-end">
                  <span className="text-sm font-medium flex items-center group-hover:opacity-90 transition-all duration-300"
                        style={{ color: platform.color }}>
                    立即关注
                    <i className="fas fa-arrow-right ml-2 transform group-hover:translate-x-1 transition-transform duration-300"></i>
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </motion.section>

      {/* 社交媒体活动 */}
      <motion.section 
        className={`rounded-2xl p-8 mb-16 ${theme === 'dark' ? 'bg-gray-800' : 'bg-purple-50'}`}
        variants={itemVariants}
      >
        <h2 className="text-2xl font-bold mb-8 text-center">最新社交媒体活动</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <motion.div 
            className="bg-white dark:bg-gray-700 rounded-xl overflow-hidden shadow-lg"
            variants={itemVariants}
          >
            <div className="p-6">
              <div className="flex items-center mb-4">
                <i className="fas fa-hashtag text-purple-600 dark:text-purple-400 mr-2"></i>
                <h3 className="text-xl font-bold">#FlickNibble夏日回忆</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                分享您在FlickNibble House的夏日体验，带话题#FlickNibble夏日回忆发布至社交媒体，有机会获得免费电影票和美食券！
              </p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  <i className="far fa-calendar-alt mr-2"></i>
                  2025年6月1日-9月30日
                </span>
                <a 
                  href="#" 
                  className="text-sm text-purple-600 dark:text-purple-400 font-medium hover:underline flex items-center"
                >
                  参与活动
                  <i className="fas fa-arrow-right ml-2"></i>
                </a>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="bg-white dark:bg-gray-700 rounded-xl overflow-hidden shadow-lg"
            variants={itemVariants}
          >
            <div className="p-6">
              <div className="flex items-center mb-4">
                <i className="fas fa-hashtag text-purple-600 dark:text-purple-400 mr-2"></i>
                <h3 className="text-xl font-bold">#我的电影美食搭配</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                分享您最爱的电影和美食搭配，带话题#我的电影美食搭配发布至社交媒体，优秀作品将有机会在我们的线下活动中展示！
              </p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  <i className="far fa-calendar-alt mr-2"></i>
                  2025年7月1日-8月31日
                </span>
                <a 
                  href="#" 
                  className="text-sm text-purple-600 dark:text-purple-400 font-medium hover:underline flex items-center"
                >
                  参与活动
                  <i className="fas fa-arrow-right ml-2"></i>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* 社交媒体反馈 */}
      <motion.section 
        className="mb-16"
        variants={itemVariants}
      >
        <h2 className="text-2xl font-bold mb-8 text-center">粉丝分享</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div 
            className={`rounded-xl overflow-hidden shadow-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}
            variants={itemVariants}
          >
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
                  <img 
                    src="https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=happy%20young%20woman%20smiling%2C%20portrait&sign=8ea304e8b9159a9b98292508032091e9" 
                    alt="User" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="font-medium">@小确幸</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">微博</div>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                "昨天在FlickNibble House体验了电影主题晚餐，真的太棒了！美食美味，环境舒适，电影也很精彩。强烈推荐给所有电影和美食爱好者！#FlickNibble夏日回忆 #电影美食体验"
              </p>
              <div className="rounded-lg overflow-hidden">
                <img 
                  src="https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_4_3&prompt=Movie%20dinner%20experience%2C%20food%20and%20movie%20screen%2C%20cozy%20atmosphere%2C%20high%20quality%20food&sign=9c35721a868139f2c0ce56dd352b35fa" 
                  alt="Social Media Post" 
                  className="w-full h-auto"
                />
              </div>
              <div className="flex justify-between items-center mt-4">
                <div className="flex space-x-4">
                  <span className="text-sm text-gray-500 dark:text-gray-400 flex items-center">
                    <i className="far fa-heart mr-1"></i> 2,345
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400 flex items-center">
                    <i className="far fa-comment mr-1"></i> 128
                  </span>
                </div>
                <span className="text-xs text-gray-500 dark:text-gray-400">2天前</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className={`rounded-xl overflow-hidden shadow-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}
            variants={itemVariants}
          >
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
                  <img 
                    src="https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=happy%20young%20man%20smiling%2C%20portrait&sign=aa59d5ccb5b6eefee0738cd887da327a" 
                    alt="User" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="font-medium">@电影迷</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">小红书</div>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                "参加了FlickNibble House的日本旅游套餐，真的是一次难忘的体验！行程安排合理，住宿舒适，美食丰富，特别是电影主题活动，让整个旅程更加难忘。强烈推荐给所有情侣！#日本旅游 #FlickNibble体验"
              </p>
              <div className="grid grid-cols-2 gap-2 rounded-lg overflow-hidden">
                <img 
                  src="https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=Japan%20tour%20travel%20photo%2C%20couple%20smiling%20in%20front%20of%20Tokyo%20Tower&sign=cd270cc4dee3175b7ab676dbc7d9a80b" 
                  alt="Social Media Post" 
                  className="w-full h-32 object-cover"
                />
                <img 
                  src="https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=Japanese%20traditional%20dinner%2C%20sushi%20and%20traditional%20dishes%2C%20high%20quality%20food&sign=8fa43ae40ad2d2fbcaf317722f3fc3f2" 
                  alt="Social Media Post" 
                  className="w-full h-32 object-cover"
                />
              </div>
              <div className="flex justify-between items-center mt-4">
                <div className="flex space-x-4">
                  <span className="text-sm text-gray-500 dark:text-gray-400 flex items-center">
                    <i className="far fa-heart mr-1"></i> 1,872
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400 flex items-center">
                    <i className="far fa-comment mr-1"></i> 96
                  </span>
                </div>
                <span className="text-xs text-gray-500 dark:text-gray-400">5天前</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className={`rounded-xl overflow-hidden shadow-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}
            variants={itemVariants}
          >
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
                  <img 
                    src="https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=happy%20asian%20couple%20smiling%2C%20portrait%20together&sign=7b91bac86523b1c3944cfbc89f6ee8de" 
                    alt="User" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="font-medium">@情侣日常</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">抖音</div>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                "在FlickNibble House度过了一个完美的周年纪念日！环境浪漫，美食美味，电影也很感人。感谢工作人员的贴心安排和祝福！#周年纪念 #FlickNibble浪漫体验"
              </p>
              <div className="rounded-lg overflow-hidden">
                <img 
                  src="https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_4_3&prompt=Romantic%20dinner%20setting%2C%20couple%20celebrating%20anniversary%2C%20candle%20light%2C%20romantic%20atmosphere&sign=d6095fcdcf77df3d5e2c8b39bbdd203f" 
                  alt="Social Media Post" 
                  className="w-full h-auto"
                />
              </div>
              <div className="flex justify-between items-center mt-4">
                <div className="flex space-x-4">
                  <span className="text-sm text-gray-500 dark:text-gray-400 flex items-center">
                    <i className="far fa-heart mr-1"></i> 5,621
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400 flex items-center">
                    <i className="far fa-comment mr-1"></i> 342
                  </span>
                </div>
                <span className="text-xs text-gray-500 dark:text-gray-400">1周前</span>
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
        <h2 className="text-2xl font-bold mb-4">加入我们的社交网络</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          无论您使用哪个社交平台，都可以找到我们的身影。关注我们，获取最新的活动信息、优惠内容和精彩故事。我们期待与您在社交媒体上互动！
        </p>
        <div className="flex justify-center space-x-4">
          <motion.a 
            href="#" 
            className="w-12 h-12 rounded-full bg-[#07C160] flex items-center justify-center text-white shadow-md hover:shadow-lg transition-all duration-300"
            whileHover={{ scale: 1.1, rotate: 5 }}
          >
            <i className="fab fa-weixin text-xl"></i>
          </motion.a>
          <motion.a 
            href="#" 
            className="w-12 h-12 rounded-full bg-[#E6162D] flex items-center justify-center text-white shadow-md hover:shadow-lg transition-all duration-300"
            whileHover={{ scale: 1.1, rotate: -5 }}
          >
            <i className="fab fa-weibo text-xl"></i>
          </motion.a>
          <motion.a 
            href="#" 
            className="w-12 h-12 rounded-full bg-[#000000] flex items-center justify-center text-white shadow-md hover:shadow-lg transition-all duration-300"
            whileHover={{ scale: 1.1, rotate: 5 }}
          >
            <i className="fab fa-tiktok text-xl"></i>
          </motion.a>
          <motion.a 
            href="#" 
            className="w-12 h-12 rounded-full bg-[#FF2442] flex items-center justify-center text-white shadow-md hover:shadow-lg transition-all duration-300"
            whileHover={{ scale: 1.1, rotate: -5 }}
          >
            <i className="fas fa-book-open text-xl"></i>
          </motion.a>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default SocialMedia;