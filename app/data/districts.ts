export interface DistrictProfile {
    district: string;
    zone: string;
    soil: string;
    rainfall: string;
    crops: string[];
    mainSeason: string;
}

export const KARNATAKA_DISTRICTS_DATA: Record<string, DistrictProfile> = {
    'Udupi': { district: 'Udupi', zone: 'Coastal Zone', soil: 'Laterite', rainfall: '3500-4000mm', crops: ['Paddy', 'Coconut', 'Arecanut', 'Cashew'], mainSeason: 'Kharif & Rabi' },
    'Dakshina Kannada': { district: 'Dakshina Kannada', zone: 'Coastal Zone', soil: 'Laterite', rainfall: '3500-4000mm', crops: ['Paddy', 'Coconut', 'Arecanut', 'Cashew'], mainSeason: 'Kharif & Rabi' },
    'Uttara Kannada': { district: 'Uttara Kannada', zone: 'Coastal Zone', soil: 'Laterite / Red', rainfall: '3000-4000mm', crops: ['Paddy', 'Arecanut', 'Coconut', 'Spices'], mainSeason: 'Kharif' },

    'Mysuru (Mysore)': { district: 'Mysuru (Mysore)', zone: 'Southern Dry / Cauvery Command', soil: 'Red + Black', rainfall: '800-1000mm', crops: ['Sugarcane', 'Paddy', 'Ragi', 'Maize'], mainSeason: 'Kharif & Rabi' },
    'Mandya': { district: 'Mandya', zone: 'Southern Dry / Cauvery Command', soil: 'Red Loam / Alluvial', rainfall: '700-900mm', crops: ['Sugarcane', 'Paddy', 'Ragi'], mainSeason: 'Perennial & Kharif' },
    'Chamarajanagar': { district: 'Chamarajanagar', zone: 'Southern Dry Zone', soil: 'Red & Stony', rainfall: '750-850mm', crops: ['Sugarcane', 'Ragi', 'Maize', 'Turmeric'], mainSeason: 'Kharif' },
    'Hassan': { district: 'Hassan', zone: 'Southern Transition Zone', soil: 'Red Clay Loam', rainfall: '1000-1200mm', crops: ['Paddy', 'Coffee', 'Ragi', 'Maize'], mainSeason: 'Kharif & Rabi' },
    'Kodagu': { district: 'Kodagu', zone: 'Hill Zone', soil: 'Forest Loam / Laterite', rainfall: '2500-3500mm', crops: ['Coffee', 'Pepper', 'Paddy', 'Cardamom'], mainSeason: 'Kharif & Perennial' },
    'Ramanagara': { district: 'Ramanagara', zone: 'Eastern Dry Zone', soil: 'Red Sandy Loam', rainfall: '800-900mm', crops: ['Ragi', 'Maize', 'Silk', 'Mango'], mainSeason: 'Kharif' },

    'Tumakuru (Tumkur)': { district: 'Tumakuru (Tumkur)', zone: 'Central Dry Zone', soil: 'Red Sandy Loam', rainfall: '600-750mm', crops: ['Ragi', 'Groundnut', 'Coconut', 'Maize'], mainSeason: 'Kharif' },
    'Chitradurga': { district: 'Chitradurga', zone: 'Central Dry Zone', soil: 'Red & Mixed Black', rainfall: '550-650mm', crops: ['Ragi', 'Groundnut', 'Maize', 'Sunflower'], mainSeason: 'Kharif' },
    'Davangere': { district: 'Davangere', zone: 'Central Dry Zone', soil: 'Deep Black / Red', rainfall: '650-800mm', crops: ['Maize', 'Paddy', 'Cotton', 'Ragi'], mainSeason: 'Kharif & Rabi' },
    'Haveri': { district: 'Haveri', zone: 'Northern Transition Zone', soil: 'Medium Black / Red', rainfall: '750-900mm', crops: ['Maize', 'Cotton', 'Chilli', 'Paddy'], mainSeason: 'Kharif' },
    'Chikkamagaluru': { district: 'Chikkamagaluru', zone: 'Hill / Central Dry', soil: 'Laterite / Forest', rainfall: '1500-2500mm', crops: ['Coffee', 'Arecanut', 'Paddy', 'Pepper'], mainSeason: 'Perennial & Kharif' },
    'Shivamogga (Shimoga)': { district: 'Shivamogga (Shimoga)', zone: 'Southern Transition / Hill', soil: 'Red Loam / Laterite', rainfall: '1800-2800mm', crops: ['Paddy', 'Arecanut', 'Maize', 'Spices'], mainSeason: 'Kharif & Rabi' },

    'Belagavi (Belgaum)': { district: 'Belagavi (Belgaum)', zone: 'Northern Transition Zone', soil: 'Deep Black / Red', rainfall: '800-1100mm', crops: ['Sugarcane', 'Maize', 'Soybean', 'Cotton'], mainSeason: 'Kharif & Perennial' },
    'Dharwad': { district: 'Dharwad', zone: 'Northern Transition Zone', soil: 'Medium to Deep Black', rainfall: '750-900mm', crops: ['Cotton', 'Maize', 'Chilli', 'Soybean'], mainSeason: 'Kharif' },
    'Gadag': { district: 'Gadag', zone: 'Northern Dry Zone', soil: 'Medium Black', rainfall: '500-650mm', crops: ['Maize', 'Cotton', 'Onion', 'Sunflower'], mainSeason: 'Kharif' },
    'Bagalkot': { district: 'Bagalkot', zone: 'Northern Dry Zone', soil: 'Deep Black / Shallow Red', rainfall: '500-600mm', crops: ['Sugarcane', 'Maize', 'Onion', 'Grapes'], mainSeason: 'Perennial & Rabi' },
    'Vijayapura (Bijapur)': { district: 'Vijayapura (Bijapur)', zone: 'Northern Dry Zone', soil: 'Deep Black / Saline', rainfall: '500-600mm', crops: ['Grapes', 'Onion', 'Maize', 'Sugarcane'], mainSeason: 'Rabi' },
    'Koppal': { district: 'Koppal', zone: 'Northern Dry Zone', soil: 'Mixed Red & Black', rainfall: '550-650mm', crops: ['Paddy', 'Maize', 'Cotton', 'Sunflower'], mainSeason: 'Kharif & Rabi' },
    'Ballari (Bellary)': { district: 'Ballari (Bellary)', zone: 'Northern Dry Zone', soil: 'Deep Black', rainfall: '550-650mm', crops: ['Paddy', 'Cotton', 'Maize', 'Onion'], mainSeason: 'Kharif & Rabi' },
    'Raichur': { district: 'Raichur', zone: 'Northern Dry Zone', soil: 'Deep Black', rainfall: '600-700mm', crops: ['Paddy', 'Cotton', 'Maize', 'Chilli'], mainSeason: 'Kharif & Rabi' },
    'Kalaburagi (Gulbarga)': { district: 'Kalaburagi (Gulbarga)', zone: 'North-Eastern Dry Zone', soil: 'Deep Black', rainfall: '700-800mm', crops: ['Tur', 'Soybean', 'Cotton', 'Sugarcane'], mainSeason: 'Kharif' },
    'Bidar': { district: 'Bidar', zone: 'North-Eastern Transition Zone', soil: 'Deep Black / Laterite', rainfall: '850-950mm', crops: ['Soybean', 'Tur', 'Sugarcane', 'Maize'], mainSeason: 'Kharif' },
    'Yadgir': { district: 'Yadgir', zone: 'North-Eastern Dry Zone', soil: 'Black & Red', rainfall: '700-800mm', crops: ['Paddy', 'Tur', 'Cotton', 'Groundnut'], mainSeason: 'Kharif & Rabi' },

    'Bengaluru Urban': { district: 'Bengaluru Urban', zone: 'Eastern Dry Zone', soil: 'Red Sandy Loam', rainfall: '850-950mm', crops: ['Ragi', 'Maize', 'Vegetables', 'Grapes'], mainSeason: 'Kharif' },
    'Bengaluru Rural': { district: 'Bengaluru Rural', zone: 'Eastern Dry Zone', soil: 'Red Sandy Loam', rainfall: '800-900mm', crops: ['Ragi', 'Maize', 'Vegetables', 'Grapes'], mainSeason: 'Kharif' },
    'Kolar': { district: 'Kolar', zone: 'Eastern Dry Zone', soil: 'Red Sandy', rainfall: '700-800mm', crops: ['Ragi', 'Groundnut', 'Mango', 'Vegetables'], mainSeason: 'Kharif' },
    'Chikkaballapura': { district: 'Chikkaballapura', zone: 'Eastern Dry Zone', soil: 'Red Sandy', rainfall: '700-800mm', crops: ['Ragi', 'Groundnut', 'Mango', 'Vegetables'], mainSeason: 'Kharif' }
};

export function getAutoCorrectedSeason(crop: string, month: string): string {
    if (crop === 'Sugarcane') return 'Perennial / Full Year Cycle';
    if (crop === 'Coffee') return 'Perennial / Harvest & Blossom Cycle';

    const kharifMonths = ['June', 'July', 'August', 'September'];
    const rabiMonths = ['October', 'November', 'December', 'January', 'February', 'March'];

    if (kharifMonths.includes(month)) return 'Kharif / South-West Monsoon';
    if (rabiMonths.includes(month)) return 'Rabi / Post-Monsoon + Winter';
    return 'Summer / Zaid Cycle';
}

export function validateCropSuitability(district: string, crop: string): { isSuitable: boolean; suggestion: string } {
    const profile = KARNATAKA_DISTRICTS_DATA[district];
    if (!profile) return { isSuitable: true, suggestion: '' };

    const matches = profile.crops.some(c => crop.toLowerCase().includes(c.toLowerCase()) || c.toLowerCase().includes(crop.toLowerCase().split(' ')[0]));
    if (!matches) {
        return {
            isSuitable: false,
            suggestion: `${crop} is rarely grown in ${district}. Suggested staple crops for ${district}: ${profile.crops.join(', ')}`
        };
    }
    return { isSuitable: true, suggestion: '' };
}