'use client'
import React, { useEffect, useState, Suspense } from 'react';

import Link from 'next/link';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation'

const Score: React.FC = () => {
  const [score, setScore] = useState<string | null>('0')
  const searchParams = useSearchParams()
  useEffect(() => {
    if (searchParams.get('score')) {
      setScore(searchParams.get('score'))
    }
  }, [searchParams]);
  return (
    <h2 className='text-center text-xl mb-2'>Conseguiste <strong>{score}</strong> pontos!</h2>
  )
}

export default function Page() {
  return (
      <div className='mx-auto max-h-96 xl:max-h-[32rem] overflow-auto xl:text-xl p-6 bg-card-primary border-2 border-violet-400 shadow-md rounded-lg max-w-3xl'>
        <Suspense><Score /></Suspense>
        Agora vem o grande <em>plot twist</em>: mais pontos equivalem a um maior desafio!<span className='flex items-center gap-x-1'>Muaha. Muaha. <Image src="/emoji-devil-smile.svg" width={24} height={24} alt="" className=""/></span>
        <br/>Vamos lá então:
        <br/><br/>
        <span className='font-semibold border-b-2 border-b-purple-500'>&lt; 0: a porteira!</span>
        <br/>Deixas passar todas as tuas memórias, não reténs absolutamente nada!
        <br/>Queremos premear-te por essa conquista e não só não terás nenhum desafio, como terás direito a 10 minutos de massagem no pé direito.
        <br/><br/>
        <span className='font-semibold border-b-2 border-b-purple-500'>0 - 10: a pica do metro</span>
        <br/>Às vezes apanhas uma memória, às vezes deixas escapar.
        <br/>Vamos ajudar a melhorar essa memória e nada melhor como álcool, certo? Bebe uma cerveja...usando apenas a <em>dobradiça do braço.</em>
        <br/><br/>
        <span className='font-semibold border-b-2 border-b-purple-500'>11 - 35: a mágica!</span>
        <br/>Reténs apenas o que te convém! Guardas as memórias boas e deixas ir as menos boas.
        <br/>Memória selectiva é um dom, e uma memória digna de ser retida é a música <em>Não se viver sem ti</em> dos grande Excesso! Canta-a para nós!
        <br/><br/>
        <span className='font-semibold border-b-2 border-b-purple-500'>36 - 45: a gladiadora</span>
        <br/>Entraste nesta arena para nos humilhar!
        <br/>Depois destes minutos de extrema tensão precisamos de relaxar e trazer de novo o ambiente romântico. Escreve um poema ao Simon, liga-lhe e lê-o. Queremos ouvir tudo!
        <br/><br/>
        <span className='font-semibold border-b-2 border-b-purple-500'>&gt; 45: a batoteira!</span>
        <br/>Não podes pontuar mais de 45 pontos, portanto esses dedos foram matreiros.
        <br/>A confiança é a base de qualquer relação. Para recuperares a nossa confiança terás de dançar a <em>Macarena</em> 4 vezes...ao pé-coxinho!
        <Link
          key='Start the game'
          href='/'
          className='block mt-2 xl:mt-4 font-semibold text-center bg-[#CEB9F3] hover:bg-[#8268B0] hover:text-white rounded-md p-3'
        >
          Voltar ao início
        </Link>
      </div>
  );
}