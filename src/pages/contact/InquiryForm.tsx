import React, { useContext, useState } from 'react';
import { motion } from 'framer-motion';
import { LanguageContext } from '@/contexts/languageContext';
import { useTheme } from '@/hooks/useTheme';
import { toast } from 'sonner';

const InquiryForm: React.FC = () => {
  const { t } = useContext(LanguageContext);
  const { theme } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    inquiryType: 'general',
    message: '',
    subscribe: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // 处理表单输入变化
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value
    }));
  };
  
  // 处理表单提交
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // 模拟表单提交过程
    setTimeout(() => {
      // 在实际应用中，这里应该有实际的API调用
      console.log('Form submitted:', formData);
      
      // 显示成功消息
      toast.success('您的查询已提交成功！我们将尽快与您联系。');
      
      // 重置表单
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        inquiryType: 'general',
        message: '',
        subscribe: false
      });
      
      setIsSubmitting(false);
    }, 1500);
  };
  
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
        <h1 className="text-4xl font-bold mb-4">{t('inquiryForm')}</h1>
        <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-500 mx-auto"></div>
        <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          请填写以下表单，我们的团队将在1-2个工作日内与您联系，为您提供帮助和支持。
        </p>
      </motion.div>

      {/* 表单 */}
      <motion.section 
        className={`rounded-2xl p-8 mb-16 ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} shadow-lg max-w-4xl mx-auto`}
        variants={itemVariants}
      >
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">姓名 <span className="text-red-500">*</span></label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-4 py-2 rounded-lg ${theme === 'dark' ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'} border focus:outline-none focus:ring-2 focus:ring-purple-500`}
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">电子邮箱 <span className="text-red-500">*</span></label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-2 rounded-lg ${theme === 'dark' ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'} border focus:outline-none focus:ring-2 focus:ring-purple-500`}
                required
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">联系电话</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={`w-full px-4 py-2 rounded-lg ${theme === 'dark' ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'} border focus:outline-none focus:ring-2 focus:ring-purple-500`}
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">主题 <span className="text-red-500">*</span></label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className={`w-full px-4 py-2 rounded-lg ${theme === 'dark' ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'} border focus:outline-none focus:ring-2 focus:ring-purple-500`}
                required
              />
            </div>
          </div>
          
          <div>
            <label htmlFor="inquiryType" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">查询类型 <span className="text-red-500">*</span></label>
            <select
              id="inquiryType"
              name="inquiryType"
              value={formData.inquiryType}
              onChange={handleChange}
              className={`w-full px-4 py-2 rounded-lg ${theme === 'dark' ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'} border focus:outline-none focus:ring-2 focus:ring-purple-500`}
              required
            >
              <option value="general">一般咨询</option>
              <option value="booking">预订咨询</option>
              <option value="feedback">意见反馈</option>
              <option value="cooperation">合作洽谈</option>
              <option value="careers">招聘信息</option>
              <option value="other">其他</option>
            </select>
          </div>
          
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">消息内容 <span className="text-red-500">*</span></label>
            <textarea
              id="message"
              name="message"
              rows={8}
              value={formData.message}
              onChange={handleChange}
              className={`w-full px-4 py-2 rounded-lg ${theme === 'dark' ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'} border focus:outline-none focus:ring-2 focus:ring-purple-500`}
              required
            ></textarea>
          </div>
          
          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input
                id="subscribe"
                name="subscribe"
                type="checkbox"
                checked={formData.subscribe}
                onChange={handleChange}
                className={`w-4 h-4 ${theme === 'dark' ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'} border focus:ring-2 focus:ring-purple-500 rounded`}
              />
            </div>
            <label htmlFor="subscribe" className="ml-2 text-sm text-gray-600 dark:text-gray-300">
              订阅我们的电子通讯，获取最新的活动和优惠信息
            </label>
          </div>
          
          <div className="flex justify-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white font-medium py-3 px-8 rounded-full shadow-md hover:shadow-lg transition-all duration-300 ${
                isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
              }`}
            >
              {isSubmitting ? (
                <>
                  <i className="fas fa-spinner fa-spin mr-2"></i> 提交中...
                </>
              ) : (
                t('submit')
              )}
            </button>
          </div>
        </form>
      </motion.section>

      {/* 表单提示 */}
      <motion.section 
        className={`rounded-2xl p-8 mb-16 ${theme === 'dark' ? 'bg-gray-800' : 'bg-purple-50'} max-w-4xl mx-auto`}
        variants={itemVariants}
      >
        <h2 className="text-2xl font-bold mb-6 text-center">填写表单注意事项</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <div className="space-y-4">
              <div className="flex items-start">
                <i className="fas fa-check-circle text-green-500 mt-1 mr-3"></i>
                <p className="text-gray-600 dark:text-gray-300">
                  请确保您填写的信息真实、准确、完整，以便我们能够及时与您联系。
                </p>
              </div>
              <div className="flex items-start">
                <i className="fas fa-check-circle text-green-500 mt-1 mr-3"></i>
                <p className="text-gray-600 dark:text-gray-300">
                  带有 <span className="text-red-500">*</span> 的字段为必填项，请务必填写。
                </p>
              </div>
              <div className="flex items-start">
                <i className="fas fa-check-circle text-green-500 mt-1 mr-3"></i>
                <p className="text-gray-600 dark:text-gray-300">
                  我们通常会在1-2个工作日内回复您的查询，请耐心等待。
                </p>
              </div>
            </div>
          </div>
          
          <div>
            <div className="space-y-4">
              <div className="flex items-start">
                <i className="fas fa-exclamation-circle text-yellow-500 mt-1 mr-3"></i>
                <p className="text-gray-600 dark:text-gray-300">
                  如遇紧急情况，请直接拨打我们的客服热线：+86 21 6122 8889。
                </p>
              </div>
              <div className="flex items-start">
                <i className="fas fa-exclamation-circle text-yellow-500 mt-1 mr-3"></i>
                <p className="text-gray-600 dark:text-gray-300">
                  我们重视您的隐私，您提供的信息仅用于处理您的查询，不会用于其他用途。
                </p>
              </div>
              <div className="flex items-start">
                <i className="fas fa-exclamation-circle text-yellow-500 mt-1 mr-3"></i>
                <p className="text-gray-600 dark:text-gray-300">
                  如您需要取消或修改已提交的查询，请重新提交表单并在消息内容中注明。
                </p>
              </div>
            </div>
          </div>
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
            <h3 className="text-lg font-bold mb-2">如何跟踪我的查询进度？</h3>
            <p className="text-gray-600 dark:text-gray-300">
              提交查询后，我们会向您提供的电子邮箱发送一封确认邮件。如您需要跟踪查询进度，可以直接回复该邮件，或拨打我们的客服热线咨询。
            </p>
          </motion.div>
          
          <motion.div 
            className={`p-6 rounded-xl shadow-sm ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}
            variants={itemVariants}
          >
            <h3 className="text-lg font-bold mb-2">我可以通过哪些方式提交查询？</h3>
            <p className="text-gray-600 dark:text-gray-300">
              除了通过本页面的查询表单，您还可以通过电话、电子邮件、微信公众号等方式联系我们。具体联系方式请查看<a href="/contact/contact-info" className="text-purple-600 dark:text-purple-400 hover:underline">联系信息</a>页面。
            </p>
          </motion.div>
          
          <motion.div 
            className={`p-6 rounded-xl shadow-sm ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}
            variants={itemVariants}
          >
            <h3 className="text-lg font-bold mb-2">如何申请成为你们的合作伙伴？</h3>
            <p className="text-gray-600 dark:text-gray-300">
              如果您对与FlickNibble House合作感兴趣，可以在查询类型中选择"合作洽谈"，并在消息内容中详细描述您的合作意向。我们的合作团队将尽快与您联系，讨论具体的合作事宜。
            </p>
          </motion.div>
          
          <motion.div 
            className={`p-6 rounded-xl shadow-sm ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}
            variants={itemVariants}
          >
            <h3 className="text-lg font-bold mb-2">我可以申请取消或修改已提交的查询吗？</h3>
            <p className="text-gray-600 dark:text-gray-300">
              可以。如您需要取消或修改已提交的查询，请重新提交表单并在消息内容中注明您的需求，或直接联系我们的客服团队处理。
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* 其他联系方式 */}
      <motion.section 
        className="text-center max-w-3xl mx-auto"
        variants={itemVariants}
      >
        <h2 className="text-2xl font-bold mb-4">其他联系方式</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          如果您不方便通过在线表单提交查询，也可以通过以下方式与我们联系：
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center mb-3">
              <i className="fas fa-phone text-xl text-purple-600 dark:text-purple-400"></i>
            </div>
            <p className="text-gray-600 dark:text-gray-300">电话咨询</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center mb-3">
              <i className="fas fa-envelope text-xl text-purple-600 dark:text-purple-400"></i>
            </div>
            <p className="text-gray-600 dark:text-gray-300">电子邮件</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center mb-3">
              <i className="fas fa-comments text-xl text-purple-600 dark:text-purple-400"></i>
            </div>
            <p className="text-gray-600 dark:text-gray-300">在线客服</p>
          </div>
        </div>
        <a 
          href="/contact/contact-info"
          className="inline-flex items-center text-purple-600 dark:text-purple-400 font-medium hover:underline"
        >
          查看详细联系方式
          <i className="fas fa-arrow-right ml-2"></i>
        </a>
      </motion.section>
    </motion.div>
  );
};

export default InquiryForm;