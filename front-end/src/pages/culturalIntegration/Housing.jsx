import { getBlogsByCategory } from "@/apiService.js/culturalfit.service";
import {
  BlogCard,
  CategorySection,
  FeaturedLocation,
  HeroSection,
  HousingCard,
  HousingHeroSection,
  QuickGuide,
  StatCard,
} from "@/components/custom";
import { scrollToTop } from "@/utils/scroll";
import { Home, PoundSterling, Building, ClipboardList } from "lucide-react";
import React, { useEffect, useState } from "react";

function Housing() {
  const categories = [
    {
      title: "Buying & Selling",
      description:
        "Navigate the UK property market with expert guidance on mortgages, property searches, and legal requirements for buying and selling homes.",
      icon: <PoundSterling className="h-6 w-6 text-blue-600" />,
    },
    {
      title: "Housing Basics",
      description:
        "Essential information about UK housing types, council tax, utilities, and understanding your rights and responsibilities as a resident.",
      icon: <Home className="h-6 w-6 text-blue-600" />,
    },
    {
      title: "Renting",
      description:
        "Everything you need to know about renting in the UK, including tenant rights, deposits, contracts, and dealing with landlords and agencies.",
      icon: <Building className="h-6 w-6 text-blue-600" />,
    },
    {
      title: "Housing Listings",
      description:
        "Browse current property listings across the UK, featuring detailed information about available properties for rent or purchase.",
      icon: <ClipboardList className="h-6 w-6 text-blue-600" />,
    },
  ];

  const housingStats = [
    {
      title: "Average House Price",
      value: "£276,755",
      description: "UK average as of 2024",
    },
    {
      title: "Rental Growth",
      value: "+4.8%",
      description: "Year-on-year increase",
    },
    {
      title: "First-Time Buyers",
      value: "408,000",
      description: "Number of new homeowners in 2023",
    },
    {
      title: "Mortgage Rate",
      value: "4.6%",
      description: "Average fixed rate",
    },
  ];

  const featuredLocations = [
    {
      city: "London",
      image:
        "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      averagePrice: "£523,666",
      description:
        "The capital city offers diverse housing options and cultural experiences.",
    },
    {
      city: "Manchester",
      image:
        "https://images.unsplash.com/photo-1543872084-c7bd3822856f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      averagePrice: "£249,182",
      description:
        "A vibrant northern hub with growing property investment opportunities.",
    },
    {
      city: "Edinburgh",
      image:
        "https://images.unsplash.com/photo-1506377585622-bedcbb027afc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      averagePrice: "£316,583",
      description: "Scotland's capital combines history with modern living.",
    },
  ];

  const quickGuideItems = [
    {
      title: "Stamp Duty Rates",
      content:
        "First-time buyers pay no stamp duty on properties up to £425,000. Above this, rates vary from 5% to 12%.",
    },
    {
      title: "Rental Deposits",
      content:
        "Landlords can legally request up to 5 weeks' rent as a deposit, which must be protected in a government-approved scheme.",
    },
    {
      title: "Mortgage Requirements",
      content:
        "Most lenders require a minimum 10% deposit, good credit history, and proof of stable income.",
    },
  ];
  const [blogs, setBlogs] = useState([]);
  const fetchBlogs = async () => {
    const response = await getBlogsByCategory("Housing");
    if (response.blogs) {
      setBlogs(response.blogs);
    }
  };
  useEffect(() => {
    scrollToTop();
    fetchBlogs();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <HousingHeroSection />

      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          {housingStats.map((stat, index) => (
            <StatCard
              key={index}
              title={stat.title}
              value={stat.value}
              description={stat.description}
            />
          ))}
        </div>
        <h2 className="text-2xl font-bold mb-8">Featured Locations</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {featuredLocations.map((location, index) => (
            <FeaturedLocation
              key={index}
              city={location.city}
              image={location.image}
              averagePrice={location.averagePrice}
              description={location.description}
            />
          ))}
        </div>
        <h2 className="text-2xl font-bold mb-8">Housing Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {categories.map((category, index) => (
            <CategorySection
              key={index}
              title={category.title}
              description={category.description}
              icon={category.icon}
            />
          ))}
        </div>
        <div className="mb-12">
          <QuickGuide items={quickGuideItems} />
        </div>

        <h2 className="text-2xl font-bold mb-8">Latest Housing Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogs?.map((post, index) => (
            <BlogCard
              key={index}
              title={post.title}
              content={post.content}
              author={post.author}
              postDetails={post}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Housing;
