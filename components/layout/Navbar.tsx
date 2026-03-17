import Link from 'next/link';
import personalData from '@/data/personal.json';

export default function Navbar() {
  return (
    // 使用 fixed 让导航栏固定在顶部，backdrop-blur 制造高级的毛玻璃模糊效果
    <nav className="fixed w-full top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* 左侧：Logo 或 名字 */}
        <Link href="/" className="text-xl font-bold text-gray-800 hover:text-blue-600 transition-colors">
          {personalData.name}
        </Link>

        {/* 右侧：导航链接 */}
        <div className="flex items-center gap-6">
          <Link href="/" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">
            主页
          </Link>
          <Link href="/experience" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">
            经历
          </Link>
          <Link href="/portfolio" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">
            作品集
          </Link>
          
          {/* 简历下载按钮 */}
          <a 
            href={personalData.resumeUrl}
            target="_blank"
            rel="noopener noreferrer" 
            className="px-4 py-2 text-sm font-medium text-white bg-gray-900 rounded-full hover:bg-gray-700 transition-colors shadow-sm"
          >
            查看简历
          </a>
        </div>
      </div>
    </nav>
  );
}