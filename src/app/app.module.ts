import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { Camera } from '@ionic-native/camera/ngx';
import { File } from '@ionic-native/File/ngx';
import { AuthentService } from './services/authent.service';
import { AuthGuardService } from './services/auth-guard.service';
import { FilePath } from '@ionic-native/file-path/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx'; 
import { TokenInterceptorService } from './services/token-interceptor.service';

// import { IonicStorageModule } from '@ionic/storage';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(),HttpClientModule, 
    AppRoutingModule,FormsModule, BrowserModule,
    // BrowserAnimationsModule,
    ReactiveFormsModule],
  providers: [
   AuthGuardService,
   AuthentService,
    StatusBar,
    Camera,
    File,
    FilePath,
    SplashScreen,
    { provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true},
    Geolocation
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
