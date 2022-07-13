import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCardModule } from '@angular/material/card';

import { HomeComponent } from './pages/home/home.component';
import { GettingStartedComponent } from './pages/gettingstarted/gettingstarted.component';

import { HttpClientModule } from '@angular/common/http';
import { NgxAudioPlayerModule } from 'projects/ngx-audio-player/src/public_api';
import { MatButtonModule } from '@angular/material/button';

import {NavBarModule} from './shared/navbar';
import {FooterModule} from './shared/footer';
import { RegisterComponent } from './form-login/register/register.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { LoginComponent } from './form-login/login/login.component';
import {MatNativeDateModule} from '@angular/material/core';
import { UserAccountComponent } from './form-login/user-account/user-account.component';
import { ChangePasswordComponent } from './form-login/manage-profile/change-password/change-password.component';
import {AngularFireStorageModule} from '@angular/fire/storage';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../environments/environment.prod';
import { UploadAvatarComponent } from './upload/upload-avatar/upload-avatar.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { UploadFileComponent } from './upload/upload-file/upload-file.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { ChangeAvatarComponent } from './form-login/manage-profile/change-avatar/change-avatar.component';
import {httpInterceptorProviders} from './security/auth.interceptor';
import { ChangeProfileComponent } from './form-login/manage-profile/change-profile/change-profile.component';
import { PageUserComponent } from './form-login/admin-manage/page-user/page-user.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import { CreateCategoryComponent } from './content/categoryManager/create-category/create-category.component';
import { PageCategoryComponent } from './content/categoryManager/page-category/page-category.component';
import {Ng2SearchPipeModule} from 'ng2-search-filter';
import { UpdateCategoryComponent } from './content/categoryManager/update-category/update-category.component';
import { DeleteCategoryComponent } from './content/categoryManager/delete-category/delete-category.component';
import { DeleteUserComponent } from './form-login/admin-manage/delete-user/delete-user.component';
import { CreateProductComponent } from './content/productManager/create-product/create-product.component';
import {MatSelectModule} from '@angular/material/select';
import { PageProductComponent } from './content/productManager/page-product/page-product.component';
import { DeleteProductComponent } from './content/productManager/delete-product/delete-product.component';
import { UpdateProductComponent } from './content/productManager/update-product/update-product.component';
import { PageCompanyComponent } from './content/companyManager/page-company/page-company.component';
import { CreateCompanyComponent } from './content/companyManager/create-company/create-company.component';
import { PageTourComponent } from './content/tourManager/page-tour/page-tour.component';
import { CreateTourComponent } from './content/tourManager/create-tour/create-tour.component';
import { DeleteTourComponent } from './content/tourManager/delete-tour/delete-tour.component';
import { EditTourComponent } from './content/tourManager/edit-tour/edit-tour.component';
// import {AngularFireAuthGuard} from '@angular/fire/auth-guard';


export const appRoutes: Routes = [
  { path: '', component: HomeComponent, data: { title: 'Home' } },
  { path: 'register', component: RegisterComponent, data: {title: 'Register'}},
  { path: 'login', component: LoginComponent, data: {title: 'Login'}},
  { path: 'user-account', component: UserAccountComponent, data: {title: 'User-Account'}},
  {path: 'change-password', component: ChangePasswordComponent, data: {title: 'Change-Password'}},
  {path:'change-avatar',component:ChangeAvatarComponent,data: {title: 'Change-Avatar'}},
  {path:'change-profile',component:ChangeProfileComponent,data:{title: 'Change-Profile'}},
  {path:'page-user',component:PageUserComponent,data:{title: 'Page-User'}},
  {path:'create-category',component:CreateCategoryComponent,data:{title: 'Create-Category'}},
  {path:'page-category',component:PageCategoryComponent,data:{title: 'Page-Category'}},
  {path:'update-category/:id',component:UpdateCategoryComponent,data:{title: 'Update-Category'}},
  {path:'delete-category/:id',component:DeleteCategoryComponent,data:{title: 'Delete-Category'}},
  {path:'delete-user/:id',component:DeleteUserComponent,data:{title: 'Delete-User'}},
  {path:'create-product',component:CreateProductComponent,data:{title: 'Create-Product'}},
  {path:'page-product',component:PageProductComponent,data:{title: 'Page-Product'}},
  {path:'delete-product/:id',component:DeleteProductComponent,data:{title: 'Delete-Product'}},
  {path:'update-product/:id',component:UpdateProductComponent,data:{title: 'Update-Product'}},
  {path:'page-company',component:PageCompanyComponent,data:{title: 'Page-Company'}},
  {path:'create-company',component:CreateCompanyComponent,data:{title: 'Create-Company'}},

  {path:'create-tour',component:CreateTourComponent,data:{title: 'Create-Tour'}},
  {path:'delete-tour/:id',component:DeleteTourComponent,data:{title: 'Delete-Tour'}},
  {path:'page-tour',component:PageTourComponent,data:{title: 'Page-Tour'}},
  {path:'edit-tour/:id',component:EditTourComponent,data:{title: 'Update-Tour'}},

  { path: 'guide/getting-started',
    component: GettingStartedComponent,
    data: { title: 'Getting Started' }
  }
];

@NgModule({
  declarations: [AppComponent, HomeComponent, GettingStartedComponent, RegisterComponent, LoginComponent, UserAccountComponent, ChangePasswordComponent, UploadAvatarComponent, UploadFileComponent, ChangeAvatarComponent, ChangeProfileComponent, PageUserComponent, CreateCategoryComponent, PageCategoryComponent, UpdateCategoryComponent, DeleteCategoryComponent, DeleteUserComponent, CreateProductComponent, PageProductComponent, DeleteProductComponent, UpdateProductComponent, PageCompanyComponent, CreateCompanyComponent, PageTourComponent, CreateTourComponent, DeleteTourComponent, EditTourComponent],
  imports: [
    FormsModule,
    MatNativeDateModule,
    HttpClientModule,
    BrowserModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatInputModule,
    MatRadioModule,
    MatCheckboxModule,
    MatSlideToggleModule,
    MatButtonModule,
    BrowserAnimationsModule,
    AngularFireStorageModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    NavBarModule, FooterModule,
    NgxAudioPlayerModule,
    RouterModule.forRoot(appRoutes, {useHash: false}), MatFormFieldModule, FormsModule, ReactiveFormsModule, MatProgressSpinnerModule, MatProgressBarModule, MatPaginatorModule, Ng2SearchPipeModule, MatSelectModule
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule {

}
