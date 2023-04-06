import Image from 'next/image';

// images
import my_photo from '../../images/my-photo.png';

const Skills = () => {
	return (
		<section
			id='skills'
			className='flex w-11/12 flex-col items-center justify-between gap-10 py-14 sm:flex-row md:py-20 lg:w-10/12 lg:py-20'>
			<div className='relative flex h-[28rem] w-full justify-center rounded-md bg-gradient-to-tr from-gradientTwo to-gradientOne shadow-xl shadow-gray-300 dark:from-darkGradientTwo dark:to-darkGradientOne dark:shadow-lg dark:shadow-gray-700 sm:h-[26rem] sm:flex-1 lg:h-[30rem]'>
				<Image
					src={my_photo}
					alt='my photo'
					className='absolute bottom-0 h-auto w-10/12 sm:w-6/12 md:w-5/12 xl:w-4/12'
				/>
			</div>
		</section>
	);
};

export default Skills;
