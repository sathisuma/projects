let list = document.querySelectorAll('.list');
let imgcontainer = document.querySelectorAll('.img-container');

for(let i = 0; i<list.length; i++){
    list[i].addEventListener('click',function(){
        
        for(let j = 0; j<list.length; j++){
            list[j].classList.remove('active');
        }
        this.classList.add('active');

        let dataFilter = this.getAttribute('data-filter');

        for( let k = 0; k<imgcontainer.length; k++){
            imgcontainer[k].classList.remove('active');
            imgcontainer[k].classList.add('hide');

            if(imgcontainer[k].getAttribute('data-item') == dataFilter || dataFilter == "all"){
                imgcontainer[k].classList.remove('hide');
                imgcontainer[k].classList.add('active');

            }

        }


    })
}


