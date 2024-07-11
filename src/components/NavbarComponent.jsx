import React from 'react';
import { FaCompressArrowsAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const NavbarComponent = () => {
	return (
		<div className='mt-[20px]'>
			<div className='container_auto flex justify-between items-center'>
				<div className='flex items-center space-x-2'>
					<h1 className='text-3xl'>Gola</h1>
					<FaCompressArrowsAlt className='text-lime-500' size={24} />
				</div>
				<div className='flex items-center justify-center'>
					<input
						type='text'
						name='value'
						placeholder='Search recipes'
						className='border border-lime-200 rounded-full p-[10px]'
					/>
				</div>
				<div className='space-x-4'>
					<Link>Home</Link>
					<Link>About</Link>
					<Link>Contact</Link>
				</div>
			</div>
		</div>
	);
};

export default NavbarComponent;
