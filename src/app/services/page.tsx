"use client";

import { useState } from "react";
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

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "~/components/ui/dialog";

type Service = {
  title: string;
  description: string;
  icon: JSX.Element;
  color: string;
  details: string[];
};

const services: Service[] = [
  {
    title: "Computer Repair",
    description:
      "Fast and reliable repair services for all types of computers. From hardware issues to software glitches, we've got you covered.",
    icon: <IconDeviceDesktop className="mb-4 h-16 w-16 text-blue-500" />,
    color: "blue",
    details: [
      "At DCRalph Enterprise, we understand how crucial your computer is to your daily life and business operations. Our Computer Repair service is designed to provide fast and effective solutions to all your hardware and software issues.",
      "Our team of certified technicians is equipped to handle a wide range of problems, from malfunctioning hardware components to software glitches. We work diligently to diagnose the issue accurately and offer the most cost-effective repair options.",
      "We pride ourselves on our transparent communication and commitment to customer satisfaction. You'll be kept informed throughout the repair process, ensuring there are no surprises when you receive your device back in optimal condition.",
      "Whether it's a simple fix or a complex repair, you can trust DCRalph Enterprise to restore your computer's performance efficiently. Let us help you minimize downtime and get back to your tasks without delay.",
    ],
  },
  {
    title: "Network Setup",
    description:
      "Professional network setup and configuration services for homes and businesses, ensuring seamless connectivity.",
    icon: <IconNetwork className="mb-4 h-16 w-16 text-green-500" />,
    color: "green",
    details: [
      "Connectivity is the backbone of modern business and personal communication. Our Network Setup service ensures you have a robust and secure network infrastructure tailored to your specific needs.",
      "From small home networks to complex enterprise systems, our experts design and implement networks that provide optimal performance and reliability. We consider factors like scalability, security, and ease of management in every project.",
      "We use the latest technologies and industry best practices to set up wired and wireless networks. Our team will configure routers, switches, firewalls, and other network devices to create a seamless connectivity experience.",
      "With DCRalph Enterprise, you can be confident that your network is in capable hands. We also offer ongoing support and maintenance to keep your network running smoothly as your requirements evolve.",
    ],
  },
  {
    title: "Cybersecurity Solutions",
    description:
      "Protect your data and systems with our advanced cybersecurity services, including threat analysis and prevention.",
    icon: <IconShieldCheck className="mb-4 h-16 w-16 text-red-500" />,
    color: "red",
    details: [
      "In an age where cyber threats are increasingly sophisticated, protecting your digital assets is more important than ever. Our Cybersecurity Solutions offer comprehensive protection against a wide array of online threats.",
      "We provide proactive threat analysis, vulnerability assessments, and security audits to identify and mitigate risks before they become problems. Our team stays up-to-date with the latest security trends and techniques to keep you protected.",
      "Our services include implementing firewalls, intrusion detection systems, and advanced encryption methods. We also offer employee training programs to educate your staff on best practices and recognize potential threats.",
      "With DCRalph Enterprise's Cybersecurity Solutions, you can have peace of mind knowing that your data and systems are secured by professionals dedicated to safeguarding your digital environment.",
    ],
  },
  {
    title: "Web Development",
    description:
      "Create a stunning website for your business with our web development services, tailored to your specific needs.",
    icon: <IconWorldWww className="mb-4 h-16 w-16 text-orange-500" />,
    color: "blue",
    details: [
      "Establish a strong online presence with our professional Web Development services. We create stunning, responsive websites that are tailored to reflect your brand and engage your target audience.",
      "Our team specializes in modern web technologies to build sites that are not only visually appealing but also optimized for performance and search engine rankings. We focus on user experience to ensure your visitors have a seamless interaction with your site.",
      "Whether you need a simple informational site or a complex e-commerce platform, we have the expertise to deliver solutions that meet your objectives. We work closely with you throughout the development process to ensure your vision is realized.",
      "Post-launch, we offer maintenance and support services to keep your website up-to-date and secure. Trust DCRalph Enterprise to build a digital platform that helps your business grow.",
    ],
  },
  {
    title: "Data Recovery",
    description:
      "Recover lost or corrupted data with our data recovery services, ensuring your important files are safe and secure.",
    icon: <IconDatabase className="mb-4 h-16 w-16 text-violet-500" />,
    color: "red",
    details: [
      "Losing important data can be a devastating experience. Our Data Recovery service is here to help you retrieve lost or corrupted files from various storage devices, including hard drives, SSDs, USB drives, and memory cards.",
      "We employ advanced recovery techniques and state-of-the-art tools to maximize the chances of successful data retrieval. Our technicians handle your data with the utmost confidentiality and care throughout the recovery process.",
      "Whether your data loss is due to accidental deletion, hardware failure, or malware attacks, we assess the situation and provide you with a clear plan of action. Our transparent approach ensures you are informed every step of the way.",
      "Don't let data loss disrupt your life or business. Trust DCRalph Enterprise to recover your valuable information efficiently and securely.",
    ],
  },
  {
    title: "IT Consulting",
    description:
      "Get expert advice on all things IT with our consulting services, helping you make informed decisions for your business.",
    icon: <IconHeartHandshake className="mb-4 h-16 w-16 text-emerald-500" />,
    color: "green",
    details: [
      "Navigating the complexities of IT can be challenging. Our IT Consulting service provides expert guidance to help you make informed technology decisions that align with your business goals.",
      "We take the time to understand your organization's needs, challenges, and opportunities. Our consultants offer strategic advice on technology adoption, infrastructure planning, and digital transformation initiatives.",
      "Whether you're looking to optimize your current systems, implement new solutions, or develop a long-term IT strategy, we provide actionable insights and practical recommendations to drive success.",
      "Partner with DCRalph Enterprise to leverage our expertise and ensure your technology investments deliver maximum value and competitive advantage.",
    ],
  },
];

export default function Services() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

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
                <Button
                  variant="default"
                  className="w-full"
                  onClick={() => {
                    setSelectedService(service);
                    setIsDialogOpen(true);
                  }}
                >
                  Learn More
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>

      {/* Dialog Component */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-3xl">
          <DialogHeader className="flex flex-col items-center">
            {selectedService?.icon}
            <DialogTitle className="text-center text-4xl">
              {selectedService?.title}
            </DialogTitle>
          </DialogHeader>
          <DialogDescription>
            {selectedService?.details.map((paragraph, index) => (
              <p
                key={index}
                className={`text-gray-700 text-base ${index !== 0 ? "mt-4" : ""}`}
              >
                {paragraph}
              </p>
            ))}
          </DialogDescription>
          <DialogFooter>
            <Button variant="default" onClick={() => setIsDialogOpen(false)}>
              Close
            </Button>
          </DialogFooter>
          <DialogClose />
        </DialogContent>
      </Dialog>

      <Footer />
    </main>
  );
}
