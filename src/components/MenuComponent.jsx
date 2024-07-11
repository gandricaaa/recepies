import { RxHamburgerMenu } from 'react-icons/rx';
import { Link } from 'react-router-dom';
const MenuComponent = () => {
	return (
		<div className='absolute top-5 left-3 bg-gray-900/90 text-white rounded-full px-[10px] py-[5px] flex items-center gap-[20px] w-[50%]'>
			<RxHamburgerMenu />
			<h1 className='uppercase text-xl'>Qitchen</h1>
			<Link className='uppercase text-[10px]'>Menu</Link>
			<Link className='uppercase text-[10px]'>About</Link>
			<Link className='uppercase text-[10px] bg-black rounded-full p-[5px]'>
				Book a Table
			</Link>
		</div>
	);
};

export default MenuComponent;
