export default function ChefLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex">
      <aside className="w-64 bg-gray-200 p-4">
        <h2 className="font-bold mb-4 text-xl">Chef Dashboard</h2>
        <nav className="space-y-2">
          <a href="/chef/dishes" className="block text-blue-600">
            Manage Dishes
          </a>
          <a href="/chef/meals" className="block text-blue-600">
            Manage Meals
          </a>
        </nav>
      </aside>
      <main className="flex-1 p-4">{children}</main>
    </div>
  );
}
