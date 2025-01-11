import { getBlogsByCategory } from "@/apiService.js/culturalfit.service";
import {
  DetailedBankingSection,
  FinanceHero,
  FinanceNews,
  InsuranceSection,
  MoneyManagementSection,
  RetirementSection,
  TaxSection,
} from "@/components/custom";
import { scrollToTop } from "@/utils/scroll";
import React, { useEffect, useState } from "react";

const Finance = () => {
  const [blogs, setBlogs] = useState([]);
  const fetchBlogs = async () => {
    const response = await getBlogsByCategory("Finance");
    if (response.blogs) {
      setBlogs(response.blogs);
    }
  };
  useEffect(() => {
    scrollToTop();  
    fetchBlogs();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <FinanceHero />
      <DetailedBankingSection />
      <InsuranceSection />
      <MoneyManagementSection />
      <RetirementSection />
      <TaxSection />
      <FinanceNews blogs={blogs} />
    </div>
  );
};

export default Finance;
