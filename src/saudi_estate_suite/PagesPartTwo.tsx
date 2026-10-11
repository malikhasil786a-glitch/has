import React, { useState } from 'react';
import {
  ArrowRight,
  Check,
  CheckCircle2,
  Copy,
  MessageCircle,
  Minus,
  PhoneCall,
  Plus,
  Printer,
  RotateCcw,
} from 'lucide-react';
import {
  BookingRecord,
  buildWhatsAppLink,
  ESTIMATOR_CATALOG,
  GENERATED_IMAGES,
  JEDDAH_PHONE_LOCAL,
  JEDDAH_TRUCK_LOADS,
  JEDDAH_ZONES,
  Lang,
  PageId,
} from './dataset';
import { JeddahTruck3DViewport, Tilt3DCard } from './JeddahTruck3DViewport';
import { ResilientImage } from './PagesPartOne';

/* ============================================================================
 * PAGE 06: RENOVATION RUBBISH, TILE, MARBLE & WOOD HAULING JEDDAH
 * ============================================================================ */
export const Page06RenovationDebris: React.FC<{
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
              PAGE 06 · JEDDAH AMANAH (BALADIYA) COMPLIANT RENOVATION DEBRIS REMOVAL
            </div>
            <h1 className="font-serif-display text-3xl lg:text-5xl font-bold text-white">
              {isAr
                ? 'إزالة مخلفات الترميم والتشطيبات والسيراميك والأخشاب في جدة'
                : 'Renovation Debris, Broken Tiles & Old Kitchen Hauling Jeddah'}
            </h1>
            <p className="text-sm lg:text-base text-slate-300 leading-relaxed">
              {isAr
                ? 'تفرض أمانة محافظة جدة مخالفات صارمة على رمي مخلفات البناء أو الديكور أمام الفلل أو في الشوارع. نحن نوفر أكياساً متينة وعمالة لتحميل السيراميك المكسر، الجبس بورد، دواليب المطابخ القديمة، والأبواب ونقلها للمرادم الرسمية فوراً.'
                : 'Leaving renovation rubble sacks, broken bathroom tiles, or torn-out kitchen cabinets outside your villa gate in Jeddah risks municipal penalties. Instead of placing an unsightly street skip bin that blocks your driveway for a week, our crew loads and hauls all remodeling debris in a single visit.'}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs">
              {[
                'Bagged Ceramic Tiles, Porcelain, Marble Offcuts & Plaster Rubble',
                'Dismantled Gypsum Board Partitions, False Ceilings & Insulation',
                'Torn-Out Old Kitchen Cabinets, Countertops, Sinks & Range Hoods',
                'Old Bathroom Sanitaryware: Bathtubs, Jacuzzis, Toilets & Vanities',
                'Wooden Crates, Pallets, Old Doors, Window Frames & Aluminium',
                'Direct Loading From Inside Apartment/Villa — Zero Street Mess',
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
                'Hello Jeddah Junk Removal (0575771358), I need renovation debris / tile / wood removal in Jeddah.'
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
              {isAr ? 'احجز شاحنة مخلفات ترميم بجدة' : 'Book Renovation Debris Truck in Jeddah'}
            </button>
            <button
              type="button"
              onClick={() => onNavigate('truck-pricing')}
              className="px-4 py-3 bg-white/10 hover:bg-white/15 text-white text-xs font-semibold rounded-xl cursor-pointer"
            >
              {isAr ? 'محاكي حجم أكياس الترميم 3D' : 'Launch 3D Debris Volume Calculator'}
            </button>
          </div>
        </div>

        <Tilt3DCard className="lg:col-span-5 rounded-2xl overflow-hidden border border-white/15 min-h-[360px]">
          <ResilientImage
            src={GENERATED_IMAGES.jeddahPenthouseDebris}
            alt="Post-renovation marble slabs, timber crates, and debris staged cleanly in a Jeddah waterfront residence"
            className="w-full h-full object-cover"
          />
        </Tilt3DCard>
      </div>
    </div>
  );
};

/* ============================================================================
 * PAGE 07: COMMERCIAL OFFICE, RESTAURANT & WAREHOUSE JUNK JEDDAH
 * ============================================================================ */
export const Page07CommercialOffice: React.FC<{
  lang: Lang;
  onNavigate: (page: PageId) => void;
}> = ({ lang, onNavigate }) => {
  const isAr = lang === 'ar';

  return (
    <div className="space-y-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        <Tilt3DCard className="lg:col-span-5 rounded-2xl overflow-hidden border border-white/15 min-h-[360px]">
          <ResilientImage
            src={GENERATED_IMAGES.commercialOfficeClear}
            alt="High-floor executive office clearance on Jeddah Corniche overlooking the Red Sea at sunset"
            className="w-full h-full object-cover"
          />
        </Tilt3DCard>

        <div className="lg:col-span-7 bg-[#0F1623] border border-white/10 rounded-2xl p-8 lg:p-10 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <div className="text-xs font-mono text-emerald-400">
              PAGE 07 · TAHLIA ST, KING ABDULAZIZ RD, CORNICHE & AL-KHUMRAH COMMERCIAL CLEARANCE
            </div>
            <h1 className="font-serif-display text-3xl lg:text-5xl font-bold text-white">
              {isAr
                ? 'إخلاء المكاتب والشركات والمطاعم والمستودعات في جدة'
                : 'Office, Retail Showroom, Restaurant & Warehouse Junk Jeddah'}
            </h1>
            <p className="text-sm lg:text-base text-slate-300 leading-relaxed">
              {isAr
                ? 'نخدم الشركات والبنوك والمطاعم والمعارض التجارية في طريق الملك عبدالعزيز، شارع التحلية، طريق المدينة، شارع صاري، ومستودعات الخمرة والمنطقة الصناعية بجدة. متاح العمل خلال الفترة المسائية لإخلاء المولات والأبراج.'
                : 'Relocating or closing an office on King Abdulaziz Road, remodeling a cafe on Tahlia Street, or clearing old stock from a warehouse in Al-Khumrah? We provide daytime and night-shift (11 PM – 5 AM) commercial junk hauling with official handover documentation.'}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs">
              {[
                'Office Workstations, Cubicles, Conference Tables & Swivel Chairs',
                'Commercial Restaurant Chillers, Stainless Steel Tables, Ovens & Booths',
                'Retail Mall Kiosks, Shelving, Display Racks, Mannequins & Signage',
                'Warehouse Wooden Pallets, Racking, Cardboard Bales & Damaged Stock',
                'Old IT Equipment: Computers, Servers, Photocopiers, Cables & UPS',
                'Building Management Permits & Official Clearance Certificates',
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
                'Hello Jeddah Junk Removal (0575771358), I need commercial office / shop / warehouse junk clearance in Jeddah.'
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
              {isAr ? 'حجز إخلاء للمكاتب والشركات بجدة' : 'Book Commercial Clearance in Jeddah'}
            </button>
            <button
              type="button"
              onClick={() => onNavigate('truck-pricing')}
              className="px-4 py-3 bg-white/10 hover:bg-white/15 text-white text-xs font-semibold rounded-xl cursor-pointer"
            >
              {isAr ? 'محاكي حجم إخلاء المكاتب 3D' : 'Estimate Office Truck Loads in 3D'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ============================================================================
 * PAGE 08: 3D TRUCK LOAD VISUALIZER & VOLUME CALCULATOR JEDDAH (NO PRICING)
 * ============================================================================ */
interface TruckPricingProps {
  lang: Lang;
  quantities: Record<string, number>;
  setQuantities: React.Dispatch<React.SetStateAction<Record<string, number>>>;
  goodConditionDiscount: boolean;
  setGoodConditionDiscount: React.Dispatch<React.SetStateAction<boolean>>;
  onProceedToBooking: () => void;
}

export const Page08TruckPricing: React.FC<TruckPricingProps> = ({
  lang,
  quantities,
  setQuantities,
  goodConditionDiscount,
  setGoodConditionDiscount,
  onProceedToBooking,
}) => {
  const isAr = lang === 'ar';
  const [selectedTierId, setSelectedTierId] = useState<string>('half-load');
  const [catFilter, setCatFilter] = useState<
    'all' | 'furniture' | 'appliances' | 'rooftop' | 'renovation'
  >('all');

  const activeTier =
    JEDDAH_TRUCK_LOADS.find((t) => t.id === selectedTierId) || JEDDAH_TRUCK_LOADS[2];

  const updateQty = (id: string, delta: number) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: Math.max(0, (prev[id] || 0) + delta),
    }));
  };

  const selectedItems = ESTIMATOR_CATALOG.filter((i) => (quantities[i.id] || 0) > 0);
  const totalVolumeM3 = selectedItems.reduce(
    (sum, i) => sum + i.volumeM3 * (quantities[i.id] || 0),
    0
  );
  const totalWeightKg = selectedItems.reduce(
    (sum, i) => sum + i.weightKg * (quantities[i.id] || 0),
    0
  );
  const truckFillPct =
    selectedItems.length > 0
      ? Math.min(100, Math.max(12, Math.round((totalVolumeM3 / 18) * 100)))
      : activeTier.fillPercentage;

  const recommendedCrew =
    totalVolumeM3 > 12 ? '4 Specialists + Supervisor' : totalVolumeM3 > 5 ? '3 Specialists' : '2 Specialists';

  const visibleItems = ESTIMATOR_CATALOG.filter(
    (i) => catFilter === 'all' || i.category === catFilter
  );

  return (
    <div className="space-y-14">
      {/* Section 1: Interactive 3D WebGL Dyna Truck Load Visualizer */}
      <section className="bg-[#0F1623] border border-white/10 rounded-2xl p-8 lg:p-10 space-y-8">
        <div className="border-b border-white/10 pb-6 space-y-2">
          <div className="text-xs font-mono text-emerald-400">
            PAGE 08 · INTERACTIVE 3D WEBGL TRUCK CARGO SIMULATOR & VOLUMEPLANNER
          </div>
          <h1 className="font-serif-display text-3xl lg:text-5xl font-bold text-white">
            {isAr
              ? 'محاكي شاحنة الدينا ثلاثي الأبعاد 3D وحاسبة الحجم بجدة'
              : 'Interactive 3D Truck Load Simulator & Volume Calculator'}
          </h1>
          <p className="text-sm text-slate-300">
            {isAr
              ? 'قم بتدوير الشاحنة 360 درجة وشاهد كيف تتسع أغراضك داخل شاحنة الدينا المغلقة (18 متر مكعب).'
              : 'Rotate our 3D Jeddah Jumbo Box Truck 360°, inspect the X-Ray cargo bay, or click any load size below to see real-time 3D stacking and crew capacity.'}
          </p>
        </div>

        {/* 5 Load Size Selector Buttons (Volume & Weight Only - No Pricing) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
          {JEDDAH_TRUCK_LOADS.map((tier) => {
            const isSelected = tier.id === activeTier.id;
            return (
              <button
                key={tier.id}
                type="button"
                onClick={() => setSelectedTierId(tier.id)}
                className={`p-4 rounded-xl border text-left transition-colors cursor-pointer flex flex-col justify-between gap-2 ${
                  isSelected
                    ? 'bg-emerald-500 text-[#070B11] border-emerald-400 font-bold'
                    : 'bg-[#070B11] text-white border-white/10 hover:border-emerald-500/50'
                }`}
              >
                <div className="text-xs font-semibold">{tier.fractionLabel}</div>
                <div className="font-mono text-2xl font-extrabold tabular-nums">
                  {tier.volumeM3} m³
                </div>
                <div
                  className={`text-[11px] font-mono tabular-nums ${
                    isSelected ? 'text-[#070B11]/80' : 'text-slate-400'
                  }`}
                >
                  {tier.fillPercentage}% Truck · Up to {tier.maxWeightKg} kg
                </div>
              </button>
            );
          })}
        </div>

        {/* Live 3D WebGL Truck Viewport + Tier Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          <div className="lg:col-span-7">
            <JeddahTruck3DViewport
              fillPercentage={truckFillPct}
              onSelectFillPercentage={(pct) => {
                const matched = JEDDAH_TRUCK_LOADS.find((t) => t.fillPercentage === pct);
                if (matched) setSelectedTierId(matched.id);
              }}
              heightClass="h-[380px] lg:h-[420px]"
            />
          </div>

          <div className="lg:col-span-5 bg-[#070B11] border border-white/10 rounded-2xl p-6 lg:p-8 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="text-xs font-mono text-emerald-400">
                SELECTED JEDDAH FLEET TIER · {activeTier.fillPercentage}% CARGO CAPACITY
              </div>
              <h2 className="font-serif-display text-2xl lg:text-3xl font-bold text-white">
                {isAr ? activeTier.nameAr : activeTier.name}
              </h2>
              <div className="font-mono text-2xl font-extrabold text-emerald-400 tabular-nums">
                {activeTier.volumeM3} m³ Volume · {activeTier.dispatchBadge}
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                <strong className="text-white block mb-1">What fits inside this load:</strong>
                {isAr ? activeTier.equivalentToAr : activeTier.equivalentTo}
              </p>
              <div className="p-3.5 bg-[#0F1623] border border-white/10 rounded-xl text-xs text-emerald-300">
                Included: {activeTier.crewIncluded}
              </div>
            </div>

            <button
              type="button"
              onClick={onProceedToBooking}
              className="w-full py-3.5 px-5 bg-emerald-500 hover:bg-emerald-400 text-[#070B11] text-xs font-bold rounded-xl transition-colors cursor-pointer"
            >
              Book {activeTier.fractionLabel} Pickup in Jeddah →
            </button>
          </div>
        </div>
      </section>

      {/* Section 2: Interactive Item-by-Item Jeddah Volume & Crew Calculator */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-8 space-y-6">
          <div className="bg-[#0F1623] border border-white/10 rounded-2xl p-4 flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap gap-1 p-1 bg-[#070B11] rounded-xl border border-white/10">
              {[
                { id: 'all', label: 'All Items (18)' },
                { id: 'furniture', label: 'Sofas, Beds & Mattresses' },
                { id: 'appliances', label: 'Fridges, Washers & ACs' },
                { id: 'rooftop', label: 'Rooftop (Sateh) & Garage' },
                { id: 'renovation', label: 'Renovation & Office' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setCatFilter(tab.id as typeof catFilter)}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                    catFilter === tab.id
                      ? 'bg-emerald-500 text-[#070B11] font-bold'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <label className="flex items-center gap-2 text-xs font-semibold text-emerald-400 cursor-pointer">
              <input
                type="checkbox"
                checked={goodConditionDiscount}
                onChange={(e) => setGoodConditionDiscount(e.target.checked)}
                className="w-4 h-4 accent-emerald-500"
              />
              <span>Items in Good Reusable Condition (Priority Charity Donation)</span>
            </label>
          </div>

          <div className="bg-[#0F1623] border border-white/10 rounded-2xl divide-y divide-white/10 overflow-hidden">
            {visibleItems.map((item) => {
              const qty = quantities[item.id] || 0;
              return (
                <div
                  key={item.id}
                  className={`p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 ${
                    qty > 0 ? 'bg-emerald-500/10' : 'bg-[#0F1623]'
                  }`}
                >
                  <div className="space-y-1">
                    <div className="text-sm font-semibold text-white">
                      {isAr ? item.nameAr : item.name}
                    </div>
                    <div className="flex flex-wrap items-center gap-2 text-xs text-slate-400 font-mono tabular-nums">
                      <span>Volume: {item.volumeM3} m³</span>
                      <span aria-hidden="true">·</span>
                      <span>Approx Weight: {item.weightKg} kg</span>
                      <span aria-hidden="true">·</span>
                      <span className="text-emerald-400">{item.handlingNote}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 self-end sm:self-center shrink-0">
                    <button
                      type="button"
                      onClick={() => updateQty(item.id, -1)}
                      disabled={qty === 0}
                      className="w-8 h-8 rounded-lg border border-white/15 bg-[#070B11] hover:bg-white/10 disabled:opacity-40 flex items-center justify-center text-white cursor-pointer"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="w-7 text-center font-mono text-sm font-bold text-white tabular-nums">
                      {qty}
                    </span>
                    <button
                      type="button"
                      onClick={() => updateQty(item.id, 1)}
                      className="w-8 h-8 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-[#070B11] flex items-center justify-center font-bold cursor-pointer"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right 4 Columns: Live Jeddah Volume & Crew Manifest */}
        <div className="lg:col-span-4 bg-[#0F1623] border border-white/10 rounded-2xl p-6 lg:p-8 space-y-6">
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <h2 className="font-serif-display text-2xl font-bold text-white">
              3D Cargo Load Summary
            </h2>
            <button
              type="button"
              onClick={() => setQuantities({})}
              className="text-xs text-slate-400 hover:text-white inline-flex items-center gap-1 cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Clear</span>
            </button>
          </div>

          <div className="grid grid-cols-2 gap-3 bg-[#070B11] border border-white/10 rounded-xl p-4 font-mono tabular-nums">
            <div>
              <div className="text-xs text-slate-400">Total Volume</div>
              <div className="text-lg font-bold text-white">{totalVolumeM3.toFixed(1)} m³</div>
            </div>
            <div>
              <div className="text-xs text-slate-400">3D Truck Fill</div>
              <div className="text-lg font-bold text-emerald-400">{truckFillPct}%</div>
            </div>
          </div>

          <div className="space-y-2.5 text-xs font-mono tabular-nums border-t border-white/10 pt-4">
            <div className="flex justify-between text-slate-300">
              <span>Estimated Load Weight:</span>
              <span>{totalWeightKg.toLocaleString()} kg</span>
            </div>
            <div className="flex justify-between text-slate-300">
              <span>Recommended Crew:</span>
              <span className="text-emerald-400 font-semibold">{recommendedCrew}</span>
            </div>
            {goodConditionDiscount && (
              <div className="flex justify-between text-amber-300 font-semibold">
                <span>Donation Routing:</span>
                <span>Al-Birr / Mawakeb Al-Ajr</span>
              </div>
            )}
            <div className="flex justify-between text-sm font-bold text-white pt-3 border-t border-white/10">
              <span>Jeddah On-Site Quote:</span>
              <span className="text-emerald-400">Free Instant Assessment</span>
            </div>
          </div>

          <div className="space-y-2.5">
            <a
              href={buildWhatsAppLink(
                `Hello Jeddah Junk Removal (${JEDDAH_PHONE_LOCAL}), my 3D Load Estimate is ${totalVolumeM3.toFixed(
                  1
                )} m³ (${truckFillPct}% Truck, ~${totalWeightKg} kg). Items: ${
                  selectedItems.map((i) => `${quantities[i.id]}x ${i.name}`).join(', ') ||
                  activeTier.fractionLabel
                }.`
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 px-5 bg-[#25D366] hover:bg-[#20bd5a] text-[#070B11] text-sm font-extrabold rounded-xl transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Send Load List to WhatsApp ({JEDDAH_PHONE_LOCAL})</span>
            </a>

            <button
              type="button"
              onClick={onProceedToBooking}
              className="w-full py-3.5 px-5 bg-emerald-500 hover:bg-emerald-400 text-[#070B11] text-sm font-bold rounded-xl transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Book This Pickup Online</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ============================================================================
 * PAGE 09: ALL 36 JEDDAH NEIGHBORHOODS & COMPOUNDS WE SERVE
 * ============================================================================ */
export const Page09JeddahDistricts: React.FC<{
  lang: Lang;
  onSelectDistrictForBooking: (districtName: string) => void;
}> = ({ lang, onSelectDistrictForBooking }) => {
  const isAr = lang === 'ar';
  const [activeZoneId, setActiveZoneId] = useState<string>(JEDDAH_ZONES[0].id);

  const activeZone =
    JEDDAH_ZONES.find((z) => z.id === activeZoneId) || JEDDAH_ZONES[0];

  return (
    <div className="space-y-12">
      <div className="border-b border-white/10 pb-8 space-y-2 max-w-3xl">
        <div className="text-xs font-mono text-emerald-400">
          PAGE 09 · STATIONED JUNK REMOVAL TRUCKS ACROSS EVERY DISTRICT OF JEDDAH
        </div>
        <h1 className="font-serif-display text-3xl lg:text-5xl font-bold text-white">
          {isAr
            ? 'نغطي جميع أحياء شمال ووسط وجنوب جدة والمجمعات السكنية'
            : 'All 36 Jeddah Neighborhoods & Luxury Compounds We Serve'}
        </h1>
        <p className="text-sm text-slate-300">
          {isAr
            ? 'شاحناتنا متمركزة على مدار الساعة في أبحر، طريق الملك، شارع التحلية، وطريق المدينة للوصول إليك خلال 30 إلى 60 دقيقة.'
            : 'Because our Dyna trucks are stationed across 4 dedicated Jeddah hubs (North Obhur, Madinah Rd/Tahlia St, Prince Sultan Rd, and Al-Khumrah), we reach any home or office in 30 to 60 minutes.'}
        </p>
      </div>

      {/* Zone Tabs */}
      <div className="flex flex-wrap gap-2">
        {JEDDAH_ZONES.map((z) => (
          <button
            key={z.id}
            type="button"
            onClick={() => setActiveZoneId(z.id)}
            className={`px-4 py-3 rounded-xl border text-left transition-colors cursor-pointer ${
              z.id === activeZone.id
                ? 'bg-emerald-500 text-[#070B11] border-emerald-400 font-bold'
                : 'bg-[#0F1623] text-white border-white/10 hover:border-emerald-500/40'
            }`}
          >
            <div className="text-xs font-semibold">
              {isAr ? z.zoneNameAr : z.zoneName}
            </div>
            <div
              className={`text-[11px] font-mono tabular-nums mt-0.5 ${
                z.id === activeZone.id ? 'text-[#070B11]/80' : 'text-slate-400'
              }`}
            >
              {z.stationedTrucks} Trucks Stationed · {z.arrivalSla}
            </div>
          </button>
        ))}
      </div>

      {/* Zone Details & Districts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-4 bg-[#0F1623] border border-white/10 rounded-2xl p-6 space-y-4">
          <div className="text-xs font-mono text-emerald-400">{activeZone.arrivalSla}</div>
          <h2 className="font-serif-display text-2xl font-bold text-white">
            {isAr ? activeZone.zoneNameAr : activeZone.zoneName}
          </h2>
          <div className="text-xs text-slate-300 space-y-3">
            <div>
              <strong className="text-white block">Jeddah Fleet Hub Location:</strong>
              {activeZone.depotLocation}
            </div>
            <div>
              <strong className="text-white block">Active Crews Ready Now:</strong>
              {activeZone.stationedTrucks} Closed Dyna Box Trucks + Pickup Units
            </div>
          </div>
        </div>

        <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {activeZone.districts.map((dist) => (
            <Tilt3DCard
              key={dist.name}
              className="bg-[#0F1623] border border-white/10 rounded-2xl p-6 flex flex-col justify-between space-y-4"
            >
              <div className="space-y-2">
                <h3 className="font-serif-display text-xl font-bold text-white">
                  {isAr ? dist.nameAr : dist.name}
                </h3>
                <p className="text-xs text-slate-300">{dist.popularJobs}</p>
                <div className="text-xs font-mono text-emerald-400">{dist.gateAccessNote}</div>
              </div>
              <button
                type="button"
                onClick={() => onSelectDistrictForBooking(dist.name)}
                className="w-full py-2.5 px-4 bg-white/5 hover:bg-emerald-500 hover:text-[#070B11] border border-white/10 text-xs font-bold text-white rounded-xl transition-colors cursor-pointer"
              >
                {isAr
                  ? `اطلب شاحنة في ${dist.nameAr}`
                  : `Book Truck in ${dist.name}`}
              </button>
            </Tilt3DCard>
          ))}
        </div>
      </div>
    </div>
  );
};

/* ============================================================================
 * PAGE 10: BOOK SAME-DAY JEDDAH PICKUP (NO PRICING)
 * ============================================================================ */
interface BookPickupProps {
  lang: Lang;
  quantities: Record<string, number>;
  goodConditionDiscount: boolean;
  preselectedDistrict: string;
  savedBookings: BookingRecord[];
  onAddBooking: (record: BookingRecord) => void;
  onNavigate: (page: PageId) => void;
}

export const Page10BookPickup: React.FC<BookPickupProps> = ({
  lang,
  quantities,
  goodConditionDiscount,
  preselectedDistrict,
  savedBookings,
  onAddBooking,
}) => {
  const isAr = lang === 'ar';
  const [clientName, setClientName] = useState('');
  const [phone, setPhone] = useState('');
  const [district, setDistrict] = useState(
    preselectedDistrict || 'Al-Rawdah / Al-Khalidiyah, Jeddah'
  );
  const [propertyType, setPropertyType] = useState('Private Villa (Ground + Rooftop)');
  const [serviceWindow, setServiceWindow] = useState('Today · Within 60 Minutes (Urgent)');
  const [loadType, setLoadType] = useState('1/2 Closed Dyna Truck Load (9.0 m³)');
  const [notes, setNotes] = useState('');
  const [formError, setFormError] = useState<string | null>(null);
  const [latestBooking, setLatestBooking] = useState<BookingRecord | null>(null);
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  React.useEffect(() => {
    if (preselectedDistrict) setDistrict(preselectedDistrict);
  }, [preselectedDistrict]);

  const selectedItems = ESTIMATOR_CATALOG.filter((i) => (quantities[i.id] || 0) > 0);
  const estimatedVolumeM3 =
    selectedItems.length > 0
      ? Number(
          selectedItems
            .reduce((sum, i) => sum + i.volumeM3 * (quantities[i.id] || 0), 0)
            .toFixed(1)
        )
      : 9.0;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (clientName.trim().length < 2) {
      setFormError('Please enter your name.');
      return;
    }
    if (phone.trim().length < 8) {
      setFormError('Please enter a valid Saudi mobile number (05X XXX XXXX).');
      return;
    }
    setFormError(null);

    const ref = `JED-JUNK-${Math.floor(1000 + Math.random() * 9000)}`;
    const itemsSummary =
      selectedItems.length > 0
        ? selectedItems.map((i) => `${quantities[i.id]}x ${i.name}`)
        : [loadType];

    const record: BookingRecord = {
      referenceCode: ref,
      createdAt: 'Just Now · Jeddah Central Dispatch',
      clientName: clientName.trim(),
      phone: phone.trim(),
      district,
      propertyType,
      serviceWindow,
      loadType,
      goodConditionCheck: goodConditionDiscount,
      estimatedVolumeM3,
      selectedItemsSummary: itemsSummary,
      notes: notes.trim() || 'Includes dismantling, stairs carrying & broom sweep.',
      status: 'Confirmed · 60-Min SLA',
    };

    onAddBooking(record);
    setLatestBooking(record);
  };

  const handleCopy = (record: BookingRecord) => {
    const text = `JEDDAH JUNK REMOVAL BOOKING PASS\nRef: ${record.referenceCode}\nCustomer: ${record.clientName} (${record.phone})\nJeddah District: ${record.district}\nTime Slot: ${record.serviceWindow}\nLoad: ${record.loadType}\nEst. Volume: ${record.estimatedVolumeM3} m³`;
    navigator.clipboard?.writeText(text);
    setCopiedCode(record.referenceCode);
    setTimeout(() => setCopiedCode(null), 2500);
  };

  return (
    <div className="space-y-12">
      <div className="border-b border-white/10 pb-8 flex flex-col lg:flex-row lg:items-end justify-between gap-6">
        <div className="space-y-2 max-w-3xl">
          <div className="text-xs font-mono text-emerald-400">
            PAGE 10 · INSTANT JEDDAH TRUCK BOOKING & WHATSAPP {JEDDAH_PHONE_LOCAL}
          </div>
          <h1 className="font-serif-display text-3xl lg:text-5xl font-bold text-white">
            {isAr
              ? `احجز شاحنة جدة الآن أو أرسل الموقع عبر واتساب ${JEDDAH_PHONE_LOCAL}`
              : 'Book Same-Day Junk Removal Pickup in Jeddah'}
          </h1>
          <p className="text-sm text-slate-300">
            {isAr
              ? 'أكمل البيانات أدناه أو تواصل مباشرة عبر واتساب 0575771358 لإرسال صور الأثاث والموقع الجغرافي في جدة.'
              : 'Fill in your Jeddah address below, or tap WhatsApp 0575771358 to send photos of your items and live location for immediate dispatch.'}
          </p>
        </div>

        <div className="flex flex-wrap gap-3 shrink-0">
          <a
            href={buildWhatsAppLink(
              `Hello Jeddah Junk Removal (${JEDDAH_PHONE_LOCAL}), I want to book a pickup in ${district} (${loadType}).`
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 bg-[#25D366] hover:bg-[#20bd5a] text-[#070B11] text-xs font-extrabold rounded-xl inline-flex items-center gap-2 cursor-pointer"
          >
            <MessageCircle className="w-4 h-4" />
            <span>WhatsApp Photos & Location: {JEDDAH_PHONE_LOCAL}</span>
          </a>
          <a
            href={`tel:${JEDDAH_PHONE_LOCAL}`}
            className="px-4 py-3 bg-white/10 hover:bg-white/15 border border-white/15 text-white text-xs font-bold rounded-xl inline-flex items-center gap-2 cursor-pointer"
          >
            <PhoneCall className="w-4 h-4 text-emerald-400" />
            <span>Call {JEDDAH_PHONE_LOCAL}</span>
          </a>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <form
          onSubmit={handleSubmit}
          className="lg:col-span-7 bg-[#0F1623] border border-white/10 rounded-2xl p-8 space-y-5"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-200 mb-1.5">
                Your Name *
              </label>
              <input
                type="text"
                value={clientName}
                onChange={(e) => setClientName(e.target.value)}
                placeholder="e.g., Abu Fahad / Eng. Tariq"
                className="w-full px-3.5 py-2.5 bg-[#070B11] border border-white/15 rounded-xl text-sm text-white"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-200 mb-1.5">
                Saudi Mobile / WhatsApp (05X) *
              </label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="055 XXX XXXX"
                className="w-full px-3.5 py-2.5 bg-[#070B11] border border-white/15 rounded-xl text-sm font-mono text-white"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-200 mb-1.5">
                Jeddah Neighborhood / Compound
              </label>
              <input
                type="text"
                value={district}
                onChange={(e) => setDistrict(e.target.value)}
                placeholder="e.g., Obhur North / Al-Basateen / Al-Rawdah"
                className="w-full px-3.5 py-2.5 bg-[#070B11] border border-white/15 rounded-xl text-sm text-white"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-200 mb-1.5">
                Property Type & Floor
              </label>
              <select
                value={propertyType}
                onChange={(e) => setPropertyType(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-[#070B11] border border-white/15 rounded-xl text-sm text-white"
              >
                <option value="Private Villa (Ground + Rooftop)">
                  Private Villa (Ground + Sateh Rooftop)
                </option>
                <option value="Gated Compound Villa (Need Gate Pass)">
                  Gated Compound Villa (Arabian Homes / Sharbatly)
                </option>
                <option value="Apartment with Elevator">Apartment with Elevator</option>
                <option value="Apartment / Rooftop (Stairs Only)">
                  Apartment / Rooftop (Stairs Carrying Needed)
                </option>
                <option value="Office / Showroom / Shop / Warehouse">
                  Office / Showroom / Shop / Warehouse
                </option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-200 mb-1.5">
                Preferred Jeddah Pickup Time
              </label>
              <select
                value={serviceWindow}
                onChange={(e) => setServiceWindow(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-[#070B11] border border-white/15 rounded-xl text-sm text-white"
              >
                <option value="Today · Within 60 Minutes (Urgent)">
                  Today · Within 60 Minutes (Urgent Dispatch)
                </option>
                <option value="Today Afternoon (4:00 PM – 8:00 PM)">
                  Today Afternoon (4:00 PM – 8:00 PM)
                </option>
                <option value="Tonight (8:00 PM – 11:30 PM)">
                  Tonight (8:00 PM – 11:30 PM)
                </option>
                <option value="Tomorrow Morning (9:00 AM – 1:00 PM)">
                  Tomorrow Morning (9:00 AM – 1:00 PM)
                </option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-200 mb-1.5">
                Estimated Truck Load Size
              </label>
              <select
                value={loadType}
                onChange={(e) => setLoadType(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-[#070B11] border border-white/15 rounded-xl text-sm text-white"
              >
                <option value="Single Item Pickup (2.0 m³)">
                  Single Item Pickup (2.0 m³)
                </option>
                <option value="1/4 Closed Dyna Truck Load (4.5 m³)">
                  1/4 Closed Dyna Truck Load (4.5 m³)
                </option>
                <option value="1/2 Closed Dyna Truck Load (9.0 m³)">
                  1/2 Closed Dyna Truck Load (9.0 m³)
                </option>
                <option value="3/4 Closed Dyna Truck Load (13.5 m³)">
                  3/4 Closed Dyna Truck Load (13.5 m³)
                </option>
                <option value="Full Closed Jumbo Dyna Truck (18.0 m³)">
                  Full Closed Jumbo Dyna Truck (18.0 m³)
                </option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-200 mb-1.5">
              Items Description / Landmark or Compound Security Notes
            </label>
            <textarea
              rows={2}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="e.g., 1 old L-shape sofa, 2 split ACs, and 10 boxes on 3rd floor Sateh. Near Stars Avenue Mall."
              className="w-full px-3.5 py-2.5 bg-[#070B11] border border-white/15 rounded-xl text-sm text-white"
            />
          </div>

          {formError && (
            <div className="p-3 bg-red-950/60 border border-red-500/40 rounded-xl text-xs text-red-200 font-medium">
              {formError}
            </div>
          )}

          <button
            type="submit"
            className="w-full py-3.5 px-6 bg-emerald-500 hover:bg-emerald-400 text-[#070B11] text-sm font-bold rounded-xl transition-colors cursor-pointer"
          >
            {isAr
              ? 'تأكيد حجز شاحنة جدة الآن'
              : 'Confirm Jeddah Junk Pickup & Issue Truck Pass'}
          </button>
        </form>

        {/* Right 5 Columns: Active Booking Confirmation & History */}
        <div className="lg:col-span-5 space-y-6">
          {latestBooking && (
            <div className="bg-emerald-950/30 text-white rounded-2xl p-6 space-y-4 border border-emerald-500/40">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <div>
                  <div className="text-xs font-mono text-emerald-400">
                    JEDDAH TRUCK ASSIGNED · 60-MIN SLA
                  </div>
                  <div className="font-mono text-xl font-bold tabular-nums">
                    {latestBooking.referenceCode}
                  </div>
                </div>
                <CheckCircle2 className="w-7 h-7 text-emerald-400" />
              </div>

              <div className="space-y-1.5 text-xs font-mono text-slate-300 tabular-nums">
                <div className="flex justify-between">
                  <span>Customer:</span>
                  <span className="text-white font-semibold">{latestBooking.clientName}</span>
                </div>
                <div className="flex justify-between">
                  <span>Jeddah District:</span>
                  <span className="text-white">{latestBooking.district}</span>
                </div>
                <div className="flex justify-between">
                  <span>Time Window:</span>
                  <span className="text-emerald-300">{latestBooking.serviceWindow}</span>
                </div>
                <div className="flex justify-between">
                  <span>Truck Plate (Jeddah):</span>
                  <span className="text-white">KSA · JED 7420 (Closed Dyna)</span>
                </div>
                <div className="flex justify-between">
                  <span>Estimated Volume:</span>
                  <span className="text-amber-300 font-bold">
                    {latestBooking.estimatedVolumeM3} m³ ({latestBooking.loadType})
                  </span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 pt-2">
                <a
                  href={buildWhatsAppLink(
                    `JEDDAH BOOKING PASS: ${latestBooking.referenceCode}\nName: ${latestBooking.clientName}\nMobile: ${latestBooking.phone}\nDistrict: ${latestBooking.district}\nWindow: ${latestBooking.serviceWindow}\nLoad: ${latestBooking.loadType}`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-3 bg-[#25D366] hover:bg-[#20bd5a] text-[#070B11] text-xs font-extrabold rounded-xl inline-flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Send Booking Pass to WhatsApp ({JEDDAH_PHONE_LOCAL})</span>
                </a>
                <button
                  type="button"
                  onClick={() => handleCopy(latestBooking)}
                  className="flex-1 py-2 px-3 bg-white/10 hover:bg-white/20 text-white text-xs font-semibold rounded-xl inline-flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <Copy className="w-3.5 h-3.5" />
                  <span>
                    {copiedCode === latestBooking.referenceCode
                      ? 'Copied!'
                      : 'Copy Booking Details'}
                  </span>
                </button>
                <button
                  type="button"
                  onClick={() => window.print()}
                  className="py-2 px-3 bg-white/10 hover:bg-white/20 text-white text-xs font-semibold rounded-xl inline-flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>Print</span>
                </button>
              </div>
            </div>
          )}

          <div className="bg-[#0F1623] border border-white/10 rounded-2xl p-6 space-y-4">
            <h3 className="font-serif-display text-xl font-bold text-white">
              Recent Jeddah Truck Dispatches ({savedBookings.length})
            </h3>
            <div className="space-y-3">
              {savedBookings.map((b) => (
                <div
                  key={b.referenceCode}
                  className="p-4 bg-[#070B11] border border-white/10 rounded-xl space-y-1.5 text-xs"
                >
                  <div className="flex justify-between font-mono tabular-nums">
                    <strong className="text-emerald-400">{b.referenceCode}</strong>
                    <span className="text-slate-400">{b.status}</span>
                  </div>
                  <div className="font-semibold text-white">
                    {b.clientName} · {b.district}
                  </div>
                  <div className="text-slate-400">
                    {b.loadType} · {b.serviceWindow}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
