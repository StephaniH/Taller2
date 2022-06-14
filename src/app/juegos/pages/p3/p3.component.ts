import { Component,ViewChild, ElementRef, AfterViewInit,OnInit, NgModule } from '@angular/core';

@Component({
  selector: 'app-p3',
  template: `
    <canvas #canvas width="500" height="500"></canvas>
    <button (click)="animate()">Play</button>   
  `,
  styles: ['canvas { border-style: solid }']
})
export class P3Component implements AfterViewInit {

  
  options = ["$100", "$10", "$25", "$250", "$30", "$1000", "$1", "$200", "$45", "$500", "$5", "$20", "Lose", "$1000000", "Lose", "$350", "$5", "$99"];

  startAngle = 0;
  arc = Math.PI / (this.options.length / 2);
  spinTimeout: any = null;

  spinArcStart = 10;
  spinTime = 0;
  spinTimeTotal = 0;
  red: any
  green: any
  blue: any
  spinAngleStart: any


  @ViewChild('canvas', { static: true })
  private canvas: ElementRef = {} as ElementRef;
  
  public ctx: CanvasRenderingContext2D = {} as CanvasRenderingContext2D;

  ngAfterViewInit(): void {
    this.ctx = this.canvas.nativeElement.getContext('2d');
    this.drawRouletteWheel()
  }
  
  animate(): void {
    this.spin()
  }

   byte2Hex(n: number) {
    var nybHexString = "0123456789ABCDEF";
    return String(nybHexString.substr((n >> 4) & 0x0F,1)) + nybHexString.substr(n & 0x0F,1);
  }
  
  RGB2Color(r: number,g:number,b:number) {
    return '#' + this.byte2Hex(r) + this.byte2Hex(g) + this.byte2Hex(b);
  }

  getColor(item: any, maxitem:any) {
    var phase = 0;
    var center = 128;
    var width = 127;
    var frequency = Math.PI*2/maxitem;
    
    this.red   = Math.sin(frequency*item+2+phase) * width + center;
    this.green = Math.sin(frequency*item+0+phase) * width + center;
    this.blue  = Math.sin(frequency*item+4+phase) * width + center;
    
    return this.RGB2Color(this.red,this.green,this.blue);
  }

  drawRouletteWheel() {
    const canvas = this.ctx.canvas;
      var outsideRadius = 200;
      var textRadius = 160;
      var insideRadius = 125;
  
      this.ctx.clearRect(0,0,500,500);
  
      this.ctx.strokeStyle = "black";
      this.ctx.lineWidth = 2;
  
      this.ctx.font = 'bold 12px Helvetica, Arial';
  
      for(var i = 0; i < this.options.length; i++) {
        var angle = this.startAngle + i * this.arc;
        //ctx.fillStyle = colors[i];
        this.ctx.fillStyle = this.getColor(i, this.options.length);
  
        this.ctx.beginPath();
        this.ctx.arc(250, 250, outsideRadius, angle, angle + this.arc, false);
        this.ctx.arc(250, 250, insideRadius, angle + this.arc, angle, true);
        this.ctx.stroke();
        this.ctx.fill();
  
        this.ctx.save();
        this.ctx.shadowOffsetX = -1;
        this.ctx.shadowOffsetY = -1;
        this.ctx.shadowBlur    = 0;
        this.ctx.shadowColor   = "rgb(220,220,220)";
        this.ctx.fillStyle = "black";
        this.ctx.translate(250 + Math.cos(angle + this.arc / 2) * textRadius, 
                      250 + Math.sin(angle + this.arc / 2) * textRadius);
        this.ctx.rotate(angle + this.arc / 2 + Math.PI / 2);
        var text = this.options[i];
        this.ctx.fillText(text, -this.ctx.measureText(text).width / 2, 0);
        this.ctx.restore();
      } 
  
      //Arrow
      this.ctx.fillStyle = "black";
      this.ctx.beginPath();
      this.ctx.moveTo(250 - 4, 250 - (outsideRadius + 5));
      this.ctx.lineTo(250 + 4, 250 - (outsideRadius + 5));
      this.ctx.lineTo(250 + 4, 250 - (outsideRadius - 5));
      this.ctx.lineTo(250 + 9, 250 - (outsideRadius - 5));
      this.ctx.lineTo(250 + 0, 250 - (outsideRadius - 13));
      this.ctx.lineTo(250 - 9, 250 - (outsideRadius - 5));
      this.ctx.lineTo(250 - 4, 250 - (outsideRadius - 5));
      this.ctx.lineTo(250 - 4, 250 - (outsideRadius + 5));
      this.ctx.fill();
    } 

    spin() {
      this.spinAngleStart = Math.random() * 10 + 10;
      this.spinTime = 0;
      this.spinTimeTotal = Math.random() * 3 + 4 * 1000;
      this.rotateWheel();
    }

    rotateWheel() {
      var that = this
      function rotate(){
        that.spinTime += 30;
        if(that.spinTime >= that.spinTimeTotal) {
          that.stopRotateWheel();
          return;
        }
        var x = that.ease(that.spinTime, 0, that.spinAngleStart, that.spinTimeTotal);
        var spinAngle = that.spinAngleStart - x
        that.startAngle += (spinAngle * Math.PI / 180);
        that.drawRouletteWheel();
        that.spinTimeout = setTimeout(rotate, 30);
      
      }
      rotate();
    }

    stopRotateWheel() {
      clearTimeout(this.spinTimeout);
      var degrees = this.startAngle * 180 / Math.PI + 90;
      var arcd = this.arc * 180 / Math.PI;
      var index = Math.floor((360 - degrees % 360) / arcd);
      this.ctx.save();
      this.ctx.font = 'bold 30px Helvetica, Arial';
      var text = this.options[index]
      this.ctx.fillText(text, 250 - this.ctx.measureText(text).width / 2, 250 + 10);
      this.ctx.restore();
    }
    
    ease(t: number, b:number, c:number, d:number) {
      var ts = (t/=d)*t;
      var tc = ts*t;
      return b+c*(tc + -3*ts + 3*t);
    }
}
