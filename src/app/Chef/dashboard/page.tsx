"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/chefcard";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/cheftabs";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function ChefDashboard() {
  return (
    <div className="p-6 space-y-6 mx-20">
      {/* Top Section */}
      <div className="grid grid-cols-2 gap-6">
        <div className="flex flex-col space-y-6">
          <Card>
            <CardHeader>Total No of Orders Received</CardHeader>
            <CardContent className="text-2xl font-bold">10</CardContent>
          </Card>
          <Card>
            <CardHeader>Total No of Subscribers</CardHeader>
            <CardContent className="text-2xl font-bold">10</CardContent>
          </Card>
        </div>
        <div className="flex flex-col space-y-6">
          <Card className="h-full">
            <CardHeader>Total Earnings</CardHeader>
            <CardContent className="text-lg border-b-2 mb-3">
              <p className="text-2xl font-bold mb-3">$5000</p>
            </CardContent>
            <CardHeader>Last Payment Received</CardHeader>
            <CardContent className="text-lg">
              <p className="text-2xl font-bold">$500</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Orders Section */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Your Orders</h2>
        <Tabs defaultValue="incoming" className="w-full">
          <TabsList className="flex justify-start space-x-4">
            <TabsTrigger value="incoming">Incoming</TabsTrigger>
            <TabsTrigger value="inpreparation">In Preparation</TabsTrigger>
            <TabsTrigger value="completed">Completed</TabsTrigger>
          </TabsList>

          <TabsContent value="incoming">
            <div className="grid grid-cols-3 gap-4">
              {[1].map((_, index) => (
                <Card key={index} className="p-3 space-y-3">
                  <Image
                    src="/images/order-history.jpg"
                    alt="Dish Image"
                    width={150}
                    height={100}
                    className="rounded-lg w-full"
                  />
                  <CardHeader>Biryani</CardHeader>
                  <CardContent className="text-gray-600">
                    Spicy and flavorful chicken biryani.
                  </CardContent>
                  <Button className="w-full bg-orange-500 hover:bg-orange-600">
                    View More
                  </Button>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="inpreparation">
            <div className="flex items-center justify-center h-40 text-gray-500">
              No In Preparation Orders
            </div>
          </TabsContent>

          <TabsContent value="completed">
            <div className="flex items-center justify-center h-40 text-gray-500">
            No Completed Orders
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
