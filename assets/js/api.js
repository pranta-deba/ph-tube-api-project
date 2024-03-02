// categories api
const categories = async () => {
    const url = 'https://openapi.programming-hero.com/api/videos/categories';
    const res = await fetch(url);
    const data = await res.json();
    const category = data.data;
    displayCategory(category);
}

// loadDataByCatId 
const loadDataByCatId = async (id) => {
    const url = `https://openapi.programming-hero.com/api/videos/category/${id}`;
    const res = await fetch(url);
    const data = await res.json();
    const items = data.data;
    displayItems(items);
}

// getID
const getID = (id) => {
    loadingSpinner(true);
    loadDataByCatId(id);
}

// loading spinner
const loadingSpinner = (isLoading) => {
    const loadingSpinner = document.getElementById('loading-spinner');
    if (isLoading) {
        loadingSpinner.classList.remove('hidden');
    }else{
        loadingSpinner.classList.add('hidden');        
    }
}


loadingSpinner(true);
categories()