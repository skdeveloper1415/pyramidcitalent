import { services } from '../Industries/data'
import ServiceCard from '../Industries/Cards'

export default function IndustriesServe() {
  return (
    <section className="py-24 bg-[#111] flex flex-col items-center justify-center gap-16">
      <div className='text-white sticky top-20 flex items-center justify-center text-3xl font-bold'><h4>Industries We Serve</h4></div>
      <div className="max-w-7xl mx-auto px-6 space-y-10">
        {services.map((service) => (
          <ServiceCard
            key={service.id}
            service={service}
          />
        ))}
      </div>
    </section>
  )
}
