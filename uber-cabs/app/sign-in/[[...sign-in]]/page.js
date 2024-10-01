import { SignIn } from '@clerk/nextjs'
import Image from 'next/image';

export default function Page() {
  return (
    <>
    <div>
      {/* <Image src="/IMG_20240507_001136_131.jpg" width={1000} height={500}
      className="object-contain h-full w-full"/> */}
      <div className="flex items-center justify-center h-screen">
        <SignIn/>
      </div>
    </div>
    </>
);
}
