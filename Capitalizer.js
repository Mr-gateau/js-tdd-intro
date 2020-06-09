

function Capitalizer(input){
  const end = [];
  if(typeof input[0] === 'string' ){
    end.push(input[0].toUpperCase());
    for (let i = 1; i < input.length; i++){
      if (input[i-1] === ' '){
        const neoLeter = input[i].toUpperCase()
        end.push(neoLeter);
      }else {
        end.push(input[i]);
      }
    }
  }else{
    const fin = '';
    return fin;
  }
    return end.join('');
  };

module.exports = Capitalizer;
