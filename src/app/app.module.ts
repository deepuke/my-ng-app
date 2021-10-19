import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StorageService } from './services/storage.service';
import { TruncatePipe } from './pipes/truncate.pipe';
import { UserComponent } from './user/user.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { ThirdComponent } from './third/third.component';
import { FourthComponent } from './fourth/fourth.component';
import { NotfoundComponent } from './notfound/notfound.component';

//declarative
@NgModule({
  declarations: [
    AppComponent,
    TruncatePipe,
    UserComponent,
    FirstComponent,
    SecondComponent,
    ThirdComponent,
    FourthComponent,
    NotfoundComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [StorageService],

  bootstrap: [AppComponent],
})
export class AppModule {}
