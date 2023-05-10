import { Injectable } from '@angular/core';

interface Tasks {
  name: String;
  day: string;
  hour: string;
}

@Injectable()
export class TaskService {
  list: Array<Tasks> = [
    {
      name: "Projeto de Encontrabilidade",
      day: "Segunda-feira",
      hour: "19h - 22h30",
    },
    {
      name: "Banco de Dados II",
      day: "Quarta-feira",
      hour: "9h30 - 13h",
    },
    {
      name: "Tópicos Especiais II",
      day: "Sexta-feira",
      hour: "19h - 22h30",
    },
    {
      name: "Desenvolvimento para Servidores II",
      day: "Quinta-feira",
      hour: "19h - 22h30",
    },
    {
      name: "TCC II",
      day: "Sexta-feira",
      hour: "21h - 22h30",
    },
    {
      name: "TCC I",
      day: "Sábado",
      hour: "11h30 - 13h",
    },
  ];

  constructor() {}

  add(name: string, day: string, hour:string, ) {
    this.list.push({ name, day, hour });
  }

  remove(index: number) {
    this.list.splice(index, 1);
  }
  
  getList() {
    return this.list;
  }
}