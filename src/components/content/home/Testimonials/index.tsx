const Testimonials = () => (
  <section id="testimonials" className="py-16 bg-gradient-to-r from-[#ffa53c] to-[#ff6a13]">
    <div className="container mx-auto px-5 sm:px-6 lg:px-10 text-center">
      <h2 className="text-3xl font-bold mb-8 text-white">What Our Customers Are Saying</h2>
      <div className="flex flex-col md:flex-row justify-center items-center gap-6">
        <div className="bg-white p-6 rounded-lg shadow-lg w-full md:w-1/3">
          <p className="mb-4">
            "Cuisine Cart has truly brought me closer to home! I love the home-cooked meals and the
            cultural stories behind them. The chefs are so talented and it's like having a little
            piece of my culture here with me!"
          </p>
          <p className="font-semibold">Ananya, International Student</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg w-full md:w-1/3">
          <p className="mb-4">
            "The meals are so flavorful and healthy! I’ve saved time, money, and I feel like I’m
            eating food from my own kitchen. I highly recommend this app to anyone craving authentic
            meals."
          </p>
          <p className="font-semibold">Carlos, Worker</p>
        </div>
      </div>
    </div>
  </section>
);

export default Testimonials;
