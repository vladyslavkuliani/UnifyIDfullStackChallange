$(document).ready(()=>{
  $.ajax({
    url: "https://www.random.org/integers/?num=9999&min=0&max=255&col=1&base=10&format=plain&rnd=new",
    method: "GET",
    success: onSuccess,
    error: onError
  });
});

function onSuccess(data){
    data = data + " " + data;
    data = data + " " + data;
    data = data + " " + data;
    data = data.split(/\s/);

  var canvas = document.createElement('canvas');
  canvas.width = 600;
  canvas.height = 600;
  $('body').append(canvas);
  var ctx = canvas.getContext("2d");
  for(var i=0, k=0; i<128; i++){
    for(var j=0; j<128; j++, k+=3){
      ctx.fillStyle = "rgb(" + data[k]+ "," + data[k+1] + "," + data[k+2]+")";
      ctx.fillRect(i, j, 1, 1);
    }
  }
}

function onError(err){
  console.log(err);
}
