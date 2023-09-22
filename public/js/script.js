Reveal.initialize({
    hash: true,
    slideNumber: true,
    pdfMaxPagesPerSlide: 1,
    pdfSeparateFragments: true,
    showNotes: false,
  });

  Reveal.on("slidechanged", (event) => {
    // event.previousSlide, event.currentSlide, event.indexh, event.indexv
    // console.log(event);
    if (event.indexh > 0 && event.currentSlide.children[0].innerHTML != "Conclusão"){
      $('#detail-image').hide();
      $('#detail-teacher').hide()
      $('#detail-materia').hide();
      $('#detail-curse').hide();
    }else if(event.currentSlide.children[0].innerHTML == "Conclusão" ){
     $('#detail-image').show();
     $('#detail-curse').show();
      $('#detail-teacher').show()
      $('#detail-materia').show();
    }else{
      $('#detail-image').show();
     $('#detail-curse').show();
      $('#detail-teacher').show()
      $('#detail-materia').show();
    }
    if (event.indexh > 0 && event.indexv > 0) {
      document.getElementById(`title${event.indexh}`).style.display =
        "block";
      
      document.getElementById(`topic${event.indexh}`).style.display =
        "block";

      // console.log('o 1',event.currentSlide.children[0].innerText);
      // console.log('o 2', event.currentSlide.children[1].innerText);

      document.getElementById(`title${event.indexh}`).innerHTML =
        event.currentSlide.children[0].innerHTML;

      document.getElementById(`topic${event.indexh}`).innerText =
        event.currentSlide.children[1].innerText.trim();

      document.getElementById(`topic${event.indexh}`).style.color =
        event.currentSlide.children[1].style.color;
    } else if (event.indexh > 0 && event.indexv == 0) {
      // console.log('passei titulo', event.currentSlide.children[0].innerHTML)
      if(document.getElementById(`title${event.indexh}`) != null){
        document.getElementById(`title${event.indexh}`).style.display = 'block'
        document.getElementById(`title${event.indexh}`).innerHTML = event.currentSlide.children[0].innerText.trim()
      }
    }
  });

  function printPDF() {
    window.location.href = "?print-pdf";
  }

  function clearSlidesRepeated(numbers) {
    let lastInt = null;
    for (let i = 0; i < numbers.length; i++) {
      let num = numbers[i].innerHTML;
      let intValue = parseInt(num);
      if (!isNaN(intValue)) {
        // Current number is an integer
        if (num.indexOf('.') < 0) {
          // Current number is an integer without decimal
          if (lastInt !== null && lastInt.toString().indexOf('.') >= 0) {
            console.log('é inteiro e tem decimal');
          } else if (numbers[i + 1].innerHTML && parseInt(numbers[i + 1].innerHTML) === intValue + 1) {
            console.log('é inteiro sem decimal depois');
          } else {
            console.log('é o último decimal');
              let pageElement = $(numbers[i]).closest('.pdf-page');
                if (pageElement) {
                      pageElement.css('display', 'none');
                  }
          }
          lastInt = intValue;
        } else {
          // Current number is a decimal
          if (numbers[i + 1].innerHTML && parseInt(numbers[i + 1].innerHTML) === intValue + 1) {
            console.log('é decimal antes e depois');
          } else {
            console.log('é o último decimal');
              let pageElement = $(numbers[i]).closest('.pdf-page');
                if (pageElement) {
                      pageElement.css('display', 'none');
                  }
          }
        }
      }
    }
  }

  function readyPDF() {
    if (window.location.href.toString().search("pdf") >= 0) {
      titles = document.querySelectorAll(".title");
      topics = document.querySelectorAll(".topic");
      let numbers = document.querySelectorAll(".slide-number");

      for (let title of titles) {
        title.style.display = "block";
      }

      for (let topic of topics) {
        topic.style.display = "block";
      }

      setTimeout(() => {
        numbers = document.querySelectorAll(".slide-number")
      }, 1000);
      setTimeout(() => {
        console.log(numbers);
        clearSlidesRepeated(numbers);
        window.print();
        // if(navigator.userAgent.indexOf('Mobile') > 0){
        //   document.body.style.zoom = "0.4"
        // }
      }, 2000);
    }
  }

  window.addEventListener("load", readyPDF(), false);

var elem = document.documentElement;
function changeScreen(e) {
  if($("#img-screen").attr("src") == "/images/expand.png"){
    openFullscreen()
    $("#img-screen").attr("src", "/images/shrink.png")
}else{
    closeFullscreen()
    $("#img-screen").attr("src", "/images/expand.png")
}
}


function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) { /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE11 */
    elem.msRequestFullscreen();
  }
}

function closeFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.webkitExitFullscreen) { /* Safari */
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) { /* IE11 */
    document.msExitFullscreen();
  }
}
