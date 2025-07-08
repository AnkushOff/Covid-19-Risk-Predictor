import React from 'react';
import { Brain, Database, TrendingUp, Shield } from 'lucide-react';

const InfoSection: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">AI-Powered Risk Assessment</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our machine learning model analyzes multiple clinical parameters to provide comprehensive COVID-19 mortality risk predictions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <Brain className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Deep Learning Model</h3>
            <p className="text-gray-600 text-sm">
              Advanced neural network trained on extensive clinical datasets with 87% accuracy
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <Database className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Clinical Data</h3>
            <p className="text-gray-600 text-sm">
              Trained on 100,000+ patient records with comprehensive clinical parameters
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <TrendingUp className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Real-time Analysis</h3>
            <p className="text-gray-600 text-sm">
              Instant risk calculation with confidence intervals and explanatory factors
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div className="bg-red-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <Shield className="w-6 h-6 text-red-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Research Purpose</h3>
            <p className="text-gray-600 text-sm">
              Designed for educational and research use only, not for clinical diagnosis
            </p>
          </div>
        </div>

        <div className="mt-12 bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Model Performance Metrics</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">87%</div>
              <div className="text-gray-600">Accuracy</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">91%</div>
              <div className="text-gray-600">Sensitivity</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">84%</div>
              <div className="text-gray-600">Specificity</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;