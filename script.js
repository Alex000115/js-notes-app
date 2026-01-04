const list = document.getElementById('list');
const note = document.getElementById('note');

function load(){
  const notes = JSON.parse(localStorage.getItem('notes') || '[]');
  list.innerHTML = '';
  notes.forEach((n,i)=>{
    const li = document.createElement('li');
    li.innerText = n;
    li.onclick = ()=> remove(i);
    list.appendChild(li);
  });
}

function save(){
  if(!note.value) return;
  const notes = JSON.parse(localStorage.getItem('notes') || '[]');
  notes.push(note.value);
  localStorage.setItem('notes', JSON.stringify(notes));
  note.value = '';
  load();
}

function remove(i){
  const notes = JSON.parse(localStorage.getItem('notes'));
  notes.splice(i,1);
  localStorage.setItem('notes', JSON.stringify(notes));
  load();
}

load();
