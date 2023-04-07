import Head from 'next/head';

// components
import Layout from '@/components/Layout/Layout';
import Skills from '@/components/Skills/Skills';
import Projects from '@/components/Projects/Projects';

export default function Home() {
	return (
		<>
			<Head>
				<title>علیرضا حاجی محمد صادق</title>
				<meta name='description' content='' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<meta name='theme-color' content='#21252A' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<Layout>
				<Skills />
				<Projects />
			</Layout>
		</>
	);
}
