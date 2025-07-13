import { RocketIcon, MailIcon, ArrowDown } from "lucide-react";
import { motion } from "framer-motion";

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

export default function Home() {
  const firstCards = [
    {
      title: "Indywidualne podejście bez kompromisów",
      description: "Tworzę projekty szyte na miarę – w pełni dopasowane do strategii, wizji i celów Twojej marki. Tutaj liczy się każdy detal.",
      color: "text-cyan-400",
      border: "hover:border-cyan-500",
    },
    {
      title: "Design, który robi wrażenie",
      description: "Nowoczesna estetyka, intuicyjność i szybkość działania — Twoja strona nie tylko przyciągnie uwagę, ale zostanie zapamiętana.",
      color: "text-purple-400",
      border: "hover:border-purple-500",
    },
    {
      title: "Kompleksowe wsparcie na każdym etapie",
      description: "Od koncepcji po wdrożenie – jesteś w dobrych rękach. Oferuję pełne wsparcie techniczne nawet do 3 miesięcy po uruchomieniu strony.",
      color: "text-pink-400",
      border: "hover:border-pink-500",
    },
  ];

  const secondCards = [
    {
      title: "Doskonała na każdym ekranie",
      description: "Twoja strona będzie perfekcyjnie wyglądać i działać na telefonach, tabletach oraz komputerach. Dostosowujemy projekt do każdego urządzenia – bo liczy się komfort Twoich klientów, niezależnie od miejsca i czasu.",
      color: "text-sky-600",
      border: "hover:border-cyan-500",
    },
    {
      title: "Hosting bez zmartwień",
      description: "Oferujemy szybki, bezpieczny i stabilny hosting zoptymalizowany specjalnie pod Twoją stronę. Dzięki temu wszystko działa błyskawicznie i bezproblemowo. Masz własny serwer? Nie ma problemu — dostosujemy się do Twojego środowiska.",
      color: "text-purple-700",
      border: "hover:border-purple-500",
    },
    {
      title: "Własność i pełna kontrola",
      description: "Po zakończeniu projektu strona w 100% należy do Ciebie. Na życzenie otrzymasz komplet plików źródłowych oraz gotową do instalacji kopię, wyposażoną w intuicyjny instalator. Dzięki temu z łatwością przeniesiesz stronę w przyszłości — jeśli zajdzie taka potrzeba.",
      color: "text-red-600",
      border: "hover:border-red-500",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-900 via-cyan-800 to-sky-200 text-white p-6">
      {/* Header */}
      <motion.header
        className="flex flex-col items-center justify-center text-center py-20"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.h1 className="text-5xl md:text-7xl font-bold mb-6" variants={item}>
          Tworzenie stron internetowych na zamówienie
        </motion.h1>
        <motion.p className="text-xl md:text-2xl max-w-2xl" variants={item}>
          Projektuję nowoczesne, responsywne i szybkie strony internetowe — od wizytówek po rozbudowane aplikacje.
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
          Zacznijmy od rozmowy
        </motion.div>
        <motion.div className="text-lg italic font-extralight mb-4" variants={item}>
          (Darmowa wycena i konsultacja)
        </motion.div>         
        <div className="flex justify-center mb-6">       
          <motion.div className="relative w-12 h-12 bg-sky-950 animate-bounce rounded-full" variants={item}>
            <ArrowDown className="absolute w-12 h-12 text-cyan-500" />
          </motion.div>
        </div>        
        <motion.div className="inline-flex justify-center border border-gray-200 rounded-2xl p-4 gap-4" variants={item}>
          <motion.div className="inline-flex items-center gap-4">
            <a
              href="https://wa.me/48501578224"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center bg-[#25d366] hover:bg-gray-600 text-green-900 hover:text-green-500 px-6 py-3 rounded-2xl text-lg font-bold transition-all"
            >
              <MailIcon className="mr-2 w-5 h-5" /> Napisz na WhatsApp
            </a>

            {/* Gmail */}
            <a
              href="mailto:igor.sh2010@gmail.com"
              className="w-60 flex items-center justify-center bg-white text-gray-800 hover:bg-gray-600 hover:text-sky-500 px-6 py-3 rounded-xl text-lg font-medium transition-all border"
            >
              {/* Іконка у стилі Google */}
              <svg
                className="w-6 h-6 mr-2"
                viewBox="0 0 48 48"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="#4285F4"
                  d="M24 9.5l-1.6 1.2L9.5 20.1v17.6h8.2V26.5l6.3 4.8 6.3-4.8v11.2h8.2V20.1L25.6 10.7 24 9.5z"
                />
                <path
                  fill="#EA4335"
                  d="M38.5 20.1L24 9.5l14.5 10.6z"
                />
                <path
                  fill="#34A853"
                  d="M9.5 20.1L24 9.5 9.5 20.1z"
                />
                <path
                  fill="#FBBC05"
                  d="M24 31.3l-6.3-4.8v11.2H24v-6.4z"
                />
                <path
                  fill="#34A853"
                  d="M24 31.3l6.3-4.8v11.2H24v-6.4z"
                />
              </svg>
              Wyślij e-mail
            </a>
          </motion.div>
        </motion.div>
        <motion.p className="mt-4 text-gray-300" variants={item}>
          &copy; {new Date().getFullYear()} Ihor Shepetko. Wszelkie prawa zastrzeżone.
        </motion.p>
      </motion.footer>
    </div>
  );
}
