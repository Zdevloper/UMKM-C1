import { MenuCard } from "@/components/menu-card"

const menuItems = [
  {
    title: "Lumpia Rebung",
    description:
      "Lumpia Rebung: Renyah di Luar, Gurih di Dalam. Isian rebung segar berpadu dengan kulit yang renyah, menghadirkan cita rasa tradisional yang tak terlupakan. Cocok untuk camilan di segala suasana!",
    price: "Rp 3.500/biji",
    packInfo: "Rp 17.500/pack (isi 5)",
    image: "/lumpia-rebung.jpg",
  },
  {
    title: "Tahu Walik",
    description:
      "Tahu Walik & Cabai Rawit: Kriuk Pedas yang Bikin Nagih. Tahu walik renyah dengan isian gurih, sempurna dipadukan dengan cabai rawit segar untuk sensasi pedas yang memikat. Camilan favorit untuk segala momen",
    price: "Rp 15.000/pack",
    packInfo: "Isi 10 biji",
    image: "/tahu-walik.jpg",
  },
  {
    title: "Tahu Bakso",
    description:
      "Tahu Bakso: Lembut, Gurih, dan Selalu Istimewa. Perpaduan tahu lembut dan isian bakso yang gurih, menciptakan camilan yang pas untuk dinikmati kapan saja. Lezatnya bikin ketagihan!",
    price: "Rp 15.000/pack",
    packInfo: "Isi 6 biji",
    image: "/tahu-bakso.jpg",
  },
  {
    title: "Risol Mayo",
    description:
      "Risol Mayo: Lezatnya Isian Keju, Telur, Mayo, dan Sosis dalam Satu Gigitan. Kulit risol yang renyah berpadu sempurna dengan isian creamy dan gurih, menjadikannya camilan yang tak hanya memuaskan, tapi juga penuh kenikmatan di setiap gigitan!",
    price: "Rp 20.000/pack",
    packInfo: "Isi 10 biji",
    image: "/risol.jpg",
  },
  {
    title: "Sinom",
    description:
      "Sinom: Kesegaran Alami, Sehat dan Menyegarkan. Minuman herbal dari daun asam muda yang kaya manfaat, berpadu dengan rasa manis dan asam yang menyegarkan. Pilihan tepat untuk menjaga stamina dan kesehatan tubuh!",
    price: "Rp 6.000/botol",
    packInfo: "Per botol",
    image: "/sinom.jpg",
  },
]

export function Menu() {
  return (
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-primary text-center mb-12">Menu Kami</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {menuItems.map((item) => (
          <MenuCard key={item.title} {...item} />
        ))}
      </div>
    </div>
  )
}

