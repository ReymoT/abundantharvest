"use client";

import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Video, FileText, Presentation } from "lucide-react";

export default function TeachingResourcesHub() {
  const resourceCategories = [
    {
      title: "General Education & Organization Videos",
      items: [
        {
          name: "Food and Agriculture Organization (FAO): Aquaponic Systems",
          url: "https://www.youtube.com/watch?v=eHAdvcepLaY",
          type: "Video",
          icon: <Video className="w-5 h-5 text-red-500" />
        },
        {
          name: "Rob Bob's Aquaponics: How to Start",
          url: "https://www.youtube.com/watch?v=1q_MN4kZRlY",
          type: "Video",
          icon: <Video className="w-5 h-5 text-red-500" />
        },
        {
          name: "Aquaponics Design - 3 Easiest System Builds for the Backyard",
          url: "https://www.youtube.com/watch?v=26xpMCXP9bw",
          type: "Video",
          icon: <Video className="w-5 h-5 text-red-500" />
        }
      ]
    },
    {
      title: "Elementary School",
      items: [
        {
          name: "Exploring Aquaponics (Grades 3-5) - National Ag in the Classroom",
          url: "https://agclassroom.org/matrix/lesson/511/",
          type: "Printable Guide",
          icon: <FileText className="w-5 h-5 text-blue-500" />
        }
      ]
    },
    {
      title: "Middle School",
      items: [
        {
          name: "EarthEcho Expeditions: Aquaponics 101 Middle School Curriculum",
          url: "https://www.earthecho.org/expeditions/shell-shocked?resource_type=Aquaponics",
          type: "Worksheets & Guide",
          icon: <FileText className="w-5 h-5 text-blue-500" />
        },
        {
          name: "Illinois-Indiana Sea Grant: Farming Fish, Growing Greens",
          url: "https://iiseagrant.org/lesson/aquaponics-farming-fish-growing-greens/",
          type: "Lesson Slides & Plans",
          icon: <Presentation className="w-5 h-5 text-yellow-500" />
        }
      ]
    },
    {
      title: "High School",
      items: [
        {
          name: "National Ag in the Classroom: Aquaponics Lesson Plan",
          url: "https://agclassroom.org/matrix/lesson/819/",
          type: "Worksheets & Handouts",
          icon: <FileText className="w-5 h-5 text-blue-500" />
        },
        {
          name: "FAO Global Aquaponics Manual",
          url: "https://www.fao.org/3/i4021e/i4021e.pdf",
          type: "Comprehensive Guide (PDF)",
          icon: <FileText className="w-5 h-5 text-blue-500" />
        },
        {
          name: "NCRAC Technical Bulletins (Iowa State)",
          url: "https://lib.dr.iastate.edu/ncrac_techbulletins/",
          type: "Technical Guides",
          icon: <FileText className="w-5 h-5 text-blue-500" />
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen w-full bg-[#3E4645] flex flex-col font-sans">
      {/* Top Header */}
      <header className="w-full bg-[#3E4645] text-white shadow-md flex items-center justify-between px-10 py-6">
        <div className="flex items-center">
          <Link href="/">
            <Image
              src="/logo2.png"
              alt="Abundant Harvest Aquaponics Logo"
              width={300}
              height={70}
              priority
            />
          </Link>
        </div>

        <div className="flex items-center gap-2">
          <h1 className="text-3xl font-semibold tracking-wide">AquaGuide</h1>
          <span className="text-4xl">🐟</span>
        </div>

        <div className="w-[250px]" />
      </header>

      {/* Main content area */}
      <main className="flex flex-1 w-full bg-white overflow-y-auto">
        <section className="flex-1 flex flex-col items-center justify-start py-12 px-6 sm:px-12 w-full max-w-5xl mx-auto">
          
          <div className="w-full flex items-center justify-between mb-8 border-b pb-4">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 tracking-tight">
                Teaching Resources Hub
              </h2>
              <p className="text-gray-600 mt-2 text-lg">
                Curated, approved materials and lesson assets for aquaponics educators.
              </p>
            </div>
            <Link
              href="/educator"
              className="px-5 py-2.5 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-colors shadow-sm"
            >
              Back to Chat
            </Link>
          </div>

          <div className="w-full space-y-12">
            {resourceCategories.map((category, idx) => (
              <div key={idx} className="bg-gray-50 p-6 rounded-2xl border border-gray-200 shadow-sm">
                <h3 className="text-2xl font-semibold text-gray-800 mb-6 border-b border-gray-200 pb-2">
                  {category.title}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {category.items.map((item, itemIdx) => (
                    <a
                      key={itemIdx}
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col justify-between bg-white p-5 rounded-xl border border-gray-200 shadow-sm hover:shadow-md hover:border-emerald-300 transition-all group"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          {item.icon}
                          <span className="text-xs font-semibold uppercase tracking-wider text-gray-500 bg-gray-100 px-2 py-1 rounded">
                            {item.type}
                          </span>
                        </div>
                        <h4 className="text-gray-800 font-medium leading-snug group-hover:text-emerald-700 transition-colors">
                          {item.name}
                        </h4>
                      </div>
                      <div className="mt-4 flex items-center text-sm font-semibold text-emerald-600">
                        View Resource
                        <ExternalLink className="w-4 h-4 ml-1 opacity-80" />
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </section>
      </main>
    </div>
  );
}
