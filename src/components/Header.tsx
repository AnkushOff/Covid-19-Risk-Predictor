import React from 'react';
import { Shield, Activity } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-r from-blue-800 to-blue-900 text-white shadow-lg">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="bg-white/10 p-2 rounded-lg">
              <Shield className="w-8 h-8 text-blue-200" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">COVID-19 Risk Predictor</h1>
              <p className="text-blue-200 text-sm">AI-Powered Medical Risk Assessment</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Activity className="w-5 h-5 text-green-400" />
            <span className="text-sm text-blue-200">Research Tool</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;