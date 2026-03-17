import experienceData from '@/data/experience.json';

export default function ExperiencePage() {
  return (
    <main className="min-h-screen py-20 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        {/* 页面标题 */}
        <div className="mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">经历 / Experience</h1>
          <p className="text-gray-500 text-lg">
            项目经历与科研历程
          </p>
        </div>

        {/* 经历列表 */}
        <div className="space-y-12">
          {experienceData.map((exp, index) => (
            <div key={index} className="group relative">
              <div className="flex flex-col md:flex-row md:justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
                    {exp.company}
                  </h3>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-lg font-medium text-gray-600">{exp.role}</span>
                    <span className="text-gray-300">|</span>
                    <span className="text-gray-500">{exp.location}</span>
                  </div>
                </div>
                <span className="mt-2 md:mt-0 px-3 py-1 bg-gray-100 text-gray-600 text-sm font-medium rounded-md">
                  {exp.period}
                </span>
              </div>

              {/* 详细描述描述 (点状列表) */}
              <ul className="list-disc list-outside ml-5 space-y-2 text-gray-600">
                {exp.description.map((item, i) => (
                  <li key={i} className="leading-relaxed">
                    {item}
                  </li>
                ))}
              </ul>

              {/* 技术栈标签 */}
              <div className="mt-6 flex flex-wrap gap-2">
                {exp.tags.map((tag, i) => (
                  <span 
                    key={i} 
                    className="text-xs font-semibold px-2 py-1 bg-gray-50 text-gray-400 rounded border border-gray-100"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              {/* 分割线（最后一条不显示） */}
              {index !== experienceData.length - 1 && (
                <div className="mt-12 border-b border-gray-50"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}