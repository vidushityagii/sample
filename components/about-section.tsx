"use client";

import { motion } from "framer-motion";

export function AboutSection() {
    return (
        <section className="py-24 bg-[#0a0a0a] flex justify-center border-b border-neutral-900/50">
            <div className="container px-4 text-center max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="space-y-6"
                >
                    <p className="text-2xl md:text-4xl leading-relaxed font-medium text-neutral-200">
                        I don't just edit footage; I engineer emotion.
                    </p>
                    <p className="text-xl md:text-2xl leading-relaxed text-neutral-400">
                        Crafting rhythm where others see chaos.
                    </p>
                    <p className="text-xl md:text-2xl leading-relaxed text-neutral-400">
                        Turning raw files into stories people actually want to watch.
                    </p>
                    <p className="text-xl md:text-2xl leading-relaxed text-neutral-400">
                        Fast enough for social. Polished enough for broadcast.
                    </p>

                    <div className="pt-8 opacity-0 animate-fade-in" style={{ animationDelay: '1s', animationFillMode: 'forwards' }}>
                        <span className="text-neutral-600 uppercase tracking-widest text-sm">— LET'S MAKE SOMETHING THEY CAN'T SKIP.</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
