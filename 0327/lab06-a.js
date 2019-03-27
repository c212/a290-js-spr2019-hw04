-bash-4.2$ cat one.js
var fun = function ()
          {
            return
            {
              name : "someone"
            };
          }

console.log( fun() );
-bash-4.2$ cat two.js
var fun = function () {
            return {
              name : "someone"
            };
          }

console.log( fun() );
-bash-4.2$ node one.js
undefined
-bash-4.2$ node two.js
{ name: 'someone' }
-bash-4.2$
