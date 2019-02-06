import { Routes, RouterModule } from '@angular/router';
import { ProblemListComponent } from './components/problem-list/problem-list.component';
import { ProblemDetailComponent } from './components/problem-detail/problem-detail.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NewProblemComponent } from './components/new-problem/new-problem.component';
const routes: Routes = [
/*{
	path: '',
	redirectTo: 'problems',
	pathMatch: 'full'
},*/
{
	path: '',
	component: ProblemListComponent,
	children:[
	{
		path: 'problems',
		component: ProblemListComponent
	},
	{
		path: 'contribute',
		component: NewProblemComponent
	}]
},
/*{
	path: 'problems',
	component: ProblemListComponent
},*/
{
	path: 'problems/:id',
	component: ProblemDetailComponent
},
{
	path: '**',
	redirectTo: 'problems'
}

];

export const routing = RouterModule.forRoot(routes);
