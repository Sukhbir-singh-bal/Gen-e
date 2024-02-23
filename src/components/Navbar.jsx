import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-transparent  dark:bg-gray-800 bg-opacity-50 dark:bg-opacity-75 rounded-b-lg backdrop-blur-sm border-b dark:border-gray-700 shadow-md dark:shadow-none">
      <div className="container mx-auto flex items-center justify-between py-2 ">
        <Link to="/" className="flex items-center">
          <img src="/assets/Gennie.png" alt="Geniie Logo" className="h-12 w-auto mr-4" />
          <h1 className="text-xl font-bold text-gray-900 dark:text-white">Gen-E</h1>
        </Link>
        <div className="lg:flex items-center hidden md:flex">
        <div class="flex flex-wrap justify-center self-center gap-x-1 gap-y-3 sm:gap-x-2 lg:justify-start">
    <a
        class="flex-none group relative isolate flex items-center rounded-lg px-2 py-0.5 text-[0.8125rem]/6 font-medium text-white/30 transition-colors hover:text-sky-300 gap-x-3"
        href="#">
        <span
            class="absolute inset-0 -z-10 scale-75 rounded-lg bg-white/5 opacity-0 transition group-hover:scale-100 group-hover:opacity-100"></span>
        <svg viewBox="0 0 16 16" aria-hidden="true" fill="currentColor" class="h-4 w-4 flex-none">
            <path
                d="M7 3.41a1 1 0 0 0-.668-.943L2.275 1.039a.987.987 0 0 0-.877.166c-.25.192-.398.493-.398.812V12.2c0 .454.296.853.725.977l3.948 1.365A1 1 0 0 0 7 13.596V3.41ZM9 13.596a1 1 0 0 0 1.327.946l3.948-1.365c.429-.124.725-.523.725-.977V2.017c0-.32-.147-.62-.398-.812a.987.987 0 0 0-.877-.166L9.668 2.467A1 1 0 0 0 9 3.41v10.186Z"></path>
        </svg>
        <span class="self-baseline text-white">About</span>
    </a>
    <a
        class="flex-none group relative isolate flex items-center rounded-lg px-2 py-0.5 text-[0.8125rem]/6 font-medium text-white/30 transition-colors hover:text-sky-300 gap-x-3"
        href="#">
        <span
            class="absolute inset-0 -z-10 scale-75 rounded-lg bg-white/5 opacity-0 transition group-hover:scale-100 group-hover:opacity-100"></span>
        <svg viewBox="0 0 16 16" aria-hidden="true" fill="currentColor" class="h-4 w-4 flex-none">
            <path
                d="M8 .198a8 8 0 0 0-8 8 7.999 7.999 0 0 0 5.47 7.59c.4.076.547-.172.547-.384 0-.19-.007-.694-.01-1.36-2.226.482-2.695-1.074-2.695-1.074-.364-.923-.89-1.17-.89-1.17-.725-.496.056-.486.056-.486.803.056 1.225.824 1.225.824.714 1.224 1.873.87 2.33.666.072-.518.278-.87.507-1.07-1.777-.2-3.644-.888-3.644-3.954 0-.873.31-1.586.823-2.146-.09-.202-.36-1.016.07-2.118 0 0 .67-.214 2.2.82a7.67 7.67 0 0 1 2-.27 7.67 7.67 0 0 1 2 .27c1.52-1.034 2.19-.82 2.19-.82.43 1.102.16 1.916.08 2.118.51.56.82 1.273.82 2.146 0 3.074-1.87 3.75-3.65 3.947.28.24.54.73.54 1.48 0 1.07-.01 1.93-.01 2.19 0 .21.14.46.55.38A7.972 7.972 0 0 0 16 8.199a8 8 0 0 0-8-8Z"></path>
        </svg>
        <span class="self-baseline text-white">GitHub</span>
    </a>
    <a
        class="flex-none group relative isolate flex items-center rounded-lg px-2 py-0.5 text-[0.8125rem]/6 font-medium text-white/30 transition-colors hover:text-sky-300 gap-x-3"
        href="/feed.xml">
        <span
            class="absolute inset-0 -z-10 scale-75 rounded-lg bg-white/5 opacity-0 transition group-hover:scale-100 group-hover:opacity-100"></span>
        <svg viewBox="0 0 16 16" aria-hidden="true" fill="currentColor" class="h-4 w-4 flex-none">
            <path fill-rule="evenodd" clip-rule="evenodd"
                d="M2.5 3a.5.5 0 0 1 .5-.5h.5c5.523 0 10 4.477 10 10v.5a.5.5 0 0 1-.5.5h-.5a.5.5 0 0 1-.5-.5v-.5A8.5 8.5 0 0 0 3.5 4H3a.5.5 0 0 1-.5-.5V3Zm0 4.5A.5.5 0 0 1 3 7h.5A5.5 5.5 0 0 1 9 12.5v.5a.5.5 0 0 1-.5.5H8a.5.5 0 0 1-.5-.5v-.5a4 4 0 0 0-4-4H3a.5.5 0 0 1-.5-.5v-.5Zm0 5a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z"></path>
        </svg>
        <span class="self-baseline text-white">LinkedIn</span>
    </a>
</div>
        </div>
        
        <div className="md:hidden flex items-center">
          <button className="text-gray-900 dark:text-white px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 dark:focus:ring-offset-0 dark:focus:ring-white">
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" strokeWidth="2" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
