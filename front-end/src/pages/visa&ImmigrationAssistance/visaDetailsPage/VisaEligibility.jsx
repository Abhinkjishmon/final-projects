import { checkEligibility } from "@/apiService.js/visa.service";
import { Spinner } from "@/components/custom";
import { parseResponseToHTML } from "@/utils/parseResponseToHTML";
import React, { useState } from "react";

function VisaEligibility() {
  const [formData, setFormData] = useState({
    nationality: "",
    purpose: "",
    duration: "",
    employment: "",
    education: "",
    financialProof: false,
    visaStatus: "",
    travelHistory: "",
    invitationLetter: false,
    healthInsurance: false,
    accommodation: "",
    sponsor: "",
    criminalRecord: false,
    tiesToHomeCountry: "",
  });
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState();
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const response = await checkEligibility(formData);
    console.log(response)
    const htmlContent = parseResponseToHTML(response?.assistantResponse);
    console.log(htmlContent)
    setResult(htmlContent);
    setLoading(false);
  };
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-blue-900 mb-4">
            Visa Eligibility Check
          </h1>
          <p className="text-gray-600">
            Complete the form below to check your visa eligibility
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-xl p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="flex items-center text-gray-700 font-medium">
                  Nationality
                </label>
                <input
                  type="text"
                  className="w-full p-3 border border-gray-300 rounded-md"
                  placeholder="Enter your nationality"
                  value={formData.nationality}
                  name="nationality"
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="flex items-center text-gray-700 font-medium">
                  Purpose of Visit
                </label>
                <select
                  className="w-full p-3 border border-gray-300 rounded-md"
                  value={formData.purpose}
                  name="purpose"
                  onChange={handleChange}
                  required
                >
                  <option value="">Select purpose</option>
                  <option value="tourism">Tourism</option>
                  <option value="business">Business</option>
                  <option value="study">Study</option>
                  <option value="work">Work</option>
                  <option value="family">Family Visit</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="flex items-center text-gray-700 font-medium">
                  Duration of Stay
                </label>
                <select
                  className="w-full p-3 border border-gray-300 rounded-md"
                  value={formData.duration}
                  name="duration"
                  onChange={handleChange}
                  required
                >
                  <option value="">Select duration</option>
                  <option value="short">Less than 30 days</option>
                  <option value="medium">1-6 months</option>
                  <option value="long">6-12 months</option>
                  <option value="extended">More than 12 months</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="flex items-center text-gray-700 font-medium">
                  Employment Status
                </label>
                <select
                  className="w-full p-3 border border-gray-300 rounded-md"
                  value={formData.employment}
                  name="employment"
                  onChange={handleChange}
                  required
                >
                  <option value="">Select status</option>
                  <option value="employed">Employed</option>
                  <option value="self-employed">Self-employed</option>
                  <option value="student">Student</option>
                  <option value="retired">Retired</option>
                  <option value="unemployed">Unemployed</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="flex items-center text-gray-700 font-medium">
                  Education Level
                </label>
                <select
                  className="w-full p-3 border border-gray-300 rounded-md"
                  value={formData.education}
                  name="education"
                  onChange={handleChange}
                  required
                >
                  <option value="">Select education</option>
                  <option value="high-school">High School</option>
                  <option value="bachelor">Bachelor's Degree</option>
                  <option value="master">Master's Degree</option>
                  <option value="phd">PhD</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="flex items-center text-gray-700 font-medium">
                  Financial Documentation
                </label>
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    className="w-5 h-5 text-blue-600 border-gray-300 rounded"
                    checked={formData.financialProof}
                    name="financialProof"
                    onChange={handleChange}
                  />
                  <span className="text-gray-600">
                    I have proof of sufficient funds
                  </span>
                </div>
              </div>

              <div className="space-y-2">
                <label className="flex items-center text-gray-700 font-medium">
                  Visa Status
                </label>
                <input
                  type="text"
                  className="w-full p-3 border border-gray-300 rounded-md"
                  placeholder="Enter visa status"
                  value={formData.visaStatus}
                  name="visaStatus"
                  onChange={handleChange}
                />
              </div>

              <div className="space-y-2">
                <label className="flex items-center text-gray-700 font-medium">
                  Travel History
                </label>
                <input
                  type="text"
                  className="w-full p-3 border border-gray-300 rounded-md"
                  placeholder="Enter travel history details"
                  value={formData.travelHistory}
                  name="travelHistory"
                  onChange={handleChange}
                />
              </div>

              <div className="space-y-2">
                <label className="flex items-center text-gray-700 font-medium">
                  Invitation Letter
                </label>
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    className="w-5 h-5 text-blue-600 border-gray-300 rounded"
                    checked={formData.invitationLetter}
                    name="invitationLetter"
                    onChange={handleChange}
                  />
                  <span className="text-gray-600">
                    I have an invitation letter
                  </span>
                </div>
              </div>

              <div className="space-y-2">
                <label className="flex items-center text-gray-700 font-medium">
                  Health Insurance
                </label>
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    className="w-5 h-5 text-blue-600 border-gray-300 rounded"
                    checked={formData.healthInsurance}
                    name="healthInsurance"
                    onChange={handleChange}
                  />
                  <span className="text-gray-600">I have health insurance</span>
                </div>
              </div>

              <div className="space-y-2">
                <label className="flex items-center text-gray-700 font-medium">
                  Accommodation
                </label>
                <input
                  type="text"
                  className="w-full p-3 border border-gray-300 rounded-md"
                  placeholder="Enter accommodation details"
                  value={formData.accommodation}
                  name="accommodation"
                  onChange={handleChange}
                />
              </div>

              <div className="space-y-2">
                <label className="flex items-center text-gray-700 font-medium">
                  Sponsor Details
                </label>
                <input
                  type="text"
                  className="w-full p-3 border border-gray-300 rounded-md"
                  placeholder="Enter sponsor details"
                  value={formData.sponsor}
                  name="sponsor"
                  onChange={handleChange}
                />
              </div>

              <div className="space-y-2">
                <label className="flex items-center text-gray-700 font-medium">
                  Criminal Record
                </label>
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    className="w-5 h-5 text-blue-600 border-gray-300 rounded"
                    checked={formData.criminalRecord}
                    name="criminalRecord"
                    onChange={handleChange}
                  />
                  <span className="text-gray-600">
                    I have a criminal record
                  </span>
                </div>
              </div>

              <div className="space-y-2">
                <label className="flex items-center text-gray-700 font-medium">
                  Ties to Home Country
                </label>
                <input
                  type="text"
                  className="w-full p-3 border border-gray-300 rounded-md"
                  placeholder="Describe your ties to your home country"
                  value={formData.tiesToHomeCountry}
                  name="tiesToHomeCountry"
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="mt-8">
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700"
              >
                {loading ? <Spinner /> : "Check Eligibility"}
              </button>
            </div>
          </form>
          {result && (
            <div
              className="[&>p]:text-zinc-800"
              dangerouslySetInnerHTML={{ __html: result }}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default VisaEligibility;
