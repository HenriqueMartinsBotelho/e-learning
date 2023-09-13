import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import NavBarLinks from "./nav-bar-links";
import { NAV_BAR_ITEMS } from "@/constants";

import { Button } from "../ui/button";
import { Menu } from "lucide-react";
import NavBarRight from "./nav-bar-right";

const ResponsiveNavSidebar = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button>
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent
        side="left"
        className="max-w-[400px] min-h-screen flex flex-col justify-between bg-deep-blue-200"
      >
        <div>HMB</div>
        <NavBarLinks
          links={NAV_BAR_ITEMS}
          className="flex flex-col  gap-4 text-white"
        />
        <NavBarRight />
      </SheetContent>
    </Sheet>
  );
};

export default ResponsiveNavSidebar;
