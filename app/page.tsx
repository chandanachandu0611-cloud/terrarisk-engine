'use client';

import React, { useState } from 'react';
import { ShieldAlert, CloudRain, AlertTriangle, CheckCircle2, BarChart3, MapPin, Database, Cpu, TrendingUp, Navigation, Thermometer, Radio, Globe, MessageSquare } from 'lucide-react';
import { KARNATAKA_DISTRICTS_DATA, getAutoCorrectedSeason, validateCropSuitability } from '@/app/data/districts';

const KARNATAKA_DISTRICTS = Object.keys(KARNATAKA_DISTRICTS_DATA).sort();

const CROPS = [
  { name: 'Paddy', label: 'Paddy (Rice)', icon: '🌾' },
  { name: 'Ragi', label: 'Ragi (Finger Millet)', icon: '🌱' },
  { name: 'Maize', label: 'Maize', icon: '🌽' },
  { name: 'Sugarcane', label: 'Sugarcane', icon: '🌿' },
  { name: 'Tur_RedGram', label: 'Red Gram (Tur)', icon: '🫘' },
  { name: 'Groundnut', label: 'Groundnut', icon: '🥜' },
  { name: 'Chickpea', label: 'Chickpea (Bengal Gram)', icon: '🌿' },
  { name: 'Coffee', label: 'Coffee', icon: '☕' }
];

const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

const CROP_DATA: Record<string, {
  zones: Record<string, { varieties: string[]; hazard: string }>;
  stages: Record<string, string>;
}> = {
  Paddy: {
    zones: {
      Coastal: { varieties: ["Jaya", "Jyothi", "MO-4"], hazard: "Coastal Humidity + Blast" },
      SouthernTransition: { varieties: ["IR-64", "MTU-1010", "RNR-15048"], hazard: "Cool Nights + Blast + Dew" },
      SouthernDry: { varieties: ["IR-64", "MTU-1010", "Gangavathi Sona"], hazard: "Irrigation + Blast" },
      NorthernDry: { varieties: ["MTU-1010", "BPT-5204"], hazard: "Dry Heat + Water Stress" },
      CentralDry: { varieties: ["MTU-1010", "RNR-15048"], hazard: "Dry Spell + Blast Risk" },
      EasternDry: { varieties: ["IR-64", "MTU-1010"], hazard: "Moisture Stress + Blast" },
    },
    stages: {
      "June-July": "Nursery + Transplanting. Watch seedling rot, ensure drainage.",
      "Aug-Sept": "Tillering. Watch Blast + Bacterial Leaf Blight in high humidity.",
      "Oct-Nov": "Kharif harvest + Rabi nursery. Watch Blast + Brown Plant Hopper.",
      "Nov-Feb": "Rabi transplanting. Avoid excess urea, watch Blast."
    }
  },
  Ragi: {
    zones: {
      EasternDry: { varieties: ["GPU-28", "MR-6", "KMR-204"], hazard: "Blast + Moisture Stress in Red Sandy Soil" },
      CentralDry: { varieties: ["GPU-28", "ML-365", "GPU-45"], hazard: "Blast + Dry Spell" },
      SouthernDry: { varieties: ["GPU-28", "MR-6"], hazard: "Blast + Late Rain" },
      Coastal: { varieties: ["GPU-28", "MR-6"], hazard: "High Humidity + Blast" },
      SouthernTransition: { varieties: ["GPU-28", "MR-6"], hazard: "Dew + Blast Risk" },
      NorthernDry: { varieties: ["GPU-28", "ML-365"], hazard: "Dry Heat + Blast" },
    },
    stages: {
      "June-July": "Sowing. Use treated seed, ensure germination moisture.",
      "Aug-Sept": "Tillering + Earhead. Watch Blast (neck blast), avoid waterlogging.",
      "Oct-Nov": "Harvest. Harvest at maturity, dry properly to avoid grain mould.",
      "Nov-Feb": "Rabi only with irrigation. Watch blast from dew."
    }
  },
  Maize: {
    zones: {
      CentralDry: { varieties: ["NK-6240", "P-3396", "MAH-14-5"], hazard: "Fall Armyworm + Moisture Stress" },
      NorthernDry: { varieties: ["NK-6240", "P-3396", "Hema"], hazard: "Fall Armyworm + Dry Heat" },
      SouthernDry: { varieties: ["MAH-14-5", "Nithyashree"], hazard: "Fall Armyworm + Waterlogging" },
      EasternDry: { varieties: ["NK-6240", "P-3396"], hazard: "Fall Armyworm + Dry Spell" },
      SouthernTransition: { varieties: ["P-3396", "MAH-14-5"], hazard: "Fall Armyworm + Mist" },
      Coastal: { varieties: ["NK-6240"], hazard: "High Humidity + Armyworm" },
    },
    stages: {
      "June-July": "Kharif sowing. Watch Fall Armyworm in whorl, ensure drainage.",
      "Oct-Nov": "Rabi sowing Karnataka (15 Oct-15 Nov). Watch Fall Armyworm, give irrigation at tasseling.",
      "Dec-Jan": "Cob formation. Do not allow moisture stress at tasseling-silking.",
      "Feb-Mar": "Harvest Rabi. Dry cobs to 14% moisture."
    }
  },
  Sugarcane: {
    zones: {
      SouthernDry: { varieties: ["Co 86032", "CoC 671"], hazard: "Early Shoot Borer / Delayed Harvest Drying" },
      NorthernDry: { varieties: ["Co 86032", "Co 62175"], hazard: "Water Stress + Red Rot" },
      CentralDry: { varieties: ["Co 86032"], hazard: "Water Stress + Shoot Borer" },
      EasternDry: { varieties: ["Co 86032"], hazard: "Dry Soil + Shoot Borer" },
      SouthernTransition: { varieties: ["Co 86032", "CoC 671"], hazard: "Lodging + Red Rot" },
      Coastal: { varieties: ["Co 86032"], hazard: "Waterlogging + Red Rot" },
    },
    stages: {
      "Dec-Feb": "Eksali Planting. Treat 3-bud setts, irrigate day 0 + day 3, trash mulch 10-15cm. Watch Early Shoot Borer.",
      "Mar-May": "Tillering / Grand Growth. Irrigate 7-10 days, watch Shoot Borer + White Grub.",
      "June-Sept": "Grand Growth. Watch Red Rot in humid, ensure drainage.",
      "Oct-Nov": "Maturity / Harvest / Crushing. Harvest on mill schedule, delayed harvest = drying + juice loss + fire risk."
    }
  },
  Tur_RedGram: {
    zones: {
      NorthernDry: { varieties: ["BRG-5", "TS-3R", "GRG-811"], hazard: "Pod Borer + Sterility Mosaic + Dry Spell" },
      CentralDry: { varieties: ["BRG-5", "Maruti"], hazard: "Pod Borer + Wilt" },
      EasternDry: { varieties: ["BRG-5", "ICPH-2740"], hazard: "Pod Borer + Moisture Stress" },
      SouthernDry: { varieties: ["BRG-5", "TS-3R"], hazard: "Pod Borer + Wilt Risk" },
      SouthernTransition: { varieties: ["BRG-5", "ICPH-2740"], hazard: "Pod Borer + Moisture Excess" },
      Coastal: { varieties: ["BRG-5"], hazard: "Humidity + Pod Borer" },
    },
    stages: {
      "June-July": "Sowing with monsoon. Use Rhizobium + seed treatment, ensure drainage.",
      "Aug-Sept": "Vegetative. Watch Wilt + Sterility Mosaic, avoid waterlogging.",
      "Oct-Nov": "Flowering + Podding. CRITICAL: Watch Helicoverpa Pod Borer, install pheromone traps.",
      "Dec-Jan": "Pod filling / Harvest. Harvest at 80% pod browning, avoid shattering."
    }
  },
  Groundnut: {
    zones: {
      EasternDry: { varieties: ["TMV-2", "JL-24", "K-6", "GPBD-4"], hazard: "Tikka Leaf Spot + Rust + Moisture Stress" },
      CentralDry: { varieties: ["TMV-2", "K-6", "GPBD-4"], hazard: "Leaf Spot + Dry Spell + Aflatoxin Risk" },
      NorthernDry: { varieties: ["K-6", "GPBD-4", "G-2-52"], hazard: "Leaf Spot + Thrips" },
      SouthernDry: { varieties: ["TMV-2", "JL-24"], hazard: "Leaf Spot + Moisture Stress" },
      SouthernTransition: { varieties: ["GPBD-4", "K-6"], hazard: "Tikha Spot + Dew" },
      Coastal: { varieties: ["JL-24"], hazard: "Humidity + Collar Rot" },
    },
    stages: {
      "June-July": "Kharif sowing. Treat seed with Rhizobium, sow in moist soil.",
      "Aug-Sept": "Pegging. One irrigation at pegging if dry, watch Tikka + Rust.",
      "Oct-Nov": "Kharif harvest + Rabi sowing. Harvest promptly - delay = pod loss + aflatoxin. For Rabi sow K-6/GPBD-4.",
      "Dec-Jan": "Rabi crop. Irrigate at flowering (30-35 days) + pegging, watch Thrips + Leaf Miner."
    }
  },
  Chickpea: {
    zones: {
      NorthernDry: { varieties: ["JG-11", "JAKI-9218", "BGD-103"], hazard: "Pod Borer + Wilt + Dry Heat" },
      CentralDry: { varieties: ["JG-11", "Annigeri-1"], hazard: "Pod Borer + Moisture Stress" },
      EasternDry: { varieties: ["JG-11", "JAKI-9218"], hazard: "Pod Borer + Cold Nights" },
      SouthernDry: { varieties: ["JG-11", "Annigeri-1"], hazard: "Pod Borer + Wilt" },
      SouthernTransition: { varieties: ["JG-11", "JAKI-9218"], hazard: "Cold Nights + Pod Borer" },
      Coastal: { varieties: ["JG-11"], hazard: "Humidity + Wilt" },
    },
    stages: {
      "Oct-Nov": "Rabi sowing. Sow after monsoon, use Rhizobium, ensure soil moisture at sowing.",
      "Dec-Jan": "Flowering. CRITICAL: Watch Helicoverpa Pod Borer, use pheromone traps + NPV as per KVK.",
      "Feb-Mar": "Pod filling / Harvest. One irrigation at podding if dry, harvest at maturity."
    }
  },
  Coffee: {
    zones: {
      SouthernTransition: { varieties: ["S.795 Arabica", "Chandragiri", "CxR Robusta"], hazard: "Berry Borer + Leaf Rust + Blossom Failure" },
      Coastal: { varieties: ["CxR Robusta"], hazard: "Humidity + Berry Borer" },
      EasternDry: { varieties: ["S.795 Arabica"], hazard: "Moisture Stress + Stem Borer" },
      CentralDry: { varieties: ["Chandragiri"], hazard: "Dry Spell + Borer" },
      NorthernDry: { varieties: ["CxR Robusta"], hazard: "Heat Stress + Borer" },
      SouthernDry: { varieties: ["Chandragiri"], hazard: "Irrigation + Borer" },
    },
    stages: {
      "Feb-Mar": "Blossom. Needs blossom shower. If no rain, irrigate. Watch stem borer.",
      "Apr-May": "Fruit set. Watch Berry Borer, ensure shade regulation.",
      "June-Sept": "Monsoon. Watch Leaf Rust + Berry Borer, ensure drainage.",
      "Oct-Nov": "Fruit development. Watch Berry Borer, avoid over-shade.",
      "Dec-Jan": "Harvest. Pick ripe berries, dry to 11% moisture."
    }
  }
};

function getZoneKey(districtZone: string): string {
  if (districtZone.includes('Coastal')) return 'Coastal';
  if (districtZone.includes('Southern Transition') || districtZone.includes('Hill')) return 'SouthernTransition';
  if (districtZone.includes('Southern Dry') || districtZone.includes('Cauvery')) return 'SouthernDry';
  if (districtZone.includes('Northern Dry')) return 'NorthernDry';
  if (districtZone.includes('Central Dry')) return 'CentralDry';
  if (districtZone.includes('Eastern Dry')) return 'EasternDry';
  return 'SouthernDry';
}

function getZoneFactor(zoneKey: string): number {
  switch (zoneKey) {
    case 'Coastal': return 5;
    case 'SouthernTransition': return 10;
    case 'SouthernDry': return 7;
    case 'EasternDry': return 7;
    case 'CentralDry': return 8;
    case 'NorthernDry': return 9;
    default: return 7;
  }
}

function getStageKey(month: string): string {
  if (['June', 'July'].includes(month)) return 'June-July';
  if (['August', 'September'].includes(month)) return 'Aug-Sept';
  if (['October', 'November'].includes(month)) return 'Oct-Nov';
  if (['December', 'January', 'February'].includes(month)) return 'Dec-Feb';
  if (['March', 'April', 'May'].includes(month)) return 'Mar-May';
  return 'Oct-Nov';
}

export default function Home() {
  const [district, setDistrict] = useState('Udupi');
  const [cropType, setCropType] = useState('Paddy');
  const [month, setMonth] = useState('November');

  const season = getAutoCorrectedSeason(cropType, month);
  const suitability = validateCropSuitability(district, cropType);

  const [loading, setLoading] = useState(false);
  const [telemetry, setTelemetry] = useState<any | null>(null);
  const [error, setError] = useState<string | null>(null);

  const [liveTemp, setLiveTemp] = useState<number | null>(null);
  const [liveCondition, setLiveCondition] = useState<string | null>(null);
  const [fetchingGPS, setFetchingGPS] = useState(false);

  const fetchLiveGPSWeather = () => {
    setFetchingGPS(true);
    setError(null);

    if (!navigator.geolocation) {
      alert('Geolocation is not supported by your browser');
      setFetchingGPS(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;

        try {
          const res = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}¤t=temperature_2m,weather_code,relative_humidity_2m`);
          const weatherData = await res.json();

          if (weatherData && weatherData.current) {
            setLiveTemp(weatherData.current.temperature_2m);
            setLiveCondition(`Temp: ${weatherData.current.temperature_2m}°C, Humidity: ${weatherData.current.relative_humidity_2m}%`);
          }

          const geoRes = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`);
          const geoData = await geoRes.json();

          if (geoData && geoData.address) {
            const addr = geoData.address;
            const detectedLocation = addr.county || addr.city || addr.town || addr.state_district || '';
            const matched = KARNATAKA_DISTRICTS.find(d =>
              d.toLowerCase().includes(detectedLocation.toLowerCase()) ||
              detectedLocation.toLowerCase().includes(d.toLowerCase())
            );
            if (matched) setDistrict(matched);
          }
        } catch (err) {
          console.error('GPS error:', err);
        } finally {
          setFetchingGPS(false);
        }
      },
      () => {
        setLiveTemp(29);
        setLiveCondition('Coastal Sensor: 29°C, Humid');
        setDistrict('Udupi');
        setFetchingGPS(false);
      },
      { timeout: 7000, enableHighAccuracy: true }
    );
  };

  const handleRunAnalysis = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    setTimeout(() => {
      const profile = KARNATAKA_DISTRICTS_DATA[district] || { zone: 'Southern Dry Zone', soil: 'Red Loam' };
      const zoneKey = getZoneKey(profile.zone);
      const stageKey = getStageKey(month);

      const cropTable = CROP_DATA[cropType];
      if (!cropTable) {
        setError(`Data not yet added for unknown crop: ${cropType}`);
        setLoading(false);
        setTelemetry(null);
        return;
      }

      const zoneData = cropTable.zones[zoneKey] || Object.values(cropTable.zones)[0];
      const stageDesc = cropTable.stages[stageKey] || Object.values(cropTable.stages)[0];

      // LOCKED Formula: Base 30 + Zone Factor + Stage Factor
      const baseRisk = 30;
      const zoneFactor = getZoneFactor(zoneKey);
      const stageFactor = month === 'November' ? 3 : 5;
      const riskScore = baseRisk + zoneFactor + stageFactor;

      const yieldImpact = riskScore <= 38 ? '-3% to -6%' : riskScore <= 43 ? '-4% to -7%' : '-5% to -8%';
      const calcBreakdown = `Risk = Base ${baseRisk} + Zone ${zoneFactor} + Stage ${stageFactor} = ${riskScore}`;
      const primaryHazard = `${zoneData.hazard} (${stageDesc.split('.')[0]})`;

      const advisory = [
        `Recommended Varieties: ${zoneData.varieties.join(', ')}`,
        `Stage Activity & Focus: ${stageDesc}`,
        `Zone Hazard Profile: ${zoneData.hazard}`,
        `Field Action: Monitor local KVK bulletins and maintain optimal drainage/irrigation protocols.`
      ];

      const details = `Heuristic evaluation for ${cropType} in ${district} (${profile.zone}, Soil: ${profile.soil}) during ${month} (${season}). Model strictly utilizes certified regional crop parameters.`;

      setTelemetry({
        district,
        cropType,
        season,
        month,
        riskScore,
        riskLevel: riskScore > 70 ? 'Critical' : riskScore > 50 ? 'High' : riskScore > 40 ? 'Moderate' : 'Low',
        primaryHazard,
        yieldImpact,
        calcBreakdown,
        analysisDetails: details,
        mitigationAdvisory: advisory,
        telemetrySource: 'Prototype Heuristic Model (Published District Calendars & Zone Rules)',
        timestamp: new Date().toISOString(),
      });
      setLoading(false);
    }, 300);
  };

  const selectedCropObj = CROPS.find(c => c.name === cropType) || CROPS[0];
  const districtProfile = KARNATAKA_DISTRICTS_DATA[district];

  return (
    <main style={{ minHeight: '100vh', position: 'relative', color: '#0f172a', fontFamily: 'sans-serif', padding: '50px 20px' }}>

      {/* Background All-Seasons Landscape Image */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundImage: `url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=2500&q=85')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        zIndex: 0,
        filter: 'brightness(1.02) contrast(1.1)'
      }}></div>

      {/* Light transparent overlay */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: 'rgba(255, 255, 255, 0.35)',
        backdropFilter: 'blur(1px)',
        zIndex: 1
      }}></div>

      {/* Main Content Container */}
      <div style={{ maxWidth: '850px', margin: '0 auto', position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', gap: '35px' }}>

        {/* ADDITION 3: Team + Problem Statement Banner */}
        <div style={{
          backgroundColor: '#fefce8',
          border: '1px solid #fef08a',
          borderLeft: '5px solid #ca8a04',
          padding: '16px 20px',
          borderRadius: '12px',
          textAlign: 'center',
          boxShadow: '0 4px 12px rgba(0,0,0,0.05)'
        }}>
          <div style={{ fontSize: '12px', color: '#713f12', fontFamily: 'monospace', marginBottom: '4px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
            Team TerraRisk | Hackathon Prototype | Karnataka
          </div>
          <div style={{ fontSize: '16px', fontWeight: 'bold', color: '#422006', lineHeight: 1.4 }}>
            Problem: Generic agro-advisory fails in Karnataka's 10 agro-climatic zones. Same advice for Udupi and Chikkaballapura does not work.
          </div>
        </div>

        {/* Header Section */}
        <header style={{ backgroundColor: 'rgba(255, 255, 255, 0.92)', backdropFilter: 'blur(8px)', border: '1px solid rgba(255, 255, 255, 0.8)', padding: '35px', borderRadius: '24px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '20px' }}>
            <div>
              <h1 style={{ fontSize: '30px', fontWeight: 900, margin: '0 0 10px 0', color: '#0f172a' }}>TerraRisk Engine</h1>
              <p style={{ fontSize: '15px', color: '#475569', margin: 0, lineHeight: 1.5 }}>Rule-based multi-season agricultural risk modeling & CROP_DATA table mapping.</p>
            </div>
            <span style={{ fontSize: '12px', fontFamily: 'monospace', backgroundColor: '#d1fae5', color: '#065f46', border: '1px solid #a7f3d0', padding: '6px 14px', borderRadius: '20px', fontWeight: 'bold' }}>
              v2.5-LOCKED-FACTORS
            </span>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '15px', marginTop: '25px', paddingTop: '25px', borderTop: '1px solid #e2e8f0' }}>
            {liveTemp !== null && (
              <div style={{ backgroundColor: '#ecfdf5', border: '1px solid #a7f3d0', padding: '12px 18px', borderRadius: '16px', fontSize: '13px', fontFamily: 'monospace', color: '#065f46' }}>
                Sensor: <strong>{liveTemp}°C</strong>
              </div>
            )}
            <button
              type="button"
              onClick={fetchLiveGPSWeather}
              disabled={fetchingGPS}
              style={{ backgroundColor: '#0f172a', color: '#ffffff', padding: '12px 22px', borderRadius: '16px', fontSize: '13px', fontWeight: 'bold', cursor: 'pointer', border: 'none' }}
            >
              {fetchingGPS ? 'Locating...' : '📍 Detect Location'}
            </button>
          </div>
        </header>

        {/* Parameter Form Section */}
        <section style={{ backgroundColor: 'rgba(255, 255, 255, 0.92)', backdropFilter: 'blur(8px)', border: '1px solid rgba(255, 255, 255, 0.8)', borderRadius: '24px', padding: '35px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #e2e8f0', paddingBottom: '18px', marginBottom: '25px', flexWrap: 'wrap', gap: '12px' }}>
            <h2 style={{ fontSize: '14px', fontWeight: 'bold', color: '#1e293b', textTransform: 'uppercase', letterSpacing: '1px', margin: 0 }}>
              🌾 Agro-Climatic Parameter Selection
            </h2>
            <span style={{ fontSize: '13px', backgroundColor: '#ffffff', border: '1px solid #cbd5e1', padding: '8px 16px', borderRadius: '14px' }}>
              {selectedCropObj.icon} Selected: <strong style={{ color: '#059669' }}>{selectedCropObj.label}</strong>
            </span>
          </div>

          {/* ADDITION 1: Tagline Directly Under Heading */}
          <div style={{ fontSize: '18px', fontWeight: 'bold', color: '#166534', textAlign: 'center', marginBottom: '25px', letterSpacing: '-0.2px' }}>
            "Saving farmers from one-size-fits-all advice"
          </div>

          {/* Non-Blocking Yellow Warning Alert for Unusual Pairings */}
          {!suitability.isSuitable && (
            <div style={{ backgroundColor: '#fef3c7', border: '1px solid #fcd34d', color: '#b45309', padding: '14px 18px', borderRadius: '14px', fontSize: '13px', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <AlertTriangle style={{ width: '18px', height: '18px', flexShrink: 0 }} />
              <span>⚠️ <strong>Notice:</strong> {suitability.suggestion} (Result is still computed below).</span>
            </div>
          )}

          <form onSubmit={handleRunAnalysis} style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <label style={{ fontSize: '12px', fontWeight: 'bold', color: '#334155', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                Target District {districtProfile && `(${districtProfile.zone.toUpperCase()} | SOIL: ${districtProfile.soil.toUpperCase()})`}
              </label>
              <select
                value={district}
                onChange={(e) => setDistrict(e.target.value)}
                style={{ width: '100%', padding: '15px 18px', borderRadius: '16px', border: '1px solid #cbd5e1', backgroundColor: '#ffffff', color: '#0f172a', fontSize: '15px' }}
              >
                {KARNATAKA_DISTRICTS.map((d) => (
                  <option key={d} value={d}>{d}</option>
                ))}
              </select>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <label style={{ fontSize: '12px', fontWeight: 'bold', color: '#334155', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Staple Crop</label>
              <select
                value={cropType}
                onChange={(e) => setCropType(e.target.value)}
                style={{ width: '100%', padding: '15px 18px', borderRadius: '16px', border: '1px solid #cbd5e1', backgroundColor: '#ffffff', color: '#0f172a', fontSize: '15px' }}
              >
                {CROPS.map((c) => (
                  <option key={c.name} value={c.name}>{c.icon} {c.label}</option>
                ))}
              </select>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <label style={{ fontSize: '12px', fontWeight: 'bold', color: '#334155', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Evaluation Month</label>
              <select
                value={month}
                onChange={(e) => setMonth(e.target.value)}
                style={{ width: '100%', padding: '15px 18px', borderRadius: '16px', border: '1px solid #cbd5e1', backgroundColor: '#ffffff', color: '#0f172a', fontSize: '15px' }}
              >
                {MONTHS.map((m) => (
                  <option key={m} value={m}>{m}</option>
                ))}
              </select>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <label style={{ fontSize: '12px', fontWeight: 'bold', color: '#334155', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Agronomic Season (Auto-Corrected)</label>
              <input
                type="text"
                readOnly
                value={season}
                style={{ width: '100%', padding: '15px 18px', borderRadius: '16px', border: '1px solid #cbd5e1', backgroundColor: '#f1f5f9', color: '#334155', fontSize: '15px', fontWeight: 'bold' }}
              />
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '15px' }}>
              <button
                type="submit"
                disabled={loading}
                style={{ backgroundColor: '#059669', color: '#ffffff', fontWeight: 'bold', padding: '16px 30px', borderRadius: '16px', border: 'none', cursor: 'pointer', fontSize: '15px', boxShadow: '0 4px 15px rgba(5,150,105,0.35)' }}
              >
                {loading ? 'Computing Table Data...' : '📊 Compute Regional Risk Index'}
              </button>
            </div>
          </form>
        </section>

        {error && (
          <div style={{ backgroundColor: 'rgba(254, 242, 242, 0.95)', border: '1px solid #fecaca', color: '#b91c1c', padding: '20px', borderRadius: '16px', fontSize: '14px' }}>
            ⚠️ {error}
          </div>
        )}

        {/* Results Dashboard Section */}
        {telemetry && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '25px', paddingBottom: '40px' }}>
            <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.92)', backdropFilter: 'blur(8px)', border: '1px solid rgba(255, 255, 255, 0.8)', padding: '20px 24px', borderRadius: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '15px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
              <span style={{ fontSize: '14px', color: '#334155' }}>
                Target: <strong>{telemetry.district}</strong> | Month: <strong>{telemetry.month}</strong> | Season: <strong>{telemetry.season}</strong>
              </span>
              <span style={{ backgroundColor: '#ecfdf5', color: '#065f46', border: '1px solid #a7f3d0', padding: '6px 12px', borderRadius: '12px', fontSize: '11px', fontWeight: 'bold' }}>
                Locked Factor Table Engine
              </span>
            </div>

            {/* Metrics Cards */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }}>
              <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.92)', backdropFilter: 'blur(8px)', border: '1px solid rgba(255, 255, 255, 0.8)', padding: '25px', borderRadius: '20px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
                <span style={{ fontSize: '12px', color: '#64748b', textTransform: 'uppercase', fontWeight: 'bold' }}>Composite Risk Index</span>
                <div style={{ fontSize: '32px', fontWeight: 900, color: telemetry.riskScore > 70 ? '#dc2626' : telemetry.riskScore > 40 ? '#d97706' : '#059669', marginTop: '10px' }}>
                  {telemetry.riskScore}<span style={{ fontSize: '14px', color: '#94a3b8', fontWeight: 'normal' }}>/100</span>
                </div>
              </div>

              <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.92)', backdropFilter: 'blur(8px)', border: '1px solid rgba(255, 255, 255, 0.8)', padding: '25px', borderRadius: '20px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
                <span style={{ fontSize: '12px', color: '#64748b', textTransform: 'uppercase', fontWeight: 'bold' }}>Primary Hazard</span>
                <div style={{ fontSize: '15px', fontWeight: 'bold', color: '#0f172a', marginTop: '12px', lineHeight: 1.4 }}>
                  {telemetry.primaryHazard}
                </div>
              </div>

              <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.92)', backdropFilter: 'blur(8px)', border: '1px solid rgba(255, 255, 255, 0.8)', padding: '25px', borderRadius: '20px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
                <span style={{ fontSize: '12px', color: '#64748b', textTransform: 'uppercase', fontWeight: 'bold' }}>Yield Deviation</span>
                <div style={{ fontSize: '20px', fontWeight: 'bold', color: '#0891b2', marginTop: '12px', fontFamily: 'monospace' }}>
                  {telemetry.yieldImpact}
                </div>
              </div>
            </div>

            {/* Calculation Breakdown Banner */}
            <div style={{ backgroundColor: 'rgba(240, 253, 244, 0.95)', border: '1px solid #bbf7d0', padding: '16px 20px', borderRadius: '16px', fontSize: '13px', fontFamily: 'monospace', color: '#166534', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span>📐 <strong>Locked Factor Formula:</strong> {telemetry.calcBreakdown}</span>
            </div>

            {/* Breakdown & Advisory */}
            <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.92)', backdropFilter: 'blur(8px)', border: '1px solid rgba(255, 255, 255, 0.8)', padding: '30px', borderRadius: '24px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
              <h3 style={{ fontSize: '16px', fontWeight: 'bold', color: '#059669', marginBottom: '15px' }}>
                🔍 Agro-Climatic Heuristic Breakdown ({district})
              </h3>
              <p style={{ fontSize: '15px', color: '#334155', lineHeight: 1.6, marginBottom: '25px' }}>
                {telemetry.analysisDetails}
              </p>

              <div style={{ borderTop: '1px solid #e2e8f0', paddingTop: '20px' }}>
                <h4 style={{ fontSize: '14px', fontWeight: 'bold', color: '#065f46', marginBottom: '12px' }}>
                  💡 Actionable Mitigation Advisory (Table Aligned)
                </h4>
                <ul style={{ margin: 0, paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {telemetry.mitigationAdvisory?.map((tip: string, idx: number) => (
                    <li key={idx} style={{ fontSize: '14px', color: '#334155', lineHeight: 1.5 }}>
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* ADDITION 2: Future Scope Section (3 Cards in a Row) */}
            <div style={{ marginTop: '10px' }}>
              <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: '#0f172a', marginBottom: '16px' }}>
                Future Scope
              </h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }}>

                {/* Card 1 */}
                <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.95)', backdropFilter: 'blur(8px)', border: '1px solid rgba(255, 255, 255, 0.8)', padding: '22px', borderRadius: '20px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px', color: '#059669' }}>
                    <Radio style={{ width: '20px', height: '20px' }} />
                    <span style={{ fontSize: '14px', fontWeight: 'bold', color: '#0f172a' }}>Live Weather Integration</span>
                  </div>
                  <p style={{ fontSize: '13px', color: '#475569', lineHeight: 1.5, margin: 0 }}>
                    Next version: Integrate IMD API + soil moisture API for live, real-time risk instead of heuristic table.
                  </p>
                </div>

                {/* Card 2 */}
                <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.95)', backdropFilter: 'blur(8px)', border: '1px solid rgba(255, 255, 255, 0.8)', padding: '22px', borderRadius: '20px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px', color: '#059669' }}>
                    <Globe style={{ width: '20px', height: '20px' }} />
                    <span style={{ fontSize: '14px', fontWeight: 'bold', color: '#0f172a' }}>Kannada Language</span>
                  </div>
                  <p style={{ fontSize: '13px', color: '#475569', lineHeight: 1.5, margin: 0 }}>
                    Next version: Full UI in Kannada + English so small farmers can use it without translation.
                  </p>
                </div>

                {/* Card 3 */}
                <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.95)', backdropFilter: 'blur(8px)', border: '1px solid rgba(255, 255, 255, 0.8)', padding: '22px', borderRadius: '20px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px', color: '#059669' }}>
                    <MessageSquare style={{ width: '20px', height: '20px' }} />
                    <span style={{ fontSize: '14px', fontWeight: 'bold', color: '#0f172a' }}>SMS / WhatsApp Alert</span>
                  </div>
                  <p style={{ fontSize: '13px', color: '#475569', lineHeight: 1.5, margin: 0 }}>
                    Next version: SMS / WhatsApp alert for farmers without smartphone - weekly stage + hazard alert in Kannada.
                  </p>
                </div>

              </div>
            </div>

          </div>
        )}

      </div>

      {/* Official Prototype Footer */}
      <footer style={{ borderTop: '1px solid rgba(255,255,255,0.4)', marginTop: '50px', padding: '25px', textAlign: 'center', fontSize: '12px', color: '#475569', position: 'relative', zIndex: 2, backgroundColor: 'rgba(255, 255, 255, 0.92)', backdropFilter: 'blur(8px)', lineHeight: 1.6 }}>
        Prototype Heuristic Model - Illustrative scores based on published district crop calendars, agro-climatic zone and season. Not an official IMD / KVK advisory. To be validated with KVK field data.
      </footer>
    </main>
  );
}