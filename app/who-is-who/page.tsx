import { Metadata } from 'next';

import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Rules of the game',
};

export default function Page() {
  return (
    <div className='mx-auto max-h-80 xl:max-h-[32rem] overflow-auto xl:text-xl p-6 bg-card-primary border-2 border-violet-400 rounded-lg shadow-md max-w-3xl'>
      <h2 className='my-4 font-semibold text-xl xl:text-2xl text-center'>Como fazer isto?</h2>
      Vão-te aparecer vários cartões com pistas - umas mais fáceis que outras - para adivinhares a quem pertence o cartão.
      <br/><br/>Todas as identidades são reais e <strong>já fizerem ou fazem parte da nossa vida!</strong> Não há ficção.
      <br/><br/>Apesar de a idade já não ajudar, queremos que puxes pela memória (pois acredita que também o tivemos de fazer) portanto poderão estar aqui identidades muito antigas.
      <br/><br/>Quando oficializares o teu palpite, clica em "Solução" para sabermos se acertaste ou não - aqui vamos ser bonzinhos e não exigir que digas exactamente o que está na solução, basta que tenhas acertado na personagem!
      <br/><br/>Ah, a bondade tem limites: terás 3 minutos para dares uma resposta. <span className='flex items-center gap-x-1'>Muaha. Muaha. <Image src="/emoji-devil-smile.svg" width={24} height={24} alt="" className=""/></span> 
      <br/>Para avançares para o próximo cartão, basta clicares em apenas um dos botões: o certo dá-te pontuação, o errado tira-te pontuação.
      <br/><br/>No final terás acesso à tabela de pontos onde te espera um desafio!
      <br></br><strong className='text-center text-xl xl:text-2xl'>Boa sorte!</strong>
      <br/><br/>O jogo começa assim que <em>clickares</em> neste botão
      <Link
        key='Start the game'
        href='/who-is-who/play'
        className='block mt-2 xl:mt-4 font-semibold text-center bg-[#CEB9F3] hover:bg-[#8268B0] hover:text-white rounded-md p-3'
      >
        Quero jogar!
      </Link>
    </div>
  );
}