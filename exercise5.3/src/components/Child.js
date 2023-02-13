import Balloon from './Balloon';


const Child = (props) => {
    return (
        <div>
            <h3>{props.children}</h3>
            <Balloon color={props.color}></Balloon>
        </div>
    );
}

export default Child