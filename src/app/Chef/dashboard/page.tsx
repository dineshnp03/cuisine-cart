"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/chefcard";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/cheftabs";
import { Button } from "@/components/ui/button";

export default function ChefDashboard() {
  return (
    <div className="p-6 space-y-6 mx-20">
      {/* Top Section */}
      <div className="grid grid-cols-2 gap-6">
        <div className="flex flex-col space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Total No of Orders Received</CardTitle>
            </CardHeader>
            <CardContent className="text-2xl font-bold">10</CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Total No of Subscribers</CardTitle>
            </CardHeader>
            <CardContent className="text-2xl font-bold">10</CardContent>
          </Card>
        </div>
        <div className="flex flex-col space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Total Earnings</CardTitle>
            </CardHeader>
            <CardContent className="text-lg border-b-2 mb-3">
              <p className="text-2xl font-bold mb-3">$5000</p>
            </CardContent>
            <CardHeader>
              <CardTitle>Last Payment Received</CardTitle>
            </CardHeader>
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
            <Card>
              <CardHeader>
                <CardTitle>Biryani</CardTitle>
              </CardHeader>
              <CardContent>
                <Button>View More</Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="inpreparation">
            <div className="flex items-center justify-center h-40 text-gray-500">
              No data
            </div>
          </TabsContent>

          <TabsContent value="completed">
            <div className="flex items-center justify-center h-40 text-gray-500">
              No data
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
