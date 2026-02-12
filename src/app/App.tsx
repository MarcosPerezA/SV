import { useState } from 'react';
import { motion } from 'motion/react';
import { Heart, Sparkles } from 'lucide-react';

export default function App() {
  const [showCard, setShowCard] = useState(true);
  const [noCount, setNoCount] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });

  const messages = [
    "¿Te Gustaria ir por una pasta el domingo? 🐵💜",
    "¿Segura que no? 🙈",
    "¿Muy Segura? 🙉",
    "Mira que te encanta 🙊",
    "Yo se que quieres 💔🐵",
    "¿Porfa? 🥺🐵",
    "¿Porfa x2? 🐵✨",
    "Te compro un cafe! ☕🐵"
  ];

  const noButtonTexts = [
    "No",
    "¿Estas Segura?",
    "¿De veras que no?",
    "¿Ya lo pensaste?",
    "¿De veritas no?",
    "¿Quizá si?",
    "¿Por favor?",
    "¿Si?"
  ];

  const handleNoClick = () => {
    setNoCount(noCount + 1);
    // Random position for the No button to "run away"
    const randomX = Math.random() * 200 - 100;
    const randomY = Math.random() * 200 - 100;
    setNoButtonPosition({ x: randomX, y: randomY });
  };

  const handleYesClick = () => {
    setAnswered(true);
  };

  const yesButtonScale = 1 + noCount * 0.2;
  const noButtonScale = Math.max(0.3, 1 - noCount * 0.1);

  // Intro Card View
  if (showCard) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-200 via-pink-100 to-purple-300 p-4">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-lg w-full"
        >
          <div className="bg-white/90 backdrop-blur rounded-3xl shadow-2xl p-8 md:p-12 border-4 border-purple-300 relative overflow-hidden">
            {/* Decorative elements */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -top-10 -right-10 text-8xl opacity-20"
            >
              💜
            </motion.div>
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute -bottom-10 -left-10 text-8xl opacity-20"
            >
              🐵
            </motion.div>

            {/* Main content */}
            <motion.div
              animate={{ 
                scale: [1, 1.1, 1],
                rotate: [-5, 5, -5]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse"
              }}
              className="text-7xl md:text-8xl text-center mb-6"
            >
              🐵
            </motion.div>

            <h1 className="text-3xl md:text-4xl text-center mb-6 text-purple-900">
              Me fue imposible ver tulipanes y no pensar en ti! 💜
            </h1>

            <div className="space-y-4 text-center text-purple-800 mb-8">
              <p className="text-lg md:text-xl leading-relaxed">
                Se dice que recibir flores es la sensación mas bonita que existe! 🌺
              </p>
              <p className="text-lg md:text-xl leading-relaxed">
                Tu te mereces todo lo bonito de esta vida. 💕
              </p>
              <p className="text-lg md:text-xl leading-relaxed">
              </p>
            </div>

            <div className="flex justify-center">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowCard(false)}
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-10 py-4 rounded-full shadow-lg hover:shadow-xl transition-shadow text-xl font-semibold flex items-center gap-2"
              >
                Abrir Tarjeta
                <Heart className="fill-white" size={24} />
              </motion.button>
            </div>

            {/* Floating sparkles */}
            <motion.div
              animate={{ y: [0, -10, 0], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute top-20 right-16 hidden md:block"
            >
              <Sparkles className="text-purple-400" size={24} />
            </motion.div>
            <motion.div
              animate={{ y: [0, -15, 0], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
              className="absolute bottom-20 left-16 hidden md:block"
            >
              <Sparkles className="text-pink-400" size={24} />
            </motion.div>
          </div>
        </motion.div>
      </div>
    );
  }

  // Success View
  if (answered) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-200 via-pink-100 to-purple-300 p-4">
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", duration: 0.8 }}
          className="text-center"
        >
          <motion.div
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 10, -10, 0]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse"
            }}
            className="text-9xl mb-6"
          >
            🐵
          </motion.div>
          
          <motion.h1 
            className="text-5xl md:text-7xl mb-4"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            Esoo! 🎉
          </motion.h1>
          
          <p className="text-2xl md:text-3xl text-purple-800 mb-6">
            Paso por ti a las 4:00 PM! 💜
          </p>
          
          <motion.div
            className="flex gap-3 justify-center items-center flex-wrap"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Heart className="text-pink-500 fill-pink-500" size={32} />
            <span className="text-4xl">🐵</span>
            <Heart className="text-purple-500 fill-purple-500" size={32} />
            <span className="text-4xl">💜</span>
            <Heart className="text-pink-500 fill-pink-500" size={32} />
          </motion.div>

          <motion.div
            className="mt-8 text-6xl"
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          >
            ☕
          </motion.div>
          
          <p className="mt-6 text-xl text-purple-700">
            Ya quiero volverte a ver! 💜
          </p>
        </motion.div>
      </div>
    );
  }

  // Question View
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-200 via-pink-100 to-purple-300 p-4">
      <div className="max-w-md w-full">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="bg-white/90 backdrop-blur rounded-3xl shadow-2xl p-8 md:p-12 border-4 border-purple-300"
        >
          {/* Floating hearts decoration */}
          <div className="absolute -top-6 -right-6 text-4xl animate-bounce">
            💜
          </div>
          <div className="absolute -top-4 -left-4 text-3xl animate-pulse">
            💕
          </div>
          
          {/* Monkey animation */}
          <motion.div
            animate={{ 
              rotate: [-5, 5, -5],
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse"
            }}
            className="text-8xl md:text-9xl text-center mb-6"
          >
            🐵
          </motion.div>

          {/* Question */}
          <motion.h1 
            className="text-2xl md:text-3xl text-center mb-2 text-purple-900"
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            {messages[Math.min(noCount, messages.length - 1)]}
          </motion.h1>

          <div className="flex items-center justify-center gap-2 mb-8">
          </div>

          {/* Buttons */}
          <div className="flex gap-4 justify-center items-center relative h-32">
            {/* Yes Button */}
            <motion.button
              whileHover={{ scale: yesButtonScale + 0.1 }}
              whileTap={{ scale: yesButtonScale - 0.1 }}
              animate={{ scale: yesButtonScale }}
              onClick={handleYesClick}
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-shadow text-xl font-semibold"
            >
              Si! 💜
            </motion.button>

            {/* No Button - shrinks and shakes */}
            {noCount < 8 && (
              <motion.button
                animate={{ 
                  scale: noButtonScale,
                  rotate: noCount > 0 ? [0, -5, 5, -5, 5, 0] : 0
                }}
                transition={{ 
                  scale: { type: "spring" },
                  rotate: { duration: 0.5 }
                }}
                whileHover={{ 
                  scale: noButtonScale + 0.1,
                  x: [0, -10, 10, -10, 10, 0],
                  transition: { duration: 0.3 }
                }}
                onClick={handleNoClick}
                className="bg-gray-300 text-gray-700 px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-shadow text-xl font-semibold"
              >
                {noButtonTexts[Math.min(noCount, noButtonTexts.length - 1)]}
              </motion.button>
            )}
          </div>

          {noCount >= 8 && (
            <motion.p
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center text-purple-700 mt-4"
            >
              Parece que se escapo el no! 🏃‍♂️💨<br/>
              Parece que tu unica opcion es el si! 😊
            </motion.p>
          )}
        </motion.div>

        {/* Floating monkeys */}
        <motion.div
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 10, 0]
          }}
          transition={{ duration: 3, repeat: Infinity }}
          className="text-4xl absolute top-10 left-10 hidden md:block"
        >
          🙈
        </motion.div>
        
        <motion.div
          animate={{ 
            y: [0, -15, 0],
            rotate: [0, -10, 0]
          }}
          transition={{ duration: 3.5, repeat: Infinity, delay: 0.5 }}
          className="text-4xl absolute bottom-10 right-10 hidden md:block"
        >
          🙉
        </motion.div>

        <motion.div
          animate={{ 
            y: [0, -25, 0],
            rotate: [0, 15, 0]
          }}
          transition={{ duration: 4, repeat: Infinity, delay: 1 }}
          className="text-4xl absolute top-1/2 right-5 hidden md:block"
        >
          🙊
        </motion.div>
      </div>
    </div>
  );
}