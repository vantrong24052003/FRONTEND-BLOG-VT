import Link from 'next/link';

const achievements = [
  {
    icon: '🎓',
    title: 'Tốt nghiệp Đại học Bách khoa Đà Nẵng',
    description: 'chuyên ngành An toàn thông tin',
  },
  {
    icon: '🏆',
    title: 'Nhận 2 học bổng khi là sinh viên ĐH Bách',
    description: 'Khoa Đà Nẵng',
  },
  {
    icon: '💵',
    title: 'Sinh viên năm 3 kiếm được 1000$ chỉ trong 3 ngày nhờ code tool, và mình chỉ dành 2 giờ để code nó',
    description: '',
    link: {
      text: 'Báo Cafebiz viết về mình',
      href: 'https://cafebiz.vn',
    },
  },
  {
    icon: '🏢',
    title: 'Từng làm việc tại các cty lớn như như RionLab,',
    description: 'NeoLab, KMS',
  },
  {
    icon: '📹',
    title: 'Youtube: 40k views/tháng',
    description: 'Blog: 30k views/tháng với nhiều bài viết Top 1 google',
    highlighted: true,
  },
  {
    icon: '📚',
    title: '3 khóa học, 2000+ học viên đã đăng ký.',
    description: 'Tỉ lệ hài lòng trên 95% và hơn 80% học viên sẵn sàng mua các khóa học tiếp theo',
  },
];

export function Achievements() {
  return (
    <section className="relative py-20 bg-[#0a0a0a]">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4">
            Tôi không <span className="text-[#f5f5f5]/80">p&apos;hết</span>
          </h2>
          <p className="text-3xl md:text-4xl font-semibold text-white mb-6">Bạn cũng thế</p>
          <p className="text-lg text-white/90 leading-relaxed max-w-2xl mx-auto">
            Mình từng học lại các môn đại cương,{' '}
            <span className="text-white/70">
              suýt rớt môn lập trình cơ bản khi còn là sinh viên ĐH Bách Khoa Đà Nẵng. Đã có lúc mình nghĩ rằng mình
              không thể theo đuổi được ngành IT. Nhưng rồi khoảnh
            </span>{' '}
            khoắc này đã thay đổi cuộc đời mình mãi mãi,{' '}
            <span className="relative inline-block">
              <span className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg opacity-100 blur-sm" />
              <span className="relative px-2 py-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg text-white font-medium">
                đó là tìm được một mentor giỏi.
              </span>
            </span>
            <br />
            Và phần còn lại là lịch sử
          </p>
        </div>

        {/* Achievement Cards */}
        <div className="grid gap-4 md:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className={`group relative bg-[#0a0a0a] border border-[#262626] rounded-2xl p-6 hover:border-white/20 transition-all duration-300 ${
                achievement.link ? 'hover:shadow-lg hover:shadow-purple-500/10' : ''
              }`}
            >
              {/* Icon */}
              <div className="text-4xl mb-4">{achievement.icon}</div>

              {/* Content */}
              <h3 className="text-lg font-bold text-white leading-relaxed mb-2">{achievement.title}</h3>
              {achievement.description && (
                <p className={`text-white/80 ${achievement.highlighted ? 'font-semibold' : ''}`}>
                  {achievement.description}
                </p>
              )}

              {/* Link Button */}
              {achievement.link && (
                <Link
                  href={achievement.link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-4 px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full text-sm text-white transition-all duration-200 group-hover:scale-105"
                >
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                  {achievement.link.text}
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
