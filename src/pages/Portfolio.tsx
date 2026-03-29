import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import { db } from '../firebase';
import { cn } from '../lib/utils';

interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  description?: string;
}

const fallbackData: PortfolioItem[] = [
  {
    id: '1',
    title: '글로벌 IT 기업 사옥 메인 간판',
    category: '실외 대형 간판',
    imageUrl: 'https://images.unsplash.com/photo-1541888087425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop',
    description: '건축물의 외관과 조화롭게 어우러지는 대형 채널 간판 시공 사례'
  },
  {
    id: '2',
    title: '프리미엄 카페 실내 인테리어 사인',
    category: '실내 인테리어 사인',
    imageUrl: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=2047&auto=format&fit=crop',
    description: '따뜻한 분위기를 연출하는 후광 LED 실내 사인물'
  },
  {
    id: '3',
    title: '복합문화공간 입체 문자',
    category: '입체/LED 문자',
    imageUrl: 'https://images.unsplash.com/photo-1563206767-5b18f218e8de?q=80&w=2069&auto=format&fit=crop',
    description: '시인성을 극대화한 전면 발광 입체 문자 시공'
  },
  {
    id: '4',
    title: '신도시 랜드마크 지주 간판',
    category: '지주 간판',
    imageUrl: 'https://images.unsplash.com/photo-1519999482648-25049ddd37b1?q=80&w=2126&auto=format&fit=crop',
    description: '멀리서도 눈에 띄는 압도적 스케일의 지주 간판'
  }
];

const categories = ['All', '실외 대형 간판', '실내 인테리어 사인', '입체/LED 문자', '지주 간판'];

export default function Portfolio() {
  const [items, setItems] = useState<PortfolioItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState('All');

  useEffect(() => {
    const fetchPortfolio = async () => {
      try {
        const q = query(collection(db, 'portfolio'), orderBy('createdAt', 'desc'));
        const querySnapshot = await getDocs(q);
        
        if (querySnapshot.empty) {
          setItems(fallbackData);
        } else {
          const fetchedItems = querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
          } as PortfolioItem));
          setItems(fetchedItems);
        }
      } catch (error) {
        console.error("Error fetching portfolio:", error);
        setItems(fallbackData); // fallback on error
      } finally {
        setLoading(false);
      }
    };

    fetchPortfolio();
  }, []);

  const filteredItems = activeCategory === 'All' 
    ? items 
    : items.filter(item => item.category === activeCategory);

  return (
    <div className="pt-20 min-h-screen bg-white">
      <div className="bg-zinc-900 py-24 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-white mb-6"
        >
          <span className="text-orange-500">SINSIN SIGN</span>의 시공 사례
        </motion.h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto px-4">
          수많은 현장에서 증명된 기획력과 실행력을 직접 확인해 보세요.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-6 py-2 rounded-full text-sm font-medium transition-all duration-300",
                activeCategory === category 
                  ? "bg-orange-600 text-white shadow-md shadow-orange-600/20" 
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-600"></div>
          </div>
        ) : (
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
          >
            {filteredItems.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={item.id}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-2xl aspect-[4/3] mb-4 shadow-md">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors z-10"></div>
                  <img 
                    src={item.imageUrl} 
                    alt={item.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 z-20">
                    <span className="bg-orange-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                      {item.category}
                    </span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
                  {item.title}
                </h3>
                {item.description && (
                  <p className="text-gray-600 text-sm line-clamp-2">
                    {item.description}
                  </p>
                )}
              </motion.div>
            ))}
          </motion.div>
        )}
        
        {!loading && filteredItems.length === 0 && (
          <div className="text-center py-24 text-gray-500">
            해당 카테고리의 시공 사례가 없습니다.
          </div>
        )}
      </div>
    </div>
  );
}
