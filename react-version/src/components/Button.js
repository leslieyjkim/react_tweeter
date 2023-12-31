function Button(){
    return (
        <button onClick={()=> console.log("button clicked")}>click me</button>
        // <div onClick={(event) => {
        //     console.log(`The mouse coordinates of this click event are: x: ${event.screenX} and y: ${event.screenY}`);
        //     }}
        //   > anyclick
        // </div>
    );
}
export default Button