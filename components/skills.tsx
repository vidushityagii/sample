"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Monitor, Pen, Camera, Film } from "lucide-react"

export function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section id="skills" className="py-20 bg-[#0c101a] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-[#121620] to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-[#121620] to-transparent"></div>

      {/* Animated background elements */}
      <motion.div
        className="absolute -left-40 bottom-40 w-80 h-80 rounded-full bg-[#00e5ff]/5 blur-3xl"
        animate={{
          x: [0, 30, 0],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
      ></motion.div>

      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold">
            My <span className="text-[#00e5ff]">Skills</span>
          </h2>
          <motion.div
            className="h-1 w-24 bg-[#00e5ff] mx-auto mt-2"
            initial={{ width: 0 }}
            animate={isInView ? { width: "6rem" } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          ></motion.div>
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
            Professional skills and expertise in video editing and production
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto space-y-16"
        >
          {/* Software Proficiency Section */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-[#00e5ff]/10 p-3 rounded-full">
                <Monitor className="h-6 w-6 text-[#00e5ff]" />
              </div>
              <h3 className="text-2xl font-bold">Software Proficiency</h3>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {[
                { name: "Premiere Pro", percentage: 98 },
                { name: "After Effects", percentage: 92 },
                { name: "DaVinci Resolve", percentage: 90 },
                { name: "Final Cut Pro", percentage: 85 },
              ].map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="space-y-2"
                >
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-[#00e5ff] font-bold">{skill.percentage}%</span>
                  </div>
                  <div className="h-24 bg-[#1a202c]/70 rounded-lg overflow-hidden relative">
                    <motion.div
                      initial={{ height: 0 }}
                      animate={isInView ? { height: "100%" } : { height: 0 }}
                      transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                      className="absolute inset-0 bg-gradient-to-t from-[#00e5ff]/80 to-[#00e5ff]/30 flex items-center justify-center"
                      style={{ height: `${skill.percentage}%` }}
                    >
                      <span className="text-3xl font-bold text-white">{skill.percentage}%</span>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-6 mt-6">
              {[
                { name: "Adobe Express", percentage: 90 },
                { name: "Canva", percentage: 95 },
                
              ].map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.3 + 0.1 * index }}
                  className="space-y-2"
                >
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-[#00e5ff] font-bold">{skill.percentage}%</span>
                  </div>
                  <div className="h-24 bg-[#1a202c]/70 rounded-lg overflow-hidden relative">
                    <motion.div
                      initial={{ height: 0 }}
                      animate={isInView ? { height: "100%" } : { height: 0 }}
                      transition={{ duration: 1, delay: 0.7 + index * 0.1 }}
                      className="absolute inset-0 bg-gradient-to-t from-[#00e5ff]/80 to-[#00e5ff]/30 flex items-center justify-center"
                      style={{ height: `${skill.percentage}%` }}
                    >
                      <span className="text-3xl font-bold text-white">{skill.percentage}%</span>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          
          {/* Creative Skills Section */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-[#00e5ff]/10 p-3 rounded-full">
                <Pen className="h-6 w-6 text-[#00e5ff]" />
              </div>
              <h3 className="text-2xl font-bold">Creative Skills</h3>
            </div>

            <div className="space-y-6">
              {[
                { name: "Visual Storytelling", percentage: 96 },
                { name: "Composition", percentage: 94 },
                { name: "Storyboarding", percentage: 85 },
                { name: "Conceptualization", percentage: 88 },
              ].map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, width: 0 }}
                  animate={isInView ? { opacity: 1, width: "100%" } : { opacity: 0, width: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="space-y-2"
                >
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-[#00e5ff] font-bold">{skill.percentage}%</span>
                  </div>
                  <div className="h-2 w-full bg-[#1a202c]/70 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${skill.percentage}%` } : { width: 0 }}
                      transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                      className="h-full bg-gradient-to-r from-[#00e5ff] to-[#00e5ff]/70 rounded-full"
                    ></motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
{/* Technical Skills Section */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-[#00e5ff]/10 p-3 rounded-full">
                <Camera className="h-6 w-6 text-[#00e5ff]" />
              </div>
              <h3 className="text-2xl font-bold">Gen AI Tools</h3>
            </div>

            <div className="space-y-6">
              {[
                { name: "ElevenLabs", percentage: 95 },
                { name: "HeyGen", percentage: 90 },
                { name: "Gama AI", percentage: 85 },
                { name: "Runway ML", percentage: 92 },
                { name: "MidJourney", percentage: 92 },
              ].map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, width: 0 }}
                  animate={isInView ? { opacity: 1, width: "100%" } : { opacity: 0, width: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="space-y-2"
                >
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-[#00e5ff] font-bold">{skill.percentage}%</span>
                  </div>
                  <div className="h-2 w-full bg-[#1a202c]/70 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${skill.percentage}%` } : { width: 0 }}
                      transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                      className="h-full bg-gradient-to-r from-[#00e5ff] to-[#00e5ff]/70 rounded-full"
                    ></motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          
        </motion.div>
      </div>
    </section>
  )
}
