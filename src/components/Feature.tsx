import { CircleCheckBig } from "lucide-react";

function Feature({ name = "easy" }: { name: string }) {
  return (
    <div className='flex gap-2 items-center'>
      <CircleCheckBig className='h-6 w-6 text-info' />
      <p className='text-base font-medium '>{name}</p>
    </div>
  );
}

export default Feature;
