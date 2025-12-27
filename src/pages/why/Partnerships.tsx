import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { LanguageContext } from '@/contexts/languageContext';
import { useTheme } from '@/hooks/useTheme';

// 定义合作伙伴类型
interface Partner {
  id: number;
  name: string;
  description: string;
  logo: string;
  category: string;
}

const Partnerships: React.FC = () => {
  const { t } = useContext(LanguageContext);
  const { theme } = useTheme();
  
  // 合作伙伴数据
  const partners: Partner[] = [
    {
      id: 1,
      name: "星光电影公司",
      description: "中国领先的电影制作和发行公司，与我们合作提供最新和经典电影资源。",
      logo: "https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=Movie%20production%20company%20logo%2C%20modern%20design%2C%20professional%20look&sign=ca8caff9de3010e9d28745f944ee3152",
      category: "电影"
    },
    {
      id: 2,
      name: "环球影城",
      description: "世界知名的主题公园运营商，与我们合作推出电影主题活动和套餐。",
      logo: "https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=Theme%20park%20logo%2C%20entertainment%20industry%2C%20colorful%20design&sign=8ee1f1bd55f057608dc237dc57679410",
      category: "娱乐"
    },
    {
      id: 3,
      name: "悦榕庄酒店",
      description: "豪华酒店品牌，为我们的日本旅游套餐提供高品质的住宿服务。",
      logo: "https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=Luxury%20hotel%20logo%2C%20elegant%20design%2C%20premium%20look&sign=230ec3490acc62179e1c1b91a82e7000",
      category: "酒店"
    },
    {
      id: 4,
      name: "青空有机农场",
      description: "专注于有机食材种植的农场，为我们提供新鲜、健康的食材。",
      logo: "https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=Organic%20farm%20logo%2C%20green%20design%2C%20sustainable%20agriculture&sign=c2fdec77f55b0cc46c8d289adfe5d383",
      category: "食材供应"
    },
    {
      id: 5,
      name: "樱花旅行社",
      description: "专业的日本旅行社，为我们的日本旅游套餐提供地接服务和行程安排。",
      logo: "https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=Travel%20agency%20logo%2C%20Japan%20theme%2C%20professional%20design&sign=b43eab153f57ca324995cd1e553d148d",
      category: "旅游"
    },
    {
      id: 6,
      name: "味之素食品",
      description: "知名的食品公司，与我们合作开发电影主题食品和饮料。",
      logo: "https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=Food%20company%20logo%2C%20culinary%20theme%2C%20appetizing%20design&sign=e9348c1d37c118a4d2ecf3c21fadbf73",
      category: "食品"
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
        <h1 className="text-4xl font-bold mb-4">{t('partnerships')}</h1>
        <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-500 mx-auto"></div>
        <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          在FlickNibble House，我们重视与各行业领先企业的合作。通过建立强大的合作伙伴网络，我们能够为顾客提供更多样化、更高品质的服务。
        </p>
      </motion.div>

      {/* 合作理念 */}
      <motion.section 
        className="mb-16"
        variants={itemVariants}
      >
        <h2 className="text-2xl font-bold mb-8 text-center">我们的合作理念</h2>
        
        <div className={`p-8 rounded-2xl shadow-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} max-w-4xl mx-auto`}>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            在FlickNibble House，我们相信合作是成功的关键。我们寻求与各行业的优秀企业建立长期、互利的合作关系，共同为顾客创造价值。我们的合作理念基于以下原则：
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start">
              <div className="w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                <i className="fas fa-handshake text-lg text-purple-600 dark:text-purple-400"></i>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2">互利共赢</h3>
                <p className="text-gray-600 dark:text-gray-300">我们寻求与合作伙伴建立互利共赢的关系，共同成长和发展。</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                <i className="fas fa-eye text-lg text-purple-600 dark:text-purple-400"></i>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2">共同愿景</h3>
                <p className="text-gray-600 dark:text-gray-300">我们与合作伙伴分享共同的愿景和价值观，致力于为顾客创造独特的体验。</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                <i className="fas fa-lightbulb text-lg text-purple-600 dark:text-purple-400"></i>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2">创新合作</h3>
                <p className="text-gray-600 dark:text-gray-300">我们鼓励与合作伙伴进行创新合作，共同开发新的产品和服务。</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                <i className="fas fa-users text-lg text-purple-600 dark:text-purple-400"></i>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2">开放沟通</h3>
                <p className="text-gray-600 dark:text-gray-300">我们保持与合作伙伴的开放沟通，及时分享信息和反馈。</p>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* 合作伙伴展示 */}
      <motion.section 
        className="mb-16"
        variants={itemVariants}
      >
        <h2 className="text-2xl font-bold mb-8 text-center">我们的合作伙伴</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {partners.map((partner) => (
            <motion.div 
              key={partner.id}
              className={`rounded-xl overflow-hidden shadow-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} flex flex-col`}
              variants={itemVariants}
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
            >
              <div className="p-6 flex flex-col items-center text-center">
                <div className="w-24 h-24 rounded-full bg-white dark:bg-gray-700 flex items-center justify-center mb-4 shadow-md overflow-hidden">
                  <img 
                    src={partner.logo} 
                    alt={`${partner.name} Logo`} 
                    className="w-20 h-20 object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold mb-1">{partner.name}</h3>
                <div className={`text-xs px-2 py-1 rounded-full mb-3 ${theme === 'dark' ? 'bg-gray-700' : 'bg-purple-100'} text-purple-600 dark:text-purple-400`}>
                  {partner.category}
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  {partner.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* 合作案例 */}
      <motion.section 
        className={`rounded-2xl p-8 mb-16 ${theme === 'dark' ? 'bg-gray-800' : 'bg-purple-50'}`}
        variants={itemVariants}
      >
        <h2 className="text-2xl font-bold mb-8 text-center">成功合作案例</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div 
            className="bg-white dark:bg-gray-700 rounded-xl overflow-hidden shadow-lg"
            variants={itemVariants}
          >
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3">日本旅游套餐合作</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                我们与樱花旅行社、悦榕庄酒店等合作伙伴共同推出了"10天5城日本夏日限量游"，将电影、美食和旅行完美结合，为顾客提供了独特的体验。这次合作取得了巨大的成功，吸引了大量顾客报名参加。
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs px-2 py-1 rounded-full bg-purple-100 dark:bg-purple-900/50 text-purple-600 dark:text-purple-400">樱花旅行社</span>
                <span className="text-xs px-2 py-1 rounded-full bg-purple-100 dark:bg-purple-900/50 text-purple-600 dark:text-purple-400">悦榕庄酒店</span>
                <span className="text-xs px-2 py-1 rounded-full bg-purple-100 dark:bg-purple-900/50 text-purple-600 dark:text-purple-400">星光电影公司</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="bg-white dark:bg-gray-700 rounded-xl overflow-hidden shadow-lg"
            variants={itemVariants}
          >
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3">电影主题美食节</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                我们与环球影城、味之素食品等合作伙伴共同举办了电影主题美食节，活动期间不仅放映了多部经典电影，还提供了各种电影主题美食，吸引了超过10,000名顾客参加，获得了广泛好评。
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs px-2 py-1 rounded-full bg-purple-100 dark:bg-purple-900/50 text-purple-600 dark:text-purple-400">环球影城</span>
                <span className="text-xs px-2 py-1 rounded-full bg-purple-100 dark:bg-purple-900/50 text-purple-600 dark:text-purple-400">味之素食品</span>
                <span className="text-xs px-2 py-1 rounded-full bg-purple-100 dark:bg-purple-900/50 text-purple-600 dark:text-purple-400">星光电影公司</span>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* 合作优势 */}
      <motion.section 
        className="mb-16"
        variants={itemVariants}
      >
        <h2 className="text-2xl font-bold mb-8 text-center">成为我们的合作伙伴，您将获得</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div 
            className={`p-6 rounded-xl shadow-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}
            variants={itemVariants}
            whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
          >
            <div className="w-16 h-16 mb-4 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center">
              <i className="fas fa-users text-2xl text-blue-600 dark:text-blue-400"></i>
            </div>
            <h3 className="text-xl font-bold mb-3">扩大品牌影响力</h3>
            <p className="text-gray-600 dark:text-gray-300">
              与我们合作，您将有机会接触到大量的目标客户，扩大您的品牌影响力和知名度。
            </p>
          </motion.div>
          
          <motion.div 
            className={`p-6 rounded-xl shadow-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}
            variants={itemVariants}
            whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
          >
            <div className="w-16 h-16 mb-4 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center">
              <i className="fas fa-chart-line text-2xl text-blue-600 dark:text-blue-400"></i>
            </div>
            <h3 className="text-xl font-bold mb-3">增加业务收入</h3>
            <p className="text-gray-600 dark:text-gray-300">
              通过与我们的合作，您可以开发新的业务机会，增加收入来源，实现业务增长。
            </p>
          </motion.div>
          
          <motion.div 
            className={`p-6 rounded-xl shadow-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}
            variants={itemVariants}
            whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
          >
            <div className="w-16 h-16 mb-4 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center">
              <i className="fas fa-lightbulb text-2xl text-blue-600 dark:text-blue-400"></i>
            </div>
            <h3 className="text-xl font-bold mb-3">创新合作机会</h3>
            <p className="text-gray-600 dark:text-gray-300">
              我们鼓励创新合作，与我们合作，您将有机会参与开发新的产品和服务，开拓新的市场。
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* 加入我们的合作伙伴网络 */}
      <motion.section 
        className="text-center max-w-3xl mx-auto"
        variants={itemVariants}
      >
        <h2 className="text-2xl font-bold mb-4">加入我们的合作伙伴网络</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          如果您对与FlickNibble House合作感兴趣，请联系我们。我们期待与各行业的优秀企业建立长期、互利的合作关系，共同为顾客创造独特的体验。
        </p>
        <a 
          href="/contact/inquiry-form"
          className="inline-flex items-center justify-center bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white font-medium py-3 px-8 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
        >
          联系我们
          <i className="fas fa-arrow-right ml-2"></i>
        </a>
      </motion.section>
    </motion.div>
  );
};

export default Partnerships;