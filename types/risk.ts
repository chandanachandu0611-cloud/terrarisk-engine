export type RiskLevel = 'Low' | 'Moderate' | 'High' | 'Critical';

export interface ClimateTelemetry {
    district: string;
    cropType: string;
    season: string;
    month: string;
    riskScore: number;
    riskLevel: RiskLevel;
    primaryHazard: string;
    estimatedYieldImpact: string;
    analysisDetails: string;
    mitigationAdvisory: string[];
    telemetrySource: 'Sentinel-2 Simulated Tile' | 'IMD Gridded Baseline' | 'KVK Agro-Advisory Index' | 'Live IoT / Open-Meteo Station';
    timestamp: string;
}

export interface AnalysisRequestPayload {
    district: string;
    cropType: string;
    season: string;
    month: string;
}
