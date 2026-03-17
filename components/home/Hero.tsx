import personalData from '@/data/personal.json';

export default function Hero() {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24">
      <div className="max-w-5xl mx-auto px-6 flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        
        {/* 左侧文字区 */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
            Hi, 我是 <span className="text-blue-600">{personalData.name.split(' ')[0]}</span>
          </h1>
          <h2 className="text-xl md:text-2xl font-medium text-gray-600 mb-6">
            {personalData.title}
          </h2>
          <p className="text-gray-600 leading-relaxed mb-8 max-w-2xl text-lg">
            {personalData.bio}
          </p>

          {/* 研究方向标签 */}
          <div className="mb-8">
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
              研究方向 / Research Interests
            </h3>
            <div className="flex flex-wrap justify-center md:justify-start gap-2">
              {personalData.researchInterests.map((interest, index) => (
                <span 
                  key={index} 
                  className="px-4 py-2 bg-blue-50 text-blue-700 text-sm font-medium rounded-lg border border-blue-100"
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* 右侧头像区 */}
        <div className="w-48 h-48 md:w-64 md:h-64 flex-shrink-0">
          <img src="/avatar.png" alt="头像" className="w-full h-full object-cover rounded-full border-4 border-white shadow-xl" />
        </div>

      </div>
    </section>
  );
}