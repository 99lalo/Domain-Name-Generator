  let pronoun = ['the','our'];
  let adj = ['great', 'big' ];
  let noun = ['jogger','racoon'];
  
  function domainGenerator(){
      var j = 1;
      for(var i = 0; i <= (pronoun.length-1); i++){
            console.log(pronoun[i]+adj[i]+noun[i]+".com")
            console.log(pronoun[i]+adj[j]+noun[i]+".com")
            console.log(pronoun[i]+adj[i]+noun[j]+".com")
            console.log(pronoun[j]+adj[i]+noun[j]+".com")
          j--
      }
  }
domainGenerator();