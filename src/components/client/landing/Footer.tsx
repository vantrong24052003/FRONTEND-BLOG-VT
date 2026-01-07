import Link from 'next/link';

const footerLinks = {
  policy: {
    title: 'Chính sách & Điều khoản',
    links: [
      { name: 'Chính sách bảo mật', href: '/privacy' },
      { name: 'Điều khoản', href: '/terms' },
    ],
  },
  products: {
    title: 'Sản phẩm',
    links: [
      { name: 'Khóa học', href: '/courses' },
      { name: 'Bài viết', href: '/blog' },
      { name: 'Ebook thôi miên nhà tuyển dụng', href: '/ebook' },
    ],
  },
  ecosystem: {
    title: 'Hệ sinh thái',
    links: [
      { name: 'Facebook của Dư Thanh Được', href: 'https://facebook.com' },
      { name: 'Youtube Được Dev', href: 'https://youtube.com' },
      { name: 'Vietnam Web Dev Playground', href: 'https://facebook.com/groups' },
      { name: 'Github', href: 'https://github.com' },
      { name: 'Được Edu', href: 'https://duocedu.vn' },
    ],
  },
};

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0a0a0a] py-16">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 md:gap-8 md:grid-cols-2 lg:grid-cols-4 mb-12">
          {/* Policy Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">{footerLinks.policy.title}</h3>
            <ul className="space-y-2">
              {footerLinks.policy.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-[#a3a3a3] hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">{footerLinks.products.title}</h3>
            <ul className="space-y-2">
              {footerLinks.products.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-[#a3a3a3] hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Ecosystem Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">{footerLinks.ecosystem.title}</h3>
            <ul className="space-y-2">
              {footerLinks.ecosystem.links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-[#a3a3a3] hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* About */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Giới thiệu</h3>
            <p className="text-sm text-[#a3a3a3] leading-relaxed">
              Phát triển bởi Dư Thanh Được vào năm 2021, là blog cá nhân chia sẻ kiến thức IT, Marketing và cung cấp các
              khóa học chất lượng giúp mọi người level up kỹ năng của bản thân nhanh nhất.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col items-center justify-center gap-4 text-center">
            {/* Copyright */}
            <p className="text-sm text-[#737373]">
              Copyright © 2024{' '}
              <Link href="https://duocdev.vn" className="text-white hover:underline ml-1">
                Dư Thanh Được
              </Link>
            </p>

            {/* Credits */}
            <p className="text-sm text-[#737373]">
              Cảm ơn{' '}
              <a
                href="https://nextjs.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:underline"
              >
                Next.js
              </a>
              ,{' '}
              <a
                href="https://ui.shadcn.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:underline"
              >
                Shadcn UI
              </a>
              ,{' '}
              <a
                href="https://magicui.design"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:underline"
              >
                Magic UI
              </a>
              ,{' '}
              <a
                href="https://aceternityui.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:underline"
              >
                Aceternity UI
              </a>
              , đã giúp mình build website này
            </p>

            {/* DMCA Badge */}
            <a
              href="https://www.dmca.com/Protection/Status.aspx"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <img src="/badges/dmca-protected.png" alt="DMCA Protected" width={120} height={32} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
