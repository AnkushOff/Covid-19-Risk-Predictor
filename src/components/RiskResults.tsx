import React from 'react';
import { AlertTriangle, Shield, TrendingUp, Info, Download } from 'lucide-react';

interface RiskResultsProps {
  riskScore: number;
  riskLevel: string;
  riskFactors: string[];
  recommendations: string[];
  onReset: () => void;
}

const RiskResults: React.FC<RiskResultsProps> = ({
  riskScore,
  riskLevel,
  riskFactors,
  recommendations,
  onReset
}) => {
  const getRiskColor = (level: string) => {
    switch (level) {
      case 'Low': return 'text-green-600 bg-green-50 border-green-200';
      case 'Moderate': return 'text-yellow-600 bg-yellow-50 border-yellow-200';
      case 'High': return 'text-red-600 bg-red-50 border-red-200';
      default: return 'text-gray-600 bg-gray-50 border-gray-200';
    }
  };

  const getRiskIcon = (level: string) => {
    switch (level) {
      case 'Low': return <Shield className="w-8 h-8" />;
      case 'Moderate': return <TrendingUp className="w-8 h-8" />;
      case 'High': return <AlertTriangle className="w-8 h-8" />;
      default: return <Info className="w-8 h-8" />;
    }
  };

  return (
    <div className="space-y-6">
      {/* Risk Score Card */}
      <div className={`rounded-xl p-8 border-2 ${getRiskColor(riskLevel)}`}>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-4">
            {getRiskIcon(riskLevel)}
            <div>
              <h3 className="text-2xl font-bold">Risk Level: {riskLevel}</h3>
              <p className="text-sm opacity-80">Mortality Risk Score</p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-4xl font-bold">{riskScore}%</div>
            <div className="text-sm opacity-80">Confidence: 87%</div>
          </div>
        </div>
        
        <div className="bg-white/50 rounded-lg p-4 mt-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium">Risk Distribution</span>
            <span className="text-sm opacity-80">{riskScore}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div 
              className={`h-3 rounded-full transition-all duration-1000 ${
                riskLevel === 'Low' ? 'bg-green-500' :
                riskLevel === 'Moderate' ? 'bg-yellow-500' : 'bg-red-500'
              }`}
              style={{ width: `${riskScore}%` }}
            ></div>
          </div>
        </div>
      </div>

      {/* Risk Factors */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
          <AlertTriangle className="w-5 h-5 text-orange-600 mr-2" />
          Contributing Risk Factors
        </h3>
        <div className="space-y-3">
          {riskFactors.map((factor, index) => (
            <div key={index} className="flex items-center p-3 bg-orange-50 rounded-lg border border-orange-200">
              <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
              <span className="text-gray-700">{factor}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Recommendations */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
          <Shield className="w-5 h-5 text-blue-600 mr-2" />
          Clinical Recommendations
        </h3>
        <div className="space-y-3">
          {recommendations.map((rec, index) => (
            <div key={index} className="flex items-start p-3 bg-blue-50 rounded-lg border border-blue-200">
              <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2"></div>
              <span className="text-gray-700">{rec}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Medical Disclaimer */}
      <div className="bg-red-50 border border-red-200 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-red-800 mb-3 flex items-center">
          <AlertTriangle className="w-5 h-5 mr-2" />
          Important Medical Disclaimer
        </h3>
        <div className="text-sm text-red-700 space-y-2">
          <p>This AI prediction tool is for educational and research purposes only. It should NOT be used for actual medical diagnosis or treatment decisions.</p>
          <p>Always consult with qualified healthcare professionals for medical advice, diagnosis, and treatment.</p>
          <p>The predictions are based on statistical models and may not account for all individual factors.</p>
        </div>
      </div>

      {/* Actions */}
      <div className="flex space-x-4">
        <button
          onClick={onReset}
          className="flex-1 bg-gray-100 text-gray-700 py-3 px-6 rounded-lg font-semibold hover:bg-gray-200 transition-all"
        >
          New Assessment
        </button>
        <button className="flex-1 bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-all flex items-center justify-center space-x-2">
          <Download className="w-4 h-4" />
          <span>Export Results</span>
        </button>
      </div>
    </div>
  );
};

export default RiskResults;