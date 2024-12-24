import Link from "next/link";
import {
  Facebook,
  Instagram,
  Twitter,
  Calendar,
  GlassWater,
  Home,
  MapPin,
  PartyPopper,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Container } from "@/components/ui/container";

export function Footer() {
  return (
    <>
      {/* Main Footer - Visible on Web */}
      <footer className="bg-[#8C1832] text-white hidden sm:block">
        <Container className="py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Footer Content */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold">MerciFIELD Events</h3>
              <p className="text-sm text-gray-300">
                Creating unforgettable moments with elegance and style.
              </p>
              <div className="flex space-x-4">
                <Link
                  target="_blank"
                  href="https://www.facebook.com/share/MGuUhdu9eyVaeuzx/?mibextid=wwXIfr"
                  className="hover:text-[#FAC611]"
                >
                  <Facebook className="h-5 w-5" />
                </Link>
                <Link
                  target="_blank"
                  href="https://www.instagram.com/mercifield_events?igsh=ZHF4eXlyOWE4NjJi"
                  className="hover:text-[#FAC611]"
                >
                  <Instagram className="h-5 w-5" />
                </Link>
                <Link href="#" className="hover:text-[#FAC611]">
                  <Twitter className="h-5 w-5" />
                </Link>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/services" className="hover:text-[#FAC611]">
                    Our Services
                  </Link>
                </li>
                <li>
                  <Link href="/gallery" className="hover:text-[#FAC611]">
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link href="/event-hall" className="hover:text-[#FAC611]">
                    Event Hall
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-[#FAC611]">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/privacy" className="hover:text-[#FAC611]">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="hover:text-[#FAC611]">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Newsletter</h3>
              <p className="text-sm text-gray-300 mb-4">
                Subscribe to our newsletter for updates and special offers.
              </p>
              <div className="flex space-x-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                />
                <Button className="bg-[#FAC611] hover:bg-[#EB3224] text-black hover:text-white">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-white/20 text-center text-sm text-gray-300">
            <p>
              © {new Date().getFullYear()} MerciFIELD Events. All rights
              reserved.
            </p>
          </div>
        </Container>
      </footer>

      {/* Fixed Bottom Navigation - Visible Only on Mobile */}
      <div className="fixed bottom-0 left-0 right-0 bg-[#8C1832] text-white flex justify-around items-center py-2 sm:hidden z-50">
        <Link href="/" className="flex flex-col items-center">
          <Home className="h-6 w-6" />
          <span className="text-xs">Home</span>
        </Link>
        <Link href="/services" className="flex flex-col items-center">
          <PartyPopper className="h-6 w-6" />
          <span className="text-xs">Services</span>
        </Link>
        <Link href="/event-hall" className="flex flex-col items-center">
          <Calendar className="h-6 w-6" />
          <span className="text-xs">Event Hall</span>
        </Link>
        <Link href="/gallery" className="flex flex-col items-center">
          <GlassWater className="h-6 w-6" />
          <span className="text-xs">Gallery</span>
        </Link>
        <Link href="/contact" className="flex flex-col items-center">
          <MapPin className="h-6 w-6" />
          <span className="text-xs">Contact</span>
        </Link>
      </div>
    </>
  );
}
