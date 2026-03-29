import React, { useState } from 'react';
import { motion } from 'motion/react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase';
import { useAuth } from '../AuthContext';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

export default function Contact() {
  const { user } = useAuth();
  const [formData, setFormData] = useState({
    companyName: '',
    contactName: '',
    contactPhone: '',
    address: '',
    signType: '',
    budgetAndSchedule: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      await addDoc(collection(db, 'inquiries'), {
        ...formData,
        userId: user ? user.uid : null,
        createdAt: serverTimestamp()
      });
      setSubmitStatus('success');
      setFormData({
        companyName: '',
        contactName: '',
        contactPhone: '',
        address: '',
        signType: '',
        budgetAndSchedule: ''
      });
    } catch (error) {
      console.error("Error submitting inquiry:", error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <div className="bg-zinc-900 py-24 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-white mb-6"
        >
          성공적인 프로젝트의 시작,<br />
          <span className="text-orange-500">SINSIN SIGN</span>과 상의하십시오.
        </motion.h1>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-1 space-y-8"
          >
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Us</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                궁금한 점이나 견적 의뢰를 남겨주시면, 담당자가 확인 후 신속하게 연락드리겠습니다.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-orange-100 p-3 rounded-full text-orange-600 shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">대표전화</h4>
                  <p className="text-gray-600 mt-1">02-764-7990</p>
                  <p className="text-sm text-gray-500 mt-1">팩스: 02-764-5362</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-orange-100 p-3 rounded-full text-orange-600 shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">이메일</h4>
                  <p className="text-gray-600 mt-1">signeon1@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-orange-100 p-3 rounded-full text-orange-600 shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">오시는 길</h4>
                  <p className="text-gray-600 mt-1">서울시 종로구<br />종로31길 46-3</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-orange-100 p-3 rounded-full text-orange-600 shrink-0">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">운영시간</h4>
                  <p className="text-gray-600 mt-1">평일 09:00 - 18:00</p>
                  <p className="text-sm text-gray-500 mt-1">주말 및 공휴일 휴무</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-2 bg-white p-8 md:p-12 rounded-2xl shadow-lg border border-gray-100"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8">견적 및 상담 문의</h3>
            
            {submitStatus === 'success' ? (
              <div className="bg-green-50 border border-green-200 text-green-800 rounded-lg p-6 text-center">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Send size={32} />
                </div>
                <h4 className="text-xl font-bold mb-2">문의가 성공적으로 접수되었습니다.</h4>
                <p>빠른 시일 내에 담당자가 연락드리겠습니다. 감사합니다.</p>
                <button 
                  onClick={() => setSubmitStatus('idle')}
                  className="mt-6 text-orange-600 font-semibold hover:underline"
                >
                  새로운 문의 남기기
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-2">상호명 (회사명) *</label>
                    <input 
                      type="text" 
                      id="companyName" 
                      name="companyName" 
                      required
                      value={formData.companyName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all"
                      placeholder="예: 신신홍보기획"
                    />
                  </div>
                  <div>
                    <label htmlFor="contactName" className="block text-sm font-medium text-gray-700 mb-2">담당자 성함 *</label>
                    <input 
                      type="text" 
                      id="contactName" 
                      name="contactName" 
                      required
                      value={formData.contactName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all"
                      placeholder="예: 홍길동"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="contactPhone" className="block text-sm font-medium text-gray-700 mb-2">연락처 *</label>
                    <input 
                      type="tel" 
                      id="contactPhone" 
                      name="contactPhone" 
                      required
                      value={formData.contactPhone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all"
                      placeholder="예: 010-1234-5678"
                    />
                  </div>
                  <div>
                    <label htmlFor="signType" className="block text-sm font-medium text-gray-700 mb-2">희망 시공 형태</label>
                    <select 
                      id="signType" 
                      name="signType"
                      value={formData.signType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all bg-white"
                    >
                      <option value="">선택해주세요</option>
                      <option value="실외 대형 간판">실외 대형 간판</option>
                      <option value="실내 인테리어 사인">실내 인테리어 사인</option>
                      <option value="입체/LED 문자">입체/LED 문자</option>
                      <option value="지주 간판">지주 간판</option>
                      <option value="기타">기타</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">현장 주소</label>
                  <input 
                    type="text" 
                    id="address" 
                    name="address" 
                    value={formData.address}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all"
                    placeholder="시공이 필요한 현장 주소를 입력해주세요"
                  />
                </div>

                <div>
                  <label htmlFor="budgetAndSchedule" className="block text-sm font-medium text-gray-700 mb-2">문의 내용 (예산 및 일정)</label>
                  <textarea 
                    id="budgetAndSchedule" 
                    name="budgetAndSchedule" 
                    rows={5}
                    value={formData.budgetAndSchedule}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all resize-none"
                    placeholder="대략적인 예산, 희망 시공 일정, 기타 요청사항을 자유롭게 적어주세요."
                  ></textarea>
                </div>

                {submitStatus === 'error' && (
                  <div className="text-red-600 text-sm bg-red-50 p-3 rounded-md">
                    문의 접수 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.
                  </div>
                )}

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 px-8 rounded-lg transition-colors flex justify-center items-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  ) : (
                    <>문의 접수하기 <Send size={20} /></>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
