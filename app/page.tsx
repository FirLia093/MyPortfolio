import Hero from "@/components/home/Hero";
import Education from "@/components/home/Education"; // 引入教育组件

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Education /> {/* 紧跟在 Hero 后面 */}
    </main>
  );
}