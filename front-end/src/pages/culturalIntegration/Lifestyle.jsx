import { LifestyleBlogSection, Hero } from "@/components/custom";
import React, { useEffect, useState } from "react";
import { Briefcase, Home, ShoppingBag, Users, Utensils } from "lucide-react";
import { scrollToTop } from "@/utils/scroll";
import { getBlogsByCategory } from "@/apiService.js/culturalfit.service";
export const workLifePosts = [
  {
    title: "Understanding UK Work Culture",
    excerpt:
      "Navigate the British workplace with confidence - from tea breaks to office banter.",
    image:
      "https://images.unsplash.com/photo-1497215842964-222b430dc094?auto=format&fit=crop&q=80",
    readingTime: "5 min read",
    date: "Mar 15, 2024",
    category: "Work Culture",
  },
  {
    title: "Bank Holidays: A British Institution",
    excerpt:
      "Make the most of Britain's generous holiday system and plan your long weekends.",
    image:
      "https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?auto=format&fit=crop&q=80",
    readingTime: "4 min read",
    date: "Mar 14, 2024",
    category: "Work Life",
  },
];

export const homePosts = [
  {
    title: "The Art of British Garden Design",
    excerpt:
      "Create your perfect English garden, from cottage style to modern minimal.",
    image:
      "https://images.unsplash.com/photo-1558441440-d4111d18d48f?auto=format&fit=crop&q=80",
    readingTime: "6 min read",
    date: "Mar 13, 2024",
    category: "Home & Garden",
  },
  {
    title: "Victorian vs Modern: UK Housing Guide",
    excerpt:
      "Choose between period features and contemporary comfort in British homes.",
    image:
      "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?auto=format&fit=crop&q=80",
    readingTime: "7 min read",
    date: "Mar 12, 2024",
    category: "Housing",
  },
];

export const socialPosts = [
  {
    title: "The Art of British Small Talk",
    excerpt:
      "Master the weather chat and other essentials of British conversation.",
    image:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80",
    readingTime: "4 min read",
    date: "Mar 11, 2024",
    category: "Social Skills",
  },
  {
    title: "Queuing: The Unwritten Rules",
    excerpt:
      "Everything you need to know about Britain's famous queuing etiquette.",
    image:
      "https://images.unsplash.com/photo-1506869640319-fe1a24fd76dc?auto=format&fit=crop&q=80",
    readingTime: "3 min read",
    date: "Mar 10, 2024",
    category: "Etiquette",
  },
];

export const foodPosts = [
  {
    title: "The Perfect Sunday Roast Guide",
    excerpt:
      "Create the quintessential British Sunday dinner with all the trimmings.",
    image:
      "https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&q=80",
    readingTime: "8 min read",
    date: "Mar 9, 2024",
    category: "Food & Drink",
  },
  {
    title: "Tea Time Traditions",
    excerpt:
      "From builder's brew to afternoon tea, master every British tea custom.",
    image:
      "https://images.unsplash.com/photo-1547825407-2d060104b7f8?auto=format&fit=crop&q=80",
    readingTime: "5 min read",
    date: "Mar 8, 2024",
    category: "Food & Drink",
  },
];

export const shoppingPosts = [
  {
    title: "High Street vs Online Shopping",
    excerpt:
      "Navigate Britain's retail landscape from traditional shops to digital platforms.",
    image:
      "https://images.unsplash.com/photo-1537832816519-689ad163238b?auto=format&fit=crop&q=80",
    readingTime: "6 min read",
    date: "Mar 7, 2024",
    category: "Shopping",
  },
  {
    title: "British Fashion Through the Seasons",
    excerpt:
      "Dress for Britain's unpredictable weather with style and practicality.",
    image:
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&q=80",
    readingTime: "5 min read",
    date: "Mar 6, 2024",
    category: "Fashion",
  },
];

function Lifestyle() {
  const [blogs, setBlogs] = useState([]);
  const fetchBlogs = async () => {
    const response = await getBlogsByCategory("lifestyle");
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
      <Hero />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <LifestyleBlogSection
          title="Work-Life Balance"
          description="The British approach to balancing career and personal life is unique. With standard 37.5-hour work weeks, generous holiday allowances, and a strong emphasis on family time, the UK offers a sustainable lifestyle that prioritizes well-being alongside professional growth."
          icon={Briefcase}
          image="https://images.unsplash.com/photo-1497215842964-222b430dc094?auto=format&fit=crop&q=80"
          blogPosts={blogs}
        />

        <LifestyleBlogSection
          title="British Home Life"
          description="From cozy terraced houses to modern city flats, British homes reflect a distinct way of living. Discover how the British create comfortable living spaces, maintain their gardens, and embrace the charm of traditional architecture."
          icon={Home}
          image="https://images.unsplash.com/photo-1513584684374-8bab748fbf90?auto=format&fit=crop&q=80"
          blogPosts={blogs}
          reverse
        />

        <LifestyleBlogSection
          title="Social Customs & Etiquette"
          description="Understanding British social norms is key to fitting in. Learn about queuing culture, small talk, and the art of polite conversation. Master the unwritten rules that govern social interactions in the UK."
          icon={Users}
          image="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80"
          blogPosts={blogs}
        />

        <LifestyleBlogSection
          title="Food & Dining Culture"
          description="Beyond fish and chips, discover the diverse British culinary scene. From Sunday roasts to modern fusion cuisine, explore how food brings people together in British culture."
          icon={Utensils}
          image="https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&q=80"
          blogPosts={blogs}
          reverse
        />

        <LifestyleBlogSection
          title="Shopping & Fashion"
          description="From historic high streets to modern shopping centres, the UK offers a unique retail experience. Learn about British fashion sensibilities and shopping customs."
          icon={ShoppingBag}
          image="https://images.unsplash.com/photo-1537832816519-689ad163238b?auto=format&fit=crop&q=80"
          blogPosts={blogs}
        />
      </main>
    </div>
  );
}

export default Lifestyle;
