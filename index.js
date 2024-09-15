
function toggleHint() {
    var hintSection1 = document.getElementById("hint-section1");
    
    if (hintSection1.style.display === "none" || hintSection1.style.display === "") {
      hintSection1.style.display = "block";
    } else {
      hintSection1.style.display = "none";
    }
    hintcount=1;
  }
function toggleHint2() {
    var hintSection2 = document.getElementById("hint-section2");
    
    if (hintSection2.style.display === "none" || hintSection2.style.display === "") {
      hintSection2.style.display = "block";
    } else {
      hintSection2.style.display = "none";
    }
    hintcount=2;
  }
  function toggleHint3() {
    var hintSection3 = document.getElementById("hint-section3");
    
    if (hintSection3.style.display === "none" || hintSection3.style.display === "") {
      hintSection3.style.display = "block";
    } else {
      hintSection3.style.display = "none";
    }
    hintcount=3;
  }
  function Sample(name,dob,sex,address,workplace,nickname,phone,father,mother,blood,password,hint1,hint2,hint3){
    this.name=name;
    this.dob=dob;
    this.sex=sex;
    this.address=address;
    this.workplace=workplace;
    this.nickname=nickname;
    this.phone=phone;
    this.father=father;
    this.mother=mother;
    this.blood=blood;
    this.password=password;
    this.hint1=hint1;
    this.hint2=hint2;
    this.hint3=hint3;
  }
  var sample1= new Sample("Meera Sharma","23rd July 1995","Female","Chandigarh","TCS"," None","7188766514","Mohan Sharma","Kamla Sharma"," O+","meera6514","The password has 9 characters","I wrote my phone number's last digits","I should not forget my name");
  var sample2= new Sample("Ananya Iyer","15th October 2000","Female","Chennai, Tamil Nadu","Wipro","Naya","8910440099","Ashok Patel","Leela Patel","A+","naya24","The password has 6 characters","My mom calls me this","I'm going to turn 24 soon!");
  var sample3= new Sample("Aditya Sharma","14th January 2001","Male","Pune, Maharashtra","Infosys","Aadi","8878119980","Rajesh Sharma","Meera Sharma","AB+","aadi14012001","The password has 12 characters","Best day of the year for me","Everyone at home calls me this");
  var sample4= new Sample("Kishna Chopra","10thSeptember2005","Male","New Delhi","Randikhana","None","9625842703","Shakun Chopra","Meera Chopra","A+","randikishna","The password has 11 characters","The password contains an adjective describing the subject's profession","the password contains my name");
var currentsample;
random=Math.random();
random=4*random;
random=Math.floor(random);
var array=[sample1,sample2,sample3,sample4];
currentsample=array[random];
document.querySelector(".values .name").innerHTML=currentsample.name;
document.querySelector(".values .dob").innerHTML=currentsample.dob;
document.querySelector(".values .sex").innerHTML=currentsample.sex;
document.querySelector(".values .address").innerHTML=currentsample.address;
document.querySelector(".values .workplace").innerHTML=currentsample.workplace;
document.querySelector(".values .nickname").innerHTML=currentsample.nickname;
document.querySelector(".values .phone").innerHTML=currentsample.phone;
document.querySelector(".values .father").innerHTML=currentsample.father;
document.querySelector(".values .mother").innerHTML=currentsample.mother;
document.querySelector(".values .blood").innerHTML=currentsample.blood;
document.querySelector(".hint-section1").innerHTML=currentsample.hint1;
document.querySelector(".hint-section2").innerHTML=currentsample.hint2;
document.querySelector(".hint-section3").innerHTML=currentsample.hint3;
var passcode=currentsample.password;
var attempts=4;
//After Submit Button
function storeValue() {
    var inputValue = document.querySelector(".password-field").value;
    if(attempts!=0){
        if (inputValue==passcode) {
            window.scrollTo(0, 0);
            document.getElementById("WinScreen").style.display = "flex"; 
            document.getElementById("WinScreen").style.display = "flex";  
            document.body.classList.add("no-scroll");
            var duration = 15 * 1000;
            var animationEnd = Date.now() + duration;
            var skew = 1;
            
            function randomInRange(min, max) {
              return Math.random() * (max - min) + min;
            }
            
            (function frame() {
              var timeLeft = animationEnd - Date.now();
              var ticks = Math.max(200, 500 * (timeLeft / duration));
              skew = Math.max(0.8, skew - 0.001);
            
              confetti({
                particleCount: 1,
                startVelocity: 0,
                ticks: ticks,
                origin: {
                  x: Math.random(),
                  // since particles fall down, skew start toward the top
                  y: (Math.random() * skew) - 0.2
                },
                colors: ['#ffffff'],
                shapes: ['circle'],
                gravity: randomInRange(0.4, 0.6),
                scalar: randomInRange(0.4, 1),
                drift: randomInRange(-0.4, 0.4)
              });
            
              if (timeLeft > 0) {
                requestAnimationFrame(frame);
              }
            }());
        }
    }
    else{
        window.scrollTo(0, 0);
        document.getElementById("gameOverScreen").style.display = "flex"; 
        document.querySelector("#gameoverp").innerHTML="Password was: "+passcode;
        document.getElementById("gameOverScreen").style.display = "flex"; 
        document.body.classList.add("no-scroll");
    }
    document.querySelector("#attempts-left").innerHTML="Attempts Left: "+attempts;
    attempts--;
}
function restartGame() {
    location.reload();
  }
document.addEventListener("keyup",function(event){
    if(event.key==='Enter'){
        storeValue();
    }
  });