import * as React from "react";
import Autoplay from "embla-carousel-Autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "./ui/button";

export function CarouselPlugin() {
  const plugin = React.useRef(
    Autoplay({
      delay: 5000,
      stopOnInteraction: false,
      stopOnLastSnap: false,
      stopOnMouseEnter: true,
    })
  );

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full h-[300px] md:h-full flex items-center justify-center"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
      opts={{
        align: "center",
        containScroll: "trimSnaps",
      }}
    >
      <CarouselContent className="flex flex-nowrap">
        {Array.from({ length: 3 }).map((_, index) => (
          <CarouselItem
            key={index}
            className="w-full h-[250px] md:h-full flex items-center justify-between"
          >
            <div className="flex w-full h-full">
              {/* Imagem do lado esquerdo */}
              <div className="w-1/2 h-full flex items-center justify-center">
                <img
                  src={`https://images.unsplash.com/photo-1719253480609-579ad1622c65?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHByb3JqZXRvcyUyMGRldnxlbnwwfHwwfHx8MA%3D%3D`}
                  className="w-11/12 h-full object-cover"
                />
              </div>
              {/* Título e Descrição do lado direito */}
              <div className="w-1/2 flex flex-col justify-between px-3 md:p-5">
                <div>
                  <h3 className="text-2xl md:text-4xl font-bold mb-3">
                    Título {index + 1}
                  </h3>
                  <p className="text-sm md:text-lg">
                    Esta é a descrição do item {index + 1}. Aqui você pode
                    adicionar mais detalhes sobre o que está sendo exibido.
                  </p>
                </div>
                <div className='flex justify-center items-center mb-2'>
                <Button>View Project</Button>
                </div>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
