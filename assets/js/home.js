const loadMoreBtns = [...document.querySelectorAll('.load-more')];
const boxesClass = ['.box-container-1 .box-1', '.box-container-2 .box-2', '.box-container-3 .box-3'];

for(let i = 0; i < loadMoreBtns.length; i++){
    loadMore(loadMoreBtns[i], 4 , boxesClass[i]);
}

function loadMore(loadMorebtn,currentItem , boxesClass) {
    loadMorebtn.addEventListener('click', () =>{
        let boxes = [...document.querySelectorAll(
            boxesClass
        )];
        for( let i = currentItem; i < currentItem + 4; i++){
            boxes[i].style.display ='inline-block';
        }
        currentItem += 4;
        if(currentItem >= boxes.length){
            loadMorebtn.style.display ='none'
        }
    })
}