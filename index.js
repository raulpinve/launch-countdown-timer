
class flip{

    constructor(label){
        // Properties
        this.flipComponent = label;
        this.value = ""; 
        this.frontCard = document.querySelector("." +this.flipComponent + " .card-face-front");
        this.backCard = document.querySelector("." +this.flipComponent + " .card-face-back");
        this.digit = document.querySelector("." +this.flipComponent + " .digit");
        this.card = document.querySelector("." + this.flipComponent + " .digit .card"); 
    }

    //Update numbers flipcards
    set update(value){      

        if(value !== this.value){      
          
          this.value = value;     
          const paddedValue  = `${value}`.padStart (2, "0"),
          currentValue = `${this.value}`.padStart (2, "0");

          this.digit.dataset.digitBefore = currentValue;
          this.digit.dataset.digitAfter = paddedValue;
          this.frontCard.textContent = currentValue;
          this.backCard.textContent = paddedValue;       
          
          this.card.classList.remove('flipped');
          void this.card.offsetWidth;

          this.card.classList.add('flipped');    
           
        }      
    }  
}

// Inizialite
const dailyFlipCard  = new flip("flip-clock-d");
const hourlyFlipCard = new flip("flip-clock-h");
const minFlipCard    = new flip("flip-clock-m");
const secFlipCard    = new flip("flip-clock-s");

let endTime = (86400 * 30);

const getSeconds = (endTime) =>
endTime % 60;

const getMinutes = (endTime) =>
  Math.floor ((endTime / 60) % 60);

const getHours = (endTime) => 
  Math.floor ((endTime / 3600) % 24);

const getDays = (endTime) =>  
  Math.floor (endTime / 86400);

function updateCountDownDisplay (endTime) {
  dailyFlipCard.update  = getDays (endTime);
  hourlyFlipCard.update = getHours (endTime);
  minFlipCard.update    = getMinutes (endTime);
  secFlipCard.update    = getSeconds (endTime);
}

const counter_1 = () => {
  setTimeout (() => {
    counter_2 ();
  }, 1000);
}

const counter_2 = () => {
  setTimeout (() => {
    counter_1 ();
    updateCountDownDisplay (endTime);
  }, 0);
  return endTime--;
}

// init
counter_1 ()

