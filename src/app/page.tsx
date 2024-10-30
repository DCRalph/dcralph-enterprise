"use client";

import Nav from "~/components/Nav";
import Footer from "~/components/footer";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "~/components/ui/card";

import Image from "next/image";

import { api } from "~/trpc/react";
import { Button } from "~/components/ui/button";

// Import the Carousel component
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "~/components/ui/carousel";
import Link from "next/link";
import { useState } from "react";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";

export default function Home() {
  const myUser = api.user.getUser.useQuery();

  const [carouselApi, setCarouselApi] = useState<CarouselApi>();

  return (
    <main className="flex min-h-screen flex-col items-center bg-gray-50">
      <Nav user={myUser.data} />
      <h1 className="mb-8 mt-8 text-6xl font-bold text-gray-900">
        DCRalph Enterprise
      </h1>
      {/* Carousel Component */}

      <Carousel
        className="w-full"
        opts={{
          loop: true,
        }}
        setApi={setCarouselApi}
      >
        <CarouselContent>
          <CarouselItem key={1}>
            <Image
              src="/home-slide/it-services.jpg"
              alt="High-quality IT Support"
              className="h-96 object-cover"
              width={1920}
              height={1080}
            />
          </CarouselItem>
          <CarouselItem key={2}>
            <Image
              src="/home-slide/computer-repair.jpg"
              alt="Expert Computer Repair"
              className="h-96 object-cover"
              width={1920}
              height={1080}
            />
          </CarouselItem>
          <CarouselItem key={3}>
            <Image
              src="/home-slide/rack.webp"
              alt="Reliable Network Solutions"
              className="h-96 object-cover"
              width={1920}
              height={1080}
            />
          </CarouselItem>
        </CarouselContent>
      </Carousel>

      <div className="mt-4 flex w-full justify-center gap-4">
        <Button
          variant={"outline"}
          className="h-10 w-10 rounded-full"
          onClick={() => carouselApi?.scrollPrev()}
        >
          <IconArrowLeft />
        </Button>
        <Button
          variant={"outline"}
          className="h-10 w-10 rounded-full"
          onClick={() => carouselApi?.scrollNext()}
        >
          <IconArrowRight />
        </Button>
      </div>

      <div className="w-full max-w-4xl px-4">
        <Card className="mb-8 mt-8">
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
        </Card>
        <Link href="/services">
          <Button variant="default">Learn More</Button>
        </Link>
      </div>
      <Footer />
    </main>
  );
}
