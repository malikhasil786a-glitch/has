import React, { useState, useEffect } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Globe,
  Layers,
  MessageCircle,
  PhoneCall,
} from 'lucide-react';
import {
  BookingRecord,
  buildWhatsAppLink,
  INITIAL_SAVED_BOOKINGS,
  JEDDAH_PHONE_LOCAL,
  Lang,
  PageId,
  SUITE_PAGES,
} from './dataset';
import {
  Page01HomeJeddah,
  Page02FurnitureMattress,
  Page03AppliancesAc,
  Page04VillaCleanout,
  Page05RooftopGarage,
} from './PagesPartOne';
import {
  Page06RenovationDebris,
  Page07CommercialOffice,
  Page08TruckPricing,
  Page09JeddahDistricts,
  Page10BookPickup,
} from './PagesPartTwo';

const STORAGE_KEY_JEDDAH_BOOKINGS = 'jeddah_junk_removal_bookings_v3';

export const SaudiEstateSuite: React.FC = () => {
  const [activePage, setActivePage] = useState<PageId>('home');
  const [viewAllPagesMode, setViewAllPagesMode] = useState<boolean>(false);
  const [lang, setLang] = useState<Lang>('en');

  const [quantities, setQuantities] = useState<Record<string, number>>({
    'l-sofa-majlis': 1,
    'king-bed-mattress': 1,
    'fridge-freezer': 1,
    'split-window-ac': 2,
  });
  const [goodConditionDiscount, setGoodConditionDiscount] = useState<boolean>(true);
  const [preselectedDistrict, setPreselectedDistrict] = useState<string>(
    'Al-Rawdah / Al-Khalidiyah, Jeddah'
  );

  const [savedBookings, setSavedBookings] = useState<BookingRecord[]>(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY_JEDDAH_BOOKINGS);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      }
    } catch {
      // ignore storage errors
    }
    return INITIAL_SAVED_BOOKINGS;
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_JEDDAH_BOOKINGS, JSON.stringify(savedBookings));
    } catch {
      // ignore storage errors
    }
  }, [savedBookings]);

  const navigateTo = (page: PageId) => {
    setActivePage(page);
    setViewAllPagesMode(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentPageIndex = SUITE_PAGES.findIndex((p) => p.id === activePage);
  const currentMeta = SUITE_PAGES[currentPageIndex] || SUITE_PAGES[0];

  const handleSlidePrev = () => {
    const prevIdx =
      (currentPageIndex - 1 + SUITE_PAGES.length) % SUITE_PAGES.length;
    navigateTo(SUITE_PAGES[prevIdx].id);
  };

  const handleSlideNext = () => {
    const nextIdx = (currentPageIndex + 1) % SUITE_PAGES.length;
    navigateTo(SUITE_PAGES[nextIdx].id);
  };

  const handleLoadPresetToEstimator = (
    presetKey: 'villa' | 'majlis' | 'appliances' | 'rooftop'
  ) => {
    if (presetKey === 'majlis') {
      setQuantities({
        'l-sofa-majlis': 2,
        'king-bed-mattress': 2,
        'wardrobe-6door': 1,
        'carpet-curtains': 2,
      });
    } else if (presetKey === 'appliances') {
      setQuantities({
        'fridge-freezer': 1,
        'washer-dryer': 1,
        'split-window-ac': 3,
        'stove-oven': 1,
      });
    } else if (presetKey === 'rooftop') {
      setQuantities({
        'rooftop-boxes-10': 2,
        'patio-pergola': 1,
        'scrap-metal-tires': 2,
      });
    } else if (presetKey === 'villa') {
      setQuantities({
        'l-sofa-majlis': 2,
        'king-bed-mattress': 3,
        'wardrobe-6door': 2,
        'fridge-freezer': 1,
        'split-window-ac': 4,
        'rooftop-boxes-10': 2,
      });
    }
    navigateTo('truck-pricing');
  };

  const handleSelectDistrictForBooking = (districtName: string) => {
    setPreselectedDistrict(`${districtName}, Jeddah`);
    navigateTo('book-pickup');
  };

  const handleAddBooking = (record: BookingRecord) => {
    setSavedBookings((prev) => [record, ...prev]);
  };

  const isAr = lang === 'ar';

  return (
    <div
      dir={isAr ? 'rtl' : 'ltr'}
      className="min-h-screen flex flex-col bg-[#070B11] text-[#F8FAFC]"
    >
      {/* STRICT 3-ZONE TOP BAR CONTRACT */}
      <header className="sticky top-0 z-40 bg-[#070B11]/90 backdrop-blur-md border-b border-white/10">
        <div className="max-w-[1360px] mx-auto flex items-center justify-between gap-8 px-6 py-4">
          {/* Zone 1: Single text element wordmark */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              navigateTo('home');
            }}
            className="font-serif-display text-2xl font-extrabold tracking-tight text-white whitespace-nowrap shrink-0"
          >
            {isAr ? 'جدة لإزالة الأثاث والمخلفات' : 'Jeddah Junk Removal'}
          </a>

          {/* Zone 2: 5 concise single-line navigation links */}
          <nav
            aria-label="Primary Navigation"
            className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-300"
          >
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                navigateTo('home');
              }}
              className={`hover:text-white underline-offset-8 hover:underline transition-colors whitespace-nowrap shrink-0 ${
                activePage === 'home' && !viewAllPagesMode
                  ? 'text-emerald-400 font-semibold underline'
                  : ''
              }`}
            >
              {isAr ? 'الرئيسية' : 'Home'}
            </a>
            <a
              href="#furniture-mattress"
              onClick={(e) => {
                e.preventDefault();
                navigateTo('furniture-mattress');
              }}
              className={`hover:text-white underline-offset-8 hover:underline transition-colors whitespace-nowrap shrink-0 ${
                (activePage === 'furniture-mattress' || activePage === 'appliances-ac') &&
                !viewAllPagesMode
                  ? 'text-emerald-400 font-semibold underline'
                  : ''
              }`}
            >
              {isAr ? 'الأثاث والمكيفات' : 'Furniture & ACs'}
            </a>
            <a
              href="#villa-cleanout"
              onClick={(e) => {
                e.preventDefault();
                navigateTo('villa-cleanout');
              }}
              className={`hover:text-white underline-offset-8 hover:underline transition-colors whitespace-nowrap shrink-0 ${
                (activePage === 'villa-cleanout' || activePage === 'rooftop-garage') &&
                !viewAllPagesMode
                  ? 'text-emerald-400 font-semibold underline'
                  : ''
              }`}
            >
              {isAr ? 'الفلل والسطح' : 'Villa & Rooftop'}
            </a>
            <a
              href="#truck-pricing"
              onClick={(e) => {
                e.preventDefault();
                navigateTo('truck-pricing');
              }}
              className={`hover:text-white underline-offset-8 hover:underline transition-colors whitespace-nowrap shrink-0 ${
                activePage === 'truck-pricing' && !viewAllPagesMode
                  ? 'text-emerald-400 font-semibold underline'
                  : ''
              }`}
            >
              {isAr ? 'محاكي الشاحنة 3D' : '3D Load Visualizer'}
            </a>
            <a
              href="#jeddah-districts"
              onClick={(e) => {
                e.preventDefault();
                navigateTo('jeddah-districts');
              }}
              className={`hover:text-white underline-offset-8 hover:underline transition-colors whitespace-nowrap shrink-0 ${
                activePage === 'jeddah-districts' && !viewAllPagesMode
                  ? 'text-emerald-400 font-semibold underline'
                  : ''
              }`}
            >
              {isAr ? 'أحياء جدة' : 'Jeddah Areas'}
            </a>
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="flex items-center shrink-0">
            <button
              type="button"
              onClick={() => navigateTo('book-pickup')}
              className="px-4 py-2 text-xs font-bold text-[#070B11] bg-emerald-500 hover:bg-emerald-400 rounded-xl transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              {isAr ? 'احجز شاحنة بجدة الآن' : 'Book 60-Min Pickup'}
            </button>
          </div>
        </div>
      </header>

      {/* MAIN CONTENT & 10-PAGE INTERACTIVE SLIDE BAR */}
      <main className="flex-1 max-w-[1360px] w-full mx-auto px-6 py-8 space-y-10">
        {/* 10-Page Slide Navigator & Bilingual Switcher */}
        <section
          aria-label="10-Page Jeddah Junk Removal Navigator"
          className="bg-[#0F1623] border border-white/10 rounded-2xl p-3 lg:p-4 flex flex-col xl:flex-row xl:items-center justify-between gap-4"
        >
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 xl:pb-0">
            {SUITE_PAGES.map((p) => {
              const isCurrent = activePage === p.id && !viewAllPagesMode;
              return (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => navigateTo(p.id)}
                  className={`px-3 py-2 rounded-xl text-xs font-semibold transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                    isCurrent
                      ? 'bg-emerald-500 text-[#070B11] font-bold'
                      : 'text-slate-300 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  <span className="font-mono opacity-75 mr-1">{p.index}.</span>
                  <span>{isAr ? p.shortTitleAr : p.shortTitle}</span>
                </button>
              );
            })}
          </div>

          <div className="flex flex-wrap items-center justify-between xl:justify-end gap-2 border-t xl:border-t-0 pt-2 xl:pt-0 border-white/10">
            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={handleSlidePrev}
                className="px-2.5 py-1.5 bg-[#070B11] hover:bg-white/10 border border-white/15 rounded-lg text-xs font-semibold text-white inline-flex items-center gap-1 whitespace-nowrap shrink-0 cursor-pointer"
              >
                <ChevronLeft className="w-3.5 h-3.5" />
                <span>{isAr ? 'السابق' : 'Prev Page'}</span>
              </button>
              <span className="px-2 font-mono text-xs text-emerald-400 font-bold tabular-nums whitespace-nowrap">
                {currentPageIndex + 1} / {SUITE_PAGES.length}
              </span>
              <button
                type="button"
                onClick={handleSlideNext}
                className="px-2.5 py-1.5 bg-[#070B11] hover:bg-white/10 border border-white/15 rounded-lg text-xs font-semibold text-white inline-flex items-center gap-1 whitespace-nowrap shrink-0 cursor-pointer"
              >
                <span>{isAr ? 'التالي' : 'Next Page'}</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <button
              type="button"
              onClick={() => setViewAllPagesMode((v) => !v)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-colors inline-flex items-center gap-1.5 whitespace-nowrap shrink-0 cursor-pointer ${
                viewAllPagesMode
                  ? 'bg-emerald-500 text-[#070B11] border-emerald-400 font-bold'
                  : 'bg-[#070B11] text-white border-white/15 hover:bg-white/10'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>
                {viewAllPagesMode
                  ? isAr
                    ? 'وضع الشرائح (صفحة واحدة)'
                    : 'Single-Page Slide Mode'
                  : isAr
                  ? 'عرض جميع الصفحات (10)'
                  : 'View All 10 Pages Together'}
              </span>
            </button>

            <button
              type="button"
              onClick={() => setLang((l) => (l === 'en' ? 'ar' : 'en'))}
              className="px-3 py-1.5 bg-white/10 hover:bg-white/15 text-white rounded-lg text-xs font-semibold inline-flex items-center gap-1.5 whitespace-nowrap shrink-0 cursor-pointer"
            >
              <Globe className="w-3.5 h-3.5 text-emerald-400" />
              <span>{lang === 'en' ? 'العربية (جدة)' : 'English'}</span>
            </button>
          </div>
        </section>

        {/* Render Either Active Page OR All 10 Pages Together */}
        {viewAllPagesMode ? (
          <div className="space-y-24">
            <Page01HomeJeddah
              lang={lang}
              onNavigate={navigateTo}
              onLoadPresetToEstimator={handleLoadPresetToEstimator}
            />
            <hr className="border-white/10" />
            <Page02FurnitureMattress lang={lang} onNavigate={navigateTo} />
            <hr className="border-white/10" />
            <Page03AppliancesAc lang={lang} onNavigate={navigateTo} />
            <hr className="border-white/10" />
            <Page04VillaCleanout lang={lang} onNavigate={navigateTo} />
            <hr className="border-white/10" />
            <Page05RooftopGarage lang={lang} onNavigate={navigateTo} />
            <hr className="border-white/10" />
            <Page06RenovationDebris lang={lang} onNavigate={navigateTo} />
            <hr className="border-white/10" />
            <Page07CommercialOffice lang={lang} onNavigate={navigateTo} />
            <hr className="border-white/10" />
            <Page08TruckPricing
              lang={lang}
              quantities={quantities}
              setQuantities={setQuantities}
              goodConditionDiscount={goodConditionDiscount}
              setGoodConditionDiscount={setGoodConditionDiscount}
              onProceedToBooking={() => navigateTo('book-pickup')}
            />
            <hr className="border-white/10" />
            <Page09JeddahDistricts
              lang={lang}
              onSelectDistrictForBooking={handleSelectDistrictForBooking}
            />
            <hr className="border-white/10" />
            <Page10BookPickup
              lang={lang}
              quantities={quantities}
              goodConditionDiscount={goodConditionDiscount}
              preselectedDistrict={preselectedDistrict}
              savedBookings={savedBookings}
              onAddBooking={handleAddBooking}
              onNavigate={navigateTo}
            />
          </div>
        ) : (
          <div>
            {activePage === 'home' && (
              <Page01HomeJeddah
                lang={lang}
                onNavigate={navigateTo}
                onLoadPresetToEstimator={handleLoadPresetToEstimator}
              />
            )}
            {activePage === 'furniture-mattress' && (
              <Page02FurnitureMattress lang={lang} onNavigate={navigateTo} />
            )}
            {activePage === 'appliances-ac' && (
              <Page03AppliancesAc lang={lang} onNavigate={navigateTo} />
            )}
            {activePage === 'villa-cleanout' && (
              <Page04VillaCleanout lang={lang} onNavigate={navigateTo} />
            )}
            {activePage === 'rooftop-garage' && (
              <Page05RooftopGarage lang={lang} onNavigate={navigateTo} />
            )}
            {activePage === 'renovation-debris' && (
              <Page06RenovationDebris lang={lang} onNavigate={navigateTo} />
            )}
            {activePage === 'commercial-office' && (
              <Page07CommercialOffice lang={lang} onNavigate={navigateTo} />
            )}
            {activePage === 'truck-pricing' && (
              <Page08TruckPricing
                lang={lang}
                quantities={quantities}
                setQuantities={setQuantities}
                goodConditionDiscount={goodConditionDiscount}
                setGoodConditionDiscount={setGoodConditionDiscount}
                onProceedToBooking={() => navigateTo('book-pickup')}
              />
            )}
            {activePage === 'jeddah-districts' && (
              <Page09JeddahDistricts
                lang={lang}
                onSelectDistrictForBooking={handleSelectDistrictForBooking}
              />
            )}
            {activePage === 'book-pickup' && (
              <Page10BookPickup
                lang={lang}
                quantities={quantities}
                goodConditionDiscount={goodConditionDiscount}
                preselectedDistrict={preselectedDistrict}
                savedBookings={savedBookings}
                onAddBooking={handleAddBooking}
                onNavigate={navigateTo}
              />
            )}
          </div>
        )}

        {/* Bottom Page Slide Bar */}
        {!viewAllPagesMode && (
          <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="text-xs text-slate-400">
              <span className="font-mono font-semibold text-emerald-400">
                Page {currentMeta.index} of 10:
              </span>{' '}
              {isAr ? currentMeta.fullTitleAr : currentMeta.fullTitle}
            </div>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={handleSlidePrev}
                className="px-4 py-2.5 bg-[#0F1623] hover:bg-white/10 border border-white/15 rounded-xl text-xs font-semibold text-white inline-flex items-center gap-1.5 cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>{isAr ? 'الصفحة السابقة' : 'Previous Page'}</span>
              </button>
              <button
                type="button"
                onClick={handleSlideNext}
                className="px-4 py-2.5 bg-emerald-500 hover:bg-emerald-400 rounded-xl text-xs font-bold text-[#070B11] inline-flex items-center gap-1.5 cursor-pointer"
              >
                <span>
                  {isAr
                    ? 'الصفحة التالية'
                    : `Next: ${
                        SUITE_PAGES[(currentPageIndex + 1) % SUITE_PAGES.length]
                          .shortTitle
                      }`}
                </span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </main>

      {/* JEDDAH JUNK REMOVAL FOOTER */}
      <footer className="bg-[#0F1623] border-t border-white/10 mt-20 pb-24 md:pb-0">
        <div className="max-w-[1360px] mx-auto px-6 py-12 space-y-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-4 space-y-3">
              <div className="font-serif-display text-2xl font-extrabold text-white">
                {isAr
                  ? 'شركة جدة لإزالة الأثاث القديم والمخلفات'
                  : 'Jeddah Junk Removal & Hauling'}
              </div>
              <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
                Jeddah’s #1 same-day junk removal, old furniture pickup, broken appliance hauling, Sateh rooftop cleanouts, and Amanah-permitted renovation rubbish removal.
              </p>
              <div className="flex flex-wrap items-center gap-2.5 pt-2">
                <a
                  href={buildWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-2 bg-[#25D366] hover:bg-[#20bd5a] text-[#070B11] text-xs font-extrabold rounded-xl inline-flex items-center gap-1.5"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp: {JEDDAH_PHONE_LOCAL}</span>
                </a>
                <a
                  href={`tel:${JEDDAH_PHONE_LOCAL}`}
                  className="px-3.5 py-2 bg-white/10 hover:bg-white/15 text-white text-xs font-mono font-bold rounded-xl inline-flex items-center gap-1.5"
                >
                  <PhoneCall className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Call: {JEDDAH_PHONE_LOCAL}</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-2.5">
              <div className="text-xs font-semibold text-white">
                All 10 Jeddah Junk Removal Pages
              </div>
              <div className="grid grid-cols-2 gap-2 text-xs text-slate-400">
                {SUITE_PAGES.map((p) => (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() => navigateTo(p.id)}
                    className="text-left hover:text-emerald-400 transition-colors cursor-pointer truncate"
                  >
                    {p.index}. {isAr ? p.shortTitleAr : p.shortTitle}
                  </button>
                ))}
              </div>
            </div>

            <div className="lg:col-span-3 space-y-2.5 text-xs">
              <div className="font-semibold text-white">
                4 Stationed Jeddah Truck Hubs
              </div>
              <div className="space-y-1.5 text-slate-400">
                <div>North Hub: Obhur & Al-Basateen</div>
                <div>Central Hub: Al-Rawdah, Tahlia & Sari St</div>
                <div>West Hub: Al-Shati, Al-Zahra & Al-Salamah</div>
                <div>South/East Hub: Al-Hamdaniyah & Al-Khumrah</div>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
            <div>
              © {new Date().getFullYear()} Jeddah Junk Removal & Old Furniture Hauling (Jeddah, KSA) · {JEDDAH_PHONE_LOCAL}.
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <span>Jeddah Amanah Permitted</span>
              <span aria-hidden="true">·</span>
              <span>Al-Birr & Mawakeb Al-Ajr Charity Partner</span>
              <span aria-hidden="true">·</span>
              <span>60-Minute Jeddah Arrival</span>
            </div>
          </div>
        </div>
      </footer>

      {/* MOBILE STICKY BOTTOM WHATSAPP & CALL BAR (0575771358) */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#070B11]/95 backdrop-blur-md border-t border-white/15 p-3 flex items-center gap-2.5">
        <a
          href={buildWhatsAppLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 py-3 px-4 bg-[#25D366] hover:bg-[#20bd5a] text-[#070B11] text-xs font-extrabold rounded-xl flex items-center justify-center gap-2 shadow-lg"
        >
          <MessageCircle className="w-4 h-4 shrink-0" />
          <span>{isAr ? `واتساب جدة: ${JEDDAH_PHONE_LOCAL}` : `WhatsApp: ${JEDDAH_PHONE_LOCAL}`}</span>
        </a>
        <a
          href={`tel:${JEDDAH_PHONE_LOCAL}`}
          className="py-3 px-4 bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs font-mono font-bold rounded-xl flex items-center justify-center gap-1.5"
        >
          <PhoneCall className="w-4 h-4 shrink-0 text-emerald-400" />
          <span>{JEDDAH_PHONE_LOCAL}</span>
        </a>
      </div>

      {/* DESKTOP FLOATING WHATSAPP & CALL DOCK (0575771358) */}
      <div className="hidden md:flex fixed bottom-6 right-6 z-50 items-center gap-2.5">
        <a
          href={`tel:${JEDDAH_PHONE_LOCAL}`}
          className="px-4 py-3 bg-[#0F1623]/95 hover:bg-[#162033] border border-white/15 text-white text-xs font-mono font-bold rounded-2xl shadow-2xl inline-flex items-center gap-2 backdrop-blur-md transition-transform hover:scale-105"
        >
          <PhoneCall className="w-4 h-4 text-emerald-400" />
          <span>Call: {JEDDAH_PHONE_LOCAL}</span>
        </a>
        <a
          href={buildWhatsAppLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-3 bg-[#25D366] hover:bg-[#20bd5a] text-[#070B11] text-xs font-extrabold rounded-2xl shadow-2xl inline-flex items-center gap-2 transition-transform hover:scale-105"
        >
          <MessageCircle className="w-4 h-4" />
          <span>WhatsApp Jeddah: {JEDDAH_PHONE_LOCAL}</span>
        </a>
      </div>
    </div>
  );
};
