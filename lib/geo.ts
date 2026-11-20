// Karnataka Agricultural & Geographical Reference Data

export const KARNATAKA_DISTRICTS = [
  'Bagalkot', 'Ballari (Bellary)', 'Belagavi (Belgaum)', 'Bengaluru Rural', 'Bengaluru Urban',
  'Bidar', 'Chamarajanagar', 'Chikkaballapura', 'Chikkamagaluru', 'Chitradurga',
  'Dakshina Kannada', 'Davanagere', 'Dharwad', 'Gadag', 'Hassan',
  'Haveri', 'Kalaburagi (Gulbarga)', 'Kodagu', 'Kolar', 'Koppal',
  'Mandya', 'Mysuru (Mysore)', 'Raichur', 'Ramanagara', 'Shivamogga (Shimoga)',
  'Tumakuru (Tumkur)', 'Udupi', 'Uttara Kannada (Karwar)', 'Vijayapura (Bijapur)', 'Yadgir'
].sort();

// Comprehensive mapping of Karnataka taluks, towns, sub-districts, and prominent hubs to their official parent district
export const TOWN_TO_DISTRICT: Record<string, string> = {
  // Udupi district
  karkala: 'Udupi',
  kundapura: 'Udupi',
  kundapur: 'Udupi',
  brahmavara: 'Udupi',
  byndoor: 'Udupi',
  baindur: 'Udupi',
  hebri: 'Udupi',
  kaup: 'Udupi',
  kapu: 'Udupi',
  manipal: 'Udupi',
  malpe: 'Udupi',
  saligrama: 'Udupi',
  padubidri: 'Udupi',
  karkal: 'Udupi',

  // Dakshina Kannada (South Canara)
  mangaluru: 'Dakshina Kannada',
  mangalore: 'Dakshina Kannada',
  bantwal: 'Dakshina Kannada',
  belthangady: 'Dakshina Kannada',
  beltangadi: 'Dakshina Kannada',
  puttur: 'Dakshina Kannada',
  sullia: 'Dakshina Kannada',
  sulya: 'Dakshina Kannada',
  moodabidri: 'Dakshina Kannada',
  moodbidri: 'Dakshina Kannada',
  kadaba: 'Dakshina Kannada',
  dharmasthala: 'Dakshina Kannada',
  subrahmanya: 'Dakshina Kannada',
  ullal: 'Dakshina Kannada',

  // Uttara Kannada (Karwar / North Canara)
  karwar: 'Uttara Kannada (Karwar)',
  sirsi: 'Uttara Kannada (Karwar)',
  kumta: 'Uttara Kannada (Karwar)',
  ankola: 'Uttara Kannada (Karwar)',
  bhatkal: 'Uttara Kannada (Karwar)',
  honnavar: 'Uttara Kannada (Karwar)',
  honnavara: 'Uttara Kannada (Karwar)',
  dandeli: 'Uttara Kannada (Karwar)',
  haliyal: 'Uttara Kannada (Karwar)',
  yellapur: 'Uttara Kannada (Karwar)',
  joida: 'Uttara Kannada (Karwar)',
  mundgod: 'Uttara Kannada (Karwar)',
  gokarna: 'Uttara Kannada (Karwar)',

  // Mysuru
  mysore: 'Mysuru (Mysore)',
  mysuru: 'Mysuru (Mysore)',
  nanjangud: 'Mysuru (Mysore)',
  nanjangudu: 'Mysuru (Mysore)',
  hunsur: 'Mysuru (Mysore)',
  piriyapatna: 'Mysuru (Mysore)',
  periyapatna: 'Mysuru (Mysore)',
  't. narasipura': 'Mysuru (Mysore)',
  krishnarajanagara: 'Mysuru (Mysore)',
  'k.r. nagara': 'Mysuru (Mysore)',
  saragur: 'Mysuru (Mysore)',
  'h.d. kote': 'Mysuru (Mysore)',
  heggadadevankote: 'Mysuru (Mysore)',

  // Mandya
  mandya: 'Mandya',
  maddur: 'Mandya',
  malavalli: 'Mandya',
  pandavapura: 'Mandya',
  nagamangala: 'Mandya',
  krishnarajpet: 'Mandya',
  'k.r. pet': 'Mandya',
  srirangapatna: 'Mandya',

  // Hassan
  hassan: 'Hassan',
  alur: 'Hassan',
  belur: 'Hassan',
  sakleshpur: 'Hassan',
  channarayapatna: 'Hassan',
  arkalgud: 'Hassan',
  arkalgudu: 'Hassan',
  holenarasipura: 'Hassan',
  arsikere: 'Hassan',
  shravanabelagola: 'Hassan',

  // Kodagu (Coorg)
  madikeri: 'Kodagu',
  somwarpet: 'Kodagu',
  virajpet: 'Kodagu',
  kushalnagar: 'Kodagu',
  gonikoppal: 'Kodagu',
  coorg: 'Kodagu',

  // Chikkamagaluru
  chikkamagaluru: 'Chikkamagaluru',
  chikmagalur: 'Chikkamagaluru',
  mudigere: 'Chikkamagaluru',
  koppa: 'Chikkamagaluru',
  sringeri: 'Chikkamagaluru',
  tarikere: 'Chikkamagaluru',
  kadur: 'Chikkamagaluru',
  narasimharajapura: 'Chikkamagaluru',
  ajjampura: 'Chikkamagaluru',

  // Shivamogga (Shimoga)
  shivamogga: 'Shivamogga (Shimoga)',
  shimoga: 'Shivamogga (Shimoga)',
  bhadravathi: 'Shivamogga (Shimoga)',
  bhadravati: 'Shivamogga (Shimoga)',
  sagar: 'Shivamogga (Shimoga)',
  sagara: 'Shivamogga (Shimoga)',
  shikaripura: 'Shivamogga (Shimoga)',
  soraba: 'Shivamogga (Shimoga)',
  thirthahalli: 'Shivamogga (Shimoga)',
  hosanagara: 'Shivamogga (Shimoga)',

  // Belagavi (Belgaum)
  belagavi: 'Belagavi (Belgaum)',
  belgaum: 'Belagavi (Belgaum)',
  gokak: 'Belagavi (Belgaum)',
  chikkodi: 'Belagavi (Belgaum)',
  athani: 'Belagavi (Belgaum)',
  bailhongal: 'Belagavi (Belgaum)',
  hukkeri: 'Belagavi (Belgaum)',
  ramdurg: 'Belagavi (Belgaum)',
  saundatti: 'Belagavi (Belgaum)',
  raybag: 'Belagavi (Belgaum)',
  khanapur: 'Belagavi (Belgaum)',
  mudalagi: 'Belagavi (Belgaum)',
  nippani: 'Belagavi (Belgaum)',
  kittur: 'Belagavi (Belgaum)',

  // Dharwad & Hubballi
  dharwad: 'Dharwad',
  hubballi: 'Dharwad',
  hubli: 'Dharwad',
  kalghatgi: 'Dharwad',
  kundgol: 'Dharwad',
  navalgund: 'Dharwad',

  // Vijayapura (Bijapur)
  vijayapura: 'Vijayapura (Bijapur)',
  bijapur: 'Vijayapura (Bijapur)',
  indi: 'Vijayapura (Bijapur)',
  sindagi: 'Vijayapura (Bijapur)',
  'basavana bagewadi': 'Vijayapura (Bijapur)',
  muddebihal: 'Vijayapura (Bijapur)',
  talikoti: 'Vijayapura (Bijapur)',

  // Bagalkot
  bagalkot: 'Bagalkot',
  bagalkote: 'Bagalkot',
  badami: 'Bagalkot',
  bilagi: 'Bagalkot',
  hungund: 'Bagalkot',
  jamkhandi: 'Bagalkot',
  mudhol: 'Bagalkot',
  ilkal: 'Bagalkot',
  rabkavi: 'Bagalkot',
  banhatti: 'Bagalkot',

  // Ballari (Bellary)
  ballari: 'Ballari (Bellary)',
  bellary: 'Ballari (Bellary)',
  hosapete: 'Ballari (Bellary)',
  hospet: 'Ballari (Bellary)',
  kampli: 'Ballari (Bellary)',
  siruguppa: 'Ballari (Bellary)',
  sandur: 'Ballari (Bellary)',
  kudligi: 'Ballari (Bellary)',

  // Davanagere
  davanagere: 'Davanagere',
  davangere: 'Davanagere',
  harihara: 'Davanagere',
  harihar: 'Davanagere',
  honnali: 'Davanagere',
  channagiri: 'Davanagere',
  jagalur: 'Davanagere',

  // Chitradurga
  chitradurga: 'Chitradurga',
  challakere: 'Chitradurga',
  hiriyur: 'Chitradurga',
  holalkere: 'Chitradurga',
  hosadurga: 'Chitradurga',
  molakalmuru: 'Chitradurga',

  // Tumakuru (Tumkur)
  tumakuru: 'Tumakuru (Tumkur)',
  tumkur: 'Tumakuru (Tumkur)',
  tiptur: 'Tumakuru (Tumkur)',
  gubbi: 'Tumakuru (Tumkur)',
  pavagada: 'Tumakuru (Tumkur)',
  sira: 'Tumakuru (Tumkur)',
  madhugiri: 'Tumakuru (Tumkur)',
  kunigal: 'Tumakuru (Tumkur)',

  // Kolar
  kolar: 'Kolar',
  bangarapet: 'Kolar',
  malur: 'Kolar',
  mulbagal: 'Kolar',
  srinivaspur: 'Kolar',
  kgf: 'Kolar',

  // Chikkaballapura
  chikkaballapura: 'Chikkaballapura',
  chikkaballapur: 'Chikkaballapura',
  gauribidanur: 'Chikkaballapura',
  bagepalli: 'Chikkaballapura',
  sidlaghatta: 'Chikkaballapura',
  chintamani: 'Chikkaballapura',

  // Bengaluru Urban & Rural
  bengaluru: 'Bengaluru Urban',
  bangalore: 'Bengaluru Urban',
  anekal: 'Bengaluru Urban',
  yelahanka: 'Bengaluru Urban',
  kengeri: 'Bengaluru Urban',
  doddaballapura: 'Bengaluru Rural',
  devanahalli: 'Bengaluru Rural',
  hoskote: 'Bengaluru Rural',
  nelamangala: 'Bengaluru Rural',

  // Ramanagara
  ramanagara: 'Ramanagara',
  channapatna: 'Ramanagara',
  kanakapura: 'Ramanagara',
  magadi: 'Ramanagara',

  // Chamarajanagar
  chamarajanagar: 'Chamarajanagar',
  gundlupet: 'Chamarajanagar',
  kollegal: 'Chamarajanagar',

  // Kalaburagi (Gulbarga)
  kalaburagi: 'Kalaburagi (Gulbarga)',
  gulbarga: 'Kalaburagi (Gulbarga)',
  afzalpur: 'Kalaburagi (Gulbarga)',
  aland: 'Kalaburagi (Gulbarga)',
  sedam: 'Kalaburagi (Gulbarga)',

  // Bidar
  bidar: 'Bidar',
  basavakalyan: 'Bidar',
  bhalki: 'Bidar',
  humnabad: 'Bidar',

  // Raichur
  raichur: 'Raichur',
  manvi: 'Raichur',
  sindhanur: 'Raichur',
  lingsugur: 'Raichur',

  // Koppal
  koppal: 'Koppal',
  gangavathi: 'Koppal',
  kushtagi: 'Koppal',

  // Gadag
  gadag: 'Gadag',
  betageri: 'Gadag',
  nargund: 'Gadag',

  // Haveri
  haveri: 'Haveri',
  ranebennur: 'Haveri',
  byadgi: 'Haveri',

  // Yadgir
  yadgir: 'Yadgir',
  shahapur: 'Yadgir',
  surpur: 'Yadgir',
};

// Robust matcher parsing all Nominatim address levels
export function matchKarnatakaDistrict(addressObj: Record<string, string | undefined>): string | null {
  if (!addressObj) return null;

  const rawTokens = [
    addressObj.county,
    addressObj.state_district,
    addressObj.city,
    addressObj.town,
    addressObj.village,
    addressObj.municipality,
    addressObj.district,
    addressObj.suburb,
  ].filter((t): t is string => Boolean(t && typeof t === 'string' && t.trim().length > 0));

  for (const token of rawTokens) {
    const cleanLower = token.toLowerCase().trim();
    if (TOWN_TO_DISTRICT[cleanLower]) {
      return TOWN_TO_DISTRICT[cleanLower];
    }
    const words = cleanLower.split(/[\s,.-]+/);
    for (const w of words) {
      if (w.length >= 3 && TOWN_TO_DISTRICT[w]) {
        return TOWN_TO_DISTRICT[w];
      }
    }
  }

  for (const token of rawTokens) {
    const cleanToken = token
      .toLowerCase()
      .replace(/\b(district|division|taluk|taluka|city|corporation|municipality|muncipal|council|grama|panchayat)\b/gi, '')
      .trim();

    if (!cleanToken) continue;

    for (const d of KARNATAKA_DISTRICTS) {
      const dLower = d.toLowerCase();
      const dParts = dLower
        .replace(/[()]/g, ' ')
        .split(/\s+/)
        .map(p => p.trim())
        .filter(p => p.length >= 3);

      if (dLower.includes(cleanToken) || cleanToken.includes(dLower)) {
        return d;
      }

      for (const part of dParts) {
        if (cleanToken.includes(part) || part.includes(cleanToken)) {
          return d;
        }
      }
    }
  }

  return null;
}

export const CROPS = [
  { name: 'Sugarcane', category: 'Perennial / Year-Round', icon: '🌿' },
  { name: 'Paddy (Rice)', category: 'Cereal / Kharif & Rabi', icon: '🌾' },
  { name: 'Ragi (Finger Millet)', category: 'Cereal / Kharif', icon: '🌱' },
  { name: 'Maize', category: 'Cereal / Multi-Season', icon: '🌽' },
  { name: 'Red Gram (Tur)', category: 'Pulse / Kharif', icon: '🫘' },
  { name: 'Groundnut', category: 'Oilseed / Kharif & Rabi', icon: '🥜' },
  { name: 'Chickpea (Bengal Gram)', category: 'Pulse / Rabi', icon: '🌿' }
];

export const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];
