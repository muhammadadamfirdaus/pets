import React from "react";
import Image from "next/image";
import Button from "./Button";

export default function Partners() {
  return (
    <div className="py-16 px-4 md:px-8 lg:px-32">
      <div className="flex justify-between items-center">
        <div>
          <h3>
            Proud to be part of <span className="font-bold text-2xl">Pet Sellers</span>
          </h3>
        </div>
        <Button type="more" first>
          View all our sellers
        </Button>
      </div>

      <div className="flex items-center mt-4 overflow-hidden">
        <div className="flex grow shrink basis-auto h-auto">
          <Image src="/images/partners/partner-1.png" width={88} height={64} className="w-full h-auto" alt="Partner 1" />
        </div>
        <div className="flex grow shrink basis-auto h-auto">
          <Image src="/images/partners/partner-2.png" width={88} height={64} className="w-full h-auto" alt="Partner 2" />
        </div>
        <div className="flex grow shrink basis-auto h-auto">
          <Image src="/images/partners/partner-3.png" width={88} height={64} className="w-full h-auto" alt="Partner 3" />
        </div>
        <div className="flex grow shrink basis-auto h-auto">
          <Image src="/images/partners/partner-4.png" width={88} height={64} className="w-full h-auto" alt="Partner 4" />
        </div>
        <div className="flex grow shrink basis-auto h-auto">
          <Image src="/images/partners/partner-5.png" width={88} height={64} className="w-full h-auto" alt="Partner 5" />
        </div>
        <div className="flex grow shrink basis-auto h-auto">
          <Image src="/images/partners/partner-6.png" width={88} height={64} className="w-full h-auto" alt="Partner 6" />
        </div>
        <div className="flex grow shrink basis-auto h-auto">
          <Image src="/images/partners/partner-7.png" width={88} height={64} className="w-full h-auto" alt="Partner 7" />
        </div>
      </div>
    </div>
  );
}
