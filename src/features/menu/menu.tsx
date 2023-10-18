"use client"

import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { BarChartHorizontalBig } from "lucide-react";
import Link from "next/link";
import { Tooltip, TooltipProvider } from "@/components/ui/tooltip";
import { UserProfile } from "../user-profile";

export const MainMenu = () => {
  return (
    <TooltipProvider>
    <div className="flex gap-2 flex-col justify-between">
      <div className="flex gap-2 flex-col justify-between">
        <Link
          href="/"
          className="w-10 h-10 items-center justify-center flex"
          title="Home"
        >
          <Avatar rounded={false} className="">
            <AvatarImage src="/images/ai-icon.png" />
          </Avatar>
        </Link>
        <Tooltip content="Reporting">
        <Link
          href="/reporting"
          className="w-10 h-10 items-center justify-center flex rounded-full hover:bg-secondary"
          title="Reporting"
        >
          <BarChartHorizontalBig size={20} />
        </Link>
        </Tooltip>
      </div>
      <UserProfile />
    </div>
    </TooltipProvider>
  );
};
