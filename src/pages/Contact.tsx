import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { LanguageContext } from '@/contexts/languageContext';
import { useTheme } from '@/hooks/useTheme';

const Contact: React.FC = () => {
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
        <h1 className="text-4xl font-bold mb-4">{t('contact')}</h1>
        <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-500 mx-auto"></div>
        <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          {t('contactSubtitle')}我们的团队将竭诚为您提供帮助和支持。
        </p>
      </motion.div>

      {/* 联系信息卡片 */}
      <motion.section 
        className="mb-16"
        variants={itemVariants}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div 
            className={`p-6 rounded-xl shadow-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} text-center`}
            variants={itemVariants}
            whileHover={{ y: -5, transition: { duration: 0.3 } }}
          >
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center">
              <i className="fas fa-map-marker-alt text-2xl text-purple-600 dark:text-purple-400"></i>
            </div>
            <h3 className="text-xl font-bold mb-3">办公地址</h3>
            <p className="text-gray-600 dark:text-gray-300">
              上海市静安区南京西路1266号<br />
              恒隆广场46楼
            </p>
          </motion.div>
          
          <motion.div 
            className={`p-6 rounded-xl shadow-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} text-center`}
            variants={itemVariants}whileHover={{ y: -5, transition: { duration: 0.3 } }}
          >
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center">
              <i className="fas fa-phone text-2xl text-purple-600 dark:text-purple-400"></i>
            </div>
            <h3 className="text-xl font-bold mb-3">联系电话</h3>
            <p className="text-gray-600 dark:text-gray-300">
              +86 21 6122 8888<br />
              +86 21 6122 8889
            </p>
          </motion.div>
          
          <motion.div 
            className={`p-6 rounded-xl shadow-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} text-center`}
            variants={itemVariants}
            whileHover={{ y: -5, transition: { duration: 0.3 } }}
          >
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center">
              <i className="fas fa-envelope text-2xl text-purple-600 dark:text-purple-400"></i>
            </div>
            <h3 className="text-xl font-bold mb-3">电子邮箱</h3>
            <p className="text-gray-600 dark:text-gray-300">
              info@flicknibblehouse.com<br />
              support@flicknibblehouse.com
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* 联系表单 */}
      <motion.section 
        className={`rounded-2xl p-8 mb-16 ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} shadow-lg max-w-4xl mx-auto`}
        variants={itemVariants}
      >
        <h2 className="text-2xl font-bold mb-6 text-center">发送消息</h2>
        
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">姓名</label>
              <input
                type="text"
                id="name"
                name="name"
                className={`w-full px-4 py-2 rounded-lg ${theme === 'dark' ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'} border focus:outline-none focus:ring-2 focus:ring-purple-500`}
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">电子邮箱</label>
              <input
                type="email"
                id="email"
                name="email"
                className={`w-full px-4 py-2 rounded-lg ${theme === 'dark' ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'} border focus:outline-none focus:ring-2 focus:ring-purple-500`}
                required
              />
            </div>
          </div>
          
          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">主题</label>
            <input
              type="text"
              id="subject"
              name="subject"
              className={`w-full px-4 py-2 rounded-lg ${theme === 'dark' ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'} border focus:outline-none focus:ring-2 focus:ring-purple-500`}
              required
            />
          </div>
          
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">消息内容</label>
            <textarea
              id="message"
              name="message"
              rows={6}
              className={`w-full px-4 py-2 rounded-lg ${theme === 'dark' ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'} border focus:outline-none focus:ring-2 focus:ring-purple-500`}
              required
            ></textarea>
          </div>
          
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white font-medium py-3 px-8 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
            >
              {t('submit')}
            </button>
          </div>
        </form>
      </motion.section>

      {/* 详细内容链接 */}
      <motion.section 
        className="mb-16"
        variants={itemVariants}
      >
        <h2 className="text-2xl font-bold mb-8 text-center">了解更多联系方式</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <motion.div 
            className={`rounded-xl overflow-hidden shadow-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} flex flex-col h-full`}
            variants={itemVariants}
            whileHover={{ y: -5, transition: { duration: 0.3 } }}
          >
            <div className="p-6 flex flex-col flex-grow">
              <div className="w-16 h-16 mb-4 rounded-full bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center">
                <i className="fas fa-info-circle text-2xl text-purple-600 dark:text-purple-400"></i>
              </div>
              <h3 className="text-xl font-bold mb-3">{t('contactInfo')}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">
                了解更多关于我们的联系方式和办公时间。
              </p>
              <Link 
                to="/contact/contact-info"
                className="text-purple-600 dark:text-purple-400 font-medium hover:underline flex items-center"
              >
                了解更多
                <i className="fas fa-arrow-right ml-2"></i>
              </Link>
            </div>
          </motion.div>
          
          <motion.div 
            className={`rounded-xl overflow-hidden shadow-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} flex flex-col h-full`}
            variants={itemVariants}
            whileHover={{ y: -5, transition: { duration: 0.3 } }}
          >
            <div className="p-6 flex flex-col flex-grow">
              <div className="w-16 h-16 mb-4 rounded-full bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center">
                <i className="fas fa-file-alt text-2xl text-purple-600 dark:text-purple-400"></i>
              </div>
              <h3 className="text-xl font-bold mb-3">{t('inquiryForm')}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">
                填写详细的查询表，我们的团队将尽快回复您。
              </p>
              <Link 
                to="/contact/inquiry-form"
                className="text-purple-600 dark:text-purple-400 font-medium hover:underline flex items-center"
              >
                填写表单
                <i className="fas fa-arrow-right ml-2"></i>
              </Link>
            </div>
          </motion.div>
          
          <motion.div 
            className={`rounded-xl overflow-hidden shadow-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} flex flex-col h-full`}
            variants={itemVariants}
            whileHover={{ y: -5, transition: { duration: 0.3 } }}
          >
            <div className="p-6 flex flex-col flex-grow">
              <div className="w-16 h-16 mb-4 rounded-full bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center">
                <i className="fas fa-share-alt text-2xl text-purple-600 dark:text-purple-400"></i>
              </div>
              <h3 className="text-xl font-bold mb-3">{t('socialMedia')}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">
                关注我们的社交媒体账号，获取最新的活动和优惠信息。
              </p>
              <Link 
                to="/contact/social-media"
                className="text-purple-600 dark:text-purple-400 font-medium hover:underline flex items-center"
              >
                关注我们
                <i className="fas fa-arrow-right ml-2"></i>
              </Link>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* 位置地图 */}
      <motion.section 
        className="mb-16"
        variants={itemVariants}
      >
        <h2 className="text-2xl font-bold mb-8 text-center">我们的位置</h2>
        
        <div className="rounded-xl overflow-hidden shadow-lg h-96 max-w-4xl mx-auto">
          {/* 这里可以放置真实的地图，但由于是演示，使用占位图 */}
          <img 
            src="https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Modern%20office%20building%20exterior%2C%20city%20center%2C%20skyscraper%2C%20busy%20street%2C%20daytime&sign=77bf3a901bcb77836bab910c15eef018" 
            alt="Office Location" 
            className="w-full h-full object-cover"
          />
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
            <h3 className="text-lg font-bold mb-2">如何预订你们的服务？</h3>
            <p className="text-gray-600 dark:text-gray-300">
              您可以通过我们的官方网站、微信公众号或者电话进行预订。我们的客服团队将为您提供详细的预订指导和帮助。
            </p>
          </motion.div>
          
          <motion.div 
            className={`p-6 rounded-xl shadow-sm ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}
            variants={itemVariants}
          >
            <h3 className="text-lg font-bold mb-2">如果我有特殊的饮食需求，是否可以提前告知？</h3>
            <p className="text-gray-600 dark:text-gray-300">
              是的，我们非常乐意满足您的特殊饮食需求。请在预订时或至少提前24小时告知我们您的需求，我们的厨师团队将为您准备适合的餐点。
            </p>
          </motion.div>
          
          <motion.div 
            className={`p-6 rounded-xl shadow-sm ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}
            variants={itemVariants}
          >
            <h3 className="text-lg font-bold mb-2">如何申请成为你们的合作伙伴？</h3>
            <p className="text-gray-600 dark:text-gray-300">
              如果您对与FlickNibble House合作感兴趣，可以通过我们的联系页面提交合作申请，或者直接发送邮件至partner@flicknibblehouse.com，我们的合作团队将与您联系。
            </p>
          </motion.div>
          
          <motion.div 
            className={`p-6 rounded-xl shadow-sm ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}
            variants={itemVariants}
          >
            <h3 className="text-lg font-bold mb-2">如果我需要取消或修改预订，应该怎么做？</h3>
            <p className="text-gray-600 dark:text-gray-300">
              如果您需要取消或修改预订，请尽快联系我们的客服团队。根据不同的服务类型，我们有不同的取消政策，请参考我们的预订条款或联系客服了解详情。
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* 结语 */}
      <motion.section 
        className="text-center max-w-3xl mx-auto"
        variants={itemVariants}
      >
        <h2 className="text-2xl font-bold mb-4">期待与您联系</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          无论您有任何问题或需求，我们都将竭诚为您提供帮助和支持。选择最方便的方式与我们联系，我们期待与您交流！
        </p>
        <Link 
          to="/contact/inquiry-form"
          className="inline-flex items-center justify-center bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white font-medium py-3 px-8 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
        >
          立即联系我们
          <i className="fas fa-arrow-right ml-2"></i>
        </Link>
      </motion.section>
    </motion.div>
  );
};

export default Contact;