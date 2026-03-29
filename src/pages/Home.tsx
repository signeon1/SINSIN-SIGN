import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, PenTool, Wrench, ShieldCheck, Search } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" 
            alt="Corporate Building" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-blue-900/60 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-20">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight tracking-tight"
          >
            60년의 흔들림 없는 신뢰,<br />
            공간의 가치를 깨우는 압도적 기획력.
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-200 mb-10 max-w-3xl mx-auto leading-relaxed"
          >
            1960년부터 대한민국의 거리를 빛내온 SINSIN SIGN.<br className="hidden md:block" />
            실내외 사인물의 기획부터 디자인, 제작, 완벽한 설치까지 브랜드의 비전을 현실로 만듭니다.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link 
              to="/contact" 
              className="inline-flex items-center gap-2 bg-orange-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-orange-700 transition-all hover:scale-105 shadow-lg shadow-orange-600/30"
            >
              프로젝트 문의하기 <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Greeting Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                끊임없는 연구와<br />
                <span className="text-orange-600">도전정신</span>을 지향합니다
              </h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                최고의 기업으로 나아가기 위한 노력.<br />
                발빠르게 발전해가는 사회에서 생각과 발상을 높여 사람을 먼저 생각하는 기술로, 보다 윤택하고 신선하게 변화시키기 위해 모든 역량을 집중하고 있습니다.
              </p>
              <Link to="/about" className="text-orange-600 font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                회사소개 자세히 보기 <ArrowRight size={16} />
              </Link>
            </div>
            <div className="flex-1 relative">
              <div className="absolute -inset-4 bg-orange-100 rounded-2xl transform rotate-3"></div>
              <img 
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32d7?q=80&w=1932&auto=format&fit=crop" 
                alt="Business Handshake" 
                className="relative rounded-2xl shadow-xl w-full object-cover h-[400px]"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why SINSIN SIGN (Our Business) */}
      <section className="py-24 bg-zinc-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-orange-500 font-bold tracking-widest text-sm mb-2">WHY SINSIN SIGN?</h2>
            <h3 className="text-3xl md:text-4xl font-bold">우리의 핵심 경쟁력</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center group">
              <div className="w-20 h-20 mx-auto bg-zinc-800 rounded-full flex items-center justify-center mb-6 group-hover:bg-orange-600 transition-colors duration-300">
                <ShieldCheck size={32} className="text-white" />
              </div>
              <h4 className="text-xl font-bold mb-4">Since 1960</h4>
              <p className="text-zinc-400 leading-relaxed">
                세월이 증명하는 기술력과 무수히 쌓인 현장 노하우로 어떤 환경에서도 최적의 결과물을 만들어냅니다.
              </p>
            </div>
            
            <div className="text-center group">
              <div className="w-20 h-20 mx-auto bg-zinc-800 rounded-full flex items-center justify-center mb-6 group-hover:bg-orange-600 transition-colors duration-300">
                <Wrench size={32} className="text-white" />
              </div>
              <h4 className="text-xl font-bold mb-4">All-in-One Solution</h4>
              <p className="text-zinc-400 leading-relaxed">
                외주 없이 진행되는 기획, 디자인, 직접 제작 및 안전한 시공까지 원스톱 서비스를 제공합니다.
              </p>
            </div>
            
            <div className="text-center group">
              <div className="w-20 h-20 mx-auto bg-zinc-800 rounded-full flex items-center justify-center mb-6 group-hover:bg-orange-600 transition-colors duration-300">
                <PenTool size={32} className="text-white" />
              </div>
              <h4 className="text-xl font-bold mb-4">Masterpiece Design</h4>
              <p className="text-zinc-400 leading-relaxed">
                단순한 간판을 넘어 건축물과 조화되는 마스터피스 설계로 브랜드의 품격을 한 단계 높입니다.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
