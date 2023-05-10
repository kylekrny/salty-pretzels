import Image from "next/image";
import event from "@/images/event.jpg"

export function ImageSection () {
    return (
      <div className="xl:mx-auto xl:max-w-7xl xl:px-8 mb-12">
        <Image
          src={event}
          alt=""
          width={500}
          height={100}
          className="aspect-[5/2] w-full object-cover xl:rounded-3xl"
        />
      </div>
    )
}