// app/services/page.tsx

"use client";

import Nav from "~/components/Nav";
import Footer from "~/components/footer";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "~/components/ui/card";

import { Button } from "~/components/ui/button";
import {
  IconDatabase,
  IconDeviceDesktop,
  IconHeartHandshake,
  IconNetwork,
  IconShieldCheck,
  IconWorldWww,
} from "@tabler/icons-react";
import Link from "next/link";

const services = [
  {
    title: "Computer Repair",
    description:
      "Fast and reliable repair services for all types of computers. From hardware issues to software glitches, we've got you covered.",
    icon: <IconDeviceDesktop className="mb-4 h-16 w-16 text-blue-500" />,
    color: "blue",
    href: "/services/computer-repair",
  },
  {
    title: "Network Setup",
    description:
      "Professional network setup and configuration services for homes and businesses, ensuring seamless connectivity.",
    icon: <IconNetwork className="mb-4 h-16 w-16 text-green-500" />,
    color: "green",
    href: "/services/network-setup",
  },
  {
    title: "Cybersecurity Solutions",
    description:
      "Protect your data and systems with our advanced cybersecurity services, including threat analysis and prevention.",
    icon: <IconShieldCheck className="mb-4 h-16 w-16 text-red-500" />,
    color: "red",
    href: "/services/cybersecurity",
  },
  {
    title: "Web Development",
    description:
      "Create a stunning website for your business with our web development services, tailored to your specific needs.",
    icon: <IconWorldWww className="mb-4 h-16 w-16 text-orange-500" />,
    color: "blue",
    href: "/services/web-development",
  },
  {
    title: "Data Recovery",
    description:
      "Recover lost or corrupted data with our data recovery services, ensuring your important files are safe and secure.",
    icon: <IconDatabase className="mb-4 h-16 w-16 text-violet-500" />,
    color: "red",
    href: "/services/data-recovery",
  },
  {
    title: "IT Consulting",
    description:
      "Get expert advice on all things IT with our consulting services, helping you make informed decisions for your business.",
    icon: <IconHeartHandshake className="mb-4 h-16 w-16 text-emerald-500" />,
    color: "green",
    href: "/services/it-consulting",
  }
];

export default function Services() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-gray-50">
      <Nav />
      <div className="w-full max-w-6xl px-4 py-16">
        <h1 className="mb-8 text-center text-5xl font-bold text-gray-900">
          Our Services
        </h1>
        <p className="mb-16 text-center text-lg text-gray-700">
          At DCRalph Enterprise, we offer a comprehensive range of IT services
          tailored to meet your needs.
        </p>
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {/* Service 1 */}
          {services.map((service, index) => (
            <Card
              className="flex flex-col transition-shadow hover:shadow-lg"
              key={index}
            >
              <CardHeader className="flex flex-col items-center">
                <CardTitle className="flex flex-col items-center">
                  {service.icon}
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">{service.description}</p>
              </CardContent>
              <CardFooter className="mt-auto">
                <Link href={service.href} className="w-full">
                  <Button variant="default" className="w-full">
                    Learn More
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}

          {/* Add more services as needed */}
        </div>
      </div>
      <Footer />
    </main>
  );
}
