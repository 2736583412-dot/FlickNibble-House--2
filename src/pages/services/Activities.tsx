import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { LanguageContext } from '@/contexts/languageContext';
import { useTheme } from '@/hooks/useTheme';

// 定义活动类型
interface Activity {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  image: string;
  price: string;
  registrationLink: string;
}

const Activities: React.FC = () => {
  const { t } = useContext(LanguageContext);
  const { theme } = useTheme();
  
  // 活动数据
  const upcomingActivities: Activity[] = [
    {
      id: 1,
      title: "电影首映礼 & 明星见面会",
      date: "2025年6月10日",
      time: "19:00-22:00",
      location: "上海环球金融中心",
      description: "参加热门电影的首映礼，与电影主创团队面对面交流，提前欣赏精彩电影，还可以获得限量纪念品。",
      image: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Movie%20premiere%20event%2C%20red%20carpet%2C%20celebrities%20and%20fans%2C%20bright%20lights%2C%20exciting%20atmosphere&sign=9aac611d787cae5fdcc553540634206e",
      price: "¥598/人",
      registrationLink: "#"
    },
    {
      id: 2,
      title: "电影主题美食节",
      date: "2025年6月20日-6月22日",
      time: "11:00-20:00",
      location: "北京朝阳公园",
      description: "为期三天的电影主题美食节，品尝来自世界各地的电影主题美食，参与互动游戏，观看露天电影。",
      image: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Food%20festival%20with%20movie%20theme%2C%20various%20food%20stalls%2C%20people%20enjoying%20food%2C%20outdoor%20cinema%2C%20vibrant%20atmosphere&sign=0a7932ab42e08bb4eaec37f04410736d",
      price: "¥198/人（单日票）",
      registrationLink: "#"
    },
    {
      id: 3,
      title: "电影配乐音乐会",
      date: "2025年7月5日",
      time: "19:30-21:30",
      location: "广州大剧院",
      description: "由知名交响乐团演奏经典电影配乐，配合电影片段播放，带给您沉浸式的音乐体验。",
      image: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Orchestra%20performing%20movie%20soundtrack%2C%20concert%20hall%2C%20musicians%20playing%20instruments%2C%20audience%20applauding&sign=3267b7c2d233b2245fd87a7e00f6e243",
      price: "¥398/人起",
      registrationLink: "#"
    }
  ];
  
  const pastActivities: Activity[] = [
    {
      id: 4,
      title: "奥斯卡获奖电影回顾展",
      date: "2025年3月1日-3月15日",
      time: "14:00-21:00",
      location: "上海FlickNibble House旗舰店",
      description: "为期两周的奥斯卡获奖电影回顾展，放映历届奥斯卡最佳影片，期间提供主题美食套餐。",
      image: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Movie%20retrospective%20exhibition%2C%20movie%20posters%20display%2C%20people%20watching%20movies%2C%20cozy%20atmosphere&sign=ae7d2378240773baf07897933184a1d7",
      price: "¥128/人（单场）",
      registrationLink: "#"
    },
    {
      id: 5,
      title: "情人节特别活动：爱情电影马拉松",
      date: "2025年2月14日",
      time: "10:00-22:00",
      location: "北京FlickNibble House分店",
      description: "情人节特别活动，连续观看多部经典爱情电影，提供情侣套餐和浪漫礼物，度过难忘的情人节。",
      image: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Valentine%27s%20Day%20movie%20marathon%2C%20couples%20watching%20movies%2C%20romantic%20decorations%2C%20heart%20shaped%20food&sign=20df177fdd818497186c95ceb8610294",
      price: "¥398/双人",
      registrationLink: "#"
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
        <h1 className="text-4xl font-bold mb-4">{t('activities')}</h1>
        <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-500 mx-auto"></div>
        <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          我们定期举办各种电影主题活动，包括电影首映礼、明星见面会、电影讨论会、电影主题美食节等。加入我们的活动，与其他电影爱好者一起分享您的热情和体验。
        </p>
      </motion.div>

      {/* 即将举行的活动 */}
      <motion.section 
        className="mb-16"
        variants={itemVariants}
      >
        <h2 className="text-2xl font-bold mb-8 text-center">即将举行的活动</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {upcomingActivities.map((activity) => (
            <motion.div 
              key={activity.id}
              className={`rounded-xl overflow-hidden shadow-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} flex flex-col`}
              variants={itemVariants}
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
            >
              <div className="relative h-48">
                <img 
                  src={activity.image} 
                  alt={activity.title} 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {activity.price}
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-3">{activity.title}</h3>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <i className="far fa-calendar-alt mr-2"></i>
                    <span>{activity.date}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <i className="far fa-clock mr-2"></i>
                    <span>{activity.time}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <i className="fas fa-map-marker-alt mr-2"></i>
                    <span>{activity.location}</span>
                  </div>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">
                  {activity.description}
                </p>
                
                <a 
                  href={activity.registrationLink}
                  className="inline-flex items-center justify-center bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white font-medium py-2 px-6 rounded-full shadow-md hover:shadow-lg transition-all duration-300 w-full"
                >
                  立即报名
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* 活动特色 */}
      <motion.section 
        className={`rounded-2xl p-8 mb-16 ${theme === 'dark' ? 'bg-gray-800' : 'bg-purple-50'}`}
        variants={itemVariants}
      >
        <h2 className="text-2xl font-bold mb-8 text-center">活动特色</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div 
            className="text-center p-6"
            variants={itemVariants}
            whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
          >
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white dark:bg-gray-700 flex items-center justify-center shadow-md">
              <i className="fas fa-user-tie text-2xl text-purple-600 dark:text-purple-400"></i>
            </div>
            <h3 className="text-xl font-bold mb-2">与明星互动</h3>
            <p className="text-gray-600 dark:text-gray-300">
              参加我们的活动，有机会与电影明星、导演和其他行业专业人士面对面交流。
            </p>
          </motion.div>
          
          <motion.div 
            className="text-center p-6"
            variants={itemVariants}
            whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
          >
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white dark:bg-gray-700 flex items-center justify-center shadow-md">
              <i className="fas fa-utensils text-2xl text-purple-600 dark:text-purple-400"></i>
            </div>
            <h3 className="text-xl font-bold mb-2">美食体验</h3>
            <p className="text-gray-600 dark:text-gray-300">
              我们的活动通常包括特色美食体验，让您在享受电影文化的同时，也能满足您的味蕾。
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
            <h3 className="text-xl font-bold mb-2">结交同好</h3>
            <p className="text-gray-600 dark:text-gray-300">
              参加我们的活动，您可以结识其他电影爱好者，分享您的观点和体验，拓展您的社交圈子。
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* 过往活动回顾 */}
      <motion.section 
        className="mb-16"
        variants={itemVariants}
      >
        <h2 className="text-2xl font-bold mb-8 text-center">过往活动回顾</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {pastActivities.map((activity) => (
            <motion.div 
              key={activity.id}
              className={`rounded-xl overflow-hidden shadow-md ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} flex`}
              variants={itemVariants}
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
            >
              <div className="w-1/3">
                <img 
                  src={activity.image} 
                  alt={activity.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 w-2/3">
                <h3 className="text-xl font-bold mb-2">{activity.title}</h3>
                
                <div className="space-y-1 mb-3 text-sm text-gray-500 dark:text-gray-400">
                  <div className="flex items-center">
                    <i className="far fa-calendar-alt mr-2"></i>
                    <span>{activity.date}</span>
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-map-marker-alt mr-2"></i>
                    <span>{activity.location}</span>
                  </div>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                  {activity.description}
                </p>
                
                <a 
                  href="#"
                  className="text-sm text-purple-600 dark:text-purple-400 font-medium hover:underline"
                >
                  查看活动回顾
                </a>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <button
            className={`inline-flex items-center justify-center border-2 ${theme === 'dark' ? 'border-gray-600 hover:border-gray-400' : 'border-gray-300 hover:border-gray-600'} font-medium py-2 px-6 rounded-full transition-all duration-300`}
          >
            查看更多过往活动
            <i className="fas fa-chevron-down ml-2"></i>
          </button>
        </div>
      </motion.section>

      {/* 如何参与 */}
      <motion.section 
        className="mb-16 max-w-3xl mx-auto"
        variants={itemVariants}
      >
        <h2 className="text-2xl font-bold mb-8 text-center">如何参与我们的活动？</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <motion.div 
            className={`p-6 rounded-xl shadow-md ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}
            variants={itemVariants}
          >
            <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center">
              <span className="text-xl font-bold text-purple-600 dark:text-purple-400">1</span>
            </div>
            <h3 className="text-lg font-bold mb-2">浏览活动</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              在我们的网站或微信公众号上浏览即将举行的活动，选择您感兴趣的活动。
            </p>
          </motion.div>
          
          <motion.div 
            className={`p-6 rounded-xl shadow-md ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}
            variants={itemVariants}
          >
            <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center">
              <span className="text-xl font-bold text-purple-600 dark:text-purple-400">2</span>
            </div>
            <h3 className="text-lg font-bold mb-2">在线报名</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              通过我们的在线报名系统，填写您的个人信息并支付费用，完成报名。
            </p>
          </motion.div>
          
          <motion.div 
            className={`p-6 rounded-xl shadow-md ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}
            variants={itemVariants}
          >
            <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center">
              <span className="text-xl font-bold text-purple-600 dark:text-purple-400">3</span>
            </div>
            <h3 className="text-lg font-bold mb-2">参加活动</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              收到报名确认后，按照活动时间和地点准时参加活动，享受精彩体验。
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* 订阅活动通知 */}
      <motion.section 
        className={`rounded-2xl p-8 mb-16 ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} shadow-lg text-center max-w-3xl mx-auto`}
        variants={itemVariants}
      >
        <h2 className="text-2xl font-bold mb-4">订阅活动通知</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          订阅我们的活动通知，及时了解最新的活动信息和优惠。
        </p>
        <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-2">
          <input
            type="email"
            placeholder="您的邮箱地址"
            className={`flex-grow px-4 py-2 rounded-lg ${theme === 'dark' ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'} border focus:outline-none focus:ring-2 focus:ring-purple-500`}
            required
          />
          <button
            type="submit"
            className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white font-medium py-2 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 whitespace-nowrap"
          >
            订阅
          </button>
        </form>
      </motion.section>

      {/* 立即参与 */}
      <motion.section 
        className="text-center max-w-3xl mx-auto"
        variants={itemVariants}
      >
        <h2 className="text-2xl font-bold mb-4">准备好参加我们的活动了吗？</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          立即查看我们即将举行的活动，选择您感兴趣的活动并报名参加。我们期待在活动中与您相见！
        </p>
        <Link 
          to="/contact/inquiry-form"
          className="inline-flex items-center justify-center bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white font-medium py-3 px-8 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
        >
          查看所有活动
          <i className="fas fa-arrow-right ml-2"></i>
        </Link>
      </motion.section>
    </motion.div>
  );
};

export default Activities;