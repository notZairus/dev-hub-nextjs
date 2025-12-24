import Image from "next/image";

export default function InfoIcon({
  icon,
  info,
}: {
  icon: string;
  info: string;
}) {
  return (
    <div className="flex gap-4">
      <Image
        src={icon}
        alt={`${info} icon`}
        height={24}
        width={24}
        color={"#FFFFFF"}
      />
      <p>{info}</p>
    </div>
  );
}
