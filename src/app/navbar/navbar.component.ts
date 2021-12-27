import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import {Usuario} from '../modelos/Usuario';
import {UsuarioService} from '../services/usuario.service';
import { Subscription } from 'rxjs';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore } from 'angularfire2/firestore';
import { ActivatedRoute } from '@angular/router';
import {EstadoDoPitService} from '../services/estado-do-pit.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  posicao1;
  posicao2;
  posicao3;
   posicao4;
  posicao5;
  posicao6;
  posicao7;
  link1;
  link2;
  entrarSair : boolean;
  ArrayEstadoPit=[];

 
  constructor(  private afs : AngularFirestore, public router:Router,private afAuth : AngularFireAuth,public  usuarioService : UsuarioService,public estadoPit : EstadoDoPitService) { }
  
  ngOnInit() {
  

  }
  linkStatusDocumento(){
    this.router.navigate([ '/EstatusDocumento']);
  
  }
  linkQuadroDeAvisos(){
    this.router.navigate([ '/quadroDeAvisos']);
  
  }
  linkEditorQuadroDeAvisos(){
    this.router.navigate([ '/editorQuadroDeAvisos']);
  
  }
  linkTelalistagemPit(){
    this.router.navigate([ '/listagemDePit']);
  }
  linkTelalistagemRad(){
    this.router.navigate([ '/listagemDeRad']);
  }
  linkSair(){
    this.router.navigate([ '/telaloginC']);
  }
  linkSobreNos(){
    this.router.navigate([ '/sobreNosC']);
  }
  toggleSidebar(){
    document.getElementById("sidebar").classList.toggle('active');
  }
  linkTelaDeAcesso(){
    this.router.navigate([ '/telaDeAcesso']);
  }
  linkTelaCadastro(){
    this.router.navigate([ '/telacadastroC']);
  }
  linkTelaAtividade(){
    this.router.navigate([ '/telaAtividades']);
  }
  linkTelaListagemPit(){
    this.router.navigate([ '/listagemC']);
  }
  linkTelaPit(){
    this.router.navigate([ '/telaPit']);
  }
  linkTelaRad(){
    this.router.navigate([ '/TelaSelecaoDoPitParaRad']);
  }
  linkTelaDocumentosAprovados(){
    this.router.navigate([ '/TelaDocumentosAprovados']);
  }
  linkTelaPerfil(){
    this.router.navigate([ '/telaPerfilC']);
  }
  linkComentariosPit(){
    this.router.navigate([ '/comentariosPit']);
  }
  linkComentariosRad(){
    this.router.navigate([ '/comentariosRad']);
  }
  linkTelaEscolhaDoPit(){
    this.router.navigate([ '/escolhaDoPit']);
  }
  linkTelaCadastroDeCursos(){
    this.router.navigate([ '/cadastroDeCursos']);
  }
  linkTelaCadastroDeComponente(){
    this.router.navigate([ '/cadastroDeComponenteCurricular']);
  }



  correcaoPitDirecaoDeEnsino(){
    this.router.navigate([ '/CorrecaoPitDirecaoDeEnsino']);
  }
  correcaoPitCoordenadorDeExtensao(){
    this.router.navigate([ '/CorrecaoPitCoordenacaoDeExtensao']);
  }
  correcaoPitCoordenadorDePesquisa(){
    this.router.navigate([ '/CorrecaoPitCoordenacaoDePesquisa']);
  }
  correcaoRadDirecaoDeEnsino(){
    this.router.navigate([ '/CorrecaoRadDirecaoDeEnsino']);
  }
  correcaoRadCoordenadorDeExtensao(){
    this.router.navigate([ '/CorrecaoRadCoordenacaoDeExtensao']);
  }
  correcaoRadCoordenadorDePesquisa(){
    this.router.navigate([ '/CorrecaoRadCoordenacaoDePesquisa']);
  }




  openSlideMenu(){
    document.getElementById('side-menu').style.width='250px';
    document.getElementById('main').style.marginLeft='250px';
}
closeSlideMenu(){
  document.getElementById('side-menu').style.width = '0px';
  document.getElementById('main').style.marginLeft='0px';
}
//Essa função pega o array de nomes dos components para usar na navbar
async tipoDeUser(){
  

 this.usuarioService.pegarUser();
 
 var a=this.usuarioService.users;
if(a==1){
this.posicao1="Quadro de Avisos";
this.posicao2="Cadastro de Servidores";
this.posicao3="Cadastro de Atividades";
this.posicao4="Cadastro de Cursos"
this.posicao5="Cadastrar Componente Currícular"
}if(a==2){
  this.posicao1="Quadro de Avisos";
  this.posicao2="PIT";
  this.posicao3="RAD"
  this.posicao4="Comentários do Pit"
  this.posicao5="Comentários do Rad"
  this.posicao6="Documentos Aprovados"
  this.posicao7="Status dos Documentos"
}if(a==3){
  this.posicao1="Quadro de Avisos";
  this.posicao2="Plano Individual de Trabalho"
  this.posicao3="Relatório de Atividades Desenvolvidas"
  this.posicao4="Editor de Avisos"
}if(a==4){
  this.posicao1="Quadro de Avisos";
  this.posicao2="Plano Individual de Trabalho "
  this.posicao3="Relatório de Atividades Desenvolvidas "
  this.posicao4="Editor de Avisos"
}if(a==5){
  this.posicao1="Quadro de Avisos";
  this.posicao2="Plano Individual de Trabalho  "
  this.posicao3="Relatório de Atividades Desenvolvidas  "
  this.posicao4="Editor de Avisos"
}if(a==6){
  this.posicao1="Quadro de Avisos";
  this.posicao2="Plano Individual de Trabalho   "
  this.posicao3="Relatório de Atividades Desenvolvidas   "
  this.posicao4="Editor de Avisos"
}
 return a  ;
}

funcao(posicao){
if(posicao=="PIT"){
 
    this.linkTelaEscolhaDoPit()

}if(posicao=="Cadastro de Servidores"){
  this.linkTelaCadastro()
 }if(posicao=="Cadastro de Atividades"){
  this. linkTelaAtividade()
 }if(posicao=="RAD"){
  this.linkTelaRad()
 }if(posicao=="Quadro de Avisos"){
  this.linkQuadroDeAvisos()
}if(posicao=="Plano Individual de Trabalho"){
  this.linkTelalistagemPit()}

if(posicao=="Comentários do Pit"){
  this.linkComentariosPit()}
if(posicao=="Relatório de Atividades Desenvolvidas"){
  this.linkTelalistagemRad()
}if(posicao=="Comentários do Rad"){
  this.linkComentariosRad()
}if(posicao=="Editor de Avisos"){
    this.linkEditorQuadroDeAvisos()
  }if(posicao=="Cadastro de Cursos"){
    this.linkTelaCadastroDeCursos()
  }if(posicao=="Cadastrar Componente Currícular"){
    this.linkTelaCadastroDeComponente()
  }if(posicao=="Documentos Aprovados"){
    this.linkTelaDocumentosAprovados()

  }if(posicao=="Plano Individual de Trabalho "){
    this.correcaoPitDirecaoDeEnsino()
  }if(posicao=="Plano Individual de Trabalho  "){
    this.correcaoPitCoordenadorDePesquisa()
  }if(posicao=="Plano Individual de Trabalho   "){
    this.correcaoPitCoordenadorDeExtensao()
  }if(posicao=="Relatório de Atividades Desenvolvidas "){
    this.correcaoRadDirecaoDeEnsino()
  }if(posicao=="Relatório de Atividades Desenvolvidas  "){
    this.correcaoRadCoordenadorDePesquisa()
  }if(posicao=="Relatório de Atividades Desenvolvidas   "){
    this.correcaoRadCoordenadorDeExtensao()
  }if(posicao=="Status dos Documentos"){
    this.linkStatusDocumento()
  }

  
}}