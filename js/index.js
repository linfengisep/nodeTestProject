// This is your JS Entry point... You can add as many as JS files you want if you think it is better!

//submit first, just for testing;
document.getElementById('formula').addEventListener('submit',calculateResult);
   function calculateResult(e){
      var resultElement = document.getElementById('postResult');
      var formulaInput=document.getElementById('formulaInput').value;
      resultElement.innerHTML='';

      axios.post('http://localhost:8080/',{
      userId:'1',
      title:formulaInput;
  })
   .then(function (response){
   resultElement.innerHTML=generateSucessHTMLOutput(response);
  })
   .catch(function (error){
   resultElement.innerHTML=generateErrorHTMLOutput(error);
  })
   e.preventDefault();
}

   function generateSucessHTMLOutput(response){
   return   '<h4>Result:</4>'+
            '<h5>Status:</h5>'+
            '<pre>'+response.status+' '+response.statusText + '</pre>'
            '<h5>headers:</h5'+
            '<pre>'+JSON.stringify(response.headers,null,'\t') + '</pre>'
            '<h5>Data:</h5>'+
            '<pre>'+JSON.stringify(response.data,null,'\t') + '</pre>';
}
   function generateErrorHTMLOutput(error){
   return   '<h4>Result:</4>'+
            '<h5>Message:</h5'+
            '<pre>'+error.message+'</pre>'+
            '<h5>Status:</h5>'+
            '<pre>'+error.response.status+' '+error.response.statusText + '</pre>'
            '<h5>headers:</h5'+
            '<pre>'+JSON.stringify(error.response.headers,null,'\t') + '</pre>'
            '<h5>Data:</h5>'+
            '<pre>'+JSON.stringify(error.response.data,null,'\t') + '</pre>';
}
