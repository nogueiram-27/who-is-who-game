import { Metadata } from 'next';

import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'It´s time to play',
};

export default function Page() {
  return (
    <div className='mx-auto max-h-80 xl:max-h-[32rem] overflow-auto xl:text-xl p-6 bg-card-primary border-2 border-violet-400 shadow-md rounded-lg max-w-3xl'>
      Andy, a <strong>grande data</strong> aproxima-se! Nervosa? 
      <span className='flex items-center gap-x-1'>Acreditamos que sim <Image src="/emoji-funny-square.svg" width={24} height={24} alt="" className=""/></span>
      <br/>...mas neste fim-de-semana DE FESTANÇO não vamos pensar em convites, lugares na mesa, decoração, cobertura do bolo. <strong>Nope.</strong>
      <br/><br/>Queremos que disfrutes desta pausa (Mateo, who!?) connosco e sobretudo que te sintas mimada.
      Toda a gente precisa de mimos!
      <br/><br/>Como sabemos que vibras com jogos que exigem puxar pela cabeça e memória, decidimos experimentar este jogo.
      <Link
        key='Game instructions'
        href='/who-is-who'
        className='block mt-2 xl:mt-4 font-semibold text-center bg-[#CEB9F3] hover:bg-[#8268B0] hover:text-white rounded-md p-3'
      >
        Estou preparada!
      </Link>
    </div>
  );
}
