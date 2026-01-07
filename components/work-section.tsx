"use client";

import { ChapterCard } from "./chapter-card";

const chapters = [
    {
        number: "01",
        title: "Ads That Sell",
        subtitle: "Commercial / Ad Films",
        projects: [
            {
                title: "Sneaker Hype",
                category: "Commercial",
                videoSrc: "https://drive.google.com/file/d/14f-7ElxGKmJ7WAW2g4VLSiyBl_2xLigL/view?usp=drive_link",
                description: "Fast-paced edit for a streetwear brand launch. Increased CTR by 45%.",
                tools: ["Premiere Pro", "DaVinci Resolve"]
            },
            {
                title: "Tech Minimalism",
                category: "Product Reveal",
                videoSrc: "https://drive.google.com/file/d/1ZUQ_z1WXtyUkwhyCZD_-3mAy5WLw1LyJ/view?usp=drive_link",
                description: "Clean, rhythm-based edit focusing on product sound design and macro shots.",
                tools: ["Premiere Pro", "After Effects"]
            },

        ]
    },
    {
        number: "02",
        title: "Scroll-Stopping Content",
        subtitle: "Social Media / Reels",
        projects: [
            {
                title: "Gym Motivation",
                category: "Instagram Reel",
                videoSrc: "https://drive.google.com/file/d/1Vd2JOn-mhuUSaI2OJafoRzKBUF3G64oL/view?usp=drive_link",
                description: "High-intensity workout edit synced to trending audio.",
                tools: ["CapCut", "Premiere Pro"]
            },
            {
                title: "Food Porn",
                category: "TikTok",
                videoSrc: "https://drive.google.com/file/d/1D5iwnsu0Iprastbe_ofZ7Wcus_YLtzWl/view?usp=drive_link",
                description: "ASMR-style cooking video with punchy speed ramps.",
                tools: ["Premiere Pro"]
            },
            {
                title: "Festival Rewind",
                category: "Event Recap",
                videoSrc: "https://drive.google.com/file/d/1QHT31kOacddWBFMRYzlq1ocbKsRFJ0Vf/view?usp=drive_link",
                description: "Glitch-style recap of a music festival weekend.",
                tools: ["After Effects", "Premiere Pro"]
            },
            {
                title: "Behind The Scenes",
                category: "Vlog Style",
                videoSrc: "https://drive.google.com/file/d/15VWKm7eDAXgfSQKMFx3pesz1pbB4bEjw/view?usp=drive_link",
                description: "Engaging storytelling format for a creator's daily vlog.",
                tools: ["Premiere Pro"]
            },
            {
                title: "Behind The Scenes",
                category: "Vlog Style",
                videoSrc: "https://drive.google.com/file/d/1wWa8VBguzC6od1uafpo7TLVsHT35utgI/view?usp=drive_link",
                description: "Engaging storytelling format for a creator's daily vlog.",
                tools: ["Premiere Pro"]
            },
            {
                title: "Behind The Scenes",
                category: "Vlog Style",
                videoSrc: "https://drive.google.com/file/d/1d0CzxglCe7IfBFX9pBW6vXx_gwBYWg49/view?usp=drive_link",
                description: "Engaging storytelling format for a creator's daily vlog.",
                tools: ["Premiere Pro"]
            }
        ]
    },
    {
        number: "03",
        title: "Talking Head Videos",
        subtitle: "Educational / Course Content",
        projects: [
            {
                title: "Masterclass Intro",
                category: "Course Content",
                videoSrc: "https://drive.google.com/file/d/1OLiaDzZZOUNMkqR2z0Vjs7zPf0mZBG12/view?usp=drive_link",
                description: "Engaging intro for an online course on productivity.",
                tools: ["Premiere Pro", "After Effects"]
            },
            {
                title: "Tech Review",
                category: "YouTube",
                videoSrc: "https://drive.google.com/file/d/1vfnS_GORrHNGCoIkNaKaV7DP2zpz3r0d/view?usp=drive_link",
                description: "Clean, well-paced tech review with b-roll overlays.",
                tools: ["Premiere Pro"]
            },
            {
                title: "Tech Review",
                category: "YouTube",
                videoSrc: "https://drive.google.com/file/d/1HDk78pxDKTKS0eKQ6ufaGVAOr_L3vC58/view?usp=drive_link",
                description: "Clean, well-paced tech review with b-roll overlays.",
                tools: ["Premiere Pro"]
            },
            {
                title: "Masterclass Intro",
                category: "Course Content",
                videoSrc: "https://drive.google.com/file/d/1FSVHgMaEmzdWQljCmpzy50tM0ud8bxnd/view?usp=drive_link",
                description: "Engaging intro for an online course on productivity.",
                tools: ["Premiere Pro", "After Effects"]
            },
            {
                title: "Tech Review",
                category: "YouTube",
                videoSrc: "https://drive.google.com/file/d/15CJEIEncSg11ZXbS8OeGWo27YCaiYsx_/view?usp=drive_link",
                description: "Clean, well-paced tech review with b-roll overlays.",
                tools: ["Premiere Pro"]
            },
            {
                title: "Tech Review",
                category: "YouTube",
                videoSrc: "https://drive.google.com/file/d/1JkfHVEShqE8F9s7CLW0jgel4X6qFY2MP/view?usp=drive_link",
                description: "Clean, well-paced tech review with b-roll overlays.",
                tools: ["Premiere Pro"]
            },
        ]
    },
    {
        number: "04",
        title: "Stories That Stay",
        subtitle: "Documentary / Long Form",
        projects: [
            {
                title: "The Artisan",
                category: "Mini-Doc",
                videoSrc: "https://drive.google.com/file/d/1K1iiqlF-1qoosgjGcindCDpvXktKzdXv/view?usp=drive_link",
                description: "Watch the full film here: https://drive.google.com/file/d/1PkLNS1aORNC-sGUCLZP112QpMRo5wCDs/view?usp=drive_link",
                tools: ["Premiere Pro", "DaVinci Resolve"]
            },
            {
                title: "City Sounds",
                category: "Visual Poem",
                videoSrc: "https://drive.google.com/file/d/1MjJMQGtxQyfbkffhU8pTdn_7t98exV5W/view?usp=drive_link",
                description: "Watch the full film here: https://vimeo.com/example-link-2",
                tools: ["Premiere Pro"]
            },
            {
                title: "The Artisan",
                category: "Mini-Doc",
                videoSrc: "https://drive.google.com/file/d/1nVARkJNuqT2vYp4oAs1rRTK2d-hio09F/view?usp=drive_link",
                description: "Watch the full film here: https://drive.google.com/file/d/1PkLNS1aORNC-sGUCLZP112QpMRo5wCDs/view?usp=drive_link",
                tools: ["Premiere Pro", "DaVinci Resolve"]
            },
            {
                title: "The Artisan",
                category: "Mini-Doc",
                videoSrc: "https://drive.google.com/file/d/1inL9i2cl5qZ6NPAUZS3GBrwou4y0JH0Z/view?usp=drive_link",
                description: "Watch the full film here: https://drive.google.com/file/d/1PkLNS1aORNC-sGUCLZP112QpMRo5wCDs/view?usp=drive_link",
                tools: ["Premiere Pro", "DaVinci Resolve"]
            },
        ]
    },
    {
        number: "05",
        title: "Moments That Stick",
        subtitle: "Short Form",
        projects: [
            {
                title: "The Artisan",
                category: "Mini-Doc",
                videoSrc: "https://drive.google.com/file/d/13t-tj67CUP_ZjgroAJ-W8LgXP2O_PXBD/view?usp=drive_link",
                description: "Watch the full film here: https://drive.google.com/file/d/1PkLNS1aORNC-sGUCLZP112QpMRo5wCDs/view?usp=drive_link",
                tools: ["Premiere Pro", "DaVinci Resolve"]
            },
            {
                title: "City Sounds",
                category: "Visual Poem",
                videoSrc: "https://drive.google.com/file/d/1bRj1pe93jqSQRcAy_pUBqtDefdmrci-i/view?usp=drive_link",
                description: "Watch the full film here: https://vimeo.com/example-link-2",
                tools: ["Premiere Pro"]
            },
            {
                title: "The Artisan",
                category: "Mini-Doc",
                videoSrc: "https://drive.google.com/file/d/1rAUmihfB8-OqSfsXs6TRibb6U-htW8S2/view?usp=drive_link",
                description: "Watch the full film here: https://drive.google.com/file/d/1PkLNS1aORNC-sGUCLZP112QpMRo5wCDs/view?usp=drive_link",
                tools: ["Premiere Pro", "DaVinci Resolve"]
            },
            {
                title: "The Artisan",
                category: "Mini-Doc",
                videoSrc: "https://drive.google.com/file/d/1dv9kIklYQw4C7tPX5s0viuxXZ7eAApCR/view?usp=drive_link",
                description: "Watch the full film here: https://drive.google.com/file/d/1PkLNS1aORNC-sGUCLZP112QpMRo5wCDs/view?usp=drive_link",
                tools: ["Premiere Pro", "DaVinci Resolve"]
            },
            {
                title: "The Artisan",
                category: "Mini-Doc",
                videoSrc: "https://drive.google.com/file/d/1R2JZX_GDGGqWatchsUpyyMmTul6vgMNQ/view?usp=drive_link",
                description: "Watch the full film here: https://drive.google.com/file/d/1PkLNS1aORNC-sGUCLZP112QpMRo5wCDs/view?usp=drive_link",
                tools: ["Premiere Pro", "DaVinci Resolve"]
            },
            {
                title: "The Artisan",
                category: "Mini-Doc",
                videoSrc: "https://drive.google.com/file/d/1lOO5xWwmVDrDZlKHGgBd3q35B9WWAA0m/view?usp=drive_link",
                description: "Watch the full film here: https://drive.google.com/file/d/1PkLNS1aORNC-sGUCLZP112QpMRo5wCDs/view?usp=drive_link",
                tools: ["Premiere Pro", "DaVinci Resolve"]
            },
        ]
    },
    {
        number: "06",
        title: "Motion That Moves",
        subtitle: "Animations / Motion Graphics",
        projects: [
            {
                title: "Neon Pulse",
                category: "Motion Graphics",
                videoSrc: "https://drive.google.com/file/d/1v9760xZW5srydLoYfg1QrLjCJr1uIkPf/view?usp=drive_link",
                description: "A high-energy kinetic typography exploration used for a tech conference opener.",
                tools: ["After Effects", "Illustrator"]
            },
            {
                title: "Liquid Flow",
                category: "Abstract Loop",
                videoSrc: "https://drive.google.com/file/d/1ZddMbz3IN9E1lwfi02kDDxGs0OaV2zC3/view?usp=drive_link",
                description: "Experimental fluid simulation rendered for a Spotify Canvas background.",
                tools: ["Blender", "After Effects"]
            },

        ]
    }
];

export function Work() {
    return (
        <div id="work" className="bg-[#0a0a0a] text-white">
            {chapters.map((chapter, index) => (
                <ChapterCard
                    key={index}
                    number={chapter.number}
                    title={chapter.title}
                    subtitle={chapter.subtitle}
                    projects={chapter.projects}
                    reversed={index % 2 !== 0} // Alternate layout
                    aspectRatio={["Talking Head Videos", "Moments That Stick", "Trendsetter Reel"].includes(chapter.title) ? "vertical" : "video"}
                />
            ))}
        </div>
    );
}
