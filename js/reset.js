mui('body').on('tap','a',function(){
          window.top.location.href=this.href;
   });

var gallery = mui('.mui-slider');
gallery.slider({
  interval:5000
});
 





