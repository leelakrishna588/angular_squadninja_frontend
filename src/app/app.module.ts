import { MatFormFieldDefaultOptions } from '@angular/material/form-field';
import { BrowserModule } from '@angular/platform-browser';

// import { NgModule, Component } from '@angular/core';
// import { FormsModule } from '@angular/forms';

import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { HomepageComponent } from './homepage/homepage.component';
import {SignupComponent} from './signup/signup.component';
import {ServiceProviderProfileComponent} from './service-provider-profile/service-provider-profile.component';
import {SocialLoginModule,AuthServiceConfig,GoogleLoginProvider} from 'angularx-social-login';
import { AutogenerateComponent } from './autogenerate/autogenerate.component';
import { MatTabsModule, MatCardModule, MatTabNav, MatTabContent, MatDialogModule} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {IdeaViewComponent} from "./idea-view/idea-view.component"
import {  MatFormFieldModule, MatInputModule, MatOptionModule, MatSelectModule} from '@angular/material';
import { IdeaViewService } from './idea-view.service';


const config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider(
      '1078204311210-1h012vmgmrncursd4tk1jtsgcn7u7s7m.apps.googleusercontent.com'
    )
  }
]);

export function provideConfig() {
  return config;
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomepageComponent,
    AutogenerateComponent,
    IdeaViewComponent,
    SignupComponent,
    ServiceProviderProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    SocialLoginModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatCardModule,
    ReactiveFormsModule,
    MatOptionModule,
    MatSelectModule,
    MatDialogModule,
    MatTabsModule,
    MatInputModule
  ],
  providers: [
    {
      provide: AuthServiceConfig,
      useFactory: provideConfig,
    },
    IdeaViewService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
