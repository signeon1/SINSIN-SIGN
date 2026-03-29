import React from 'react';
import { motion } from 'motion/react';
import { Lightbulb, PenTool, HardHat } from 'lucide-react';

export default function Service() {
  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <div className="bg-zinc-900 py-24 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-white mb-6"
        >
          디자인부터 시공까지,<br />
          <span className="text-orange-500">빈틈없는 SINSIN만의 프로세스</span>
        </motion.h1>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:-translate-y-2 transition-transform duration-300"
          >
            <div className="h-48 overflow-hidden relative">
              <div className="absolute inset-0 bg-black/40 z-10 group-hover:bg-black/20 transition-colors"></div>
              <img 
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop" 
                alt="Planning" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 left-4 z-20 bg-orange-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl">
                01
              </div>
            </div>
            <div className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <Lightbulb className="text-orange-600" size={28} />
                <h3 className="text-2xl font-bold text-gray-900">Planning & Design</h3>
              </div>
              <h4 className="text-lg font-semibold text-gray-700 mb-3">기획 및 디자인</h4>
              <p className="text-gray-600 leading-relaxed">
                현장 실측과 상권 분석을 기반으로, 타겟의 시선을 사로잡는 최적의 디자인 스토리를 기획합니다. 브랜드의 아이덴티티를 가장 효과적으로 전달할 수 있는 소재와 형태를 제안합니다.
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:-translate-y-2 transition-transform duration-300"
          >
            <div className="h-48 overflow-hidden relative">
              <div className="absolute inset-0 bg-black/40 z-10 group-hover:bg-black/20 transition-colors"></div>
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop" 
                alt="Manufacturing" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 left-4 z-20 bg-orange-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl">
                02
              </div>
            </div>
            <div className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <PenTool className="text-orange-600" size={28} />
                <h3 className="text-2xl font-bold text-gray-900">Manufacturing</h3>
              </div>
              <h4 className="text-lg font-semibold text-gray-700 mb-3">정밀 제작</h4>
              <p className="text-gray-600 leading-relaxed">
                최신 장비와 숙련된 장인의 기술력이 만나, 디자인 시안을 오차 없는 완벽한 실물로 구현해 냅니다. 엄격한 품질 관리를 통해 내구성과 심미성을 모두 갖춘 결과물을 완성합니다.
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:-translate-y-2 transition-transform duration-300"
          >
            <div className="h-48 overflow-hidden relative">
              <div className="absolute inset-0 bg-black/40 z-10 group-hover:bg-black/20 transition-colors"></div>
              <img 
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop" 
                alt="Installation" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 left-4 z-20 bg-orange-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl">
                03
              </div>
            </div>
            <div className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <HardHat className="text-orange-600" size={28} />
                <h3 className="text-2xl font-bold text-gray-900">Installation</h3>
              </div>
              <h4 className="text-lg font-semibold text-gray-700 mb-3">안전 시공</h4>
              <p className="text-gray-600 leading-relaxed">
                철저한 안전 관리 수칙 아래, 숙련된 전문 시공팀이 어떤 환경에서도 견고하고 깔끔하게 설치를 마무리합니다. 시공 후 철저한 검수와 사후 관리까지 책임집니다.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
