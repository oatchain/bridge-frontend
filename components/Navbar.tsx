import Link from "next/link";
import { WalletButton } from "@/components/WalletButton";
import { NavbarLogo } from "./NavbarLogo";
import Image from "next/image";

export function Navbar() {
  return (
    <div className="flex container mx-auto py-4 justify-between items-center">
      <Link href="/" className="w-40 lg:w-48 text-white no-underline flex items-center gap-2">
        <Image
          src="/logo.png"
          alt="oat-chain"
          width={50}
          height={50}
        //   className="object-contain"
        />
        Oat Chain
      </Link>
      <WalletButton />
    </div>
  );
}
