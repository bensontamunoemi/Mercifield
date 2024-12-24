"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar, GlassWater, Home, MapPin, PartyPopper } from "lucide-react";
import { Container } from "@/components/ui/container";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Image from "next/image";

const navigation = [
  { name: "Home", href: "/", icon: Home },
  { name: "Services", href: "/services", icon: PartyPopper },
  { name: "Gallery", href: "/gallery", icon: GlassWater },
  { name: "Event Hall", href: "/event-hall", icon: Calendar },
  { name: "Contact", href: "/contact", icon: MapPin },
];

export function Navigation() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src={"./logo.png"}
              alt={"logo"}
              width={50}
              height={40}
              className="object-cover"
              priority
            />
            <span className="font-bold text-xl">MerciFIELD Events</span>
          </Link>
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              {navigation.map((item) => (
                <NavigationMenuItem key={item.name}>
                  <Link href={item.href} legacyBehavior passHref>
                    <NavigationMenuLink
                      className={cn(
                        navigationMenuTriggerStyle(),
                        "flex items-center gap-2",
                        pathname === item.href && "text-[#8C1832] font-bold"
                      )}
                    >
                      <item.icon className="h-4 w-4" />
                      {item.name}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
          <Link
            href={"/contact"}
            className="bg-[#FAC611]  text-black hover:text-[#8C1832] text-center h-11 rounded-md px-8 inline-flex items-center justify-center whitespace-nowrap  text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
          >
            Plan Your Event
          </Link>
        </div>
      </Container>
    </header>
  );
}
