import React, { useState } from 'react';
import { User, Heart, Thermometer, Stethoscope, Calculator } from 'lucide-react';

interface RiskFormData {
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

interface RiskFormProps {
  onSubmit: (data: RiskFormData) => void;
}

const RiskForm: React.FC<RiskFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<RiskFormData>({
    age: 65,
    gender: 'male',
    temperature: 38.5,
    oxygenSaturation: 95,
    respiratoryRate: 22,
    heartRate: 100,
    bloodPressureSystolic: 140,
    bloodPressureDiastolic: 90,
    diabetes: false,
    hypertension: false,
    heartDisease: false,
    pulmonaryDisease: false,
    kidneyDisease: false,
    immunocompromised: false,
    symptoms: [],
    daysFromOnset: 7
  });

  const handleSymptomChange = (symptom: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      symptoms: checked 
        ? [...prev.symptoms, symptom]
        : prev.symptoms.filter(s => s !== symptom)
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Demographics */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="flex items-center space-x-3 mb-6">
          <User className="w-6 h-6 text-blue-600" />
          <h3 className="text-xl font-semibold text-gray-800">Patient Demographics</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Age</label>
            <input
              type="number"
              value={formData.age}
              onChange={(e) => setFormData(prev => ({ ...prev, age: parseInt(e.target.value) }))}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              min="0"
              max="120"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Gender</label>
            <select
              value={formData.gender}
              onChange={(e) => setFormData(prev => ({ ...prev, gender: e.target.value }))}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>
      </div>

      {/* Vital Signs */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="flex items-center space-x-3 mb-6">
          <Stethoscope className="w-6 h-6 text-red-600" />
          <h3 className="text-xl font-semibold text-gray-800">Vital Signs</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Temperature (°C)</label>
            <input
              type="number"
              step="0.1"
              value={formData.temperature}
              onChange={(e) => setFormData(prev => ({ ...prev, temperature: parseFloat(e.target.value) }))}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Oxygen Saturation (%)</label>
            <input
              type="number"
              value={formData.oxygenSaturation}
              onChange={(e) => setFormData(prev => ({ ...prev, oxygenSaturation: parseInt(e.target.value) }))}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
              min="70"
              max="100"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Respiratory Rate</label>
            <input
              type="number"
              value={formData.respiratoryRate}
              onChange={(e) => setFormData(prev => ({ ...prev, respiratoryRate: parseInt(e.target.value) }))}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
              min="10"
              max="40"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Heart Rate</label>
            <input
              type="number"
              value={formData.heartRate}
              onChange={(e) => setFormData(prev => ({ ...prev, heartRate: parseInt(e.target.value) }))}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
              min="40"
              max="200"
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Blood Pressure (Systolic)</label>
            <input
              type="number"
              value={formData.bloodPressureSystolic}
              onChange={(e) => setFormData(prev => ({ ...prev, bloodPressureSystolic: parseInt(e.target.value) }))}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
              min="80"
              max="200"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Blood Pressure (Diastolic)</label>
            <input
              type="number"
              value={formData.bloodPressureDiastolic}
              onChange={(e) => setFormData(prev => ({ ...prev, bloodPressureDiastolic: parseInt(e.target.value) }))}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
              min="40"
              max="120"
            />
          </div>
        </div>
      </div>

      {/* Comorbidities */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="flex items-center space-x-3 mb-6">
          <Heart className="w-6 h-6 text-pink-600" />
          <h3 className="text-xl font-semibold text-gray-800">Comorbidities</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { key: 'diabetes', label: 'Diabetes' },
            { key: 'hypertension', label: 'Hypertension' },
            { key: 'heartDisease', label: 'Heart Disease' },
            { key: 'pulmonaryDisease', label: 'Pulmonary Disease' },
            { key: 'kidneyDisease', label: 'Kidney Disease' },
            { key: 'immunocompromised', label: 'Immunocompromised' }
          ].map(({ key, label }) => (
            <label key={key} className="flex items-center space-x-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
              <input
                type="checkbox"
                checked={formData[key as keyof RiskFormData] as boolean}
                onChange={(e) => setFormData(prev => ({ ...prev, [key]: e.target.checked }))}
                className="w-5 h-5 text-pink-600 focus:ring-pink-500 border-gray-300 rounded"
              />
              <span className="text-sm font-medium text-gray-700">{label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Symptoms */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="flex items-center space-x-3 mb-6">
          <Thermometer className="w-6 h-6 text-yellow-600" />
          <h3 className="text-xl font-semibold text-gray-800">Symptoms</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            'Fever', 'Cough', 'Shortness of breath', 'Fatigue', 'Headache', 'Muscle aches',
            'Sore throat', 'Loss of taste/smell', 'Nausea', 'Diarrhea', 'Confusion', 'Chest pain'
          ].map(symptom => (
            <label key={symptom} className="flex items-center space-x-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
              <input
                type="checkbox"
                checked={formData.symptoms.includes(symptom)}
                onChange={(e) => handleSymptomChange(symptom, e.target.checked)}
                className="w-5 h-5 text-yellow-600 focus:ring-yellow-500 border-gray-300 rounded"
              />
              <span className="text-sm font-medium text-gray-700">{symptom}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Additional Information */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="flex items-center space-x-3 mb-6">
          <Calculator className="w-6 h-6 text-green-600" />
          <h3 className="text-xl font-semibold text-gray-800">Additional Information</h3>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Days from Symptom Onset</label>
          <input
            type="number"
            value={formData.daysFromOnset}
            onChange={(e) => setFormData(prev => ({ ...prev, daysFromOnset: parseInt(e.target.value) }))}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
            min="0"
            max="30"
          />
        </div>
      </div>

      <button
        type="submit"
        className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 px-6 rounded-xl font-semibold hover:from-blue-700 hover:to-blue-800 transition-all transform hover:scale-105 shadow-lg"
      >
        Calculate Risk Assessment
      </button>
    </form>
  );
};

export default RiskForm;