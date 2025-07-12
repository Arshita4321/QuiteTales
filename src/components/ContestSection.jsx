import React from "react";
import { motion } from "framer-motion";
import contest1Img from "../assets/contest1.png";
import contest2Img from "../assets/contest2.png";
import contest3Img from "../assets/contest3.png";

const ContestSection = () => {
  // Sample contest data with images
  const contests = [
    { id: 1, title: "Fantasy Style Story Challenge", date: "2025-07-20T18:30:00Z", prize: "$500", desc: "✨ Once Upon a Contest... \n ✨Let your imagination win!", image: contest1Img  },
    { id: 2, title: "Retro Typewriter Vibe Epic Contest", date: "2025-08-15T18:30:00Z", prize: "$1000", desc: "✍️Calling All Storytellers! ✍️ “A Tale Worth Telling is a Tale Worth Winning”", image: contest2Img },
    { id: 3, title: "Poetry Slam", date: "2025-06-10T18:30:00Z", prize: "$300", desc: "Characters must follow glowing lanterns to uncover forgotten legends. 📖 Genere: Adventure, Historical Fantasy", image:  contest3Img },
    { id: 4, title: "Winter Tale Contest", date: "2025-09-01T18:30:00Z", prize: "$700", desc: "📖 Write. Win. Get Published. ✨QuiteTales Contest: Your story, your spotlight.", image:  contest1Img },
  ];

  // Current date for comparison
  const currentDate = new Date("2025-07-12T11:25:00Z"); // 04:55 PM IST converted to UTC

  // Separate contests into latest (upcoming) and previous (past)
  const latestContests = contests.filter(contest => new Date(contest.date) > currentDate);
  const previousContests = contests.filter(contest => new Date(contest.date) <= currentDate);

  return (
    <div className="p-6">
      {/* Latest Contests Section */}
      {latestContests.length > 0 && (
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-blue-600 mb-6 border-b-2 border-blue-300 pb-2 animate-pulse">Latest Contests</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {latestContests.map((contest) => (
              <motion.div
                key={contest.id}
                className="bg-gradient-to-br from-white to-gray-100 rounded-xl shadow-xl p-6 border border-gray-200 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: contest.id * 0.1 }}
              >
                <img src={contest.image} alt={contest.title} className="w-full h-40 object-cover rounded-t-lg mb-4 transform hover:scale-105 transition duration-300" />
                <h3 className="text-xl font-semibold text-indigo-700 mb-2">{contest.title}</h3>
                <p className="text-gray-600 mb-2">Deadline: {new Date(contest.date).toLocaleDateString()}</p>
                <p className="text-gray-800 mb-2">Prize: {contest.prize}</p>
                <p className="text-gray-700 mb-4">{contest.desc}</p>
                <button className="w-full bg-green-500 text-white py-2 rounded-full hover:bg-green-600 transition duration-300 animate-bounce">
                  Join Now
                </button>
              </motion.div>
            ))}
          </div>
        </section>
      )}

      {/* Previous Contests Section */}
      {previousContests.length > 0 && (
        <section>
          <h2 className="text-2xl font-bold text-red-600 mb-6 border-b-2 border-red-300 pb-2 animate-pulse">Previous Contests</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {previousContests.map((contest) => (
              <motion.div
                key={contest.id}
                className="bg-gradient-to-br from-gray-100 to-white rounded-xl shadow-xl p-6 border border-gray-200 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: contest.id * 0.1 }}
              >
                <img src={contest.image} alt={contest.title} className="w-full h-40 object-cover rounded-t-lg mb-4 transform hover:scale-105 transition duration-300 grayscale" />
                <h3 className="text-xl font-semibold text-gray-700 mb-2">{contest.title}</h3>
                <p className="text-gray-500 mb-2">Ended: {new Date(contest.date).toLocaleDateString()}</p>
                <p className="text-gray-600 mb-2">Prize: {contest.prize}</p>
                <p className="text-gray-500 mb-4">{contest.desc}</p>
                <button className="w-full bg-gray-400 text-white py-2 rounded-full cursor-not-allowed opacity-70">
                  Ended
                </button>
              </motion.div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default ContestSection;