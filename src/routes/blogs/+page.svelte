<script>
    // @ts-check
    import { animate } from '../stores.js';

    
    export let data;
</script>

<section class="w-full flex pt-20 flex-col items-center h-full min-h-screen">
    <div class="w-full justify-center flex items-center flex-col h-full py-20">
        <div class="w-full px-10 md:px-0 md:w-4/5 h-full py-2">
            <div class="md:px-20 lg:px-32 py-10">
                <h1 class="text-5xl text-center items-center justify-center font-sans font-light tracking-wide py-2">
                    Blogs
                </h1>
                
                <div class="py-4 flex flex-col w-full h-full gap-6">
                    {#each data.blogs as blog}
                        <!-- Your code to display each blog element goes here -->
                        <a href="/blogs/{blog.id}" class="w-full justify-center items-center flex">
                            <div class="bg-secondary hover:bg-base flex w-full sm:h-80 max-h-[550px] p-5 sm:flex-row flex-col">
                                <div class="w-full  sm:w-2/5 sm:h-full h-2/5">
                                    <img src={blog.cover} alt="cover" class="object-cover w-full h-full">
                                </div>
                                <div class="sm:w-3/5 w-full bg-white flex flex-col p-4 gap-6 py-6 h-3/5 sm:h-full">
                                    <h3 class="text-md md:text-lg xl:text-xl text-base">
                                        {blog.title}
                                    </h3>

                                    <p class="text-sm font-light overflow-auto">
                                        {blog.teaser}
                                    </p>
                                </div>
                            </div>
                            <!-- <div class="{$animate} flex flex-col md:flex-row w-full md:h-80  lg:h-80 rounded-none altashadow bg-secondary p-4 hover:bg-base">
                                <div class="bg-cover w-full md:w-2/5 h-60 md:h-full "/>
                                    <img src={blog.cover} alt="cover" class="w-full object-cover">
                                <div class="bg-white md:w-3/5 flex flex-col p-6 md:p-4 py-10 md:py-6 text-base relative h-full">
                                    <div class="text-sm flex flex-row gap-2 font-light">
                                        <span>
                                            {blog.publication_date}
                                        </span>
                                        <div>
                                            •
                                        </div>
                                        <span>
                                            {blog.reading_time} min
                                        </span>
                                    </div>
        
                                    <div class="py-2 gap-2 flex flex-col">
                                        <h3 class="text-md md:text-lg xl:text-xl text-base">
                                            {blog.title}
                                        </h3>
                                        <p class="text-sm font-light">
                                            {blog.teaser}
                                        </p>
        
                                    </div>
                                        
                                    <div class="flex flex-row justify-between px-6 md:px-4 lg:px-6 w-full items-center absolute bottom-4 text-sm right-0">
                                        <span>
                                            {blog.views} views
                                        </span>
        
                                        <span class="justify-center items-center flex flex-row gap-1">
                                            {blog.likes} 
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" data-slot="icon" class="w-5 h-5 stroke-red-600">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                                                  </svg>
                                            
                                        </span>
                                        
                                    </div>
                                </div>
                            </div> -->
                        </a>
                    {/each}

                </div>
            </div>
        </div>
    </div>
</section>

            