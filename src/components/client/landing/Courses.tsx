import Image from 'next/image';
import Link from 'next/link';

const courses = [
  {
    id: 1,
    title: 'React.js Super | Dự án Clone Shopee',
    price: '1.390.000₫',
    description: 'Trở thành React.js Developer trong 7 ngày với mức thu nhập 20 triệu/tháng',
    image: '/courses/react-shopee.jpg',
    slug: 'react-super',
  },
  {
    id: 2,
    title: 'Node.js Super | Dự án Twitter API',
    price: '1.590.000₫',
    description: 'Giúp bạn học cách phân tích, thiết kế, deploy 1 API Backend bằng Node.js',
    image: '/courses/node-twitter.jpg',
    slug: 'node-super',
  },
  {
    id: 3,
    title: 'Next.js Super | Dự án Quản lý quán ăn, gọi món bằng QR',
    price: '1.590.000₫',
    description: 'Mình sẽ chia sẻ từ A-Z kiến thức về Next.js, thứ giúp mình kiếm hơn 1 tỉ/năm',
    image: '/courses/next-qr.jpg',
    slug: 'next-super',
  },
  {
    id: 4,
    title: 'CI/CD Deploy React, Node, Next lên VPS',
    price: '790.000₫',
    description: 'Thiết kế CI/CD và deploy mọi SPA như React, Vue, Angular hoặc Next, Nuxt, Node lên VPS',
    image: '/courses/ci-cd.jpg',
    slug: 'ci-cd-deploy',
  },
];

function CourseCard({
  course,
}: {
  course: {
    title: string;
    price: string;
    description: string;
    image: string;
    slug: string;
  };
}) {
  return (
    <div className="group bg-[#0a0a0a] border border-[#262626] rounded-lg overflow-hidden hover:border-white/20 transition-all duration-300 hover:shadow-xl hover:shadow-black/50">
      {/* Course Image */}
      <div className="relative h-48 overflow-hidden bg-gradient-to-br from-white/5 to-white/10">
        <Image
          src={course.image}
          alt={course.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent" />
      </div>

      {/* Course Content */}
      <div className="p-6 space-y-4">
        {/* Title */}
        <h3 className="text-xl font-bold text-white leading-tight">{course.title}</h3>

        {/* Price */}
        <p className="text-lg text-white font-medium">{course.price}</p>

        {/* Description */}
        <p className="text-sm text-[#a3a3a3] leading-relaxed">{course.description}</p>

        {/* CTA Button */}
        <Link
          href={`/courses/${course.slug}`}
          className="inline-flex items-center gap-2 w-full px-4 py-3 bg-[#0a0a0a] border border-white/10 rounded-lg hover:border-white/20 hover:bg-white/5 transition-all duration-200 group-hover:border-emerald-500/50"
        >
          <span className="text-sm font-semibold text-white">Xem thêm</span>
          <svg
            className="w-4 h-4 text-white/60 group-hover:text-white group-hover:translate-x-0.5 transition-all"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </Link>
      </div>
    </div>
  );
}

export function Courses() {
  return (
    <section className="py-20 bg-[#0a0a0a]">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white">Các khóa học của mình</h2>
        </div>

        {/* Courses Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
}
