import React from 'react';
import MenuComponent from './MenuComponent';
import img4 from '../assets/heroimg4.jpg';
import img3 from '../assets/heroimg3.jpg';
import img2 from '../assets/heroimg2.jpg';
import img1 from '../assets/heroimg1.jpg';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa6';
const HeroComponent = () => {
	return (
		<div className='bg-bg_image w-screen bg-cover h-[700px] py-5 mt-2'>
			<div className='bg-black rounded-xl py-5 container_auto flex justify-center'>
				{/* Left Side */}
				<div className='px-[20px] relative'>
					<MenuComponent />
					<img src={img4} alt='' className='w-[800px] h-[500px]' />
					<h4 className='text-white uppercase italic text-5xl absolute bottom-3 left-3'>
						Sushi Sensation
					</h4>
				</div>
				{/* Right Side */}
				<div className='flex justify-between flex-col'>
					<div className='relative'>
						<img
							src={img3}
							alt=''
							width={200}
							height={200}
							className='rounded-lg'
						/>
						<div className='absolute right-1 bottom-1 rounded-full p-[2px] flex items-center gap-1 bg-black rouded-full'>
							<Link className='text-white text-[10px]'>Menu</Link>
							<FaArrowRight color='white' size={10} />
						</div>
					</div>
					<div className='relative'>
						<img
							src={img2}
							alt=''
							width={200}
							height={200}
							className='rounded-lg'
						/>
						<div className='absolute right-1 bottom-1 rounded-full p-[2px] flex items-center gap-1 bg-black rounded-full'>
							<Link className='text-white text-[10px]'>Menu</Link>
							<FaArrowRight color='white' size={10} />
						</div>
					</div>
					<div className='relative'>
						<img
							src={img3}
							alt=''
							width={200}
							height={200}
							className='rounded-lg'
						/>
						<div className='absolute right-1 bottom-1 p-[2px] flex items-center gap-1 bg-black rounded-full'>
							<Link className='text-white text-[10px]'>Menu</Link>
							<FaArrowRight color='white' size={10} />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HeroComponent;
