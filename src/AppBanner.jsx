import { FiArrowDownCircle } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';


const AppBanner = () => {

	return (
		<motion.section
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.2 }}
			className="flex flex-col items-center lg:flex-row mt-12 md:mt-2 ml-2"
		>

			<div className="w-full md:w-1/3 text-left 2xsm:p-0">
				
				<motion.h1
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{
						ease: 'easeInOut',
						duration: 0.9,
						delay: 0.1,
					}}
					className="font-sans text-2xl lg:text-3xl xl:text-3xl text-center lg:text-left text-ternary-dark dark:text-primary-light"
				>
					Hi, I'm Aiden Smith
				</motion.h1>
				<motion.p
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{
						ease: 'easeInOut',
						duration: 0.9,
						delay: 0.2,
					}}
					className="font-general-medium mt-4 text-lg md:text-xl lg:text-2xl xl:text-3xl text-center lg:text-left leading-normal text-gray-500 dark:text-gray-500"
				>
					A Highly Proficient And Ethical Web3.0 Fullstack Engineer
				</motion.p>
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{
						ease: 'easeInOut',
						duration: 0.9,
						delay: 0.3,
					}}
					className="flex justify-center lg:block 3xsm:block 3xsm:mx-6"
				>
					<a
						download="Aiden-Smith-Resume.pdf"
						href="/files/Aiden-Smith-Resume.pdf"
						className="font-general-medium flex justify-center items-center w-36 sm:w-48 mt-12 mb-6 sm:mb-3 text-lg py-2.5 sm:py-3 shadow-lg rounded-lg bg-indigo-500 focus:ring-1 hover:bg-indigo-600 text-gray-100 hover:text-white duration-500 p-2 2xsm:ml-2 2xsm:p-2 3xsm:-mb-10"
						aria-label="Download Resume"
					>
						<FiArrowDownCircle className="mr-2 sm:mr-3 h-5 w-5 sn:w-6 sm:h-6 duration-100"></FiArrowDownCircle>
						<span className="text-sm sm:text-lg font-general-medium duration-100">
							Aiden Smith
						</span>
						
					</a>
				</motion.div>
			</div>
			<motion.div
				initial={{ opacity: 0, y: -180 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ ease: 'easeInOut', duration: 2, delay: 1 }}
				className="w-full sm:w-2/3 text-right float-right mt-8 sm:mt-0"
			>
				<video title='App-Home-Banner-Image-Web3.0-Illustration' className="w-11/12  m-2 dark:rounded-full rounded-full border-0" src="https://cdnl.iconscout.com/lottie/premium/preview-watermark/blockchain-technology-4423752-3675973.mp4" autoPlay loop muted></video>
			</motion.div>
		</motion.section>
	);
};

export default AppBanner;
