import React from 'react';
import { BsFacebook, BsTwitter, BsInstagram, BsGithub, BsBehance } from 'react-icons/bs';

const Footer = () => {
    return (
        <footer class="p-4 bg-white sm:p-6 dark:bg-gray-800">
		<div class="md:flex md:justify-between">
			<div class="mb-6 md:mb-0">
            <h1 className="text-2xl font-bold tracking-widest">
                <span className='px-[7px] py-[2px] mr-[2px] font-bold text-[#FFFFFF] bg-[#FF690F]'>B</span>
                <span className='px-[7px] py-[2px] mr-[2px] font-bold text-[#FFFFFF] bg-[#FF690F]'>O</span>
                <span className='px-[7px] py-[2px] mr-[2px] font-bold text-[#FFFFFF] bg-[#FF690F]'>T</span>
                <span className='px-[7px] py-[2px] mr-[2px] font-bold text-[#FFFFFF] bg-[#FF690F]'>A</span>
                <span className='px-[7px] py-[2px] mr-[2px] font-bold text-[#FFFFFF] bg-[#FF690F]'>I</span>
                <span className='px-[7px] py-[2px] mr-[2px] font-bold text-[#FFFFFF] bg-[#FF690F]'>R</span></h1>
			</div>
			<div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
				<div>
					<h3 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Resources</h3>
					<ul>
						<li class="mb-4">
							<a href="!#" target="_blank"
								class="text-gray-600 hover:underline dark:text-gray-400">StackOverflow</a>
						</li>
						<li>
							<a href="!#" target="_blank" rel="nofollow"
								class="text-gray-600 hover:underline dark:text-gray-400">Tailwind CSS</a>
						</li>
					</ul>
				</div>
				<div>
					<h3 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Follow us</h3>
					<ul>
						<li class="mb-4">
							<a href="!#" target="_blank"
								class="text-gray-600 hover:underline dark:text-gray-400">Github</a>
						</li>
						<li>
							<a href="!#" target="_blank"
								class="text-gray-600 hover:underline dark:text-gray-400">Discord</a>
						</li>
					</ul>
				</div>
				<div>
					<h3 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h3>
					<ul>
						<li class="mb-4">
							<a href="!#" target="_blank" class="text-gray-600 hover:underline dark:text-gray-400">Privacy
								Policy</a>
						</li>
						<li>
							<a href="!#" target="_blank" class="text-gray-600 hover:underline dark:text-gray-400">Terms
								&amp; Conditions</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
		<hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"/>
		<div class="sm:flex sm:items-center sm:justify-between">
			<span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 <a href="https://flowbite.com" target="_blank" rel="noreferrer" class="hover:underline">BotAir™</a>. All Rights Reserved.
</span>
			<div class="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
				<a href="!#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                <BsFacebook />
				</a>
				<a href="!#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                <BsTwitter/>
				</a>
				<a href="!#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
					<BsInstagram/>
				</a>
				<a href="!#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
					<BsGithub/>
				</a>
				<a href="!#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
					<BsBehance />
				</a>
			</div>
		</div>
	</footer>
    );
};

export default Footer;