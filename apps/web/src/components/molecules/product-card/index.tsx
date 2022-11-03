import * as S from './styles'
import {BsThreeDots} from 'react-icons/bs'
import Image from 'next/image'
import { Text } from '~/components/atoms'

export default function ProductCard() {
  return (
    <S.Card>
      <div className='head d-flex justify-content-between'>
        <S.UserCollector>
          <S.UserCollectorBox>P</S.UserCollectorBox>
          <S.UserCollectorBox>P</S.UserCollectorBox>
          <S.UserCollectorBox>P</S.UserCollectorBox>
          <S.UserCollectorBox>P</S.UserCollectorBox>
        </S.UserCollector>
        <div className="dots"><BsThreeDots size={25}/></div>
      </div>
      <S.CardImage>
        <Image src="/juices/orange.png" alt="" width={140} height={140}/>
      </S.CardImage>
      <div className='d-flex align-items-end justify-content-between'>
        <Text color="gray_100" weight='semibold' size='m'>Grape <br /> Fruit Juice</Text>
        <div className='text-end'>
          <Text as="span" color="gray_500" weight='medium' size='xs'>Current price</Text>
          <Text color="gray_200" weight='semibold' size='m'>$24.95</Text>
        </div>
      </div>
    </S.Card>
  )
}
