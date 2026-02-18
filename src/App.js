import { useState, useEffect, createContext, useContext } from "react";
import "@/App.css";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Phone, 
  MapPin, 
  Clock, 
  Star, 
  Leaf,
  Brain,
  Users,
  ChevronRight,
  Menu,
  X,
  Globe,
  Check,
  Heart,
  Shield,
  Sparkles,
  Sun,
  Moon,
  Award,
  BookOpen
} from "lucide-react";
import { Button } from "./components/ui/button";
import Chatbot from "./components/Chatbot";

// Theme Context
const ThemeContext = createContext();
const LanguageContext = createContext();

// Brand Assets
const LOGO_PRIMARY = "https://customer-assets.emergentagent.com/job_8657cdcb-5845-4b6f-94df-482e56460fc1/artifacts/39g5kp3j_WhatsApp%20Image%202026-01-28%20at%2014.54.32%20%281%29.jpeg";
const LOGO_DARK = "https://customer-assets.emergentagent.com/job_8657cdcb-5845-4b6f-94df-482e56460fc1/artifacts/fg0kf7of_WhatsApp%20Image%202026-01-28%20at%2014.55.03.jpeg";
const ADHIVEDA_FOUNDATION_LOGO = "/images/adhiveda_foundation_logo.png";
const VISHNU_PRAKASH_1 = "/images/vishnu_prakash_1.jpeg";
const VISHNU_PRAKASH_2 = "/images/vishnu_prakash_2.jpeg";

// Gallery Images
const GALLERY_IMAGES = [
  "/images/WhatsApp_Image_2026-01-22_at_14.33.15.jpeg",
  "/images/WhatsApp_Image_2026-01-22_at_14.33.15__1_.jpeg",
  "/images/WhatsApp_Image_2026-01-22_at_14.33.15__2_.jpeg",
  "/images/WhatsApp_Image_2026-01-22_at_14.33.15__3_.jpeg",
  "/images/WhatsApp_Image_2026-01-22_at_14.33.15__4_.jpeg",
  "/images/WhatsApp_Image_2026-01-22_at_14.33.15__5_.jpeg",
];

// Contact Info
const CONTACT = {
  phone1: "+91 9061 64 91 01",
  phone2: "+91 7907 56 13 69",
  whatsapp: "919061649101",
  location:
    "Mananthavady, Valliyoorkkavu Road, Near Vaderi Siva Temple, Opp. Joy Palace",
  social: {
    youtube: "https://www.youtube.com/@vishnumayalayam3496",
    instagram: "https://www.instagram.com/paymooladevasthanam/",
    facebook: "https://www.facebook.com/profile.php?id=61573408071448",
  },
};

// Translations
const translations = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      founder: "Founder",
      services: "Services",
      gallery: "Gallery",
      contact: "Contact",
    },
    hero: {
      title: "Adhiveda",
      subtitle: "Alternative Healing & Research Centre",
      description:
        "A sacred sanctuary where ancient Vedic wisdom meets transformative healing. Remove all obstacles from your path and embrace the divine journey of self-discovery and life transformation.",
      cta1: "Begin Your Transformation",
      cta2: "Meet Our Founder",
      booking: "Book Consultation",
      trust: "Trusted by thousands seeking divine guidance",
      preBookingNote: "Pre-booking required for personal consultations",
    },
    founder: {
      label: "Visionary Leader",
      title: "Vishnu Prakash",
      role: "Managing Director, Adhiveda Foundation",
      roles: [
        "Co-Founder, Tribalosophy International (Europe)",
        "Managing Director, Vedhaguru International",
        "Priest (Thantri), Paymoola Devasthanam",
        "Spiritual Guide",
      ],
      description:
        "A renowned spiritual healer and visionary leader dedicated to transforming lives through the sacred wisdom of Vedic traditions. With decades of experience in alternative healing, Vishnu Prakash has guided thousands of seekers on their path to enlightenment, removing obstacles and unlocking their true potential.",
      quote:
        '"Every soul has the power to transform. My mission is to guide you in discovering that divine spark within yourself and removing the obstacles that cloud your true path."',
      achievements: [
        "20+ Years Experience",
        "International Recognition",
        "Thousands Transformed",
        "Vedic Research Pioneer",
      ],
      scheduleCta: "Schedule Personal Consultation",
    },
    about: {
      label: "Our Legacy",
      title: "Remove Obstacles, Transform Lives",
      p1: "Adhiveda Alternative Healing and Research Centre stands as a beacon of hope for those seeking profound transformation. We are a sacred sanctuary dedicated to removing life's obstacles and guiding you toward lasting positive change through the timeless wisdom of Vedic traditions.",
      p2: "Registered Adhiveda Foundation, our centre masterfully blends ancient spiritual practices with holistic healing methods perfected over millennia.",
      features: [
        "Divine Guidance",
        "Obstacle Removal",
        "Life Transformation",
        "Inner Peace",
      ],
      centerName: "Adhiveda Alternative Healing & Research Center",
      registeredUnder: "Registered under Adhiveda Foundation.",
    },
    services: {
      label: "Sacred Services",
      title: "Pathways to Transformation",
      description:
        "Discover our sacred healing practices designed to remove obstacles, restore balance, and transform your life's journey.",
      items: [
        {
          title: "Thambula Rekha Astrology",
          titleLocal: "താംബൂലരേഖാ ജ്യോതിഷം",
          description:
            "Ancient leaf-reading astrology reveals hidden truths about your destiny. Through sacred betel leaves, uncover the obstacles blocking your path and receive divine guidance.",
        },
        {
          title: "Vedic Mind Healing",
          titleLocal: "വേദിക് മൈൻഡ് ഹീലിങ്",
          description:
            "Release mental blocks and negative patterns through powerful Vedic healing techniques. Experience profound clarity, inner peace, and renewed mental strength.",
        },
        {
          title: "Spiritual Consultation",
          titleLocal: "ആത്മീയ കൺസൾട്ടേഷൻ",
          description:
            "Receive personalized guidance for your spiritual journey. Our experts help identify and remove obstacles while providing clarity for life's most important decisions.",
        },
        {
          title: "Alternative Healing Programs",
          titleLocal: "ഹീലിങ് പ്രോഗ്രാംസ്",
          description:
            "Customized healing programs designed for complete life transformation. Address root causes of problems and experience lasting positive change.",
        },
      ],
      cta: "Inquire About Services",
    },
    gallery: {
      label: "Sacred Space",
      title: "Our Healing Sanctuary",
      description:
        "Step inside our sacred space where ancient wisdom meets divine healing.",
    },
    contact: {
      label: "Visit Us",
      title: "Begin Your Journey",
      location: "Our Location",
      phone: "Contact Numbers",
      hours: "Working Hours",
      hoursList: [
        "Monday - Friday: 9:30 AM - 4:30 PM",
        "Saturday: 9:30 AM - 1:00 PM",
        "Sunday: Closed",
      ],
      mapLink: "Open in Google Maps",
    },
    footer: {
      tagline: "Your path to transformation begins here",
      quickLinks: "Quick Links",
      connect: "Connect With Us",
      whatsapp: "Chat on WhatsApp",
      rights: "All rights reserved.",
      divineTagline: "Remove obstacles. Transform your life.",
    },
    timing: "Mon-Fri: 9:30 AM - 4:30 PM",
    theme: { light: "Light Mode", dark: "Dark Mode" },
  },
  ml: {
    nav: {
      home: "ഹോം",
      about: "ഞങ്ങളെക്കുറിച്ച്",
      founder: "സ്ഥാപകൻ",
      services: "സേവനങ്ങൾ",
      gallery: "ഗാലറി",
      contact: "ബന്ധപ്പെടുക",
    },
    hero: {
      title: "ആദിവേദ",
      subtitle: "ആൾട്ടർനേറ്റീവ് ഹീലിംഗ് & റിസേർച്ച് സെന്റർ",
      description:
        "പുരാതന വേദ ജ്ഞാനവും പരിവർത്തനാത്മക ചികിത്സയും ഒത്തുചേരുന്ന ഒരു പവിത്ര സങ്കേതം. നിങ്ങളുടെ പാതയിൽ നിന്ന് എല്ലാ തടസ്സങ്ങളും നീക്കം ചെയ്യുക.",
      cta1: "നിങ്ങളുടെ പരിവർത്തനം ആരംഭിക്കുക",
      cta2: "സ്ഥാപകനെ കാണുക",
      booking: "കൺസൾട്ടേഷൻ ബുക്ക് ചെയ്യുക",
      trust: "ദൈവിക മാർഗ്ഗനിർദ്ദേശം തേടുന്ന ആയിരങ്ങൾ വിശ്വസിക്കുന്നു",
      preBookingNote: "വ്യക്തിഗത കൺസൾട്ടേഷനുകൾക്ക് മുൻകൂർ ബുക്കിംഗ് ആവശ്യമാണ്",
    },
    founder: {
      label: "ദർശനപരമായ നേതാവ്",
      title: "വിഷ്ണു പ്രകാശ്",
      role: "മാനേജിംഗ് ഡയറക്ടർ, ആദിവേദ ഫൗണ്ടേഷൻ",
      roles: [
        "സഹസ്ഥാപകൻ, ട്രൈബാലോസഫി ഇന്റർനാഷണൽ (യൂറോപ്പ്)",
        "മാനേജിംഗ് ഡയറക്ടർ, വേദഗുരു ഇന്റർനാഷണൽ",
        "പുരോഹിതൻ (തന്ത്രി), പയ്മൂല ദേവസ്ഥാനം",
        "ആത്മീയ ഗുരു",
      ],
      description:
        "വേദ പാരമ്പര്യങ്ങളുടെ പവിത്ര ജ്ഞാനത്തിലൂടെ ജീവിതങ്ങളെ പരിവർത്തനം ചെയ്യാൻ സമർപ്പിതനായ ഒരു പ്രശസ്ത ആത്മീയ ചികിത്സകനും ദർശനപരമായ നേതാവുമാണ്.",
      quote:
        '"എല്ലാ ആത്മാവിനും പരിവർത്തനം ചെയ്യാനുള്ള ശക്തിയുണ്ട്. നിങ്ങളുടെ യഥാർത്ഥ പാതയെ മറയ്ക്കുന്ന തടസ്സങ്ങൾ നീക്കം ചെയ്യാൻ നിങ്ങളെ നയിക്കുക എന്നതാണ് എന്റെ ദൗത്യം."',
      achievements: [
        "20+ വർഷത്തെ അനുഭവം",
        "അന്താരാഷ്ട്ര അംഗീകാരം",
        "ആയിരങ്ങളെ പരിവർത്തനം ചെയ്തു",
        "വേദ ഗവേഷണ പയനിയർ",
      ],
      scheduleCta: "വ്യക്തിഗത കൺസൾട്ടേഷൻ ഷെഡ്യൂൾ ചെയ്യുക",
    },
    about: {
      label: "ഞങ്ങളുടെ പൈതൃകം",
      title: "തടസ്സങ്ങൾ നീക്കുക, ജീവിതങ്ങൾ പരിവർത്തനം ചെയ്യുക",
      p1: "ആഴത്തിലുള്ള പരിവർത്തനം തേടുന്നവർക്ക് പ്രതീക്ഷയുടെ വെളിച്ചമായി ആദിവേദ ആൾട്ടർനേറ്റീവ് ഹീലിംഗ് ആൻഡ് റിസേർച്ച് സെന്റർ നിലകൊള്ളുന്നു.",
      p2: "ആദിവേദ ഫൗണ്ടേഷന്റെ കീഴിൽ രജിസ്റ്റർ ചെയ്തിരിക്കുന്ന ഞങ്ങളുടെ കേന്ദ്രം, പുരാതന ആത്മീയ പ്രയോഗങ്ങളെ സമഗ്ര ചികിത്സാ രീതികളുമായി സമർത്ഥമായി സമന്വയിപ്പിക്കുന്നു.",
      features: [
        "ദൈവിക മാർഗ്ഗദർശനം",
        "തടസ്സ നിവാരണം",
        "ജീവിത പരിവർത്തനം",
        "ആന്തരിക സമാധാനം",
      ],
      centerName: "ആദിവേദ ആൾട്ടർനേറ്റീവ് ഹീലിംഗ് & റിസേർച്ച് സെന്റർ",
      registeredUnder: "ആദിവേദ ഫൗണ്ടേഷന് കീഴിൽ രജിസ്റ്റർ ചെയ്തത്.",
    },
    services: {
      label: "പവിത്ര സേവനങ്ങൾ",
      title: "പരിവർത്തനത്തിലേക്കുള്ള പാതകൾ",
      description:
        "തടസ്സങ്ങൾ നീക്കാനും സന്തുലിതാവസ്ഥ പുനഃസ്ഥാപിക്കാനും രൂപകൽപ്പന ചെയ്ത ഞങ്ങളുടെ പവിത്ര ചികിത്സാ പ്രയോഗങ്ങൾ കണ്ടെത്തുക.",
      items: [
        {
          title: "താംബൂലരേഖാ ജ്യോതിഷം",
          titleLocal: "Thambula Rekha Astrology",
          description:
            "പുരാതന ഇല വായന ജ്യോതിഷം നിങ്ങളുടെ വിധിയെക്കുറിച്ചുള്ള മറഞ്ഞിരിക്കുന്ന സത്യങ്ങൾ വെളിപ്പെടുത്തുന്നു.",
        },
        {
          title: "വേദിക് മൈൻഡ് ഹീലിങ്",
          titleLocal: "Vedic Mind Healing",
          description:
            "ശക്തമായ വേദ ചികിത്സാ സാങ്കേതികവിദ്യകളിലൂടെ മാനസിക തടസ്സങ്ങൾ മോചിപ്പിക്കുക.",
        },
        {
          title: "ആത്മീയ കൺസൾട്ടേഷൻ",
          titleLocal: "Spiritual Consultation",
          description:
            "നിങ്ങളുടെ ആത്മീയ യാത്രയ്ക്കായി വ്യക്തിഗതമാക്കിയ മാർഗ്ഗനിർദ്ദേശം സ്വീകരിക്കുക.",
        },
        {
          title: "ഹീലിങ് പ്രോഗ്രാംസ്",
          titleLocal: "Healing Programs",
          description:
            "സമ്പൂർണ്ണ ജീവിത പരിവർത്തനത്തിനായി രൂപകൽപ്പന ചെയ്ത ഇഷ്ടാനുസൃത ചികിത്സാ പ്രോഗ്രാമുകൾ.",
        },
      ],
      cta: "സേവനങ്ങളെക്കുറിച്ച് അന്വേഷിക്കുക",
    },
    gallery: {
      label: "പവിത്ര സ്ഥലം",
      title: "ഞങ്ങളുടെ ചികിത്സാ സങ്കേതം",
      description: "പുരാതന ജ്ഞാനവും ദൈവിക ചികിത്സയും ഒത്തുചേരുന്ന സ്ഥലം.",
    },
    contact: {
      label: "ഞങ്ങളെ സന്ദർശിക്കുക",
      title: "നിങ്ങളുടെ യാത്ര ആരംഭിക്കുക",
      location: "ഞങ്ങളുടെ സ്ഥാനം",
      phone: "ഫോൺ നമ്പരുകൾ",
      hours: "പ്രവർത്തന സമയം",
      hoursList: [
        "തിങ്കൾ - വെള്ളി: 9:30 AM - 4:30 PM",
        "ശനി: 9:30 AM - 1:00 PM",
        "ഞായർ: അവധി",
      ],
      mapLink: "Google Maps-ൽ തുറക്കുക",
    },
    footer: {
      tagline: "പരിവർത്തനത്തിലേക്കുള്ള നിങ്ങളുടെ പാത ഇവിടെ ആരംഭിക്കുന്നു",
      quickLinks: "ക്വിക്ക് ലിങ്കുകൾ",
      connect: "ഞങ്ങളുമായി ബന്ധപ്പെടുക",
      whatsapp: "WhatsApp-ൽ ചാറ്റ് ചെയ്യുക",
      rights: "എല്ലാ അവകാശങ്ങളും സംരക്ഷിതം.",
      divineTagline: "തടസ്സങ്ങൾ നീക്കുക. നിങ്ങളുടെ ജീവിതം മാറ്റുക.",
    },
    timing: "തിങ്കൾ-വെള്ളി: 9:30 AM - 4:30 PM",
    theme: { light: "ലൈറ്റ് മോഡ്", dark: "ഡാർക്ക് മോഡ്" },
  },
  ta: {
    nav: {
      home: "முகப்பு",
      about: "எங்களை பற்றி",
      founder: "நிறுவனர்",
      services: "சேவைகள்",
      gallery: "கேலரி",
      contact: "தொடர்பு",
    },
    hero: {
      title: "ஆதிவேதா",
      subtitle: "மாற்று சிகிச்சை & ஆராய்ச்சி மையம்",
      description:
        "பண்டைய வேத ஞானமும் மாற்றும் சிகிச்சையும் சந்திக்கும் புனித சரணாலயம். உங்கள் பாதையில் இருந்து அனைத்து தடைகளையும் நீக்குங்கள்.",
      cta1: "உங்கள் மாற்றத்தைத் தொடங்குங்கள்",
      cta2: "நிறுவனரைச் சந்தியுங்கள்",
      booking: "ஆலோசனை பதிவு",
      trust: "தெய்வீக வழிகாட்டுதலை நாடும் ஆயிரக்கணக்கானோரால் நம்பப்படுகிறது",
      preBookingNote: "தனிப்பட்ட ஆலோசனைகளுக்கு முன்பதிவு தேவை",
    },
    founder: {
      label: "தொலைநோக்கு தலைவர்",
      title: "விஷ்ணு பிரகாஷ்",
      role: "நிர்வாக இயக்குநர், ஆதிவேதா அறக்கட்டளை",
      roles: [
        "இணை நிறுவனர், ட்ரைபாலோசோபி இன்டர்நேஷனல் (ஐரோப்பா)",
        "நிர்வாக இயக்குநர், வேதகுரு இன்டர்நேஷனல்",
        "புரோகிதர் (தந்திரி), பய்மூலா தேவஸ்தானம்",
        "ஆன்மீக வழிகாட்டி",
      ],
      description:
        "வேத மரபுகளின் புனித ஞானத்தின் மூலம் வாழ்க்கையை மாற்றுவதற்கு அர்ப்பணிக்கப்பட்ட புகழ்பெற்ற ஆன்மீக குணப்படுத்துபவர்.",
      quote:
        '"ஒவ்வொரு ஆத்மாவுக்கும் மாற்றும் சக்தி உள்ளது. உங்களுக்குள் இருக்கும் தெய்வீக தீப்பொறியை கண்டறிய உங்களை வழிநடத்துவதே என் நோக்கம்."',
      achievements: [
        "20+ ஆண்டுகள் அனுபவம்",
        "சர்வதேச அங்கீகாரம்",
        "ஆயிரக்கணக்கானோர் மாற்றப்பட்டனர்",
        "வேத ஆராய்ச்சி முன்னோடி",
      ],
      scheduleCta: "தனிப்பட்ட ஆலோசனை ஷெட்யூல் செய்யுங்கள்",
    },
    about: {
      label: "எங்கள் மரபு",
      title: "தடைகளை நீக்கு, வாழ்க்கைகளை மாற்று",
      p1: "ஆழமான மாற்றத்தை நாடுபவர்களுக்கு நம்பிக்கையின் கலங்கரை விளக்கமாக ஆதிவேதா நிற்கிறது.",
      p2: "ஆதிவேதா அறக்கட்டளையின் கீழ் பதிவு செய்யப்பட்டது.",
      features: [
        "தெய்வீக வழிகாட்டுதல்",
        "தடை நீக்கம்",
        "வாழ்க்கை மாற்றம்",
        "உள் அமைதி",
      ],
      centerName: "ஆதிவேதா மாற்று சிகிச்சை & ஆராய்ச்சி மையம்",
      registeredUnder: "ஆதிவேதா அறக்கட்டளையின் கீழ் பதிவு செய்யப்பட்டது.",
    },
    services: {
      label: "புனித சேவைகள்",
      title: "மாற்றத்திற்கான பாதைகள்",
      description:
        "தடைகளை நீக்க வடிவமைக்கப்பட்ட எங்கள் புனித சிகிச்சை நடைமுறைகளைக் கண்டறியுங்கள்.",
      items: [
        {
          title: "தாம்பூல ரேகா ஜோதிடம்",
          titleLocal: "Thambula Rekha",
          description: "பண்டைய இலை வாசிப்பு ஜோதிடம்.",
        },
        {
          title: "வேத மனம் குணப்படுத்துதல்",
          titleLocal: "Vedic Mind Healing",
          description: "மன தடைகளை விடுவியுங்கள்.",
        },
        {
          title: "ஆன்மீக ஆலோசனை",
          titleLocal: "Spiritual Consultation",
          description: "தனிப்பயனாக்கப்பட்ட வழிகாட்டுதல்.",
        },
        {
          title: "குணப்படுத்தும் திட்டங்கள்",
          titleLocal: "Healing Programs",
          description: "வாழ்க்கை மாற்றத்திற்கான திட்டங்கள்.",
        },
      ],
      cta: "சேவைகளைப் பற்றி விசாரியுங்கள்",
    },
    gallery: {
      label: "புனித இடம்",
      title: "எங்கள் சிகிச்சை சரணாலயம்",
      description: "பண்டைய ஞானம் தெய்வீக சிகிச்சையை சந்திக்கும் இடம்.",
    },
    contact: {
      label: "எங்களைச் சந்தியுங்கள்",
      title: "உங்கள் பயணத்தைத் தொடங்குங்கள்",
      location: "எங்கள் இருப்பிடம்",
      phone: "தொடர்பு எண்கள்",
      hours: "வேலை நேரம்",
      hoursList: [
        "திங்கள் - வெள்ளி: 9:30 AM - 4:30 PM",
        "சனி: 9:30 AM - 1:00 PM",
        "ஞாயிறு: விடுமுறை",
      ],
      mapLink: "Google Maps-ல் திறக்கவும்",
    },
    footer: {
      tagline: "மாற்றத்திற்கான உங்கள் பாதை இங்கே தொடங்குகிறது",
      quickLinks: "விரைவு இணைப்புகள்",
      connect: "எங்களுடன் இணையுங்கள்",
      whatsapp: "WhatsApp-ல் அரட்டை",
      rights: "அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.",
      divineTagline: "தடைகளை நீக்கு. வாழ்க்கையை மாற்று.",
    },
    timing: "திங்கள்-வெள்ளி: 9:30 AM - 4:30 PM",
    theme: { light: "ஒளி பயன்முறை", dark: "இருள் பயன்முறை" },
  },
  kn: {
    nav: {
      home: "ಮುಖಪುಟ",
      about: "ನಮ್ಮ ಬಗ್ಗೆ",
      founder: "ಸ್ಥಾಪಕ",
      services: "ಸೇವೆಗಳು",
      gallery: "ಗ್ಯಾಲರಿ",
      contact: "ಸಂಪರ್ಕ",
    },
    hero: {
      title: "ಆದಿವೇದ",
      subtitle: "ಪರ್ಯಾಯ ಗುಣಪಡಿಸುವಿಕೆ & ಸಂಶೋಧನಾ ಕೇಂದ್ರ",
      description:
        "ಪ್ರಾಚೀನ ವೈದಿಕ ಜ್ಞಾನ ಮತ್ತು ಪರಿವರ್ತನಾತ್ಮಕ ಗುಣಪಡಿಸುವಿಕೆ ಸಂಧಿಸುವ ಪವಿತ್ರ ಅಭಯಾರಣ್ಯ.",
      cta1: "ನಿಮ್ಮ ಪರಿವರ್ತನೆಯನ್ನು ಪ್ರಾರಂಭಿಸಿ",
      cta2: "ಸ್ಥಾಪಕರನ್ನು ಭೇಟಿ ಮಾಡಿ",
      booking: "ಸಮಾಲೋಚನೆ ಬುಕ್ ಮಾಡಿ",
      trust: "ದೈವಿಕ ಮಾರ್ಗದರ್ಶನ ಹುಡುಕುತ್ತಿರುವ ಸಾವಿರಾರು ಜನರು ನಂಬುತ್ತಾರೆ",
      preBookingNote: "ವೈಯಕ್ತಿಕ ಸಮಾಲೋಚನೆಗೆ ಮುಂಚಿತ ಬುಕಿಂಗ್ ಅಗತ್ಯವಿದೆ",
    },
    founder: {
      label: "ದೂರದೃಷ್ಟಿಯ ನಾಯಕ",
      title: "ವಿಷ್ಣು ಪ್ರಕಾಶ್",
      role: "ವ್ಯವಸ್ಥಾಪಕ ನಿರ್ದೇಶಕ, ಆದಿವೇದ ಫೌಂಡೇಶನ್",
      roles: [
        "ಸಹ-ಸಂಸ್ಥಾಪಕ, ಟ್ರೈಬಾಲೋಸಫಿ ಇಂಟರ್ನ್ಯಾಷನಲ್ (ಯುರೋಪ್)",
        "ವ್ಯವಸ್ಥಾಪಕ ನಿರ್ದೇಶಕ, ವೇದಗುರು ಇಂಟರ್ನ್ಯಾಷನಲ್",
        "ಪುರೋಹಿತ (ತಂತ್ರಿ), ಪಯ್ಮೂಲಾ ದೇವಸ್ಥಾನ",
        "ಆಧ್ಯಾತ್ಮಿಕ ಮಾರ್ಗದರ್ಶಿ",
      ],
      description:
        "ವೈದಿಕ ಸಂಪ್ರದಾಯಗಳ ಪವಿತ್ರ ಜ್ಞಾನದ ಮೂಲಕ ಜೀವನಗಳನ್ನು ಪರಿವರ್ತಿಸಲು ಮೀಸಲಾದ ಪ್ರಸಿದ್ಧ ಆಧ್ಯಾತ್ಮಿಕ ಗುಣಪಡಿಸುವವರು.",
      quote: '"ಪ್ರತಿ ಆತ್ಮಕ್ಕೂ ಪರಿವರ್ತಿಸುವ ಶಕ್ತಿ ಇದೆ."',
      achievements: [
        "20+ ವರ್ಷಗಳ ಅನುಭವ",
        "ಅಂತರಾಷ್ಟ್ರೀಯ ಮಾನ್ಯತೆ",
        "ಸಾವಿರಾರು ಪರಿವರ್ತಿತರು",
        "ವೈದಿಕ ಸಂಶೋಧನೆ ಪ್ರವರ್ತಕ",
      ],
      scheduleCta: "ವೈಯಕ್ತಿಕ ಸಮಾಲೋಚನೆ ಶೆಡ್ಯೂಲ್ ಮಾಡಿ",
    },
    about: {
      label: "ನಮ್ಮ ಪರಂಪರೆ",
      title: "ಅಡೆತಡೆಗಳನ್ನು ತೆಗೆದುಹಾಕಿ, ಜೀವನಗಳನ್ನು ಪರಿವರ್ತಿಸಿ",
      p1: "ಆಳವಾದ ಪರಿವರ್ತನೆಯನ್ನು ಹುಡುಕುತ್ತಿರುವವರಿಗೆ ಭರವಸೆಯ ದೀಪಸ್ತಂಭವಾಗಿ ಆದಿವೇದ ನಿಂತಿದೆ.",
      p2: "ಆದಿವೇದ ಫೌಂಡೇಶನ್ ಅಡಿಯಲ್ಲಿ ನೋಂದಾಯಿಸಲಾಗಿದೆ.",
      features: [
        "ದೈವಿಕ ಮಾರ್ಗದರ್ಶನ",
        "ಅಡೆತಡೆ ನಿವಾರಣೆ",
        "ಜೀವನ ಪರಿವರ್ತನೆ",
        "ಆಂತರಿಕ ಶಾಂತಿ",
      ],
      centerName: "ಆದಿವೇದ ಪರ್ಯಾಯ ಗುಣಪಡಿಸುವಿಕೆ & ಸಂಶೋಧನಾ ಕೇಂದ್ರ",
      registeredUnder: "ಆದಿವೇದ ಫೌಂಡೇಶನ್ ಅಡಿಯಲ್ಲಿ ನೋಂದಾಯಿಸಲಾಗಿದೆ.",
    },
    services: {
      label: "ಪವಿತ್ರ ಸೇವೆಗಳು",
      title: "ಪರಿವರ್ತನೆಯ ಹಾದಿಗಳು",
      description:
        "ಅಡೆತಡೆಗಳನ್ನು ತೆಗೆದುಹಾಕಲು ವಿನ್ಯಾಸಗೊಳಿಸಲಾದ ನಮ್ಮ ಪವಿತ್ರ ಗುಣಪಡಿಸುವ ಅಭ್ಯಾಸಗಳನ್ನು ಕಂಡುಹಿಡಿಯಿರಿ.",
      items: [
        {
          title: "ತಾಂಬೂಲ ರೇಖಾ ಜ್ಯೋತಿಷ್ಯ",
          titleLocal: "Thambula Rekha",
          description: "ಪ್ರಾಚೀನ ಎಲೆ ಓದುವ ಜ್ಯೋತಿಷ್ಯ.",
        },
        {
          title: "ವೈದಿಕ ಮನಸ್ಸಿನ ಗುಣಪಡಿಸುವಿಕೆ",
          titleLocal: "Vedic Mind Healing",
          description: "ಮಾನಸಿಕ ಅಡೆತಡೆಗಳನ್ನು ಬಿಡುಗಡೆ ಮಾಡಿ.",
        },
        {
          title: "ಆಧ್ಯಾತ್ಮಿಕ ಸಮಾಲೋಚನೆ",
          titleLocal: "Spiritual Consultation",
          description: "ವೈಯಕ್ತಿಕ ಮಾರ್ಗದರ್ಶನ.",
        },
        {
          title: "ಗುಣಪಡಿಸುವ ಕಾರ್ಯಕ್ರಮಗಳು",
          titleLocal: "Healing Programs",
          description: "ಜೀವನ ಪರಿವರ್ತನೆಗೆ ಕಾರ್ಯಕ್ರಮಗಳು.",
        },
      ],
      cta: "ಸೇವೆಗಳ ಬಗ್ಗೆ ವಿಚಾರಿಸಿ",
    },
    gallery: {
      label: "ಪವಿತ್ರ ಸ್ಥಳ",
      title: "ನಮ್ಮ ಗುಣಪಡಿಸುವ ಅಭಯಾರಣ್ಯ",
      description: "ಪ್ರಾಚೀನ ಜ್ಞಾನ ದೈವಿಕ ಗುಣಪಡಿಸುವಿಕೆಯನ್ನು ಭೇಟಿಯಾಗುವ ಸ್ಥಳ.",
    },
    contact: {
      label: "ನಮ್ಮನ್ನು ಭೇಟಿ ಮಾಡಿ",
      title: "ನಿಮ್ಮ ಪ್ರಯಾಣವನ್ನು ಪ್ರಾರಂಭಿಸಿ",
      location: "ನಮ್ಮ ಸ್ಥಳ",
      phone: "ಸಂಪರ್ಕ ಸಂಖ್ಯೆಗಳು",
      hours: "ಕೆಲಸದ ಸಮಯ",
      hoursList: [
        "ಸೋಮ - ಶುಕ್ರ: 9:30 AM - 4:30 PM",
        "ಶನಿ: 9:30 AM - 1:00 PM",
        "ಭಾನು: ರಜೆ",
      ],
      mapLink: "Google Maps ನಲ್ಲಿ ತೆರೆಯಿರಿ",
    },
    footer: {
      tagline: "ಪರಿವರ್ತನೆಗೆ ನಿಮ್ಮ ಹಾದಿ ಇಲ್ಲಿ ಪ್ರಾರಂಭವಾಗುತ್ತದೆ",
      quickLinks: "ತ್ವರಿತ ಲಿಂಕ್‌ಗಳು",
      connect: "ನಮ್ಮೊಂದಿಗೆ ಸಂಪರ್ಕಿಸಿ",
      whatsapp: "WhatsApp ನಲ್ಲಿ ಚಾಟ್ ಮಾಡಿ",
      rights: "ಎಲ್ಲಾ ಹಕ್ಕುಗಳನ್ನು ಕಾಯ್ದಿರಿಸಲಾಗಿದೆ.",
      divineTagline: "ಅಡೆತಡೆಗಳನ್ನು ತೆಗೆದುಹಾಕಿ. ಜೀವನವನ್ನು ಪರಿವರ್ತಿಸಿ.",
    },
    timing: "ಸೋಮ-ಶುಕ್ರ: 9:30 AM - 4:30 PM",
    theme: { light: "ಬೆಳಕಿನ ಮೋಡ್", dark: "ಕತ್ತಲೆ ಮೋಡ್" },
  },
  it: {
    nav: {
      home: "Home",
      about: "Chi Siamo",
      founder: "Fondatore",
      services: "Servizi",
      gallery: "Galleria",
      contact: "Contatti",
    },
    hero: {
      title: "Adhiveda",
      subtitle: "Centro di Guarigione Alternativa e Ricerca",
      description:
        "Un santuario sacro dove l'antica saggezza vedica incontra la guarigione trasformativa. Rimuovi tutti gli ostacoli dal tuo cammino e abbraccia il viaggio divino.",
      cta1: "Inizia la Tua Trasformazione",
      cta2: "Incontra il Fondatore",
      booking: "Prenota Consulenza",
      trust: "Fidato da migliaia che cercano la guida divina",
      preBookingNote:
        "È richiesta la prenotazione anticipata per consulenze personali",
    },
    founder: {
      label: "Leader Visionario",
      title: "Vishnu Prakash",
      role: "Direttore Generale, Adhiveda Foundation",
      roles: [
        "Co-Fondatore, Tribalosophy International (Europa)",
        "Direttore Generale, Vedhaguru International",
        "Sacerdote (Thantri), Paymoola Devasthanam",
        "Guida Spirituale",
      ],
      description:
        "Un rinomato guaritore spirituale e leader visionario dedicato a trasformare vite attraverso la sacra saggezza delle tradizioni vediche.",
      quote:
        '"Ogni anima ha il potere di trasformarsi. La mia missione è guidarti nella scoperta di quella scintilla divina dentro di te."',
      achievements: [
        "20+ Anni di Esperienza",
        "Riconoscimento Internazionale",
        "Migliaia Trasformati",
        "Pioniere della Ricerca Vedica",
      ],
      scheduleCta: "Pianifica Consulenza Personale",
    },
    about: {
      label: "La Nostra Eredità",
      title: "Rimuovi Ostacoli, Trasforma Vite",
      p1: "Il Centro Adhiveda è un faro di speranza per chi cerca una profonda trasformazione.",
      p2: "Registrato sotto la Fondazione Adhiveda.",
      features: [
        "Guida Divina",
        "Rimozione Ostacoli",
        "Trasformazione della Vita",
        "Pace Interiore",
      ],
      centerName: "Adhiveda Centro di Guarigione Alternativa e Ricerca",
      registeredUnder: "Registrato sotto Adhiveda Foundation.",
    },
    services: {
      label: "Servizi Sacri",
      title: "Percorsi di Trasformazione",
      description:
        "Scopri le nostre pratiche sacre progettate per rimuovere ostacoli e trasformare la tua vita.",
      items: [
        {
          title: "Astrologia Thambula Rekha",
          titleLocal: "താംബൂലരേഖാ ജ്യോതിഷം",
          description: "L'antica astrologia della lettura delle foglie.",
        },
        {
          title: "Guarigione Mentale Vedica",
          titleLocal: "വേദിക് മൈൻഡ് ഹീലിങ്",
          description: "Rilascia blocchi mentali.",
        },
        {
          title: "Consultazione Spirituale",
          titleLocal: "ആത്മീയ കൺസൾട്ടേഷൻ",
          description: "Guida personalizzata.",
        },
        {
          title: "Programmi di Guarigione",
          titleLocal: "ഹീലിങ് പ്രോഗ്രാംസ്",
          description: "Programmi per la trasformazione della vita.",
        },
      ],
      cta: "Richiedi Informazioni",
    },
    gallery: {
      label: "Spazio Sacro",
      title: "Il Nostro Santuario",
      description: "Entra nel nostro spazio sacro.",
    },
    contact: {
      label: "Visitaci",
      title: "Inizia il Tuo Viaggio",
      location: "La Nostra Posizione",
      phone: "Numeri di Contatto",
      hours: "Orari",
      hoursList: [
        "Lunedì - Venerdì: 9:30 - 16:30",
        "Sabato: 9:30 - 13:00",
        "Domenica: Chiuso",
      ],
      mapLink: "Apri in Google Maps",
    },
    footer: {
      tagline: "Il tuo percorso inizia qui",
      quickLinks: "Link Rapidi",
      connect: "Connettiti Con Noi",
      whatsapp: "Chatta su WhatsApp",
      rights: "Tutti i diritti riservati.",
      divineTagline: "Rimuovi ostacoli. Trasforma la tua vita.",
    },
    timing: "Lun-Ven: 9:30 - 16:30",
    theme: { light: "Modalità Chiara", dark: "Modalità Scura" },
  },
};

const languages = [
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'ml', name: 'മലയാളം', flag: '🇮🇳' },
  { code: 'ta', name: 'தமிழ்', flag: '🇮🇳' },
  { code: 'kn', name: 'ಕನ್ನಡ', flag: '🇮🇳' },
  { code: 'it', name: 'Italiano', flag: '🇮🇹' }
];

// Theme Provider
const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false);
  const toggleTheme = () => setIsDark(!isDark);
  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      <div className={isDark ? 'dark-theme' : 'light-theme'}>{children}</div>
    </ThemeContext.Provider>
  );
};
export const useTheme = () => useContext(ThemeContext);

// Language Provider
const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState('en');
  const t = translations[lang];
  return <LanguageContext.Provider value={{ lang, setLang, t }}>{children}</LanguageContext.Provider>;
};

const useLanguage = () => useContext(LanguageContext);

// Service Icons
const serviceIcons = [Star, Brain, Users, Leaf];

// Theme Switcher
const ThemeSwitcher = () => {
  const { isDark, toggleTheme } = useTheme();
  const { t } = useLanguage();
  
  return (
    <button
      data-testid="theme-switcher"
      onClick={toggleTheme}
      className="flex items-center gap-2 px-3 py-2 rounded-full border border-gold/30 hover:border-gold transition-all"
      aria-label="Toggle theme"
    >
      {isDark ? <Sun className="w-4 h-4 text-gold" /> : <Moon className="w-4 h-4 text-gold" />}
    </button>
  );
};

// Language Switcher
const LanguageSwitcher = () => {
  const { isDark } = useTheme();
  const { lang, setLang } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        data-testid="language-switcher"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-full border border-gold/30 hover:border-gold transition-all font-manrope text-sm"
      >
        <Globe className="w-4 h-4 text-gold" />
        <span
          className={`hidden sm:inline ${isDark ? "text-white" : "text-black"}`}
        >
          {languages.find((l) => l.code === lang)?.name}
        </span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute right-0 top-12 bg-white dark:bg-cosmic rounded-xl shadow-lg border border-gold/20 overflow-hidden z-50 min-w-[160px]"
          >
            {languages.map((language) => (
              <button
                key={language.code}
                data-testid={`lang-${language.code}`}
                onClick={() => {
                  setLang(language.code);
                  setIsOpen(false);
                }}
                className={`w-full flex items-center gap-3 px-4 py-3 hover:bg-gold/10 transition-colors ${lang === language.code ? "bg-gold/10" : ""}`}
              >
                <span
                  className={`text-lg ${isDark ? "text-white" : "text-black"}`}
                >
                  {language.flag}
                </span>

                <span
                  className={`font-manrope text-sm ${isDark ? "text-white" : "text-black"}`}
                >
                  {language.name}
                </span>

                {lang === language.code && (
                  <Check className="w-4 h-4 text-gold ml-auto" />
                )}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// Navbar
const Navbar = () => {
  const { t } = useLanguage();
  const { isDark } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: t.nav.home, href: "#hero" },
    { label: t.nav.founder, href: "#founder" },
    { label: t.nav.about, href: "#about" },
    { label: t.nav.services, href: "#services" },
    { label: t.nav.gallery, href: "#gallery" },
    { label: t.nav.contact, href: "#contact" }
  ];

  return (
    <motion.nav
      data-testid="navbar"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "glass shadow-soft py-2" : "py-3"} ${isDark ? "bg-cosmic/95" : "bg-cream/95"} backdrop-blur-md`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex items-center justify-between">
          <a
            href="#hero"
            className="flex items-center gap-3"
            data-testid="nav-logo"
          >
            <img
              src={LOGO_DARK}
              alt="Adhiveda"
              className="w-12 h-12 rounded-full object-cover shadow-glow"
            />
            <div className="hidden sm:block">
              <h1
                className={`font-cormorant text-xl font-bold leading-tight ${
                  isDark ? "text-gray-300" : "text-saffron"
                }`}
              >
                Adhiveda
              </h1>
              <p
                className={`text-xs font-manrope -mt-0.5 ${isDark ? "text-gray-400" : "text-gray-600"}`}
              >
                Healing & Research Centre
              </p>
            </div>
          </a>

          <div className="hidden lg:flex items-center gap-5">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`nav-link font-manrope text-xs uppercase tracking-wider transition-colors ${isDark ? "text-gray-300 hover:text-gold" : "text-gray-700 hover:text-gold"}`}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <ThemeSwitcher />
            <LanguageSwitcher />
            <Button
              data-testid="nav-cta"
              onClick={() =>
                window.open(`https://wa.me/${CONTACT.whatsapp}`, "_blank")
              }
              className="hidden md:flex bg-saffron hover:bg-saffron-hover text-cream font-manrope text-xs tracking-wide px-4"
            >
              {t.hero.booking}
            </Button>
            <button
              data-testid="mobile-menu-toggle"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-saffron"
            >
              {isMobileMenuOpen ? (
                <X className={`w-6 h-6 ${isDark ? "text-gray-300" : ""}`} />
              ) : (
                <Menu className={`w-6 h-6 ${isDark ? "text-gray-300" : ""}`} />
              )}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden mt-4 pb-4 border-t border-gold/20"
            >
              <div className="flex flex-col gap-4 pt-4">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      const targetId = link.href.replace("#", "");
                      const element = document.getElementById(targetId);
                      if (element) {
                        setIsMobileMenuOpen(false);

                        setTimeout(() => {
                          element.scrollIntoView({
                            behavior: "smooth",
                            block: "start",
                          });
                        }, 120);
                      }
                    }}
                    className={`font-manrope text-sm uppercase tracking-wider ${
                      isDark ? "text-gray-300" : ""
                    }`}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

// Hero Section - Premium with Vishnu Prakash
const HeroSection = () => {
  const { t } = useLanguage();
  const { isDark } = useTheme();

  return (
    <section
      id="hero"
      data-testid="hero-section"
      className={`min-h-screen flex items-center relative pt-5 overflow-hidden ${isDark ? "bg-cosmic" : "bg-cream"}`}
    >
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className={`absolute top-20 right-0 w-96 h-96 rounded-full blur-3xl ${isDark ? "bg-gold/5" : "bg-gold/10"}`}
        />
        <div
          className={`absolute bottom-20 left-0 w-80 h-80 rounded-full blur-3xl ${isDark ? "bg-saffron/5" : "bg-saffron/10"}`}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left order-1 lg:order-1"
          >
            {/* Foundation Logo Badge */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-3 mb-6 justify-center lg:justify-start"
            >
              <img
                src={ADHIVEDA_FOUNDATION_LOGO}
                alt="Adhiveda Foundation"
                className="h-10 w-auto"
              />
            </motion.div>

            <h1
              className={`font-cormorant text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-4 ${isDark ? "text-cream" : "text-saffron"}`}
            >
              {t.hero.title}
            </h1>
            <h2 className="font-cormorant text-xl sm:text-2xl lg:text-3xl text-gold mb-6 italic">
              {t.hero.subtitle}
            </h2>

            <p
              className={`font-manrope text-base sm:text-lg leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0 ${isDark ? "text-gray-300" : "text-gray-700"}`}
            >
              {t.hero.description}
            </p>

            {/* Trust Badge */}
            <div
              className={`flex items-center gap-2 mb-8 justify-center lg:justify-start ${isDark ? "text-gold/80" : "text-saffron/80"}`}
            >
              <Shield className="w-5 h-5" />
              <span className="font-manrope text-sm">{t.hero.trust}</span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center sm:items-start">
              <div className="text-center sm:text-left">
                <Button
                  data-testid="hero-cta-primary"
                  onClick={() =>
                    window.open(
                      `https://wa.me/${CONTACT.whatsapp}?text=Hello%2C%20I%20would%20like%20to%20begin%20my%20transformation%20journey%20with%20Adhiveda.`,
                      "_blank",
                    )
                  }
                  className="bg-saffron hover:bg-saffron-hover text-cream px-8 py-6 text-base font-manrope"
                >
                  {t.hero.cta1}
                  <ChevronRight className="w-5 h-5 ml-2" />
                </Button>

                <p
                  className={`mt-3 text-xs sm:text-sm ${isDark ? "text-gold/70" : "text-saffron/70"} font-manrope`}
                >
                  {t.hero.preBookingNote}
                </p>
              </div>

              <Button
                data-testid="hero-cta-secondary"
                variant="outline"
                onClick={() =>
                  document
                    .getElementById("founder")
                    .scrollIntoView({ behavior: "smooth" })
                }
                className={`px-8 py-6 ${isDark ? "border-gold text-gold hover:bg-gold hover:text-cosmic" : "border-gold text-saffron hover:bg-gold hover:text-white"}`}
              >
                {t.hero.cta2}
              </Button>
            </div>

            {/* Contact Info */}
            <div
              className={`mt-5 flex flex-wrap gap-4 justify-center lg:justify-start text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}
            >
              <a
                href={`tel:${CONTACT.phone1.replace(/\s/g, "")}`}
                className="flex items-center gap-2 hover:text-gold"
              >
                <Phone className="w-4 h-4" />
                <span className="font-manrope">{CONTACT.phone1}</span>
              </a>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span className="font-manrope">{t.timing}</span>
              </div>
            </div>
          </motion.div>

          {/* Vishnu Prakash Image + Spiral Background */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center order-2 lg:order-2 relative"
          >
            <div className="relative">
              <div className="absolute  -top-16  sm:-right-56 -right-28  lg:-top-32 lg:-right-64 xl:-right-72 2xl:-right-80  w-52 h-52 sm:w-72 sm:h-72 lg:w-96 lg:h-96 pointer-events-none z-0">
                <img
                  src="/images/Chakra.webp"
                  alt=""
                  className="w-full h-full object-cover rounded-full opacity-40 mix-blend-soft-light"
                  style={{
                    maskImage:
                      "radial-gradient(circle at 50% 50%, white 30%, transparent 90%)",
                    WebkitMaskImage:
                      "radial-gradient(circle at 50% 50%, white 30%, transparent 70%)",
                  }}
                />
              </div>
              <div className=" relative right-16 md:right-0">
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-gold/30 to-saffron/20 rounded-full blur-3xl scale-110" />

                {/* Main Image */}
                <div className="relative z-10">
                  <img
                    src={VISHNU_PRAKASH_1}
                    alt="Vishnu Prakash - Founder"
                    className="relative w-52 h-52 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-96 lg:h-96 rounded-full object-cover shadow-2xl border-4 border-gold/40"
                  />

                  <div className="absolute inset-0 rounded-full border-2 border-gold/20 scale-110" />
                  <div className="absolute inset-0 rounded-full border border-gold/10 scale-125" />
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className={`absolute -bottom-4 left-1/2 -translate-x-1/2 px-6 py-3 rounded-full shadow-lg border border-gold/30 z-20 ${isDark ? "bg-cosmic" : "bg-white"}`}
                >
                  <p className="font-cormorant text-lg font-semibold text-gold whitespace-nowrap">
                    {t.founder.title}
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Founder Section
const FounderSection = () => {
  const { t } = useLanguage();
  const { isDark } = useTheme();

  return (
    <section
      id="founder"
      data-testid="founder-section"
      className={`py-8 md:py-8 relative overflow-hidden ${isDark ? "bg-cosmic-dark" : "bg-white"}`}
    >
      <div className="absolute inset-0 opacity-5">
        <div className="lotus-pattern absolute inset-0" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-gold font-manrope text-sm uppercase tracking-widest">
            {t.founder.label}
          </span>
          <h2
            className={`font-cormorant text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 section-title ${isDark ? "text-cream" : "text-saffron"}`}
          >
            {t.founder.title}
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 ">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative">
              <img
                src={VISHNU_PRAKASH_2}
                alt="Vishnu Prakash"
                className="w-full max-w-md mx-auto rounded-2xl shadow-card object-cover"
              />
              <div className="absolute inset-0 rounded-2xl border-2 border-gold/20" />
            </div>

            {/* Achievements */}
            <div className="grid grid-cols-2 gap-4 mt-6 max-w-md mx-auto">
              {t.founder.achievements.map((achievement, index) => {
                const icons = [Award, Globe, Heart, BookOpen];
                const Icon = icons[index];
                return (
                  <motion.div
                    key={achievement}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className={`flex items-center gap-2 p-3 rounded-xl border border-gold/20 ${isDark ? "bg-cosmic" : "bg-cream"}`}
                  >
                    <Icon className="w-4 h-4 text-gold flex-shrink-0" />
                    <span
                      className={`font-manrope text-xs ${isDark ? "text-gray-300" : "text-gray-700"}`}
                    >
                      {achievement}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="space-y-4 sm:space-y-5">
              <h3
                className={`font-cormorant text-xl sm:text-2xl lg:text-3xl font-semibold tracking-tight ${isDark ? "text-gold" : "text-saffron"}`}
              >
                {t.founder.role}
              </h3>
              {t.founder.roles?.length > 0 && (
                <div className="flex flex-wrap gap-2 gap-y-2.5 mt-2 sm:mt-3">
                  {t.founder.roles.map((extraRole) => (
                    <span
                      key={extraRole}
                      className={`
            inline-flex items-center px-3 py-1 text-xs sm:text-sm 
            rounded-full border border-gold/30 
            font-manrope font-medium
            ${
              isDark
                ? "bg-cosmic/60 text-gold/85 backdrop-blur-sm"
                : "bg-cream/80 text-saffron/90"
            }
          `}
                    >
                      {extraRole}
                    </span>
                  ))}
                </div>
              )}
            </div>

            <p
              className={`font-manrope leading-relaxed ${isDark ? "text-gray-300" : "text-gray-700"}`}
            >
              {t.founder.description}
            </p>

            {/* Quote */}
            <div
              className={`p-6 rounded-2xl border-l-4 border-gold ${isDark ? "bg-cosmic" : "bg-cream"}`}
            >
              <p
                className={`font-cormorant text-lg italic leading-relaxed ${isDark ? "text-cream" : "text-saffron"}`}
              >
                {t.founder.quote}
              </p>
            </div>

            <Button
              data-testid="founder-cta"
              onClick={() =>
                window.open(
                  `https://wa.me/${CONTACT.whatsapp}?text=Hello%2C%20I%20would%20like%20to%20schedule%20a%20consultation%20with%20Vishnu%20Prakash.`,
                  "_blank",
                )
              }
              className="bg-saffron hover:bg-saffron-hover text-cream font-manrope"
            >
              {t.founder.scheduleCta}
              <ChevronRight className="w-5 h-5 ml-2" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// About Section
const AboutSection = () => {
  const { t } = useLanguage();
  const { isDark } = useTheme();
  
  return (
    <section
      id="about"
      data-testid="about-section"
      className={`py-3 md:py-8 relative ${isDark ? "bg-cosmic" : "bg-cream"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-gold font-manrope text-sm uppercase tracking-widest">
            {t.about.label}
          </span>
          <h2
            className={`font-cormorant text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 section-title ${isDark ? "text-cream" : "text-saffron"}`}
          >
            {t.about.title}
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative rounded-2xl overflow-hidden shadow-card"
          >
            <img
              src={GALLERY_IMAGES[0]}
              alt="Adhiveda Centre"
              className="w-full h-[400px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-saffron/30 to-transparent" />
            <div
              className={`absolute bottom-6 left-6 right-6 p-4 rounded-xl ${isDark ? "bg-cosmic/90" : "bg-white/90"} backdrop-blur-sm`}
            >
              <div className="flex items-center gap-4">
                <img
                  src={ADHIVEDA_FOUNDATION_LOGO}
                  alt="Adhiveda Foundation"
                  className="h-12 w-auto"
                />
                <div>
                  <p
                    className={`font-cormorant text-base  lg:text-lg font-semibold ${
                      isDark ? "text-gray-300" : "text-saffron"
                    }`}
                  >
                    {t.about.centerName}
                  </p>
                  <p
                    className={`font-manrope text-xs ${isDark ? "text-gray-400" : "text-gray-600"}`}
                  >
                    {t.about.registeredUnder}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p
              className={`font-manrope text-lg leading-relaxed ${isDark ? "text-gray-300" : "text-gray-700"}`}
            >
              {t.about.p1}
            </p>
            <p
              className={`font-manrope leading-relaxed ${isDark ? "text-gray-400" : "text-gray-600"}`}
            >
              {t.about.p2}
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              {t.about.features.map((feature, index) => {
                const icons = [Shield, Heart, Sparkles, Leaf];
                const Icon = icons[index];
                return (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className={`flex items-center gap-3 p-4 rounded-xl border border-gold/20 ${isDark ? "bg-cosmic-dark" : "bg-white"}`}
                  >
                    <Icon className="w-5 h-5 text-gold flex-shrink-0" />
                    <span
                      className={`font-manrope text-sm ${isDark ? "text-gray-300" : "text-gray-700"}`}
                    >
                      {feature}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Services Section
const ServicesSection = () => {
  const { t } = useLanguage();
  const { isDark } = useTheme();

  return (
    <section id="services" data-testid="services-section" className={`py-3 md:py-8 ${isDark ? 'bg-cosmic-dark' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-gold font-manrope text-sm uppercase tracking-widest">{t.services.label}</span>
          <h2 className={`font-cormorant text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 section-title ${isDark ? 'text-cream' : 'text-saffron'}`}>
            {t.services.title}
          </h2>
          <p className={`font-manrope mt-8 max-w-2xl mx-auto ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{t.services.description}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {t.services.items.map((service, index) => {
            const Icon = serviceIcons[index];
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                data-testid={`service-card-${index}`}
                className={`service-card p-8 rounded-2xl border border-gold/20 group ${isDark ? "bg-cosmic" : "bg-cream"}`}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`service-icon w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-gold transition-colors ${isDark ? "bg-cosmic-dark" : "bg-white"}`}
                  >
                    <Icon
                      className={`w-7 h-7 transition-colors ${
                        isDark ? "text-cream" : "text-saffron"
                      } group-hover:text-white`}
                    />
                  </div>
                  <div className="flex-1">
                    <h3
                      className={`font-cormorant text-xl sm:text-2xl font-semibold mb-1 ${isDark ? "text-cream" : "text-saffron"}`}
                    >
                      {service.title}
                    </h3>
                    <p className="font-cormorant text-sm text-gold italic mb-3">
                      {service.titleLocal}
                    </p>
                    <p
                      className={`font-manrope text-sm leading-relaxed ${isDark ? "text-gray-400" : "text-gray-600"}`}
                    >
                      {service.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button
            data-testid="services-cta"
            onClick={() => window.open(`https://wa.me/${CONTACT.whatsapp}?text=Hello%2C%20I%20would%20like%20to%20inquire%20about%20your%20services.`, '_blank')}
            className="bg-saffron hover:bg-saffron-hover text-cream px-8 py-6 font-manrope"
          >
            {t.services.cta}
            <ChevronRight className="w-5 h-5 ml-2" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

// Gallery Section
const GallerySection = () => {
  const { t } = useLanguage();
  const { isDark } = useTheme();

  return (
    <section id="gallery" data-testid="gallery-section" className={`py-3 md:py-8 ${isDark ? 'bg-cosmic' : 'bg-cream'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-gold font-manrope text-sm uppercase tracking-widest">{t.gallery.label}</span>
          <h2 className={`font-cormorant text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 section-title ${isDark ? 'text-cream' : 'text-saffron'}`}>
            {t.gallery.title}
          </h2>
          <p className={`font-manrope mt-8 max-w-2xl mx-auto ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{t.gallery.description}</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {GALLERY_IMAGES.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className={`relative rounded-xl overflow-hidden group cursor-pointer ${index === 0 ? 'col-span-2 row-span-2' : ''}`}
            >
              <img 
                src={img} 
                alt={`Adhiveda Gallery ${index + 1}`}
                className={`w-full object-cover transition-transform duration-500 group-hover:scale-105 ${index === 0 ? 'h-[350px]' : 'h-[170px]'}`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-saffron/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Contact Section
const ContactSection = () => {
  const { t } = useLanguage();
  const { isDark } = useTheme();

  return (
    <section
      id="contact"
      data-testid="contact-section"
      className={`py-3 md:py-8 ${isDark ? "bg-cosmic-dark" : "bg-white"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-gold font-manrope text-sm uppercase tracking-widest">
            {t.contact.label}
          </span>
          <h2
            className={`font-cormorant text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 section-title ${isDark ? "text-cream" : "text-saffron"}`}
          >
            {t.contact.title}
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {[
              {
                icon: MapPin,
                title: t.contact.location,
                content: CONTACT.location,
                action: {
                  label: t.contact.mapLink,
                  url: "https://maps.app.goo.gl/DHQ6z1Vt7Tc4ztii8",
                },
              },
              {
                icon: Phone,
                title: t.contact.phone,
                content: `${CONTACT.phone1}\n${CONTACT.phone2}`,
              },
              {
                icon: Clock,
                title: t.contact.hours,
                content: t.contact.hoursList.join("\n"),
              },
            ].map((item, index) => (
              <div
                key={index}
                className={`p-6 rounded-2xl border border-gold/20 shadow-sm ${isDark ? "bg-cosmic" : "bg-cream"}`}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h3
                      className={`font-cormorant text-xl font-semibold mb-2 ${isDark ? "text-cream" : "text-saffron"}`}
                    >
                      {item.title}
                    </h3>
                    <p
                      className={`font-manrope whitespace-pre-line ${isDark ? "text-gray-400" : "text-gray-600"}`}
                    >
                      {item.content}
                    </p>
                    {item.action && (
                      <a
                        href={item.action.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-gold hover:text-saffron font-manrope text-sm mt-3"
                      >
                        {item.action.label} <ChevronRight className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="map-container h-full min-h-[400px] rounded-2xl overflow-hidden">
              <iframe
                data-testid="contact-map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3905.4767443511623!2d76.0146581!3d11.801846500000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba5df39e61eba93%3A0x5d9e66e8bf83dce4!2sAdhiveda%20Alternative%20Healing%20And%20Research%20Center!5e0!3m2!1sen!2sin!4v1770911804877!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "400px" }}
                allowFullScreen
                loading="lazy"
                title="Adhiveda Location"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Footer
const Footer = () => {
  const { t } = useLanguage();
  const { isDark } = useTheme();
  const navLinks = [t.nav.home, t.nav.founder, t.nav.about, t.nav.services, t.nav.gallery, t.nav.contact];
  const hrefs = ["#hero", "#founder", "#about", "#services", "#gallery", "#contact"];

  return (
    <footer data-testid="footer" className={`py-12 border-t border-gold/20 ${isDark ? 'bg-cosmic' : 'bg-gradient-to-b from-cream to-cream-dark'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-4 mb-6">
              <img src={LOGO_DARK} alt="Adhiveda" className="w-16 h-16 rounded-full object-cover shadow-glow" />
              <div>
                <h3 className={`font-cormorant text-2xl font-bold ${isDark ? 'text-cream' : 'text-saffron'}`}>Adhiveda</h3>
                <p className={`font-manrope text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Alternative Healing & Research Centre</p>
              </div>
            </div>
            <div className="flex items-center gap-3 mb-4">
              <img src={ADHIVEDA_FOUNDATION_LOGO} alt="Adhiveda Foundation" className="h-8 w-auto" />
              <span className={`font-manrope text-xs ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>Adhiveda Foundation</span>
            </div>
            <p className={`font-manrope text-sm mb-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{t.footer.tagline}</p>
            <p className="font-cormorant text-lg text-gold italic">{t.footer.divineTagline}</p>
          </div>

          <div>
            <h4 className={`font-cormorant text-lg font-semibold mb-4 ${isDark ? 'text-cream' : 'text-saffron'}`}>{t.footer.quickLinks}</h4>
            <ul className="space-y-3">
              {navLinks.map((link, i) => (
                <li key={link}><a href={hrefs[i]} className={`font-manrope text-sm hover:text-gold ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{link}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className={`font-cormorant text-lg font-semibold mb-4 ${isDark ? 'text-cream' : 'text-saffron'}`}>{t.footer.connect}</h4>
            <div className="flex gap-4 mb-6">
              {[
                { url: CONTACT.social.facebook, icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg> },
                { url: CONTACT.social.instagram, icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg> },
                { url: CONTACT.social.youtube, icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg> }
              ].map((social, i) => (
                <a key={i} href={social.url} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center text-gold hover:bg-gold hover:text-white transition-colors">
                  {social.icon}
                </a>
              ))}
            </div>
            <a href={`https://wa.me/${CONTACT.whatsapp}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 bg-[#25D366] text-white rounded-full font-manrope text-sm hover:bg-[#128C7E] transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              {t.footer.whatsapp}
            </a>
          </div>
        </div>

        <div className={`mt-12 pt-8 border-t border-gold/20 flex flex-col md:flex-row justify-between items-center gap-4 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
          <p className="font-manrope text-sm">© {new Date().getFullYear()} Adhiveda Alternative Healing and Research Centre. {t.footer.rights}</p>
        </div>
      </div>
    </footer>
  );
};

// WhatsApp Button
const WhatsAppButton = () => (
  <motion.a
    href={`https://wa.me/${CONTACT.whatsapp}?text=Hello%2C%20I%20would%20like%20to%20know%20more%20about%20Adhiveda%20services.`}
    target="_blank"
    rel="noopener noreferrer"
    data-testid="whatsapp-float"
    aria-label="Chat on WhatsApp"
    className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl whatsapp-pulse"
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
  >
    <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  </motion.a>
);

// Main App
function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="App">
          <div className="grain-overlay" />
          <Navbar />
          <main>
            <HeroSection />
            <FounderSection />
            <AboutSection />
            <ServicesSection />
            <GallerySection />
            <ContactSection />
          </main>
          <Footer />
          <WhatsAppButton />
          <Chatbot />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
