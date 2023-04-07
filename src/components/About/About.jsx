import Image from 'next/image';

// images
import myPhoto from '../../images/my-photo.png';

const About = () => {
	return (
		<section
			id='about'
			className='flex w-11/12 flex-col items-center justify-between gap-5 pb-16 pt-44 sm:flex-row sm:py-14 md:mt-0 md:gap-10 md:py-20 lg:w-10/12 lg:py-16 xl:gap-14'>
			<div className='relative flex h-[26rem] w-full justify-center rounded-md bg-gradient-to-tr from-gradientTwo to-gradientOne shadow-xl shadow-gray-300 dark:from-darkGradientTwo dark:to-darkGradientOne dark:shadow-lg dark:shadow-gray-700 sm:h-[26rem] sm:flex-1 lg:h-[32rem]'>
				<Image
					src={myPhoto}
					alt='my photo'
					className='absolute bottom-0 h-auto w-10/12 sm:w-11/12 md:w-9/12 xl:w-7/12'
				/>
			</div>

			<div className='flex flex-1 flex-col gap-4 md:gap-5'>
				<span className='text-xl font-bold text-black dark:text-white'>من کیم؟</span>

				<span className='flex flex-col gap-3 text-sm font-light leading-loose text-secondary lg:gap-5 lg:text-base'>
					<p className='leading-loose'>
						علیرضا حاجی محمد صادق هستم متولد سال ۷۵ دانش آموخته رشته حقوق قضائی از
						دانشگاه آزاد اسلامی واحد تهران جنوب
					</p>

					<p className='leading-loose'>
						با کسب توفیقات از محضر اهل بیت عصمت و طهارت از سال ۹۴ شروع به فعالیت در امور
						فرهنگی نمودم اهم امور انجام شده تاکنون به شرح ذیل می باشد.
					</p>

					<p className='leading-loose'>
						برگزاری پایگاه های تابستانی، تشکیل گروه سرود و انجام اولین اجراهای پاتوقی در
						بوستان‌ها و میادین شهر تهران، تولید بیش از ده سرود و نماهنگ انقلابی و آئینی،
						همکاری با نهادهای مردمی، انقلابی و هیئات مذهبی در مبحث تولید محتوا
					</p>
				</span>

				<a
					href='#projects'
					className='w-40 rounded-md bg-primary py-2.5 text-center text-sm font-light text-white shadow-md shadow-rose-400 transition-all ease-in hover:bg-rose-700 dark:shadow-rose-800 lg:w-48 lg:text-base'>
					فعالیت های انجام شده
				</a>
			</div>
		</section>
	);
};

export default About;
