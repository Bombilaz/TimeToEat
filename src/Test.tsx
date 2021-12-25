import Timer from './components/Timer';

export function Blabla(){
  // let a: string = '20';
  let names = ['Dima', 'Victor'];
  names[0].toUpperCase()
  return(
    <div>
      <h1>{names[0]}</h1>
      <Timer/>
      </div>
  );
}