"use client";

import { useState, useEffect } from "react";
import { Play, Quote, Heart, ShieldCheck, User, X } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";

// Types
interface Donor {
    id: string;
    name: string;
    bloodGroup: string;
    district: string;
    lastDonated?: string;
    avatarUrl?: string;
}

interface SuccessStory {
    id: string;
    patientName: string;
    age: number;
    condition: string;
    bloodGroup: string;
    timeTaken: string;
    donorName: string;
    quote: string;
    image?: string;
}

export default function SocialProofSection() {
    // States
    const [recentDonors, setRecentDonors] = useState<Donor[]>([]);
    const [selectedDonor, setSelectedDonor] = useState<Donor | null>(null);
    const [isLoadingDonors, setIsLoadingDonors] = useState(true);
    const [activeVideo, setActiveVideo] = useState<string | null>(null);

    // Mock static data for Partners & Videos as per technical notes
    const partnerLogos = [
        { name: "ঢাকা মেডিকেল কলেজ হাসপাতাল", short: "DMCH" },
        { name: "বঙ্গবন্ধু শেখ মুজিব মেডিকেল বিশ্ববিদ্যালয়", short: "BSMMU" },
        { name: "বাংলাদেশ রেড ক্রিসেন্ট সোসাইটি", short: "BDRCS" },
        { name: "কোয়ান্টাম ফাউন্ডেশন", short: "QF" },
    ];

    const videoTestimonials = [
        {
            id: "vid1",
            youtubeId: "dQw4w9WgXcQ", // Replace with real unlisted/public video ID
            title: "রাফসান, ঢাকা",
            quote: "আমি RoktoLagbe ব্যবহার করে মাত্র ২০ মিনিটে রক্ত পেয়েছি।",
            thumbnail: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop",
        },
        {
            id: "vid2",
            youtubeId: "dQw4w9WgXcQ",
            title: "তানজিলা, চট্টগ্রাম",
            quote: "রক্তদান করা এখন অনেক সহজ ও নিরাপদ মনে হয় এই প্ল্যাটফর্মে।",
            thumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop",
        },
    ];

    const successStories: SuccessStory[] = [
        {
            id: "story1",
            patientName: "সায়মা",
            age: 7,
            condition: "থ্যালাসেমিয়া রোগী",
            bloodGroup: "O+",
            timeTaken: "৩৫ মিনিটে",
            donorName: "আসিফ রহমান",
            quote: "জরুরী মুহূর্তে রক্তদাতার সন্ধান পাওয়া আমাদের জন্য মিরাকেলের মতো ছিল। ধন্যবাদ RoktoLagbe!",
        },
        {
            id: "story2",
            patientName: "রফিকুল ইসলাম",
            age: ৫২,
        condition: "ওপেন হার্ট সার্জারি",
        bloodGroup: "B-",
        timeTaken: "১ ঘণ্টায়",
        donorName: "মাহাদী হাসান",
        quote: "রেয়ার ব্লাড গ্রুপ হওয়ায় খুব চিন্তায় ছিলাম, কিন্তু অ্যাপের মাধ্যমে দ্রুত রেসপন্স পেয়েছি।",
    },
  ];

// Fetch real-time recent donors from database
useEffect(() => {
    const fetchRecentDonors = async () => {
        try {
            setIsLoadingDonors(true);
            const res = await fetch("/api/public/recent-donors?limit=20");
            if (res.ok) {
                const data = await res.json();
                setRecentDonors(data || []);
            }
        } catch (error) {
            console.error("Error fetching recent donors:", error);
        } finally {
            setIsLoadingDonors(false);
        }
    };

    fetchRecentDonors();
}, []);

return (
    <section className="py-16 bg-white w-full font-sans space-y-20 overflow-hidden">

        {/* SECTION 1: VIDEO TESTIMONIALS */}
        <div className="container max-w-6xl mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
                <h2 className="text-xs uppercase tracking-wider font-bold text-[#DC2626]">ভিডিও রিভিউ</h2>
                <p className="text-2xl md:text-3xl font-black text-[#334155]">
                    যাঁরা আমাদের মাধ্যমে উপকার পেয়েছেন
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {videoTestimonials.map((video) => (
                    <div
                        key={video.id}
                        className="group relative rounded-2xl overflow-hidden aspect-video bg-slate-900 border border-slate-100 shadow-sm cursor-pointer"
                        onClick={() => setActiveVideo(video.youtubeId)}
                    >
                        {/* Thumbnail Image */}
                        <img
                            src={video.thumbnail}
                            alt={video.title}
                            className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500"
                        />
                        {/* Dark Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                        {/* Play Button Icon */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="bg-[#DC2626] text-white p-4 rounded-full shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                                <Play className="w-6 h-6 fill-white ml-0.5" />
                            </div>
                        </div>

                        {/* Text Meta overlay */}
                        <div className="absolute bottom-0 inset-x-0 p-4 text-white space-y-1">
                            <p className="text-xs font-bold text-red-400">{video.title}</p>
                            <p className="text-sm font-medium line-clamp-1">"{video.quote}"</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>

        {/* SECTION 2: SUCCESS STORY CARDS */}
        <div className="container max-w-6xl mx-auto px-4">
            <div className="mb-10">
                <h2 className="text-xs uppercase tracking-wider font-bold text-[#DC2626] mb-1">সফলতার গল্প</h2>
                <p className="text-xl md:text-2xl font-black text-[#334155]">আজকের সেরা কিছু জয়ধ্বনি</p>
                <span className="text-[10px] text-slate-400 font-semibold bg-slate-100 px-2 py-0.5 rounded mt-1 inline-block">নমুনা গল্প (Seaded Story)</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {successStories.map((story) => (
                    <Card key={story.id} className="border border-slate-100 shadow-sm relative overflow-hidden bg-gradient-to-br from-white to-slate-50/50 flex flex-col justify-between">
                        <CardContent className="p-6 space-y-4">
                            <Quote className="w-8 h-8 text-red-100 absolute right-4 top-4" />

                            {/* Micro Meta badges */}
                            <div className="flex flex-wrap gap-2">
                                <span className="bg-red-50 text-[#DC2626] text-xs font-black px-2.5 py-1 rounded-md border border-red-100">
                                    🩸 {story.bloodGroup} গ্রুপ
                                </span>
                                <span className="bg-emerald-50 text-emerald-700 text-xs font-bold px-2.5 py-1 rounded-md">
                                    ⏱️ {story.timeTaken}
                                </span>
                            </div>

                            {/* Main Text Content */}
                            <div className="space-y-1">
                                <h3 className="font-bold text-base text-[#334155]">
                                    {story.patientName}, <span className="text-sm text-slate-500">বয়স {story.age}</span>
                                </h3>
                                <p className="text-xs font-semibold text-slate-400">{story.condition}</p>
                            </div>

                            <p className="text-sm text-slate-600 italic leading-relaxed pt-2 border-t border-slate-100">
                                "{story.quote}"
                            </p>
                        </CardContent>

                        {/* Card Footer: Donor info */}
                        <div className="bg-slate-50/80 px-6 py-3 border-t border-slate-100 flex items-center justify-between">
                            <span className="text-xs text-slate-400">রক্তদাতা</span>
                            <span className="text-xs font-bold text-[#334155] flex items-center gap-1">
                                <Heart className="w-3 h-3 text-[#DC2626] fill-[#DC2626]" /> {story.donorName}
                            </span>
                        </div>
                    </Card>
                ))}
            </div>
        </div>

        {/* SECTION 3: RECENT DONOR WALL */}
        <div className="bg-slate-50/60 py-12 border-y border-slate-100 w-full">
            <div className="container max-w-6xl mx-auto px-4">
                <div className="text-center max-w-xl mx-auto mb-8 space-y-1">
                    <h2 className="text-xl md:text-2xl font-black text-[#334155]">আমাদের সর্বশেষ রক্তদাতারা</h2>
                    <p className="text-xs text-slate-500 font-medium">প্ল্যাটফর্মে সম্প্রতি যুক্ত হওয়া রিয়েল-টাইম হিরোরা</p>
                </div>

                {isLoadingDonors ? (
                    <div className="flex justify-center py-6 text-sm text-slate-400">লোডিং হচ্ছে...</div>
                ) : recentDonors.length === 0 ? (
                    /* Acceptance Criteria: Empty state placeholder */
                    <div className="text-center py-10 border border-dashed border-slate-200 rounded-2xl bg-white max-w-md mx-auto">
                        <User className="w-8 h-8 text-slate-300 mx-auto mb-2" />
                        <p className="text-sm font-bold text-slate-400">নতুন রক্তদাতার তালিকা শীঘ্রই আসছে</p>
                    </div>
                ) : (
                    /* Responsive Grid down to 320px (Grid-cols-4) */
                    <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-3 md:gap-4 justify-items-center">
                        {recentDonors.map((donor) => (
                            <div
                                key={donor.id}
                                onClick={() => setSelectedDonor(donor)}
                                className="flex flex-col items-center space-y-1.5 cursor-pointer group select-none"
                            >
                                <div className="relative">
                                    <Avatar className="w-12 h-12 md:w-14 md:h-14 border-2 border-white shadow-sm ring-2 ring-slate-100 group-hover:ring-[#DC2626] transition-all">
                                        <AvatarImage src={donor.avatarUrl} />
                                        <AvatarFallback className="bg-slate-200 text-slate-600 font-bold text-sm">
                                            {donor.name[0]}
                                        </AvatarFallback>
                                    </Avatar>
                                    {/* Floating Blood Badge */}
                                    <span className="absolute -bottom-1 -right-1 bg-[#DC2626] text-white text-[9px] font-black px-1.5 py-0.2 rounded-full border border-white scale-90 md:scale-100 shadow-sm">
                                        {donor.bloodGroup}
                                    </span>
                                </div>
                                <span className="text-[11px] font-bold text-slate-600 text-center truncate w-14 group-hover:text-[#DC2626]">
                                    {donor.name.split(" ")[0]}
                                </span>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>

        {/* SECTION 4: PARTNER LOGOS */}
        <div className="container max-w-6xl mx-auto px-4 pb-6">
            <div className="text-center space-y-4">
                <p className="text-xs font-bold uppercase tracking-widest text-slate-400">আমাদের সাথে আছেন</p>
                <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-300">
                    {partnerLogos.map((logo, index) => (
                        <div
                            key={index}
                            className="flex items-center space-x-2 border border-slate-200 rounded-xl px-4 py-2.5 bg-slate-50 max-w-[240px]"
                            title={logo.name}
                        >
                            <ShieldCheck className="w-5 h-5 text-[#334155] shrink-0" />
                            <span className="text-xs md:text-sm font-black text-[#334155] truncate leading-tight">
                                {logo.short}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>

        {/* MODAL 1: MINI PROFILE DIALOG */}
        <Dialog open={!!selectedDonor} onOpenChange={(open) => !open && setSelectedDonor(null)}>
            <DialogContent className="sm:max-w-[360px] p-6 rounded-2xl border-slate-100 font-sans">
                <DialogHeader className="items-center text-center space-y-3">
                    <div className="relative">
                        <Avatar className="w-16 h-16 ring-4 ring-red-50">
                            <AvatarImage src={selectedDonor?.avatarUrl} />
                            <AvatarFallback className="text-lg font-bold bg-slate-100 text-slate-700">
                                {selectedDonor?.name?.[0]}
                            </AvatarFallback>
                        </Avatar>
                        <span className="absolute bottom-0 right-0 bg-[#DC2626] text-white text-xs font-black px-2 py-0.5 rounded-full border-2 border-white shadow">
                            {selectedDonor?.bloodGroup}
                        </span>
                    </div>
                    <div>
                        <DialogTitle className="text-lg font-bold text-[#334155]">{selectedDonor?.name}</DialogTitle>
                        <p className="text-xs font-semibold text-slate-400 mt-0.5">📍 জেলা: {selectedDonor?.district}</p>
                    </div>
                </DialogHeader>
                <div className="mt-4 pt-4 border-t border-slate-100 space-y-2.5 text-center">
                    <div className="bg-slate-50 rounded-xl p-3 text-xs font-medium text-slate-500">
                        🩸 শেষ রক্তদানের সময়: <span className="font-bold text-slate-700">{selectedDonor?.lastDonated || "তথ্য নেই"}</span>
                    </div>
                    <button className="w-full bg-[#334155] hover:bg-slate-800 text-white font-bold text-sm py-2.5 rounded-xl transition-colors">
                        অনুরোধ পাঠান
                    </button>
                </div>
            </DialogContent>
        </Dialog>

        {/* MODAL 2: VIDEO PLAYER OVERLAY */}
        {activeVideo && (
            <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4" onClick={() => setActiveVideo(null)}>
                <button className="absolute top-4 right-4 text-white hover:text-red-500 bg-white/10 p-2 rounded-full">
                    <X className="w-6 h-6" />
                </button>
                <div className="w-full max-w-3xl aspect-video rounded-xl overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}>
                    <iframe
                        className="w-full h-full"
                        src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1`}
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                </div>
            </div>
        )}

    </section>
);
}