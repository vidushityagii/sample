"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"

export function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const testimonialsRef = useRef(null)

  const testimonials = [
    {
      id: 1,
      quote:
        "Vidushi's editing skills transformed our raw footage into a compelling story. Her attention to detail and creative vision brought our project to life in ways we couldn't have imagined. The color grading and transitions were seamless, and she delivered ahead of schedule!",
      author: "KIET Group of Institutions",
      role: "Educational Institute",
      rating: 5,
      logo: "/kiet.png?height=100&width=100",
    },
    {
      id: 2,
      quote:
        "Our brand videos have seen a 35% boost in engagement since we partnered with Vidushi. Her style of visual storytelling resonates with our audience. She doesn't just edit videos; she meticulously crafts experiences that have lasting impact. We highly recommend her services.",
      author: "DigiDir",
      role: "Marketing Agency",
      rating: 5,
      logo: "/dig.png?height=100&width=100",
    },
    {
      id: 3,
      quote:
        "Vidushi delivered exactly what we envisioned — crisp, engaging videos that aligned perfectly with our brand message. Her professionalism, timely delivery, and clear communication made the entire process smooth and effective.",
      author: "USANA",
      role: "Cellular Nutrition Company",
      rating: 5,
      logo: "/aiiii.png?height=100&width=100",
    },
    {
      id: 4,
      quote:
        "Collaborating with Vidushi was a seamless and rewarding experience. Her ability to translate educational content into visually dynamic and engaging narratives elevated the overall impact of our videos. Her creativity, and technical command make him a standout talent in the field.",
      author: "Sarthak",
      role: "Content Creator & Educato",
      rating: 5,
      logo: "/aii.png?height=100&width=100",
    },
    
  ]

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }

  const goToTestimonial = (index: number) => {
    setCurrentTestimonial(index)
  }

  return (
    <section id="testimonials" className="py-20 bg-[#0c101a] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-[#121620] to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-[#121620] to-transparent"></div>

      {/* Animated background elements */}
      <motion.div
        className="absolute -right-40 top-40 w-80 h-80 rounded-full bg-[#00e5ff]/5 blur-3xl"
        animate={{
          x: [0, -30, 0],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
      ></motion.div>

      <div className="container mx-auto px-4" ref={testimonialsRef}>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            What<span className="text-white">Clients</span>
            <span className="text-[#00e5ff]">Say</span>
          </h2>
          <div className="h-1 w-24 bg-[#00e5ff] mx-auto mt-2"></div>
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
            Hear from the people and brands I've had the pleasure of working with
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5 md:-translate-x-10 z-10 bg-[#1a202c]/70 hover:bg-[#1a202c] p-2 rounded-full text-[#00e5ff] transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-5 md:translate-x-10 z-10 bg-[#1a202c]/70 hover:bg-[#1a202c] p-2 rounded-full text-[#00e5ff] transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} />
          </button>

          {/* Testimonials */}
          <div className="bg-[#0a0e14]/80 border border-[#00e5ff]/10 rounded-xl p-8 md:p-12 min-h-[400px] flex flex-col items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <div className="mb-6 flex justify-center">
                  <div className="w-20 h-20 rounded-full bg-[#1a202c] p-2 border border-[#00e5ff]/20 flex items-center justify-center overflow-hidden">
                    <Image
                      src={testimonials[currentTestimonial].logo || "/placeholder.svg"}
                      alt={testimonials[currentTestimonial].author}
                      width={80}
                      height={80}
                      className="rounded-full object-cover"
                    />
                  </div>
                </div>

                <div className="flex justify-center mb-6">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-[#00e5ff] text-[#00e5ff]" />
                  ))}
                </div>

                <blockquote className="text-lg md:text-xl italic mb-8 max-w-3xl">
                  "{testimonials[currentTestimonial].quote}"
                </blockquote>

                <div className="space-y-1">
                  <h4 className="font-bold text-xl">{testimonials[currentTestimonial].author}</h4>
                  <p className="text-[#00e5ff]">{testimonials[currentTestimonial].role}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentTestimonial === index ? "bg-[#00e5ff] w-6" : "bg-gray-600 hover:bg-gray-400"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
