import { services } from '@/utils/services';

const Services = () => {
  return (
    <div id="services" className="relative z-20 px-4 py-8 lg:px-16">
      <h1 className="mb-2 mt-5 text-lg font-bold text-text lg:text-xl">
        Pourquoi l&apos;APS
      </h1>
      <div className="mt-12 grid grid-cols-3 gap-16">
        {services.map((service, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center gap-8 rounded-md bg-[#F5F5F5] p-8"
            >
              <img
                src={service.icon}
                alt={`${service.name} Logo`}
                className="h-20 w-20"
              />

              <p className="text-sm">{service.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export { Services };
