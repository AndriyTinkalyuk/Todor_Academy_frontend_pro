let calculateDiscount = (percentage) => { 

 function discount (number) {
  console.log(`сума знижки ${number * percentage / 100}`);
 }

 return { 
  discount
 }
} 


let Adrian = calculateDiscount(9);

Adrian.discount(654);
Adrian.discount(1000);

console.log('==================');

let createCounter = (counter) => { 
  function counterPlus() { 
    counter++;
    return counter;
  }

  function getCounter() { 
    return counter;
  }

  return { 
    counterPlus,
    getCounter
  }
}

let counter = createCounter(0);


  console.log( counter.counterPlus());
  
  console.log('==================');

  counter.counterPlus();
  counter.counterPlus();
  counter.counterPlus();

  console.log(counter.getCounter());

  console.log('==================');

  function createLogger(createLoggerString) { 
    let log = createLoggerString || '';
    function addLog(addLogString) { 
      log += ' ' + addLogString;
    }
    function getLog() { 
      return log;
    }

    return { 
      addLog,
      getLog
    }
  }


  let logger = createLogger('Log 1');
  logger.addLog('bara bara bara');
  logger.addLog('biri biri biri');

  console.log(logger.getLog());

  logger.addLog('add logs');

  console.log(logger.getLog());

  console.log('==================');

  let generateUniqueId = () => { 
    let id; 
    function createId(idLength) { 
      const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      id = '';
      let length = idLength || 1;
      let counter = 0;
      
      while(counter < length) {
        id += characters.charAt(Math.floor(Math.random() * characters.length));
        counter++;
      }
    }

    function getId() { 
      return id;
    }


    return { 
      createId,
      getId,
    }
  }


  let myid = generateUniqueId();

  myid.createId(5);

  console.log(myid.getId());

  myid.createId(25);

  console.log(myid.getId());

  console.log('==================');

let multiplyBy = (mainNumber) => { 
result = 0;

 let multiply = (secondNumber) => { 
  if(!isNaN(mainNumber) && !isNaN(secondNumber) && mainNumber !== null && secondNumber !== null) {
   return  result = mainNumber * secondNumber;
  }
  return result = 'обидва значення повинні бути числами!'
  }

 let diplayResult = () =>  { 
  return result;
 }
 return {
  multiply,
  diplayResult
}
 }
 


let sum = multiplyBy(5);

sum.multiply(25);

console.log(sum.diplayResult());

sum.multiply(undefined);

console.log(sum.diplayResult());