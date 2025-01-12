import {
  FaPlane,
  FaGraduationCap,
  FaUsers,
  FaBriefcase,
  FaRocket,
  FaBuilding,
  FaUserPlus,
  FaGlobe,
  FaClock,
  FaShieldAlt,
} from "react-icons/fa";
export const visaTypes = [
  {
    icon: <FaPlane className="w-12 h-12" />,
    title: "Tourist",
    description:
      "Perfect for travelers planning temporary stays for tourism, family visits, or business meetings.",
    duration: "Duration: Up to 6 months",
    benefits: [
      "Fast processing time",
      "Multiple entry options",
      "Flexible travel dates",
      "Tourism & business activities",
    ],
    color: "bg-blue-50 hover:bg-blue-100",
    iconColor: "text-blue-600",
    buttonColor: "bg-blue-600 hover:bg-blue-700",
  },
  {
    icon: <FaGraduationCap className="w-12 h-12" />,
    title: "Student Visa",
    description:
      "Designed for international students pursuing education at recognized institutions.",
    duration: "Duration: Course length + 6 months",
    benefits: [
      "Part-time work permitted",
      "Access to healthcare",
      "Extended stay options",
      "Educational support",
    ],
    color: "bg-green-50 hover:bg-green-100",
    iconColor: "text-green-600",
    buttonColor: "bg-green-600 hover:bg-green-700",
  },
  {
    icon: <FaUsers className="w-12 h-12" />,
    title: "Family Visa",
    description:
      "Unite with your loved ones through our comprehensive family visa services.",
    duration: "Duration: 2-5 years",
    benefits: [
      "Family reunification",
      "Path to permanent residence",
      "Access to public services",
      "Work authorization",
    ],
    color: "bg-purple-50 hover:bg-purple-100",
    iconColor: "text-purple-600",
    buttonColor: "bg-purple-600 hover:bg-purple-700",
  },
  {
    icon: <FaBriefcase className="w-12 h-12" />,
    title: "Skilled Worker Visa",
    description:
      "For individuals with a job offer in a skilled occupation in the UK.",
    duration: "Duration: Up to 5 years",
    benefits: [
      "Work in a skilled occupation",
      "Path to permanent settlement",
      "Bring family members",
      "Access to healthcare",
    ],
    color: "bg-red-50 hover:bg-red-100",
    iconColor: "text-red-600",
    buttonColor: "bg-red-600 hover:bg-red-700",
  },
  {
    icon: <FaRocket className="w-12 h-12" />,
    title: "Global Talent Visa",
    description:
      "For individuals with exceptional talent in fields like science, medicine, engineering, and the arts.",
    duration: "Duration: Up to 5 years",
    benefits: [
      "No job offer required",
      "Access to public funds",
      "Path to settlement",
      "Bring family members",
    ],
    color: "bg-yellow-50 hover:bg-yellow-100",
    iconColor: "text-yellow-600",
    buttonColor: "bg-yellow-600 hover:bg-yellow-700",
  },
  {
    icon: <FaBuilding className="w-12 h-12" />,
    title: "Innovator Visa",
    description:
      "For entrepreneurs with an innovative business idea who want to start a business in the UK.",
    duration: "Duration: 3 years (extendable)",
    benefits: [
      "Start a new business in the UK",
      "Access to funding support",
      "Work and bring family members",
      "Path to permanent residence",
    ],
    color: "bg-teal-50 hover:bg-teal-100",
    iconColor: "text-teal-600",
    buttonColor: "bg-teal-600 hover:bg-teal-700",
  },
  {
    icon: <FaUserPlus className="w-12 h-12" />,
    title: "Spouse/Partner Visa",
    description:
      "For individuals who want to join their partner or spouse in the UK.",
    duration: "Duration: 2.5 years (extendable)",
    benefits: [
      "Work rights in the UK",
      "Access to healthcare",
      "Family reunification",
      "Path to indefinite leave to remain",
    ],
    color: "bg-pink-50 hover:bg-pink-100",
    iconColor: "text-pink-600",
    buttonColor: "bg-pink-600 hover:bg-pink-700",
  },
  {
    icon: <FaGlobe className="w-12 h-12" />,
    title: "Youth Mobility Scheme Visa",
    description:
      "For young individuals (aged 18-30) from certain countries wishing to live and work in the UK temporarily.",
    duration: "Duration: 2 years",
    benefits: [
      "Work and travel in the UK",
      "No job offer required",
      "Access to healthcare",
      "Cultural exchange opportunities",
    ],
    color: "bg-orange-50 hover:bg-orange-100",
    iconColor: "text-orange-600",
    buttonColor: "bg-orange-600 hover:bg-orange-700",
  },
  {
    icon: <FaClock className="w-12 h-12" />,
    title: "Visitor Visa (Business)",
    description:
      "For business visitors coming to the UK for meetings, conferences, or short-term business activities.",
    duration: "Duration: Up to 6 months",
    benefits: [
      "Attending meetings and conferences",
      "Short-term business activities",
      "Multiple entry options",
      "Fast processing time",
    ],
    color: "bg-indigo-50 hover:bg-indigo-100",
    iconColor: "text-indigo-600",
    buttonColor: "bg-indigo-600 hover:bg-indigo-700",
  },
  {
    icon: <FaShieldAlt className="w-12 h-12" />,
    title: "Health and Care Worker Visa",
    description:
      "For medical professionals, care workers, and those providing essential services in healthcare.",
    duration: "Duration: Up to 5 years",
    benefits: [
      "Work in the healthcare sector",
      "Path to permanent settlement",
      "Bring family members",
      "Access to healthcare services",
    ],
    color: "bg-green-50 hover:bg-green-100",
    iconColor: "text-green-600",
    buttonColor: "bg-green-600 hover:bg-green-700",
  },
];
