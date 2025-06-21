import Image from 'next/image';

const team = [
  {
    name: 'Ava Thompson',
    experience: '14 Years Experience',
    photo: '/cam1.jpg',
  },
  {
    name: 'Liam Carter',
    experience: '5 Years Experience',
    photo: '/cam2.jpg',
  },
  {
    name: 'Sophia Lee',
    experience: '6 Years Experience',
    photo: '/cam3.jpg',
  },
  {
    name: 'Noah Patel',
    experience: '10 Years Experience',
    photo: '/cam4.jpg',
  },
  {
    name: 'Isla Martinez',
    experience: '16 Years Experience',
    photo: '/cam5.jpg',
  },
];

export default function PhotowiseTeam() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-12">Meet the Photowise Team</h2>
        <div className="flex flex-wrap justify-center gap-10">
          {team.map((member, index) => (
            <div key={index} className="flex flex-col items-center w-40">
              <div className="w-32 h-40 overflow-hidden rounded-full border-4 border-gray-200 shadow-lg">
                <Image
                  src={member.photo}
                  alt={member.name}
                  width={128}
                  height={160}
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="mt-4 text-lg font-semibold">{member.name}</h3>
              <p className="text-sm text-gray-500">{member.experience}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
