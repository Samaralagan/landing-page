const Pricing = () => {
  return (
    <section className="py-16 px-6 bg-secondary text-center">
      <h2 className="text-3xl font-semibold text-accent">Pricing Plans</h2>
      <div className="mt-6 flex justify-center gap-8">
        <div className="bg-primary p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold text-accent">Basic</h3>
          <p className="text-gray-400 mt-2">$19/month</p>
        </div>
        <div className="bg-primary p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold text-accent">Pro</h3>
          <p className="text-gray-400 mt-2">$49/month</p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
