let catID = 1000;
let sorted = false;
// click and sorted
const sortedBtn = document.getElementById('sorted-btn');
sortedBtn.addEventListener('click', ()=>{
    sorted = true;
    loadDataByCatId(catID, sorted);
});

// categories api
const categories = async () => {
    const url = 'https://openapi.programming-hero.com/api/videos/categories';
    const res = await fetch(url);
    const data = await res.json();
    const category = data.data;
    displayCategory(category);
}
// loadDataByCatId 
const loadDataByCatId = async (id, sorted) => {
    const url = `https://openapi.programming-hero.com/api/videos/category/${id}`;
    const res = await fetch(url);
    const data = await res.json();
    const items = data.data;
    // sorted 
    if (sorted) {
        items.sort((a,b) => {
            const oneStr = a.others?.views;
            const twoStr = b.others?.views;
            const oneNum = parseFloat(oneStr.replace('K', '')) || 0;
            const twoNum = parseFloat(twoStr.replace('K', '')) || 0;
            return twoNum - oneNum;
        });
    }
    // not found data
    if (items.length === 0) {
        document.getElementById('not-found').classList.remove('hidden')
    }else{ 
        document.getElementById('not-found').classList.add('hidden')
    }
    displayItems(items);
}

// getID
const getID = (id) => {
    catID = id;
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

loadDataByCatId(catID, sorted)
loadingSpinner(true);
categories()