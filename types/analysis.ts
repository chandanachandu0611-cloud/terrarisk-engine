export interface TelemetryData {
  ndvi: number;
  ndviBaseline: number;
  ndviAnomaly: string;
  soilMoisture: number; // percentage (0-100)
  soilMoistureBaseline: number;
  surfaceTemp: number; // Celsius
  tempAnomaly: string;
  precipitationAnomaly: string;
  evapotranspiration: string;
  historicalAnalogue: string;
  confidenceScore: number;
}

export interface AnalysisResponse {
  riskScore: number;
  riskLevel: "Low" | "Moderate" | "High" | "Critical";
  primaryHazard: string;
  estimatedYieldImpact: string;
  analysisDetails: string;
  mitigationAdvisory: string[];
  satelliteTelemetry?: TelemetryData;
  source?: "gemini-2.5-flash" | "simulation-engine-fallback";
  note?: string;
  metadata?: {
    location: string;
    cropType: string;
    season: string;
    timestamp: string;
  };
}

