import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyComponent } from './components/company/company.component';
import { CompanyListComponent } from './components/companyList/companyList.component';

const routes: Routes = [
    { path: '', redirectTo: 'companylist', pathMatch: 'full' },
    { path: 'companydetails', component: CompanyComponent },
    { path: 'companylist', component: CompanyListComponent },
    
];
@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule]
})
export class AppRoutingModule { }