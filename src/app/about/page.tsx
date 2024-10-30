// app/about/page.tsx

"use client";

import Nav from "~/components/Nav";
import Footer from "~/components/footer";
import { Card, CardHeader, CardTitle, CardContent } from "~/components/ui/card";

export default function About() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-gray-50">
      <Nav />
      <div className="w-full max-w-4xl px-4 py-16">
        <h1 className="mb-8 text-center text-5xl font-bold text-gray-900">
          About DCRalph Enterprise
        </h1>
        <Card className="mb-8 transition-shadow hover:shadow-lg">
          <CardHeader>
            <CardTitle>Who We Are</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg leading-relaxed text-gray-700">
              At DCRalph Enterprise, we are dedicated to providing exceptional
              IT support and computer services to both individuals and
              businesses. Our team of certified professionals is passionate
              about technology and committed to delivering solutions that
              enhance efficiency and productivity.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-gray-700">
              We offer a comprehensive range of services, including computer
              repair, network setup, cybersecurity solutions, web development,
              data recovery, and IT consulting. Our goal is to be your trusted
              partner in navigating the ever-evolving landscape of technology.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-gray-700">
              With a focus on customer satisfaction, we tailor our services to
              meet your specific needs. Whether you&apos;re a small business looking
              to improve your IT infrastructure or an individual needing
              assistance with your personal devices, we&apos;re here to help.
            </p>
          </CardContent>
        </Card>
        <Card className="mb-8 transition-shadow hover:shadow-lg">
          <CardHeader>
            <CardTitle>Our History</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg leading-relaxed text-gray-700">
              Founded in 2010, DCRalph Enterprise began as a small startup with
              a mission to make quality IT services accessible to everyone. Our
              founder, Ralph Doe, saw a gap in the market for reliable and
              affordable tech support, and set out to build a company that could
              fill that need.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-gray-700">
              Over the years, we&apos;ve grown from a one-person operation to a team
              of dedicated professionals. Our commitment to staying at the
              forefront of technological advancements has allowed us to expand
              our services and adapt to the changing needs of our clients.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-gray-700">
              Today, we are proud to have served hundreds of satisfied customers
              and established ourselves as a trusted name in the IT industry.
              Our journey is a testament to our unwavering dedication to
              excellence and our belief in the power of technology to transform
              lives.
            </p>
          </CardContent>
        </Card>
      </div>
      <Footer />
    </main>
  );
}
