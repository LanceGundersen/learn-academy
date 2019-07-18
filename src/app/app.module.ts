import { HttpClientModule } from '@angular/common/http'
import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { StoreModule } from '@ngrx/store'
import { EffectsModule } from '@ngrx/effects'
import { StoreDevtoolsModule } from '@ngrx/store-devtools'
import { UserReducer } from './store/user.reducer'
import { UserEffects } from './store/user.effects'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { DashboardComponent } from './dashboard/dashboard.component'
import { CourseComponent } from './course/course.component'
import { SettingsComponent } from './settings/settings.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { FlexLayoutModule } from '@angular/flex-layout'

import {
  MatCardModule,
  MatToolbarModule,
  MatButtonModule,
  MatInputModule,
  MatMenuModule,
  MatSidenavModule,
  MatListModule,
  MatGridListModule,
  MatIconModule,
  MatProgressBarModule,
} from '@angular/material'
import { ToolbarComponent } from './toolbar/toolbar.component'
import { environment } from 'src/environments/environment'
import { UsersTableComponent } from './users-table/users-table.component'

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CourseComponent,
    SettingsComponent,
    ToolbarComponent,
    UsersTableComponent,
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({
      applicationState: UserReducer,
    }),
    EffectsModule.forRoot([UserEffects]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    HttpClientModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatProgressBarModule,
    MatSidenavModule,
    MatToolbarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
