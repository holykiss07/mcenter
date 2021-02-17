var nowZoom = 100;
  function zoomOut(){
    nowZoom = nowZoom - 20;
      if(nowZoom <= 70) nowZoom = 70;
    zooms();
  }

  function zoomIn(){
    nowZoom = nowZoom + 20;
      if(nowZoom >= 500) nowZoom = 500;
    zooms();
  }

  function zoomReset(){
    nowZoom = 100;
    zooms();
  }

  function zooms(){
    document.body.style.zoom = nowZoom + '%';

    if(nowZoom==70){
      alert("더이상 축소 할수 없습니다.")
    }
    if(nowZoom==500){
      alert("더이상 확대 할수 없습니다.")
    }
  }
