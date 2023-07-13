import ThemeToggler from './ThemeToggler'
import { navbarLinks } from '@/constants/navbarLinks'
import NavbarLink from './ui/navbar-link'
import SignButton from './SignButton'
import { getAuthSession } from '@/lib/auth'
import UserProfile from './ui/user-profile'

const Navbar: React.FC = async () => {
  const session = await getAuthSession();
  
  return(
    <nav className='flex flex-col xs:flex-row items-center justify-center gap-6 xs:gap-12 py-4 border-b border-b-slate-700 font-roboto'>
        <div className='flex items-center gap-14 xs:gap-8'>
            {navbarLinks.map(link=>(
                <NavbarLink key={link.label} {...link}/>
            ))}
        </div>
        <div className="flex items-center gap-10 xs:gap-8">
            <ThemeToggler/>
        </div>
        {!session?.user ? <SignButton/>:<UserProfile imageUrl={`${session?.user?.image}`} label={`${session?.user?.name}`}/>}
    </nav>
  )
}

export default Navbar