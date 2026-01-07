"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface Project {
    title: string;
    category: string;
    videoSrc: string; // Placeholder for now, can be an image or video URL
    description: string;
    tools?: string[];
}

interface ChapterProps {
    number: string;
    title: string;
    subtitle: string;
    projects: Project[];
    reversed?: boolean;
    aspectRatio?: "video" | "vertical";
}

export function ChapterCard({ number, title, subtitle, projects, reversed = false, aspectRatio = "video" }: ChapterProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0]);
    const y = useTransform(scrollYProgress, [0, 0.2], [100, 0]);

    return (
        <section
            ref={containerRef}
            className={cn(
                "min-h-screen py-24 flex flex-col justify-center relative",
                reversed ? "bg-[#0f0f0f]" : "bg-[#0a0a0a]"
            )}
        >
            <motion.div
                style={{ opacity, y }}
                className="container mx-auto px-4"
            >
                <div className="mb-16 md:mb-24 relative">
                    <h2 className="text-8xl md:text-[10rem] font-bold text-neutral-800 opacity-20 absolute -top-16 -left-4 md:-top-32 md:-left-8 select-none pointer-events-none">
                        {number}
                    </h2>
                    <div className="relative z-10 pl-4 md:pl-12 border-l-4 border-white/10">
                        <h3 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter mb-2">
                            {title}
                        </h3>
                        <p className="text-xl text-neutral-400 font-light">{subtitle}</p>
                    </div>
                </div>

                <div className={cn(
                    "grid grid-cols-1 gap-8 md:gap-12",
                    aspectRatio === "vertical" ? "md:grid-cols-3" : "md:grid-cols-2"
                )}>
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} index={index} aspectRatio={aspectRatio} />
                    ))}
                </div>
            </motion.div>
        </section>
    );
}

function ProjectCard({ project, index, aspectRatio }: { project: Project; index: number; aspectRatio: "video" | "vertical" }) {
    const [isPlaying, setIsPlaying] = useState(false);
    const [shouldLoad, setShouldLoad] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);

    // Initial Play Handler
    const handlePlayClick = () => {
        if (videoRef.current) {
            videoRef.current.play();
            setIsPlaying(true);
        }
    };

    // Auto-pause logic: Listen for other videos playing
    useEffect(() => {
        if (!shouldLoad) return;
        const handleGlobalPlay = (e: Event) => {
            if (videoRef.current && e.target !== videoRef.current && !videoRef.current.paused) {
                videoRef.current.pause();
                setIsPlaying(false);
            }
        };

        document.addEventListener('play', handleGlobalPlay, true);
        return () => document.removeEventListener('play', handleGlobalPlay, true);
    }, [shouldLoad]);

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true, margin: "200px" }}
            onViewportEnter={() => setShouldLoad(true)}
            className={cn(
                "group relative bg-neutral-900 rounded-lg overflow-hidden border border-white/5 hover:border-white/20 transition-colors w-full",
                aspectRatio === "vertical" ? "max-w-[300px] mx-auto" : ""
            )}
            style={{
                aspectRatio: aspectRatio === "vertical" ? "9/16" : "16/9"
            }}
        >
            <div className="absolute inset-0 bg-neutral-900">
                {shouldLoad ? (
                    project.videoSrc.includes("drive.google.com") ? (
                        <div className="w-full h-full overflow-hidden relative">
                            <iframe
                                src={`https://drive.google.com/file/d/${project.videoSrc.match(/\/d\/(.+?)\//)?.[1] || ""}/preview`}
                                className="w-full h-full absolute inset-0"
                                allow="autoplay"
                                loading="lazy"
                            />
                        </div>
                    ) : (
                        <>
                            <video
                                ref={videoRef}
                                src={project.videoSrc}
                                className={cn(
                                    "w-full h-full object-cover",
                                    isPlaying ? "opacity-100" : "opacity-0"
                                )}
                                playsInline
                                controls={isPlaying} // Only show controls when playing to keep it clean initially
                                onPause={() => setIsPlaying(false)}
                                onPlay={() => setIsPlaying(true)}
                            />

                            {/* Thumbnail / First Frame Overlay */}
                            {!isPlaying && (
                                <div
                                    className="absolute inset-0 cursor-pointer"
                                    onClick={handlePlayClick}
                                >
                                    {/* We can use a poster image here if available, or just the video paused on first frame. 
                                        Since we want "clean", we actually need the video visible but paused to see the first frame.
                                        However, native controls overlay might obscure it. 
                                        Let's try: Video always visible, controls only when isPlaying.
                                    */}
                                    <video
                                        src={project.videoSrc}
                                        className="w-full h-full object-cover"
                                        muted
                                    />

                                    {/* Big Play Button Overlay */}
                                    <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-colors">
                                        <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20 group-hover:scale-110 transition-transform">
                                            <Play className="w-8 h-8 text-white fill-white" />
                                        </div>
                                    </div>
                                </div>
                            )}
                        </>
                    )
                ) : (
                    <div className="w-full h-full animate-pulse bg-neutral-800" />
                )}
            </div>
        </motion.div >
    )
}
