/**
 * 绘制时钟
 */

 var canvas = document.querySelector('#clock_canvas')
 var ctx = canvas.getContext('2d')
 
 function showTime () {
   ctx.clearRect(0, 0, 600, 600)  //清除画布
   ctx.save()//保存最初状态画笔
   // 移动画布到中心
   ctx.translate(300, 300)
   //刻画表盘开始
   ctx.rotate(-Math.PI / 2)
   ctx.beginPath()
   //arc(x, y, r, startAngle, endAngle, anticlockwise): 以(x, y) 为圆心，以r 为半径，从 startAngle 弧度开始到endAngle弧度结束。anticlosewise 是布尔值，true 表示逆时针，false 表示顺时针(默认是顺时针)。
   ctx.arc(0, 0, 200, 0, Math.PI * 2, true)   //画一个中心在原点半径为200的圆
   ctx.lineWidth = 5
   ctx.strokeStyle = "darkgrey"
   ctx.stroke()
   ctx.closePath()
   //刻画表盘结束
 
   // 画分针刻度开始
   ctx.save()  //保存画笔状态
   for (let j = 0; j < 60; j++) {
     ctx.beginPath()
     ctx.rotate(Math.PI / 30)
     ctx.moveTo(185, 0)
     ctx.lineTo(195, 0)
     ctx.lineWidth = 5
     ctx.strokeStyle = 'orange'
     ctx.closePath()
     ctx.stroke()
   }
   ctx.restore()  //回退画笔状态
   // 画分针刻度结束
 
   //画时针刻度开始
   ctx.save()    //保存当前画笔状态
   for (let i = 0; i < 12; i++) {
     ctx.beginPath()
     ctx.rotate(Math.PI / 6)
     ctx.moveTo(180, 0)
     ctx.lineTo(200, 0)
     ctx.lineWidth = 10   //设置线宽
     ctx.strokeStyle = "darkgrey"  //设置线的颜色
     ctx.closePath()
     ctx.stroke()
   }
   ctx.restore()//回退画笔状态
   //画时针刻度结束
 
   //获取时间
   var nowTime = new Date()
   var h = nowTime.getHours()
   var m = nowTime.getMinutes()
   var s = nowTime.getSeconds()
   h = h > 12 ? h - 12 : h
   // 刻画秒针开始
   ctx.save()
   ctx.beginPath()
   ctx.rotate(2 * Math.PI / 60 * s)  //计算分针的角度
   ctx.moveTo(-20, 0)
   ctx.lineTo(175, 0)
   ctx.lineWidth = 2
   ctx.strokeStyle = 'red'
   ctx.closePath()
   ctx.stroke()
   ctx.restore()  //回退画笔状态
   // 刻画秒针结束
 
   //刻画分针开始
   ctx.save()  //保存画笔状态
   ctx.beginPath()
   ctx.rotate(2 * Math.PI / 60 * m + 2 * Math.PI / 3600 * s)
   ctx.moveTo(-15, 0)
   ctx.lineTo(155, 0)
   ctx.lineWidth = 4
   ctx.strokeStyle = 'skyblue'
   ctx.stroke()
   ctx.closePath()
   ctx.restore() //回退画笔状态
   //刻画分针完成
 
   //刻画时针开始
   ctx.save()
   ctx.beginPath()
   ctx.rotate(2 * Math.PI / 12 * h + 2 * Math.PI / 12 / 60 * m + 2 * Math.PI / 12 / 60 / 60 * s)
   ctx.moveTo(-10, 0)
   ctx.lineTo(115, 0)
   ctx.lineWidth = 6
   ctx.strokeStyle = 'black'
   ctx.stroke()
   ctx.closePath()
   ctx.restore() // 回退画笔状态
   //刻画时针完成
 
   //刻画纽扣开始
   ctx.beginPath()
   ctx.arc(0, 0, 5, 0, 2 * Math.PI, true)
   ctx.fillStyle = 'black'
   ctx.fill();
   ctx.closePath()
   //刻画纽扣完成
   ctx.restore()//把画笔回退到最初的状态
 }
 setInterval(() => {
   showTime()
 }, 1000)
 