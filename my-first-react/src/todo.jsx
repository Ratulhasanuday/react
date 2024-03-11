// export default function Todo({task ,isDone}) {

//     return(
//         <li>Task :{task}</li>
//     )
// }
// conditonal rendering option 1
// export default function Todo({task ,isDone}) {
//     if (isDone===true) {
//         return <li>Finished:{task}</li>
//     }
//     else{
//         return <li>Work on: {task}</li>
//     }

//     return(
//         <li>Task :{task}</li>
//     )
// }
// conditonal rendering option 2

// export default function Todo({task ,isDone}) {
//     if (isDone) {
//         return <li>Finished:{task}</li>
//     }
//         return <li>Work on: {task}</li>
// }
// conditonal rendering option 3
// export default function Todo({task ,isDone}) {
//        return <li> {isDone?'Finished':'Work on'}: {task}</li>
//     }
// conditonal rendering option 4&&
// export default function Todo({task ,isDone}) {
//        return(
//          <li> {task}{isDone&&':Done'}</li>
//          )
// }
// conditonal rendering option 5 ||
// export default function Todo({task ,isDone}) {
//        return(
//          <li> {task}{isDone ||':Do it'}</li>
//          )
//     }
// conditonal rendering option 6 
export default function Todo({ task, isDone }) {
    let listItem;
    if (isDone === true) {
        listItem =<li>Finished:{task}</li>
    }
    else{
        listItem=<li>Task :{task}</li>
    }
    return listItem;

}