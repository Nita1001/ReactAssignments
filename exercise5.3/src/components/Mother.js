import Child from './Child';


const Mother = (props) => {

  const kids = [
    { name: 'Ori', color: 'red' },
    { name: 'Ron', color: 'blue' },
    { name: 'Sigalit', color: 'green' },
    { name: 'Ruti', color: 'yellow' },
  ];

  return (
    <div className='mother-container'>
      <h1>A Tale Of Five Balloons</h1>
      <div className='child-container'>
        {kids.map((kid) => {
          return <Child color={kid.color}>{kid.name}</Child>
        })}
      </div>
    </div>
  );
}

export default Mother