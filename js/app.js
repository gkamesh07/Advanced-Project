var s1;
    var s2;
    var win;
    var p1=0;
    var p2=0;
    var items = [1,2,3];
    function random_item(items)
    {
      ran = items[Math.floor(Math.random()*items.length)];
      if(ran==1) {
	  console.log("1");
        s2=ran;
        var hpp = document.getElementById("hpp");
        hpp.style.display="block";
      }
      else if(ran==2) {
	  console.log("2");
        s2=ran;
        var hsc = document.getElementById("hsc");
        hsc.style.display="block";
      }
      else if(ran==3) {
	  console.log("3");
        s2=ran;
        var hst = document.getElementById("hst");
        hst.style.display="block";
      }
        result(s1,s2);
    }
      function go(val)
      {

        if(val===1){
        s1=val;
        var p1=document.getElementById("player1");
        p1.style.display="none";
        var p2=document.getElementById("player2");
        p2.style.display="block";
		
        var pp = document.getElementById("pp");
        pp.style.display="block";
        }
        
        else if(val===2){
        s1=val;
        var p1=document.getElementById("player1");
        p1.style.display="none";
        var p2=document.getElementById("player2");
        p2.style.display="block";
        var sc = document.getElementById("sc");
        sc.style.display="block";
        }
        else if(val===3){
          s1=val;
        var p1=document.getElementById("player1");
        p1.style.display="none";
        var p2=document.getElementById("player2");
        p2.style.display="block";
        var st = document.getElementById("st");
        st.style.display="block";
        }
        
        random_item(items);
      }
          
      function result(s1,s2)
      {
        var res=s1-s2;
        if(res<0)
          {
            if(res%2===0)
            {
            win=1;
            p1++;
            }
            else
            {
            win=2;
            p2++;
            }
          }
        else if(res>0)
          {
            if(res%2===0)
            {
            win=2;
            p2++;
            }
            else
            {
            win=1;
            p1++;
            }
          }
      else
      {
        win=0;
        
      }
      if(win==1)
      {
    //console.log("draw");
        var uw = document.getElementById("uw");
        uw.style.display="block";
      }
    else if(win==2){
      var cw = document.getElementById("cw");
      cw.style.display="block";
    }
    else	
    {
      //console.log("Winner=player"+win );
      var drw = document.getElementById("drw");
      drw.style.display="block";
      //swal("Winner is player"+win, "success");
    }
      
    document.getElementById('p1s').innerHTML = p1;
    //document.getElementById('p2s').innerHTML = p2;
      //console.log("score \n player1="+p1 +"player2="+p2 );
    playagain();
  }
      
      function playagain()
      {
      var p=document.getElementById("playagain");
      p.style.display="block";
      }
      
      function pa()
      {
        var p=document.getElementById("playagain");
        p.style.display="none";
        var p2=document.getElementById("player2");
        p2.style.display="none";
	      var p1=document.getElementById("player1");
        p1.style.display="block";
         var pp=document.getElementById("pp");
        pp.style.display="none";
	      var sc=document.getElementById("sc");
        sc.style.display="none";
	      var st=document.getElementById("st");
        st.style.display="none";
	  	  var hpp=document.getElementById("hpp");
        hpp.style.display="none";
	      var hsc=document.getElementById("hsc");
        hsc.style.display="none";
	      var hst=document.getElementById("hst");
        hst.style.display="none";
        var uw = document.getElementById("uw");
        uw.style.display="none";
        var cw = document.getElementById("cw");
        cw.style.display="none";
        var drw = document.getElementById("drw");
        drw.style.display="none";
      }