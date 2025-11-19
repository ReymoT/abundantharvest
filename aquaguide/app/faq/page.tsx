"use client";

import Image from "next/image";
import Accordion from "@/components/ui/accordion";

const FAQ = () => {
  return (
    <div className="min-h-screen w-full bg-[#3E4645] flex flex-col">
      {/* Top Header */}
      <header className="w-full bg-[#3E4645] text-white shadow-md flex items-center justify-between px-10 py-6">
        {/* Left: Logo */}
        <div className="flex items-center">
          <Image
            src="/logo.png"
            alt="Abundant Harvest Aquaponics Logo"
            width={300}
            height={70}
            priority
          />
        </div>

        {/* Center: AquaGuide title */}
        <div className="flex items-center gap-2">
          <h1 className="text-3xl font-semibold tracking-wide">AquaGuide</h1>
          <span className="text-4xl">🐟</span>
        </div>

        {/* Right side spacer */}
        <div className="w-[250px]" />
      </header>

      {/* Main content area with sidebar */}
      <main className="flex flex-1 w-full bg-white">
        {/* Left side: FAQ */}
        <section className="flex-1 flex flex-col items-center justify-start py-12">
          {/* FAQ Heading */}
          <h2 className="text-3xl font-semibold text-gray-700 italic mb-10">Frequently Asked Questions</h2>
          <Accordion items={[
              {
                title: "What is aquaponics?",
                content: (<p>Aquaponics is the combination of aquaculture (breeding, rearing, and harvesting of fish and other water organisms) and hydroponics (growing plants without soil). The systems benefit each other, where the fish waste is a natural fertilizer for the plants and the plants filter the water so it is safe for the fish.</p>),
              },
              {
                title: "Who can practice aquaponics?",
                content: (<p>Everyone! Aquaponics is for anyone that is interested! :)</p>),
              },
              {
                title: "What are the benefits of growing aquaponically?",
                content: (
                  <div>
                    <p>There are so many benefits:</p>
                    <ul className="list-disc ml-6 space-y-1 text-gray-700">
                      <li>You can have home fish farming!</li>
                      <li>You'll use 90% less water compared to soil-based gardening.</li>
                      <li>You'll have a higher yield — about 2x soil-based gardening.</li>
                      <li>You won't have weeds or watering/fertilizing concerns; the system largely maintains itself.</li>
                    </ul>
                  </div>
                ),
              },
              {
                title: "What fish can I raise in an aquaponics system?",
                content: (<div><p>You can raise any freshwater fish that you'd like! Just make sure you do your research and your system can maintain the proper environment for raising them. For starters, we recommend tilapia, trout, and catfish!</p><a href="https://gogreenaquaponics.com/blogs/news/what-are-the-best-fish-for-aquaponics?srsltid=AfmBOoqijr0Jmb61m0HDsa1jRNJZtZe71t155xUqa1MSSGmSr50p3T1k" className="text-base hover:text-blue-900">Click here for a good guide to what fish to raise!</a></div>),
              },
              {
                title: "What plants can I grow in aquaponics?",
                content: (<div><p>For beginners, we recommend lettuce, spinach, kale, and arugula! If you want herbs, basil, mint, cilantro, and parsley work well. For more information or more system-specific plants, we recommend doing some more research.</p><a href="https://gogreenaquaponics.com/blogs/news/what-are-the-best-plants-for-aquaponics?srsltid=AfmBOopCnbOkviWYLyhJxe362dOPbNrq3c-vAF1nac-rniStleJhiqud" className="text-base hover:text-blue-900">Click here for a good guide to aquaponic plants!</a></div>),
              },
              {
                title: "Do I need a greenhouse for aquaponics?",
                content: (<p>Nope, you just need a tank for everything and it can be placed indoors or outdoors! A greenhouse is nice for extra protection against the weather and gives you more freedom for year-round growing if you'd like.</p>),
              },
              {
                title: "How do I start a small system?",
                content: (<p>Start small: a media-bed or raft system is good for beginners. Learn about cycling, fish choice, and basic water tests (pH, ammonia, nitrite, nitrate).</p>),
              },
              {
                title: "How does aquaponics compare to traditional farming?",
                content: (<p>"Aquaponic systems use up to 90% less water than conventional farming, require no chemical fertilizers or pesticides, and can produce both plants and protein (fish) in the same system. They also allow for year-round growing regardless of climate and typically yield crops faster than soil-based methods."
                    source: https://futurefreshfarms.com/faqs/
                </p>),
              },
              {
                title: "Is aquaponically grown food organic?",
                content: (<p>Yes! This system mimics nature, without pesticides and chemicals that may harm the fish and plants. </p>),
              },
              {
                title: "Where can I learn more?",
                content: (<p>Check the General Resources list on the right!</p>),
              }
            ]}
          />
          <h3 className="font-bold text-gray-700">Sources: (feel free to check these out for more information!)</h3>
            <ul className="space-y-3 text-blue-700 underline">
              <li><a href="https://futurefreshfarms.com/faqs/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base hover:text-blue-900">futurefreshfarms</a></li>
              <li><a href="https://innovativehydroponicsupply.com/faq/aquaponics-faq/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base hover:text-blue-900">Innovative Hydroponic Supply</a></li>
              <li><a href="https://www.symbioticaquaponic.com/new-faqs"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base hover:text-blue-900">Symbiotic Aquaponic</a></li>
              <li><a href="https://gogreenaquaponics.com/blogs/news/what-are-the-best-plants-for-aquaponics?srsltid=AfmBOopCnbOkviWYLyhJxe362dOPbNrq3c-vAF1nac-rniStleJhiqud"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base hover:text-blue-900">Go Green Aquaponics</a></li>
            </ul>
        </section>

        {/* Right side: General Resources */}
        <aside className="w-72 border-l border-gray-300 bg-white p-8">
          <h3 className="text-blue-700 font-bold text-xl mb-4">
            General Resources:
          </h3>
          <ul className="space-y-3 text-blue-700 underline">
            <li>
              <a
                href="https://www.youtube.com/watch?v=eHAdvcepLaY"
                target="_blank"
                rel="noopener noreferrer"
                className="text-base hover:text-blue-900"
              >
                Aquaponic Systems
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/watch?v=1q_MN4kZRlY"
                target="_blank"
                rel="noopener noreferrer"
                className="text-base hover:text-blue-900"
              >
                How to Start
              </a>
            </li>
            <li>
              <a href="/quiz" className="text-base hover:text-blue-900">
                Quiz
              </a>
            </li>
            <li>
              <a href="/faq" className="text-base hover:text-blue-900">
                Frequently Asked Questions
              </a>
            </li>
          </ul>
        </aside>
      </main>
    </div>
  )
}

export default FAQ