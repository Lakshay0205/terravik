import { useState } from 'react';
import { Calculator } from 'lucide-react';

const DosageCalculator = ({ productType = 'terravik' }) => {
  const [plantationType, setPlantationType] = useState('');
  const [potSize, setPotSize] = useState('');
  const [cropType, setCropType] = useState('');
  const [numberOfPots, setNumberOfPots] = useState('');
  const [landArea, setLandArea] = useState('');
  const [dosageRate, setDosageRate] = useState(300);
  const [result, setResult] = useState(null);

  const isTerraVik = productType === 'terravik';

  const plantationTypes = ['Flowers', 'Vegetables', 'Indoor Plants'];
  const potSizes = [
    { label: 'Small (6-7")', value: 'small', dosage: 40 },
    { label: 'Medium (7-8")', value: 'medium', dosage: 50 },
    { label: 'Large (8-10")', value: 'large', dosage: 60 },
    { label: 'XL (10-12")', value: 'xlarge', dosage: 85 },
    { label: 'XXL (12+")', value: 'xxlarge', dosage: 130 },
  ];

  const cropTypes = ['Rice', 'Wheat', 'Sugarcane', 'Vegetables', 'Fruits', 'Pulses'];
  const dosageRates = [
    { label: 'Light (200 kg/acre)', value: 200 },
    { label: 'Standard (300 kg/acre)', value: 300 },
    { label: 'Medium (400 kg/acre)', value: 400 },
    { label: 'Heavy (500 kg/acre)', value: 500 },
  ];

  const handleCalculate = () => {
    if (isTerraVik) {
      if (!plantationType || !potSize || !numberOfPots || numberOfPots <= 0) return;
      const selectedPot = potSizes.find(p => p.value === potSize);
      const totalDosage = selectedPot.dosage * parseInt(numberOfPots);
      setResult({
        potSize: selectedPot.label,
        numberOfPots: parseInt(numberOfPots),
        totalDosage,
      });
    } else {
      if (!cropType || !dosageRate || !landArea || landArea <= 0) return;
      const totalFOM = dosageRate * parseFloat(landArea);
      const bags25kg = Math.ceil(totalFOM / 25);
      const bags50kg = Math.ceil(totalFOM / 50);
      setResult({
        cropType,
        landArea: parseFloat(landArea),
        totalFOM,
        dosageRate,
        bags25kg,
        bags50kg,
      });
    }
  };

  const isFormValid = isTerraVik
    ? plantationType && potSize && numberOfPots > 0
    : cropType && dosageRate && landArea > 0;

  return (
    <div className="w-full max-w-[600px] mx-auto px-4 py-4">
      <div className="bg-white border border-gray-200 rounded-md p-4 shadow-sm">
        <h3 className="text-lg font-medium text-gray-800 mb-3">Dosage Calculator</h3>
        
        {isTerraVik ? (
          <div className="space-y-3">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div>
                <label className="block text-sm text-gray-700 mb-1">Plantation</label>
                <select
                  value={plantationType}
                  onChange={(e) => setPlantationType(e.target.value)}
                  className="w-full h-10 px-3 text-sm border border-gray-300 rounded-md focus:border-green-500 focus:ring-1 focus:ring-green-500 outline-none bg-white"
                >
                  <option value="">Select type</option>
                  {plantationTypes.map((type) => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm text-gray-700 mb-1">Pot Size</label>
                <select
                  value={potSize}
                  onChange={(e) => setPotSize(e.target.value)}
                  className="w-full h-10 px-3 text-sm border border-gray-300 rounded-md focus:border-green-500 focus:ring-1 focus:ring-green-500 outline-none bg-white"
                >
                  <option value="">Select size</option>
                  {potSizes.map((size) => (
                    <option key={size.value} value={size.value}>{size.label}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm text-gray-700 mb-1">No. of Pots</label>
                <input
                  type="number"
                  value={numberOfPots}
                  onChange={(e) => setNumberOfPots(e.target.value)}
                  placeholder="Enter qty"
                  min="1"
                  className="w-full h-10 px-3 text-sm border border-gray-300 rounded-md focus:border-green-500 focus:ring-1 focus:ring-green-500 outline-none"
                />
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-3">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div>
                <label className="block text-sm text-gray-700 mb-1">Crop Type</label>
                <select
                  value={cropType}
                  onChange={(e) => setCropType(e.target.value)}
                  className="w-full h-10 px-3 text-sm border border-gray-300 rounded-md focus:border-green-500 focus:ring-1 focus:ring-green-500 outline-none bg-white"
                >
                  <option value="">Select crop</option>
                  {cropTypes.map((crop) => (
                    <option key={crop} value={crop}>{crop}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm text-gray-700 mb-1">Dosage Rate</label>
                <select
                  value={dosageRate}
                  onChange={(e) => setDosageRate(parseInt(e.target.value))}
                  className="w-full h-10 px-3 text-sm border border-gray-300 rounded-md focus:border-green-500 focus:ring-1 focus:ring-green-500 outline-none bg-white"
                >
                  <option value="">Select rate</option>
                  {dosageRates.map((rate) => (
                    <option key={rate.value} value={rate.value}>{rate.label}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm text-gray-700 mb-1">Land Area (acres)</label>
                <input
                  type="number"
                  value={landArea}
                  onChange={(e) => setLandArea(e.target.value)}
                  placeholder="Enter area"
                  min="0.1"
                  step="0.1"
                  className="w-full h-10 px-3 text-sm border border-gray-300 rounded-md focus:border-green-500 focus:ring-1 focus:ring-green-500 outline-none"
                />
              </div>
            </div>
          </div>
        )}

        <div className="flex justify-center mt-4">
          <button
            onClick={handleCalculate}
            disabled={!isFormValid}
            className="h-10 px-6 bg-green-600 text-white text-sm font-medium rounded-md hover:bg-green-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
          >
            Calculate
          </button>
        </div>

        {result && (
          <div className="mt-4 p-3 bg-gray-50 border border-gray-200 rounded-md">
            <p className="text-sm font-medium text-gray-800 mb-2">Dosage Result:</p>
            {isTerraVik ? (
              <div className="text-sm text-gray-700 space-y-1">
                <p>Pot Size: <span className="font-medium">{result.potSize}</span></p>
                <p>Pots: <span className="font-medium">{result.numberOfPots}</span></p>
                <p>Required: <span className="font-medium text-green-600">{result.totalDosage} ml</span></p>
              </div>
            ) : (
              <div className="text-sm text-gray-700 space-y-1">
                <p>Crop: <span className="font-medium">{result.cropType}</span></p>
                <p>Area: <span className="font-medium">{result.landArea} acres</span></p>
                <p>Rate: <span className="font-medium">{result.dosageRate} kg/acre</span></p>
                <p>Required: <span className="font-medium text-green-600">{result.totalFOM.toFixed(2)} kg</span></p>
                <p className="text-xs text-gray-500 mt-2 pt-2 border-t border-gray-200">
                  ≈ {result.bags25kg} bags (25kg) or {result.bags50kg} bags (50kg)
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default DosageCalculator;
