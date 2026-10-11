import jeddahHeroTruckImg from '../assets/images/jeddah_modern_3d_hero_1791684159311.jpg';
import furnitureMattressHaulImg from '../assets/images/jeddah_luxury_villa_salon_haul_1791684167973.jpg';
import applianceAcRemovalImg from '../assets/images/jeddah_smart_appliance_ac_haul_1791684177222.jpg';
import rooftopGarageCleanoutImg from '../assets/images/jeddah_rooftop_terrace_cleanout_1791684188543.jpg';
import jeddahPenthouseDebrisImg from '../assets/images/jeddah_penthouse_renovation_1791682649664.jpg';
import commercialOfficeClearImg from '../assets/images/jeddah_corniche_office_tower_1791684199865.jpg';
import recyclingCenterImg from '../assets/images/vision_2030_circular_facility_1791682660217.jpg';
import majlisWhiteGloveImg from '../assets/images/white_glove_majlis_clearance_1791682626425.jpg';
import daylightDynaTruckImg from '../assets/images/jeddah_junk_removal_hero_1791683406052.jpg';
import daylightSofaHaulImg from '../assets/images/jeddah_furniture_mattress_haul_1791683416167.jpg';

export type PageId =
  | 'home'
  | 'furniture-mattress'
  | 'appliances-ac'
  | 'villa-cleanout'
  | 'rooftop-garage'
  | 'renovation-debris'
  | 'commercial-office'
  | 'truck-pricing'
  | 'jeddah-districts'
  | 'book-pickup';

export type Lang = 'en' | 'ar';

export const COMPANY_NAME = 'Jeddah Junk Removal';
export const JEDDAH_PHONE_LOCAL = '0575771358';
export const JEDDAH_PHONE_DISPLAY = '057 577 1358';
export const JEDDAH_PHONE_INTL = '+966 57 577 1358';
export const JEDDAH_WHATSAPP_URL = 'https://wa.me/966575771358';

export const buildWhatsAppLink = (message?: string): string => {
  if (!message) {
    return 'https://wa.me/966575771358?text=' + encodeURIComponent(
      'Hello Jeddah Junk Removal (0575771358), I need a pickup in Jeddah.'
    );
  }
  return `https://wa.me/966575771358?text=${encodeURIComponent(message)}`;
};

export const GENERATED_IMAGES = {
  jeddahHeroTruck: jeddahHeroTruckImg,
  furnitureMattressHaul: furnitureMattressHaulImg,
  applianceAcRemoval: applianceAcRemovalImg,
  rooftopGarageCleanout: rooftopGarageCleanoutImg,
  jeddahPenthouseDebris: jeddahPenthouseDebrisImg,
  commercialOfficeClear: commercialOfficeClearImg,
  recyclingCenter: recyclingCenterImg,
  majlisWhiteGlove: majlisWhiteGloveImg,
  daylightDynaTruck: daylightDynaTruckImg,
  daylightSofaHaul: daylightSofaHaulImg,
};

export interface PageMeta {
  id: PageId;
  index: string;
  shortTitle: string;
  shortTitleAr: string;
  fullTitle: string;
  fullTitleAr: string;
  subtitle: string;
  subtitleAr: string;
}

export const SUITE_PAGES: PageMeta[] = [
  {
    id: 'home',
    index: '01',
    shortTitle: 'Home · Jeddah',
    shortTitleAr: 'الرئيسية · جدة',
    fullTitle: '01. Jeddah #1 Same-Day Junk Removal & Old Furniture Hauling',
    fullTitleAr: '01. شركة إزالة الأثاث القديم والمخلفات في جدة (خدمة فورية)',
    subtitle: 'Fast 60-minute pickup across all Jeddah districts. We haul away old sofas, mattresses, broken appliances, ACs, rooftop clutter, and renovation rubbish—with zero mess.',
    subtitleAr: 'وصول خلال 60 دقيقة لجميع أحياء جدة. نزيل الكنب القديم، المراتب، الثلاجات، المكيفات، مخلفات الأسطح والأحواش والتشطيبات.',
  },
  {
    id: 'furniture-mattress',
    index: '02',
    shortTitle: 'Old Furniture',
    shortTitleAr: 'إزالة الأثاث والكنب',
    fullTitle: '02. Old Furniture, Majlis, Sofa & Mattress Removal in Jeddah',
    fullTitleAr: '02. إزالة الأثاث القديم والكنب والمجالس والمراتب في جدة',
    subtitle: 'Full dismantling and heavy lifting for worn-out L-shape sofas, Arabic Majlis sets, king beds, wardrobes, dining tables, and carpets from any floor in Jeddah.',
    subtitleAr: 'فك وتحميل الكنب القديم، أطقم المجالس، غرف النوم، الدواليب، المراتب والسجاد من الفلل والشقق في جدة.',
  },
  {
    id: 'appliances-ac',
    index: '03',
    shortTitle: 'Appliances & AC',
    shortTitleAr: 'الثلاجات والمكيفات',
    fullTitle: '03. Broken Appliances, Fridge, Washer & AC Removal Jeddah',
    fullTitleAr: '03. رفع الثلاجات والغسالات والمكيفات الخربانة والقديمة بجدة',
    subtitle: 'Safe disconnection and hauling of old refrigerators, deep freezers, washing machines, split & window ACs, ovens, treadmills, and electronic waste.',
    subtitleAr: 'فك ونقل الثلاجات العاطلة، الغسالات، الأفران، مكيفات الشباك والاسبليت، وأجهزة الرياضة المنزلية في جدة.',
  },
  {
    id: 'villa-cleanout',
    index: '04',
    shortTitle: 'Villa Cleanout',
    shortTitleAr: 'إخلاء الفلل والقصور',
    fullTitle: '04. VIP Villa, Compound & Penthouse Full Cleanouts in Jeddah',
    fullTitleAr: '04. إخلاء شامل للفلل والقصور والمجمعات السكنية الفاخرة بجدة',
    subtitle: 'White-glove full property junk removal for affluent villas in Obhur, Al-Basateen, Al-Shati, Al-Rawdah, and expat compounds—complete with marble floor protection.',
    subtitleAr: 'خدمة خاصة لإخلاء الفلل والقصور في أبحر والبساتين والشاطئ والروضة والمجمعات السكنية مع حماية الأرضيات الرخامية.',
  },
  {
    id: 'rooftop-garage',
    index: '05',
    shortTitle: 'Rooftop & Garage',
    shortTitleAr: 'تنظيف السطح والحوش',
    fullTitle: '05. Rooftop (Sateh), Hosh, Garage & Storage Room Junk Jeddah',
    fullTitleAr: '05. تنظيف وإزالة كراكيب السطح والحوش والكراج والمستودعات بجدة',
    subtitle: 'Reclaim your villa rooftop (Sateh), courtyard (Hosh), driver rooms, and garage. We clear years of accumulated boxes, scrap metal, broken patio chairs, and garden waste.',
    subtitleAr: 'استعد مساحة السطح والحوش والكراج في فيلتك بجدة. نزيل الكراتين القديمة، الخردة، الأثاث الخارجي التالف، ومخلفات الحدائق.',
  },
  {
    id: 'renovation-debris',
    index: '06',
    shortTitle: 'Renovation Rubbish',
    shortTitleAr: 'مخلفات الترميم',
    fullTitle: '06. Renovation Debris, Tile, Marble & Wood Hauling in Jeddah',
    fullTitleAr: '06. إزالة مخلفات الترميم والتشطيبات والسيراميك والأخشاب بجدة',
    subtitle: 'Jeddah Amanah (Baladiya) compliant removal of post-renovation bags, broken ceramic tiles, gypsum board, old kitchen cabinets, doors, and bathroom sanitaryware.',
    subtitleAr: 'نقل مخلفات البناء والترميم والجبس والسيراميك والدواليب القديمة بتصريح رسمي يحميك من غرامات البلدية في جدة.',
  },
  {
    id: 'commercial-office',
    index: '07',
    shortTitle: 'Office & Shops',
    shortTitleAr: 'المكاتب والمحلات',
    fullTitle: '07. Commercial Office, Restaurant & Warehouse Junk Jeddah',
    fullTitleAr: '07. إخلاء المكاتب والمطاعم والمحلات والمستودعات في جدة',
    subtitle: 'After-hours junk removal for offices on Tahlia St, King Abdulaziz Rd, Sari St, Red Sea Mall, and Al-Khumrah warehouses—desks, cubicles, shelving, and commercial chillers.',
    subtitleAr: 'إزالة أثاث المكاتب القديم، معدات المطاعم والكافيهات، ورفوف المستودعات في شارع التحلية وطريق الملك والخمرة بجدة.',
  },
  {
    id: 'truck-pricing',
    index: '08',
    shortTitle: '3D Load Visualizer',
    shortTitleAr: 'محاكي الشاحنة 3D',
    fullTitle: '08. Interactive 3D Truck Load Visualizer & Volume Calculator',
    fullTitleAr: '08. محاكي شاحنة الدينا ثلاثي الأبعاد وحاسبة الحجم في جدة',
    subtitle: 'Select your items or truck load size in 3D to calculate exact cubic meter volume and crew requirements for a fast, free Jeddah pickup quote.',
    subtitleAr: 'حدد الأغراض أو حجم الشاحنة بتقنية 3D لمعرفة الحجم بالمتر المكعب وعدد العمال المطلوبين والحصول على عرض فوري مجاني.',
  },
  {
    id: 'jeddah-districts',
    index: '09',
    shortTitle: 'Jeddah Areas (36)',
    shortTitleAr: 'أحياء جدة (36 حي)',
    fullTitle: '09. All 36 Jeddah Neighborhoods & Gated Compounds We Serve',
    fullTitleAr: '09. تغطية شاملة لجميع أحياء شمال ووسط وجنوب جدة والمجمعات',
    subtitle: 'Stationed Dyna trucks in Obhur North, Al-Basateen, Al-Shati, Al-Rawdah, Al-Zahra, Al-Salamah, Al-Hamra, Al-Mohammadiyyah, and Al-Hamdaniyah for 60-minute arrival.',
    subtitleAr: 'شاحنات متمركزة في أبحر، البساتين، الشاطئ، الروضة، الزهراء، السلامة، الحمراء، المحمدية، والحمدانية للوصول خلال 60 دقيقة.',
  },
  {
    id: 'book-pickup',
    index: '10',
    shortTitle: 'Book Pickup',
    shortTitleAr: 'احجز الآن بجدة',
    fullTitle: '10. Book Same-Day Jeddah Junk Pickup or Free Site Inspection',
    fullTitleAr: '10. حجز موعد فوري لإزالة الأثاث والمخلفات في جدة',
    subtitle: 'Confirm your Jeddah pickup slot in 60 seconds, generate a compound gate pass for your security guard, or request a free on-site inspection.',
    subtitleAr: 'احجز شاحنتك الآن في جدة خلال دقيقة، واحصل على تصريح دخول للمجمع السكني أو اطلب معاينة مجانية.',
  },
];

export interface SliderFeatureCard {
  id: string;
  badge: string;
  title: string;
  titleAr: string;
  description: string;
  descriptionAr: string;
  serviceHighlight: string;
  responseTime: string;
  image: string;
  targetPage: PageId;
  bulletPoints: string[];
}

export const JEDDAH_SLIDER_FEATURES: SliderFeatureCard[] = [
  {
    id: 'slide-furniture',
    badge: 'Slide 01 / 06 · Most Popular in Jeddah',
    title: 'Old Sofa, Majlis, Bed & Mattress Removal Jeddah',
    titleAr: 'إزالة الكنب القديم والمجالس وغرف النوم والمراتب بجدة',
    description:
      'Upgrading your villa salon in Al-Rawdah or Obhur? Our uniformed 2-to-4 man crew dismantles heavy L-shape couches, Arabic Majlis sets, king beds, and wardrobes, carries them down stairs or elevators without scratching walls, and hauls them away immediately.',
    descriptionAr:
      'هل تقوم بتجديد صالون الفيلا في الروضة أو أبحر؟ يقوم فريقنا بفك وتحميل الكنب القديم والمجالس وغرف النوم والمراتب دون خدش الجدران أو الرخام.',
    serviceHighlight: 'Includes Carpentry Dismantling & Floor Protection',
    responseTime: '45–60 Mins Arrival in Jeddah',
    image: GENERATED_IMAGES.furnitureMattressHaul,
    targetPage: 'furniture-mattress',
    bulletPoints: [
      'Full carpentry dismantling of bulky IKEA / Italian wardrobes & beds included',
      'Protective floor runners laid across villa marble & apartment corridors',
      'Usable furniture donated to Jeddah Al-Birr / Mawakeb Al-Ajr charities',
    ],
  },
  {
    id: 'slide-appliances',
    badge: 'Slide 02 / 06 · Heavy Hauling & Scrap AC',
    title: 'Broken Fridge, Washing Machine & Split AC Removal',
    titleAr: 'رفع الثلاجات والغسالات والمكيفات القديمة والخربانة بجدة',
    description:
      'Don’t let dead refrigerators, rusty washing machines, old ovens, or noisy window/split ACs clutter your kitchen or balcony. We safely disconnect water/power lines, use rubber-wheeled appliance dollies, and haul heavy units to Jeddah recycling facilities.',
    descriptionAr:
      'لا تترك الثلاجات العاطلة أو الغسالات والمكيفات القديمة تشوه مطبخك أو حوش الفيلا. نقوم بفكها ونقلها بعربات مخصصة.',
    serviceHighlight: 'Safe AC Uninstallation & Heavy Dolly Transport',
    responseTime: 'Same-Day Jeddah Dispatch',
    image: GENERATED_IMAGES.applianceAcRemoval,
    targetPage: 'appliances-ac',
    bulletPoints: [
      'Safe Split & Window AC uninstallation including copper pipe capping',
      'Heavy Sub-Zero fridges, chest freezers, dishwashers & water coolers',
      'Home gym treadmills, elliptical machines, and old electronics / TVs',
    ],
  },
  {
    id: 'slide-rooftop',
    badge: 'Slide 03 / 06 · Sateh & Hosh Specialists',
    title: 'Villa Rooftop (Sateh), Garage & Courtyard Cleanout',
    titleAr: 'تنظيف وإزالة كراكيب السطح (السطوح) والحوش والكراج بجدة',
    description:
      'Jeddah villas accumulate years of boxes, broken outdoor seating, old carpets, spare tires, and scrap metal on the rooftop (Sateh) and garage. Our crew climbs up, bags all loose rubbish, carries everything down, and sweeps your tiled floor spotless.',
    descriptionAr:
      'تراكمت الكراكيب والكراتين والأثاث التالف فوق سطح الفيلا أو في الحوش والكراج؟ فريقنا يتولى تنزيلها وتنظيف المكان بالكامل.',
    serviceHighlight: 'Full Bagging, Stairs Carrying & Broom Sweep',
    responseTime: '2–4 Hours Full Sateh Clearance',
    image: GENERATED_IMAGES.rooftopGarageCleanout,
    targetPage: 'rooftop-garage',
    bulletPoints: [
      'Complete clearing of 3rd-floor villa rooftops (Sateh) & maid/driver annexes',
      'Dismantling of torn outdoor pergolas, tents (Khaymah), and garden sheds',
      'Heavy-duty broom and blower cleanup included after hauling',
    ],
  },
  {
    id: 'slide-villa-vip',
    badge: 'Slide 04 / 06 · Affluent Estates & Compounds',
    title: 'VIP Full Villa & Expat Compound Move-Out Cleanout',
    titleAr: 'إخلاء شامل للفلل الفاخرة والمجمعات السكنية (الكومباوند) بجدة',
    description:
      'Tailored for high-end residences in Al-Basateen, Obhur North, Al-Shati, and gated compounds (Arabian Homes, Sharbatly, Red Sea). We clear entire properties in a single day using enclosed box trucks and pre-registered gate passes.',
    descriptionAr:
      'خدمة VIP لإخلاء الفلل في البساتين وأبحر الشمالية والشاطئ والمجمعات المغلقة باستخدام شاحنات مغلقة وتصاريح دخول جاهزة.',
    serviceHighlight: 'Enclosed Jumbo Fleet · Zero-Scratch Guarantee',
    responseTime: 'Pre-Cleared Compound Gate Passes',
    image: GENERATED_IMAGES.jeddahHeroTruck,
    targetPage: 'villa-cleanout',
    bulletPoints: [
      'Uniformed, background-checked crew with supervisor on every villa job',
      'Zero-scratch guarantee for marble stairs, glass doors & compound roads',
      'Same-day handover ready for real estate inspection or new tenants',
    ],
  },
  {
    id: 'slide-renovation',
    badge: 'Slide 05 / 06 · Contractors & Homeowners',
    title: 'Renovation Rubbish, Broken Tiles, Wood & Gypsum Hauling',
    titleAr: 'إزالة مخلفات الترميم والتشطيبات والسيراميك والأخشاب بجدة',
    description:
      'Remodeling a bathroom, kitchen, or penthouse in Jeddah? Avoid municipal street-dumping penalties. We haul bagged tile rubble, marble slabs, gypsum partitions, old doors, and sanitaryware directly to authorized Jeddah Amanah disposal zones.',
    descriptionAr:
      'تجنب مخالفات أمانة جدة عند ترميم فيلتك أو شقتك. نقوم بتحميل ونقل أكياس الدفان، السيراميك المكسر، الجبس بورد، والأخشاب للمرادم الرسمية.',
    serviceHighlight: 'Official Jeddah Amanah Permitted Disposal',
    responseTime: 'Same-Day Debris Extraction',
    image: GENERATED_IMAGES.jeddahPenthouseDebris,
    targetPage: 'renovation-debris',
    bulletPoints: [
      'Heavy-duty canvas sacks provided for loose tile, cement & gypsum debris',
      'Removal of old bathtubs, jacuzzis, sinks, kitchen cabinets & aluminium frames',
      'Clean loading directly into truck—no ugly street skip bins blocking your gate',
    ],
  },
  {
    id: 'slide-commercial',
    badge: 'Slide 06 / 06 · Tahlia St, King Rd & Warehouses',
    title: 'Office, Showroom, Cafe & Warehouse Junk Clearance',
    titleAr: 'إخلاء المكاتب والشركات والمطاعم والمستودعات في جدة',
    description:
      'Fast commercial junk removal for offices on King Abdulaziz Road, Tahlia Street, Madinah Road, and warehouses in Al-Khumrah. We remove workstations, chairs, shelving, expired stock, and commercial kitchen equipment—day or night.',
    descriptionAr:
      'إخلاء سريع للمكاتب في طريق الملك وشارع التحلية وطريق المدينة ومستودعات الخمرة، مع توفر خدمة العمل الليلي للمولات والأبراج.',
    serviceHighlight: 'Corporate SLA & Official Handover Certificate',
    responseTime: 'Night-Shift Available (10 PM – 5 AM)',
    image: GENERATED_IMAGES.commercialOfficeClear,
    targetPage: 'commercial-office',
    bulletPoints: [
      'Official corporate documentation & building management permit coordination',
      'Freight elevator protection & acoustic-damped rolling bins',
      'Confidential paper archive shredding & old IT computer/printer disposal',
    ],
  },
];

export interface TruckLoadTier {
  id: string;
  name: string;
  nameAr: string;
  fractionLabel: string;
  fillPercentage: number;
  volumeM3: number;
  maxWeightKg: number;
  dispatchBadge: string;
  equivalentTo: string;
  equivalentToAr: string;
  crewIncluded: string;
  idealFor: string;
}

export const JEDDAH_TRUCK_LOADS: TruckLoadTier[] = [
  {
    id: 'min-load',
    name: 'Single Item / Minimum Curbside or Indoor Pickup',
    nameAr: 'قطعة واحدة / رفع سريع للأغراض المفردة في جدة',
    fractionLabel: 'Min Load (1–2 Items)',
    fillPercentage: 12,
    volumeM3: 2.0,
    maxWeightKg: 250,
    dispatchBadge: 'Express 45-Min Pickup',
    equivalentTo: '1 Old Sofa OR 1 Refrigerator OR 1 King Bed + Mattress',
    equivalentToAr: 'كنبة واحدة أو ثلاجة قديمة أو سرير مع مرتبة',
    crewIncluded: '2 Uniformed Workers + Loading + Sweep-Up',
    idealFor: 'Quickly getting rid of 1–2 bulky items in any Jeddah apartment or villa',
  },
  {
    id: 'quarter-load',
    name: '1/4 Closed Dyna Truck Load',
    nameAr: 'ربع شاحنة دينا مغلقة (1/4 حمولة)',
    fractionLabel: '1/4 Truck Load',
    fillPercentage: 25,
    volumeM3: 4.5,
    maxWeightKg: 600,
    dispatchBadge: 'Small Room Cleanout',
    equivalentTo: '3-Seater Sofa + 2 Armchairs + Old TV Table + 6 Junk Boxes',
    equivalentToAr: 'طقم كنب صغير + طاولة تلفزيون + 6 كراتين كراكيب',
    crewIncluded: '2 Uniformed Workers + Dismantling + Loading',
    idealFor: 'Clearing out a spare bedroom, maid room, or small balcony in Jeddah',
  },
  {
    id: 'half-load',
    name: '1/2 Closed Dyna Truck Load (Most Popular)',
    nameAr: 'نصف شاحنة دينا مغلقة (1/2 حمولة - الأكثر طلباً)',
    fractionLabel: '1/2 Truck Load',
    fillPercentage: 50,
    volumeM3: 9.0,
    maxWeightKg: 1400,
    dispatchBadge: 'Salon / Majlis Standard',
    equivalentTo: 'Full Majlis Sofa Set + King Bedroom Wardrobe + Fridge + Washer',
    equivalentToAr: 'مجلس كامل + دولاب وغرفة نوم + ثلاجة وغسالة',
    crewIncluded: '3 Uniformed Workers + Full Carpentry Dismantling + Floor Protection',
    idealFor: 'Salon/Majlis furniture replacement or half-garage cleanout in Jeddah',
  },
  {
    id: 'three-quarter-load',
    name: '3/4 Closed Dyna Truck Load',
    nameAr: 'ثلاثة أرباع شاحنة دينا (3/4 حمولة)',
    fractionLabel: '3/4 Truck Load',
    fillPercentage: 75,
    volumeM3: 13.5,
    maxWeightKg: 2200,
    dispatchBadge: 'Apartment / Rooftop Load',
    equivalentTo: '2 Full Rooms of Furniture + 3 Split ACs + 20 Bags of Rooftop Junk',
    equivalentToAr: 'أثاث غرفتين بالكامل + 3 مكيفات + 20 كيس مخلفات سطح',
    crewIncluded: '3–4 Uniformed Workers + Heavy Lifting + Broom Sweep',
    idealFor: 'Full apartment move-out or large villa rooftop (Sateh) clearance',
  },
  {
    id: 'full-jumbo-load',
    name: 'Full Closed Jumbo Dyna Box Truck (18 m³)',
    nameAr: 'شاحنة دينا جامبو مغلقة كاملة (حمولة كاملة)',
    fractionLabel: 'Full Truck Load (100%)',
    fillPercentage: 100,
    volumeM3: 18.0,
    maxWeightKg: 3500,
    dispatchBadge: 'Full Villa / Office Unit',
    equivalentTo: 'Entire Villa Floor / 3 Bedrooms + Salon + Kitchen Appliances + Patio',
    equivalentToAr: 'إخلاء دور فيلا كامل (3 غرف + صالون + مطبخ + حوش)',
    crewIncluded: '4 Uniformed Workers + Supervisor + Floor Runners + Full Cleanout',
    idealFor: 'Complete Jeddah villa cleanouts, compound turnovers & office strip-outs',
  },
];

export interface EstimatorItem {
  id: string;
  name: string;
  nameAr: string;
  category: 'furniture' | 'appliances' | 'rooftop' | 'renovation';
  volumeM3: number;
  weightKg: number;
  handlingNote: string;
}

export const ESTIMATOR_CATALOG: EstimatorItem[] = [
  // Furniture & Mattresses
  {
    id: 'l-sofa-majlis',
    name: 'Old L-Shape Sofa or Arabic Majlis Set (7–10 Seater)',
    nameAr: 'كنب زاوية (L-Shape) أو طقم مجلس عربي قديم',
    category: 'furniture',
    volumeM3: 3.5,
    weightKg: 160,
    handlingNote: 'Sectional separation & padded dolly transport',
  },
  {
    id: 'sofa-3seater',
    name: '3-Seater Couch / Recliner Sofa',
    nameAr: 'كنبة 3 مقاعد أو كرسي استرخاء',
    category: 'furniture',
    volumeM3: 1.8,
    weightKg: 75,
    handlingNote: '2-man indoor carry & protective wrap',
  },
  {
    id: 'king-bed-mattress',
    name: 'King / Queen Bed Frame + Old Mattress Removal',
    nameAr: 'سرير كبير (كينج) مع المرتبة القديمة',
    category: 'furniture',
    volumeM3: 2.2,
    weightKg: 110,
    handlingNote: 'Includes bed frame unbolting & mattress bagging',
  },
  {
    id: 'mattress-only',
    name: 'Extra Old Mattress or Box Spring (Single / King)',
    nameAr: 'مرتبة سرير قديمة إضافية',
    category: 'furniture',
    volumeM3: 0.9,
    weightKg: 40,
    handlingNote: 'Hygienic sealed poly-wrap removal',
  },
  {
    id: 'wardrobe-6door',
    name: 'Large 6-Door Wooden Wardrobe (Includes Dismantling)',
    nameAr: 'دولاب ملابس كبير 6 أبواب (شامل الفك)',
    category: 'furniture',
    volumeM3: 2.6,
    weightKg: 180,
    handlingNote: 'Full carpentry disassembly on-site',
  },
  {
    id: 'dining-set',
    name: 'Dining Table + 6 to 8 Chairs',
    nameAr: 'طاولة طعام مع 6 إلى 8 كراسي',
    category: 'furniture',
    volumeM3: 2.4,
    weightKg: 130,
    handlingNote: 'Marble or wood top protection & leg disassembly',
  },
  {
    id: 'carpet-curtains',
    name: 'Rolled Carpets, Rugs & Old Curtains (Bundle of 3)',
    nameAr: 'سجاد وموكيت وستائر قديمة (حزمة 3 قطع)',
    category: 'furniture',
    volumeM3: 1.0,
    weightKg: 55,
    handlingNote: 'Rolled, taped & carried from any floor',
  },
  // Appliances & ACs
  {
    id: 'fridge-freezer',
    name: 'Old Refrigerator or Deep Chest Freezer',
    nameAr: 'ثلاجة قديمة أو فريزر أرضي',
    category: 'appliances',
    volumeM3: 1.5,
    weightKg: 95,
    handlingNote: 'Rubber-wheeled heavy appliance dolly + floor runner',
  },
  {
    id: 'washer-dryer',
    name: 'Broken Washing Machine, Dryer or Dishwasher',
    nameAr: 'غسالة ملابس أو نشافة أو غسالة صحون عاطلة',
    category: 'appliances',
    volumeM3: 1.0,
    weightKg: 70,
    handlingNote: 'Safe water hose disconnection & drain check',
  },
  {
    id: 'split-window-ac',
    name: 'Old Split AC or Window AC Unit (Includes Uninstalling)',
    nameAr: 'مكيف اسبليت أو شباك قديم (شامل الفك)',
    category: 'appliances',
    volumeM3: 0.8,
    weightKg: 60,
    handlingNote: 'Indoor & outdoor compressor unbolting included',
  },
  {
    id: 'stove-oven',
    name: 'Gas / Electric Cooking Range or Built-In Oven',
    nameAr: 'فرن غاز أو كهرباء قديم',
    category: 'appliances',
    volumeM3: 0.9,
    weightKg: 65,
    handlingNote: 'Safe disconnection & kitchen doorway protection',
  },
  {
    id: 'treadmill-gym',
    name: 'Broken Treadmill, Exercise Bike or Home Gym Machine',
    nameAr: 'سير كهربائي (تريدميل) أو جهاز رياضي منزلي',
    category: 'appliances',
    volumeM3: 1.6,
    weightKg: 115,
    handlingNote: 'Console folding / disassembly for narrow doors',
  },
  // Rooftop (Sateh), Garage & Garden
  {
    id: 'rooftop-boxes-10',
    name: '10x Bags / Boxes of Rooftop (Sateh) or Garage Clutter',
    nameAr: '10 أكياس أو كراتين كراكيب السطح والكراج',
    category: 'rooftop',
    volumeM3: 2.0,
    weightKg: 140,
    handlingNote: 'Carried down from 3rd/4th floor Sateh + broom sweep',
  },
  {
    id: 'patio-pergola',
    name: 'Broken Outdoor Garden Furniture Set / Pergola Shade',
    nameAr: 'جلسة حوش خارجية تالفة أو مظلة قماش/خشب',
    category: 'rooftop',
    volumeM3: 3.2,
    weightKg: 190,
    handlingNote: 'Frame cutting & courtyard cleanup',
  },
  {
    id: 'scrap-metal-tires',
    name: 'Garage Scrap Metal, Old Bicycles, Water Heater & Tires',
    nameAr: 'خردة حديد، دراجات قديمة، سخانات وإطارات بالكراج',
    category: 'rooftop',
    volumeM3: 1.8,
    weightKg: 160,
    handlingNote: 'Sorted for metal & rubber recycling in Jeddah',
  },
  // Renovation & Office
  {
    id: 'rubble-bags-15',
    name: '15x Sacks of Renovation Tiles, Gypsum & Cement Rubbish',
    nameAr: '15 كيس مخلفات ترميم وبلاط وجبس بورد',
    category: 'renovation',
    volumeM3: 2.5,
    weightKg: 650,
    handlingNote: 'Heavy-duty canvas sacks · Amanah permitted',
  },
  {
    id: 'old-kitchen-cabinets',
    name: 'Dismantled Old Kitchen Cabinets, Countertop & Sink',
    nameAr: 'دواليب مطبخ قديمة مفكوكة مع الرخام والمغسلة',
    category: 'renovation',
    volumeM3: 4.0,
    weightKg: 280,
    handlingNote: 'Complete kitchen strip-out hauling',
  },
  {
    id: 'office-desks-5',
    name: '5x Office Desks, Rolling Chairs & Filing Cabinets',
    nameAr: '5 مكاتب إدارية مع كراسي وخزائن ملفات',
    category: 'renovation',
    volumeM3: 4.5,
    weightKg: 260,
    handlingNote: 'Commercial elevator padded protection',
  },
];

export interface JeddahZone {
  id: string;
  zoneName: string;
  zoneNameAr: string;
  arrivalSla: string;
  depotLocation: string;
  stationedTrucks: number;
  districts: {
    name: string;
    nameAr: string;
    popularJobs: string;
    gateAccessNote: string;
  }[];
}

export const JEDDAH_ZONES: JeddahZone[] = [
  {
    id: 'north-jeddah',
    zoneName: 'North Jeddah (شمال جدة · أبحر والبساتين والشاطئ)',
    zoneNameAr: 'شمال جدة (أبحر، البساتين، الشاطئ، المرجان)',
    arrivalSla: '30 – 45 Minutes Express Pickup',
    depotLocation: 'King Abdulaziz Rd & Prince Abdullah Al-Faisal St (North Obhur Hub)',
    stationedTrucks: 6,
    districts: [
      {
        name: 'Obhur North & Obhur South',
        nameAr: 'أبحر الشمالية وأبحر الجنوبية',
        popularJobs: 'Beach Villa Cleanouts, Majlis Upgrades, Patio & Pool Junk Hauling',
        gateAccessNote: 'Enclosed trucks permitted in all Obhur waterfront enclaves',
      },
      {
        name: 'Al-Basateen & Al-Murjan',
        nameAr: 'حي البساتين وحي المرجان',
        popularJobs: 'Luxury Palace Furniture Removal, Garage & Sateh Clearance, Split ACs',
        gateAccessNote: 'Pre-registered crew IDs for Al-Basateen Village & private compounds',
      },
      {
        name: 'Al-Shati (Corniche) & Al-Mohammadiyyah',
        nameAr: 'حي الشاطئ وحي المحمدية',
        popularJobs: 'Sea-View Penthouse Cleanouts, Old Appliances, Renovation Debris',
        gateAccessNote: 'Service elevator padding & basement parking Sprinter vans available',
      },
      {
        name: 'Al-Nahdah, Al-Naeem & Al-Marwah',
        nameAr: 'النهضة، النعيم، والمروة',
        popularJobs: 'Apartment & Villa Old Sofa, Mattress, Wardrobe & Fridge Pickup',
        gateAccessNote: 'Same-hour dispatch via Heraa St & Prince Sultan Rd',
      },
    ],
  },
  {
    id: 'central-west-jeddah',
    zoneName: 'Central & West Jeddah (الروضة، الزهراء، السلامة، الحمراء)',
    zoneNameAr: 'وسط وغرب جدة (الروضة، الزهراء، السلامة، الحمراء)',
    arrivalSla: '30 – 45 Minutes Central Dispatch',
    depotLocation: 'Madinah Road & Sari Street Intersection Hub, Jeddah',
    stationedTrucks: 7,
    districts: [
      {
        name: 'Al-Rawdah & Al-Khalidiyah',
        nameAr: 'حي الروضة وحي الخالدية',
        popularJobs: 'Villa Salon Refurbishment, Chandelier & Dining Set Removal, Office Junk',
        gateAccessNote: 'Discreet courtyard loading off Prince Saud Al-Faisal & Tahlia St',
      },
      {
        name: 'Al-Zahra & Al-Salamah',
        nameAr: 'حي الزهراء وحي السلامة',
        popularJobs: 'Old Bedrooms, Mattresses, Washing Machines, Rooftop Clutter',
        gateAccessNote: '2-to-4 man stairs crew for buildings with narrow elevators',
      },
      {
        name: 'Al-Hamra, Al-Andalus & Tahlia St',
        nameAr: 'الحمراء، الأندلس، وشارع التحلية',
        popularJobs: 'Consulate & Villa Cleanouts, Boutique & Restaurant Equipment Removal',
        gateAccessNote: 'Night-shift commercial clearance available for Tahlia St showrooms',
      },
      {
        name: 'Al-Aziziyah, Al-Rehab & Al-Safa',
        nameAr: 'العزيزية، الرحاب، والصفا',
        popularJobs: 'Move-Out Apartment Cleanouts, Broken ACs, Carpets & Kitchen Junk',
        gateAccessNote: 'Fast access via Palestine St & Prince Majid Rd',
      },
    ],
  },
  {
    id: 'compounds-jeddah',
    zoneName: 'Jeddah Luxury Gated Compounds (المجمعات السكنية بجدة)',
    zoneNameAr: 'المجمعات السكنية الفاخرة (الكومباوندات) في جدة',
    arrivalSla: 'Scheduled & Same-Day Gate-Cleared Dispatch',
    depotLocation: 'Dedicated Compound Response Crew (Prince Sultan & Madinah Rd)',
    stationedTrucks: 4,
    districts: [
      {
        name: 'Arabian Homes, Sierra & Lotus Compounds',
        nameAr: 'مجمع أريبيان هومز، سييرا، واللوتس',
        popularJobs: 'Expat Move-Out Villa Cleanouts, Garden Pergolas, American Appliances',
        gateAccessNote: 'Valid Iqama, vehicle registration & insurance filed with compound security',
      },
      {
        name: 'Sharbatly Village & Al-Basateen Compound',
        nameAr: 'قرية الشربتلي ومجمع البساتين',
        popularJobs: 'Full Villa Furniture Hauling, Patio Junk, Kids Playsets & Garage Clutter',
        gateAccessNote: 'Zero-noise daytime execution & charitable donation receipts',
      },
    ],
  },
  {
    id: 'east-south-jeddah',
    zoneName: 'East & South Jeddah (الحمدانية، السامر، الخمرة، السنابل)',
    zoneNameAr: 'شرق وجنوب جدة (الحمدانية، السامر، الخمرة، السنابل)',
    arrivalSla: '45 – 60 Minutes Dispatch',
    depotLocation: 'Haramain Expressway & Al-Khumrah Logistics Corridor',
    stationedTrucks: 5,
    districts: [
      {
        name: 'Al-Hamdaniyah, Al-Samer & Al-Manar',
        nameAr: 'الحمدانية، السامر، والمنار',
        popularJobs: 'New Villa Renovation Debris, Old Furniture, Rooftop & Hosh Cleanouts',
        gateAccessNote: 'Direct dispatch via Haramain Highway North station',
      },
      {
        name: 'Al-Khumrah, Al-Sanabel & Industrial City',
        nameAr: 'الخمرة، السنابل، والمدينة الصناعية',
        popularJobs: 'Warehouse Pallet Racks, Damaged Stock, Scrap Metal & Office Clearance',
        gateAccessNote: 'Heavy 5-ton & 10-ton trucks available for commercial warehouse loads',
      },
    ],
  },
];

export interface CaseStudy {
  id: string;
  category: 'villa' | 'rooftop' | 'commercial';
  title: string;
  titleAr: string;
  location: string;
  truckLoads: string;
  timeTaken: string;
  outcomeBadge: string;
  image: string;
  beforeSummary: string;
  afterSummary: string;
  clientName: string;
  clientDistrict: string;
  quote: string;
}

export const JEDDAH_CASE_STUDIES: CaseStudy[] = [
  {
    id: 'al-basateen-villa',
    category: 'villa',
    title: 'Full 5-Bedroom Villa Old Furniture, Majlis & 6 Split ACs Cleanout',
    titleAr: 'إخلاء كامل لأثاث فيلا 5 غرف ومجلس و6 مكيفات في حي البساتين',
    location: 'Al-Basateen District, North Jeddah',
    truckLoads: '2 Full Jumbo Dyna Trucks (34 m³)',
    timeTaken: '3.5 Hours',
    outcomeBadge: 'Zero-Scratch Handover · Working ACs Credited',
    image: GENERATED_IMAGES.jeddahHeroTruck,
    beforeSummary:
      'Villa owner was renovating before Ramadan and needed 2 large Majlis sofa sets, 4 old bedrooms, a broken double-door fridge, and 6 old split ACs removed the same afternoon without scratching the marble foyer.',
    afterSummary:
      'Our 4-man Jeddah crew arrived in 40 minutes, laid protective floor runners, uninstalled all 6 ACs, dismantled the wardrobes, and left the entire villa spotless.',
    clientName: 'Abu Faisal Al-Harbi',
    clientDistrict: 'Villa Owner · Al-Basateen, Jeddah',
    quote:
      'I called at 1:00 PM and their sleek truck was at my gate in Al-Basateen by 1:40 PM. Clean uniforms, polite workers, and zero damage to our marble stairs.',
  },
  {
    id: 'obhur-rooftop-garage',
    category: 'rooftop',
    title: '3rd-Floor Villa Rooftop (Sateh) & Garage 10-Year Junk Cleanout',
    titleAr: 'تنظيف شامل لسطح فيلا وكراج من كراكيب متراكمة منذ 10 سنوات بأبحر',
    location: 'Obhur North, Jeddah',
    truckLoads: '1 Full Closed Dyna Truck (18 m³)',
    timeTaken: '2.5 Hours',
    outcomeBadge: '100% Broom-Swept Terrace & Garage',
    image: GENERATED_IMAGES.rooftopGarageCleanout,
    beforeSummary:
      'The rooftop (Sateh) and garage were completely blocked with 40+ old cartons, rusted bicycles, broken patio chairs, old carpets, a dead washing machine, and leftover renovation tiles.',
    afterSummary:
      'Carried every item down 3 flights of stairs, bagged all loose rubbish, loaded 1 full Dyna truck, and swept the entire rooftop and garage tile floor clean.',
    clientName: 'Eng. Khalid Al-Zahrani',
    clientDistrict: 'Homeowner · Obhur North, Jeddah',
    quote:
      'For three years I dreaded cleaning our villa Sateh and garage. These guys cleared everything in two and a half hours and swept the floor cleaner than it was in a decade.',
  },
];

export interface AcceptedCategory {
  title: string;
  titleAr: string;
  items: string[];
}

export const WHAT_WE_TAKE_JEDDAH: AcceptedCategory[] = [
  {
    title: '01. Old Furniture & Mattresses',
    titleAr: '01. الأثاث القديم والمراتب والمجالس',
    items: [
      'Old Sofas, L-Shape Couches, Recliners & Arabic Majlis Sets',
      'King, Queen & Single Beds, Mattresses & Box Springs',
      'Wooden Wardrobes, Cupboards, Dressers & Kids Bedroom Sets',
      'Dining Tables, Chairs, Buffets, Coffee Tables & TV Units',
      'Old Carpets, Rugs, Moquette, Curtains & Blinds',
    ],
  },
  {
    title: '02. Broken Appliances & ACs',
    titleAr: '02. الأجهزة الكهربائية والمكيفات الخربانة',
    items: [
      'Old Refrigerators, Deep Freezers & Water Dispensers',
      'Broken Washing Machines, Clothes Dryers & Dishwashers',
      'Split Air Conditioners, Window ACs & Desert Coolers',
      'Gas Stoves, Electric Ovens, Microwaves & Range Hoods',
      'Treadmills, Exercise Bikes, Old TVs, Computers & Printers',
    ],
  },
  {
    title: '03. Rooftop (Sateh), Garage & Hosh Clutter',
    titleAr: '03. كراكيب السطح والحوش والكراج',
    items: [
      'Cardboard Boxes, Old Books, Magazines, Clothes & Toys',
      'Broken Patio Chairs, Outdoor Tables, Umbrellas & Pergolas',
      'Scrap Iron, Aluminium, Old Doors, Windows & Water Heaters',
      'Old Bicycles, Strollers, Car Tires, Car Batteries & Tools',
      'Tree Branches, Palm Fronds, Pots & Garden Green Waste',
    ],
  },
  {
    title: '04. Renovation & Office Junk',
    titleAr: '04. مخلفات الترميم والمكاتب والمحلات',
    items: [
      'Bagged Broken Ceramic Tiles, Marble Offcuts & Plaster',
      'Dismantled Gypsum Board, False Ceilings & Wood Crates',
      'Old Kitchen Cabinets, Sinks, Bathtubs, Jacuzzis & Toilets',
      'Office Desks, Cubicles, Swivel Chairs & Filing Cabinets',
      'Shop Shelving, Mannequins, Restaurant Fridges & Pallets',
    ],
  },
];

export interface BookingRecord {
  referenceCode: string;
  createdAt: string;
  clientName: string;
  phone: string;
  district: string;
  propertyType: string;
  serviceWindow: string;
  loadType: string;
  goodConditionCheck: boolean;
  estimatedVolumeM3: number;
  selectedItemsSummary: string[];
  notes: string;
  status: 'Truck Assigned · Jeddah Hub' | 'Confirmed · 60-Min SLA';
}

export const INITIAL_SAVED_BOOKINGS: BookingRecord[] = [
  {
    referenceCode: 'JED-JUNK-4921',
    createdAt: 'Today · 11:30 AM (Jeddah Hub)',
    clientName: 'Faisal Al-Qahtani',
    phone: '+966 55 419 8820',
    district: 'Al-Rawdah District, Jeddah',
    propertyType: 'Private Villa (Ground + Rooftop)',
    serviceWindow: 'Today · Within 60 Minutes (Express)',
    loadType: '1/2 Closed Dyna Truck Load (9.0 m³)',
    goodConditionCheck: true,
    estimatedVolumeM3: 9.0,
    selectedItemsSummary: [
      '1x Old L-Shape Sofa or Arabic Majlis Set',
      '1x Old Refrigerator or Deep Chest Freezer',
      '2x Old Split AC or Window AC Unit',
    ],
    notes: 'Near Rawdah Star Market. Please bring dolly for heavy fridge.',
    status: 'Truck Assigned · Jeddah Hub',
  },
];
