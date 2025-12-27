import React, { useContext, useState } from 'react';
import { motion } from 'framer-motion';
import { LanguageContext } from '@/contexts/languageContext';
import { useTheme } from '@/hooks/useTheme';

// 定义行程日期类型
interface ItineraryDay {
  day: number;
  title: string;
  description: string;
  activities: string[];
  image: string;
}

const JapanTour: React.FC = () => {
  const { t } = useContext(LanguageContext);
  const { theme } = useTheme();
  const [activeDay, setActiveDay] = useState(1);
  
  // 行程数据
  const itineraryDays: ItineraryDay[] = [
    {
      day: 1,
      title: "东京抵达",
      description: "抵达东京成田国际机场，专车接机后前往酒店办理入住手续。晚上在酒店附近的特色餐厅享用欢迎晚餐。",
      activities: ["机场接机", "酒店入住", "欢迎晚餐"],
      image: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Tokyo%20airport%20arrival%2C%20modern%20terminal%2C%20international%20travelers%2C%20bright%20lighting&sign=9103224cc2ce083e35913492051f7275"
    },
    {
      day: 2,
      title: "东京电影美食之旅",
      description: "上午游览东京著名景点，下午体验FlickNibble House东京店的电影主题午餐，晚上在东京塔欣赏夜景并享用浪漫晚餐。",
      activities: ["东京景点游览", "电影主题午餐", "东京塔夜景", "浪漫晚餐"],
      image: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Tokyo%20Tower%20night%20view%2C%20romantic%20atmosphere%2C%20couple%20watching%20sunset%2C%20city%20lights&sign=60b137ad73c4abb7b9a440ecff3bc3e4"
    },
    {
      day: 3,
      title: "东京-京都",
      description: "早上乘坐新干线前往京都，下午游览金阁寺和岚山竹林，晚上在传统日式旅馆享用怀石料理并体验温泉。",
      activities: ["新干线体验", "金阁寺游览", "岚山竹林漫步", "温泉体验", "怀石料理晚餐"],
      image: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Kyoto%20Bamboo%20Forest%2C%20serene%20atmosphere%2C%20tall%20bamboo%20trees%2C%20sunlight%20filtering%20through&sign=296548ba9602f75472b65a04f1e702f3"
    },
    {
      day: 4,
      title: "京都传统体验",
      description: "全天体验京都传统文化，包括和服租赁、茶道体验、艺伎表演观赏，晚上在传统居酒屋享用美食。",
      activities: ["和服租赁体验", "茶道体验", "艺伎表演观赏", "传统居酒屋晚餐"],
      image: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Japanese%20tea%20ceremony%2C%20traditional%20setting%2C%20tea%20master%20preparing%20tea%2C%20serene%20atmosphere&sign=b2255cb310916b2874bb2b22ab2663df"
    },
    {
      day: 5,
      title: "京都-大阪",
      description: "早上前往大阪，下午游览大阪城公园，晚上在道顿堀美食街自由活动，品尝各种地道美食。",
      activities: ["大阪城公园游览", "道顿堀美食街", "自由活动"],
      image: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Osaka%20Dotonbori%20night%2C%20vibrant%20atmosphere%2C%20colorful%20signs%2C%20street%20food%2C%20people%20enjoying&sign=189ea242aea1d704949609c788097aa7"
    },
    {
      day: 6,
      title: "大阪环球影城",
      description: "全天畅游大阪环球影城，体验各种精彩的游乐设施和表演，晚上观看夜间巡游。",
      activities: ["环球影城一日游", "各种游乐设施体验", "夜间巡游"],
      image: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Universal%20Studios%20Osaka%2C%20theme%20park%20attractions%2C%20exciting%20rides%2C%20people%20having%20fun&sign=0cc6e450a5a3b8b6344029665edf3d7e"
    },
    {
      day: 7,
      title: "大阪-广岛",
      description: "早上乘坐新干线前往广岛，下午游览和平纪念公园和原子弹爆炸遗址，晚上在酒店休息。",
      activities: ["新干线体验", "和平纪念公园游览", "原子弹爆炸遗址参观"],
      image: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Hiroshima%20Peace%20Memorial%20Park%2C%20serene%20atmosphere%2C%20monument%2C%20peaceful%20garden&sign=fc11901476fc5aa75f329b4816ed1e33"
    },
    {
      day: 8,
      title: "广岛-宫岛",
      description: "早上前往宫岛，游览严岛神社和弥山，下午返回广岛，晚上在当地特色餐厅享用晚餐。",
      activities: ["宫岛一日游", "严岛神社游览", "弥山登山", "特色晚餐"],
      image: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Miyajima%20Itsukushima%20Shrine%2C%20floating%20torii%20gate%2C%20high%20tide%2C%20scenic%20view&sign=15dd810cf33be30864bc3982f950990e"
    },
    {
      day: 9,
      title: "广岛-东京",
      description: "早上乘坐新干线返回东京，下午自由购物，晚上参加告别晚宴，观看传统日本表演。",
      activities: ["新干线体验", "自由购物", "告别晚宴", "传统表演观赏"],
      image: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Tokyo%20shopping%20district%2C%20modern%20buildings%2C%20busy%20streets%2C%20people%20shopping&sign=253131ae0e0aece9c61614a1be96f0e5"
    },
    {
      day: 10,
      title: "返程",
      description: "早上办理酒店退房手续，专车送往机场，结束愉快的日本之旅。",
      activities: ["酒店退房", "机场送别"],
      image: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Airport%20departure%2C%20goodbye%20moment%2C%20emotional%20farewell%2C%20travel%20memories&sign=c864b29298be2b78422deacba08d2471"
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
  
  // 获取当前选中的行程日
  const currentDay = itineraryDays.find(day => day.day === activeDay) || itineraryDays[0];
  
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
        <h1 className="text-4xl font-bold mb-4">{t('japanTour')}</h1>
        <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-500 mx-auto"></div>
        <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          {t('tourDescription')}
        </p>
      </motion.div>

      {/* 行程亮点 */}
      <motion.section 
        className={`rounded-2xl p-8 mb-16 ${theme === 'dark' ? 'bg-gray-800' : 'bg-purple-50'}`}
        variants={itemVariants}
      >
        <h2 className="text-2xl font-bold mb-8 text-center">{t('itineraryHighlights')}</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div 
            className="text-center p-6"
            variants={itemVariants}
            whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
          >
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white dark:bg-gray-700 flex items-center justify-center shadow-md">
              <i className="fas fa-utensils text-2xl text-purple-600 dark:text-purple-400"></i>
            </div>
            <h3 className="text-xl font-bold mb-2">{t('culinaryExperience')}</h3>
            <p className="text-gray-600 dark:text-gray-300">
              {t('culinaryExperienceDesc')}
            </p>
          </motion.div>
          
          <motion.div 
            className="text-center p-6"
            variants={itemVariants}
            whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
          >
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white dark:bg-gray-700 flex items-center justify-center shadow-md">
              <i className="fas fa-film text-2xl text-purple-600 dark:text-purple-400"></i>
            </div>
            <h3 className="text-xl font-bold mb-2">{t('movieThemeActivities')}</h3>
            <p className="text-gray-600 dark:text-gray-300">
              {t('movieThemeActivitiesDesc')}
            </p>
          </motion.div>
          
          <motion.div 
            className="text-center p-6"
            variants={itemVariants}
            whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
          >
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white dark:bg-gray-700 flex items-center justify-center shadow-md">
              <i className="fas fa-landmark text-2xl text-purple-600 dark:text-purple-400"></i>
            </div>
            <h3 className="text-xl font-bold mb-2">{t('culturalExperience')}</h3>
            <p className="text-gray-600 dark:text-gray-300">
              {t('culturalExperienceDesc')}
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* 行程安排 */}
      <motion.section 
        className="mb-16"
        variants={itemVariants}
      >
        <h2 className="text-2xl font-bold mb-8 text-center">{t('detailedItinerary')}</h2>
        
        {/* 行程日期选择器 */}
        <div className="flex overflow-x-auto pb-4 mb-8 scrollbar-hide">
          <div className="flex space-x-2 mx-auto">
            {itineraryDays.map((day) => (
              <button
                key={day.day}
                onClick={() => setActiveDay(day.day)}
                className={`px-4 py-2 rounded-full whitespace-nowrap transition-all duration-300 ${
                  activeDay === day.day
                    ? 'bg-purple-600 text-white shadow-md'
                    : `${theme === 'dark' ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-100'} shadow-sm`
                }`}
              >
                第{day.day}天
              </button>
            ))}
          </div>
        </div>
        
        {/* 行程详情 */}
        <div className={`rounded-xl overflow-hidden shadow-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
          <div className="relative h-80">
            <img 
              src={currentDay.image} 
              alt={`第${currentDay.day}天: ${currentDay.title}`} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <h3 className="text-2xl font-bold text-white mb-1">{currentDay.day}{t('day')}: {currentDay.title}</h3>
            </div>
          </div>
          <div className="p-8">
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              {currentDay.description}
            </p>
            <h4 className="text-lg font-bold mb-3">当日活动:</h4>
            <ul className="space-y-2">
              {currentDay.activities.map((activity, index) => (
                <li key={index} className="flex items-start">
                  <i className="fas fa-check-circle text-green-500 mt-1 mr-3"></i>
                  <span className="text-gray-600 dark:text-gray-300">{activity}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.section>

      {/* 套餐包含内容 */}
      <motion.section 
        className="mb-16"
        variants={itemVariants}
      >
        <h2 className="text-2xl font-bold mb-8 text-center">套餐包含内容</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <motion.div 
            className={`p-6 rounded-xl shadow-md ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}
            variants={itemVariants}
          >
            <h3 className="text-lg font-bold mb-4 flex items-center">
              <i className="fas fa-check-circle text-green-500 mr-2"></i>
              已包含
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <i className="fas fa-check text-green-500 mt-1 mr-3"></i>
                <span className="text-gray-600 dark:text-gray-300">往返国际机票（经济舱）</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-check text-green-500 mt-1 mr-3"></i>
                <span className="text-gray-600 dark:text-gray-300">全程4-5星级酒店住宿</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-check text-green-500 mt-1 mr-3"></i>
                <span className="text-gray-600 dark:text-gray-300">酒店早餐</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-check text-green-500 mt-1 mr-3"></i>
                <span className="text-gray-600 dark:text-gray-300">5次特色电影主题晚餐</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-check text-green-500 mt-1 mr-3"></i>
                <span className="text-gray-600 dark:text-gray-300">全程旅游巴士接送</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-check text-green-500 mt-1 mr-3"></i>
                <span className="text-gray-600 dark:text-gray-300">行程中所列景点门票</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-check text-green-500 mt-1 mr-3"></i>
                <span className="text-gray-600 dark:text-gray-300">专业导游服务</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-check text-green-500 mt-1 mr-3"></i>
                <span className="text-gray-600 dark:text-gray-300">日本旅游签证费用</span>
              </li>
            </ul>
          </motion.div>
          
          <motion.div 
            className={`p-6 rounded-xl shadow-md ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}
            variants={itemVariants}
          >
            <h3 className="text-lg font-bold mb-4 flex items-center">
              <i className="fas fa-times-circle text-red-500 mr-2"></i>
              不包含
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <i className="fas fa-times text-red-500 mt-1 mr-3"></i>
                <span className="text-gray-600 dark:text-gray-300">个人消费（如购物、额外餐饮等）</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-times text-red-500 mt-1 mr-3"></i>
                <span className="text-gray-600 dark:text-gray-300">行程中未提及的其他费用</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-times text-red-500 mt-1 mr-3"></i>
                <span className="text-gray-600 dark:text-gray-300">旅游保险（建议购买）</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-times text-red-500 mt-1 mr-3"></i>
                <span className="text-gray-600 dark:text-gray-300">护照办理费用</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-times text-red-500 mt-1 mr-3"></i>
                <span className="text-gray-600 dark:text-gray-300">因天气、航班延误等不可抗力因素产生的额外费用</span>
              </li>
            </ul>
            
            <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-bold mb-4">价格</h3>
              <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">¥19,999/人</div>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">（双人同行可享受9折优惠）</p>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* 预订须知 */}
      <motion.section 
        className={`rounded-2xl p-8 mb-16 ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} shadow-lg max-w-4xl mx-auto`}
        variants={itemVariants}
      >
        <h2 className="text-2xl font-bold mb-6">预订须知</h2>
        
        <div className="space-y-4 text-gray-600 dark:text-gray-300">
          <p><span className="font-bold">预订时间：</span>建议至少提前3个月预订，以确保您能获得理想的位置。</p>
          <p><span className="font-bold">取消政策：</span>出发前30天以上取消，退还80%费用；出发前15-29天取消，退还50%费用；出发前14天内取消，不予退款。</p>
          <p><span className="font-bold">签证信息：</span>请确保您的护照有效期在6个月以上，并提供真实准确的个人信息用于签证申请。</p>
          <p><span className="font-bold">支付方式：</span>支持信用卡、支付宝、微信支付等多种支付方式。预订时需支付30%定金，出发前1个月支付剩余70%尾款。</p>
          <p><span className="font-bold">特别说明：</span>我们可能会根据实际情况对行程进行微调，但不会减少行程内容。如遇不可抗力因素导致行程无法进行，我们将尽力为您安排替代方案。</p>
        </div>
      </motion.section>

      {/* 立即预订 */}
      <motion.section 
        className="text-center max-w-3xl mx-auto"
        variants={itemVariants}
      >
        <h2 className="text-2xl font-bold mb-4">准备好开启您的日本浪漫之旅了吗？</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          限量名额，先到先得！立即预订"10天5城日本夏日限量游"，开启一段难忘的光影与味蕾之旅。
        </p>
        <a 
          href="#" 
          className="inline-flex items-center justify-center bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white font-medium py-3 px-8 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
        >
          {t('bookNow')}
          <i className="fas fa-arrow-right ml-2"></i>
        </a>
      </motion.section>
    </motion.div>
  );
};

export default JapanTour;