import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NguiInViewComponent } from './ngui-in-view.component';
import { GeneratorComponent } from './generator/generator.component';
import { HeaderComponent } from './header/header.component';
import { ImageTextComponent } from './image-text/image-text.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, NguiInViewComponent, GeneratorComponent, HeaderComponent, ImageTextComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
