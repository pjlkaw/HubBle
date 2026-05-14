import { themeFunction } from '../functions/themeFunction.js'
themeFunction(false, true) 

let noteID = []

const workspaceSection = document.getElementById('workspace')
function workspace() {
    addNote()
    

} workspace()

function addNote() {
    let noteIndex = 0
    document.getElementById('addNote').addEventListener('click', ()=>{
        noteIndex++

        // cria nota
        const createNote = document.createElement('div');
        createNote.classList.add('note');
        
        createNote.innerHTML = `            
            <div class="noteHead">
                <p id="noteTittle${noteIndex}">Nota ${noteIndex}</p>
            </div>
            <div id="note${noteIndex}" class="noteBody">
                <p id="noteContent${noteIndex}">Conteúdo da nota 1a</p>
            </div>
        `;
        workspaceSection.appendChild(createNote) 
        
        // envia o ID da nota
        noteID.push('note'+noteIndex)
        console.log(noteID);
        
        // ao clique da nota criada
        createNote.addEventListener('click', () => {
            document.getElementById('modal').style.display = "flex"
            

        })
    })
}