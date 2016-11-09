import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

// import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
// import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent } from './app.component';
import { RolesComponent } from './roles/roles.component';
import { ActionsComponent } from './actions/actions.component';

import { RoleService } from './roles/roles.service';
import { ActionService } from './actions/actions.service';

@NgModule({
	imports: [
		FormsModule,
		BrowserModule,
		RouterModule.forRoot([
			{ path: '', redirectTo: '/roles', pathMatch: 'full' },
			{ path: 'roles', component: RolesComponent },
			{ path: 'actions', component: ActionsComponent }
		]),
		HttpModule//,
		//InMemoryWebApiModule.forRoot(InMemoryDataService)
	],

	declarations: [AppComponent, RolesComponent, ActionsComponent],
	providers: [RoleService, ActionService],
	bootstrap: [AppComponent]
})
export class AppModule { }
