import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import HistoryCard from "@/components/diner/HistoryCard";
import ChefCard from "@/components/diner/ChefCard";
import ChefRecommendations from "@/components/diner/ChefRecom";

// Sample Data
const orderHistory = [
  {
    itemName: "Biryani",
    chefName: "Mohammed",
    quantity: 1,
    imageUrl: "/images/order-history.jpg",
  },
  {
    itemName: "Breakfast Service",
    chefName: "Mohammed",
    quantity: 1,
    imageUrl: "/images/chef-recom.jpg",
  },
];

const favoriteChefs = [
  {
    name: "Mohammed",
    cuisine: "Indian",
    rating: 5,
    imageUrl: "/images/cook-1.jpg",
  },
  {
    name: "Alex",
    cuisine: "Italian",
    rating: 3,
    imageUrl: "/images/cook-2.jpg",
  },
];

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-[#FFF8EF] p-6 md:px-12 lg:px-24 py-6">
      {/* Welcome Section */}
      <div className="mb-8 border-b border-gray-200 pb-4 text-right">
        <h1 className="text-2xl font-bold">Welcome, Full Name</h1>
      </div>

      {/* Main Content - Two Column Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        {/* Subscription Plan */}
        <div>
          <h2 className="text-xl font-bold mb-4">Subscription Plan</h2>
          <Card className="overflow-hidden">
            <div className="flex flex-col md:flex-row">
              {/* Image Container - Makes it Responsive */}
              <div className="w-full md:w-2/5 relative">
                <div className="w-full h-full">
                  <Image
                    src="/images/sub-plan.jpg"
                    alt="Indian Food"
                    width={200}
                    height={200}
                    className="w-full h-full object-contain md:object-cover border rounded-xl"
                  />
                </div>
              </div>

              {/* Subscription Details */}
              <div className="p-4 flex-1">
                <div className="space-y-2">
                  <div>
                    <span className="font-semibold">Chef Name:</span> Prasanth
                    Food Services
                  </div>
                  <div>
                    <span className="font-semibold">Subscription type:</span>{" "}
                    Weekly
                  </div>
                  <div>
                    <span className="font-semibold">Subscription details:</span>{" "}
                    (Mon - Fri) included
                  </div>
                  <div>15 Rotis & Paneer or Dal of your choice.</div>
                  <div>
                    <span className="font-semibold">Price:</span> 38$ (weekly)
                  </div>
                  <div className="pt-2 space-y-2">
                    <Button className="w-full bg-[#F39C12] hover:bg-[#E67E22] text-white">
                      View Subscription
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full border-[#F39C12] text-[#F39C12] hover:bg-[#FFF8EF] hover:text-[#E67E22]"
                    >
                      Cancel Subscription
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Chef Recommendations */}
        <ChefRecommendations />
      </div>

      {/* Order History & Favorite Chefs */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h2 className="text-xl font-bold mb-4">Order History</h2>
          <Card className="p-4 max-h-80 overflow-y-auto">
            {orderHistory.map((order, index) => (
              <HistoryCard key={index} {...order} />
            ))}
          </Card>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-4">Favourite Chefs</h2>
          <Card className="p-4 max-h-80 overflow-y-auto">
            {favoriteChefs.map((chef, index) => (
              <ChefCard key={index} {...chef} />
            ))}
          </Card>
        </div>
      </div>
    </div>
  );
}
