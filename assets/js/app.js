// display Category 
const displayCategory = (category) => {
    const categoriesSection = document.getElementById('categories-section');
    category.forEach(element => {
        const btn = document.createElement('button');
        btn.classList = 'btn px-6 text-base font-medium';
        btn.textContent = element.category;
        categoriesSection.appendChild(btn)
        btn.addEventListener('click', () => getID(element.category_id))
    });
    loadingSpinner(false);
}

// display Items
const displayItems = (items) => {
    const videosContainer = document.getElementById('videos-container');
    videosContainer.innerHTML = '';
    items.forEach(element => {
    const div = document.createElement('div');
        div.classList = 'card bg-base-100 shadow-xl';
        div.innerHTML = `<figure class="h-[200px]"><img class="h-full" src="${element.thumbnail}" alt="Shoes" /></figure>
        <div class="card-body">
          <div class="flex gap-3">
            <div>
                <img src="${element.authors[0].profile_picture}g" alt="" class="rounded-full w-10">
            </div>
            <div>
                <h1 class="font-bold">${element.title}</h1>
                <p class="flex gap-2 items-center text-slate-500">${element.authors[0].profile_name} <span><img src="./assets/images/check.png" alt="" class="w-4"></span></p>
                <p class="text-slate-500">${element.others.views} <span>views</span></p>
            </div>
          </div>
        </div>`;
        videosContainer.appendChild(div);
    });


    loadingSpinner(false);
}