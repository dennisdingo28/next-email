import { FC } from 'react'
import { Button } from './ui/button'
import ButtonIcon from './ui/button-icon'
import { MoonStarIcon } from 'lucide-react'
import ThemeToggler from './ThemeToggler'

interface NavbarProps {
  
}

const Navbar: FC<NavbarProps> = ({}) => {
  return(
    <nav>
        <ThemeToggler/>
        <Button variant={'outline'} className='text-white'>sign in</Button>
    </nav>
  )
}

export default Navbar