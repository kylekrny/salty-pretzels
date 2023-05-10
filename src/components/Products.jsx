import pretzels from "@/images/pretzels.jpg"
import pretzels2 from "@/images/pretzels2.jpg"
import Image from "next/image"

const people = [
  {
    name: 'Emma Dorsey',
    role: 'Senior Developer',
    imageUrl: pretzels,
    bio: 'Praesentium iure error aliquam voluptas ut libero. Commodi placeat sit iure nulla officiis. Ut ex sit repellat tempora. Qui est accusamus exercitationem natus ut voluptas. Officiis velit eos ducimus.',
    twitterUrl: '#',
    linkedinUrl: '#',
  },
  // More people...
]

export function Products() {
  return (
    <div className="bg-white py-24 md:py-32 lg:py-40">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          products
        </h2>
        <div className="mx-auto hidden max-w-2xl lg:mx-0"></div>
        <ul className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-20 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:gap-x-8 xl:col-span-12">
          <li>
            <Image
              className="aspect-[3/2] w-full rounded-2xl object-cover"
              src={pretzels}
              alt=""
            />
            <h3 className="mt-6 text-lg font-semibold leading-8 text-[#e56b6f]">
              Soft Pretzels
            </h3>
            <p className="mt-4 text-base leading-7 text-gray-600">
              Pretzel description
            </p>
          </li>
          <li>
            <Image
              className="aspect-[3/2] w-full rounded-2xl object-cover"
              src={pretzels2}
              alt=""
            />
            <h3 className="mt-6 text-lg font-semibold leading-8 text-[#e56b6f]">
              Pretzel Bites
            </h3>
            <p className="mt-4 text-base leading-7 text-gray-600">
              Pretzel description
            </p>
          </li>
        </ul>
      </div>
    </div>
  )
}
