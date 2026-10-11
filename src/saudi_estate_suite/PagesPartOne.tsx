import React, { useState, useEffect } from 'react';
import {
  ArrowRight,
  Box,
  Calculator,
  Check,
  ChevronLeft,
  ChevronRight,
  Image as ImageIcon,
  MessageCircle,
  Pause,
  PhoneCall,
  Play,
  Truck,
} from 'lucide-react';
import {
  buildWhatsAppLink,
  GENERATED_IMAGES,
  JEDDAH_PHONE_LOCAL,
  JEDDAH_SLIDER_FEATURES,
  Lang,
  PageId,
  WHAT_WE_TAKE_JEDDAH,
} from './dataset';
import { JeddahTruck3DViewport, Tilt3DCard } from './JeddahTruck3DViewport';

interface ResilientImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackLabel?: string;
}

export const ResilientImage: React.FC<ResilientImageProps> = ({
  src,
  alt,
  className = 'w-full h-full object-cover',
  fallbackLabel,
}) => {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        className={`flex flex-col items-center justify-center bg-[#0F1623] text-slate-300 p-6 text-center ${className}`}
        role="img"
        aria-label={alt}
      >
        <Truck className="w-8 h-8 mb-2 text-emerald-400 opacity-80" />
        <span className="text-xs font-medium tracking-wide">
          {fallbackLabel || alt}
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
    />
  );
};

const HERO_GALLERY_PHOTOS = [
  {
    id: 'obhur-villa-truck',
    src: GENERATED_IMAGES.jeddahHeroTruck,
    badge: 'OBHUR NORTH WATERFRONT VILLA · JEDDAH PREMIER FLEET',
    titleEn: 'Sleek enclosed trucks & uniformed teams for Jeddah’s finest villas.',
    titleAr: 'أسطول شاحنات مغلقة حديثة مصممة للفلل الراقية والمجمعات السكنية في جدة.',
    thumbLabel: 'Villa Truck Fleet',
  },
  {
    id: 'daylight-dyna-truck',
    src: GENERATED_IMAGES.daylightDynaTruck,
    badge: 'AL-RAWDAH & AL-BASATEEN · SAME-DAY DYNA HAULING',
    titleEn: '60-minute arrival across all 36 Jeddah neighborhoods with full loading crew.',
    titleAr: 'وصول خلال 60 دقيقة لجميع أحياء جدة مع فريق كامل للفك والتحميل.',
    thumbLabel: 'Jeddah Dyna Crew',
  },
  {
    id: 'salon-sofa-haul',
    src: GENERATED_IMAGES.furnitureMattressHaul,
    badge: 'WHITE-GLOVE INTERIOR PROTECTION · MARBLE RUNNERS',
    titleEn: 'Scratch-free sofa, Majlis, bed, and wardrobe extraction from any floor.',
    titleAr: 'إزالة الكنب والمجالس وغرف النوم بدون أي خدش للرخام أو الجدران.',
    thumbLabel: 'Salon & Sofa Haul',
  },
  {
    id: 'rooftop-terrace',
    src: GENERATED_IMAGES.rooftopGarageCleanout,
    badge: 'JEDDAH SKYLINE · ROOFTOP (SATEH) & GARAGE CLEANOUT',
    titleEn: 'Complete Sateh rooftop, Hosh courtyard, and garage junk clearance.',
    titleAr: 'تنظيف شامل للسطح والحوش والكراج مع الكنس والتنظيف الكامل.',
    thumbLabel: 'Rooftop & Garage',
  },
];

interface HomeProps {
  lang: Lang;
  onNavigate: (page: PageId) => void;
  onLoadPresetToEstimator: (presetKey: 'villa' | 'majlis' | 'appliances' | 'rooftop') => void;
}

export const Page01HomeJeddah: React.FC<HomeProps> = ({
  lang,
  onNavigate,
  onLoadPresetToEstimator,
}) => {
  const isAr = lang === 'ar';
  const [heroFillPct, setHeroFillPct] = useState<number>(50);
  const [heroViewMode, setHeroViewMode] = useState<'photo' | '3d'>('photo');
  const [heroPhotoIdx, setHeroPhotoIdx] = useState<number>(0);
  const [activeSlide, setActiveSlide] = useState(0);
  const [isAutoSliding, setIsAutoSliding] = useState<boolean>(true);
  const [isSliderHovered, setIsSliderHovered] = useState<boolean>(false);
  const [slideProgress, setSlideProgress] = useState<number>(0);

  const [quickDistrict, setQuickDistrict] = useState('Obhur North / South (أبحر)');
  const [quickLoad, setQuickLoad] = useState('1/2 Dyna Truck Load (9.0 m³)');
  const [quickPhone, setQuickPhone] = useState('');
  const [callbackStatus, setCallbackStatus] = useState<'idle' | 'error' | 'success'>('idle');

  const currentSlide = JEDDAH_SLIDER_FEATURES[activeSlide] || JEDDAH_SLIDER_FEATURES[0];
  const activeHeroPhoto = HERO_GALLERY_PHOTOS[heroPhotoIdx] || HERO_GALLERY_PHOTOS[0];

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % JEDDAH_SLIDER_FEATURES.length);
    setSlideProgress(0);
  };

  const prevSlide = () => {
    setActiveSlide(
      (prev) => (prev - 1 + JEDDAH_SLIDER_FEATURES.length) % JEDDAH_SLIDER_FEATURES.length
    );
    setSlideProgress(0);
  };

  // Auto-slide effect for "Slide Through Our 6 High-End Jeddah Hauling Divisions"
  useEffect(() => {
    if (!isAutoSliding || isSliderHovered) return;

    const tickMs = 50;
    const durationMs = 3500; // 3.5 seconds per slide
    const step = (tickMs / durationMs) * 100;

    const interval = window.setInterval(() => {
      setSlideProgress((prev) => {
        if (prev + step >= 100) {
          setActiveSlide((s) => (s + 1) % JEDDAH_SLIDER_FEATURES.length);
          return 0;
        }
        return prev + step;
      });
    }, tickMs);

    return () => window.clearInterval(interval);
  }, [isAutoSliding, isSliderHovered]);

  const handleQuickSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (quickPhone.trim().length < 8) {
      setCallbackStatus('error');
      return;
    }
    setCallbackStatus('success');
  };

  return (
    <div className="space-y-20">
      {/* 1. PROMINENT JEDDAH HERO SECTION WITH FULL PHOTOGRAPHY SHOWCASE & 3D TOGGLE */}
      <section aria-label="Jeddah Premier Junk Removal Hero">
        <div className="relative rounded-3xl overflow-hidden border border-white/15 bg-[#0B111C]">
          {/* Subtle Ambient Hero Image Backdrop */}
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <ResilientImage
              src={activeHeroPhoto.src}
              alt="Jeddah Junk Removal Hero Background"
              className="w-full h-full object-cover blur-sm scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#070B11] via-[#070B11]/90 to-[#070B11]/70" />
          </div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-8 lg:p-11 items-stretch">
            {/* Left 6 Columns: High-Impact Jeddah Value Proposition */}
            <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
              <div className="space-y-5">
                <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-slate-300">
                  <span className="text-emerald-400 font-semibold">
                    {isAr
                      ? 'جدة · خدمة VIP لإزالة الأثاث والمخلفات'
                      : 'Jeddah, Saudi Arabia · 60-Min Express Fleet'}
                  </span>
                  <span aria-hidden="true">·</span>
                  <span>
                    {isAr
                      ? 'أبحر · البساتين · الشاطئ · الروضة · الزهراء'
                      : 'Obhur · Al-Basateen · Al-Shati · Al-Rawdah'}
                  </span>
                </div>

                <h1
                  className="font-serif-display font-extrabold text-white tracking-tight leading-[1.06]"
                  style={{ fontSize: 'clamp(2.25rem, 3.6vw, 3.5rem)' }}
                >
                  {isAr
                    ? 'الجيل الجديد لإزالة الأثاث القديم والمخلفات في جدة — فك وتحميل فوري خلال 60 دقيقة.'
                    : 'Jeddah’s Premier Same-Day Junk Removal & Villa Cleanout Fleet.'}
                </h1>

                <p className="text-base text-slate-300 leading-relaxed max-w-[60ch]">
                  {isAr
                    ? 'وداعاً للشاحنات العشوائية. أسطول حديث مغلق وفريق بزي موحد لإزالة الكنب القديم، المجالس، المراتب، الثلاجات والمكيفات العاطلة، وكراكيب السطح والحوش في جميع أحياء جدة مع حماية كاملة للرخام.'
                    : 'Experience modern, scratch-free junk hauling built for Jeddah’s finest villas, penthouses, and offices. We dismantle and haul away old sofas, Majlis sets, mattresses, broken refrigerators, split ACs, and rooftop (Sateh) clutter—in one seamless visit.'}
                </p>
              </div>

              <div className="pt-6 border-t border-white/10 space-y-5">
                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href={buildWhatsAppLink(
                      'Hello Jeddah Junk Removal (0575771358), I want to book a pickup in Jeddah.'
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-3.5 bg-[#25D366] hover:bg-[#20bd5a] text-[#070B11] text-sm font-extrabold rounded-xl transition-colors inline-flex items-center gap-2 whitespace-nowrap shrink-0 cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>
                      {isAr
                        ? `واتساب مباشر: ${JEDDAH_PHONE_LOCAL}`
                        : `WhatsApp: ${JEDDAH_PHONE_LOCAL}`}
                    </span>
                  </a>

                  <a
                    href={`tel:${JEDDAH_PHONE_LOCAL}`}
                    className="px-4 py-3.5 bg-emerald-500/15 hover:bg-emerald-500/25 border border-emerald-500/40 text-emerald-300 text-sm font-bold rounded-xl transition-colors inline-flex items-center gap-2 whitespace-nowrap shrink-0 cursor-pointer"
                  >
                    <PhoneCall className="w-4 h-4 text-emerald-400" />
                    <span className="font-mono">{JEDDAH_PHONE_LOCAL}</span>
                  </a>

                  <button
                    type="button"
                    onClick={() => onNavigate('book-pickup')}
                    className="px-5 py-3.5 bg-emerald-500 hover:bg-emerald-400 text-[#070B11] text-sm font-bold rounded-xl transition-colors inline-flex items-center gap-2 whitespace-nowrap shrink-0 cursor-pointer"
                  >
                    <Truck className="w-4 h-4" />
                    <span>
                      {isAr
                        ? 'احجز شاحنة جدة الآن'
                        : 'Book 60-Min Pickup'}
                    </span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <button
                    type="button"
                    onClick={() => onNavigate('truck-pricing')}
                    className="px-4 py-3.5 bg-white/10 hover:bg-white/15 border border-white/15 text-white text-sm font-semibold rounded-xl transition-colors inline-flex items-center gap-2 whitespace-nowrap shrink-0 cursor-pointer"
                  >
                    <Calculator className="w-4 h-4 text-emerald-400" />
                    <span>
                      {isAr
                        ? 'محاكي الشاحنة 3D'
                        : '3D Load Visualizer'}
                    </span>
                  </button>
                </div>

                {/* Quick Load Presets */}
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-slate-300">
                  <span className="font-semibold text-white">
                    {isAr ? 'اختر نوع الإخلاء الفوري:' : 'Instant 3D Load Presets:'}
                  </span>
                  <button
                    type="button"
                    onClick={() => onLoadPresetToEstimator('majlis')}
                    className="text-emerald-400 hover:underline whitespace-nowrap shrink-0 cursor-pointer"
                  >
                    {isAr ? 'كنب ومجالس ومراتب' : 'Sofas, Majlis & Mattresses'}
                  </button>
                  <span aria-hidden="true">·</span>
                  <button
                    type="button"
                    onClick={() => onLoadPresetToEstimator('appliances')}
                    className="text-emerald-400 hover:underline whitespace-nowrap shrink-0 cursor-pointer"
                  >
                    {isAr ? 'ثلاجات وغسالات ومكيفات' : 'Fridges, Washers & Split ACs'}
                  </button>
                  <span aria-hidden="true">·</span>
                  <button
                    type="button"
                    onClick={() => onLoadPresetToEstimator('rooftop')}
                    className="text-emerald-400 hover:underline whitespace-nowrap shrink-0 cursor-pointer"
                  >
                    {isAr ? 'تنظيف السطح والحوش' : 'Rooftop (Sateh) & Garage'}
                  </button>
                  <span aria-hidden="true">·</span>
                  <button
                    type="button"
                    onClick={() => onLoadPresetToEstimator('villa')}
                    className="text-emerald-400 hover:underline whitespace-nowrap shrink-0 cursor-pointer"
                  >
                    {isAr ? 'إخلاء فيلا كاملة' : 'Full Villa Cleanout'}
                  </button>
                </div>
              </div>
            </div>

            {/* Right 6 Columns: Hero Image Showcase (Default) + 4-Photo Selector + 3D Truck Switcher */}
            <div className="lg:col-span-6 flex flex-col gap-3">
              {/* Mode Switcher Bar */}
              <div className="flex flex-wrap items-center justify-between gap-2 bg-[#0F1623]/90 border border-white/15 rounded-xl px-4 py-2.5">
                <span className="text-xs font-mono text-emerald-400">
                  {heroViewMode === 'photo'
                    ? activeHeroPhoto.badge
                    : 'INTERACTIVE 3D WEBGL TRUCK SIMULATOR · DRAG TO ROTATE'}
                </span>
                <div className="flex items-center gap-1 bg-black/50 p-1 rounded-lg border border-white/10">
                  <button
                    type="button"
                    onClick={() => setHeroViewMode('photo')}
                    className={`px-3 py-1 rounded-md text-xs font-semibold transition-colors inline-flex items-center gap-1.5 cursor-pointer ${
                      heroViewMode === 'photo'
                        ? 'bg-emerald-500 text-[#070B11]'
                        : 'text-slate-300 hover:text-white'
                    }`}
                  >
                    <ImageIcon className="w-3.5 h-3.5" />
                    <span>Jeddah Fleet Photos</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setHeroViewMode('3d')}
                    className={`px-3 py-1 rounded-md text-xs font-semibold transition-colors inline-flex items-center gap-1 cursor-pointer ${
                      heroViewMode === '3d'
                        ? 'bg-emerald-500 text-[#070B11]'
                        : 'text-slate-300 hover:text-white'
                    }`}
                  >
                    <Box className="w-3.5 h-3.5" />
                    <span>Interactive 3D Truck</span>
                  </button>
                </div>
              </div>

              {heroViewMode === 'photo' ? (
                <div className="space-y-3">
                  <Tilt3DCard className="relative rounded-2xl overflow-hidden border border-white/20 h-[340px] sm:h-[380px]">
                    <ResilientImage
                      src={activeHeroPhoto.src}
                      alt={activeHeroPhoto.titleEn}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent flex flex-col justify-end p-6 sm:p-7">
                      <div className="space-y-2">
                        <div className="text-xs font-mono text-emerald-400">
                          {activeHeroPhoto.badge}
                        </div>
                        <p className="font-serif-display text-xl sm:text-2xl font-bold text-white leading-snug">
                          {isAr ? activeHeroPhoto.titleAr : activeHeroPhoto.titleEn}
                        </p>
                        <div className="pt-1 flex flex-wrap items-center justify-between gap-3">
                          <span className="text-xs font-mono text-slate-200 tabular-nums">
                            WhatsApp & Call: {JEDDAH_PHONE_LOCAL} · All 36 Jeddah Districts
                          </span>
                          <button
                            type="button"
                            onClick={() => setHeroViewMode('3d')}
                            className="px-3.5 py-1.5 bg-emerald-500 hover:bg-emerald-400 text-[#070B11] text-xs font-bold rounded-lg inline-flex items-center gap-1.5 cursor-pointer"
                          >
                            <Box className="w-3.5 h-3.5" />
                            <span>Open 3D Truck View →</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </Tilt3DCard>

                  {/* 4 Hero Image Thumbnail Switchers */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                    {HERO_GALLERY_PHOTOS.map((photo, idx) => {
                      const isSelected = heroPhotoIdx === idx;
                      return (
                        <button
                          key={photo.id}
                          type="button"
                          onClick={() => setHeroPhotoIdx(idx)}
                          className={`group relative rounded-xl overflow-hidden border text-left transition-all h-20 cursor-pointer ${
                            isSelected
                              ? 'border-emerald-400 ring-2 ring-emerald-500/40'
                              : 'border-white/15 opacity-75 hover:opacity-100'
                          }`}
                        >
                          <ResilientImage
                            src={photo.src}
                            alt={photo.thumbLabel}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent flex items-end p-2">
                            <span className="text-[11px] font-semibold text-white truncate">
                              {photo.thumbLabel}
                            </span>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              ) : (
                <JeddahTruck3DViewport
                  fillPercentage={heroFillPct}
                  onSelectFillPercentage={(pct) => {
                    setHeroFillPct(pct);
                  }}
                  heightClass="h-[420px] lg:h-[440px]"
                />
              )}
            </div>
          </div>
        </div>

        {/* Full-Width 4-Column Quantitative Proof Row (No Pricing) */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Tilt3DCard className="bg-[#0F1623] border border-white/10 rounded-2xl p-6">
            <div className="font-mono text-3xl font-bold text-emerald-400 tabular-nums">
              45–60 Mins
            </div>
            <div className="mt-1 text-sm font-bold text-white">
              {isAr ? 'وصول فوري لجميع أحياء جدة' : 'Express Arrival Across Jeddah'}
            </div>
            <p className="mt-1 text-xs text-slate-400">
              {isAr
                ? 'شاحنات متمركزة في أبحر، البساتين، الشاطئ، الروضة، الزهراء والسلامة'
                : 'Stationed hubs in Obhur, Al-Basateen, Al-Shati, Al-Rawdah & Al-Zahra'}
            </p>
          </Tilt3DCard>

          <Tilt3DCard className="bg-[#0F1623] border border-white/10 rounded-2xl p-6">
            <div className="font-mono text-3xl font-bold text-emerald-400 tabular-nums">
              18 m³ Fleet
            </div>
            <div className="mt-1 text-sm font-bold text-white">
              {isAr ? 'شاحنات دينا جامبو مغلقة وحديثة' : 'Enclosed Jumbo Box Trucks'}
            </div>
            <p className="mt-1 text-xs text-slate-400">
              {isAr
                ? 'شامل الفك وتنزيل الدرج والتحميل وتنظيف المكان بالكامل'
                : 'Includes carpentry dismantling, padded dollies, stairs & sweep-up'}
            </p>
          </Tilt3DCard>

          <Tilt3DCard className="bg-[#0F1623] border border-white/10 rounded-2xl p-6">
            <div className="font-mono text-3xl font-bold text-amber-400 tabular-nums">
              100% Care
            </div>
            <div className="mt-1 text-sm font-bold text-white">
              {isAr ? 'حماية الرخام وتدوير الأثاث الصالح' : 'Zero-Scratch & Charity Partner'}
            </div>
            <p className="mt-1 text-xs text-slate-400">
              {isAr
                ? 'نحمي رخام الفلل ونوجه الأثاث النظيف لجمعيات البر ومواكب الأجر بجدة'
                : 'Marble floor protection runners & reusable items donated in Jeddah'}
            </p>
          </Tilt3DCard>

          <Tilt3DCard className="bg-[#0F1623] border border-white/10 rounded-2xl p-6">
            <div className="font-mono text-3xl font-bold text-emerald-400 tabular-nums">
              14,500+
            </div>
            <div className="mt-1 text-sm font-bold text-white">
              {isAr ? 'فيلا وشقة ومكتب تم إخلاؤها بجدة' : 'Jeddah Villas & Offices Cleared'}
            </div>
            <p className="mt-1 text-xs text-slate-400">
              {isAr
                ? 'تصاريح دخول معتمدة لجميع المجمعات السكنية والأبراج في جدة'
                : 'Pre-cleared gate passes for Arabian Homes, Sharbatly Village & Corniche towers'}
            </p>
          </Tilt3DCard>
        </div>
      </section>

      {/* 2. INTERACTIVE AUTO-SLIDING 3D ALL-FEATURES SLIDER ("SARY FEATURES EK HI SLIDER ME") */}
      <section
        aria-label="Jeddah 3D Service Slider"
        onMouseEnter={() => setIsSliderHovered(true)}
        onMouseLeave={() => setIsSliderHovered(false)}
        className="bg-[#0F1623] border border-white/10 rounded-2xl p-6 sm:p-8 lg:p-10 space-y-6 relative overflow-hidden"
      >
        {/* Top Live Auto-Slide Progress Bar */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-white/5 overflow-hidden">
          <div
            className="h-full bg-emerald-400 transition-all duration-75"
            style={{ width: `${slideProgress}%` }}
          />
        </div>

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b border-white/10 pb-6">
          <div className="space-y-1.5">
            <div className="text-xs font-mono text-emerald-400">
              {isAr
                ? 'شريط الخدمات التلقائي · جميع خدمات جدة في مكان واحد'
                : 'AUTO-SLIDING INTERACTIVE SERVICE SHOWCASE · 6 JEDDAH DIVISIONS'}
            </div>
            <h2 className="font-serif-display text-3xl lg:text-4xl font-bold text-white">
              {isAr
                ? 'تصفح جميع خدمات إزالة الأثاث والمخلفات في جدة'
                : 'Slide Through Our 6 High-End Jeddah Hauling Divisions'}
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-2 self-start lg:self-end">
            <button
              type="button"
              onClick={() => setIsAutoSliding((prev) => !prev)}
              className={`px-3 py-2 rounded-xl text-xs font-semibold border transition-colors inline-flex items-center gap-1.5 cursor-pointer ${
                isAutoSliding
                  ? 'bg-emerald-500/15 border-emerald-500/40 text-emerald-300'
                  : 'bg-white/5 border-white/15 text-slate-300 hover:text-white'
              }`}
            >
              {isAutoSliding ? (
                <>
                  <Pause className="w-3.5 h-3.5" />
                  <span>{isAr ? 'إيقاف التمرير التلقائي' : 'Auto-Slide: ON'}</span>
                </>
              ) : (
                <>
                  <Play className="w-3.5 h-3.5" />
                  <span>{isAr ? 'تشغيل التمرير التلقائي' : 'Auto-Slide: PAUSED'}</span>
                </>
              )}
            </button>

            <button
              type="button"
              onClick={prevSlide}
              className="px-3.5 py-2 bg-white/5 hover:bg-white/10 border border-white/15 rounded-xl text-xs font-semibold text-white inline-flex items-center gap-1.5 cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>{isAr ? 'السابق' : 'Prev'}</span>
            </button>
            <span className="px-2.5 font-mono text-xs font-bold text-emerald-400 tabular-nums">
              0{activeSlide + 1} / 0{JEDDAH_SLIDER_FEATURES.length}
            </span>
            <button
              type="button"
              onClick={nextSlide}
              className="px-3.5 py-2 bg-emerald-500 hover:bg-emerald-400 rounded-xl text-xs font-bold text-[#070B11] inline-flex items-center gap-1.5 cursor-pointer"
            >
              <span>{isAr ? 'التالي' : 'Next'}</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 6 Auto-Sliding Division Tabs with Individual Progress Indicators */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
          {JEDDAH_SLIDER_FEATURES.map((slide, idx) => {
            const isCurrent = activeSlide === idx;
            return (
              <button
                key={slide.id}
                type="button"
                onClick={() => {
                  setActiveSlide(idx);
                  setSlideProgress(0);
                }}
                className={`relative overflow-hidden px-3 py-2.5 rounded-xl text-xs font-semibold transition-all text-left cursor-pointer border ${
                  isCurrent
                    ? 'bg-emerald-500/20 text-white border-emerald-400 font-bold'
                    : 'bg-[#070B11] text-slate-300 hover:text-white border-white/10'
                }`}
              >
                <div className="truncate">
                  <span className="font-mono text-emerald-400 mr-1">0{idx + 1}.</span>
                  {isAr
                    ? slide.titleAr.slice(0, 22)
                    : slide.title.split(' ').slice(0, 3).join(' ')}
                </div>
                {isCurrent && (
                  <div
                    className="absolute bottom-0 left-0 h-0.5 bg-emerald-400 transition-all duration-75"
                    style={{ width: `${slideProgress}%` }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Active 3D Slide Showcase */}
        <div
          key={currentSlide.id}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch bg-[#070B11] border border-white/10 rounded-2xl overflow-hidden transition-all duration-300"
        >
          <div className="lg:col-span-6 min-h-[340px] relative">
            <ResilientImage
              src={currentSlide.image}
              alt={currentSlide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent flex items-end justify-between p-6 text-white">
              <span className="text-xs font-mono text-emerald-400">
                {currentSlide.responseTime}
              </span>
              <span className="text-xs font-mono font-bold text-amber-300">
                {currentSlide.serviceHighlight}
              </span>
            </div>
          </div>

          <div className="lg:col-span-6 p-8 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="text-xs font-mono text-emerald-400">{currentSlide.badge}</div>
              <h3 className="font-serif-display text-2xl lg:text-3xl font-bold text-white">
                {isAr ? currentSlide.titleAr : currentSlide.title}
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                {isAr ? currentSlide.descriptionAr : currentSlide.description}
              </p>
              <ul className="space-y-2.5 pt-2">
                {currentSlide.bulletPoints.map((bp, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs text-slate-200">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{bp}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-6 border-t border-white/10 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => onNavigate(currentSlide.targetPage)}
                className="px-5 py-2.5 bg-emerald-500 hover:bg-emerald-400 text-[#070B11] text-xs font-bold rounded-xl transition-colors cursor-pointer"
              >
                {isAr ? 'استعراض تفاصيل الخدمة' : 'Open Full Division Page →'}
              </button>
              <a
                href={buildWhatsAppLink(
                  `Hello Jeddah Junk Removal (0575771358), I need: ${currentSlide.title}`
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 bg-[#25D366] hover:bg-[#20bd5a] text-[#070B11] text-xs font-bold rounded-xl transition-colors inline-flex items-center gap-1.5 cursor-pointer"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp {JEDDAH_PHONE_LOCAL}</span>
              </a>
              <button
                type="button"
                onClick={() => onNavigate('book-pickup')}
                className="px-4 py-2.5 bg-white/10 hover:bg-white/15 border border-white/15 text-white text-xs font-semibold rounded-xl transition-colors cursor-pointer"
              >
                {isAr ? 'احجز شاحنة الآن' : 'Book Truck Online'}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. HIGH-RESOLUTION 3D PHOTO GALLERY OF JEDDAH OPERATIONS */}
      <section aria-label="Jeddah Visual Showcase" className="space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/10 pb-6">
          <div>
            <div className="text-xs font-mono text-emerald-400 mb-1">
              8K COMMERCIAL FLEET & WHITE-GLOVE CREW GALLERY · JEDDAH
            </div>
            <h2 className="font-serif-display text-3xl lg:text-4xl font-bold text-white">
              {isAr
                ? 'شاهد مستوى الاحترافية والنظافة في إخلاء فلل وأبراج جدة'
                : 'See Our Uniformed Jeddah Crew & Modern Fleet in Action'}
            </h2>
          </div>
          <button
            type="button"
            onClick={() => onNavigate('truck-pricing')}
            className="text-sm font-semibold text-emerald-400 hover:underline inline-flex items-center gap-1 cursor-pointer"
          >
            <span>Open 3D Load Simulator & Volume Calculator</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              img: GENERATED_IMAGES.furnitureMattressHaul,
              tag: 'Villa Salon & Majlis · Al-Rawdah & Obhur',
              title: 'Zero-Scratch Sofa & Furniture Extraction',
              desc: 'Hydraulic padded dollies and floor runners protect polished marble in Jeddah villas.',
              page: 'furniture-mattress' as PageId,
            },
            {
              img: GENERATED_IMAGES.applianceAcRemoval,
              tag: 'Kitchen & HVAC · Al-Basateen & Al-Zahra',
              title: 'Heavy Refrigerator, Washer & Split AC Hauling',
              desc: 'Safe uninstallation and heavy-duty rubber-wheel transport for bulky appliances.',
              page: 'appliances-ac' as PageId,
            },
            {
              img: GENERATED_IMAGES.rooftopGarageCleanout,
              tag: 'Sateh & Terrace · Jeddah Corniche Skyline',
              title: 'Rooftop Terrace (Sateh) & Garage Cleanouts',
              desc: 'Clearing old pergolas, outdoor rattan seating, and storage crates with full sweep-up.',
              page: 'rooftop-garage' as PageId,
            },
            {
              img: GENERATED_IMAGES.commercialOfficeClear,
              tag: 'Commercial Towers · Corniche & Tahlia St',
              title: 'Executive Office & Showroom Decommissioning',
              desc: 'Day or night-shift removal of desks, IT equipment, and partitions with official documentation.',
              page: 'commercial-office' as PageId,
            },
            {
              img: GENERATED_IMAGES.jeddahPenthouseDebris,
              tag: 'Renovation & Fit-Out · Obhur & Al-Shati',
              title: 'Post-Renovation Marble, Tile & Wood Debris',
              desc: 'Jeddah Amanah compliant hauling of remodeling waste without street dumpsters.',
              page: 'renovation-debris' as PageId,
            },
            {
              img: GENERATED_IMAGES.daylightDynaTruck,
              tag: 'Same-Day Fleet · All 36 Jeddah Districts',
              title: 'Closed 18m³ Jumbo Dyna Box Trucks',
              desc: 'Clean, modern green-and-white fleet stationed across North, Central, and South Jeddah.',
              page: 'jeddah-districts' as PageId,
            },
          ].map((card, i) => (
            <Tilt3DCard
              key={i}
              className="bg-[#0F1623] border border-white/10 rounded-2xl overflow-hidden flex flex-col justify-between group"
            >
              <div>
                <div className="h-56 overflow-hidden relative border-b border-white/10">
                  <ResilientImage
                    src={card.img}
                    alt={card.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F1623] via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-4 right-4 text-[11px] font-mono text-emerald-400">
                    {card.tag}
                  </div>
                </div>
                <div className="p-6 space-y-2">
                  <h3 className="font-serif-display text-xl font-bold text-white">
                    {card.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">{card.desc}</p>
                </div>
              </div>
              <div className="px-6 pb-6">
                <button
                  type="button"
                  onClick={() => onNavigate(card.page)}
                  className="w-full py-2.5 px-4 bg-white/5 hover:bg-emerald-500 hover:text-[#070B11] border border-white/10 text-xs font-bold text-white rounded-xl transition-colors cursor-pointer"
                >
                  Explore Service Details →
                </button>
              </div>
            </Tilt3DCard>
          ))}
        </div>
      </section>

      {/* 4. WHAT JUNK WE TAKE IN JEDDAH (4-COLUMN CHECKLIST) */}
      <section aria-label="What Junk We Take in Jeddah" className="space-y-8">
        <div className="border-b border-white/10 pb-6">
          <div className="text-xs font-mono text-emerald-400 mb-1">
            COMPLETE JEDDAH HAULING DIRECTORY
          </div>
          <h2 className="font-serif-display text-3xl lg:text-4xl font-bold text-white">
            {isAr
              ? 'ماذا نرفع؟ كل شيء غير مرغوب فيه من فيلتك أو شقتك بجدة'
              : 'Everything We Haul Away in Jeddah'}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHAT_WE_TAKE_JEDDAH.map((cat) => (
            <Tilt3DCard
              key={cat.title}
              className="bg-[#0F1623] border border-white/10 rounded-2xl p-6 flex flex-col justify-between space-y-5"
            >
              <div className="space-y-4">
                <h3 className="font-serif-display text-xl font-bold text-white border-b border-white/10 pb-3">
                  {isAr ? cat.titleAr : cat.title}
                </h3>
                <ul className="space-y-2.5">
                  {cat.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                      <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <button
                type="button"
                onClick={() => onNavigate('book-pickup')}
                className="w-full py-2.5 px-3 bg-emerald-500/15 hover:bg-emerald-500 hover:text-[#070B11] border border-emerald-500/30 text-xs font-bold text-emerald-300 rounded-xl transition-colors cursor-pointer"
              >
                {isAr ? 'حجز رفع هذه الأغراض' : 'Book Pickup for These Items'}
              </button>
            </Tilt3DCard>
          ))}
        </div>
      </section>

      {/* 5. INSTANT JEDDAH WHATSAPP & DISPATCH CALLBACK BAR */}
      <section className="bg-gradient-to-r from-[#0F1623] via-[#132238] to-[#0F1623] text-white rounded-2xl p-6 sm:p-8 lg:p-10 border border-emerald-500/30">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5 space-y-3">
            <div className="text-xs font-mono text-emerald-400">
              JEDDAH 24/7 WHATSAPP & CENTRAL DISPATCH · {JEDDAH_PHONE_LOCAL}
            </div>
            <h2 className="font-serif-display text-3xl font-bold text-white">
              {isAr
                ? `تواصل عبر واتساب أو اطلب شاحنة بجدة: ${JEDDAH_PHONE_LOCAL}`
                : `WhatsApp or Call Jeddah Dispatch: ${JEDDAH_PHONE_LOCAL}`}
            </h2>
            <p className="text-xs text-slate-300 leading-relaxed">
              {isAr
                ? 'أرسل صور الأثاث القديم أو المخلفات عبر واتساب 0575771358 أو أدخل رقم جوالك ليتصل بك مشرف الشاحنة فوراً.'
                : 'Send photos of your old furniture or junk directly on WhatsApp 0575771358, or enter your mobile number below for an immediate callback.'}
            </p>
            <div className="flex flex-wrap gap-2.5 pt-1">
              <a
                href={buildWhatsAppLink(
                  `Hello Jeddah Junk Removal (${JEDDAH_PHONE_LOCAL}), I need a junk pickup in ${quickDistrict} (${quickLoad}).`
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 bg-[#25D366] hover:bg-[#20bd5a] text-[#070B11] text-xs font-extrabold rounded-xl inline-flex items-center gap-2 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Now: {JEDDAH_PHONE_LOCAL}</span>
              </a>
              <a
                href={`tel:${JEDDAH_PHONE_LOCAL}`}
                className="px-4 py-2.5 bg-white/10 hover:bg-white/15 border border-white/15 text-white text-xs font-bold rounded-xl inline-flex items-center gap-2 cursor-pointer"
              >
                <PhoneCall className="w-4 h-4 text-emerald-400" />
                <span>Call {JEDDAH_PHONE_LOCAL}</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-7">
            <form onSubmit={handleQuickSubmit} className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div>
                <label className="block text-xs text-slate-300 mb-1">
                  {isAr ? 'الحي في جدة' : 'Jeddah Neighborhood'}
                </label>
                <select
                  value={quickDistrict}
                  onChange={(e) => setQuickDistrict(e.target.value)}
                  className="w-full px-3 py-2.5 bg-[#070B11] border border-white/15 rounded-xl text-xs text-white"
                >
                  <option value="Obhur North / South (أبحر)">Obhur North / South (أبحر)</option>
                  <option value="Al-Basateen / Al-Murjan (البساتين)">Al-Basateen / Al-Murjan</option>
                  <option value="Al-Shati / Corniche (الشاطئ)">Al-Shati / Corniche</option>
                  <option value="Al-Rawdah / Al-Khalidiyah (الروضة)">Al-Rawdah / Al-Khalidiyah</option>
                  <option value="Al-Zahra / Al-Salamah (الزهراء)">Al-Zahra / Al-Salamah</option>
                  <option value="Al-Hamra / Al-Andalus (الحمراء)">Al-Hamra / Al-Andalus</option>
                  <option value="Al-Mohammadiyyah / Al-Nahdah">Al-Mohammadiyyah / Al-Nahdah</option>
                  <option value="Al-Safa / Al-Rehab / Al-Aziziyah">Al-Safa / Al-Rehab / Al-Aziziyah</option>
                  <option value="Al-Hamdaniyah / Al-Samer">Al-Hamdaniyah / Al-Samer</option>
                </select>
              </div>

              <div>
                <label className="block text-xs text-slate-300 mb-1">
                  {isAr ? 'حجم الشاحنة التقريبي' : 'Estimated Load Size'}
                </label>
                <select
                  value={quickLoad}
                  onChange={(e) => setQuickLoad(e.target.value)}
                  className="w-full px-3 py-2.5 bg-[#070B11] border border-white/15 rounded-xl text-xs text-white"
                >
                  <option value="Single Item Pickup (2.0 m³)">Single Item Pickup (2.0 m³)</option>
                  <option value="1/4 Dyna Truck Load (4.5 m³)">1/4 Dyna Truck Load (4.5 m³)</option>
                  <option value="1/2 Dyna Truck Load (9.0 m³)">1/2 Dyna Truck Load (9.0 m³)</option>
                  <option value="Full Jumbo Dyna Truck (18.0 m³)">Full Jumbo Dyna Truck (18.0 m³)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs text-slate-300 mb-1">
                  {isAr ? 'رقم جوالك للاتصال بك' : 'Your Mobile (05X)'}
                </label>
                <div className="flex gap-2">
                  <input
                    type="tel"
                    value={quickPhone}
                    onChange={(e) => {
                      setQuickPhone(e.target.value);
                      setCallbackStatus('idle');
                    }}
                    placeholder="05X XXX XXXX"
                    className="w-full px-3 py-2.5 bg-[#070B11] border border-white/15 rounded-xl text-xs text-white font-mono"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2.5 bg-emerald-500 hover:bg-emerald-400 text-[#070B11] text-xs font-bold rounded-xl whitespace-nowrap shrink-0 cursor-pointer"
                  >
                    {isAr ? 'اتصل بي' : 'Call Me'}
                  </button>
                </div>
              </div>
            </form>

            {callbackStatus === 'error' && (
              <p className="mt-2 text-xs text-amber-300">
                Please enter a valid Saudi mobile number (or tap WhatsApp {JEDDAH_PHONE_LOCAL} directly).
              </p>
            )}
            {callbackStatus === 'success' && (
              <p className="mt-2 text-xs text-emerald-300">
                Dispatch request logged for <strong>{quickDistrict}</strong> ({quickLoad}). Our nearest Jeddah supervisor ({JEDDAH_PHONE_LOCAL}) is calling{' '}
                <span className="font-mono">{quickPhone}</span> now!
              </p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

/* ============================================================================
 * PAGE 02: OLD FURNITURE, MAJLIS, SOFA & MATTRESS REMOVAL JEDDAH
 * ============================================================================ */
export const Page02FurnitureMattress: React.FC<{
  lang: Lang;
  onNavigate: (page: PageId) => void;
}> = ({ lang, onNavigate }) => {
  const isAr = lang === 'ar';

  return (
    <div className="space-y-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        <div className="lg:col-span-7 bg-[#0F1623] border border-white/10 rounded-2xl p-8 lg:p-10 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <div className="text-xs font-mono text-emerald-400">
              PAGE 02 · OLD FURNITURE, SOFA, MAJLIS & MATTRESS HAULING JEDDAH
            </div>
            <h1 className="font-serif-display text-3xl lg:text-5xl font-bold text-white">
              {isAr
                ? 'إزالة الكنب القديم والمجالس وغرف النوم والمراتب في جدة'
                : 'Old Sofa, Arabic Majlis, Bed & Mattress Removal in Jeddah'}
            </h1>
            <p className="text-sm lg:text-base text-slate-300 leading-relaxed">
              {isAr
                ? 'هل اشتريت أثاثاً جديداً وتريد التخلص من الكنب القديم أو غرف النوم والمراتب فوراً؟ يقوم نجارونا وعمالنا في جدة بفك الدواليب الكبيرة والأسرة، وتنزيل الكنب من الأدوار العليا بدون أي خدش للجدران أو الرخام.'
                : 'Bought new furniture from IKEA, Abyat, or Roche Bobois on Tahlia Street and need your old sofa set, Majlis, king bed, or heavy wooden wardrobe gone today? Our Jeddah crew brings carpentry tools to dismantle bulky wardrobes, wraps sharp corners, and hauls everything down stairs or elevators.'}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs">
              {[
                'Old L-Shape Sofas, Sectionals, Recliners & Arabic Majlis Cushions',
                'King, Queen & Single Mattresses, Box Springs & Bed Frames',
                '6-Door & Sliding Wardrobes (Full Carpentry Dismantling Included)',
                'Dining Tables (Marble / Wood), Buffets, TV Consoles & Coffee Tables',
                'Rolled Persian Carpets, Hallway Runners, Moquette & Curtains',
                'Charity Donation Routing if Furniture is Clean & Reusable',
              ].map((item, i) => (
                <div
                  key={i}
                  className="p-3.5 bg-[#070B11] border border-white/10 rounded-xl flex items-start gap-2.5 text-slate-200"
                >
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-6 border-t border-white/10 flex flex-wrap gap-3">
            <a
              href={buildWhatsAppLink(
                'Hello Jeddah Junk Removal (0575771358), I need old furniture / sofa / mattress removal in Jeddah.'
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 bg-[#25D366] hover:bg-[#20bd5a] text-[#070B11] text-xs font-extrabold rounded-xl inline-flex items-center gap-1.5 cursor-pointer"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp {JEDDAH_PHONE_LOCAL}</span>
            </a>
            <button
              type="button"
              onClick={() => onNavigate('book-pickup')}
              className="px-5 py-3 bg-emerald-500 hover:bg-emerald-400 text-[#070B11] text-xs font-bold rounded-xl cursor-pointer"
            >
              {isAr ? 'احجز شاحنة لرفع الأثاث القديم بجدة' : 'Book Old Furniture Pickup in Jeddah'}
            </button>
            <button
              type="button"
              onClick={() => onNavigate('truck-pricing')}
              className="px-4 py-3 bg-white/10 hover:bg-white/15 text-white text-xs font-semibold rounded-xl cursor-pointer"
            >
              {isAr ? 'محاكي حجم الكنب والغرف 3D' : 'Launch 3D Sofa & Bedroom Load Visualizer'}
            </button>
          </div>
        </div>

        <Tilt3DCard className="lg:col-span-5 rounded-2xl overflow-hidden border border-white/15 min-h-[360px]">
          <ResilientImage
            src={GENERATED_IMAGES.furnitureMattressHaul}
            alt="Uniformed Jeddah specialists moving a sofa on a hydraulic dolly over floor runners in a luxury villa"
            className="w-full h-full object-cover"
          />
        </Tilt3DCard>
      </div>
    </div>
  );
};

/* ============================================================================
 * PAGE 03: BROKEN APPLIANCES, FRIDGE, WASHER & AC REMOVAL JEDDAH
 * ============================================================================ */
export const Page03AppliancesAc: React.FC<{
  lang: Lang;
  onNavigate: (page: PageId) => void;
}> = ({ lang, onNavigate }) => {
  const isAr = lang === 'ar';

  return (
    <div className="space-y-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        <Tilt3DCard className="lg:col-span-5 rounded-2xl overflow-hidden border border-white/15 min-h-[360px]">
          <ResilientImage
            src={GENERATED_IMAGES.applianceAcRemoval}
            alt="Jeddah technicians loading a stainless steel double-door fridge, washing machine, and split AC units"
            className="w-full h-full object-cover"
          />
        </Tilt3DCard>

        <div className="lg:col-span-7 bg-[#0F1623] border border-white/10 rounded-2xl p-8 lg:p-10 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <div className="text-xs font-mono text-emerald-400">
              PAGE 03 · HEAVY APPLIANCE, FRIDGE, WASHER & SCRAP AC HAULING JEDDAH
            </div>
            <h1 className="font-serif-display text-3xl lg:text-5xl font-bold text-white">
              {isAr
                ? 'رفع الثلاجات والغسالات والأفران والمكيفات الخربانة في جدة'
                : 'Old Refrigerator, Washing Machine & AC Removal in Jeddah'}
            </h1>
            <p className="text-sm lg:text-base text-slate-300 leading-relaxed">
              {isAr
                ? 'الأجهزة الكهربائية الثقيلة والمكيفات القديمة تأخذ مساحة كبيرة في المطبخ أو السطح. فريقنا في جدة مزود بعربات ذات عجلات مطاطية وفنيين لفك مكيفات الاسبليت والشباك والغسالات بأمان تام.'
                : 'Heavy appliances require muscle, rubber-wheeled dollies, and safe disconnection. Our Jeddah technicians disconnect water hoses, unbolt split/window AC indoor and outdoor compressors, and haul away dead refrigerators, freezers, stoves, and treadmills.'}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs">
              {[
                'Double-Door Fridges, Sub-Zero Units, Chest Freezers & Water Coolers',
                'Automatic Washing Machines, Dryers & Built-In Dishwashers',
                'Split ACs, Window ACs & Rooftop Package Units (Safe Uninstallation)',
                'Gas Stoves, Electric Ovens, Range Hoods & Microwaves',
                'Heavy Home Gym Treadmills, Ellipticals & Weight Benches',
                'Certified E-Waste & Metal Recycling Across Jeddah',
              ].map((item, i) => (
                <div
                  key={i}
                  className="p-3.5 bg-[#070B11] border border-white/10 rounded-xl flex items-start gap-2.5 text-slate-200"
                >
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-6 border-t border-white/10 flex flex-wrap gap-3">
            <a
              href={buildWhatsAppLink(
                'Hello Jeddah Junk Removal (0575771358), I need old refrigerator / washing machine / AC removal in Jeddah.'
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 bg-[#25D366] hover:bg-[#20bd5a] text-[#070B11] text-xs font-extrabold rounded-xl inline-flex items-center gap-1.5 cursor-pointer"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp {JEDDAH_PHONE_LOCAL}</span>
            </a>
            <button
              type="button"
              onClick={() => onNavigate('book-pickup')}
              className="px-5 py-3 bg-emerald-500 hover:bg-emerald-400 text-[#070B11] text-xs font-bold rounded-xl cursor-pointer"
            >
              {isAr ? 'حجز رفع الأجهزة والمكيفات بجدة' : 'Schedule Appliance & AC Pickup in Jeddah'}
            </button>
            <button
              type="button"
              onClick={() => onNavigate('truck-pricing')}
              className="px-4 py-3 bg-white/10 hover:bg-white/15 text-white text-xs font-semibold rounded-xl cursor-pointer"
            >
              {isAr ? 'محاكي حجم الأجهزة والمكيفات 3D' : 'Open 3D Appliance Load Visualizer'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ============================================================================
 * PAGE 04: VIP VILLA, COMPOUND & PENTHOUSE FULL CLEANOUT JEDDAH
 * ============================================================================ */
export const Page04VillaCleanout: React.FC<{
  lang: Lang;
  onNavigate: (page: PageId) => void;
}> = ({ lang, onNavigate }) => {
  const isAr = lang === 'ar';

  return (
    <div className="space-y-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        <div className="lg:col-span-7 bg-[#0F1623] border border-white/10 rounded-2xl p-8 lg:p-10 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <div className="text-xs font-mono text-emerald-400">
              PAGE 04 · LUXURY VILLA, PALACE & EXPAT COMPOUND CLEANOUTS IN JEDDAH
            </div>
            <h1 className="font-serif-display text-3xl lg:text-5xl font-bold text-white">
              {isAr
                ? 'إخلاء شامل للفلل والقصور والمجمعات السكنية الفاخرة في جدة'
                : 'White-Glove Full Villa & Compound Cleanouts in Jeddah'}
            </h1>
            <p className="text-sm lg:text-base text-slate-300 leading-relaxed">
              {isAr
                ? 'نقدم خدمة VIP لأصحاب الفلل والقصور في أبحر الشمالية، البساتين، الشاطئ، الروضة، والخالدية، وللمقيمين في مجمعات جدة السكنية (أريبيان هومز، الشربتلي، اللوتس). نخلي الفيلا بالكامل في يوم واحد مع حماية الأرضيات الرخامية.'
                : 'Designed specifically for luxury homeowners and compound residents in Al-Basateen, Obhur North, Al-Shati, Al-Rawdah, Arabian Homes, and Sharbatly Village. Whether selling a villa, preparing for renovation, or relocating abroad, we clear the entire property in a single day.'}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs">
              {[
                'Pre-cleared compound gate passes for Arabian Homes, Sharbatly, Lotus & Sierra',
                'Neoprene & felt floor protection over villa marble stairs and hallways',
                'Full chandelier dismantling, curtain removal & kitchen appliance clearing',
                'Clearance of annex rooms: Driver room, Maid room, Basement & Pool house',
                'Priority charity donation routing for high-end European or Arabic Majlis sets',
                'Complete broom-clean & blower sweep ready for landlord or buyer handover',
              ].map((item, i) => (
                <div
                  key={i}
                  className="p-3.5 bg-[#070B11] border border-white/10 rounded-xl flex items-start gap-2.5 text-slate-200"
                >
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-6 border-t border-white/10 flex flex-wrap gap-3">
            <a
              href={buildWhatsAppLink(
                'Hello Jeddah Junk Removal (0575771358), I need a full villa / compound cleanout in Jeddah.'
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 bg-[#25D366] hover:bg-[#20bd5a] text-[#070B11] text-xs font-extrabold rounded-xl inline-flex items-center gap-1.5 cursor-pointer"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp {JEDDAH_PHONE_LOCAL}</span>
            </a>
            <button
              type="button"
              onClick={() => onNavigate('book-pickup')}
              className="px-5 py-3 bg-emerald-500 hover:bg-emerald-400 text-[#070B11] text-xs font-bold rounded-xl cursor-pointer"
            >
              {isAr ? 'حجز إخلاء فيلا كاملة في جدة' : 'Book Full Villa Cleanout in Jeddah'}
            </button>
            <button
              type="button"
              onClick={() => onNavigate('jeddah-districts')}
              className="px-4 py-3 bg-white/10 hover:bg-white/15 text-white text-xs font-semibold rounded-xl cursor-pointer"
            >
              {isAr ? 'استعراض أحياء وكومباوندات جدة' : 'View Jeddah Compounds & Districts'}
            </button>
          </div>
        </div>

        <Tilt3DCard className="lg:col-span-5 rounded-2xl overflow-hidden border border-white/15 min-h-[360px]">
          <ResilientImage
            src={GENERATED_IMAGES.majlisWhiteGlove}
            alt="White-glove villa furniture clearance over protective marble runners in Jeddah"
            className="w-full h-full object-cover"
          />
        </Tilt3DCard>
      </div>
    </div>
  );
};

/* ============================================================================
 * PAGE 05: ROOFTOP (SATEH), GARAGE & HOSH JUNK CLEANOUT JEDDAH
 * ============================================================================ */
export const Page05RooftopGarage: React.FC<{
  lang: Lang;
  onNavigate: (page: PageId) => void;
}> = ({ lang, onNavigate }) => {
  const isAr = lang === 'ar';

  return (
    <div className="space-y-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        <Tilt3DCard className="lg:col-span-5 rounded-2xl overflow-hidden border border-white/15 min-h-[360px]">
          <ResilientImage
            src={GENERATED_IMAGES.rooftopGarageCleanout}
            alt="Jeddah rooftop terrace overlooking King Fahd Fountain and Jeddah Tower being cleared by uniformed crew"
            className="w-full h-full object-cover"
          />
        </Tilt3DCard>

        <div className="lg:col-span-7 bg-[#0F1623] border border-white/10 rounded-2xl p-8 lg:p-10 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <div className="text-xs font-mono text-emerald-400">
              PAGE 05 · VILLA ROOFTOP (SATEH), COURTYARD (HOSH) & GARAGE CLEANOUTS JEDDAH
            </div>
            <h1 className="font-serif-display text-3xl lg:text-5xl font-bold text-white">
              {isAr
                ? 'تنظيف وإزالة كراكيب السطح (السطوح) والحوش والكراج في جدة'
                : 'Villa Rooftop (Sateh), Garage & Terrace Junk Removal Jeddah'}
            </h1>
            <p className="text-sm lg:text-base text-slate-300 leading-relaxed">
              {isAr
                ? 'معظم فلل وعمائر جدة تعاني من تراكم الكراكيب فوق السطح أو في الحوش والكراج لسنوات طويلة. عمالنا يصعدون للسطح، يعبئون جميع المخلفات السائبة في أكياس متينة، ينزلون الحديد والأخشاب والأثاث التالف، ويكنسون السطح بالكامل.'
                : 'Over the years, Jeddah villa rooftops (Sateh) and garages turn into storage zones for broken patio furniture, empty cartons, rusty bicycles, old water tanks, spare tires, and leftover tiles. Our crew climbs to the 3rd floor, bags all loose clutter, hauls it down, and sweeps your Sateh clean.'}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs">
              {[
                '3rd & 4th Floor Rooftop (Sateh) Carrying — No Elevator Needed',
                'Dismantling of Old Rooftop Rooms, Pergolas, Tents & Shades',
                'Garage Decluttering: Old Tires, Batteries, Tools, Racks & Bikes',
                'Courtyard (Hosh) Green Waste, Dead Palm Fronds & Broken Plant Pots',
                'Old Fiberglass / Metal Water Tanks, Water Heaters & Scrap Pipes',
                'Full Heavy-Duty Broom & Dust Sweep Included After Hauling',
              ].map((item, i) => (
                <div
                  key={i}
                  className="p-3.5 bg-[#070B11] border border-white/10 rounded-xl flex items-start gap-2.5 text-slate-200"
                >
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-6 border-t border-white/10 flex flex-wrap gap-3">
            <a
              href={buildWhatsAppLink(
                'Hello Jeddah Junk Removal (0575771358), I need a rooftop (Sateh) & garage cleanout in Jeddah.'
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 bg-[#25D366] hover:bg-[#20bd5a] text-[#070B11] text-xs font-extrabold rounded-xl inline-flex items-center gap-1.5 cursor-pointer"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp {JEDDAH_PHONE_LOCAL}</span>
            </a>
            <button
              type="button"
              onClick={() => onNavigate('book-pickup')}
              className="px-5 py-3 bg-emerald-500 hover:bg-emerald-400 text-[#070B11] text-xs font-bold rounded-xl cursor-pointer"
            >
              {isAr ? 'احجز تنظيف السطح والحوش بجدة' : 'Book Sateh & Garage Cleanout in Jeddah'}
            </button>
            <button
              type="button"
              onClick={() => onNavigate('truck-pricing')}
              className="px-4 py-3 bg-white/10 hover:bg-white/15 text-white text-xs font-semibold rounded-xl cursor-pointer"
            >
              {isAr ? 'محاكي حجم شاحنة الدينا 3D' : 'Launch 3D Truck Load Visualizer'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
