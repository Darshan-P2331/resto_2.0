export const HeaderStyle = `sticky top-0 left-0 right-0 z-1000 bg-white flex items-center justify-between py-8 px-[9%] shadow-[0_1rem_1rem_rgba(0,0,0,0.05)] dark:shadow-[0_1rem_1rem_rgba(255,255,255,0.1)] dark:bg-black max-tablet:p-8`;

export const NavBarStyle = (isActive: boolean) => `max-md:absolute max-md:left-0 max-md:right-0 max-md:top-[99%] bg-white dark:bg-black max-md:border-t-[0.1rem] max-md:border-b-[0.1rem] max-md:border-black/20 max-md:clip-[polygon(0_0,100%_0,100%_0,0_0)] ${isActive && '!clip-[polygon(0_0,100%_0,100%_100%,0%_100%)]'}`;

export const LogoStyle = `text-[2.5rem] font-bold text-[var(--primary-text)] dark:text-white`;

export const NavLinkStyle = ({ isActive }: { isActive: boolean }) =>
  `${isActive ? "text-[var(--background-hover)]" : "hover:text-[var(--background-hover)] text-gray-500"} mx-4 my-0 text-[1.7rem]`;

export const SVGStyle =
  "size-10 text-[var(--primary-text)] rounded-md ml-[0.3rem] cursor-pointer text-center hover:text-[var(--background-hover)] dark:text-white";

export const SearchContainerStyle = (isActive: boolean) => `fixed top-[8.5rem] left-0 right-0 bg-white dark:bg-black z-1000 ${isActive? 'block': 'hidden'}`;

export const SearchFormStyle = `h-[7rem] flex items-center w-full border-b-[0.2rem] border-b-(--primary-text) dark:border-b-white animate-fadeUp`;