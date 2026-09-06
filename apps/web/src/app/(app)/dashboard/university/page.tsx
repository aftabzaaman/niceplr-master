"use client";

import React, { useState, useEffect } from "react";
import { UserHeader } from "@/components/app/user-header";
import Image from "next/image";
import { Play, Lock, ArrowLeft, Loader2, Clock, Film } from "lucide-react";
import { createClient } from "@/utils/supabase/client";
import { canAccessCourse } from "@/lib/entitlements";
import type { Course, MembershipTier } from "@/types";

const supabase = createClient();

const COURSES: Course[] = [
  {
    id: "course-1",
    title: "Digital Product Blueprint (101)",
    description: "Learn the fundamentals of creating, packaging, and launching digital assets from scratch.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=400",
    tier: "FREE",
    duration: "45 mins",
    lessonsCount: 2,
    lessons: [
      { title: "Lesson 1: Introduction to the PLR & Digital Asset Model", videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", duration: "12:40" },
      { title: "Lesson 2: Identifying Profitable Niches & Audience Needs", videoUrl: "https://www.w3schools.com/html/movie.mp4", duration: "15:20" },
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
      { title: "Lesson 1: Conversion Psychology & Landing Page Hooks", videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", duration: "22:15" },
      { title: "Lesson 2: Designing High-Fidelity Lead Magnets", videoUrl: "https://www.w3schools.com/html/movie.mp4", duration: "18:30" },
      { title: "Lesson 3: Setting Up Automated Email Sequences", videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", duration: "25:40" },
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
      { title: "Lesson 1: Bulk AI Asset Generation & Verification", videoUrl: "https://www.w3schools.com/html/movie.mp4", duration: "35:10" },
      { title: "Lesson 2: Automation & Scaling Your Storefront Traffic", videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", duration: "42:50" },
    ],
  },
];

export default function DigitalProductUniversityPage() {
  const [membershipTier, setMembershipTier] = useState<MembershipTier>("FREE");
  const [loading, setLoading] = useState<boolean>(true);
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [currentLessonIndex, setCurrentLessonIndex] = useState<number>(0);

  const fetchData = async () => {
    try {
      const { data: { user: currentUser } } = await supabase.auth.getUser();
      if (currentUser) {
        const { data: profile } = await supabase
          .from("profiles")
          .select("membership_tier")
          .eq("id", currentUser.id)
          .single();
        if (profile) setMembershipTier(profile.membership_tier);
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

  const hasAccessToCourse = (course: Course) => canAccessCourse(membershipTier, course.tier);

  const handleSelectCourse = (course: Course) => {
    if (hasAccessToCourse(course)) {
      setSelectedCourse(course);
      setCurrentLessonIndex(0);
    } else {
      alert(`This course requires a ${course.tier} membership.`);
    }
  };

  if (loading) {
    return (
      <div className="flex h-[80vh] w-full items-center justify-center">
        <Loader2 className="w-10 h-10 animate-spin text-slate-400" />
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <UserHeader />

      {selectedCourse ? (
        <div>
          <button
            onClick={() => setSelectedCourse(null)}
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-slate-900 mb-6"
          >
            <ArrowLeft size={16} />
            Back to catalog
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-4">
              <div className="w-full aspect-video bg-black rounded-xl overflow-hidden">
                <video
                  key={selectedCourse.lessons![currentLessonIndex].videoUrl}
                  src={selectedCourse.lessons![currentLessonIndex].videoUrl}
                  controls
                  autoPlay
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="bg-white border border-slate-200 rounded-xl p-5">
                <p className="text-xs text-slate-400 font-medium mb-2">
                  Lesson {currentLessonIndex + 1} of {selectedCourse.lessons!.length}
                </p>
                <h1 className="text-xl font-semibold text-slate-900">
                  {selectedCourse.lessons![currentLessonIndex].title}
                </h1>
                <p className="text-sm text-slate-500 mt-1">
                  {selectedCourse.title} · {selectedCourse.lessons![currentLessonIndex].duration}
                </p>
              </div>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-5">
              <h3 className="font-semibold text-slate-900 mb-4">Course lessons</h3>
              <div className="space-y-1">
                {selectedCourse.lessons!.map((lesson, index) => {
                  const isActive = index === currentLessonIndex;
                  return (
                    <button
                      key={index}
                      onClick={() => setCurrentLessonIndex(index)}
                      className={`w-full p-3 rounded-lg flex items-center justify-between gap-3 text-left transition-colors ${
                        isActive ? "bg-slate-900 text-white" : "text-slate-600 hover:bg-slate-100"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <Film size={14} className={isActive ? "text-white" : "text-slate-400"} />
                        <div>
                          <p className="text-sm font-medium line-clamp-1">{lesson.title}</p>
                          <p className={`text-xs ${isActive ? "text-slate-300" : "text-slate-400"}`}>{lesson.duration}</p>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-2xl font-semibold text-slate-900 tracking-tight">University</h1>
              <p className="text-sm text-slate-500 mt-0.5">Video masterclasses for members.</p>
            </div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg border border-slate-200 bg-white text-sm font-medium text-slate-700">
              <span className="w-1.5 h-1.5 rounded-full bg-slate-900" />
              {membershipTier} plan
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {COURSES.map((course) => {
              const isUnlocked = hasAccessToCourse(course);
              return (
                <div
                  key={course.id}
                  onClick={() => handleSelectCourse(course)}
                  className="bg-white border border-slate-200 rounded-xl overflow-hidden cursor-pointer"
                >
                  <div className="relative w-full aspect-[4/3] bg-slate-100">
                    <Image
                      src={course.image}
                      alt={course.title}
                      fill
                      className={`object-cover ${isUnlocked ? "" : "grayscale"}`}
                    />
                    {!isUnlocked && (
                      <div className="absolute inset-0 flex items-center justify-center bg-slate-900/40">
                        <Lock size={24} className="text-white" />
                      </div>
                    )}
                    {isUnlocked && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center">
                          <Play size={20} fill="currentColor" className="ml-0.5 text-slate-900" />
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-medium text-slate-500">{course.tier} tier</span>
                      <span className="flex items-center gap-1 text-xs text-slate-400">
                        <Clock size={12} /> {course.duration}
                      </span>
                    </div>
                    <p className="font-medium text-slate-900 text-sm line-clamp-2">{course.title}</p>
                    <p className="text-xs text-slate-400 mt-1 line-clamp-2">{course.description}</p>
                    <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                      <span className="text-slate-400">{course.lessonsCount} lessons</span>
                      <span className="font-medium text-slate-700">{isUnlocked ? "Start course" : "Locked"}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
