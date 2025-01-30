"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"
import Image from "next/image"
import Lumpia from "@/public/lumpia-hero.jpg"

export function Hero() {
  const scrollToMenu = () => {
    const menuSection = document.querySelector("#menu")
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="relative bg-secondary/10 min-h-[calc(100vh-4rem)] flex items-center">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-2 md:items-center">
          <div className="space-y-6">
            <motion.h1
              className="text-4xl font-bold tracking-tight text-primary md:text-6xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Nikmati Hidangan Lezat Kapan Saja dengan Frozen Food Berkualitas Kami
            </motion.h1>
            <motion.p
              className="text-lg text-gray-600"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Sajikan makanan praktis tanpa kompromi rasa. Pilihan sehat dan lezat untuk keluarga Anda, siap dinikmati
              kapan saja.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex gap-4"
            >
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90"
                onClick={scrollToMenu}
              >
                Lihat Menu
              </Button>
            </motion.div>
          </div>
          <motion.div
            className="relative h-[400px]"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Image src={Lumpia} alt="Lumpia Rebung" layout="fill" objectFit="cover" className="rounded-3xl" />
          </motion.div>
        </div>
      </div>
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full animate-bounce bg-primary text-primary-foreground hover:bg-primary/90 hover:text-white"
          onClick={() => document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })}
        >
          <ChevronDown className="h-6 w-6" />
        </Button>
      </motion.div>
    </div>
  )
}

