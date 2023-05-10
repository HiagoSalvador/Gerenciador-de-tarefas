const addButton = document.getElementById('to-add');//queryselector
addButton.addEventListener('click', adicionarTarefa);

function adicionarTarefa() {
  const inputMain = document.querySelector('#input-main');

  
  const textoTarefa = inputMain.value;

  
  const novaTarefa = document.createElement('li');
  novaTarefa.classList.add('task-item');

  
  const botaoExclusao = document.createElement('button');
  botaoExclusao.classList.add('button-delete');
  botaoExclusao.addEventListener('click', () => {
    novaTarefa.remove();
  });

  const iconeExclusao = document.createElement('i');
  iconeExclusao.classList.add('fa-solid', 'fa-trash');
  botaoExclusao.appendChild(iconeExclusao);

  
  const textoTarefaElemento = document.createElement('p');
  textoTarefaElemento.innerText = textoTarefa;

  
  const iconeFoguete = document.createElement('i');
  iconeFoguete.classList.add('fa-solid', 'fa-rocket');
  const botaoFoguete = document.createElement('button');
  botaoFoguete.classList.add('button-rocket');
  botaoFoguete.appendChild(iconeFoguete);
  
  
  botaoFoguete.addEventListener('click', () => {
    novaTarefa.classList.add('task-item--done');
  });


  novaTarefa.appendChild(botaoExclusao);
  novaTarefa.appendChild(botaoFoguete);
  novaTarefa.appendChild(textoTarefaElemento);

  const listaTarefas = document.querySelector('#tasks');
  listaTarefas.appendChild(novaTarefa);


  inputMain.value = '';

  setTimeout(() => {
    novaTarefa.remove();
  }, 86400000);
}