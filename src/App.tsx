import React, { useState } from 'react';
import Header from './components/Header';
import RiskForm from './components/RiskForm';
import RiskResults from './components/RiskResults';
import InfoSection from './components/InfoSection';
import { calculateRisk, RiskFormData, RiskAssessment } from './utils/riskCalculator';

function App() {
  const [assessment, setAssessment] = useState<RiskAssessment | null>(null);
  const [showResults, setShowResults] = useState(false);

  const handleFormSubmit = (data: RiskFormData) => {
    const result = calculateRisk(data);
    setAssessment(result);
    setShowResults(true);
  };

  const handleReset = () => {
    setAssessment(null);
    setShowResults(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {!showResults ? (
        <>
          <InfoSection />
          <div className="container mx-auto px-6 py-12">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">COVID-19 Risk Assessment</h2>
                <p className="text-xl text-gray-600">
                  Complete the form below to calculate mortality risk prediction
                </p>
              </div>
              
              <RiskForm onSubmit={handleFormSubmit} />
            </div>
          </div>
        </>
      ) : (
        <div className="container mx-auto px-6 py-12">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Risk Assessment Results</h2>
              <p className="text-xl text-gray-600">
                Based on the provided clinical data and AI analysis
              </p>
            </div>
            
            {assessment && (
              <RiskResults
                riskScore={assessment.riskScore}
                riskLevel={assessment.riskLevel}
                riskFactors={assessment.riskFactors}
                recommendations={assessment.recommendations}
                onReset={handleReset}
              />
            )}
          </div>
        </div>
      )}
      
      <footer className="bg-gray-800 text-white py-8 mt-12">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400">
            © 2025 COVID-19 Risk Predictor. For educational and research purposes only.
          </p>
          <p className="text-gray-400 mt-2">
            Not intended for clinical diagnosis or treatment decisions.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;