import Image from 'next/image';
import logo from '../images/logos/lix-logo-white.png';

export function Logo(props) {
  return (
    <Image src={logo} alt="" width={140} height={200} />
  )
}
