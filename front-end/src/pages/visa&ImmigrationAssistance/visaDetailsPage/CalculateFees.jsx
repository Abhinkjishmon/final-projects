import React, { useState } from "react";
import { Calculator, PoundSterling, Clock, Phone } from "lucide-react";

const visaTypes = {
  tourist: { name: "Tourist Visa", fee: 100 },
  business: { name: "Business Visa", fee: 150 },
  student: { name: "Student Visa", fee: 348 },
  skilledWorker: {
    name: "Skilled Worker Visa",
    fee: { upTo3Years: 610, moreThan3Years: 1220 },
  },
  healthCare: {
    name: "Health and Care Worker Visa",
    fee: { upTo3Years: 232, moreThan3Years: 464 },
  },
  family: { name: "Family Visa", fee: 1523 },
};
function CalculateFees() {
  const [selectedVisa, setSelectedVisa] = useState("tourist");
  const [duration, setDuration] = useState(1);
  const [priority, setPriority] = useState(false);
  const [superPriority, setSuperPriority] = useState(false);
  const [dependents, setDependents] = useState(0);

  const calculateTotal = () => {
    const visa = visaTypes[selectedVisa];
    let baseFee =
      typeof visa.fee === "number"
        ? visa.fee
        : duration <= 3
        ? visa.fee.upTo3Years
        : visa.fee.moreThan3Years;

    const ihsTotal = 624 * duration * (dependents + 1);
    const priorityFee = priority ? 500 : 0;
    const superPriorityFee = superPriority ? 800 : 0;
    const biometricFee = 19.2 * (dependents + 1);

    return {
      baseFee,
      ihsTotal,
      priorityFee,
      superPriorityFee,
      biometricFee,
      total: baseFee + ihsTotal + priorityFee + superPriorityFee + biometricFee,
    };
  };

  return (
    <div className="min-h-screen  bg-gray-50  bg-gradient-to-b from-blue-50 to-white">
      <div className="text-center mt-11 mb-12">
        <h1 className="text-3xl font-bold text-blue-900 mb-4">
          UK Visa and Immigration Fee Calculator
        </h1>
      </div>

      <main className="container max-w-4xl mx-auto px-4 py-8 space-y-8">
        <section className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
            <Calculator className="h-6 w-6" />
            Fee Calculator
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Visa Type
              </label>
              <select
                value={selectedVisa}
                onChange={(e) => setSelectedVisa(e.target.value)}
                className="w-full p-2 border rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              >
                {Object.entries(visaTypes).map(([key, visa]) => (
                  <option key={key} value={key}>
                    {visa.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Duration (Years)
              </label>
              <input
                type="number"
                min="1"
                max="10"
                value={duration}
                onChange={(e) =>
                  setDuration(Math.max(1, parseInt(e.target.value)))
                }
                className="w-full rounded-md p-2 border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Number of Dependents
              </label>
              <input
                type="number"
                min="0"
                value={dependents}
                onChange={(e) =>
                  setDependents(Math.max(0, parseInt(e.target.value)))
                }
                className="w-full p-2 border rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            <div className="space-y-4">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={priority}
                  onChange={(e) => setPriority(e.target.checked)}
                  className="rounded p-2 border border-gray-300 text-blue-600 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
                <span className="ml-2">Priority Service (£500)</span>
              </label>

              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={superPriority}
                  onChange={(e) => setSuperPriority(e.target.checked)}
                  className="rounded p-2 border border-gray-300 text-blue-600 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
                <span className="ml-2">Super Priority Service (£800)</span>
              </label>
            </div>
          </div>

          <div className="mt-8 p-6 bg-gray-50 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Fee Breakdown</h3>
            {(() => {
              const fees = calculateTotal();
              return (
                <div className="space-y-2">
                  <p>Base Visa Fee: £{fees.baseFee.toFixed(2)}</p>
                  <p>
                    Immigration Health Surcharge: £{fees.ihsTotal.toFixed(2)}
                  </p>
                  <p>Biometric Enrollment: £{fees.biometricFee.toFixed(2)}</p>
                  {fees.priorityFee > 0 && (
                    <p>Priority Service: £{fees.priorityFee.toFixed(2)}</p>
                  )}
                  {fees.superPriorityFee > 0 && (
                    <p>
                      Super Priority Service: £
                      {fees.superPriorityFee.toFixed(2)}
                    </p>
                  )}
                  <div className="border-t pt-2 mt-4">
                    <p className="text-xl font-bold">
                      Total: £{fees.total.toFixed(2)}
                    </p>
                  </div>
                </div>
              );
            })()}
          </div>
        </section>
        <section className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-6">Visa Fees</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Visa Type
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Fee
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {Object.values(visaTypes).map((visa) => (
                  <tr key={visa.name}>
                    <td className="px-6 py-4 whitespace-nowrap">{visa.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {typeof visa.fee === "number"
                        ? `£${visa.fee}`
                        : `£${visa.fee.upTo3Years} (up to 3 years)
                           £${visa.fee.moreThan3Years} (more than 3 years)`}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm text-gray-600">
            Note: Fees are subject to change. Please check the{" "}
            <a
              href="https://www.gov.uk/government/publications/visa-regulations-revised-table"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800"
            >
              UK Government Visa Fees Page
            </a>{" "}
            for the latest details.
          </p>
        </section>
        <section className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
            <Clock className="h-6 w-6" />
            Additional Costs
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium mb-2">Biometric Enrollment</h3>
              <p className="text-gray-600">£19.20 per person</p>
              <p className="text-sm text-gray-500">
                Required for all visa applications. Includes fingerprints and
                photograph.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-2">
                Immigration Health Surcharge (IHS)
              </h3>
              <p className="text-gray-600">£624 per year</p>
              <p className="text-sm text-gray-500">
                Gives you access to the NHS during your stay in the UK.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-2">Priority Service</h3>
              <p className="text-gray-600">£500</p>
              <p className="text-sm text-gray-500">
                Decision within 5 working days.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-2">
                Super Priority Service
              </h3>
              <p className="text-gray-600">£800</p>
              <p className="text-sm text-gray-500">
                Decision by the end of the next working day.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-2">Document Courier</h3>
              <p className="text-gray-600">£50 (optional)</p>
              <p className="text-sm text-gray-500">
                Secure delivery of your documents.
              </p>
            </div>
          </div>
        </section>
        <section className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
            <Phone className="h-6 w-6" />
            Contact Us
          </h2>
          <div className="max-w-2xl">
            <p className="mb-4">
              For questions about visa fees and applications, please contact:
            </p>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium">
                  UK Visas and Immigration Contact Centre
                </h3>
                <p>Telephone: +44 (0)300 123 2241</p>
                <p>Monday to Friday, 9am to 5pm</p>
              </div>
              <div>
                <h3 className="font-medium">Email Support</h3>
                <a
                  href="mailto:support@ukvi.gov.uk"
                  className="text-blue-600 hover:text-blue-800"
                >
                  support@ukvi.gov.uk
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white mt-8">
        <div className="container mx-auto px-4 py-6">
          <p className="text-center text-sm">
            Disclaimer: This calculator provides estimates only. Actual fees may
            vary. Always verify current fees on the official UK government
            website.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default CalculateFees;
