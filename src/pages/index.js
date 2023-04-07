import Head from 'next/head';

// components
import Layout from '@/components/Layout/Layout';
import About from '@/components/About/About';
import Projects from '@/components/Projects/Projects';

export default function Home() {
	return (
		<>
			<Head>
				<title>علیرضا حاجی محمد صادق</title>
				<meta name='description' content='علیرضا حاجی محمدصادق هستم.' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<meta name='theme-color' content='#21252A' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<Layout>
				<About />
				<Projects />
			</Layout>
		</>
	);
}
