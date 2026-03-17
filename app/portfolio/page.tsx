import portfolioData from '@/data/portfolio.json';

export default function PortfolioPage() {
  return (
    <main className="min-h-screen py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* 页面头部 */}
        <div className="mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">作品集 / Portfolio</h1>
          <p className="text-gray-500 text-lg">
            这里展示了我近年来的代表性项目、科研成果以及开源贡献。
          </p>
        </div>

        {/* 作品网格 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioData.map((project, index) => (
            <div 
              key={index} 
              className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* 图片区域 - 暂时用灰色背景代替真实图片 */}
              <div className="aspect-video bg-gray-200 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-medium">
                  项目截图 16:9
                </div>
                {/* 悬浮时的遮罩层 */}
                <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/10 transition-colors duration-300"></div>
              </div>

              {/* 内容区域 */}
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 bg-gray-100 text-gray-500 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3">
                  {project.description}
                </p>

                {/* 链接按钮 */}
                <div className="flex items-center gap-4">
                  {project.github && (
                    <a 
                      href={project.github} 
                      target="_blank" 
                      className="text-sm font-semibold text-gray-900 hover:text-blue-600 flex items-center gap-1"
                    >
                      GitHub →
                    </a>
                  )}
                  {project.demo && (
                    <a 
                      href={project.demo} 
                      target="_blank" 
                      className="text-sm font-semibold text-blue-600 hover:text-blue-700 flex items-center gap-1"
                    >
                      查看详情/Demo →
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}