import Image from "next/image";
import Link from "next/link";

export function BrandMark() {
  return (
    <Link href="/" className="flex items-center">
      <Image
        src="/brand/gerrayd-logo-cropped.png"
        alt="Magazine Gerrayd"
        width={420}
        height={154}
        className="h-[82px] w-auto md:h-[94px]"
        priority
      />
    </Link>
  );
}
