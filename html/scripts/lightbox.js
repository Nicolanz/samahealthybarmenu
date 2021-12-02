 
function buildLightBox(div){
    const img = $(div).find(`img`).attr('src');
    const title = $(div).find(`h5`).text();
    const description = $(div).find(`p`).text();
    const prices = [
        $(div).find(`.prices .text-muted`).text(),
        $(div).find(`.prices .text-danger`).text()
    ]
    $(".lightbox").append(`
      <div class="d-flex align-items-center justify-content-center">
        <div class="lightContainer d-flex flex-row justify-content-around flex-wrap col-11 col-lg-10 p-2 p-lg-0 border position-relative">  
            <div class="col-12 col-lg-5 position-relative">
              <a class="hideLightBox position-absolute d-block d-lg-none"><img src="./images/icons/close.ico" alt=""></a>
              <img src="${img}" class="img-fluid" alt="" class="img-fluid">
            </div>
            <div class="col-12 col-lg-5 d-flex flex-column flex-wrap justify-content-center p-2 p-lg-1">
              <span class="d-none d-lg-flex justify-content-end"><a class="hideLightBox "><img class="" src="./images/icons/close.ico" alt=""></a></span>
              <span class="mt-3 col-12 col-lg-12"><h3 class="text-success">${title}</h3></span>
              <div class="col-12 mb-4 col-lg-12">
                <span class="text-muted">${prices[0]}</span>
                <span class="ml-1 text-danger">${prices[1]}</span>
              </div>
              <div class="col-12 col-md-12">
                <p class="">
                  ${description}
                </p>
              </div>
            </div>
        </div>
      </div>
    `)
    $(".lightbox").show();
}

$(document).ready(function(){
    $(".lightbox").hide();
    $(".showLightBox").click(function(){
      const parent = $(this).parent();
      buildLightBox(parent.parent());
    });
    $(document).on('click', '.hideLightBox', function(){
        $(".lightbox").hide();
        $(".lightbox").empty();
    })
});
