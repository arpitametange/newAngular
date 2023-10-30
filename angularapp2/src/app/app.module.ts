import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { testComponent } from './test/test.component';
import { Test2Component } from './test2/test2.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DatabindingComponent } from './databinding/databinding.component';
import { PasswordComponent } from './password/password.component';
import { PracticeComponent } from './child/practice.component';
import { Pra2Component } from './pra2/pra2.component';
import { NgforComponent } from './ngfor/ngfor.component';
import { NgIfComponent } from './ng-if/ng-if.component';
import { NgFor2Component } from './ng-for2/ng-for2.component';
import { NgForAssiComponent } from './ng-for-assi/ng-for-assi.component';
import { AttributeDirectiveComponent } from './attribute-directive/attribute-directive.component';
import { CustomDirectiveDirective } from './custom-directive.directive';
import { Practice2Component } from './practice2/practice2.component';
import { C1Component } from './c1/c1.component';
import { C2Component } from './c2/c2.component';
import { TemplateformsComponent } from './templateforms/templateforms.component';
import { TemplateForm2Component } from './template-form2/template-form2.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { HttpClientModule } from '@angular/common/http';
import { PostComponent } from './post/post.component';
import { TodoComponent } from './todo/todo.component';
import { Todo2Component } from './todo2/todo2.component';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { Comp4Component } from './comp4/comp4.component';
import { Comp3Component } from './comp3/comp3.component';
import { LoginComponent } from './login/login.component';
import { PagenotfounComponent } from './pagenotfoun/pagenotfoun.component';
import { HomeComponent } from './home/home.component';
import { PropertydeocratorComponent } from './propertydeocrator/propertydeocrator.component';
import { Propertydecorator2Component } from './propertydecorator2/propertydecorator2.component';
import { CustomDirective2Directive } from './custom-directive2.directive';
import { FormpracticeComponent } from './formpractice/formpractice.component';
import { FirstcomComponent } from './firstcom/firstcom.component';
import { SecondComponent } from './second/second.component';
import { PracticereactiveComponent } from './practicereactive/practicereactive.component';
import { PostlistComponent } from './postlist/postlist.component';
import { PostdetailsComponent } from './postdetails/postdetails.component';
import { FilterPipe } from './pipe/filter.pipe';
import { PipeComponent } from './pipe/pipe.component';
import { HooksComponent } from './hooks/hooks.component';
import { AddcardbucketComponent } from './home/addcardbucket/addcardbucket.component';

@NgModule({
  declarations: [
    AppComponent,
    testComponent,
    Test2Component,
    DatabindingComponent,
    PasswordComponent,
    PracticeComponent,
    Pra2Component,
    NgforComponent,
    NgIfComponent,
    NgFor2Component,
    NgForAssiComponent,
    AttributeDirectiveComponent,
    CustomDirectiveDirective,
    Practice2Component,
    C1Component,
    C2Component,
    TemplateformsComponent,
    TemplateForm2Component,
    ReactiveFormComponent,
    PostComponent,
    TodoComponent,
    Todo2Component,
    Comp1Component,
    Comp2Component,
    Comp4Component,
    Comp3Component,
    
    LoginComponent,
    PagenotfounComponent,
    HomeComponent,
    
    PropertydeocratorComponent,
    Propertydecorator2Component,
    CustomDirective2Directive,
    FormpracticeComponent,
    FirstcomComponent,
    SecondComponent,
    PracticereactiveComponent,
    PostlistComponent,
    PostdetailsComponent,
    FilterPipe,
    PipeComponent,
    HooksComponent,
    AddcardbucketComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
