"use client";

import Nav from "~/components/Nav";
import Footer from "~/components/footer";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "~/components/ui/card";

import Image from "next/image";

import { api } from "~/trpc/react";
import { Button } from "~/components/ui/button";

import Autoplay from "embla-carousel-autoplay";

// Import the Carousel component
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "~/components/ui/carousel";
import Link from "next/link";
import { useEffect, useState } from "react";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";

export default function Home() {
  const myUser = api.user.getUser.useQuery();

  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [selectedSlide, setSelectedSlide] = useState(0);

  useEffect(() => {
    if (!carouselApi) return;

    setSelectedSlide(carouselApi.selectedScrollSnap());

    carouselApi.on("select", () => {
      setSelectedSlide(carouselApi.selectedScrollSnap());
    });
  }, [carouselApi]);

  return (
    <main className="flex min-h-screen flex-col items-center bg-gray-50">
      <Nav user={myUser.data} />

      {/* Carousel Component */}

      <div className="relative">
        <div className="absolute top-8 z-20 flex w-full justify-center">
          <h1 className="rounded-xl bg-black/80 p-4 text-3xl font-bold text-zinc-100 lg:text-8xl">
            DCRalph Enterprise
          </h1>
        </div>

        <Carousel
          className="w-full"
          opts={{
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 5000,
              stopOnInteraction: false,
              stopOnMouseEnter: true,
            }),
          ]}
          setApi={setCarouselApi}
        >
          <CarouselContent className="h-[32rem]">
            <CarouselItem key={1}>
              <Image
                src="/home-slide/it-services.jpg"
                alt="High-quality IT Support"
                className="h-full object-cover"
                width={1920}
                height={1080}
              />
            </CarouselItem>
            <CarouselItem key={2}>
              <Image
                src="/home-slide/computer-repair.jpg"
                alt="Expert Computer Repair"
                className="h-full object-cover"
                width={1920}
                height={1080}
              />
            </CarouselItem>
            <CarouselItem key={3}>
              <Image
                src="/home-slide/rack.webp"
                alt="Reliable Network Solutions"
                className="h-full object-cover"
                width={1920}
                height={1080}
              />
            </CarouselItem>
          </CarouselContent>
        </Carousel>
        <div className="absolute bottom-4 mt-4 flex w-full items-center justify-center gap-4">
          <Button
            variant={"outline"}
            className="h-10 w-10 rounded-full"
            onClick={() => carouselApi?.scrollPrev()}
          >
            <IconArrowLeft />
          </Button>
          <div className="flex gap-2">
            {carouselApi &&
              [...carouselApi.slideNodes()].map((_, index) => {
                const active = selectedSlide == index;
                return (
                  <button
                    key={index}
                    className={`h-4 w-4 rounded-full bg-zinc-100 transition-all hover:scale-110 ${active ? "w-6 bg-blue-400" : ""}`}
                    onClick={() => {
                      carouselApi?.scrollTo(index);
                    }}
                  ></button>
                );
              })}
          </div>
          <Button
            variant={"outline"}
            className="h-10 w-10 rounded-full"
            onClick={() => carouselApi?.scrollNext()}
          >
            <IconArrowRight />
          </Button>
        </div>
      </div>

      <div className="w-full max-w-4xl px-4">
        <Card className="mt-8 transition-shadow hover:shadow-lg">
          <CardHeader>
            <CardTitle>Welcome to DCRalph Enterprise</CardTitle>
            <CardDescription>
              Your trusted partner in IT support and computer services.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-lg leading-relaxed text-gray-700">
              At DCRalph Enterprise, we specialize in providing top-notch IT
              support for both individuals and businesses. Our team of certified
              professionals is dedicated to ensuring your technology works
              seamlessly, so you can focus on what matters most.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-gray-700">
              We offer a wide range of services, including computer repairs,
              system upgrades, network setup, and cybersecurity solutions. With
              our 24/7 support and personalized service plans, we are committed
              to keeping your operations running smoothly.
            </p>
          </CardContent>
          <CardFooter>
            <Link href="/services">
              <Button variant="default">Learn More</Button>
            </Link>
          </CardFooter>
        </Card>
      </div>
      <Footer />
    </main>
  );
}
