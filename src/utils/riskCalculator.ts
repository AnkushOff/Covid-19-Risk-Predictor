export interface RiskFormData {
  age: number;
  gender: string;
  temperature: number;
  oxygenSaturation: number;
  respiratoryRate: number;
  heartRate: number;
  bloodPressureSystolic: number;
  bloodPressureDiastolic: number;
  diabetes: boolean;
  hypertension: boolean;
  heartDisease: boolean;
  pulmonaryDisease: boolean;
  kidneyDisease: boolean;
  immunocompromised: boolean;
  symptoms: string[];
  daysFromOnset: number;
}

export interface RiskAssessment {
  riskScore: number;
  riskLevel: string;
  riskFactors: string[];
  recommendations: string[];
}

export const calculateRisk = (data: RiskFormData): RiskAssessment => {
  let score = 0;
  const riskFactors: string[] = [];
  const recommendations: string[] = [];

  // Age scoring (most significant factor)
  if (data.age >= 80) {
    score += 30;
    riskFactors.push('Advanced age (≥80 years) - Very high risk factor');
  } else if (data.age >= 70) {
    score += 20;
    riskFactors.push('Elderly age (70-79 years) - High risk factor');
  } else if (data.age >= 60) {
    score += 10;
    riskFactors.push('Older age (60-69 years) - Moderate risk factor');
  } else if (data.age >= 50) {
    score += 5;
    riskFactors.push('Middle age (50-59 years) - Mild risk factor');
  }

  // Gender scoring
  if (data.gender === 'male') {
    score += 5;
    riskFactors.push('Male gender - Associated with higher mortality risk');
  }

  // Vital signs scoring
  if (data.temperature > 39.0) {
    score += 8;
    riskFactors.push('High fever (>39°C) - Indicates severe systemic response');
  } else if (data.temperature > 38.0) {
    score += 4;
    riskFactors.push('Fever (>38°C) - Active infection marker');
  }

  if (data.oxygenSaturation < 88) {
    score += 25;
    riskFactors.push('Severe hypoxemia (O2 sat <88%) - Critical respiratory compromise');
  } else if (data.oxygenSaturation < 92) {
    score += 15;
    riskFactors.push('Moderate hypoxemia (O2 sat <92%) - Significant respiratory impairment');
  } else if (data.oxygenSaturation < 95) {
    score += 8;
    riskFactors.push('Mild hypoxemia (O2 sat <95%) - Early respiratory compromise');
  }

  if (data.respiratoryRate > 30) {
    score += 12;
    riskFactors.push('Severe tachypnea (>30/min) - Respiratory distress');
  } else if (data.respiratoryRate > 24) {
    score += 6;
    riskFactors.push('Tachypnea (>24/min) - Increased respiratory effort');
  }

  if (data.heartRate > 120) {
    score += 8;
    riskFactors.push('Severe tachycardia (>120 bpm) - Cardiovascular stress');
  } else if (data.heartRate > 100) {
    score += 4;
    riskFactors.push('Tachycardia (>100 bpm) - Mild cardiovascular stress');
  }

  // Blood pressure
  if (data.bloodPressureSystolic < 90) {
    score += 15;
    riskFactors.push('Hypotension (SBP <90 mmHg) - Circulatory compromise');
  } else if (data.bloodPressureSystolic > 180) {
    score += 8;
    riskFactors.push('Severe hypertension (SBP >180 mmHg) - Cardiovascular strain');
  }

  // Comorbidities scoring
  if (data.diabetes) {
    score += 10;
    riskFactors.push('Diabetes mellitus - Impaired immune response and vascular complications');
  }

  if (data.hypertension) {
    score += 6;
    riskFactors.push('Hypertension - Cardiovascular risk factor');
  }

  if (data.heartDisease) {
    score += 12;
    riskFactors.push('Cardiovascular disease - Increased cardiac complications risk');
  }

  if (data.pulmonaryDisease) {
    score += 15;
    riskFactors.push('Pulmonary disease - Compromised respiratory reserve');
  }

  if (data.kidneyDisease) {
    score += 10;
    riskFactors.push('Kidney disease - Multi-organ dysfunction risk');
  }

  if (data.immunocompromised) {
    score += 12;
    riskFactors.push('Immunocompromised state - Reduced ability to fight infection');
  }

  // Symptoms scoring
  const criticalSymptoms = ['Shortness of breath', 'Confusion', 'Chest pain'];
  const presentCriticalSymptoms = data.symptoms.filter(s => criticalSymptoms.includes(s));
  
  if (presentCriticalSymptoms.length > 0) {
    score += presentCriticalSymptoms.length * 5;
    riskFactors.push(`Critical symptoms present: ${presentCriticalSymptoms.join(', ')}`);
  }

  // Duration of illness
  if (data.daysFromOnset > 14) {
    score += 8;
    riskFactors.push('Prolonged illness (>14 days) - Persistent infection');
  } else if (data.daysFromOnset > 7) {
    score += 4;
    riskFactors.push('Extended illness (>7 days) - Delayed recovery');
  }

  // Cap the score at 100
  score = Math.min(score, 100);

  // Determine risk level
  let riskLevel: string;
  if (score < 20) {
    riskLevel = 'Low';
  } else if (score < 50) {
    riskLevel = 'Moderate';
  } else {
    riskLevel = 'High';
  }

  // Generate recommendations based on risk level and factors
  if (riskLevel === 'High') {
    recommendations.push('Immediate hospitalization and intensive monitoring recommended');
    recommendations.push('Consider ICU admission if respiratory support needed');
    recommendations.push('Initiate antiviral therapy if within treatment window');
    recommendations.push('Monitor for complications: ARDS, cardiac events, thromboembolism');
  } else if (riskLevel === 'Moderate') {
    recommendations.push('Hospital admission for observation and supportive care');
    recommendations.push('Frequent monitoring of vital signs and oxygen saturation');
    recommendations.push('Consider early intervention therapies');
    recommendations.push('Close outpatient follow-up if discharged');
  } else {
    recommendations.push('Outpatient management with close monitoring');
    recommendations.push('Self-isolation and symptom monitoring');
    recommendations.push('Seek immediate care if symptoms worsen');
    recommendations.push('Regular telemedicine follow-up');
  }

  // Add specific recommendations based on risk factors
  if (data.oxygenSaturation < 92) {
    recommendations.push('Oxygen therapy indicated');
  }

  if (data.diabetes) {
    recommendations.push('Strict glucose control monitoring');
  }

  if (data.heartDisease) {
    recommendations.push('Cardiac monitoring and troponin surveillance');
  }

  if (data.age >= 65) {
    recommendations.push('Enhanced supportive care due to advanced age');
  }

  return {
    riskScore: Math.round(score),
    riskLevel,
    riskFactors,
    recommendations
  };
};