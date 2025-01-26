console.log(`
   Отдже, callback-функція - це функція, яка передається в іншу функцію
   ,як аргумент та викликається пізніше в тілі функції, в яку передана.

   реальними прикладами є робота з Promise API,  завантаження даних з сервера чи обробка файлів.


   Замість того, щоб чекати, поки операція завершиться, ви передаєте функцію,
    яка має бути викликана, коли операція завершиться, як аргумент. Це дозволяє вам 
    продовжувати виконання коду, не чекаючи на результат асинхронної операції.
   `)


   let sum = (num1, num2, callback) => { 
      if (!isNaN(num1) && typeof num1 === "number" && !isNaN(num2) && typeof num2 === "number") { 
         let sum = num1 + num2;
      callback(sum);
      }
   }

   let display = (scrip) => { 
      console.log(scrip);
   }

   sum(25, 17, display);



   const p = new Promise(function (resolveCallback, rejectCallback) {
      let a = 5;
      setTimeout(function () {
        if (a > 5) {
          resolveCallback(a);
        } else {
          rejectCallback(a);
        }
      }, 3000);
    });
    
    p.then(function (value) {
      console.log(`проміс успішно виконаний.`);
    }).catch(function (value) {
      throw new Error(`виконання проміса відхилено.`);
    });