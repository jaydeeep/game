 var ctx = document.getElementById("canva").getContext("2d");
        var x = 100;
        var y = 100;
        var spdx = 3;
        var spdy = 4;
        var wmax = 500;
        var hmax = 300;
        function draw()
        {
        ctx.fillStyle="green";    
        ctx.fillRect(x,y,50,50);
        }
        function update()
        {
            draw();
            x += spdx;
            y += spdy;
            if (x > 450 || x<=1)
            spdx = -spdx ;
            
            if (y > 250 || y<=1)
            spdy = -spdy ;
            
        }
        
        function animate()
        {
            requestAnimationFrame(animate);
            ctx.clearRect(0,0,500,300);
            update();
        }
        animate();

       