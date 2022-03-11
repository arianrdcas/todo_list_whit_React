import React from "react";
import { useState, Fragment } from "react";
import { IoIosClose } from "react-icons/io";

const Formulario = () => {
	
	const[description, setDescription]= useState("");
	
	const[list, setList]= useState([]);

	const[error, setError]= useState("");

	const[fallo, setFallo]= useState("false");

	const [isShown, setIsShown] = useState(false);

	function handleChange(e) {
		setDescription(e.target.value);
	}
	
	const boxRef = React.useRef(null);

	const handleMouseEnter = () => {
		list.item(setIsShown(true))
	};

	const handleMouseLeave = () => {
		setIsShown(false)
	};


	const agregarTask= ()=>{
		//e.preventDefault()
		if(!description.trim()){
			setFallo(true)
			setError('Introduce una tarea')
			return
		}
		setList([...list, description])
		setDescription("")
	}

	const borrarTask = (indexItem)=>{
		const filtro = list.filter((list, index) => index !== indexItem)
		setList(filtro)
	}

	/*return (
		<>
		{list && list.length? (
				" " ) : <h3>"Sin tareas, agregue una tarea"</h3>
		}

		<div className="posit">
    		<form >
				{list.map((item,index) => 
						<div key= {index}>
							<div>{index} </div>
							<input
								type="text"
								className="text"
								placeholder="Que vas a hacer?"
								onChange={(e)=>{setDescription(e.target.value)}}
							/>
							<button
								type="button"
								className="button pink"
								onClick={()=>{borrarTask(index)}} 
							>
								<IoIosClose />
							</button>
						</div>				
					)	
				}
			</form>
			<button 
				onClick={(e)=>{agregarTask(e)}} 
				className="btn btn-info btn-block" type="submit">Add
			</button>
		</div>
		</>
	);*/
	return (
		<Fragment>
			<h2 className="d-flex justify-content-center my-4 text-secondary text-center">TO-DO LIST</h2>
			<div className="posit">
			{
				fallo ?(
					<span>{error}</span>
				) :
				(
					<span></span>
				)
			}
			<div className="d-flex justify-content-center">
			
				<input
				type="text"
				placeholder="Escribe tu tarea"
				onChange={handleChange}
				onKeyPress={(event,e) => {
					if (event.key === 'Enter') {
						agregarTask()
					}
				}}
				value={description}
				/>
			</div>

		
			<div>
				<br />
				
				{list.map((item, index) => (
					<ul>
						<li>
							<div key={index} 
								//onMouseEnter={() => setIsShown(true)}
								//onMouseLeave={() => setIsShown(false)}	
								
								//style={{ backgroundColor: 'red' }}
								ref={boxRef}
								onMouseEnter={handleMouseEnter}
								onMouseLeave={handleMouseLeave}
								>
						

								{item}
								
								{isShown && (
									<button className="button pink" 
										onClick={() => borrarTask(index)}>
											<IoIosClose />
									</button>
								)}
								<hr />
							</div>
						</li>
					</ul>
				))}
				<h6 className="ms-3 text-secondary">{list.length} tareas creadas</h6>
			</div>
			</div>
		</Fragment>	

	);
}

export default Formulario;


