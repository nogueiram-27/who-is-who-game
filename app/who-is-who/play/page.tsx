'use client'
import React, { useState } from 'react';

import Countdown from "react-countdown";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

// import required modules
import { EffectCards } from 'swiper/modules';

import { Cards }  from '@/app/lib/data';

import Link from 'next/link';
import Image from 'next/image';

const Card: React.FC<{riddle: string; solution?: string; id?: number; index?:number; curentScore: number; updateScore: (score: number) => void; isLast?: boolean; endTime?:number; activeIndex?:number}> = ({
  riddle,
  solution,
  id,
  index,
  curentScore,
  updateScore,
  isLast,
  endTime,
  activeIndex
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return !isLast ? (
    <div className='grid gap-y-4'>
      <div className='flex justify-between items-center'>
        <div className='font-semibold'>{id}</div>
        <Image src="/user.svg" width={800} height={800} alt="" className="w-11"/>
        {index === activeIndex && (
          <div className='flex justify-center items-center gap-x-2'>
            <Image src="/clock-lines.svg" width={800} height={800} alt="" className="w-6"/>
            <Countdown
              key={activeIndex}       
              date={endTime}
              renderer={({ minutes, seconds, completed }) => {
                if (completed) {
                  return <span>Ups!</span>
                }
                // pad seconds to 2 digits
                const secs = String(seconds).padStart(2, '0')
                return <span>{minutes}:{secs}</span>
              }}
            />
          </div>
        )}
      </div>
      <p
        className='text-sm'
        dangerouslySetInnerHTML={{
          __html: riddle,
        }}
      />
      <div className='grid gap-y-1'>
        <a
          className='flex gap-x-1 items-center font-semibold text-xs'
          onClick={() => setIsOpen(!isOpen)}
        >
            Solução
            <Image src="/eye.svg" width={16} height={16} alt="" className={isOpen ? 'hidden' : 'block'}/>
            <Image src="/eye-slash.svg" width={16} height={16} alt="" className={isOpen ? 'block' : 'hidden'}/>
        </a>
        <em  
          className={['text-xs', isOpen ? 'block transition-max-height duration-200 ease-out' : 'hidden transition-max-height duration-200 ease-out'
            ].join(' ')}>{solution}</em>
      </div>
      <div className='flex justify-center items-center gap-x-12 px-6'>
        <span 
          className='flex items-center justify-center p-1.5 border-2 rounded-full border-purple-500 w-12 cursor-pointer hover:bg-purple-300'
          onClick={() => updateScore(curentScore + 3)}
        >
          <Image src="/check.svg" width={800} height={800} alt="" className="w-12"/>
        </span>
        <span 
          className='flex items-center justify-center p-1.5 border-2 rounded-full border-purple-500 w-12 cursor-pointer hover:bg-purple-300'
          onClick={() => updateScore(curentScore - 1)}
        >
          <Image src="/cross.svg" width={800} height={800} alt="" className="w-12"/>
        </span>
      </div>
  </div>
) : (
  <div className='text-sm'>
    <h2 className='font-semibold text-xl text-center mb-2'>Parabéns chegaste ao fim!</h2>
    Esperamos que tenha sido divertido e que tenha dado para lembrar de algumas pessoas e momentos. Foram tantos e tantas!
    <br/><br/>Vamos continuar a construir memórias para estas depois poderem entrar em futuros jogos.
    <span className='flex items-center gap-x-1 font-semibold'>Até ao infinito! <Image src="/rocket.svg" width={24} height={24} alt="" className=""/></span>
    <Link
        key='Start the game'
        href={{
          pathname: '/who-is-who/score-board',
          query: { score: curentScore },
        }}
        className='block mt-2 xl:mt-4 font-semibold text-center bg-[#CEB9F3] hover:bg-[#8268B0] hover:text-white rounded-md p-3'
      >
        O que me espera?
      </Link>
  </div>
)
}

export default function Page() {
const DURATION = 3 * 60 * 1000  // 3 minutes in ms
const [activeIndex, setActiveIndex] = useState<number>(0)
const [endTime, setEndTime] = useState(() => Date.now() + DURATION)

const handleSlideChange = (swiper: { activeIndex: number }) => {
  setActiveIndex(swiper.activeIndex)
  setEndTime(Date.now() + DURATION)
}

const [score, setScore] = useState<number>(0);
  
  return (
    <div className='grid gap-y-4 justify-content-center'>
      <div className='flex justify-center items-center gap-x-4'>
        Pontuação: <strong className='text-xl'>{score}</strong>
      </div>
      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
        onSlideChange={handleSlideChange}
      >
        {Cards?.map(({id, riddle, solution}, idx) => {
          const isLast = Cards.length == id
          return (
            <SwiperSlide key={id}>
              <Card id={id} index={idx} riddle={riddle} solution={solution} curentScore={score} updateScore={setScore} isLast={isLast} activeIndex={activeIndex} endTime={endTime} />
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  );
}