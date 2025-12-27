import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import { AuthContext } from '@/contexts/authContext';
import { LanguageProvider } from '@/contexts/languageContext';
import Layout from '@/components/Layout';

// 导入页面组件
import Home from "@/pages/Home";
import About from "@/pages/About";
import CompanyOverview from "@/pages/company/Overview";
import Leadership from "@/pages/company/Leadership";
import Services from "@/pages/Services";
import JapanTour from "@/pages/services/JapanTour";
import Programs from "@/pages/services/Programs";
import Activities from "@/pages/services/Activities";
import WhyChooseUs from "@/pages/WhyChooseUs";
import ValueProposition from "@/pages/why/ValueProposition";
import Sustainability from "@/pages/why/Sustainability";
import Partnerships from "@/pages/why/Partnerships";
import Contact from "@/pages/Contact";
import ContactInfo from "@/pages/contact/ContactInfo";
import InquiryForm from "@/pages/contact/InquiryForm";
import SocialMedia from "@/pages/contact/SocialMedia";

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const logout = () => {
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, setIsAuthenticated, logout }}
    >
      <LanguageProvider>
        <Layout>
          <Routes>
            {/* 主页 */}
            <Route path="/" element={<Home />} />
            
            {/* 关于我们 */}
            <Route path="/about" element={<About />} />
            <Route path="/about/company-overview" element={<CompanyOverview />} />
            <Route path="/about/leadership" element={<Leadership />} />
            
            {/* 产品服务 */}
            <Route path="/services" element={<Services />} />
            <Route path="/services/japan-tour" element={<JapanTour />} />
            <Route path="/services/programs" element={<Programs />} />
            <Route path="/services/activities" element={<Activities />} />
            
            {/* 为什么选择我们 */}
            <Route path="/why-choose-us" element={<WhyChooseUs />} />
            <Route path="/why-choose-us/value-proposition" element={<ValueProposition />} />
            <Route path="/why-choose-us/sustainability" element={<Sustainability />} />
            <Route path="/why-choose-us/partnerships" element={<Partnerships />} />
            
            {/* 联系我们 */}
            <Route path="/contact" element={<Contact />} />
            <Route path="/contact/contact-info" element={<ContactInfo />} />
            <Route path="/contact/inquiry-form" element={<InquiryForm />} />
            <Route path="/contact/social-media" element={<SocialMedia />} />
          </Routes>
        </Layout>
      </LanguageProvider>
    </AuthContext.Provider>
  );
}
