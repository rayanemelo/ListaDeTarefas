(() => {
  //NEW ITEM
  const criarItem = (evento) => {

    evento.preventDefault();

    const lista = document.querySelector('[data-list]');
    const input = document.querySelector('[data-form-input]').value;

    const tarefa = document.createElement('li');
    tarefa.classList.add('task');

    const conteudo = `<p class="content">${input}</p>`;

    tarefa.innerHTML = conteudo;
    tarefa.appendChild(btnConcluido());
    tarefa.appendChild(BotãoDeletar());
    lista.appendChild(tarefa);

  }

  var novoItem = document.querySelector('[data-form-button]').addEventListener('click', criarItem);

  //COMPLETED 
  const btnConcluido = () => {

    const btnConcluido = document.createElement("button");
    btnConcluido.classList.add('check-button');
    btnConcluido.innerText = 'concluido';
    btnConcluido.addEventListener('click', concluirTarefa);
    return btnConcluido;

  }

  const concluirTarefa = (evento) => {

    const btnConclui = evento.target;
    const tarefaCompleta = btnConclui.parentElement;
    tarefaCompleta.classList.toggle('done');

  }

  //DELETE
  const BotãoDeletar = () => {

    const btnDeletar = document.createElement("button");
    btnDeletar.innerText = 'deletar';
    btnDeletar.addEventListener('click', deletarTarefa);
    return btnDeletar;

  }

  const deletarTarefa = (evento) => {

    const btnDeletar = evento.target;
    const tarefaCompleta = btnDeletar.parentElement;
    tarefaCompleta.remove();
    return btnDeletar;

  }

})();