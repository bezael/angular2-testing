import { Component } from '@angular/core';

@Component({
  selector: 'user',
  template: `
  		<h1>Hello {{name}}</h1>
		<p>{{email}}</p>
		<p>{{address.street}} {{address.city}} {{address.state}} </p>
	`,
})
export class AppComponent  { 
	name = 'Johon Doe';
	email = 'johndoe@gmail.com',
	address = {
		street: '12 Main st',
		city: 'Boston',
		state: 'MA'
	} 
}
