import { Name } from "./Object.types"

type PeopleListProps = {
    names:Name[];
  };
  
  function ArrayList(props: PeopleListProps) {
    return (
      <div>
            {props.names.map((list,i) =>{
                return(
                    <h2 key={i}>{list.Fname} {list.Lname}</h2>
                )
            })}
      </div>
    );
  }
  
  export default ArrayList;
  