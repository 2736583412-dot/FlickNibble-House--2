import { createContext, useState, useEffect, ReactNode } from 'react';

// 定义支持的语言类型
export type Language = 'zh' | 'en' | 'ja';

// 定义翻译文本接口
interface Translations {
  [key: string]: {
    [key in Language]: string;
  };
}

// 创建翻译文本
export const translations: Translations = {
  // 导航翻译
  home: { zh: '首页', en: 'Home', ja: 'ホーム' },
  about: { zh: '关于我们', en: 'About Us', ja: '会社概要' },
  services: { zh: '产品服务', en: 'Services', ja: 'サービス' },
  whyChooseUs: { zh: '为什么选择我们', en: 'Why Choose Us', ja: 'なぜ私たちを選ぶのか' },
  contact: { zh: '联系我们', en: 'Contact', ja: 'お問い合わせ' },
  
  // 子导航翻译
  companyOverview: { zh: '公司概述', en: 'Company Overview', ja: '会社概要' },
  leadership: { zh: '领导层', en: 'Leadership', ja: '経営陣' },
  japanTour: { zh: '日本旅游套餐', en: 'Japan Tour Packages', ja: '日本ツアーパッケージ' },
  programs: { zh: '节目', en: 'Programs', ja: 'プログラム' },
  activities: { zh: '活动', en: 'Activities', ja: 'アクティビティ' },
  valueProposition: { zh: '价值主张', en: 'Value Proposition', ja: '価値提案' },
  sustainability: { zh: '可持续性', en: 'Sustainability', ja: '持続可能性' },
  partnerships: { zh: '合作伙伴关系', en: 'Partnerships', ja: 'パートナーシップ' },
  contactInfo: { zh: '联系信息', en: 'Contact Info', ja: 'お問い合わせ情報' },
  inquiryForm: { zh: '查询表', en: 'Inquiry Form', ja: 'お問い合わせフォーム' },
  socialMedia: { zh: '社交媒体', en: 'Social Media', ja: 'ソーシャルメディア' },
  
  // 主页翻译
  heroTitle: { zh: '光影与味蕾的双重疗愈', en: 'Dual Healing of Light & Taste', ja: '光と味覚の二重癒し' },
  heroSubtitle: { zh: '电影+餐饮的创新体验，10天5城日本夏日限量游', en: 'Innovative Movie+Dining Experience, 10-Day 5-City Japan Summer Limited Tour', ja: '映画+ダイニングの革新的な体験、10日間5都市の日本サマー限定ツアー' },
  bookNow: { zh: '立即预订', en: 'Book Now', ja: '今すぐ予約' },
  learnMore: { zh: '了解更多', en: 'Learn More', ja: 'もっと見る' },
  
  // 关于我们翻译
  aboutTitle: { zh: '关于 FlickNibble House', en: 'About FlickNibble House', ja: 'FlickNibble Houseについて' },
  aboutMission: { zh: '我们的使命', en: 'Our Mission', ja: '私たちの使命' },
  aboutVision: { zh: '我们的愿景', en: 'Our Vision', ja: '私たちのビジョン' },
  
  // 产品服务翻译
  tourDescription: { zh: '专为中国18-35岁情侣设计的浪漫旅行，将日本美食、电影浪漫、日本多地特色深度绑定，让整个旅程充满光、影、味蕾的双重疗愈。', en: 'A romantic trip designed for Chinese couples aged 18-35, deeply integrating Japanese cuisine, movie romance, and the unique features of multiple Japanese locations, making the entire journey full of the dual healing of light, shadow, and taste buds.', ja: '中国の18-35歳のカップル向けにデザインされたロマンチックな旅行で、日本の美食、映画のロマンス、日本の複数の場所の特色を深く融合させ、旅全体を光、影、味蕾の二重癒しで満たします。' },
  
  // 联系我们翻译
  contactSubtitle: { zh: '有任何问题或需求，请随时联系我们', en: 'If you have any questions or needs, please feel free to contact us', ja: 'ご質問やご要望がございましたら、お気軽にお問い合わせください' },
  submit: { zh: '提交', en: 'Submit', ja: '送信' },
  
  // 共享元素翻译
  copyright: { zh: '© 2025 FlickNibble House. 保留所有权利。', en: '© 2025 FlickNibble House. All rights reserved.', ja: '© 2025 FlickNibble House. 全著作権所有。' },
  
  // 首页内容翻译
  tourPackageTitle: { zh: '10天5城日本夏日限量游', en: '10-Day 5-City Japan Summer Limited Tour', ja: '10日5都市日本サマー限定ツアー' },
  tokyoExperienceTitle: { zh: '东京浪漫之旅', en: 'Tokyo Romantic Journey', ja: '東京ロマンチックツアー' },
  tokyoExperienceDesc: { zh: '探索东京的浪漫景点，在东京塔欣赏夜景，体验传统与现代交融的独特魅力。', en: 'Explore Tokyo\'s romantic spots, enjoy the night view from Tokyo Tower, and experience the unique charm of traditional and modern fusion.', ja: '東京のロマンチックな観光スポットを探索し、東京タワーからの夜景を楽しみ、伝統と現代が融合した独特な魅力を体験してください。' },
  kyotoExperienceTitle: { zh: '京都传统风情', en: 'Kyoto Traditional Charm', ja: '京都の伝統的な风情' },
  kyotoExperienceDesc: { zh: '漫步古都街道，参观寺庙神社，品尝正宗怀石料理，感受日本传统文化的深厚底蕴。', en: 'Walk through the ancient capital\'s streets, visit temples and shrines, taste authentic kaiseki cuisine, and experience the profound heritage of Japanese traditional culture.', ja: '古都の街道を散策し、寺院や神社を訪れ、本格的な懐石料理を味わい、日本の伝統文化の深い底力を感じてください。' },
  osakaExperienceTitle: { zh: '大阪美食探索', en: 'Osaka Food Exploration', ja: '大阪美食探検' },
  osakaExperienceDesc: { zh: '畅游大阪城公园，穿梭于道顿堀美食街，品尝各种地道美食，体验关西地区的热情活力。', en: 'Explore Osaka Castle Park, wander through Dotonbori food street, taste various local cuisines, and experience the enthusiasm and vitality of the Kansai region.', ja: '大阪城公園を散策し、道頓堀の美食街を闊歩し、様々な地元の美食を味わい、関西地方の熱狂と活力を体験してください。' },
  nightsStay: { zh: '晚住宿', en: 'Nights Stay', ja: '泊まり' },
  viewFullItinerary: { zh: '查看完整行程', en: 'View Full Itinerary', ja: '完全な行程を見る' },
  ourExperienceTitle: { zh: '我们的特色体验', en: 'Our Featured Experiences', ja: '私たちの特色ある体験' },
  movieDiningExperience: { zh: '电影餐饮体验', en: 'Movie Dining Experience', ja: '映画ダイニング体験' },
  movieDiningDesc: { zh: '在舒适的环境中一边观看精彩电影，一边享受精致美食，打破传统观影与用餐的界限。', en: 'Watch wonderful movies while enjoying exquisite food in a comfortable environment, breaking the boundaries between traditional movie watching and dining.', ja: '快適な環境で素晴らしい映画を見ながら、美味しい食事を楽しみ、伝統的な映画鑑賞と食事の境界線を越えましょう。' },
  creativeFood: { zh: '创意美食', en: 'Creative Cuisine', ja: '創造的な美食' },
  creativeFoodDesc: { zh: '我们的厨师团队精心打造各种创意料理，结合电影主题，为您带来独特的味觉享受。', en: 'Our chef team meticulously creates various creative dishes combined with movie themes to bring you a unique taste experience.', ja: '私たちのシェフチームは、映画のテーマを取り入れた様々な創造的な料理を丹精込めて作り、ユニークな味覚体験をお届けします。' },
  themeTravel: { zh: '主题旅行', en: 'Theme Travel', ja: 'テーマ旅行' },
  themeTravelDesc: { zh: '我们推出的日本夏日限量游，将电影、美食和旅行完美结合，打造难忘的浪漫体验。', en: 'Our Japan summer limited tour perfectly combines movies, food and travel to create an unforgettable romantic experience.', ja: '私たちが提供する日本サマー限定ツアーは、映画、美食、旅行を完璧に組み合わせ、忘れられないロマンチックな体験を提供します。' },
  customerReviews: { zh: '客户评价', en: 'Customer Reviews', ja: 'お客様のレビュー' },
  faqTitle: { zh: '常见问题', en: 'Frequently Asked Questions', ja: 'よくある質問' },
  tourInclusion: { zh: '日本旅游套餐包含哪些内容？', en: 'What does the Japan tour package include?', ja: '日本ツアーパッケージには何が含まれていますか？' },
  tourInclusionDesc: { zh: '我们的"10天5城日本夏日限量游"包含往返机票、住宿、早餐、特色电影主题晚餐、部分景点门票、专业导游服务以及机场接送服务。详细行程安排请查看产品详情页。', en: 'Our "10-Day 5-City Japan Summer Limited Tour" includes round-trip air tickets, accommodation, breakfast, special movie-themed dinners, some attraction tickets, professional guide services, and airport transfers. Please check the product details page for the detailed itinerary.', ja: '当社の「10日5都市日本サマー限定ツアー」には、往復航空券、宿泊、朝食、特別な映画テーマの夕食、一部の観光地入場券、専門ガイドサービス、空港送迎サービスが含まれています。詳細な行程については、製品詳細ページをご覧ください。' },
  bookingAdvance: { zh: '需要提前多久预订？', en: 'How far in advance do I need to book?', ja: '事前予約はどれくらい前に必要ですか？' },
  bookingAdvanceDesc: { zh: '为了确保您能获得理想的位置，我们建议至少提前3个月预订。特别是在旅游旺季（如夏季和节假日），预订可能会更加紧张，建议尽早安排。', en: 'To ensure you get your desired position, we recommend booking at least 3 months in advance. Especially during peak travel seasons (such as summer and holidays), bookings may be more紧张, so it is recommended to arrange early.', ja: 'お客様が希望のポジションを確保できるよう、少なくとも3か月前に予約することをお勧めします。特に観光シーズン（夏や休日など）には、予約がより混み合う可能性があるため、できるだけ早めに手配することをお勧めします。' },
  customization: { zh: '是否可以根据个人喜好定制行程？', en: 'Can I customize the itinerary according to my personal preferences?', ja: '個人的な好みに合わせて行程をカスタマイズできますか？' },
  customizationDesc: { zh: '是的，我们提供个性化定制服务。如果您对标准行程有任何特殊要求，可以在预订时注明，我们的团队将尽力满足您的需求。定制服务可能会产生额外费用。', en: 'Yes, we provide personalized customization services. If you have any special requirements for the standard itinerary, you can note them when booking, and our team will try our best to meet your needs. Customization services may incur additional costs.', ja: 'はい、当社ではパーソナライズされたカスタマイズサービスを提供しています。標準的な行程に特別な要求がある場合は、予約時にご記入ください。当社のチームは最善を尽くしてご要望にお応えします。カスタマイズサービスには追加料金が発生する場合があります。' },
  readyForJourney: { zh: '准备好开始您的浪漫电影美食之旅了吗？', en: 'Ready to start your romantic movie food journey?', ja: 'ロマンチックな映画美食の旅を始める準備はできましたか？' },
  limitedSpots: { zh: '限量名额，先到先得！立即预订"10天5城日本夏日限量游"，开启一段难忘的光影与味蕾之旅。', en: 'Limited spots, first come first served! Book the "10-Day 5-City Japan Summer Limited Tour" now and start an unforgettable journey of light, shadow and taste buds.', ja: '限定席数、先着順！「10日5都市日本サマー限定ツアー」を今すぐ予約して、光と影と味覚の忘れられない旅を始めましょう。' },
  inquireDetails: { zh: '咨询详情', en: 'Inquire Details', ja: '詳細をお問い合わせ' },
  
  // 关于我们页面翻译
  ourStory: { zh: '我们的故事', en: 'Our Story', ja: '私たちの物語' },
  storyParagraph1: { zh: 'FlickNibble House成立于2018年，是一个专注于"电影+餐饮"创新体验的品牌。我们的创始人是一对热爱电影和美食的情侣，他们在一次约会中突发奇想：为什么不能一边享受美食，一边观看精彩的电影呢？于是，FlickNibble House应运而生。', en: 'FlickNibble House was founded in 2018 as a brand focused on the innovative "movie + dining" experience. Our founders are a couple who love movies and food. During a date, they had a sudden idea: why can\'t we enjoy delicious food while watching wonderful movies? Thus, FlickNibble House came into being.', ja: 'FlickNibble Houseは2018年に設立され、「映画+ダイニング」という革新的な体験に特化したブランドです。創業者は映画と食事を愛するカップルで、あるデートの際に思いつきました：なぜ美味しい食事を楽しみながら、素晴らしい映画を見ることができないのでしょうか？そして、FlickNibble Houseが誕生しました。' },
  storyParagraph2: { zh: '我们的第一家店位于上海的时尚中心，很快就成为了年轻情侣和电影爱好者的热门去处。我们通过基于场景的订餐、不间断送餐等服务，打破了传统观影与用餐的界限，为顾客提供了全新的体验。', en: 'Our first store is located in the fashion center of Shanghai and quickly became a popular destination for young couples and movie lovers. Through scene-based ordering, uninterrupted meal delivery and other services, we have broken the boundaries between traditional movie watching and dining, providing customers with a brand new experience.', ja: '私たちの最初の店舗は上海のファッションセンターに位置し、すぐに若いカップルや映画愛好者の人気スポットになりました。シーンベースの注文、途切れない食事配達などのサービスを通じて、伝統的な映画鑑賞と食事の境界線を越え、顧客に新しい体験を提供してきました。' },
  leadershipTeam: { zh: '查看领导团队', en: 'View Leadership Team', ja: '経営陣を見る' },
  developmentHistory: { zh: '发展历程', en: 'Development History', ja: '発展の歴史' },
  brandValues: { zh: '品牌价值观', en: 'Brand Values', ja: 'ブランド価値観' },
  innovation: { zh: '创新', en: 'Innovation', ja: 'イノベーション' },
  innovationDesc: { zh: '不断突破传统，创造全新的体验和服务模式。', en: 'Continuously break through traditions and create new experiences and service models.', ja: '常に伝統を突破し、新しい体験とサービスモデルを作り出します。' },
  passion: { zh: '热情', en: 'Passion', ja: '情熱' },
  passionDesc: { zh: '用真诚和热情对待每一位顾客和合作伙伴。', en: 'Treat every customer and partner with sincerity and enthusiasm.', ja: 'すべての顧客とパートナーを誠実さと熱意を持って扱います。' },
  excellence: { zh: '卓越', en: 'Excellence', ja: '卓越性' },
  excellenceDesc: { zh: '追求卓越品质，确保每一个细节都尽善尽美。', en: 'Pursue excellence in quality and ensure every detail is perfect.', ja: '卓越した品質を追求し、あらゆる細部が完璧であることを確保します。' },
  responsibility: { zh: '责任', en: 'Responsibility', ja: '責任' },
  responsibilityDesc: { zh: '积极承担社会责任，推动可持续发展。', en: 'Actively assume social responsibility and promote sustainable development.', ja: '積極的に社会的責任を負い、持続可能な開発を推進します。' },
  learnMoreAbout: { zh: '了解更多关于FlickNibble House', en: 'Learn More About FlickNibble House', ja: 'FlickNibble Houseの詳細を学ぶ' },
  contactUsToLearn: { zh: '如果您对我们的品牌和服务有任何疑问或建议，欢迎随时联系我们。我们期待与您交流，共同创造更多美好的体验。', en: 'If you have any questions or suggestions about our brand and services, please feel free to contact us. We look forward to communicating with you and creating more beautiful experiences together.', ja: '当社のブランドやサービスについて質問やご提案がある場合は、お気軽にお問い合わせください。皆様とのコミュニケーションを楽しみ、一緒により美しい体験を創造していきたいと考えています。' },
  
  // 服务页面翻译
  servicesDesc: { zh: '我们提供多样化的"电影+餐饮"创新体验服务，满足不同顾客的需求。从日本旅游套餐到电影主题餐饮体验，从定期举办的活动到个性化的定制服务，我们致力于为您创造难忘的美好时光。', en: 'We provide a variety of innovative "movie + dining" experience services to meet the needs of different customers. From Japan tour packages to movie-themed dining experiences, from regular events to personalized customized services, we are committed to creating unforgettable beautiful moments for you.', ja: '当社は多様な革新的な「映画+ダイニング」体験サービスを提供し、さまざまな顧客のニーズに応えています。日本ツアーパッケージから映画テーマのダイニング体験、定期的なイベントからパーソナライズされたカスタマイズサービスまで、お客様に忘れられない美しい瞬間を作ることに専念しています。' },
  serviceFeatures: { zh: '我们的服务特色', en: 'Our Service Features', ja: '私たちのサービスの特徴' },
  highQualityExperience: { zh: '高品质体验', en: 'High Quality Experience', ja: '高品質な体験' },
  highQualityDesc: { zh: '我们注重每一个细节，从食材选择到服务流程，都精益求精，确保为您提供高品质的体验。', en: 'We pay attention to every detail, from ingredient selection to service process, and strive for excellence to ensure that we provide you with a high-quality experience.', ja: '私たちは食材の選択からサービスのプロセスまで、あらゆる細部に注意を払い、卓越性を追求し、高品質な体験を提供します。' },
  innovativeConcept: { zh: '创新理念', en: 'Innovative Concept', ja: '革新的なコンセプト' },
  innovativeConceptDesc: { zh: '我们不断创新，将电影、餐饮和旅行等不同元素有机结合，创造出独特的体验模式。', en: 'We continue to innovate, organically combining different elements such as movies, dining and travel to create a unique experience model.', ja: '当社は常に革新を続け、映画、食事、旅行などのさまざまな要素を有機的に組み合わせ、ユニークな体験モデルを創造しています。' },
  personalizedService: { zh: '个性化服务', en: 'Personalized Service', ja: 'パーソナライズされたサービス' },
  personalizedServiceDesc: { zh: '我们关注每一位顾客的需求，提供个性化的服务和定制化的解决方案，让您的体验更加独特。', en: 'We pay attention to the needs of every customer, providing personalized services and customized solutions to make your experience more unique.', ja: '当社はすべての顧客のニーズに注意を払い、パーソナライズされたサービスとカスタマイズされたソリューションを提供し、お客様の体験をよりユニークなものにします。' },
  readyToExperience: { zh: '准备好体验我们的服务了吗？', en: 'Ready to experience our services?', ja: '当社のサービスを体験する準備はできましたか？' },
  bookOurService: { zh: '立即预订我们的服务，开启一段难忘的"电影+餐饮"创新体验之旅。我们期待为您服务！', en: 'Book our services now and start an unforgettable "movie + dining" innovative experience journey. We look forward to serving you!', ja: '今すぐ当社のサービスを予約し、忘れられない「映画+ダイニング」の革新的な体験の旅を始めましょう。ご利用をお待ちしております！' },
  
  // 为什么选择我们页面翻译
  whyChooseUsDesc: { zh: '在FlickNibble House，我们致力于为您提供独特、高品质的"电影+餐饮"创新体验。了解为什么越来越多的人选择我们，以及我们如何为您创造价值。', en: 'At FlickNibble House, we are committed to providing you with a unique, high-quality "movie + dining" innovative experience. Learn why more and more people choose us and how we create value for you.', ja: 'FlickNibble Houseでは、ユニークで高品質な「映画+ダイニング」の革新的な体験を提供することに専念しています。なぜますます多くの人が私たちを選択しているのか、そして私たちがどのようにお客様に価値を创造しているのかをご覧ください。' },
  coreAdvantages: { zh: '我们的核心优势', en: 'Our Core Advantages', ja: '私たちの中核的優位性' },
  knowMore: { zh: '了解更多', en: 'Know More', ja: 'もっと知る' },
  compareWithOthers: { zh: '我们与其他品牌的区别', en: 'How We Differ From Other Brands', ja: '他のブランドとの違い' },
  serviceFeaturesHeader: { zh: '服务特点', en: 'Service Features', ja: 'サービスの特徴' },
  traditionalCinema: { zh: '传统电影院', en: 'Traditional Cinema', ja: '伝統的な映画館' },
  regularRestaurant: { zh: '普通餐厅', en: 'Regular Restaurant', ja: '普通のレストラン' },
  readyToChoose: { zh: '准备好体验我们的服务了吗？', en: 'Ready to experience our services?', ja: '当社のサービスを体験する準備はできましたか？' },
  bookJapanTour: { zh: '预订日本旅游套餐', en: 'Book Japan Tour Package', ja: '日本ツアーパッケージを予約' },
  
  // 联系我们页面翻译
  detailedContact: { zh: '以下是我们的详细联系方式和办公时间，欢迎随时与我们联系。', en: 'The following are our detailed contact information and office hours. Please feel free to contact us at any time.', ja: '以下は当社の詳細な連絡先と営業時間です。いつでもお気軽にお問い合わせください。' },
  headquartersContact: { zh: '总部联系方式', en: 'Headquarters Contact Information', ja: '本社の連絡先' },
  address: { zh: '地址', en: 'Address', ja: '住所' },
  phone: { zh: '电话', en: 'Phone', ja: '電話' },
  email: { zh: '电子邮箱', en: 'Email', ja: 'メール' },
  officeHours: { zh: '办公时间', en: 'Office Hours', ja: '営業時間' },
  branchContact: { zh: '分店联系方式', en: 'Branch Contact Information', ja: '支店の連絡先' },
  shanghaiFlagship: { zh: '上海旗舰店', en: 'Shanghai Flagship Store', ja: '上海フラッグシップストア' },
  beijingBranch: { zh: '北京分店', en: 'Beijing Branch', ja: '北京支店' },
  guangzhouBranch: { zh: '广州分店', en: 'Guangzhou Branch', ja: '広州支店' },
  tokyoBranch: { zh: '东京分店', en: 'Tokyo Branch', ja: '東京支店' },
  ourLocation: { zh: '我们的位置', en: 'Our Location', ja: '私たちの場所' },
  transportationInfo: { zh: '交通信息', en: 'Transportation Information', ja: '交通情報' },
  shanghaiTransport: { zh: '上海旗舰店交通指南', en: 'Shanghai Flagship Store Transportation Guide', ja: '上海フラッグシップストア交通ガイド' },
  subway: { zh: '地铁', en: 'Subway', ja: '地下鉄' },
  bus: { zh: '公交', en: 'Bus', ja: 'バス' },
  driving: { zh: '自驾', en: 'Driving', ja: '運転' },
  otherBranchesTransport: { zh: '其他分店交通指南', en: 'Other Branches Transportation Guide', ja: 'その他の支店の交通ガイド' },
  emergencyContact: { zh: '紧急联系', en: 'Emergency Contact', ja: '緊急連絡' },
  inCaseOfEmergency: { zh: '如有紧急情况，请通过以下方式联系我们：', en: 'In case of emergency, please contact us through the following methods:', ja: '緊急事態の場合は、以下の方法でお問い合わせください：' },
  lookingForwardToMeet: { zh: '期待与您相见', en: 'Looking Forward to Meeting You', ja: 'お会いできるのを楽しみにしています' },
  contactUsMessage: { zh: '无论您是前来体验我们的服务，还是洽谈合作，我们都热情欢迎您的到来。如有任何疑问或需要帮助，请随时联系我们。', en: 'Whether you come to experience our services or discuss cooperation, we warmly welcome your arrival. If you have any questions or need help, please feel free to contact us at any time.', ja: '当社のサービスを体験しに来られる方、ご協力についてご相談される方、どなたに対しても温かくお迎えしています。ご質問やお手伝いが必要な場合は、いつでもお気軽にお問い合わせください。' },
  sendMessage: { zh: '发送消息', en: 'Send Message', ja: 'メッセージを送る' },
  
  // 日本旅游套餐页面翻译
  itineraryHighlights: { zh: '行程亮点', en: 'Itinerary Highlights', ja: '行程の見どころ' },
  culinaryExperience: { zh: '美食体验', en: 'Culinary Experience', ja: '美食体験' },
  culinaryExperienceDesc: { zh: '品尝日本各地特色美食，包括怀石料理、寿司、拉面、烤鳗鱼等，满足您的味蕾享受。', en: 'Taste the specialties of various regions in Japan, including kaiseki cuisine, sushi, ramen, grilled eel, etc., to satisfy your taste buds.', ja: '懐石料理、寿司、ラーメン、焼きうなぎなど、日本各地の特色ある美食を味わい、味覚を満足させましょう。' },
  movieThemeActivities: { zh: '电影主题活动', en: 'Movie Theme Activities', ja: '映画テーマのアクティビティ' },
  movieThemeActivitiesDesc: { zh: '参与独特的电影主题活动，包括电影主题餐厅用餐、经典电影回顾、电影场景参观等。', en: 'Participate in unique movie-themed activities, including dining at movie-themed restaurants, classic movie reviews, movie scene visits, etc.', ja: '映画テーマのレストランでの食事、クラシック映画のレビュー、映画の現場見学など、ユニークな映画テーマのアクティビティに参加してください。' },
  culturalExperience: { zh: '文化体验', en: 'Cultural Experience', ja: '文化体験' },
  culturalExperienceDesc: { zh: '体验日本传统文化，包括和服租赁、茶道体验、温泉浴、艺伎表演等，深入了解日本文化。', en: 'Experience traditional Japanese culture, including kimono rental, tea ceremony experience, hot spring baths, geisha performances, etc., to deeply understand Japanese culture.', ja: '着物レンタル、茶道体験、温泉浴、芸者公演など、日本の伝統文化を体験し、日本文化を深く理解してください。' },
  detailedItinerary: { zh: '详细行程安排', en: 'Detailed Itinerary', ja: '詳細な行程' },
  day: { zh: '第', en: 'Day', ja: '日目' },
  day1Title: { zh: '东京抵达', en: 'Arrival in Tokyo', ja: '東京到着' },
  day1Desc: { zh: '抵达东京成田国际机场，专车接机后前往酒店办理入住手续。晚上在酒店附近的特色餐厅享用欢迎晚餐。', en: 'Arrive at Tokyo Narita International Airport, transfer to the hotel by private car to check in. Enjoy a welcome dinner at a featured restaurant near the hotel in the evening.', ja: '東京成田国際空港に到着し、専用車でホテルに移動してチェックイン手続きを行います。夜はホテル近くの特色レストランで歓迎ディナーを楽しみます。' },
  day1Activities: { zh: '机场接机,酒店入住,欢迎晚餐', en: 'Airport Pick-up,Hotel Check-in,Welcome Dinner', ja: '空港ピックアップ,ホテルチェックイン,ウェルカムディナー' },
  day2Title: { zh: '东京电影美食之旅', en: 'Tokyo Movie Food Tour', ja: '東京映画美食ツアー' },
  day2Desc: { zh: '上午游览东京著名景点，下午体验FlickNibble House东京店的电影主题午餐，晚上在东京塔欣赏夜景并享用浪漫晚餐。', en: 'Morning tour of Tokyo\'s famous attractions, afternoon experience of the movie-themed lunch at FlickNibble House Tokyo store, evening enjoying the night view at Tokyo Tower and romantic dinner.', ja: '午前中は東京の有名観光地を観光し、午後はFlickNibble House東京店で映画テーマのランチを体験し、夜は東京タワーで夜景を鑑賞し、ロマンチックなディナーを楽しみます。' },
  day2Activities: { zh: '东京景点游览,电影主题午餐,东京塔夜景,浪漫晚餐', en: 'Tokyo Attractions Tour,Movie Theme Lunch,Tokyo Tower Night View,Romantic Dinner', ja: '東京観光スポットツアー,映画テーマランチ,東京タワー夜景,ロマンチックディナー' },
  day3Title: { zh: '东京-京都', en: 'Tokyo-Kyoto', ja: '東京-京都' },
  day3Desc: { zh: '早上乘坐新干线前往京都，下午游览金阁寺和岚山竹林，晚上在传统日式旅馆享用怀石料理并体验温泉。', en: 'Morning transfer to Kyoto by Shinkansen, afternoon tour of Kinkaku-ji Temple and Arashiyama Bamboo Grove, evening enjoying kaiseki cuisine and hot spring experience at a traditional Japanese inn.', ja: '朝早く新幹線で京都へ移動し、午後は金閣寺と嵐山竹林を観光し、夜は伝統的な旅館で懐石料理を楽しみ、温泉を体験します。' },
  day3Activities: { zh: '新干线体验,金阁寺游览,岚山竹林漫步,温泉体验,怀石料理晚餐', en: 'Shinkansen Experience,Kinkaku-ji Temple Tour,Arashiyama Bamboo Grove Walk,Hot Spring Experience,Kaiseki Cuisine Dinner', ja: '新幹線体験,金閣寺観光,嵐山竹林散歩,温泉体験,懐石料理ディナー' },
  packageInclusion: { zh: '套餐包含内容', en: 'Package Inclusion', ja: 'パッケージに含まれるもの' },
  included: { zh: '已包含', en: 'Included', ja: '含まれている' },
  notIncluded: { zh: '不包含', en: 'Not Included', ja: '含まれていない' },
  roundTripFlights: { zh: '往返国际机票（经济舱）', en: 'Round-trip international flights (economy class)', ja: '往復国際航空券（エコノミークラス）' },
  hotelAccommodation: { zh: '全程4-5星级酒店住宿', en: '4-5 star hotel accommodation throughout', ja: '4-5つ星ホテルの宿泊' },
  breakfast: { zh: '酒店早餐', en: 'Hotel breakfast', ja: 'ホテル朝食' },
  specialDinners: { zh: '5次特色电影主题晚餐', en: '5 special movie-themed dinners', ja: '5回の特別な映画テーマディナー' },
  transportation: { zh: '全程旅游巴士接送', en: 'Tour bus transfers throughout', ja: '全行程の観光バス送迎' },
  attractionTickets: { zh: '行程中所列景点门票', en: 'Tickets for attractions listed in the itinerary', ja: '行程に記載されている観光地のチケット' },
  guideService: { zh: '专业导游服务', en: 'Professional guide service', ja: '専門ガイドサービス' },
  visaFee: { zh: '日本旅游签证费用', en: 'Japan tourist visa fee', ja: '日本観光ビザ料金' },
  personalExpenses: { zh: '个人消费（如购物、额外餐饮等）', en: 'Personal expenses (such as shopping, additional dining, etc.)', ja: '個人的な支出（ショッピング、追加の食事など）' },
  otherExpenses: { zh: '行程中未提及的其他费用', en: 'Other expenses not mentioned in the itinerary', ja: '行程に記載されていないその他の費用' },
  travelInsurance: { zh: '旅游保险（建议购买）', en: 'Travel insurance (recommended to purchase)', ja: '旅行保険（購入を推奨）' },
  passportFee: { zh: '护照办理费用', en: 'Passport application fee', ja: 'パスポート申請料' },
  forceMajeure: { zh: '因天气、航班延误等不可抗力因素产生的额外费用', en: 'Additional expenses due to force majeure such as weather, flight delays, etc.', ja: '天候、フライト遅延などの不可抗力による追加費用' },
  price: { zh: '价格', en: 'Price', ja: '価格' },
  discountInfo: { zh: '（双人同行可享受9折优惠）', en: '(10% discount for double occupancy)', ja: '（2人での申し込みで10%割引）' },
  bookingNotes: { zh: '预订须知', en: 'Booking Notes', ja: '予約に関する注意事項' },
  bookingTime: { zh: '预订时间', en: 'Booking Time', ja: '予約時間' },
  bookingTimeDesc: { zh: '建议至少提前3个月预订，以确保您能获得理想的位置。', en: 'It is recommended to book at least 3 months in advance to ensure you get your desired position.', ja: 'お客様が希望のポジションを確保できるよう、少なくとも3か月前に予約することをお勧めします。' },
  cancellationPolicy: { zh: '取消政策', en: 'Cancellation Policy', ja: 'キャンセルポリシー' },
  cancellationPolicyDesc: { zh: '出发前30天以上取消，退还80%费用；出发前15-29天取消，退还50%费用；出发前14天内取消，不予退款。', en: 'Cancel more than 30 days before departure, refund 80% of the cost; cancel 15-29 days before departure, refund 50% of the cost; cancel within 14 days before departure, no refund.', ja: '出発30日前までにキャンセルの場合、費用の80%を返金；出発15-29日前にキャンセルの場合、費用の50%を返金；出発14日以内にキャンセルの場合、返金はありません。' },
  visaInfo: { zh: '签证信息', en: 'Visa Information', ja: 'ビザ情報' },
  visaInfoDesc: { zh: '请确保您的护照有效期在6个月以上，并提供真实准确的个人信息用于签证申请。', en: 'Please ensure that your passport is valid for more than 6 months and provide true and accurate personal information for visa application.', ja: 'パスポートの有効期間が6か月以上あることを確認し、ビザ申請に真実かつ正確な個人情報を提供してください。' },
  paymentMethod: { zh: '支付方式', en: 'Payment Method', ja: '支払い方法' },
  paymentMethodDesc: { zh: '支持信用卡、支付宝、微信支付等多种支付方式。预订时需支付30%定金，出发前1个月支付剩余70%尾款。', en: 'Supports multiple payment methods such as credit card, Alipay, WeChat Pay, etc. A 30% deposit is required when booking, and the remaining 70% balance is paid 1 month before departure.', ja: 'クレジットカード、アリペイ、WeChat Payなど、複数の支払い方法をサポートしています。予約時に30%の頭金が必要で、出発1か月前に残りの70%の残高を支払います。' },
  specialNote: { zh: '特别说明', en: 'Special Note', ja: '特別な注意事項' },
  specialNoteDesc: { zh: '我们可能会根据实际情况对行程进行微调，但不会减少行程内容。如遇不可抗力因素导致行程无法进行，我们将尽力为您安排替代方案。', en: 'We may make minor adjustments to the itinerary according to actual conditions, but will not reduce the content of the itinerary. In case of force majeure factors that prevent the itinerary from proceeding, we will try our best to arrange alternative plans for you.', ja: '実際の状況に応じて行程を若干調整する場合がありますが、行程の内容を減らすことはありません。不可抗力により行程が進行できない場合、最善を尽くして代替案を手配いたします。' },
  readyForJourneyTitle: { zh: '准备好开启您的日本浪漫之旅了吗？', en: 'Ready to start your romantic journey to Japan?', ja: 'ロマンチックな日本旅行を始める準備はできましたか？' },
  limitedAvailability: { zh: '限量名额，先到先得！立即预订"10天5城日本夏日限量游"，开启一段难忘的光影与味蕾之旅。', en: 'Limited spots, first come first served! Book the "10-Day 5-City Japan Summer Limited Tour" now and start an unforgettable journey of light, shadow and taste buds.', ja: '限定席数、先着順！「10日5都市日本サマー限定ツアー」を今すぐ予約して、光と影と味覚の忘れられない旅を始めましょう。' },
};

// 定义语言上下文类型
interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

// 创建语言上下文
export const LanguageContext = createContext<LanguageContextType>({
  language: 'zh',
  setLanguage: () => {},
  t: (key) => key,
});

// 语言上下文提供者组件
interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  // 从本地存储获取语言设置，默认为中文
  const [language, setLanguage] = useState<Language>(() => {
    const savedLang = localStorage.getItem('preferredLanguage') as Language;
    return savedLang || 'zh';
  });

  // 当语言改变时，保存到本地存储
  useEffect(() => {
    localStorage.setItem('preferredLanguage', language);
  }, [language]);

  // 翻译函数
  const t = (key: string): string => {
    return translations[key]?.[language] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};