import educationData from '@/data/education.json';

export default function Education() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 flex items-center gap-3">
          <span className="w-8 h-8 bg-blue-600 text-white rounded-lg flex items-center justify-center text-sm">Edu</span>
          教育经历
        </h2>

        <div className="space-y-8">
          {educationData.map((edu, index) => (
            <div key={index} className="relative pl-8 border-l-2 border-gray-100 pb-2 last:border-0">
              {/* 时间轴小圆点 */}
              <div className="absolute -left-[9px] top-0 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-sm"></div>
              
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                <div>
                  <h3 className="text-xl font-bold text-gray-800">{edu.school}</h3>
                  <p className="text-blue-600 font-medium">{edu.degree}</p>
                </div>
                <span className="text-sm font-medium text-gray-400 bg-gray-50 px-3 py-1 rounded-full">
                  {edu.duration}
                </span>
              </div>
              <p className="mt-4 text-gray-600 leading-relaxed italic">
                {edu.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}