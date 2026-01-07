"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

// Placeholder data
const clients = [
    { id: 1, name: "Saumya Singh", type: "brand", image: "/1756606818632.jpeg", description: "Content Creator" },
    { id: 2, name: "LPU", type: "brand", image: "/lpu logo.png", description: "University" },
    { id: 3, name: "USANA", type: "person", image: "/usana_logo.jpg", description: "Health Sciences" },
    { id: 4, name: "DBUU", type: "brand", image: "/578_logo.png", description: "University" },
    { id: 5, name: "Ecodibba", type: "brand", image: "/Untitled design (1) (1).jpg", description: "Sustainable Brand" },
    { id: 6, name: "NABARD", type: "brand", image: "/NABARD-14-7-2022.jpg", description: "Development Bank" },
    { id: 7, name: "DigiDir", type: "person", image: "/DigiDir-Logo.jpg", description: "Digital Agency" },
    { id: 8, name: "KIET Group of Institutions", type: "brand", image: "/logo-kiet-ghaziabad.webp", description: "University" },
    { id: 9, name: "Creative Cell", type: "brand", image: "/Logo of C-cell.png", description: "Production House" },
    { id: 10, name: "DPS Indirapuram", type: "brand", image: "/logo.png", description: "School" },
    { id: 11, name: "IIMT Group of Institutions", type: "brand", image: "/Logo_un31GahLq.webp", description: "Institution" },
    { id: 12, name: "Galgotias University", type: "brand", image: "/Galgotias-University-Logo.png", description: "University" },
    { id: 13, name: "TIET", type: "brand", image: "/tietlogo-CjxYgEfJ.png", description: "Institution" },

];

export function ClientsSection() {
    return (
        <section className="py-24 bg-[#0a0a0a] border-t border-neutral-900">
            <div className="container mx-auto px-4">
                {/* Section Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-2">WHO I'VE WORKED WITH</h2>
                    <div className="w-12 h-1 bg-white/10 mx-auto rounded-full" />
                </motion.div>

                {/* Logo Grid */}
                <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-12 items-center justify-items-center">
                    {clients.map((client, index) => (
                        <motion.div
                            key={client.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.05 }}
                            viewport={{ once: true }}
                            className="relative group w-full h-40 md:h-64 flex items-center justify-center opacity-50 hover:opacity-100 transition-all duration-500"
                        >
                            <div className="w-full h-full bg-neutral-900/50 rounded-lg border border-white/5 flex flex-col items-center justify-center p-4 relative overflow-hidden">
                                {client.image && !client.image.includes("placeholder") ? (
                                    <img
                                        src={client.image}
                                        alt={client.name}
                                        className="w-full h-[70%] object-contain opacity-80 hover:opacity-100 transition-opacity duration-300 mb-2"
                                    />
                                ) : (
                                    client.type === 'person' ? (
                                        <div className="w-12 h-12 rounded-full bg-neutral-700 flex items-center justify-center text-[10px] text-neutral-400 mb-2">
                                            IMG
                                        </div>
                                    ) : (
                                        <span className="text-3xl font-bold text-white/20 group-hover:text-white transition-colors mb-2">
                                            LOGO
                                        </span>
                                    )
                                )}
                                <div className="absolute bottom-3 text-center w-full px-2">
                                    <div className="text-sm font-medium text-white transition-colors uppercase tracking-wider">
                                        {client.name}
                                    </div>
                                    <div className="text-[10px] font-light text-neutral-500 uppercase tracking-widest mt-0.5">
                                        {client.description}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
