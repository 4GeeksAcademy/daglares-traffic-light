import React from "react";
import {useState} from "react";


//create your first component
const Home = () => {
	const [ color, setColor ] = useState("green");
	return (
		<div className="text-center">
			<div className="bg-dark mx-auto" style={{width:"15px", height: "100px"}}></div>
            <div className="bg-dark p-3 mx-auto rounded-4 " style={{width:"150px", height: "auto"}}>
				<div className={"bg-danger rounded-circle m-1 " + (color=="red"? "brillo":"")}
					onClick={()=>setColor("red")}
					style={{width:"100px", height: "100px"}}></div>
				<div className={"bg-warning rounded-circle m-1 " + (color=="yellow"? "brillo":"")}
					onClick={()=>setColor("yellow")}
					style={{width:"100px", height: "100px"}}></div>
				<div className={"bg-success rounded-circle m-1 "+ (color=="green"? "brillo":"")} 
					onClick={()=>setColor("green")}
					style={{width:"100px", height: "100px"}}></div>
			</div>
		</div>
	
	);
};

export default Home;