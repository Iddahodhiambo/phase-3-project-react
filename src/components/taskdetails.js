function Taskdetails({title,description,due_date,completiom_status}){
    return(
        <div>
        
            
            <p>{title}</p>
            <p>{description}</p>
            <p>{due_date}</p>
            <p>{completiom_status}</p>
            </div>
        
    )
    
 }
 export default Taskdetails;
