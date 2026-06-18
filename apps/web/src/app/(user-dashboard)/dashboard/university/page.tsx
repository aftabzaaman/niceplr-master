"use client";

import React, { useState, useEffect } from "react";
import { UserHeader } from "@/components/ui-blocks/user-header";
import Image from "next/image";
import { Play, Download, Lock, CheckCircle, Sparkles, BookOpen, ArrowLeft, Loader2, RefreshCw, Clock, Film, Award } from "lucide-react";
import { createClient } from "@/utils/supabase/client";

const supabase = createClient();

const COURSES = [
  {
    id: "course-1",
    title: "Digital Product Blueprint (101)",
    description: "Learn the fundamentals of creating, packaging, and launching digital assets from scratch.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=400",
    tier: "FREE",
    duration: "45 mins",
    lessonsCount: 2,
    lessons: [
      {
        title: "Lesson 1: Introduction to the PLR & Digital Asset Model",
        videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", // Sample public MP4 video
        duration: "12:40",
      },
      {
        title: "Lesson 2: Identifying Profitable Niches & Audience Needs",
        videoUrl: "https://www.w3schools.com/html/movie.mp4",
        duration: "15:20",
      },
    ],
  },
  {
    id: "course-2",
    title: "High-Converting Sales Funnels Masterclass",
    description: "A deep dive into landing page psychology, hooks, and automated email follow-ups.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=400",
    tier: "PRO",
    duration: "1h 15 mins",
    lessonsCount: 3,
    lessons: [
      {
        title: "Lesson 1: Conversion Psychology & Landing Page Hooks",
        videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
        duration: "22:15",
      },
      {
        title: "Lesson 2: Designing High-Fidelity Lead Magnets",
        videoUrl: "https://www.w3schools.com/html/movie.mp4",
        duration: "18:30",
      },
      {
        title: "Lesson 3: Setting Up Automated Email Sequences",
        videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
        duration: "25:40",
      },
    ],
  },
  {
    id: "course-3",
    title: "Scaling to $10k/Month with AI Product Assets",
    description: "Leverage advanced AI models to generate, refine, and deploy premium assets at scale.",
    image: "https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&q=80&w=400",
    tier: "EXPERT",
    duration: "1h 45 mins",
    lessonsCount: 2,
    lessons: [
      {
        title: "Lesson 1: Bulk AI Asset Generation & Verification",
        videoUrl: "https://www.w3schools.com/html/movie.mp4",
        duration: "35:10",
      },
      {
        title: "Lesson 2: Automation & Scaling Your Storefront Traffic",
        videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
        duration: "42:50",
      },
    ],
  },
];

export default function DigitalProductUniversityPage() {
  const [user, setUser] = useState<any>(null);
  const [membershipTier, setMembershipTier] = useState<string>("FREE");
  const [loading, setLoading] = useState<boolean>(true);
  const [selectedCourse, setSelectedCourse] = useState<any>(null);
  const [currentLessonIndex, setCurrentLessonIndex] = useState<number>(0);
  const [actionLoading, setActionLoading] = useState<boolean>(false);

  // Fetch Supabase Session and Profile
  const fetchData = async () => {
    try {
      const { data: { user: currentUser } } = await supabase.auth.getUser();
      if (currentUser) {
        setUser(currentUser);
        
        // Fetch Membership Tier
        const { data: profile, error } = await supabase
          .from("profiles")
          .select("membership_tier")
          .eq("id", currentUser.id)
          .single();

        if (profile && !error) {
          setMembershipTier(profile.membership_tier);
        }
      }
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Handler to toggle membership tier (Simulation)
  const handleToggleMembership = async () => {
    if (!user) return;
    setActionLoading(true);
    
    const nextTier = membershipTier === "FREE" ? "PRO" : membershipTier === "PRO" ? "EXPERT" : "FREE";
    
    try {
      const { error } = await supabase
        .from("profiles")
        .update({ membership_tier: nextTier })
        .eq("id", user.id);

      if (!error) {
        setMembershipTier(nextTier);
      }
    } catch (e) {
      console.error(e);
    } finally {
      setActionLoading(false);
    }
  };

  // Helper check to verify if user has access to a course
  const hasAccessToCourse = (course: typeof COURSES[0]) => {
    if (course.tier === "FREE") return true;
    if (membershipTier === "EXPERT") return true;
    if (membershipTier === "PRO" && course.tier === "PRO") return true;
    return false;
  };

  const handleSelectCourse = (course: typeof COURSES[0]) => {
    if (hasAccessToCourse(course)) {
      setSelectedCourse(course);
      setCurrentLessonIndex(0);
    } else {
      alert(`Access Locked: This course requires a ${course.tier} membership. Upgrade your tier to unlock.`);
    }
  };

  if (loading) {
    return (
      <div className="flex h-[80vh] w-full items-center justify-center">
        <Loader2 className="w-10 h-10 animate-spin text-blue-600" />
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto pb-16">
      <UserHeader />

      {/* Simulator Control Bar */}
      {user && (
        <section className="mb-6 p-4 bg-yellow-50 border border-yellow-100 rounded-3xl flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500 animate-pulse" />
            <p className="text-xs font-semibold text-slate-700">
              <span className="font-black text-yellow-800">Simulate Subscriptions:</span> Current tier is{" "}
              <span className="px-2.5 py-0.5 bg-yellow-100 text-yellow-800 rounded-full font-black text-[10px]">
                {membershipTier}
              </span>
            </p>
          </div>
          
          <button 
            onClick={handleToggleMembership}
            disabled={actionLoading}
            className="px-4 py-2 bg-yellow-600 hover:bg-yellow-700 disabled:bg-yellow-700/50 text-white text-[10px] font-black uppercase tracking-wider rounded-xl transition-colors flex items-center gap-1.5"
          >
            {actionLoading ? (
              <Loader2 size={12} className="animate-spin" />
            ) : (
              <RefreshCw size={12} />
            )}
            Toggle Membership Tier (FREE ➔ PRO ➔ EXPERT)
          </button>
        </section>
      )}

      {selectedCourse ? (
        /* ==================== VIEW 2: COURSE PLAYER VIEW ==================== */
        <div>
          <button 
            onClick={() => setSelectedCourse(null)}
            className="inline-flex items-center gap-2 text-slate-500 hover:text-slate-900 font-black text-xs uppercase tracking-wider mb-8 transition-colors"
          >
            <ArrowLeft size={16} />
            Back to Catalog
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left: Video Player */}
            <div className="lg:col-span-2 space-y-6">
              <div className="w-full aspect-video bg-slate-950 rounded-[2.5rem] overflow-hidden shadow-2xl relative border border-slate-900">
                <video 
                  key={selectedCourse.lessons[currentLessonIndex].videoUrl}
                  src={selectedCourse.lessons[currentLessonIndex].videoUrl} 
                  controls 
                  autoPlay
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="p-4 sm:p-8 bg-white rounded-[2.5rem] border border-slate-100 shadow-[0_10px_40px_rgba(0,0,0,0.02)]">
                <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full mb-4 inline-block">
                  Playing: Lesson {currentLessonIndex + 1} of {selectedCourse.lessons.length}
                </span>
                <h1 className="text-2xl sm:text-3xl font-black text-slate-800 tracking-tight leading-snug mb-3">
                  {selectedCourse.lessons[currentLessonIndex].title}
                </h1>
                <p className="text-slate-400 font-semibold text-sm leading-relaxed">
                  Course: {selectedCourse.title} • Video Lesson ({selectedCourse.lessons[currentLessonIndex].duration} mins)
                </p>
              </div>
            </div>

            {/* Right: Playlist Sidebar */}
            <div className="space-y-6">
              <div className="p-6 bg-white rounded-[2.5rem] border border-slate-100 shadow-[0_10px_40px_rgba(0,0,0,0.02)] flex flex-col h-full">
                <h3 className="text-lg font-black text-slate-800 tracking-tight mb-6">Course Lessons</h3>
                
                <div className="flex-1 space-y-3 overflow-y-auto max-h-[400px] pr-2 custom-scrollbar">
                  {selectedCourse.lessons.map((lesson: any, index: number) => {
                    const isActive = index === currentLessonIndex;
                    return (
                      <button 
                        key={index}
                        onClick={() => setCurrentLessonIndex(index)}
                        className={`w-full p-4 rounded-2xl flex items-center justify-between gap-4 text-left border transition-all ${
                          isActive 
                            ? "bg-blue-50 border-blue-100 text-blue-600 shadow-sm font-bold" 
                            : "bg-white hover:bg-slate-50 border-slate-100 text-slate-600"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                            isActive ? "bg-blue-200/50 text-blue-600" : "bg-slate-100 text-slate-400"
                          }`}>
                            <Film size={14} />
                          </div>
                          <div>
                            <p className="text-xs font-black line-clamp-1 mb-1">{lesson.title}</p>
                            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">{lesson.duration} mins</p>
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* ==================== VIEW 1: CATALOG VIEW ==================== */
        <div>
          {/* Welcome Banner */}
          <section className="mb-12 bg-gradient-to-r from-purple-900 via-indigo-900 to-slate-900 rounded-[2.5rem] p-8 md:p-12 text-white relative overflow-hidden shadow-xl">
            <div className="absolute right-0 top-0 w-[400px] h-[400px] bg-gradient-to-br from-purple-500/10 to-indigo-500/0 rounded-full blur-3xl pointer-events-none" />
            
            <div className="max-w-2xl relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full text-xs font-black uppercase tracking-wider mb-6">
                <Award size={12} className="text-yellow-400 fill-yellow-400" />
                <span>Digital Product University</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4 leading-tight">
                Unlock expert strategies and build your business
              </h1>
              <p className="text-purple-100/70 font-medium text-base md:text-lg">
                Gated video tutorials and step-by-step masterclasses curated for members.
              </p>
            </div>
          </section>

          {/* Catalog Grid */}
          <section>
            <h2 className="text-2xl font-black text-slate-800 tracking-tight mb-8">Available Masterclasses</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {COURSES.map((course) => {
                const isUnlocked = hasAccessToCourse(course);

                return (
                  <div 
                    key={course.id}
                    onClick={() => handleSelectCourse(course)}
                    className={`group flex flex-col bg-white rounded-[2rem] border overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.02)] hover:shadow-[0_15px_50px_rgba(0,0,0,0.04)] transition-all duration-500 hover:-translate-y-1 relative cursor-pointer ${
                      isUnlocked ? "border-slate-100 hover:border-blue-100/50" : "border-slate-100 hover:border-purple-100/50"
                    }`}
                  >
                    <div className="p-6 pb-2">
                      <div className="flex items-center justify-between mb-3">
                        <span className={`text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full ${
                          course.tier === "FREE" 
                            ? "text-blue-600 bg-blue-50" 
                            : course.tier === "PRO" 
                            ? "text-purple-600 bg-purple-50" 
                            : "text-amber-600 bg-amber-50"
                        }`}>
                          {course.tier} Tier
                        </span>
                        
                        <div className="flex items-center gap-1.5 text-slate-400 text-xs font-bold">
                          <Clock size={12} />
                          <span>{course.duration}</span>
                        </div>
                      </div>
                      <h3 className="text-base font-black text-slate-800 line-clamp-1 leading-snug mb-2">
                        {course.title}
                      </h3>
                      <p className="text-xs text-slate-400 font-semibold line-clamp-2 h-8 leading-relaxed">
                        {course.description}
                      </p>
                    </div>

                    <div className="px-6 relative flex flex-col mt-2">
                      <div className="w-full aspect-[4/3] bg-slate-50 rounded-[1.5rem] relative overflow-hidden flex items-center justify-center p-4">
                        <div className={`relative w-full h-full rounded-xl overflow-hidden shadow-md transform group-hover:scale-[1.03] transition-transform duration-500 ${
                          isUnlocked ? "" : "filter grayscale"
                        }`}>
                          <Image src={course.image} alt={course.title} fill className="object-cover" />
                        </div>

                        {/* Unlocked Play Button */}
                        {isUnlocked ? (
                          <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/10 group-hover:bg-black/25 transition-colors">
                            <div className="w-14 h-14 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-blue-600 shadow-2xl scale-95 group-hover:scale-100 transition-transform">
                              <Play size={22} fill="currentColor" className="ml-1" />
                            </div>
                          </div>
                        ) : (
                          /* Locked Overlay */
                          <div className="absolute inset-0 bg-slate-900/50 backdrop-blur-[2px] flex flex-col items-center justify-center text-white p-4">
                            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-slate-800 shadow-xl mb-3">
                              <Lock size={18} />
                            </div>
                            <span className="text-xs font-black uppercase tracking-wider">Requires {course.tier} Tier</span>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="p-6 mt-2 flex items-center justify-between border-t border-slate-50 bg-slate-50/20 text-slate-400 text-xs font-bold">
                      <span className="flex items-center gap-1"><Film size={12} /> {course.lessonsCount} Lessons</span>
                      <span className="text-blue-600 font-black uppercase tracking-wider group-hover:underline">
                        {isUnlocked ? "Start Course" : "Unlock"} ➔
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        </div>
      )}
    </div>
  );
}
