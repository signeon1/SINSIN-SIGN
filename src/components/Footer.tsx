import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-zinc-900 text-zinc-400 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="text-white text-lg font-bold mb-4">CEO MESSAGE</h3>
            <p className="text-sm leading-relaxed max-w-md">
              대한민국을 대표하는 간판/사인물 기획 제작 업체가 되기 위해 끊임없이 성장하는 기업이 되겠습니다. 
              60년의 노하우와 신뢰를 바탕으로 공간의 가치를 높입니다.
            </p>
          </div>
          <div>
            <h3 className="text-white text-lg font-bold mb-4">VISION</h3>
            <p className="text-sm leading-relaxed max-w-md">
              혁신적인 아이디어를 통한 더 큰 세계로 나아갈 수 있는 디자인을 연구하겠습니다.
              고객의 브랜드가 가장 빛날 수 있도록 최선을 다합니다.
            </p>
          </div>
        </div>
        
        <div className="border-t border-zinc-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs">
          <div className="mb-4 md:mb-0 text-center md:text-left">
            <p className="mb-1"><span className="text-white font-semibold">SINSIN SIGN</span> (신신홍보기획)</p>
            <p>Tel: 1544-0000 | Fax: 0505-000-0000 | Email: contact@sinsinsign.com</p>
            <p>경기도 부천시 원미구 중동 1112 상록센트럴타워 505호</p>
          </div>
          <div className="text-center md:text-right">
            <p>Copyright © SINSIN SIGN. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
