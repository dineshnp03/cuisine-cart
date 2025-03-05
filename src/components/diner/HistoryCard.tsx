import Image from "next/image";
import { Button } from "@/components/ui/button";

interface HistoryCardProps {
  itemName: string;
  chefName: string;
  quantity: number;
  imageUrl: string;
}

export default function HistoryCard({ itemName, chefName, quantity, imageUrl }: HistoryCardProps) {
  return (
    <div className="flex border-b pb-4">
      <div className="w-24 h-24 flex-shrink-0">
        <Image src={imageUrl} alt={itemName} width={100} height={100} className="w-full h-full object-cover rounded-md" />
      </div>
      <div className="ml-4 flex-1">
        <div className="space-y-1">
          <div><span className="font-semibold">Item Name:</span> {itemName}</div>
          <div><span className="font-semibold">Chef Name:</span> {chefName}</div>
          <div><span className="font-semibold">Qty:</span> {quantity}</div>
        </div>
        <div className="flex justify-between mt-2">
          <Button className="bg-[#F39C12] hover:bg-[#E67E22] text-white text-sm">View more</Button>
          <Button variant="outline" className="border-[#F39C12] text-[#F39C12] hover:bg-[#FFF8EF] hover:text-[#E67E22] text-sm">
            Reorder
          </Button>
        </div>
      </div>
    </div>
  );
}