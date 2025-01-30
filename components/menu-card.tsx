import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface MenuCardProps {
  title: string
  description: string
  price: string
  image: string
  packInfo: string
}

export function MenuCard({ title, description, price, image, packInfo }: MenuCardProps) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg">
      <div className="aspect-video relative">
        <img src={image || "/placeholder.svg"} alt={title} className="absolute inset-0 h-full w-full object-cover" />
      </div>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl text-primary">{title}</CardTitle>
          <Badge variant="secondary" className="bg-secondary text-secondary-foreground">
            {price}
          </Badge>
        </div>
        <CardDescription className="text-sm text-gray-500">{packInfo}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600">{description}</p>
      </CardContent>
    </Card>
  )
}

