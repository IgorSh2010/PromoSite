import { RocketIcon, ArrowDown, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const buttonItem = {
  hidden: { opacity: 0, y: 20 },
  show: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
      duration: 0.5,
    },
  }),
};


export default function Home() {

  const { t, i18n } = useTranslation();

  const firstCards = [
    {
      title: t("card1title"),
      description: t("card1desc"),
      color: "text-cyan-400",
      border: "hover:border-cyan-500",
    },
    {
      title: t("card2title"),
      description: t("card2desc"),
      color: "text-purple-400",
      border: "hover:border-purple-500",
    },
    {
      title: t("card3title"),
      description: t("card3desc"),
      color: "text-pink-400",
      border: "hover:border-pink-500",
    },
  ];

  const secondCards = [
    {
      title: t("card4title"),
      description: t("card4desc"),
      color: "text-sky-600",
      border: "hover:border-cyan-500",
    },
    {
      title: t("card5title"),
      description: t("card5desc"),
      color: "text-purple-700",
      border: "hover:border-purple-500",
    },
    {
      title: t("card6title"),
      description: t("card6desc"),
      color: "text-red-600",
      border: "hover:border-red-500",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-900 via-cyan-800 to-sky-200 text-white p-6">
      <div className="absolute top-4 right-4 z-50 flex gap-2">
        <button onClick={() => i18n.changeLanguage("pl")} className="px-3 py-1 border border-white rounded hover:bg-white hover:text-black transition">PL</button>
        <button onClick={() => i18n.changeLanguage("en")} className="px-3 py-1 border border-white rounded hover:bg-white hover:text-black transition">EN</button>
        <button onClick={() => i18n.changeLanguage("ua")} className="px-3 py-1 border border-white rounded hover:bg-white hover:text-black transition">UA</button>
      </div>
      {/* Header */}
      <motion.header
        className="flex flex-col items-center justify-center text-center py-20"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.h1 className="text-5xl md:text-7xl font-bold mb-6" variants={item}>
          {t("headertitle")}
        </motion.h1>
        <motion.p className="text-xl md:text-2xl max-w-2xl" variants={item}>
          {t("headersubtitle")}
        </motion.p>
      </motion.header>

      {/* Cards section */}
      <motion.main
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {[...firstCards, ...secondCards].map((card, idx) => (
          <motion.div
            key={idx}
            className={`bg-gray-900 border border-gray-700 rounded-xl p-6 space-y-4 transition-all ${card.border}`}
            variants={item}
          >
            <RocketIcon className={`w-10 h-10 ${card.color}`} />
            <h2 className="text-2xl font-semibold">{card.title}</h2>
            <p>{card.description}</p>
          </motion.div>
        ))}
      </motion.main>

      {/* Footer */}
      <motion.footer
        className="mt-20 text-center"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.div className="text-3xl font-bold" variants={item}>
          {t("footertitle")}
        </motion.div>
        <motion.div className="text-lg italic font-extralight mb-4" variants={item}>
          {t("footersubtitle")}
        </motion.div>         
        <div className="flex justify-center mb-6">       
          <motion.div className="relative w-12 h-12 bg-sky-950 animate-bounce rounded-full" variants={item}>
            <ArrowDown className="absolute w-12 h-12 text-cyan-500" />
          </motion.div>
        </div>        
        <motion.div
          className="w-full max-w-lg mx-auto flex flex-col md:flex-row justify-center items-center border border-gray-200 rounded-2xl p-4 gap-4"
          variants={item}
        >
          {/* WhatsApp */}
          <motion.a
            custom={0}
            initial="hidden"
            animate="show"
            variants={buttonItem}
            href="https://wa.me/48501578224"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full max-w-full flex items-center justify-center bg-[#25d366] hover:bg-gray-600 text-white hover:text-green-500 px-6 py-3 rounded-2xl text-lg font-bold transition-all"
          >
            <MessageCircle className="mr-2 w-8 h-8" /> {t("buttonwhatsapp")}
          </motion.a>

          {/* Gmail */}
          <motion.a
            custom={1}
            initial="hidden"
            animate="show"
            variants={buttonItem}
            href="mailto:igor.sh2010@gmail.com"
            className="w-full max-w-full shadow flex items-center justify-center bg-white text-gray-800 hover:bg-gray-600 hover:text-sky-500 px-6 py-3 rounded-xl text-lg font-medium transition-all"
          >
            <svg
              className="w-6 h-6 mr-2"
              viewBox="0 0 48 48"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#4285F4"
                d="M24 9.5l-1.6 1.2L9.5 20.1v17.6h8.2V26.5l6.3 4.8 6.3-4.8v11.2h8.2V20.1L25.6 10.7 24 9.5z"
              />
              <path fill="#EA4335" d="M38.5 20.1L24 9.5l14.5 10.6z" />
              <path fill="#34A853" d="M9.5 20.1L24 9.5 9.5 20.1z" />
              <path fill="#FBBC05" d="M24 31.3l-6.3-4.8v11.2H24v-6.4z" />
              <path fill="#34A853" d="M24 31.3l6.3-4.8v11.2H24v-6.4z" />
            </svg>
            {t("buttonemail")}
          </motion.a>
        </motion.div>
        <motion.p className="mt-4 text-gray-300" variants={item}>
          &copy; {new Date().getFullYear()} Ihor Shepetko. {t("policies")}
        </motion.p>
      </motion.footer>
    </div>
  );
}
