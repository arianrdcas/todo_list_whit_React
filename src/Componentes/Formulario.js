import React from "react";
import { useState, Fragment, useRef, useEffect } from "react";
import { IoIosClose } from "react-icons/io";

const Formulario = () => {
	
	const[description, setDescription]= useState("");
	
	const[list, setList]= useState([]);

	const[mensaje, setMensaje]= useState(" ");

	const[isShown, setIsShown] = useState(true);

	const refButton = useRef([]);
	refButton.current = [];

    const addToButtonRef = (el) => {

		if (el && !refButton.current.includes(el)){
			refButton.current.push(el);
		}
	}

	function handleChange(e) {
		setDescription(e.target.value);
	}

	const handleMouseEnter = (indexItem) => {
		console.log(refButton.current[indexItem].target);
			setIsShown(false);
	}

	const handleMouseLeave = (indexItem) => {
		setIsShown(true);
	};

	const agregarTask= ()=>{
		setList([...list, description])
		setDescription("")
		setMensaje("")
	}

	const showMensaje= ()=>{
		setMensaje("Por favor, escriba una tarea")
	}

	const borrarTask = (indexItem)=>{
		const filtro = list.filter((list, index) => index !== indexItem)
		setList(filtro)
	}

	return (
		<Fragment>
			<h2 className="d-flex justify-content-center my-4 text-secondary text-center">TO-DO</h2>
			<div className="posit">
				{list.length === 0 ? <h6> "Sin tareas, agregue una tarea"</h6>: null}
				<br />
			
			<div className="d-flex justify-content-center">
			
				<input
				type="text" 
				placeholder="Escribe tu tarea"
				value={description}
				onChange={handleChange}
				onKeyPress={(event,e) => {
					description!=="" && event.key === 'Enter'? agregarTask(): showMensaje()
				}}
				/>
			</div>
			<span>{mensaje} </span>
				
			<div>
				<br />
				<ul>

					{list.map((item, index) => (
						<li key={"element"+index}>
							<div  
								onMouseEnter={() => handleMouseEnter(index)}
								onMouseLeave={handleMouseLeave}
							>
								{item}
								<button id={"button"+index}
								    ref={addToButtonRef}
									hidden = {isShown}
									onClick={() => borrarTask(index)}>
									<IoIosClose />
								</button>
								
								<hr />
							</div>
						</li>
					))}
				</ul>
				
				<span id="h4">{list.length} tareas creadas</span>
				<br />
			</div>
			</div>
		</Fragment>	

	);

}

export default Formulario;