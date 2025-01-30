"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Phone, MessageCircle } from "lucide-react"

export function Contact() {
  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/6285236243874`, "_blank")
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <Card className="max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl text-primary">Hubungi Kami & Ambil Pesanan di Tempat</CardTitle>
          <CardDescription>
            Ingin menikmati kelezatan Admonadi lebih dekat? Anda bisa mengambil pesanan langsung di lokasi kami:
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <MapPin className="h-5 w-5 text-primary shrink-0 mt-1" />
              <div>
                <p className="font-medium">Alamat:</p>
                <p>Jl. Dr. Moch Saleh No.19, Tisnonegaran, Kec. Kanigaran, Kota Probolinggo, Jawa Timur 67211</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="h-5 w-5 text-primary" />
              <div>
                <p className="font-medium">Telepon:</p>
                <p>+6285236243874 (Bu Erni)</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin className="h-5 w-5 text-primary" />
              <div>
                <p className="font-medium">Lokasi:</p>
                <p>Nasi Bakar Bu Erni - Sukabumi</p>
              </div>
            </div>
          </div>
          <Button onClick={handleWhatsAppClick} className="w-full bg-green-600 hover:bg-green-700">
            <MessageCircle className="mr-2 h-4 w-4" />
            Hubungi via WhatsApp
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}

