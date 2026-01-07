import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <main className='bg-red-500'>
        <Image src="/next.svg" alt="Next.js logo" width={100} height={20} priority />
        <div>
          <h1>Non-opinionated TypeScript starter for Next.js</h1>
          <p>Highly scalable foundation with the best DX. All the tools you need to build your Next project.</p>
        </div>
        <div>
          <a href="https://joaopedro.dev" target="_blank" rel="noreferrer">
            Created by Văn Trọng
          </a>
        </div>
      </main>
    </div>
  );
}
