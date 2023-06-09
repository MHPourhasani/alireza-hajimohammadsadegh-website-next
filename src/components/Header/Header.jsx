import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Components
import SwitchBtn from '../SwitchBtn/SwitchBtn';
import MobileMenu from '../MobileMenu/MobileMenu';

// images
import ah_logo_dark from '../../images/logos/ah-logo-dark.png';
import ah_logo_light from '../../images/logos/ah-logo-light.png';

// icons
import { CgMenuLeft } from 'react-icons/cg';

const Header = ({ darkMode, setDarkMode }) => {
	const [menuOpen, setMenuOpen] = useState(false);

	const listItems = [
		{ id: 'home', title: 'صفحه اصلی' },
		{ id: 'about', title: 'درباره من' },
		{ id: 'projects', title: 'فعالیت های انجام شده' },
	];

	return (
		<header className='flex w-11/12 items-center justify-between pt-5 lg:w-10/12 lg:items-end'>
			<Link href='/'>
				<Image
					src={darkMode ? ah_logo_dark : ah_logo_light}
					alt='header logo'
					className='animate__animated animate__flipInY h-auto w-14 md:w-16'
				/>
			</Link>

			<nav className='hidden lg:block'>
				<ul className='flex items-center gap-11 font-light dark:text-white'>
					{listItems.map((item) => (
						<li key={item.id}>
							<Link
								href={`/#${item.id}`}
								className='transition-all hover:text-primary hover:ease-in'>
								{item.title}
							</Link>
						</li>
					))}
				</ul>
			</nav>

			<SwitchBtn darkMode={darkMode} setDarkMode={setDarkMode} />

			<CgMenuLeft
				onClick={() => setMenuOpen(!menuOpen)}
				className='animate__animated animate__slideInLeft h-auto w-11 cursor-pointer p-1 text-black dark:text-white lg:hidden'
			/>

			{menuOpen ? <MobileMenu darkMode={darkMode} /> : null}
		</header>
	);
};

export default Header;
