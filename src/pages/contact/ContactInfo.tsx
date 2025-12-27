import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { LanguageContext } from '@/contexts/languageContext';
import { useTheme } from '@/hooks/useTheme';

const ContactInfo: React.FC = () => {
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
        <h1 className="text-4xl font-bold mb-4">{t('contactInfo')}</h1>
        <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-500 mx-auto"></div>
        <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          以下是我们的详细联系方式和办公时间，欢迎随时与我们联系。
        </p>
      </motion.div>

      {/* 联系信息 */}
      <motion.section 
        className="mb-16"
        variants={itemVariants}
      >
        <div className={`p-8 rounded-2xl shadow-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} max-w-4xl mx-auto`}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold mb-6">总部联系方式</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <i className="fas fa-map-marker-alt text-xl text-purple-600 dark:text-purple-400"></i>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1">地址</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      上海市静安区南京西路1266号<br />
                      恒隆广场46楼
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <i className="fas fa-phone text-xl text-purple-600 dark:text-purple-400"></i>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1">电话</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      +86 21 6122 8888 (总机)<br />
                      +86 21 6122 8889 (客服热线)
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <i className="fas fa-envelope text-xl text-purple-600 dark:text-purple-400"></i>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1">电子邮箱</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      info@flicknibblehouse.com (一般咨询)<br />
                      support@flicknibblehouse.com (客户支持)<br />
                      partner@flicknibblehouse.com (合作咨询)<br />
                      hr@flicknibblehouse.com (招聘信息)
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <i className="fas fa-clock text-xl text-purple-600 dark:text-purple-400"></i>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1">办公时间</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      周一至周五: 9:00 - 18:00<br />
                      周六: 10:00 - 16:00<br />
                      周日及法定节假日休息
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold mb-6">分店联系方式</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold mb-3">上海旗舰店</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-2">
                    <i className="fas fa-map-marker-alt text-purple-600 dark:text-purple-400 mr-2"></i>
                    上海市静安区南京西路1266号恒隆广场46楼
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 mb-2">
                    <i className="fas fa-phone text-purple-600 dark:text-purple-400 mr-2"></i>
                    +86 21 6122 8888
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">
                    <i className="fas fa-clock text-purple-600 dark:text-purple-400 mr-2"></i>
                    周一至周日: 10:00 - 24:00
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-bold mb-3">北京分店</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-2">
                    <i className="fas fa-map-marker-alt text-purple-600 dark:text-purple-400 mr-2"></i>
                    北京市朝阳区建国门外大街1号国贸商城3期L5层
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 mb-2">
                    <i className="fas fa-phone text-purple-600 dark:text-purple-400 mr-2"></i>
                    +86 10 8535 8888
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">
                    <i className="fas fa-clock text-purple-600 dark:text-purple-400 mr-2"></i>
                    周一至周日: 10:00 - 24:00
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-bold mb-3">广州分店</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-2">
                    <i className="fas fa-map-marker-alt text-purple-600 dark:text-purple-400 mr-2"></i>
                    广州市天河区天河路385号太古汇商场L4层
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 mb-2">
                    <i className="fas fa-phone text-purple-600 dark:text-purple-400 mr-2"></i>
                    +86 20 8398 8888
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">
                    <i className="fas fa-clock text-purple-600 dark:text-purple-400 mr-2"></i>
                    周一至周日: 10:00 - 24:00
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-bold mb-3">东京分店</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-2">
                    <i className="fas fa-map-marker-alt text-purple-600 dark:text-purple-400 mr-2"></i>
                    日本东京都港区六本木6丁目10-1六本木ヒルズ森タワー52階
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 mb-2">
                    <i className="fas fa-phone text-purple-600 dark:text-purple-400 mr-2"></i>
                    +81 3 5771 8888
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">
                    <i className="fas fa-clock text-purple-600 dark:text-purple-400 mr-2"></i>
                    周一至周日: 11:00 - 24:00
                  </p>
                </div>
              </div>
            </div>
          </div>
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
            src="https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Modern%20city%20skyline%2C%20business%20district%2C%20skyscrapers%2C%20busy%20city%20center%2C%20daytime&sign=1abf08cee8bab571302ca031cd5c517e" 
            alt="Office Location" 
            className="w-full h-full object-cover"
          />
        </div>
      </motion.section>

      {/* 交通信息 */}
      <motion.section 
        className={`rounded-2xl p-8 mb-16 ${theme === 'dark' ? 'bg-gray-800' : 'bg-purple-50'}`}
        variants={itemVariants}
      >
        <h2 className="text-2xl font-bold mb-8 text-center">交通信息</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div>
            <h3 className="text-xl font-bold mb-4">上海旗舰店交通指南</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <i className="fas fa-subway text-purple-600 dark:text-purple-400 mt-1 mr-3"></i>
                <div>
                  <h4 className="font-bold mb-1">地铁</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    乘坐地铁2号线或12号线至南京西路站，从12号出口出站，步行约5分钟即可到达恒隆广场。
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <i className="fas fa-bus text-purple-600 dark:text-purple-400 mt-1 mr-3"></i>
                <div>
                  <h4 className="font-bold mb-1">公交</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    乘坐公交20路、37路、49路、104路、128路、301路、304路、738路、801路至南京西路陕西北路站下车，步行约3分钟即可到达。
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <i className="fas fa-car text-purple-600 dark:text-purple-400 mt-1 mr-3"></i>
                <div>
                  <h4 className="font-bold mb-1">自驾</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    恒隆广场设有地下停车场，入口位于南京西路1266号。消费可享受停车优惠，具体优惠信息请咨询店内工作人员。
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">其他分店交通指南</h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-bold mb-2">北京分店</h4>
                <p className="text-gray-600 dark:text-gray-300 mb-1">
                  <i className="fas fa-subway text-purple-600 dark:text-purple-400 mr-2"></i>
                  乘坐地铁1号线或10号线至国贸站，从C出口出站，步行约3分钟即可到达国贸商城。
                </p>
              </div>
              
              <div>
                <h4 className="font-bold mb-2">广州分店</h4>
                <p className="text-gray-600 dark:text-gray-300 mb-1">
                  <i className="fas fa-subway text-purple-600 dark:text-purple-400 mr-2"></i>
                  乘坐地铁3号线至石牌桥站，从D出口出站，步行约5分钟即可到达太古汇商场。
                </p>
              </div>
              
              <div>
                <h4 className="font-bold mb-2">东京分店</h4>
                <p className="text-gray-600 dark:text-gray-300 mb-1">
                  <i className="fas fa-subway text-purple-600 dark:text-purple-400 mr-2"></i>
                  乘坐地铁日比谷线至六本木站，从3号出口出站，步行约7分钟即可到达六本木ヒルズ。
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* 紧急联系 */}
      <motion.section 
        className="mb-16 max-w-3xl mx-auto"
        variants={itemVariants}
      >
        <h2 className="text-2xl font-bold mb-8 text-center">紧急联系</h2>
        
        <div className={`p-6 rounded-xl shadow-lg ${theme === 'dark' ? 'bg-red-900/20' : 'bg-red-50'} border ${theme === 'dark' ? 'border-red-800' : 'border-red-200'}`}>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            如有紧急情况，请通过以下方式联系我们：
          </p>
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <i className="fas fa-phone text-red-600 dark:text-red-400 mr-2"></i>
              <span className="text-red-600 dark:text-red-400 font-bold">+86 21 6122 8889</span>
            </div>
            <div className="flex items-center">
              <i className="fas fa-envelope text-red-600 dark:text-red-400 mr-2"></i>
              <span className="text-red-600 dark:text-red-400 font-bold">emergency@flicknibblehouse.com</span>
            </div>
          </div>
        </div>
      </motion.section>

      {/* 结语 */}
      <motion.section 
        className="text-center max-w-3xl mx-auto"
        variants={itemVariants}
      >
        <h2 className="text-2xl font-bold mb-4">期待与您相见</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          无论您是前来体验我们的服务，还是洽谈合作，我们都热情欢迎您的到来。如有任何疑问或需要帮助，请随时联系我们。
        </p>
        <a 
          href="/contact/inquiry-form"
          className="inline-flex items-center justify-center bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white font-medium py-3 px-8 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
        >
          发送消息
          <i className="fas fa-arrow-right ml-2"></i>
        </a>
      </motion.section>
    </motion.div>
  );
};

export default ContactInfo;