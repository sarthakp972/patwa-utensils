"use client"
import Autoplay from "embla-carousel-autoplay"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Idata from '@/utils/carousel'
import Image from "next/image"

const Slide = () => {
  return (
    <>
      <div className="flex justify-center overflow-hidden">
        <Carousel className="w-full" plugins={[Autoplay({ delay: 3000 })]}>
          <CarouselContent>
            {Idata.map((item, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Card>
                    <CardContent className="h-96 w-auto  relative">
                      <div className="aspect-w-1 aspect-h-1">
                        <Image
                          src={item.img}
                          layout="fill"
                          objectFit="cover"
                          className="rounded-lg cursor-pointer"
                        />
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>

      <div className=" container mt-6 ">
      <Image
                          src="/brone-home-small-banner1.jpg"
                          // layout="fill"
                          // objectFit="cover"
                          width={1100}
                          height={600}
                          className="rounded-lg cursor-pointer"
                        />
      </div>
    </>
  )
}

export default Slide
