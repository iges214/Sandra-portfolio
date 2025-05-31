// import { useEffect, useState } from 'react';
// import './Loader.css'; // Make sure to import the CSS

// export default function Loader() {
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const timer = setTimeout(() => setLoading(false), 3000);
//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     loading && (
//       <div className="fixed inset-0 bg-deepNavy flex items-center justify-center z-50 animate-bgFade">
//         <div className="orbit-container">
//           {"Sandra's Portfolio".split('').map((char, i) => (
//             <span
//               key={i}
//               className="orbit-letter"
//               style={{
//                 transform: `rotate(${i * (360 / 18)}deg) translate(80px) rotate(-${i * (360 / 18)}deg)`,
//                 color: char === 'S' ? '#fc507b' : 'black',
//               }}
//             >
//               {char}
//             </span>
//           ))}
//         </div>
//       </div>
//     )
//   );
// }

import { useEffect, useState } from 'react';

export default function Loader() {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true); // trigger fade out
      setTimeout(() => setLoading(false), 1000); // unmount after fade
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div
      className={`fixed inset-0 bg-white dark:bg-[#06021D] flex items-center justify-center zindex transition-opacity duration-1000 ${
        fadeOut ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <svg viewBox="0 0 600 100" className="w-full max-w-2xl">
        <text
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          fontSize="40"
          className="font-bold"
        >
          {"Sandra's Portfolio".split('').map((char, i) => (
            <tspan
              key={i}
              className="animate-letter"
              style={{
                animationDelay: `${i * 0.1}s`,
                fill: i === 0 ? '#fc507b' : 'currentColor',
              }}
            >
              {char}
            </tspan>
          ))}
        </text>
      </svg>

      <style>
        {`
          .animate-letter {
            opacity: 0;
            animation: fadeInUp 1s ease forwards;
          }

          @keyframes fadeInUp {
            0% {
              opacity: 0;
              transform: translateY(20px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
    </div>
  );
}
