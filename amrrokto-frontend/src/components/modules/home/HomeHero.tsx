"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { MapPin, Search, AlertTriangle, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

// Major districts sample list (Expand to 64 as needed)
const BANGLADESH_DISTRICTS = [
    "Dhaka", "Chattogram", "Sylhet", "Rajshahi", "Khulna", "Barishal", "Rangpur", "Mymensingh",
    "Gazipur", "Narayanganj", "Cumilla", "Bogura", "Cox's Bazar", "Feni", "Jessore"
];

interface TickerItem {
    id: string;
    text: string;
}

export default function HomeHero() {
    const router = useRouter();
    const [selectedDistrict, setSelectedDistrict] = useState<string>("");
    const [tickerData, setTickerData] = useState<TickerItem[]>([
        // Fallback/Initial data while API loads
        { id: "1", text: "🟢 রাফিক U. এইমাত্র রক্তদাতা হিসেবে যোগ দিয়েছেন" },
        { id: "2", text: "🩸 A+ রক্তের রিকোয়েস্ট পূরণ হয়েছে ধানমন্ডিতে" },
        { id: "3", text: "👤 ২৪৭ জন দাতা আপনার এলাকায়" },
    ]);

    // 1. Geolocation & IP Detection Logic
    useEffect(() => {
        // Check localStorage cache first
        const cachedDistrict = localStorage.getItem("user-district");
        if (cachedDistrict) {
            setSelectedDistrict(cachedDistrict);
            return;
        }

        // Try Browser Geolocation API
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                async (position) => {
                    try {
                        const { latitude, longitude } = position.coords;
                        // Reverse Geocoding via open API (Example)
                        const res = await fetch(
                            `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
                        );
                        const data = await res.json();
                        const detectedCity = data.address?.city || data.address?.state || "";

                        // Match with district list
                        const matched = BANGLADESH_DISTRICTS.find(d =>
                            detectedCity.toLowerCase().includes(d.toLowerCase())
                        );
                        if (matched) {
                            setSelectedDistrict(matched);
                            localStorage.setItem("user-district", matched);
                        }
                    } catch (error) {
                        fallbackToIP();
                    }
                },
                () => {
                    fallbackToIP();
                }
            );
        } else {
            fallbackToIP();
        }
    }, []);

    const fallbackToIP = async () => {
        try {
            // Free GeoIP fallback
            const res = await fetch("https://ipapi.co/json/");
            const data = await res.json();
            if (data.city) {
                const matched = BANGLADESH_DISTRICTS.find(d =>
                    data.city.toLowerCase().includes(d.toLowerCase())
                );
                if (matched) {
                    setSelectedDistrict(matched);
                    localStorage.setItem("user-district", matched);
                }
            }
        } catch (e) {
            console.error("Location detection failed", e);
        }
    };

    // 2. Ticker Live Data Fetching
    useEffect(() => {
        const fetchTickerData = async () => {
            try {
                const res = await fetch("/api/public/recent-activity");
                if (res.ok) {
                    const data = await res.json();
                    if (data && data.length > 0) setTickerData(data);
                }
            } catch (error) {
                console.error("Failed to fetch ticker updates", error);
            }
        };

        fetchTickerData();
        const interval = setInterval(fetchTickerData, 30000); // Refresh every 30s
        return () => clearInterval(interval);
    }, []);

    const handleSearch = () => {
        if (selectedDistrict) {
            router.push(`/donors?district=${encodeURIComponent(selectedDistrict)}`);
        }
    };

    return (
        <section className="relative w-full min-h-[85vh] flex flex-col justify-between items-center bg-gradient-to-b from-red-50/60 via-white to-white overflow-hidden pt-12 md:pt-20 font-sans">

            {/* Heartbeat Decorative Background Component */}
            <div className="absolute inset-0 pointer-events-none opacity-20 flex items-center justify-center">
                <svg className="w-full h-48 text-[#DC2626]" viewBox="0 0 1000 100" fill="none" stroke="currentColor" strokeWidth="2">
                    <path
                        d="M0,50 L300,50 L320,20 L340,80 L360,45 L370,55 L380,50 L700,50 L720,10 L740,90 L760,40 L770,60 L780,50 L1000,50"
                        className="animate-[dash_4s_linear_infinite]"
                        style={{
                            strokeDasharray: '1000',
                            strokeDashoffset: '1000',
                            animation: 'heartbeat-line 6s linear infinite'
                        }}
                    />
                </svg>
            </div>

            {/* Main Content Area */}
            <div className="container max-w-5xl mx-auto px-4 z-10 flex flex-col items-center justify-center text-center flex-grow space-y-8 md:space-y-12">

                {/* Emergency CTA (Top Priority placement for panicked users) */}
                <div className="w-full flex justify-center px-2">
                    <Button
                        onClick={() => router.push("/emergency-request")}
                        className="w-full max-w-md py-7 text-lg md:text-xl font-bold bg-[#DC2626] hover:bg-red-700 text-white shadow-xl rounded-full transition-transform transform active:scale-95 animate-[pulse_2s_infinite]"
                        style={{
                            boxShadow: "0 0 0 0 rgba(220, 38, 26, 0.7)"
                        }}
                    >
                        <span className="mr-2">🆘</span> জরুরী রক্ত প্রয়োজন
                    </Button>
                </div>

                {/* Primary Headline */}
                <div className="space-y-4 max-w-3xl">
                    <h1 className="text-3xl sm:text-4xl md:text-6xl font-black text-[#334155] tracking-tight leading-tight">
                        আপনার এলাকায় <span className="text-[#DC2626]">রক্তদাতা</span> খুঁজুন। <br className="hidden sm:inline" />
                        মাত্র <span className="underline decoration-wavy decoration-[#DC2626]">২ মিনিটে।</span>
                    </h1>
                    <p className="text-sm md:text-base text-slate-500 font-medium max-w-lg mx-auto">
                        কোনো রেজিস্ট্রেশন ছাড়াই দ্রুত আপনার নিকটস্থ রক্তদাতাদের সাথে সরাসরি যোগাযোগ করুন।
                    </p>
                </div>

                {/* Search Matrix (Location Selector & Primary CTA) */}
                <div className="w-full max-w-2xl bg-white p-4 md:p-6 rounded-2xl md:rounded-full border border-slate-100 shadow-xl shadow-slate-200/50 flex flex-col md:flex-row gap-3 items-center">

                    {/* Shadcn Select Dropdown */}
                    <div className="w-full flex-1 flex items-center space-x-2 px-3">
                        <MapPin className="text-slate-400 w-5 h-5 shrink-0" />
                        <div className="w-full text-left">
                            <label className="text-xs font-bold text-slate-400 block mb-0.5 px-1">
                                আপনার এলাকা নির্বাচন করুন
                            </label>
                            <Select value={selectedDistrict} onValueChange={(val) => {
                                setSelectedDistrict(val);
                                localStorage.setItem("user-district", val);
                            }}>
                                <SelectTrigger className="w-full bg-transparent border-0 focus:ring-0 focus:ring-offset-0 p-1 text-slate-700 font-semibold h-auto text-base">
                                    <SelectValue placeholder="জেলা সিলেক্ট করুন" />
                                </SelectTrigger>
                                <SelectContent className="max-h-60">
                                    {BANGLADESH_DISTRICTS.map((district) => (
                                        <SelectItem key={district} value={district}>
                                            {district}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>
                    </div>

                    {/* Primary CTA Button */}
                    <Button
                        disabled={!selectedDistrict}
                        onClick={handleSearch}
                        className="w-full md:w-auto px-8 py-6 text-base md:text-lg font-bold bg-[#334155] hover:bg-slate-800 text-white rounded-xl md:rounded-full transition-all flex items-center justify-center gap-2 shrink-0 disabled:opacity-50"
                    >
                        <Search className="w-5 h-5" />
                        রক্তদাতা খুঁজুন
                    </Button>
                </div>

            </div>

            {/* Auto-scrolling Ticker Bar */}
            <div className="w-full bg-slate-900 border-t border-slate-800 py-3 mt-12 overflow-hidden whitespace-nowrap relative select-none">
                {/* Left/Right blur vignettes for seamless edge visibility */}
                <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-slate-900 to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-slate-900 to-transparent z-10 pointer-events-none" />

                <div className="inline-block animate-[ticker_25s_linear_infinite] space-x-8 text-sm md:text-base text-white font-medium">
                    {/* Double-render array instances to fill up dynamic screens cleanly without gaps */}
                    {[...tickerData, ...tickerData, ...tickerData].map((item, index) => (
                        <span key={`${item.id}-${index}`} className="inline-flex items-center mx-4 text-slate-200">
                            {item.text}
                            <span className="ml-8 text-slate-700 font-bold">•</span>
                        </span>
                    ))}
                </div>
            </div>

            {/* Keyframe Injectors for custom animations specified in the tech requirements */}
            <style jsx global>{`
        @keyframes heartbeat-line {
          0% { stroke-dashoffset: 2000; }
          100% { stroke-dashoffset: 0; }
        }
        @keyframes ticker {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-33.33%, 0, 0); }
        }
        @keyframes pulse {
          0% {
            transform: scale(1);
            box-shadow: 0 0 0 0 rgba(220, 38, 38, 0.7);
          }
          70% {
            transform: scale(1.03);
            box-shadow: 0 0 0 15px rgba(220, 38, 38, 0);
          }
          100% {
            transform: scale(1);
            box-shadow: 0 0 0 0 rgba(220, 38, 38, 0);
          }
        }
      `}</style>
        </section>
    );
}