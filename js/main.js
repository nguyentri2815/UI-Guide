
document.addEventListener("DOMContentLoaded",function(){
      
    
    //dom menu sidebar left
    document.querySelector('.sidebar-left').innerHTML=`
    <ul class="list-unstyled mb-0 py-3 pt-md-1">
        <li class="mb-1">
            <button class="btn rounded collapsed" title="content">
                <div class="arrow pe-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"></path>
                    </svg>
                </div>
                Content
            </button>
            <div class="collapse">
                <ul class="list-unstyled fw-normal pb-1 small">
                    <li><a href="headerbaolong.html">Header baolong</a></li>
                    <li><a href="tables.html">Table</a></li>
                    <li><a href="typography.html">Typography</a></li>
                    <li><a href="icon.html">icon</a></li>
                </ul>
            </div>
        </li>

        <li class="mb-1">
            <button class="btn rounded collapsed " title="form">
                <div class="arrow pe-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"></path>
                    </svg>
                </div>
                Forms
            </button>
            <div class="collapse">
                <ul class="list-unstyled fw-normal pb-1 small">
                    <li><a href="formcontrol.html">Formcontrol</a></li>
                    <li><a href="inputgroup.html">Inputgroup</a></li>
                </ul>
            </div>
        </li>

        <li class="mb-1">
            <button class="btn rounded collapsed" title="layout">
                <div class="arrow pe-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"></path>
                    </svg>
                </div>
                Layout
            </button>
            <div class="collapse">
                <ul class="list-unstyled fw-normal pb-1 small">
                    <li><a href="grid.html">Grid</a></li>
                </ul>
            </div>
        </li>

        <li class="mb-1">
            <button class="btn rounded collapsed" title="utilities">
                <div class="arrow pe-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"></path>
                    </svg>
                </div>
                Utilities
            </button>
            <div class="collapse">
                <ul class="list-unstyled fw-normal pb-1 small">
                    <li><a href="colors.html">Colors</a></li>
                    <li><a href="borders.html">Borders</a></li>
                    <li><a href="display.html">Display</a></li>
                    <li><a href="float.html">Float</a></li>
                    <li><a href="position.html">Position</a></li>
                    <li><a href="shadow.html">Shadows</a></li>
                    <li><a href="sizing.html">Sizing</a></li>
                    <li><a href="spacing.html">Spacing</a></li>
                    <li><a href="text.html">text</a></li>
                    <li><a href="verticalalign.html">Vertical align</a></li>
                </ul>
            </div>
        </li>
        
    </ul>
    `
    //dom change list header nav right
    document.querySelector(".navbar-nav li:first-child").innerHTML=`<a href="updateseveryday.html" class="p-2"> Follow updates every day </a>`;


    //active .btn.collapsed theo title
    // handle click .btn.collapsed
    let titledocument = document.title;

    let buttonsCollapsed = document.querySelectorAll(" .btn.collapsed");
        for (let i = 0; i < buttonsCollapsed.length; i++) {
            let dataTitle=buttonsCollapsed[i].getAttribute('title');
            if(dataTitle==titledocument){
                buttonsCollapsed[i].classList.add('active');
            }
            buttonsCollapsed[i].addEventListener('click',function(){
                if(buttonsCollapsed[i].classList.contains('active')){
                    buttonsCollapsed[i].classList.remove('active');
                }else{
                    for (let j = 0; j < buttonsCollapsed.length; j++) {
                        buttonsCollapsed[j].classList.remove('active');
                    }
                    buttonsCollapsed[i].classList.add('active');
                }
            })
            
    }
    
    // let listlinks= document.querySelectorAll('.btn.collapsed ul li a')

    //handle scroll
    var heigth =document.querySelector('.navbar').clientHeight;
    let elementSidebarLeft=document.querySelector('.sidebar-left');
    let elementSidebarRifht=document.querySelector('.sidebar-right');
    let elementSearch=document.querySelector('.search-bar');
    window.addEventListener('scroll',function(){
        if(window.pageYOffset >heigth ){
            elementSearch.classList.add('fixed-top');
            elementSidebarLeft.classList.add('absolute-top');
            elementSidebarRifht.classList.add('absolute-top');
        }else{
            elementSearch.classList.remove('fixed-top');
            elementSidebarLeft.classList.remove('absolute-top');
            elementSidebarRifht.classList.remove('absolute-top')
        }
    })

  //copy html
  var listElementcanCopy= document.querySelectorAll('.btn-clipboard');
  for (let k = 0; k < listElementcanCopy.length; k++) {
      listElementcanCopy[k].addEventListener('click',function(){
        var myTemporaryInputElement = document.createElement("textarea");
        myTemporaryInputElement.value = listElementcanCopy[k].nextElementSibling.outerHTML;
    
        document.body.appendChild(myTemporaryInputElement);
    
        myTemporaryInputElement.select();
        document.execCommand("Copy");
    
        document.body.removeChild(myTemporaryInputElement);
  })

  }

  //search
  var listsearchs=[
      //table
      {
          name:"table",
          link:"tables.html"
      },
  ]

},false)  
 