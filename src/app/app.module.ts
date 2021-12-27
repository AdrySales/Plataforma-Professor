import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { TelaLoginComponent } from './tela-login/tela-login.component';
import { TelaCadastroComponent } from './tela-cadastro/tela-cadastro.component';

import { environment } from '../environments/environment';

import {UsuarioService} from './services/usuario.service';
import {AtividadesService} from './services/atividades.service';
import {AulasService} from './services/aulas.service';
import {ApoioAoEnsinoService} from './services/apoio-ao-ensino.service';
import {PesquisaService} from './services/pesquisa.service';
import {ExtensaoService} from './services/extensao.service';
import {AdministrativoService} from './services/administrativo.service';
import {ComentariosService} from './services/comentarios.service'
import {EstadoDoRadService} from './services/estado-do-rad.service'
import { EstadoDoPitService } from './services/estado-do-pit.service';
import {AvisosService} from './services/avisos.service';
import {PeriodoService} from './services/periodo.service';
import {CursosService} from './services/cursos.service';
import {ComponenteCurricularService} from './services/componente-curricular.service'
import {ComentariosRadService} from './services/comentarios-rad.service'


import { TelaSobreNosComponent } from './tela-sobre-nos/tela-sobre-nos.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TelaPitComponent } from './tela-pit/tela-pit.component';
import { TelaRadComponent } from './tela-rad/tela-rad.component';
import { TelaAtividadesComponent } from './tela-atividades/tela-atividades.component';
import { ListagemDeAtividadesComponent } from './listagem-de-atividades/listagem-de-atividades.component';
import { FinalizacaoDeEnvioComponent } from './finalizacao-de-envio/finalizacao-de-envio.component';
import { TelaListagemDePitComponent } from './tela-listagem-de-pit/tela-listagem-de-pit.component';
import { CorrecaoPitComponent } from './correcao-pit/correcao-pit.component';
import { ComentariosPitComponent } from './comentarios-pit/comentarios-pit.component';
import { TelaListagemDeRadComponent } from './tela-listagem-de-rad/tela-listagem-de-rad.component';
import { CorrecaoRadComponent } from './correcao-rad/correcao-rad.component';
import { ComentariosRadComponent } from './comentarios-rad/comentarios-rad.component';
import { QuadroDeAvisosComponent } from './quadro-de-avisos/quadro-de-avisos.component';
import { EditorQuadroDeAvisosComponent } from './editor-quadro-de-avisos/editor-quadro-de-avisos.component';
import { TelaEscolhaDoPeriodoDoPitComponent } from './tela-escolha-do-periodo-do-pit/tela-escolha-do-periodo-do-pit.component';
import { EscolhaDoPitComponent } from './escolha-do-pit/escolha-do-pit.component';
import { TelaCadastroDeCursosComponent } from './tela-cadastro-de-cursos/tela-cadastro-de-cursos.component';
import { TelaCadastroDeComponenteCurricularComponent } from './tela-cadastro-de-componente-curricular/tela-cadastro-de-componente-curricular.component';
import { TelaSelecaoDoPitParaRadComponent } from './tela-selecao-do-pit-para-rad/tela-selecao-do-pit-para-rad.component';
import { TelaDocumentosAprovadosComponent } from './tela-documentos-aprovados/tela-documentos-aprovados.component';
import { ListagemPitAprovadoComponent } from './listagem-pit-aprovado/listagem-pit-aprovado.component';
import { ListagemRadAprovadoComponent } from './listagem-rad-aprovado/listagem-rad-aprovado.component';
import { CorrecaoPitDirecaoDeEnsinoComponent } from './correcao-pit-direcao-de-ensino/correcao-pit-direcao-de-ensino.component';
import { CorrecaoRadDirecaoDeEnsinoComponent } from './correcao-rad-direcao-de-ensino/correcao-rad-direcao-de-ensino.component';
import { CorrecaoPitCoordenacaoDeExtensaoComponent } from './correcao-pit-coordenacao-de-extensao/correcao-pit-coordenacao-de-extensao.component';
import { CorrecaoRadCoordenacaoDeExtensaoComponent } from './correcao-rad-coordenacao-de-extensao/correcao-rad-coordenacao-de-extensao.component';
import { CorrecaoPitCoordenacaoDePesquisaComponent } from './correcao-pit-coordenacao-de-pesquisa/correcao-pit-coordenacao-de-pesquisa.component';
import { CorrecaoRadCoordenacaoDePesquisaComponent } from './correcao-rad-coordenacao-de-pesquisa/correcao-rad-coordenacao-de-pesquisa.component';
import { EstatusDocumentoComponent } from './estatus-documento/estatus-documento.component';

const routes: Routes = [
  {path : 'EstatusDocumento', component : EstatusDocumentoComponent },
  {path : 'CorrecaoRadCoordenacaoDePesquisa', component : CorrecaoRadCoordenacaoDePesquisaComponent },
  {path : 'CorrecaoPitCoordenacaoDePesquisa', component : CorrecaoPitCoordenacaoDePesquisaComponent },
  {path : 'CorrecaoRadCoordenacaoDeExtensao', component : CorrecaoRadCoordenacaoDeExtensaoComponent },
  {path : 'CorrecaoPitCoordenacaoDeExtensao', component : CorrecaoPitCoordenacaoDeExtensaoComponent },
  {path : 'CorrecaoRadDirecaoDeEnsino', component : CorrecaoRadDirecaoDeEnsinoComponent },
  {path : 'CorrecaoPitDirecaoDeEnsino', component : CorrecaoPitDirecaoDeEnsinoComponent },

  {path : 'ListagemRadAprovado', component : ListagemRadAprovadoComponent },
   {path : 'ListagemPitAprovado', component : ListagemPitAprovadoComponent },
  {path : 'TelaDocumentosAprovados', component : TelaDocumentosAprovadosComponent},
  {path : 'TelaSelecaoDoPitParaRad', component : TelaSelecaoDoPitParaRadComponent},
  {path : 'cadastroDeComponenteCurricular', component : TelaCadastroDeComponenteCurricularComponent},
  {path : 'cadastroDeCursos', component : TelaCadastroDeCursosComponent },
   {path : 'escolhaDoPit', component :  EscolhaDoPitComponent },
  {path : 'telaDeEscolhaDoPeriodo', component :  TelaEscolhaDoPeriodoDoPitComponent },
  {path : 'editorQuadroDeAvisos', component :  EditorQuadroDeAvisosComponent },
  {path : 'quadroDeAvisos', component :  QuadroDeAvisosComponent },
  {path : 'comentariosRad', component :  ComentariosRadComponent },
  {path : 'correcaoRad', component :  CorrecaoRadComponent },
  {path : 'listagemDeRad', component :  TelaListagemDeRadComponent },
  {path : 'comentariosPit', component :  ComentariosPitComponent },
  {path : 'correcaoPit', component :  CorrecaoPitComponent },
   {path : 'listagemDePit', component :  TelaListagemDePitComponent },
  {path : 'finalizacao', component :  FinalizacaoDeEnvioComponent },
  {path : 'listagemC', component :  ListagemDeAtividadesComponent},
  {path : 'telaAtividades', component :TelaAtividadesComponent},
  {path : 'telaRad', component :TelaRadComponent},
  {path : 'telaPit', component :TelaPitComponent},
  {path : 'navbarC', component : NavbarComponent},
  {path : 'sobreNosC', component : TelaSobreNosComponent},
  {path : 'telaloginC', component : TelaLoginComponent},
  {path : 'telacadastroC', component : TelaCadastroComponent},
  
  {path: '', redirectTo: '/telaloginC', pathMatch: 'full'}
  
];

@NgModule({
  declarations: [
    AppComponent,
    TelaLoginComponent,
    TelaCadastroComponent,
    TelaSobreNosComponent,
      NavbarComponent,
    TelaPitComponent,
    TelaRadComponent,
    TelaAtividadesComponent,
    ListagemDeAtividadesComponent,
    FinalizacaoDeEnvioComponent,
    TelaListagemDePitComponent,
    CorrecaoPitComponent,
    ComentariosPitComponent,
    TelaListagemDeRadComponent,
    CorrecaoRadComponent,
    ComentariosRadComponent,
    QuadroDeAvisosComponent,
    EditorQuadroDeAvisosComponent,
    TelaEscolhaDoPeriodoDoPitComponent,
    EscolhaDoPitComponent,
    TelaCadastroDeCursosComponent,
    TelaCadastroDeComponenteCurricularComponent,
    TelaSelecaoDoPitParaRadComponent,
    TelaDocumentosAprovadosComponent,
    ListagemPitAprovadoComponent,
    ListagemRadAprovadoComponent,

    CorrecaoPitDirecaoDeEnsinoComponent,
    CorrecaoRadDirecaoDeEnsinoComponent,
    CorrecaoPitCoordenacaoDeExtensaoComponent,
    CorrecaoRadCoordenacaoDeExtensaoComponent,
    CorrecaoPitCoordenacaoDePesquisaComponent,
    CorrecaoRadCoordenacaoDePesquisaComponent,
    EstatusDocumentoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterModule.forRoot(routes), 
    AngularFireModule.initializeApp(environment.firebase ,'angularfs'),
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [UsuarioService, AtividadesService,AulasService,ApoioAoEnsinoService,PesquisaService,ExtensaoService,AdministrativoService,EstadoDoPitService,ComentariosService,EstadoDoRadService,AvisosService,PeriodoService,CursosService,ComponenteCurricularService,ComentariosRadService],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule { }
