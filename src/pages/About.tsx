import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

export default function About() {
  return (
    <div className="pt-20 min-h-screen bg-white">
      {/* Header */}
      <div className="bg-zinc-900 py-24 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-white mb-6"
        >
          당신의 브랜드가 돋보여야 할 모든 순간,<br />
          <span className="text-orange-500">SINSIN SIGN</span>이 기준이 됩니다.
        </motion.h1>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-3xl font-bold text-gray-900">
              간판은 브랜드의 얼굴이자 첫인상입니다.
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              1960년 설립 이래, 신신홍보기획은 시대의 변화를 읽어내는 세련된 디자인 감각과 타협하지 않는 품질로 업계를 선도해 왔습니다. 작은 사인물 하나에도 60년의 책임감을 담습니다.
            </p>
            
            <ul className="space-y-4">
              {[
                '60년 전통의 장인정신과 최신 트렌드의 결합',
                '기획부터 시공까지 외주 없는 100% 직영 시스템',
                '철저한 사후 관리와 A/S 보장',
                '건축물과 환경을 고려한 맞춤형 디자인 설계'
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="text-orange-600 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-orange-100 rounded-2xl transform -rotate-3"></div>
            <img 
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop" 
              alt="Office Interior" 
              className="relative rounded-2xl shadow-xl w-full object-cover h-[500px]"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>
      </div>

      {/* History Timeline */}
      <div className="bg-gray-50 py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">History</h2>
            <p className="text-gray-500 mt-4">신신홍보기획이 걸어온 길</p>
          </div>
          
          <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-orange-300 before:to-transparent">
            {[
              { year: '2020s', title: '스마트 사인 시스템 도입', desc: '디지털 사이니지 및 친환경 LED 시스템 전면 도입' },
              { year: '2000s', title: '종합 광고 기획사 도약', desc: '실내외 인테리어 사인 및 대형 옥외광고물 제작 확대' },
              { year: '1980s', title: '제작 공장 확장 이전', desc: '자체 제작 설비 확충 및 전문 시공팀 구성' },
              { year: '1960', title: '신신홍보기획 설립', desc: '대한민국 간판 산업의 태동과 함께 시작' }
            ].map((item, idx) => (
              <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-orange-500 text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10"></div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold text-gray-900 text-xl">{item.title}</h3>
                    <span className="font-bold text-orange-600">{item.year}</span>
                  </div>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
